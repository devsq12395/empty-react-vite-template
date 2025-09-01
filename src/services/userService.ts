import { UserDetails } from '../components/types/types';

// Helper to parse JSON and handle errors
const j = async (res: Response) => {
  const body = await res.json();
  if (!res.ok) throw new Error(body?.error || 'Request failed');
  return body;
};

// Helper to build fetch options with auth
const opts = (method: string, body?: unknown): RequestInit => ({
  method,
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
  body: body ? JSON.stringify(body) : undefined,
});

// GET /user/profile/:userId
export async function getUserDetailsViaID(userId: string): Promise<UserDetails | null> {
  try {
    const o = await opts('GET');
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user/profile/${userId}`, o);
    const data = (await j(res)) as UserDetails;
    return data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    return null;
  }
}