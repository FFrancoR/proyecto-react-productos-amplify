import React, { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"

export const CarritoPage = () => {



  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra, borrarTodo } = useContext(CarritoContext);

  const calcularTotal = () => {
    return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
  }

  const handleImpresion = () => {
    if (listaCompras.length < 1) return;
    print();
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {listaCompras.map(item => (
            <tr key={item.id}>
              <th >{item.title} </th>
              <td>{item.price}</td>
              <td>
                <button className="btn btn-outline primary" onClick={() => disminuirCantidad(item.id)}>-</button>
                <button className="btn btn-primary">{item.cantidad}</button>
                <button className="btn btn-outline primary" onClick={() => aumentarCantidad(item.id)}>+</button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => eliminarCompra(item.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}

          <th><b>Total Compra:</b></th>
          <td> ${calcularTotal()}</td>
          <td> </td>
          <td></td>

        </tbody>
      </table>
      <div className="d-grid gap-2">

        {listaCompras.length >= 1
          ?
          <div>
            <button onClick={() => handleImpresion()} className="btn btn-primary" disabled={listaCompras.length < 1}>
              COMPRAR
            </button>
            <button onClick={() => borrarTodo()} className="btn btn-danger" disabled={listaCompras.length < 1}>
              Borrar Todo
            </button>
          </div>
          :
          null
        }
      </div>
    </>
  )
}
