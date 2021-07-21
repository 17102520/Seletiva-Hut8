import React from 'react';

function List(props) {

    const { image, title, course, deadline } = props.card; 

    return (
    <div className="List">
        <img src={image} alt="Image Ilustrativa" className="image" />
        <div className="cardinside" >
            <div className="card-title">{title}</div>
            <div className="card-course">{course}</div>
            <div className="card-deadline">{deadline}</div>
        </div>
    </div>
)

};

export default function CardList(props) {
    const cardsList = props.cards.map((card, index) => (
        <List
            card={card}
            key={index}
        />
    ))

    return (
        <div className="CardsList">
            <div>{props.title}</div>
            <div className="cards-list">{cardsList}</div>
        </div>
    )
}