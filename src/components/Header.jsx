import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header id="home" class="header-area header-sticky">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="main-nav">
                <a href="index.html" class="logo"><em>MyBandTour</em></a>
                <ul class="nav">
                  <li class="scroll-to-section"><Link to='/'>Home</Link></li>                
                  <li class="scroll-to-section"><a href="#ayuda">Help</a></li>
                  <li class="scroll-to-section"><Link to='/Login'>Login</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header