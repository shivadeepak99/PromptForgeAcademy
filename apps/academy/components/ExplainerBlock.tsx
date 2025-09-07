import React from 'react';

const ExplainerBlock: React.FC<{ text: string }> = ({ text }) => (
  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
    <p>{text}</p>
  </div>
);

export default ExplainerBlock;
