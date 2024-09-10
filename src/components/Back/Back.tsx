import React from 'react';
import Image from 'next/image';
import styles from './Back.module.css';
import backIcon from '../../../public/icons/arrowLeft.svg';

import Link from 'next/link';

export const Back = ({ address }: { address: string }) => {
  return (
    <div className={styles.back}>
      <Link href={address}>
        <Image className={styles.icon} src={backIcon} priority alt="Иконка назад" />
      </Link>

      <p className={styles.pageName}>Learning</p>
    </div>
  );
};
