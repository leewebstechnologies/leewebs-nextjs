import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy;2024 Leewebs Technologies. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Leewebs facebook account"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Leewebs instagram account"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Leewebs twitter account"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Leewebs youtube account"
        />
        <Image
          src="/7.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Leewebs youtube account"
        />
      </div>
    </div>
  );
};
export default Footer;
