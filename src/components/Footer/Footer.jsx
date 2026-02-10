import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Designed & Built by Lovro Popovic &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
