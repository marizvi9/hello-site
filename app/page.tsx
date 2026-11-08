import styles from "./page.module.css";

// This function is the homepage. Whatever it returns is what visitors see.
export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <span className={styles.icon} aria-hidden="true">
          📚
        </span>

        <h1 className={styles.title}>IEC Library</h1>
        <p className={styles.badge}>Coming soon</p>

        <p className={styles.welcome}>
          Welcome! We&apos;re busy building a cozy online home for our library —
          a place to discover books, explore resources, and share a love of
          learning. Thanks for stopping by, and check back soon to see what
          we&apos;ve been working on.
        </p>
      </div>

      <footer className={styles.footer}>
        © 2026 IEC Library
      </footer>
    </main>
  );
}
