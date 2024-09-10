import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { CircleIconColor } from '../UI/CircleIcon/types';

export type FooterItem = {
  id: FooterItemId;
  color: CircleIconColor;
  text: string;
  isActive: boolean;
};

export type FooterItemId = 'home' | 'plan' | 'leaderboard' | 'profile';

export type Icons = Record<FooterItemId, string | StaticImport>;

export type ActiveItems = {
  [key: string]: boolean;
};
