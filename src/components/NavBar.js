import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <h3>Barra de Navegación</h3>
            <Link to="/">Inicio</Link> |{" "}
            <Link to="episodios">Episodios</Link> |{" "}
            <Link to="ItemDetail">ItemDetail</Link> |{" "}
            <Link to="login">Iniciar Sesión</Link> |{" "}
            <Link to="contacto">Contacto</Link>
        </>
    )
}

export default NavBar;