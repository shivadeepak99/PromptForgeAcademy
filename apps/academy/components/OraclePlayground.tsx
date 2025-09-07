import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import ExplainerBlock from './ExplainerBlock';

const OraclePlayground: React.FC<{ labId: string }> = ({ labId }) => {
  const [input, setInput] = useState('Write a prompt for a chatbot that helps students.');
  const [role, setRole] = useState('user');
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(256);
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleForge = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/academy/labs/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input, role, temperature, max_tokens: maxTokens, labId })
      });
      if (!res.ok) throw new Error('Forge failed');
      const data = await res.json();
      setOutput(data.output || 'Sample output: This is a demo response.');
    } catch (e) {
      setError('Service unavailable. Showing sample output.');
      setOutput('Sample output: This is a demo response.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-xl mx-auto">
      <ExplainerBlock text="Test your prompt ideas in the Oracle Playground." />
      <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full border p-2 mb-2" rows={3} />
      <div className="flex gap-2 mb-2">
        <select value={role} onChange={e => setRole(e.target.value)} className="border p-1">
          <option value="user">User</option>
          <option value="system">System</option>
        </select>
        <input type="number" value={temperature} min={0} max={2} step={0.1} onChange={e => setTemperature(Number(e.target.value))} className="border p-1 w-24" placeholder="Temperature" />
        <input type="number" value={maxTokens} min={1} max={2048} onChange={e => setMaxTokens(Number(e.target.value))} className="border p-1 w-24" placeholder="Max Tokens" />
      </div>
      <button onClick={handleForge} className="bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>
        {loading ? 'Forging...' : 'Forge It!'}
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {output && <div className="bg-gray-100 p-2 mt-4 rounded">{output}</div>}
    </div>
  );
};

export default dynamic(() => Promise.resolve(OraclePlayground), { ssr: false });
