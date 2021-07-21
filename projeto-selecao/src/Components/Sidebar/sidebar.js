import React from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ user, sidebar}) => (

    <div className="conteiner">

        <div className="sidebar">
            <div>
                <img src={user.avatar} alt="Foto do perfil" className="sidebar-avatar__image" />
                <h1 className="sidebar-avatar__name">{user.name}</h1>
                <p className="sidebar-avatar__course">{user.course}</p>
            </div>
            <div className="menu">
                <NavLink to='/' className="sidebar-menu__dashboard" >{sidebar.dashboard}</NavLink>
                <NavLink to='/courses' className="sidebar-menu__area">{sidebar.myarea}</NavLink>
            </div>
        </div>
    </div>


)

export default Sidebar;