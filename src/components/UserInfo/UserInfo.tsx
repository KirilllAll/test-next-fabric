import React from 'react';
import styles from './UserInfo.module.css';
import ContentCard from '../UI/ContentCard/ContentCard';
import Image from 'next/image';
import crownSvg from '../../../public/icons/crown.svg';
import fireSvg from '../../../public/icons/fire.svg';

const NAME = 'Ray Driving Theory';
const NUM_TEST = 13;

const UserInfo = () => {
  return (
    <div className={styles.userInfo}>
      <p className={styles.userName}>{NAME}</p>
      <div className={styles.flex}>
        <ContentCard className={`${styles.crownCard} ${styles.flex}`}>
          <Image src={crownSvg} alt="Корона" />
        </ContentCard>
        <ContentCard className={`${styles.fireCard} ${styles.flex}`}>
          <Image src={fireSvg} alt="Пламя" />
          <span>{NUM_TEST}</span>
        </ContentCard>
      </div>
    </div>
  );
};

export default UserInfo;
