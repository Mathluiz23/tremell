import Link from 'next/link';
import Image from 'next/image';
import tremell from "./tremell.png";
import "../styles/Header.module.css";

export default function Header() {
  return (
    <header className="header">
        <Image
          src={tremell}
          alt="Logo da Empresa"
          className="logo"
          width={120}
          height={120}
        />
      <nav className="nav">
        <Link href="#sobre" legacyBehavior>
          <a className="nav-link">Sobre</a>
        </Link>
        <Link href="#localizacao" legacyBehavior>
          <a className="nav-link">Localização</a>
        </Link>
        <Link href="#contato" legacyBehavior>
          <a className="nav-link">Contato</a>
        </Link>
      </nav>
    </header>
  );
}
