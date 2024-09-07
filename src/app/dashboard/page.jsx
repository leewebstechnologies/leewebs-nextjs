"use client";
import { useSession } from "next-auth/react";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setError(true);
  //     }

  //     const data = await res.json();

  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);

  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  console.log(data);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return <div className={styles.container}>Dashboard</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        <div className={styles.imgContainer}>
          <Image src={postMessage.img} alt="" />
        </div>
        <h2 className={styles.postTitle}>{}</h2>
        <span className={styles.delete}>X</span>
      </div>
      <form className={styles.new}></form>
    </div>
  );
};
export default Dashboard;
