import styles from '../styles/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import tremell from '../components/tremell.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src={tremell}
        alt="Logo da Empresa"
        className={styles.logo}
        width={120}
        height={120}
      />
      <nav className={styles.nav}>
        <Link href="#sobre" legacyBehavior>
          <a className={styles.navLink}>Sobre</a>
        </Link>
        <Link href="#localizacao" legacyBehavior>
          <a className={styles.navLink}>Localização</a>
        </Link>
        <Link href="#contato" legacyBehavior>
          <a className={styles.navLink}>Contato</a>
        </Link>
      </nav>
    </header>
  );
}
