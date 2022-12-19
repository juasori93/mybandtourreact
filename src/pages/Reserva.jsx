import { React } from 'react';
import '../css/style.css';
import '../css/templatemo-training-studio.css';
import Header from '../components/Header';
import Footer from '../components/footer';
import Reservacion from '../components/Reservacion';

const Reservar = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <div>
          <Reservacion padding-top="300px"/>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default Reservar