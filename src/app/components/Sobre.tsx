import styles from '../styles/Sobre.module.css';

export default function Sobre() {
  return (
    <section id="sobre" className={styles.sobre}>
      <div className={styles.sobreContent} >
        <h2>Quem nós somos</h2>
        <h3>Comprometidos com a satisfação do cliente</h3>
        <p>
          A Emell Terraplenagem é especializada em serviços de terraplenagem.
          Nosso compromisso com a qualidade e o profissionalismo garante que atendemos às necessidades de construção e movimentação de terra de nossos clientes.
          Priorizamos a satisfação do cliente, tornando-nos uma escolha de confiança no Rio Grande do Sul.
        </p>
      </div>
    </section>
  );
}
