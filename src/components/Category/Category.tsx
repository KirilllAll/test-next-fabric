import classNames from 'classnames';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import React, { FC } from 'react';
import styles from './Category.module.css';
import ContentCard from '../UI/ContentCard/ContentCard';
import CircleIcon from '../UI/CircleIcon/CircleIcon';
import { CircleIconColor, CircleIconSize } from '../UI/CircleIcon/types';

interface Props {
  className?: string;
  id?: string;
  icon: string | StaticImport;
  color: CircleIconColor;
  size: CircleIconSize;
  text: string;
  isOpacity?: boolean;
}
const Category: FC<Props> = ({ className, id, icon, color, size, text, isOpacity }) => {
  const classNameCategory = classNames(styles.category, className);

  return (
    <ContentCard className={classNameCategory} id={id}>
      <CircleIcon isOpacity={isOpacity} size={size} color={color} icon={icon} />
      <p className={styles.text}>{text}</p>
    </ContentCard>
  );
};

export default Category;
