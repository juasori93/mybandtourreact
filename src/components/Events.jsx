import { React } from 'react';
import { Link } from 'react-router-dom';
import '../css/font-awesome.css';
import '../css/templatemo-training-studio.css';
import '../css/animate.css';
import '../css/set.css';
import '../css/blueimp-gallery.min.css';
import image1 from '../assets/images/music1.jpg';


const Events = () => {
  return (
    <div>
      <section>
        <div id="events" class="clearfix grid">
          <figure class="effect-oscar  wowload fadeInUp"><Link to='/Reserva'>
            <img src={image1} alt="img01" />
            <figcaption> 
              <h2>Coldplay</h2>
              <p>Entra aqui para reservar!
              </p>
            </figcaption>
            </Link></figure>
          </div>
      </section>

    </div>
  )
}

export default Events