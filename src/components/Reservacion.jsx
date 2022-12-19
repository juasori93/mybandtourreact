import { React, useState } from 'react';
import '../css/font-awesome.css';
import '../css/templatemo-training-studio.css';
import '../css/animate.css';
import '../css/set.css';
import '../css/style.css';
import '../css/blueimp-gallery.min.css';
import selenacional2 from '../assets/images/selenacional2.jpg';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API } from 'aws-amplify';
import { listTMBTCATEventos } from '../graphql/queries';
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
            TN_Id_Evento: 1,
            TC_Fila: "A",
            TC_Tipo: "Pop",
            TC_Asiento: 5,
            TN_Precio: 300,
          },
        },
      })
      showToastMessage();
    } catch (error) {
      console.log(e)
    }
  }

  let eventos = fetchVents();

  async function fetchVents() {
    const apiData = await API.graphql({ query: listTMBTCATEventos });
    const notesFromAPI = apiData.data.listTMBTCATEventos.TC_Nombre;
    return notesFromAPI;
  }


const Reservacion = () => {
  return (
    <div background-color="white" alignItems='center' align='center' padding-top="300">
      <section class="form-reserva" alignItems='center'>
        <div id="reservaciones" class="clearfix grid">
            <div class="imgreserva">
                <img  src={selenacional2} alt="Estadio nacional" />
            </div>
            <form action="submit">
                <h2 class="titulo"> Selecciona tu campo</h2>
                <select name="Asiento" id="asiento" >
                    <option value="Coldplay">Coldplay - Palco Norte - A5</option>
                </select>
                <br />
                <br />
                <input class="controls"  type="email" id="Correo" placeholder='Correo Electronico'/>
                <br />
                <br />
                <h1>Precio: $300</h1>
                <br />
                <button class="btn btn-default"  onClick={handleSubmit} id="submit"> Reservar boleto </button>
                <br/>
                <br/>
                <ToastContainer/>    
            </form>
          </div>
      </section>

    </div>
  )
}

export default Reservacion