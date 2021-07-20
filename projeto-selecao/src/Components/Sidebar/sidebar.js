import React from 'react';
import './sidebar.css';

const Sidebar = ({ user, sidebar}) => (

    <div className="conteiner">

        <div className="sidebar">
            <div>
                <img src={user.avatar} alt="Foto do perfil" className="sidebar-avatar__image" />
                <h1 className="sidebar-avatar__name">{user.name}</h1>
                <p className="sidebar-avatar__course">{user.course}</p>
            </div>
            <div className="menu">
                <button type="button" className="sidebar-menu__dashboard" >{sidebar.dashboard}</button>
                <button type="button" className="sidebar-menu__area">{sidebar.myarea}</button>
            </div>
        </div>
    </div>


)

export default Sidebar;