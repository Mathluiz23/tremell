import styles from '../styles/Galeria.module.css';

export default function Galeria() {
  const galleryImages = [
    '/gallery/project1.jpg',
    '/gallery/project2.jpg',
    '/gallery/project3.jpg',
    '/gallery/project4.jpg',
  ];

  return (
    <section id="galeria" className={styles.galeria}>
      <h2>Galeria</h2>
      <div className={styles.grid}>
        {galleryImages.map((src, index) => (
          <div key={index} className={styles.card}>
            <img src={src} alt={`Projeto ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
