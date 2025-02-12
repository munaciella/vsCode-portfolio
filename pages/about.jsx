import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1 className={styles.heading}>A Little Bit About Me</h1>
        <p className={styles.paragraph}>
          Hey, I’m Francesco Vurchio, a junior software developer passionate about
          building intuitive and impactful applications. I specialize in front-end
          development but enjoy working across the stack.
        </p>
        <p className={styles.paragraph}>
          My journey into software development started with a strong curiosity
          about how the web works, which led me to complete the Northcoders bootcamp.
          Since then, I’ve been building projects that solve real-world problems and
          continuously expanding my skills in modern web technologies.
        </p>
        <p className={styles.paragraph}>
          I love learning, experimenting with new tools, and collaborating on
          exciting projects. Whether it's React, Next.js, or Firebase, I'm always
          looking for ways to improve my craft and build great user experiences.
        </p>
      </div>
      <div className={styles.imageSection}>
        <img src="/fran-avatar.png" alt="Francesco Vurchio" className={styles.profileImage} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;