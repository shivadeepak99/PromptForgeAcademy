import React from 'react';

const QuizBlock: React.FC<{ question: string; options: string[]; onAnswer: (idx: number) => void }> = ({ question, options, onAnswer }) => (
  <div className="mb-4">
    <h4 className="font-semibold mb-2">{question}</h4>
    <ul>
      {options.map((opt, i) => (
        <li key={i}>
          <button className="border px-2 py-1 rounded" onClick={() => onAnswer(i)}>{opt}</button>
        </li>
      ))}
    </ul>
  </div>
);

export default QuizBlock;
