import React, { useEffect, useState } from 'react';
import AppShell from '../components/AppShell';
import { fetchAcademy } from '../utils/api';

export default function Quests() {
  const [quests, setQuests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAcademy('/curriculum').then(data => {
      // Flatten all quests from all modules
      const allQuests = (data.modules || []).flatMap((mod: any) => mod.quests || []);
      setQuests(allQuests);
      setLoading(false);
    }).catch(() => {
      setError('Failed to load quests');
      setLoading(false);
    });
  }, []);

  return (
    <AppShell>
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">Quests</h2>
        {loading && <div>Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quests.map((quest) => (
            <div key={quest.id} className="border rounded p-4 bg-white shadow">
              <h3 className="font-bold mb-2">{quest.title}</h3>
              <p>{quest.description}</p>
              <a href={`/quest/${quest.id}`} className="text-blue-600 hover:underline">View Quest</a>
            </div>
          ))}
        </div>
      </main>
    </AppShell>
  );
}
