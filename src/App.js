import './App.css';
import { API } from 'aws-amplify';
import Login  from './components/Login';

const initialFormState = { email: '', password: '' }

function App() {
  return (

    <div>
      <h1>Hola mundo</h1>
    </div>
/*
    <div>
      <Login/>
    </div>
    
    <div className="App">
      <h1>Usuarios</h1>

      <h1>Applicacion</h1>  
      <input onChange={e => setFormData({ ...formData, 'email': e.target.value})}
        placeholder="Usuario"
        value={formData.email}
      />
      <input type="password" onChange={e => setFormData({ ...formData, 'password': e.target.value})}
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
