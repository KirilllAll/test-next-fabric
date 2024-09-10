'use client';
import React, { FC, memo } from 'react';
import styles from './TestItem.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import CheckCircleIcon from '../../../public/icons/checkCircle.svg';
import TestIcon from './TestIcon';

interface Props {
  value: number;
  isActive: boolean;
  id: string;
}

const TestItem: FC<Props> = ({ value, isActive, id }) => {
  const iconClassName = classNames(styles.icon, {
    [styles.completed]: isActive,
  });

  return (
    <li id={id} className={styles.item}>
      <p className={styles.num}>{value}</p>
      <TestIcon />
      <Image className={iconClassName} priority src={CheckCircleIcon} alt="Задание" />
    </li>
  );
};

export default memo(TestItem);
