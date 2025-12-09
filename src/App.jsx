import { useState } from 'react'
import './App.css'
import { Route, Routes, Link, useLocation } from 'react-router-dom'
import Componente1 from './Componente1'
import Componente2 from './Componente2'
import Navidad from './Navidad'           // Nuevo
import ArbolesNavidad from './ArbolesNavidad' // Nuevo
import RegalosTech from './RegalosTech'     // Nuevo

function App() {
  const location = useLocation()

  return (
    <>
      {/* Header con temática navideña */}
      <div className="bg-success text-white text-center py-4 mb-4 shadow-lg">
        <h1 className="display-5 fw-bold">
           NAVIDAD 2025
        </h1>
        <p className="mb-0">¡Feliz Navidad, Manfred! Que este 2025 brille como tus proyectos</p>
      </div>

      {/* Navbar con 5 pestañas */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 sticky-top shadow">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto fs-5">
              <li className="nav-item px-3">
                <Link 
                  className={`nav-link ${location.pathname === '/' ? 'active text-warning' : 'text-light'}`}
                  to="/"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link 
                  className={`nav-link ${location.pathname === '/Componente2' ? 'active text-warning' : 'text-light'}`}
                  to="/Componente2"
                >
                  Galería
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link 
                  className={`nav-link ${location.pathname === '/navidad' ? 'active text-danger fw-bold' : 'text-danger'}`}
                  to="/navidad"
                >
                  Navidad 2025
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link 
                  className={`nav-link ${location.pathname === '/arboles' ? 'active text-success fw-bold' : 'text-success'}`}
                  to="/arboles"
                >
                  Árboles y Luces
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link 
                  className={`nav-link ${location.pathname === '/regalos' ? 'active text-info fw-bold' : 'text-info'}`}
                  to="/regalos"
                >
                  Regalos Tech
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container min-vh-100">
        <Routes>
          <Route path="/" element={<Componente1 />} />
          <Route path="/Componente2" element={<Componente2 />} />
          
          {/* Rutas navideñas nuevas */}
          <Route path="/navidad" element={<Navidad />} />
          <Route path="/arboles" element={<ArbolesNavidad />} />
          <Route path="/regalos" element={<RegalosTech />} />
          
          <Route path="*" element={
            <div className="text-center py-5">
              <h2>404 - Página no encontrada</h2>
              <p>Vuelve al <Link to="/">inicio</Link></p>
            </div>
          } />
        </Routes>
      </main>

      {/* Footer navideño */}
      <footer className="bg-dark text-white text-center py-4 mt-auto">
        <h5 className="mb-0">
          AUTOR: MANFRED OMAR LÓPEZ VALERO © 2025
        </h5>
        <p className="mb-0 mt-2">¡Feliz Navidad y próspero Año Nuevo!</p>
      </footer>
    </>
  )
}

export default App    