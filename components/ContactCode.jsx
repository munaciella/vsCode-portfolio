import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'francesco.dev',
    href: 'https://francesco-dev.vercel.app/',
  },
  {
    social: '3D website',
    link: 'francesco.dev',
    href: 'https://francescovurchio-dev.netlify.app/',
  },
  {
    social: 'email',
    link: 'francesco.vurchio82@gmail.com',
    href: 'mailto:francesco.vurchio82@gmail.com',
  },
  {
    social: 'github',
    link: 'munaciella',
    href: 'https://github.com/munaciella',
  },
  {
    social: 'linkedin',
    link: 'francesco-vurchio',
    href: 'https://www.linkedin.com/in/francesco-vurchio/', 
  },
  {
    social: 'twitter',
    link: 'neonrats',
    href: 'https://www.twitter.com/neonrats',
  },
  {
    social: 'instagram',
    link: 'neonrats',
    href: 'https://www.instagram.com/neonrats',
  },
  {
    social: 'polywork',
    link: 'nitinranganath',
    href: 'https://www.polywork.com/nitinranganath',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
