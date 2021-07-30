import React from 'react';
import './professor.css';

function Professor (props) {

    return (
        <div className="professor-container">
            <div>
                <img src={props.avatar} alt="Foto de perfil" className="professor-avatar" />
            </div>
            <div className="professor-text">
                <h1 className="professor-text_name">{props.name}</h1>
                <p className="professor-text_responsible">Professor responsável</p>
            </div>
        </div>
    );
}

export default Professor;