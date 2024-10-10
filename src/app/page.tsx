import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header></header>
      <main>
        <h1 style={{fontFamily:"Poppins"}}>hello</h1>
        <h1>hello</h1>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
