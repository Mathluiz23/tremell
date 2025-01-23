import styles from '../styles/Contato.module.css';

export default function Contato() {
  return (
    <section id="contato" className={styles.contato}>
      <h2>Entre em Contato</h2>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h3>Informações de Contato</h3>
          <p>
            <strong>Endereço:</strong> Estr. Willy Moehlecke, 1490, Novo Hamburgo - RS, 93490-440
          </p>
          <p>
            <strong>Telefone:</strong> (99) 99999-9999
          </p>
          <p>
            <strong>Email:</strong> contato@emellterraplanagem.com
          </p>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.848284323179!2d-51.08574792447556!3d-29.717675780803988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951941e4cbf3c8e9%3A0x90f7c7ec4c9a9eb8!2sEstr.%20Willy%20Moehlecke%2C%201490%2C%20Novo%20Hamburgo%20-%20RS%2C%2093490-440!5e0!3m2!1spt-BR!2sbr!4v1700627741643!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
