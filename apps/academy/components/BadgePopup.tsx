import React from 'react';

const BadgePopup: React.FC<{ badge: string; onClose: () => void }> = ({ badge, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded shadow-lg">
      <h3 className="text-xl font-bold mb-2">Badge Earned!</h3>
      <p className="mb-4">{badge}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={onClose}>Close</button>
    </div>
  </div>
);

export default BadgePopup;
