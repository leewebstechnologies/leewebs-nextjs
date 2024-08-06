import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>The reality of life</h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              ratione tenetur ullam illo adipisci voluptate beatae incidunt
              voluptatum quae atque provident perferendis, sunt eum deleniti
              corporis officiis in facilis modi.
            </p>
            <div className={styles.author}>
              <Image
                src="/8.jpg"
                alt=""
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.username}>Ali Ajibade</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.unsplash.com/photo-1691915486198-058a4f2df0d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            nostrum eum necessitatibus sit quam doloremque eaque, labore totam
            enim quisquam explicabo vero quos, repellat fugiat soluta sint
            blanditiis esse cum.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            nostrum eum necessitatibus sit quam doloremque eaque, labore totam
            enim quisquam explicabo vero quos, repellat fugiat soluta sint
            blanditiis esse cum.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            nostrum eum necessitatibus sit quam doloremque eaque, labore totam
            enim quisquam explicabo vero quos, repellat fugiat soluta sint
            blanditiis esse cum.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            nostrum eum necessitatibus sit quam doloremque eaque, labore totam
            enim quisquam explicabo vero quos, repellat fugiat soluta sint
            blanditiis esse cum.
            <br />
            <br />
          </p>
        </div>
      </div>
    </>
  );
};
export default BlogPost;
