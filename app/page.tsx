import Image from "next/image";
import styles from "./page.module.css";
import heroImg from "../public/assets/hero.png"

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.hero}
            alt="Tasks logo"
            src={heroImg}
            priority
          />
          <h1 className={styles.title}>
            Organize your tasks in a <br/>simple way! 
          </h1>
        </div>
        
      </main>
    </div>
  );
}
