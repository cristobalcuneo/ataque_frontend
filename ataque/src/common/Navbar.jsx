import './Navbar.css'
import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import LogoutButton from '../user/Logout'

export default function Navbar() {
    const [selected, setSelected] = useState('main');
    const handleSelect = (link) => {
        setSelected(link);
    };
    return(
        <nav>
            <a href="./" id="nav-ataque">ATAQUE</a>
            <NavLink to="/mainpage">Juego</NavLink>
            <NavLink to="/ourteam">Nuestro Equipo</NavLink>
            <NavLink to="/instructions">Instrucciones</NavLink>
            <NavLink to="/joingame">Jugar</NavLink>
            <NavLink to="/board">Tablero</NavLink>
            <NavLink className={'nav-right'} to="/login">Iniciar Sesión</NavLink>
            <NavLink className={'nav-last-right'} to="/register">Regístrate</NavLink>
            <LogoutButton className={'nav-last-right'}>Cerrar Sesión</LogoutButton>
        </nav>
    )
}