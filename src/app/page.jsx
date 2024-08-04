import Image from "next/image";
import styles from "./page.module.css";
import leewebs from "../images/leewebs.png";
// import hero from "../images/hero.png";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import bootstrap from "../images/bootstrap.png";
import react from "../images/react.png";
import sass from "../images/sass.png";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.items}>
          <h1 className={styles.title}>
            Better design for your digital product
          </h1>
          <p className={styles.description}>
            Turning your idea into reality. We bring together the teams from the
            global tech industry.
          </p>
          <button className={styles.button}>See our works</button>
        </div>
        <div className={styles.item}>
          <Image src={leewebs} alt="leewebs" className={styles.img} />
        </div>
      </div>
      <div className={styles.skills}>
        <h1 className={styles.heading}>Skills & Experiences</h1>
        <div className={styles.images}>
          <div className={styles.skill}>
            <Image src={html} className={styles.image} alt="skills" />
            <p>HTML</p>
          </div>
          <div className={styles.skill}>
            <Image src={css} className={styles.image} alt="skills" />
            <p>CSS</p>
          </div>
          <div className={styles.skill}>
            <Image src={javascript} className={styles.image} alt="skills" />
            <p>JavaScript</p>
          </div>
          <div className={styles.skill}>
            <Image src={bootstrap} className={styles.image} alt="skills" />
            <p>Bootstrap</p>
          </div>
          <div className={styles.skill}>
            <Image src={react} className={styles.image} alt="skills" />
            <p>React Js</p>
          </div>
          <div className={styles.skill}>
            <Image src={sass} className={styles.image} alt="skills" />
            <p>Sass</p>
          </div>
        </div>
      </div>
    </>
  );
}
