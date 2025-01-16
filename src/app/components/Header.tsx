// src/app/components/Header.tsx
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="header">
      <motion.img
        src="/logo.png"
        alt="Logo da Empresa"
        className="logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <nav className="nav">
        <Link href="#sobre">
          <a className="nav-link">Sobre</a>
        </Link>
        <Link href="#localizacao">
          <a className="nav-link">Localização</a>
        </Link>
        <Link href="#contato">
          <a className="nav-link">Contato</a>
        </Link>
      </nav>
    </header>
  );
}