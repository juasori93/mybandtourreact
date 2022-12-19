import { React } from 'react';
import '../css/font-awesome.css';
import '../css/templatemo-training-studio.css';
import '../css/animate.css';
import '../css/set.css';
import '../css/blueimp-gallery.min.css';
import selenacional2 from '../assets/images/selenacional2.jpg';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API } from 'aws-amplify';
import { createTMBTCATBoleto as createBoleto } from '../graphql/mutations';

const showToastMessage = () => {
    toast.success('Te has inscrito con exito', {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { target } = e
    try {
      await API.graphql({
        query: createBoleto,
        variables: {
          input: {
            TC_Nombre: target.fullname.value,
            TC_Correo: target.email.value,
            TC_Clave: target.pass.value,
          },
        },
      })
      showToastMessage();
    } catch (error) {
      console.log(e)
    }
  }


const Reservacion = () => {
  return (
    <div background-color="white" alignItems='center' align='center' padding-top="300">
      <section alignItems='center'>
        <div id="reservaciones" class="clearfix grid">
            <div>
                <img src={selenacional2} alt="Estadio nacional" />
            </div>
            <br />
            <br />
            <form action="submit">
                <h2> Selecciona tu campo</h2>
                <select name="Asiento" id="asiento"></select>
                <br />
                <br />
                <p> Nombre Completo</p>
                <input type="text" id="nombre"/>
                <br />
                <br />
                <button onClick={handleSubmit} id="submit"> Reservar boleto </button>
                <ToastContainer/>    
            </form>
          </div>
      </section>

    </div>
  )
}

export default Reservacion