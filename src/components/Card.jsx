import { Rating, Typography, buttonClasses } from "@mui/material";
import { useState } from "react"
import '../styles/card.css'

export const Card = ({ imagen, titulo, descripcion, precio, calificacion, handleAgregar, handleQuitar, handleAumentar, handleDisminuir }) => {

    const [added, setAdded] = useState(false);

    const clickAgregar = () => {
        handleAgregar()
        setAdded(true)
    }

    const clickQuitar = () => {
        handleQuitar()
        setAdded(false)
    }


    return (
        <div className="tarjeta">
            <img src={imagen} alt={titulo} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{titulo} </h3>
                <p className="tarjeta-descripcion">{descripcion} </p>
                <p className="tarjeta-precio">{"$" + precio} </p>
                <Rating name="read-only" value={calificacion} precision={0.1} readOnly />
                <div>
                    {added
                        ?
                        <button type="button" className="boton-quitar" onClick={() => clickQuitar()}>
                            Quitar del Carrito
                        </button>
                        :
                        <button type="button" className="boton-agregar" onClick={() => clickAgregar()}>
                            Agregar al carrito
                        </button>
                    }
                </div>
            </div>



        </div>
    )
}
