import React, { useEffect, useState } from 'react';
import AppShell from '../../components/AppShell';
import LessonHeader from '../../components/LessonHeader';
import { useRouter } from 'next/router';
import { fetchAcademy } from '../../utils/api';

export default function LessonPage() {
  const router = useRouter();
  const { lessonId } = router.query;
  const [lesson, setLesson] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!lessonId) return;
    fetchAcademy(`/lesson/${lessonId}`).then(data => {
      setLesson(data);
      setLoading(false);
    }).catch(() => {
      setError('Failed to load lesson');
      setLoading(false);
    });
  }, [lessonId]);

  return (
    <AppShell>
      <LessonHeader lessonId={Array.isArray(lessonId) ? lessonId[0] : lessonId} />
      <div className="prose max-w-3xl mx-auto">
        {loading && <p>Loading lesson...</p>}
        {error && <div className="text-red-500">{error}</div>}
        {lesson && (
          <>
            <h2 className="text-xl font-bold mb-2">{lesson.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: lesson.html || '' }} />
          </>
        )}
      </div>
    </AppShell>
  );
}
