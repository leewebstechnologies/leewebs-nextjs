import styles from "./darkmodetoggle.module.css"

const DarkModeToggle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={styles.ball} />
    </div>
  );
};
export default DarkModeToggle;
