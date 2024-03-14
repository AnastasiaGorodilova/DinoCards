import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import Footer from './Components/Footer/Footer.jsx'
import Training from './Components/Training/Training.jsx'
import Table from './Components/Table/Table.jsx'


export default function App() {

  return (
    <>
      <Router>
        <header>
          <div className='header'>
            <Link to="/">ЛОГО</Link>

            <Link to="/game">GAME</Link>

          </div>
        </header>

        <Routes>

          <Route path="/" element={<Table />} />
          <Route path="/game" element={<Training />} />

        </Routes>

      </Router>

      <Footer />
    </>
  )
}
