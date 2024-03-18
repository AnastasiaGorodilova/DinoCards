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
import NoMatch from './Components/404/404.jsx';


export default function App() {

  return (
    <>
      <Router>
        <header>
          <div className='header'>
            <Link to="/" className='logo'> <img src="../public/Logo.png" alt="Logo" /> DinoCards: Repeat & Roar</Link>

            <Link to="/game">Game</Link>

          </div>
        </header>

        <Routes>

          <Route path="/" element={<Table />} />
          <Route path="/game" element={<Training />} />
          <Route path="*" element={<NoMatch />} />

        </Routes>

      </Router>

      <Footer />
    </>
  )
}
