import { SessionKeys } from '@/types/types';

export const getProgressResult = (completedCount: number, allQuestion?: number): number =>
  allQuestion !== undefined ? (completedCount / allQuestion) * 100 : 0;

export const getValuesFromSessionStorage = (keys: SessionKeys[]) => {
  return keys.map((key) => {
    const value = sessionStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  });
};
