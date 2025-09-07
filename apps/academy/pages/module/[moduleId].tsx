import React, { useEffect, useState } from 'react';
import AppShell from '../../components/AppShell';
import { useRouter } from 'next/router';
import { fetchAcademy } from '../../utils/api';

export default function ModulePage() {
  const router = useRouter();
  const { moduleId } = router.query;
  const [module, setModule] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!moduleId) return;
    fetchAcademy(`/curriculum`).then(data => {
      const mod = (data.modules || []).find((m: any) => m.id === moduleId);
      setModule(mod);
      setLoading(false);
    }).catch(() => {
      setError('Failed to load module');
      setLoading(false);
    });
  }, [moduleId]);

  return (
    <AppShell>
      <main className="p-8">
        {loading && <div>Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {module && (
          <>
            <h2 className="text-2xl font-bold mb-4">{module.title}</h2>
            <p className="mb-4">{module.description}</p>
            <h3 className="font-bold mb-2">Lessons</h3>
            <ul className="list-disc pl-6">
              {(module.lessons || []).map((lesson: any) => (
                <li key={lesson.id}>
                  <a href={`/lesson/${lesson.id}`} className="text-blue-600 hover:underline">{lesson.title}</a>
                </li>
              ))}
            </ul>
          </>
        )}
      </main>
    </AppShell>
  );
}
