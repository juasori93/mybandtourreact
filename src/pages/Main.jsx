import React from 'react'
import { HashRouter, NavLink } from 'react-router-dom'
import '../css/style.css'
import '../css/templatemo-training-studio.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Events from '../components/Events'
import Footer from '../components/Footer'

const Main = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Events />
      <Footer />
    </div>
  )
}

export default Main