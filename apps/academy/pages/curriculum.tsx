import React, { useEffect, useState } from 'react';
import AppShell from '../components/AppShell';
import ModuleSidebar from '../components/ModuleSidebar';
import { fetchAcademy } from '../utils/api';

export default function Curriculum() {
  const [modules, setModules] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAcademy('/curriculum')
      .then(data => {
        setModules(data.modules || []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load curriculum');
        setLoading(false);
      });
  }, []);

  return (
    <AppShell>
      <div className="flex">
        <ModuleSidebar modules={modules} />
        <main className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-4">Curriculum Modules</h2>
          {loading && <div>Loading...</div>}
          {error && <div className="text-red-500">{error}</div>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((mod) => (
              <div key={mod.id} className="border rounded p-4 bg-white shadow">
                <h3 className="font-bold text-lg mb-2">{mod.title}</h3>
                <p className="mb-2">{mod.description}</p>
                <a href={`/module/${mod.id}`} className="text-blue-600 hover:underline">View Module</a>
              </div>
            ))}
          </div>
        </main>
      </div>
    </AppShell>
  );
}
