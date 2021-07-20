import React from 'react';

const List = () => (

    const { image, title, course, deadline}

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

);

export default function CardsList(props){
    const cardsList = props.cards.map((card, index) => (
        <Card
            card={card}
            key={index}
        />
    ))

    return(
        <div className="CardsList">
            <div>{props.title}</div>
            <div className="cards-list">{cardsList}</div>
        </div>
    )
}