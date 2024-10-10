import Image from "next/image";
import styles from "./page.module.css";
import CssBaseline from "@mui/material/CssBaseline";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <title>Some name</title>
      </header>
      <main className={styles.main}>
      <CssBaseline />
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
