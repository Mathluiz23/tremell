// src/app/page.tsx
// import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Galeria from './components/Galeria';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  return (
    <>
      <Header/>
      <Sobre />
      <Servicos />
      <Galeria />
      <Contato />
      <Footer />
    </>
  );
}
