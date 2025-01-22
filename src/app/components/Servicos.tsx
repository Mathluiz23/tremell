import styles from '../styles/Servicos.module.css';
import Image from 'next/image';

export default function Servicos() {
  const services = [
    { title: 'Terraplanagem', description: 'Nivelamento de terrenos para construção.', image: '/service1.jpg' },
    { title: 'Compactação', description: 'Preparação de solo para maior estabilidade.', image: '/service2.jpg' },
    { title: 'Aterro', description: 'Serviço de aterro com materiais de qualidade.', image: '/service3.jpg' },
  ];

  return (
    <section id="servicos" className={styles.servicos}>
      <h2>Nossos Serviços</h2>
      <h3>Soluções abrangentes para seus projetos</h3>
      <div className={styles.cards}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={300}
              unoptimized
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
