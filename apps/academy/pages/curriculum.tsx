import AppShell from '../components/AppShell';
import ModuleSidebar from '../components/ModuleSidebar';

export default function Curriculum() {
  return (
    <AppShell>
      <div className="flex">
        <ModuleSidebar />
        <main className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-4">Curriculum Modules</h2>
          {/* TODO: Render modules grid */}
        </main>
      </div>
    </AppShell>
  );
}
