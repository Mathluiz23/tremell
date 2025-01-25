import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
// import Galeria from './components/Galeria';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Main from './components/Main';

export default function Home() {
  return (
    <>
      <Main />
      <Sobre />
      <Servicos />
      {/* <Galeria /> */}
      <Contato />
      <Footer />
    </>
  );
}
