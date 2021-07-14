import React from 'react';
import logo from './Ellipse 1.png';
import './sidebar.css'

const Sidebar = ({ sidebar }) => (

    <div className="conteiner">

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap" rel="stylesheet" />

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