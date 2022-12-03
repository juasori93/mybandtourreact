import React from 'react'
import Signup from './Signup'
import { HashRouter, NavLink } from 'react-router-dom'

const main = () => {
  return (
    <div class='limiter'>
      <h1 class="login100-form-title p-b-70">
        Main
      </h1>
      <li> <NavLink to="/Signup"> SignUp </NavLink></li>
    </div>
  )
}

export default main