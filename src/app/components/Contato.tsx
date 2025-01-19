import styles from '../styles/Contato.module.css';

export default function Contato() {
  return (
    <section id="contato" className={styles.contato}>
      <h2>Entre em Contato</h2>
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <input type="text" placeholder="Seu Nome" required />
          <input type="email" placeholder="Seu Email" required />
          <textarea placeholder="Sua Mensagem" rows={5} required></textarea>
          <button type="submit">Enviar</button>
        </form>
        <div className={styles.info}>
          <h3>Informações de Contato</h3>
          <p><strong>Endereço:</strong> Rua Exemplo, 123 - Cidade, Estado</p>
          <p><strong>Telefone:</strong> (99) 99999-9999</p>
          <p><strong>Email:</strong> contato@emellterraplanagem.com</p>
        </div>
      </div>
    </section>
  );
}
