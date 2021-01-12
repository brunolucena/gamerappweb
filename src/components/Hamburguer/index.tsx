import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props {
  opened: boolean;
  toggleOpened: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => any;
}

const Hamburguer: React.FC<Props> = ({ opened, toggleOpened }) => {
  const classes = clsx(styles['hamburguer-container'], opened && styles.opened);

  return (
    <div
      className={classes}
      onClick={toggleOpened}
    >
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </div>
  );
};

export default Hamburguer;
