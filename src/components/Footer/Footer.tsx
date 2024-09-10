import React from 'react';
import { CONFIG_FOOTER } from './const';
import homeSvg from '../../../public/icons/home.svg';
import planSvg from '../../../public/icons/route.svg';
import boardSvg from '../../../public/icons/ranking.svg';
import profileSvg from '../../../public/icons/user.svg';
import { Icons } from './types';
import styles from './Footer.module.css';
import CircleIcon from '../UI/CircleIcon/CircleIcon';
import ContentCard from '../UI/ContentCard/ContentCard';
import classNames from 'classnames';

const icons: Icons = {
  home: homeSvg,
  leaderboard: boardSvg,
  plan: planSvg,
  profile: profileSvg,
};

const Footer = () => {
  return (
    <footer>
      <ContentCard className={styles.wrapper}>
        {CONFIG_FOOTER.map(({ id, text, isActive }) => {
          const isActiveClass = isActive ? styles.active : '';
          return (
            <div key={id} className={styles.item}>
              <CircleIcon className={isActiveClass} size="small" color="white" icon={icons[id]} />
              <p
                className={classNames(styles.text, {
                  [styles.activeText]: isActive,
                })}
              >
                {text}
              </p>
            </div>
          );
        })}
      </ContentCard>
    </footer>
  );
};

export default Footer;
