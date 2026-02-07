
export interface KeyAuthResponse {
  success: boolean;
  message: string;
  info?: UserInfo;
  sessionid?: string;
}

export interface UserInfo {
  username: string;
  subscriptions: Subscription[];
  ip: string;
  hwid: string;
  createdate: string;
  lastlogin: string;
  isAdmin?: boolean;
}

export interface KeyAuthUser {
  username: string;
  email: string;
  hwid: string;
  ip: string;
  lastlogin: string;
  subscriptions: Subscription[];
}

export interface HwidStatus {
  weekly_available: boolean;
  monthly_remaining: number;
  credits: number;
  next_free_at: string | null;
}

export interface HwidResetLog {
  username: string;
  type: 'free' | 'paid';
  created_at: string;
}

export interface AdminUser {
  username: string;
  password: string;
  createdAt: string;
}

export interface Subscription {
  subscription: string;
  key: string;
  expiry: string;
  timeleft: number;
}

export enum Page {
  HOME = 'HOME',
  DASHBOARD = 'DASHBOARD',
  STORE = 'STORE',
  TERMS = 'TERMS',
  ADMIN_DASHBOARD = 'ADMIN_DASHBOARD'
}

export enum AuthView {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER'
}
