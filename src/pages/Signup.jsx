import { createTMBTCATUsuario as createUsuarios} from '../graphql/mutations';
import { ToastContainer, toast } from 'react-toastify';
import { React, useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { API } from 'aws-amplify';

const initialFormState = { name:'', email: '', password: '' }


const showToastMessage = () => {
  toast.success('Te has inscrito con exito', {
      position: toast.POSITION.TOP_RIGHT
  });
};

const handleSubmit = async (e) => {
  e.preventDefault()
  const {target} = e
  try {
    await API.graphql({
      query: createUsuarios,
      variables: {
        input: {
          TC_Nombre: target.fullname.value,
          TC_Correo: target.email.value,
          TC_Clave: target.pass.value,
        },
      },
    })
  } catch (error) {
    console.log(e)
  }
}

const Signup = () => {
  return (
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100 p-t-85 p-b-20">
          <form class="login100-form validate-form" onSubmit={handleSubmit}>
            <span class="login100-form-title p-b-70">
              SIGN UP
            </span>
            <div class="wrap-input100 validate-input m-t-85 m-b-35" data-validate="Full Name">
              <input class="input100" type="text" name="fullname"></input>
              <span class="focus-input100" data-placeholder="Full Name"></span>
            </div>
            <div class="wrap-input100 validate-input m-t-85 m-b-35" data-validate="Enter email">
              <input class="input100" type="text" name="email"></input>
              <span class="focus-input100" data-placeholder="Email"></span>
            </div>
            <div class="wrap-input100 validate-input m-b-50" data-validate="Enter password">
              <input class="input100" type="password" name="pass"></input>
              <span class="focus-input100" data-placeholder="Password"></span>
            </div>
            <div class="wrap-input100 validate-input m-b-50" data-validate="Confirm password">
              <input class="input100" type="password" name="Confpass"></input>
              <span class="focus-input100" data-placeholder="Confirm Password"></span>
            </div>
            <div class="container-login100-form-btn">
            <button class="login100-form-btn" onClick={showToastMessage}>
              Sign up
            </button>
            <ToastContainer/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
