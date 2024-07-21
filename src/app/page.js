"use client"
import HelloWorld , {AnotherChild} from "./components/HelloWorld";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Header</h1>
      </div>

      <div className={styles.center}>
        
      </div>

      <AnotherChild />

      <div className={styles.grid}>
        <HelloWorld />
        <HelloWorld />
      </div>
    </main>
  );
}
