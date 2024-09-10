import React from 'react';
import ContentCard from '../UI/ContentCard/ContentCard';
import styles from './SelectedCategory.module.css';
import CircleIcon from '../UI/CircleIcon/CircleIcon';
import capSvg from '../../../public/icons/graduationCap.svg';
import Image from 'next/image';
import arrowRight from '../../../public/icons/chevronRight.svg';
import Link from 'next/link';
import Progress from '../Progress/Progress';

const SelectedCategory = () => {
  return (
    <ContentCard className={styles.selected}>
      <div className={styles.content}>
        <div className={styles.lestSideContent}>
          <CircleIcon size="small" color="light" icon={capSvg} />
          <div>
            <p className={styles.sectionName}>Learning</p>
            <span className={styles.categoryName}>Category B</span>
          </div>
        </div>
        <Link href="/learn">
          <Image src={arrowRight} alt="next" />
        </Link>
      </div>
      <Progress />
    </ContentCard>
  );
};

export default SelectedCategory;
