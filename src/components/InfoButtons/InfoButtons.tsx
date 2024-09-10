import React from 'react';
import styles from './InfoButtons.module.css';
import penSvg from '../../../public/icons/pen.svg';
import statSvg from '../../../public/icons/chartBar.svg';
import bookSvg from '../../../public/icons/bookText.svg';
import favoriteSvg from '../../../public/icons/bookmarksUser.svg';
import { CONFIG_BUTTONS } from './const';
import { Icons } from './types';
import CircleIcon from '../UI/CircleIcon/CircleIcon';

const icons: Icons = {
  mistakes: penSvg,
  statistics: statSvg,
  code: bookSvg,
  favorites: favoriteSvg,
};

const InfoButtons = () => {
  return (
    <div className={styles.wrapper}>
      {CONFIG_BUTTONS.map((category) => (
        <div key={category.id} className={styles.item}>
          <CircleIcon size="medium" color="orange" icon={icons[category.id]} />
          <p className={styles.text}>{category.text}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoButtons;
