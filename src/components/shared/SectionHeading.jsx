import styles from './SectionHeading.module.css';

export default function SectionHeading({ children }) {
  return <h2 className={styles.heading}>{children}</h2>;
}
