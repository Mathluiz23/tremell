'use client';

import { motion } from 'framer-motion';
import wallpaper from '../assets/wallpaper.png';
import styles from '../styles/Main.module.css';
import tremell from '../assets/tremell.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Main() {
  return (
    <div
      className={styles.main}
      style={{ backgroundImage: `url(${wallpaper.src})` }}
    >
      <header className={styles.header}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={tremell}
            alt="Logo da Empresa"
            className={styles.logo}
            width={120}
            height={120}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </motion.div>
        <nav className={styles.nav}>
          {['#sobre', '#serviços', '#contato'].map((href, index) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 1 }}
            >
              <Link href={href} legacyBehavior>
                <a className={styles.navLink}>{href.slice(1).toUpperCase()}</a>
              </Link>
            </motion.div>
          ))}
        </nav>
      </header>
      <motion.div
        className={styles['main-content']}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h1
          className={styles.typewriter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Bem-vindo à Emell
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Terraplenagem de alta qualidade
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Seu parceiro de confiança em desenvolvimento de terrenos
        </motion.h3>
      </motion.div>
    </div>
  );
}
