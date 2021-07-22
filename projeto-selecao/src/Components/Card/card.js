import React from 'react';
import './card.css';

function Card(props) {

    return (
        <div className="card">
                <img src={props.image} alt="Imagem Ilustrativa" className="card-image" />
                <div className="card-underRectangle">
                    <p className="card-subject">{props.course}</p>
                    <h1 className="card-task">{props.title}</h1>
                    <p className="card-deadline">{props.deadline}</p>
                </div>
            </div>
    )
};

export default Card;