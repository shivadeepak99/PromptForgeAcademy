import React from 'react';

const ExamplePrompts: React.FC<{ prompts: string[] }> = ({ prompts }) => (
  <div className="mb-4">
    <h4 className="font-semibold mb-2">Example Prompts</h4>
    <ul className="list-disc pl-6">
      {prompts.map((p, i) => <li key={i}>{p}</li>)}
    </ul>
  </div>
);

export default ExamplePrompts;
