import styles from './styles.module.css'

const Layout: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
