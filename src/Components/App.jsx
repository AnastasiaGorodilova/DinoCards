import { useState } from 'react'
import './App.css'
import Cards from './Cards/Cards.jsx'
import { words } from './Cards/data.jsx'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'


export default function App() {

  return (
    <div>
      <Header />

      <main>
        <ul className='cards'>
          {words.map((card, id) => (
            <Cards key={id} {...card} />
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  )
}





