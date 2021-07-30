import React, { useState, useEffect } from 'react';
import './courses.css'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import Card from '../../Components/Card/card'

const Courses = () => {

    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetchCards();
    }, []);
    const fetchCards = () => {
        axios
            .get('https://processo-seletivo-hut8.herokuapp.com/courses')
            .then((res) => {
                //console.log(res);
                setCards(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="courses-container">
            <h1 className="courses-my">Meus Cursos</h1>
            <div className="courses-cards">
                {cards.map((property) => (
                    <div key={property.id} className="courses-eachCard">
                        <NavLink exact to={`/courses/${property.id}`} className="courses-course_button">
                            <Card
                                image={property.image}
                                type={property.type}
                                course={property.course}
                                class={property.class}
                                />
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Courses;