
type Err = { message: string };
import { User } from '../components/types/types';

// Helper to keep fetch calls consistent
const opts = (method: string, body?: any): RequestInit => ({
  method,
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
  body: body ? JSON.stringify(body) : undefined,
});

// -----------------------------
// Auth
// -----------------------------

// Login function
export async function login(email: string, password: string) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, opts('POST', { email, password }));
    const json = await res.json();
    if (!res.ok) return { data: null, error: { message: json.error || 'Login failed' } as Err };
    return { data: { user: json.user as User }, error: null as any };
  } catch (e: any) {
    return { data: null, error: { message: e?.message || 'Login failed' } as Err };
  }
}

// Signup function
export async function signup(email: string, username: string, password: string) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/signup`, opts('POST', { email, username, password }));
    const json = await res.json();
    if (!res.ok) return { data: null, error: { message: json.error || 'Signup failed' } as Err };
    // Keep shape similar to Supabase: { user, session }
    return { data: { user: json.user as User, session: json.session as boolean }, error: null as any };
  } catch (e: any) {
    return { data: null, error: { message: e?.message || 'Signup failed' } as Err };
  }
}

// Logout function
export async function logout() {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/logout`, opts('POST'));
    if (!res.ok) {
      const json = await res.json().catch(() => ({}));
      throw new Error(json.error || 'Logout failed');
    }
  } catch (e) {
    // swallow on FE; user will simply be considered logged out
    console.error(e);
  }
}

// Get current user (cookie-based session)
export async function getUser() {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/user`, { credentials: 'include' });
    if (!res.ok) return { user: null as User | null };
    const json = await res.json();
    return { user: json.user as User };
  } catch {
    return { user: null as User | null };
  }
}

// ---- Not needed anymore with httpOnly cookies ----
// Kept for compatibility; always returns null.
export async function getUserToken() {
  console.warn('getUserToken(): not needed when using httpOnly cookies via middleware.');
  return null;
}

// Optional: start Google OAuth (backend returns provider URL)
// Usage: const url = await getGoogleOAuthUrl(); window.location.href = url;
export async function getGoogleOAuthUrl() {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/oauth/google/start`, { credentials: 'include' });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || 'Could not start Google OAuth');
  return json.url as string;
}
