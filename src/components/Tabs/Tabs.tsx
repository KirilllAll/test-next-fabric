import React from 'react';
import styles from './Tabs.module.css';
import { Tab } from './Tab';

const TABS = [{ name: 'Tests', id: 'Tests', isActive: true }];

export const Tabs = () => {
  return (
    <div className={styles.tabs}>
      {TABS.map(({ id, name, isActive }) => (
        <Tab key={id} tabName={name} isActive={isActive} id={id} />
      ))}
    </div>
  );
};
