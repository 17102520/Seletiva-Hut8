import React from 'react';
import './courses.css'

import Card from '../../Components/Card/card'

const Courses = ( {courses} ) => {

    const cardsList = courses?.map((card, index) => (
        <Card
            image={card.image}
            type={card.type}
            course={card.course}
            class={card.class}
            key={index}
         />
     ))

    return (
        <div className="courses-container">
            <h1 className="courses-my">Meus Cursos</h1>
            <div className="courses-cards">{cardsList}</div>
        </div>
    )



};

export default Courses;