function ArbolesNavidad() {
  return (
    <div className="text-center">
      <h1 className="mb-5 text-success">Árboles de Navidad Más Hermosos</h1>
      <div id="carouselArboles" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner rounded shadow">
          <div className="carousel-item active">
            <img src="https://www.hola.com/horizon/square/88bb7d5766cc-arbol-navidad-natural-t.jpg?w=800" className="d-block w-100" alt="Árbol dorado" style={{height: "500px", objectFit: "cover"}} />
          </div>
          <div className="carousel-item">
            <img src="https://hips.hearstapps.com/hmg-prod/images/arbol-navidad-69022f903953b.jpg?crop=0.7499186991869918xw:1xh;center,top&resize=1200:*?w=800" className="d-block w-100" alt="Árbol nevado" style={{height: "500px", objectFit: "cover"}} />
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvygSWTqNCm5tmJ-m0Bp8uAg6LL-72tW_OPA&s?w=800" className="d-block w-100" alt="Árbol con regalos" style={{height: "500px", objectFit: "cover"}} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselArboles" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselArboles" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  )
}
export default ArbolesNavidad