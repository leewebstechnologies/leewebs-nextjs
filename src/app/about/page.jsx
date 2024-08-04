import Image from "next/image";
import styles from "./page.module.css";
import programmers from "../../images/programmers.jpg";
import Button from "@component/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={programmers}
          fill={true}
          alt="programmers"
          className={styles.img}
        />
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
          <p className={styles.description}>
            We create stunning, responsive and dynamic websites to help improve
            your online presence.
            <br />
            <br /> - Single Page Applications (SPAs)
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Modular Web Apps
            <br />
            <br /> - Graphic Design
            <br />
            <br /> - Product Design (UI/UX)
            <br />
            <br /> - Arabic & Islamic Education
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};
export default About;
