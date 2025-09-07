import AppShell from '../../components/AppShell';
import fs from 'fs';
import path from 'path';

export default function ContentValidator() {
  // TODO: Read MDX files and flag missing frontmatter keys
  return (
    <AppShell>
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">Content Validator</h2>
        {/* TODO: List MDX files and validation results */}
      </main>
    </AppShell>
  );
}
