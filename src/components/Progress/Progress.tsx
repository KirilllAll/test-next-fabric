'use client';
import React, { useEffect, useState } from 'react';
import styles from './Progress.module.css';

import { SCALES_NUMS } from './const';
import Scale from '../Scale/Scale';

import { getProgressResult, getValuesFromSessionStorage } from './utils';

interface InitialState {
  progressValue: number;
  amount: number;
  result: number;
}

const initialState = {
  progressValue: 0,
  amount: 0,
  result: 0,
};

const Progress = () => {
  const [progress, setProgress] = useState<InitialState>(initialState);

  const { progressValue, amount, result } = progress;

  useEffect(() => {
    const [progressValue, amount] = getValuesFromSessionStorage(['progress', 'amount']);

    setProgress((prev) => ({
      ...prev,
      progressValue,
      amount,
      result: getProgressResult(progressValue, amount),
    }));
  }, []);

  return (
    <>
      <p className={styles.text}>
        {progressValue} questions out of {amount || 'amount'} passed
      </p>

      <div className={styles.bar}>
        {SCALES_NUMS.map((item) => {
          return <Scale key={item} isActive={item <= result} />;
        })}
      </div>
    </>
  );
};

export default Progress;
