import React from 'react';
import './rectangle.css';
import { FaGraduationCap } from 'react-icons/fa';

function Rectangle(props){ 

    return (
        <div className="rectangle">

            <div className="rectangle__quantity">{props.quantity}</div>
            <div className="rectangle__enrolledCourses">{props.status}</div>
            <div className="rectangle__icon"> 
                <i>{props.icon}</i>
            </div>
        </div>
    )
}

export default Rectangle;