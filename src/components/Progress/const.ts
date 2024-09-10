const end = 100;
const length = 7;
const start = end / length;

const step = (end - start) / (length - 1);

export const SCALES_NUMS = Array.from({ length }, (_, index) => start + index * step);
