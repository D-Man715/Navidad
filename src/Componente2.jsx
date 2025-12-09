import React from 'react';

function Componente2() {
  return (
    <>
      {/* Título principal */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">
          Galería de Computadoras 2025
        </h1>
        <p className="lead text-muted">
          Explora las mejores máquinas para trabajo, estudio y gaming
        </p>
      </div>

      {/* Dos columnas con carruseles */}
      <div className="row g-5">

        {/* Carrusel 1: Computadoras de Escritorio */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-lg h-100">
            <div className="card-body p-4">
              <h3 className="text-center mb-4 text-success">
                Computadoras de Escritorio
              </h3>

              <div
                id="carouselDesktop"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner rounded">
                  <div className="carousel-item active">
                    <img
                      src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800"
                      className="d-block w-100"
                      alt="PC Gaming RGB"
                      style={{ height: '350px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=800"
                      className="d-block w-100"
                      alt="Setup profesional"
                      style={{ height: '350px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1547658709-4e085bc8b17e?auto=format&fit=crop&w=800"
                      className="d-block w-100"
                      alt="PC minimalista blanca"
                      style={{ height: '350px', objectFit: 'cover' }}
                    />
                  </div>
                </div>

                {/* Controles */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselDesktop"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselDesktop"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Siguiente</span>
                </button>

                {/* Indicadores (puntitos) */}
                <div className="carousel-indicators position-absolute bottom-0 start-50 translate-middle-x">
                  <button type="button" data-bs-target="#carouselDesktop" data-bs-slide-to="0" className="active"></button>
                  <button type="button" data-bs-target="#carouselDesktop" data-bs-slide-to="1"></button>
                  <button type="button" data-bs-target="#carouselDesktop" data-bs-slide-to="2"></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carrusel 2: Laptops y Gaming */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-lg h-100">
            <div className="card-body p-4">
              <h3 className="text-center mb-4 text-danger">
                Laptops & Gaming
              </h3>

              <div
                id="carouselLaptops"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner rounded">
                  <div className="carousel-item active">
                    <img
                      src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800"
                      className="d-block w-100"
                      alt="Laptop gaming RGB"
                      style={{ height: '350px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800"
                      className="d-block w-100"
                      alt="MacBook Pro"
                      style={{ height: '350px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=800"
                      className="d-block w-100"
                      alt="Laptop ultrabook delgada"
                      style={{ height: '350px', objectFit: 'cover' }}
                    />
                  </div>
                </div>

                {/* Controles */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselLaptops"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselLaptops"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Siguiente</span>
                </button>

                {/* Indicadores */}
                <div className="carousel-indicators position-absolute bottom-0 start-50 translate-middle-x">
                  <button type="button" data-bs-target="#carouselLaptops" data-bs-slide-to="0" className="active"></button>
                  <button type="button" data-bs-target="#carouselLaptops" data-bs-slide-to="1"></button>
                  <button type="button" data-bs-target="#carouselLaptops" data-bs-slide-to="2"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pie de página opcional dentro del componente */}
      <div className="text-center mt-5 text-muted">
        <p>Desarrollado con ❤️ por Manfred Omar López Valero - 2025</p>
      </div>
    </>
  );
}

export default Componente2;