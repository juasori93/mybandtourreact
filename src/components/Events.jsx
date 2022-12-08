import { React } from 'react';
import '../css/font-awesome.css';
import '../css/templatemo-training-studio.css';
import '../css/animate.css';
import '../css/set.css';
import '../css/blueimp-gallery.min.css';
import { event1 } from '../assets/images/music1.jpg';


const Events = () => {
  return (
    <div>
      <section>
        <div id="events" class="clearfix grid">
          <figure class="effect-oscar  wowload fadeInUp">
            <img src={event1} alt="img01" />
            <figcaption>
              <h2>Event 1 </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, culpa? Iste harum necessitatibus
                aut ad.
              </p>
            </figcaption>
          </figure>
          </div>
      </section>

    </div>
  )
}

export default Events