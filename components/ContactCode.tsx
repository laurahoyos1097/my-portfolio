
import { socials } from '@/portfolio.config';

import styles from '@/styles/ContactCode.module.css';

const ContactCode = () => {
  const cvs = [
    {
      id: 'cv-es',
      handle: 'CV en español',
      href: '/CV-Laura-Hoyos-ES.pdf',
    },
    {
      id: 'cv-en',
      handle: 'CV in English',
      href: '/CV-Laura-Hoyos-EN.pdf',
    },
  ];

  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.contact</span> &#123;
      </p>

      {socials.map((item) => (
        <p className={styles.line} key={item.id}>
          &nbsp;&nbsp;&nbsp;{item.id}:{' '}
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.handle}
          </a>
          ;
        </p>
      ))}

      <p className={styles.line}>&#125;</p>

      <p className={styles.line}>
        <span className={styles.className}>.curriculum-vitae</span> &#123;
      </p>

      {cvs.map((cv) => (
        <p className={styles.line} key={cv.id}>
          &nbsp;&nbsp;&nbsp;{cv.id}:{' '}
          <a href={cv.href} target="_blank" rel="noopener noreferrer">
            {cv.handle}
          </a>
          ;
        </p>
      ))}

      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
