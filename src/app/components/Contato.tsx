'use client'; // Adiciona a diretiva de cliente no topo do arquivo

import { useEffect, useState } from 'react';
import styles from '../styles/Contato.module.css';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contato = () => {
  const [isClient, setIsClient] = useState<boolean>(false); // Definindo tipo para o estado

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section id="contato" className={styles.contato}>
      <motion.h2 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        Entre em Contato
      </motion.h2>
      <div className={styles.wrapper}>
        <motion.div 
          className={styles.info}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Informações de Contato</h3>
          <ul className={styles.contactList}>
            <li>
              <FaMapMarkerAlt className={styles.icon} />
              Estr. Willy Moehlecke, 1490, Novo Hamburgo - RS, 93490-440
            </li>
            <li>
              <FaPhone className={styles.icon} />
              (99) 99999-9999
            </li>
            <li>
              <FaEnvelope className={styles.icon} />
              contato@emellterraplanagem.com
            </li>
          </ul>
          <div className={styles.socials}>
            <motion.a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook />
            </motion.a>
            <motion.a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram />
            </motion.a>
          </div>
        </motion.div>
        <motion.div 
          className={styles.map}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.848284323179!2d-51.08574792447556!3d-29.717675780803988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951941e4cbf3c8e9%3A0x90f7c7ec4c9a9eb8!2sEstr.%20Willy%20Moehlecke%2C%201490%2C%20Novo%20Hamburgo%20-%20RS%2C%2093490-440!5e0!3m2!1spt-BR!2sbr!4v1700627741643!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

export default Contato;
