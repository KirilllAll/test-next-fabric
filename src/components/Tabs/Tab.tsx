import classNames from 'classnames';
import React from 'react';
import styles from './Tab.module.css';

export const Tab = ({ tabName, id, isActive }: { tabName: string; id: string; isActive: boolean }) => {
  const className = classNames(styles.tab, {
    [styles.isActive]: isActive,
  });
  return (
    <div id={id} className={className}>
      {tabName}
    </div>
  );
};
