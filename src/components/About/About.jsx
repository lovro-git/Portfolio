import { about } from '../../data/portfolio';
import ScrollReveal from '../shared/ScrollReveal';
import SectionHeading from '../shared/SectionHeading';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <SectionHeading>About Me</SectionHeading>
        </ScrollReveal>
        {about.map((paragraph, i) => (
          <ScrollReveal key={i} delay={0.1 * (i + 1)}>
            <p className={styles.paragraph}>{paragraph}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
