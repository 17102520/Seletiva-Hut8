import React from 'react';
import './rectangle.css';
import {FaGraduationCap} from 'react-icons/fa';

const Rectangle = ({overview}) => (

    <div className="rectangle"> 
        <h1 className="activities-rectangle__quantity">{overview.enrolledCourses}</h1>
        <p className="activities-rectangle__enrolledCourses">{overview.matri}</p>
        <FaGraduationCap className="activities-rectangle__icon"/>
    </div>
)

export default Rectangle;