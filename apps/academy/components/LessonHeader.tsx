import React from 'react';

interface LessonHeaderProps {
  lessonId?: string;
}

const LessonHeader: React.FC<LessonHeaderProps> = ({ lessonId }) => (
  <header className="mb-6">
    <h1 className="text-3xl font-bold">Lesson: {lessonId}</h1>
    {/* TODO: Add lesson metadata */}
  </header>
);

export default LessonHeader;
