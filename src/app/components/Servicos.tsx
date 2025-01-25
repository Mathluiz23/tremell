'use client';

import { useEffect, useRef } from 'react';
import styles from '../styles/Servicos.module.css';
import Image from 'next/image';

export default function Servicos() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(`.${styles.card}`);

    if (!('IntersectionObserver' in window)) {
      cards.forEach((card) => card.classList.add(styles.visible));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const services = [
    { title: 'Terraplanagem', description: 'Nivelamento de terrenos para construção.', image: '/service1.jpg' },
    { title: 'Compactação', description: 'Preparação de solo para maior estabilidade.', image: '/service2.jpg' },
    { title: 'Aterro', description: 'Serviço de aterro com materiais de qualidade.', image: '/service3.jpg' },
  ];

  return (
    <section id="serviços" className={styles.servicos} ref={sectionRef}>
      <h2>Nossos Serviços</h2>
      <h3>Soluções abrangentes para seus projetos</h3>
      <div className={styles.cards}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                unoptimized
                className={styles.image}
              />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
