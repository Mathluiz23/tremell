import wallpaper from './wallpaper.png';
import styles from '../styles/Main.module.css';
import tremell from '../components/tremell.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Main() {
  return (
    <div
      className={styles.main}
      style={{ backgroundImage: `url(${wallpaper.src})` }}
    >
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
      <div className={styles['main-content']}>
        <h1>Bem-vindo à nossa página</h1>
        <p>Explore nossos serviços e soluções.</p>
      </div>
    </div>
  );
}
