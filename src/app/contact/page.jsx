import Image from "next/image";
import styles from "./page.module.css";
import contact from "../../images/contact_us.png";
import Button from "@component/components/button/Button";

export const metadata = {
  title:
    "Leewebs Contact Information | Leading Web Development Agency in Nigeria",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Let's Keep in Touch</h1>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image
              src={contact}
              alt="contact"
              fill={true}
              className={styles.image}
            />
          </div>
          <form className={styles.form}>
            <input type="text" placeholder="Name" className={styles.input} />
            <input type="text" placeholder="Email" className={styles.input} />
            <textarea
              className={styles.textArea}
              placeholder="Message"
              cols="30"
              rows="10"
            ></textarea>
            <Button url="#" text="Send" />
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
