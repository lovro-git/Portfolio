import { projects } from '../../data/portfolio';
import ScrollReveal from '../shared/ScrollReveal';
import SectionHeading from '../shared/SectionHeading';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <SectionHeading>Projects</SectionHeading>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ProjectCard project={featured} featured />
        </ScrollReveal>

        <div className={styles.grid}>
          {rest.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.1 * (i + 1)}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
