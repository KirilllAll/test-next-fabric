import { Back } from '@/components/Back/Back';
import { Tabs } from '@/components/Tabs/Tabs';
import TestList from '@/components/TestList/TestList';
import React from 'react';
import styles from './learn.module.css';
import Header from '@/components/Header/Header';

const LearnPage = () => {
  return (
    <div className={styles.page}>
      <Header>
        <Back address="/" />
      </Header>
      <Tabs />
      <TestList />
    </div>
  );
};

export default LearnPage;
