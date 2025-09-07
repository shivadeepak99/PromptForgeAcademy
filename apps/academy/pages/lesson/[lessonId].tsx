import AppShell from '../../components/AppShell';
import LessonHeader from '../../components/LessonHeader';
import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';

export async function getStaticProps({ params }: { params: { lessonId: string } }) {
  // TODO: Load MDX content from /content
  return { props: { source: null } };
}

export async function getStaticPaths() {
  // TODO: Generate paths from /content
  return { paths: [], fallback: true };
}

export default function LessonPage({ source }: { source: any }) {
  const router = useRouter();
  const { lessonId } = router.query;

  return (
    <AppShell>
  <LessonHeader lessonId={Array.isArray(lessonId) ? lessonId[0] : lessonId} />
      <div className="prose max-w-3xl mx-auto">
        {source ? <MDXRemote {...source} /> : <p>Loading lesson...</p>}
      </div>
    </AppShell>
  );
}
