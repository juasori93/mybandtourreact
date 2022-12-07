import React from 'react'

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
                  <li class="scroll-to-section"><a href="index.html" class="active">Inicio</a></li>
                  <li class="scroll-to-section"><a href="#categorias">Categorías</a></li>
                  <li class="scroll-to-section"><a href="principal.html">Eventos</a></li>
                  <li class="scroll-to-section"><a href="#ayuda">Ayuda</a></li>
                  <li class="scroll-to-section"><a href="#perfil">Perfil</a></li>
                  <li class="main-button"><a href="#">Salir</a></li>
                </ul>
                <a class='menu-trigger'>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header