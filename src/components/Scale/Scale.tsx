import classNames from 'classnames';
import styles from './Scale.module.css';

const Scale = ({ isActive }: { isActive: boolean }) => {
  const scaleClassName = classNames(styles.scale, {
    [styles.active]: isActive,
  });
  return <div className={scaleClassName} />;
};

export default Scale;
