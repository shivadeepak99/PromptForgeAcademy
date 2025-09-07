import React from 'react';

interface ModuleSidebarProps {
  modules?: Array<{ id: string; title: string }>;
}

const ModuleSidebar: React.FC<ModuleSidebarProps> = ({ modules = [] }) => (
  <aside className="w-64 bg-white border-r p-4">
    <h3 className="font-bold mb-2">Modules</h3>
    <ul>
      {modules.length === 0 && <li className="text-gray-400">No modules</li>}
      {modules.map((mod) => (
        <li key={mod.id}>
          <a href={`/module/${mod.id}`} className="text-blue-600 hover:underline">{mod.title}</a>
        </li>
      ))}
    </ul>
  </aside>
);

export default ModuleSidebar;
