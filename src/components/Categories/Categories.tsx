import React from 'react';
import styles from './Categories.module.css';
import Category from '../Category/Category';
import cornerSvg from '../../../public/icons/vector.svg';
import rocketSvg from '../../../public/icons/rocketLaunch.svg';
import tvSvg from '../../../public/icons/tvPlay.svg';
import turnSvg from '../../../public/icons/turn.svg';
import gameSvg from '../../../public/icons/gameController.svg';
import SelectedCategory from '../SelectedCategory/SelectedCategory';
import { CONFIG_CATEGORIES } from './const';
import { Icons } from './types';

const icons: Icons = {
  dvsa: cornerSvg,
  express: rocketSvg,
  hazard: tvSvg,
  signs: turnSvg,
  multiplayer: gameSvg,
};

const Categories = () => {
  return (
    <div className={styles.wrapper}>
      <SelectedCategory />
      {CONFIG_CATEGORIES.map((category) => (
        <Category
          key={category.id}
          className={`${styles[category.id]} ${styles.category} ${
            category.id === 'multiplayer' ? styles.medium : styles.small
          }`}
          icon={icons[category.id]}
          color={category.color}
          size="small"
          text={category.text}
          isOpacity
        />
      ))}
    </div>
  );
};

export default Categories;
