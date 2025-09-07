import AppShell from '../../components/AppShell';
import { useRouter } from 'next/router';

export default function ModulePage() {
  const router = useRouter();
  const { moduleId } = router.query;

  return (
    <AppShell>
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">Module: {moduleId}</h2>
        {/* TODO: Render module details */}
      </main>
    </AppShell>
  );
}
