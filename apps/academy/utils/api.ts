const API_BASE = process.env.NEXT_PUBLIC_API_BASE || '/api/academy';

export async function fetchAcademy(path: string, opts: RequestInit = {}) {
  const url = `${API_BASE}${path}`;
  try {
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('API error');
    return await res.json();
  } catch (e) {
    // fallback to public mock
    const fallbackUrl = `/public/api/academy${path}.json`;
    const res = await fetch(fallbackUrl);
    return await res.json();
  }
}
