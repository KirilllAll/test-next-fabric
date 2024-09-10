import classNames from 'classnames';

import type { FC, ReactNode } from 'react';

import styles from './ContentCard.module.css';

interface Props {
  children: ReactNode;
  id?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
const ContentCard: FC<Props> = ({ children, id, className, onClick }) => {
  const classNameCard = classNames(styles.cardWrapper, className);
  return (
    <div onClick={onClick} className={classNameCard} id={id}>
      {children}
    </div>
  );
};

export default ContentCard;
