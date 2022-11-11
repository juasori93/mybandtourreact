import React, { useState, useEffect } from 'react';

const Signup = () => {
  return (
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100 p-t-85 p-b-20">
          <form class="login100-form validate-form">
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
              <button class="login100-form-btn">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
