import { skills } from '../../data/portfolio';
import ScrollReveal from '../shared/ScrollReveal';
import SectionHeading from '../shared/SectionHeading';
import styles from './Skills.module.css';

export default function Skills() {
  const allSkills = Object.entries(skills).flatMap(([category, items]) =>
    items.map((item) => ({ name: item, category }))
  );

  const mid = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, mid);
  const row2 = allSkills.slice(mid);

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <SectionHeading>Skills</SectionHeading>
        </ScrollReveal>
      </div>

      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeRow}>
          <div className={styles.marqueeTrack}>
            {[...row1, ...row1].map((skill, i) => (
              <span key={i} className={styles.skill}>
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className={`${styles.marqueeRow} ${styles.reverse}`}>
          <div className={styles.marqueeTrack}>
            {[...row2, ...row2].map((skill, i) => (
              <span key={i} className={styles.skill}>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
