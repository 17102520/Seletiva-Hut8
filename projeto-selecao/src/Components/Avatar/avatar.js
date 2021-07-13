import React from 'react';
import logo from './Ellipse 1.png';
import './avatar.css';

const Avatar = ({ avatar }) => (
    <div className="avatar">

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap" rel="stylesheet"/> 

        <img src={logo} alt="Foto do perfil" className="avatar__image" />
        <div>
            <h1 className="avatar__name">{avatar.name}</h1>
            <p className="avatar__curse">{avatar.curse}</p>
        </div>
    </div>



)

export default Avatar;