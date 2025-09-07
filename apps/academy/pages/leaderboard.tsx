import React, { useEffect, useState } from 'react';
import AppShell from '../components/AppShell';
import { fetchAcademy } from '../utils/api';

export default function Leaderboard() {
  const [leaders, setLeaders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAcademy('/leaderboard').then(data => {
      setLeaders(data.leaderboard || []);
      setLoading(false);
    }).catch(() => {
      setError('Failed to load leaderboard');
      setLoading(false);
    });
  }, []);

  return (
    <AppShell>
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
        {loading && <div>Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">User</th>
              <th className="py-2 px-4 border-b">XP</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((row, i) => (
              <tr key={row.userId || i}>
                <td className="py-2 px-4 border-b">{row.userId}</td>
                <td className="py-2 px-4 border-b">{row.xp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </AppShell>
  );
}
