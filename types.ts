
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'liquid' | 'device' | 'pod' | 'accessory';
  inStock: boolean;
  stock: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  text: string;
  timestamp: number;
}

export interface UserBehavior {
  action: 'view_product' | 'search' | 'filter' | 'add_cart' | 'login' | 'click';
  target?: string;
  timestamp: number;
}

export interface Notification {
  id: string;
  text: string;
  isRead: boolean;
  timestamp: number;
}

export interface User {
  username: string;
  role: 'admin' | 'user' | 'owner';
  lastLogin: number;
  avatar?: string;
  ip?: string;
  location?: string;
  device?: string;      // User Agent / Device Name
  os?: string;          // Operating System
  browser?: string;     // Browser Name
  favorites: string[]; 
  isBanned?: boolean;
  
  // New Admin Features
  isVip?: boolean;           // VIP Status
  isShadowBanned?: boolean;  // User thinks they are active, but ignored
  balance?: number;          // Store credit / Loyalty points
  notifications?: Notification[]; // System messages
  bannedDevice?: string;     // Ban by device fingerprint
  behaviorLog?: UserBehavior[];
}

export interface LogEntry {
  id: string;
  timestamp: number;
  type: 'auth' | 'action' | 'error' | 'system' | 'scroll' | 'security';
  username: string;
  message: string;
  details?: string;
}

export interface Comment {
  id: string;
  productId: string;
  username: string;
  text: string;
  timestamp: number;
  likes: number;
  likedBy: string[]; 
}

export enum ViewState {
  HOME = 'HOME',
  ADMIN = 'ADMIN',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  FAVORITES = 'FAVORITES',
  ABOUT = 'ABOUT',
  LOCKDOWN = 'LOCKDOWN',
  BANNED = 'BANNED' 
}

// Passwords are now securely hashed (SHA-256)
// Admin (bolchoyhuy001!): f0e4c2f76c58916ec258f246851bea091d14d4247a2fc3e18694461b1816e13b
// Owner (bolchoyhuy1): a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3
export const ADMIN_HASH = "f0e4c2f76c58916ec258f246851bea091d14d4247a2fc3e18694461b1816e13b"; 
export const OWNER_HASH = "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3";
