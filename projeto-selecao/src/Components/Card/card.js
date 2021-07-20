import React from 'react';
import './card.css';

const Card = ({nextActivities}) => (
   
    <div className="card">
        <img src={nextActivities.image} alt="Imagem Ilustrativa" className="card-image" />
        <div className="card-underRectangle">
            <p className="card-subject">{nextActivities.course}</p>
            <h1 className="card-task">{nextActivities.title}</h1>
            <p className="card-deadline">{nextActivities.deadline}</p>
        </div>
    </div>

);

export default Card;