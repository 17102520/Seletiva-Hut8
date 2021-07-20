import React from 'react';
import './rectangle.css';
import { FaGraduationCap } from 'react-icons/fa';

const Rectangle = ({ status, user }) => (

    <div className="rectangle">
        <h1 className="activities-rectangle__quantity">{user.overview.enrolledCourses}</h1>
        <p className="activities-rectangle__enrolledCourses">{status.status}</p>
        <FaGraduationCap className="activities-rectangle__icon" />
    </div>
)

export default Rectangle;