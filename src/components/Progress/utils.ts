import { LSKeys } from '@/types/types';

export const getProgressResult = (completedCount: number, allQuestion?: number): number =>
  allQuestion !== undefined ? (completedCount / allQuestion) * 100 : 0;

export const getValuesFromLS = (keys: LSKeys[]) => {
  return keys.map((key) => {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  });
};
