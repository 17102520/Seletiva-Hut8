import React from 'react';
import logo from './Ellipse 1.png';
import './sidebar.css'

const Sidebar = ({ sidebar }) => (

    <div className="conteiner">

        <div className="sidebar">
            <div>
                <img src={logo} alt="Foto do perfil" className="sidebar-avatar__image" />
                <h1 className="sidebar-avatar__name">{sidebar.name}</h1>
                <p className="sidebar-avatar__curse">{sidebar.curse}</p>
            </div>
            <div className="menu">
                <h1 className="sidebar-menu__dashboard">{sidebar.dashboard}</h1>
                <h1 className="sidebar-menu__area">{sidebar.myarea}</h1>
            </div>
        </div>
    </div>


)

export default Sidebar;