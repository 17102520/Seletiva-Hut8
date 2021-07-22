import React from 'react';
import './rectangle.css';

function Rectangle(props){ 

    let property = props.quantity
        if (props.quantity < 10) {
            property = `0${props.quantity} `
        }


    return (
        <div className="rectangle">
            <div className="rectangle__text">
                <div className="rectangle__quantity">{property}</div>
                <div className="rectangle__enrolledCourses">{props.status}</div>
            </div>
            <div className="rectangle__icon"> 
                <i>{props.icon}</i>
            </div>
        </div>
    )
}

export default Rectangle;