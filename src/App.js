import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { listUsuarios } from './graphql/queries';
import { createUsuarios as createUsuariosMutation, deleteUsuarios as deleteUsuariosMutation } from './graphql/mutations';
import Login  from './components/Login';

const initialFormState = { email: '', password: '' }

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  async function fetchUsuarios() {
    const apiData = await API.graphql({ query: listUsuarios });
    setUsuarios(apiData.data.listUsuarios.items);
  }

  async function createUsuarios() {
    if (!formData.email || !formData.password) return;
    await API.graphql({ query: createUsuariosMutation, variables: { input: formData } });
    setUsuarios([ ...usuarios, formData ]);
    setFormData(initialFormState);
  }

  async function deleteUsuarios({ id }) {
    const newUsuariosArray = usuarios.filter(usuarios => usuarios.id !== id);
    setUsuarios(newUsuariosArray);
    await API.graphql({ query: deleteUsuariosMutation, variables: { input: { id } }});
  }

  return (

    <div>
      <Login/>
    </div>
    /*
    <div className="App">
      <h1>Usuarios</h1>
      <h1>Applicacion</h1>  
      <input
        onChange={e => setFormData({ ...formData, 'email': e.target.value})}
        placeholder="Usuario"
        value={formData.email}
      />
      <input type="password"
        onChange={e => setFormData({ ...formData, 'password': e.target.value})}
        placeholder="Contraseña"
        value={formData.password}
      />
      <button onClick={createUsuarios}>Crear Usuario</button>
      <div style={{marginBottom: 30}}>
        {
          usuarios.map(usuarios => (
            <div key={usuarios.id || usuarios.email}>
              <h2>{usuarios.email}</h2>
              <p>{usuarios.password}</p>
              <button onClick={() => deleteUsuarios(usuarios)}>Borrar Usuario</button>
            </div>
          ))
        }
      </div>
    </div>
        */
  );
}

export default App;
