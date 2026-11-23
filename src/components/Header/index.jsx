import { Link } from "@tanstack/react-router";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link href="/" className={styles.logo}>
          React Template
        </Link>
        <ul className={styles.links}>
          <li>
            <Link to="/" className={`${styles.link} ${styles.active}`}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/modalExample"
              className={`${styles.link} ${styles.active}`}
            >
              Modal Example
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.link}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
