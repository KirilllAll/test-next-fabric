'use client';
import React, { FC, memo } from 'react';
import styles from './TestItem.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import CheckCircleIcon from '../../../public/icons/checkCircle.svg';

interface Props {
  value: number;
  isActive: boolean;
  id: string;
}

const Icon = () => {
  return (
    <svg
      className={styles.svg}
      width="71"
      height="71"
      viewBox="0 0 71 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.filter}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35.4999 0C15.8938 0 0 15.8938 0 35.4999C0 44.3839 3.26336 52.5056 8.65674 58.7319C8.52889 58.5843 8.40227 58.4356 8.27683 58.2859C14.4426 63.4521 22.3894 66.5625 31.0626 66.5625C50.6687 66.5625 66.5625 50.6687 66.5625 31.0626C66.5625 22.3894 63.4521 14.4426 58.2859 8.27683C58.3954 8.36851 58.5042 8.46081 58.6125 8.55378C52.402 3.22186 44.3272 0 35.4999 0ZM62.343 12.2678C67.7364 18.4941 70.9997 26.6159 70.9997 35.4999C70.9997 55.1059 55.1059 70.9997 35.4999 70.9997C26.7684 70.9997 18.7731 67.8474 12.5901 62.6188C18.7731 67.8476 26.7685 71 35.5001 71C55.1062 71 71 55.1062 71 35.5001C71 26.616 67.7365 18.4941 62.343 12.2678Z"
        fill="white"
      />
    </svg>
  );
};

const TestItem: FC<Props> = memo(({ value, isActive, id }) => {
  const iconClassName = classNames(styles.icon, {
    [styles.completed]: isActive,
  });

  return (
    <li id={id} className={styles.item}>
      <p className={styles.num}>{value}</p>
      <Icon />
      <Image className={iconClassName} priority src={CheckCircleIcon} alt="Задание" />
    </li>
  );
});

export default TestItem;
