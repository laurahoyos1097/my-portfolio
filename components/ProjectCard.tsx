
import Image from 'next/image';
import { VscLinkExternal } from 'react-icons/vsc';

import { Project } from '@/types';
import { SiFigma } from 'react-icons/si';
import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project & { preview?: string };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.number}>
        <span>{String(index).padStart(2, '0')}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.header}>
            <div className={styles.logoWrapper}>
              {project.slug === 'figma-ui-design' ? (
                <SiFigma size={18} />
              ) : (
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width={18}
                  height={18}
                  className={styles.logo}
                />
              )}
            </div>
            <h3 className={styles.title}>{project.title}</h3>
          </div>

          <p className={styles.description}>
            {project.description}
          </p>

          {project.preview && (
            <div className={styles.previewWrapper}>
              <Image
                src={project.preview}
                alt={`Preview of ${project.title}`}
                width={900}
                height={600}
                className={styles.preview}
              />
            </div>
          )}
        </div>

        <div className={styles.action}>
          <span className={styles.link}>
            View Project
            <VscLinkExternal size={12} />
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
