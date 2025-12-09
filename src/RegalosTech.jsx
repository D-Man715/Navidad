function RegalosTech() {
  return (
    <div>
      <h1 className="text-center mb-5 text-danger">Regalos Tecnológicos para Navidad 2025</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {[
          {nombre: "PS5 Pro", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjnIwY2c_pLXybmoSDikwCF6hehjs0xb6UzQ&sw600"},
          {nombre: "iPhone 16", img: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-geo-240909-lp.jpg.news_app_ed.jpg?w=600"},
          {nombre: "MacBook Air M3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Z-O6d6pmgSpFM3wH2PNcslRi3HyFmagsDQ&sw=600"},
          {nombre: "RTX 5090", img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600"},
          {nombre: "Oculus Quest 3", img: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=600"},
          {nombre: "Smart TV 4K", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyF2xrLxs2jkIHeieos2ESDEzsm66e59a0Kg&sw=600"}
        ].map((regalo) => (
          <div className="col">
            <div className="card h-100 shadow text-center">
              <img src={regalo.img} className="card-img-top" alt={regalo.nombre} style={{height: "250px", objectFit: "cover"}} />
              <div className="card-body bg-danger text-white">
                <h5 className="card-title">{regalo.nombre}</h5>
                <p>¡El regalo perfecto para Navidad!</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default RegalosTech  