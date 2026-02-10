import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, featured }) {
  const hasImage = project.image;
  const hasPhoneScreenshots = project.phoneScreenshots?.length > 0;
  const cardHref = project.demo || project.github;

  const handleCardClick = (e) => {
    // Don't navigate if clicking the GitHub icon
    if (e.target.closest(`.${styles.githubLink}`)) return;
    window.open(cardHref, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`${styles.card} ${featured ? styles.featured : ''}`}
      onClick={handleCardClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick(e)}
    >
      {hasImage && (
        <div className={`${styles.imageWrapper} ${featured ? styles.featuredImage : ''}`}>
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className={styles.image}
            loading="lazy"
          />
        </div>
      )}

      {hasPhoneScreenshots && (
        <div className={styles.phoneShowcase}>
          {project.phoneScreenshots.map((src, i) => (
            <div key={i} className={styles.phoneMockup}>
              <div className={styles.phoneNotch} />
              <img
                src={src}
                alt={`${project.title} screen ${i + 1}`}
                className={styles.phoneScreen}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={`${styles.title} ${featured ? styles.featuredTitle : ''}`}>
            <svg
              className={styles.folderIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            {project.title}
            <svg
              className={styles.titleArrow}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </h3>
          <div className={styles.headerLinks}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
              aria-label={`View ${project.title} on GitHub`}
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
              </svg>
            </a>
          </div>
        </div>
        <p className={styles.description}>{project.description}</p>

        <ul className={styles.features}>
          {project.features.map((feature) => (
            <li key={feature} className={styles.feature}>
              {feature}
            </li>
          ))}
        </ul>

        <div className={styles.tech}>
          {project.tech.map((t) => (
            <span key={t} className={styles.pill}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
