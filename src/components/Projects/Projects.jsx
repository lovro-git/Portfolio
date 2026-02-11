import { projects } from '../../data/portfolio';
import ScrollReveal from '../shared/ScrollReveal';
import SectionHeading from '../shared/SectionHeading';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <SectionHeading>Projects</SectionHeading>
        </ScrollReveal>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.1 * (i + 1)}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
