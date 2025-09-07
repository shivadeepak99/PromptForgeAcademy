import React from 'react';
import AppShell from '../../components/AppShell';
import OraclePlayground from '../../components/OraclePlayground';
import { useRouter } from 'next/router';

export default function LabPage() {
  const router = useRouter();
  const { labId } = router.query;

  return (
    <AppShell>
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">Lab: {labId}</h2>
        <OraclePlayground labId={labId as string} />
      </main>
    </AppShell>
  );
}
