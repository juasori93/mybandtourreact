import { React } from 'react';
import '../css/style.css';
import '../css/templatemo-training-studio.css';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/footer';
import Events from '../components/Events';

const Main = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Events />
      <Footer />
    </div>
  )
}

export default Main