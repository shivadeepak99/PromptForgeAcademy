import AppShell from '../components/AppShell';
import Link from 'next/link';

export default function Home() {
  return (
    <AppShell>
      <main className="flex flex-col items-center justify-center min-h-screen py-12">
        <h1 className="text-4xl font-bold mb-4">PromptForge Academy</h1>
        <p className="mb-6 text-lg">Master prompt engineering with hands-on curriculum and labs.</p>
        <Link href="/curriculum" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Explore Curriculum</Link>
      </main>
    </AppShell>
  );
}
