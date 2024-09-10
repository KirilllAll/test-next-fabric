import React from 'react';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import UserInfo from '@/components/UserInfo/UserInfo';
import Categories from '@/components/Categories/Categories';

import InfoButtons from '@/components/InfoButtons/InfoButtons';
import Footer from '@/components/Footer/Footer';

function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <Header>
          <UserInfo />
        </Header>
        <Categories />
        <InfoButtons />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
