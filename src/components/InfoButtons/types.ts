import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { CircleIconColor } from '../UI/CircleIcon/types';

export type ButtonItem = {
  id: ButtonItemId;
  color: CircleIconColor;
  text: string;
};

export type ButtonItemId = 'mistakes' | 'statistics' | 'code' | 'favorites';
export type Icons = Record<ButtonItemId, string | StaticImport>;
