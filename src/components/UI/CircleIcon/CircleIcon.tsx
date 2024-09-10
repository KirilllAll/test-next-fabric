import React, { FC } from 'react';
import styles from './CircleIcon.module.css';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import classNames from 'classnames';
import { COLORS, CircleIconColor, CircleIconSize, SIZE } from './types';

interface Props {
  size: CircleIconSize;
  withScrew?: boolean;
  color: CircleIconColor;
  icon: string | StaticImport;
  id?: string;
  isOpacity?: boolean;
  className?: string;
}

const CircleIcon: FC<Props> = ({ icon, color, size, id, isOpacity, className }) => {
  const wrapperClassName = classNames(styles.wrapper, {
    [styles.small]: size === SIZE.SMALL,
    [styles.medium]: size === SIZE.MEDIUM,
    [styles.large]: size === SIZE.LARGE,
  });

  const backgroundClassName = classNames(styles.background, className, {
    [styles.orange]: color === COLORS.ORANGE,
    [styles.violet]: color === COLORS.VIOLET,
    [styles.pink]: color === COLORS.PINK,
    [styles.default]: color === COLORS.WHITE,
    [styles.light]: color === COLORS.LIGHT,
    [styles.opacity]: isOpacity,
  });

  return (
    <div id={id} className={wrapperClassName}>
      <div className={backgroundClassName}></div>
      <Image className={styles.icon} priority src={icon} alt="Иконка" />
    </div>
  );
};

export default CircleIcon;
