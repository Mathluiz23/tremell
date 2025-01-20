import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Emell Terraplanagem. Todos os direitos reservados.</p>
      <p>
        Desenvolvido por <a href="https://github.com/MathLuiz23" target="_blank" rel="noopener noreferrer">Matheus Luiz</a>.
      </p>
    </footer>
  );
}
