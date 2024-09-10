import React, { ReactNode } from 'react';
import styles from './Header.module.css';

const Header = ({ children }: { children: ReactNode }) => {
  return <div className={styles.header}>{children}</div>;
};

export default Header;
