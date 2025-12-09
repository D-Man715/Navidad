import React from 'react';

function Componente1() {
  return (
    <>
      {/* Fondo blanco con toque sutil navideño */}
      <div className="min-vh-100 bg-light d-flex align-items-center">
        <div className="container text-center py-5">

          {/* Título simple y elegante */}
          <h1 className="display-3 fw-bold mb-4">
            <span className="text-danger">Feliz</span>{' '}
            <span className="text-success">Navidad</span>
          </h1>
          
          <h2 className="display-5 text-secondary mb-5">
            2025
          </h2>

          {/* Carrusel minimalista con solo 3 fotos bonitas */}
          <div className="col-12 col-lg-6 mx-auto">
            <div
              id="carouselSimple"
              className="carousel slide rounded-4 shadow-sm"
              data-bs-ride="carousel"
              data-bs-interval="4000"
            >
              <div className="carousel-inner rounded-4 overflow-hidden">
                <div className="carousel-item active">
                  <img
                    src="https://www.umsa.bo/documents/20142/0/navidad.jpg/5bd0333c-7fa6-2835-19e5-5a775248aeab?t=1734031270080?w=900"
                    className="d-block w-100"
                    alt="Navidad cálida"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMjJRWmcbPShh9VySLGVS3mTN9Qq7pmniXXw&s?w=900"
                    className="d-block w-100"
                    alt="Árbol de Navidad"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iPzYzqtZN6xAJ3m3dZXlwkG1luzRb4Vm2A&s?w=900"
                    className="d-block w-100"
                    alt="Luces suaves"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </div>
              </div>

              {/* Controles sutiles */}
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselSimple" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselSimple" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>

          {/* Mensaje final cálido y sencillo */}
          <div className="mt-5">
            <p className="lead text-muted mb-3">
              Que esta Navidad te traiga paz, salud y momentos felices junto a los tuyos.
            </p>
            <p className="text-secondary fs-5">
              Con cariño,<br />
              <strong className="text-dark">Manfred Omar López Valero</strong>
            </p>
            <p className="text-danger mt-4">♥ Navidad 2025 ♥</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Componente1;