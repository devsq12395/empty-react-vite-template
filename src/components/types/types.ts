export interface DropDownMenuEntry {
  text: string;
  onClick: () => void;
}

export interface User {
  id: string; // uuid
  email?: string | null;
}

export interface UserDetails {
  id: string; // uuid
  created_at: string; // ISO timestamp
  username: string;
  email: string;
  simtime_now: string;
}