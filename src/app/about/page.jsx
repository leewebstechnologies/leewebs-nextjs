import Image from "next/image";
import styles from "./page.module.css";
import about from "../../images/about.jpg";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={about} alt="about" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital storytellers</h1>
          <h2 className={styles.imgDescription}>
            Handcrafting award wining digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.description}>
            I am an experienced software developer who is very proficient at
            building scalable, fast performing applications and software using
            React Js and its ecosystem. I have thrived in the web development
            space for more than 5+ years now and have amassed the prerequisite
            expertise needed to bring your Web Product to life. What gives me an
            edge is the fact that I also know how to make eye-catching graphic
            design.
            <br />
            <br />I am an experienced software developer who is very proficient
            at building scalable, fast performing applications and software
            using React Js and its ecosystem. I have thrived in the web
            development space for more than 5+ years now and have amassed the
            prerequisite expertise needed to bring your Web Product to life.
            What gives me an edge is the fact that I also know how to make
            eye-catching graphic design.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
        </div>
      </div>
    </div>
  );
};
export default About;
