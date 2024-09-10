import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { CircleIconColor } from '../UI/CircleIcon/types';

export type CategoryItem = {
  id: CategoryId;
  color: CircleIconColor;
  text: string;
};

export type CategoryId = 'express' | 'hazard' | 'dvsa' | 'signs' | 'multiplayer';

export type Icons = Record<CategoryId, string | StaticImport>;
