import React from 'react';

const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-gray-50">
    {/* TODO: Add header/nav */}
    {children}
  </div>
);

export default AppShell;
