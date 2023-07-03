import './Navbar.css'
import React, {useState, useContext} from 'react'
import {NavLink} from 'react-router-dom'
import LogoutButton from '../user/Logout'
import { AuthContext } from "../auth/AuthContext";

export default function Navbar() {
    const [selected, setSelected] = useState('main');
    const {token} = useContext(AuthContext);
    // console.log(token)

    const handleSelect = (link) => {
        setSelected(link);
    };
    
    return(
        <nav>
            <a href="./" id="nav-ataque">ATAQUE</a>
            <NavLink to="/mainpage">Juego</NavLink>
            
            {(token != "null") && (
                <>
                    <NavLink to="/joingame">Jugar</NavLink>
                </>
            )}

            <NavLink to="/instructions">Instrucciones</NavLink>
            <NavLink to="/ourteam">Nuestro Equipo</NavLink>

            {(token == "null") && (
                <>
                    <NavLink className={'nav-right'} to="/login">Iniciar Sesión</NavLink>
                    <NavLink className={'nav-last-right'} to="/register">Regístrate</NavLink>
                </>
            )}

            {(token != "null") && (
                <>
                    <LogoutButton>Cerrar Sesión</LogoutButton>
                </>
            )}
        </nav>
    )
}