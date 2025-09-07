import { render, screen } from '@testing-library/react';
import LessonHeader from '../components/LessonHeader';

describe('LessonHeader', () => {
  it('renders lessonId', () => {
    render(<LessonHeader lessonId="test-lesson" />);
    expect(screen.getByText(/Lesson: test-lesson/)).toBeInTheDocument();
  });
});
