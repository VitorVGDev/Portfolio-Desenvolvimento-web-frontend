import styles from './About2.module.css';
import lines from '../assets/lines.png';
import center_img from '../assets/center_img.svg';
import elipse_gradient from '../assets/elipse_gradient.svg';
import elipses_center from '../assets/elipses_central_logo.png';
import bottom_elipses from '../assets/bottom_elipses.png';

export default function About_2() {
  return (
    <section className={styles.about2_container}>
      <div className={styles.about2_content}>
        <hr className={styles.about2_line} />
        <h2>
          I'm currently looking to join a <span className={styles.cross_functional}>cross-functional</span> team
        </h2>
        <p>that values improving people's lives through accessible design</p>
        <div className={styles.icons_row}>
          <div className={styles.icon_circle}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" />
          </div>
          <div className={styles.icon_circle}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" alt="Node.js" />
          </div>
          <div className={styles.icon_circle}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-line-wordmark.svg" alt="Node.js Line" />
          </div>
          <div className={styles.icon_circle}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C" />
          </div>
          <div className={styles.icon_circle}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
          </div>
          <div className={styles.icon_circle}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt="CSS3" />
          </div>
          <div className={styles.icon_circle}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg" alt="XD" />
          </div>
          <div className={styles.icon_circle}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" alt="Next.js" />
          </div>
          <div className={styles.icon_circle}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" alt="Java" />
          </div>
          <div className={styles.icon_circle}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg" alt="After Effects" />
          </div>
          <div className={styles.icon_circle}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" alt="Kotlin" />
          </div>
          <div className={styles.icon_circle}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg" alt="PostgreSQL" />
          </div>
        </div>
        <div className={styles.orbitals}>
          <div className={styles.central_logo}>
            <img src={center_img} />
          </div>
          <span className={styles.lines}>
            <img src={lines}/>
          </span>
          <span className={styles.elipse_gradient}>
            <img src={elipse_gradient}/>
          </span>
          <span className={styles.elipses_center}>
            <img src={elipses_center} alt="" />
          </span>
          <span className={styles.bottom_elipses}>
            <img src={bottom_elipses} alt="" />
          </span>
        </div>
      </div>
    </section>
  );
}