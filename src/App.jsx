import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Training from './Components/Training/Training.jsx'


export default function App() {

  return (
    <>
      <Header />
      <main>
        <Training />
      </main>
      <Footer />
    </>
  )
}





