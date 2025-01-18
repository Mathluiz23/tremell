import Link from 'next/link';
import Image from 'next/image';
// import { motion } from 'framer-motion';
import tremell from "./tremell.png";

export default function Header() {
  return (
    <header className="header">
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        // className="logo-container"
      > */}
        <Image
          src={tremell}
          alt="Logo da Empresa"
          className="logo"
          width={100}
          height={100}
        />
      {/* </motion.div> */}
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
