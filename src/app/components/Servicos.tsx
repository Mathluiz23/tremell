import styles from '../styles/Servicos.module.css';

export default function Servicos() {
  const services = [
    { title: 'Terraplanagem', description: 'Nivelamento de terrenos para construção.', image: '/services/service1.jpg' },
    { title: 'Compactação', description: 'Preparação de solo para maior estabilidade.', image: '/services/service2.jpg' },
    { title: 'Aterro', description: 'Serviço de aterro com materiais de qualidade.', image: '/services/service3.jpg' },
  ];

  return (
    <section id="servicos" className={styles.servicos}>
      <h2>Nossos Serviços</h2>
      <div className={styles.cards}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
