import Image from "next/image";
import styles from "./page.module.css";
import hero from "../images/hero.png";

export default function Home() {
  return <div>
    <Image src={hero} alt="hero" className={styles.img} />
  </div>;
}
 