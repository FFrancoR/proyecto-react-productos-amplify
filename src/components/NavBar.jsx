import { ShoppingCart } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CarritoContext } from "../context/CarritoContext.jsx";

export const NavBar = () => {

  const { listaCompras } = useContext(CarritoContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="./" className="navbar-brand" href="#">🎇</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="./" className="nav-link active" aria-current="page" href="#">Catálogo</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/usuarios" className="nav-link active" aria-current="page" href="#">Usuarios</NavLink>
            </li>
          </ul>
          <NavLink className="btn btn-primary" to="/register">
            Register
          </NavLink>
          <NavLink to="/carrito">
            {
              listaCompras.length >= 1
                ?
                <Badge badgeContent={listaCompras.length === 0 ? null : listaCompras.length} color="secondary">
                  <ShoppingCart color="action" />
                </Badge>
                :
                null
            }
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
