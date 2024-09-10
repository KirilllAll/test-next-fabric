import { FooterItem } from './types';

export const CONFIG_FOOTER: FooterItem[] = [
  { id: 'home', color: 'white', text: 'Home', isActive: true },
  { id: 'plan', color: 'white', text: 'Your plan', isActive: false },
  { id: 'leaderboard', color: 'white', text: 'Leaderboard', isActive: false },
  { id: 'profile', color: 'white', text: 'Profile', isActive: false },
];

export const initialActiveItems = {
  home: true,
  plan: false,
  leaderboard: false,
  profile: false,
};
