import AppShell from '../components/AppShell';
import QuestCard from '../components/QuestCard';

export default function Quests() {
  return (
    <AppShell>
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">Quests</h2>
        {/* TODO: Render quests list */}
        <QuestCard />
      </main>
    </AppShell>
  );
}
