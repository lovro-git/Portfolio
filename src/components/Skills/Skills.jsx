import { skills } from '../../data/portfolio';
import ScrollReveal from '../shared/ScrollReveal';
import SectionHeading from '../shared/SectionHeading';
import styles from './Skills.module.css';

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <SectionHeading>Skills</SectionHeading>
        </ScrollReveal>
        <div className={styles.grid}>
          {categories.map(([category, items], i) => (
            <ScrollReveal key={category} delay={0.1 * (i + 1)}>
              <div className={styles.category}>
                <h3 className={styles.categoryTitle}>{category}</h3>
                <div className={styles.pills}>
                  {items.map((item) => (
                    <span key={item} className={styles.pill}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
