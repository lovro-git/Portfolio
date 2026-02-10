import { experience } from '../../data/portfolio';
import ScrollReveal from '../shared/ScrollReveal';
import SectionHeading from '../shared/SectionHeading';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <SectionHeading>Experience</SectionHeading>
        </ScrollReveal>
        <div className={styles.timeline}>
          {experience.map((item, i) => (
            <ScrollReveal key={i} delay={0.15 * (i + 1)}>
              <div className={styles.card}>
                <div className={styles.marker}>
                  {item.type === 'work' ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2Z" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" />
                    </svg>
                  )}
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.period}>{item.period}</span>
                  <h3 className={styles.role}>{item.role}</h3>
                  <p className={styles.company}>{item.company}</p>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
