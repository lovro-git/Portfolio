import { personalInfo } from '../../data/portfolio';
import ScrollReveal from '../shared/ScrollReveal';
import SectionHeading from '../shared/SectionHeading';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <SectionHeading>Get In Touch</SectionHeading>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className={styles.tagline}>
            I'm currently open to new opportunities. Whether you have a project
            in mind or just want to connect, feel free to reach out.
          </p>
        </ScrollReveal>

        <div className={styles.grid}>
          <ScrollReveal delay={0.2}>
            <a href={`mailto:${personalInfo.email}`} className={styles.card}>
              <div className={styles.icon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <span className={styles.label}>Email</span>
              <span className={styles.value}>{personalInfo.email}</span>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span className={styles.label}>Location</span>
              <span className={styles.value}>{personalInfo.location}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.icon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                </svg>
              </div>
              <span className={styles.label}>GitHub</span>
              <span className={styles.value}>lovro-git</span>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
