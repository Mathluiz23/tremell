import Header from './components/Header';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Galeria from './components/Galeria';
import Contato from './components/Contato';
import Footer from './components/Footer';

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
