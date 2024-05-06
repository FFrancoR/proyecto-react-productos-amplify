import { useContext, useState } from "react";
import { Card } from "../components/Card";
import { CarritoContext } from "../context/CarritoContext";
import { ProductosContext } from "../context/ProductosContext";
import '../styles/card.css';

export const ComprasPage = () => {

  const { productos } = useContext(ProductosContext);
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext);

  const productosFiltradosPorPrecio = [...productos].sort((a, b) => a.price - b.price)
  const productosFiltradosPorCalificacion = [...productos].sort((a, b) => a.rating.rate - b.rating.rate)
  const [shownProducts, setShownProducts] = useState(productos)
  const [appliedFilter, setAppliedFilter] = useState(null);


  const handleAgregar = (compra) => {
    agregarCompra(compra)
  }

  const handleQuitar = (id) => {
    eliminarCompra(id)
  }

  const handleSortByPrice = () => {
    setShownProducts(productosFiltradosPorPrecio)
    setAppliedFilter("Precio")
  }

  const handleSortByRatingASC = () => {
    setShownProducts(productosFiltradosPorCalificacion)
    setAppliedFilter("Calificacion")
  }

  const handleShowDefaultList = () => {
    setShownProducts(productos)
    setAppliedFilter(null)
  }

  return (
    <>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {appliedFilter ? `Filtrar por ${appliedFilter}` : "Filtrar"}
        </button>
        {appliedFilter ?
          <button className="btn btn-danger" onClick={() => handleShowDefaultList()}>
            Eliminar Filtros
          </button> :
          null}
        <ul className="dropdown-menu">
          <li onClick={() => handleSortByPrice()} className="dropdown-item">Por precio</li>
          <li onClick={() => handleSortByRatingASC()} className="dropdown-item">Por calificacion</li>
        </ul>
      </div>
      <div>

        {shownProducts.map(producto => (
          <Card
            key={producto.id}
            imagen={producto.image}
            titulo={producto.title}
            descripcion={producto.description}
            precio={producto.price}
            calificacion={producto.rating.rate}
            handleAgregar={() => handleAgregar(producto)}
            handleQuitar={() => handleQuitar(producto.id)}
          ></Card>
        ))}
      </div>


    </>
  )
}
