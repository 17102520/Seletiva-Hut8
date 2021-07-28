import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './fetchcourse.css'

const Course = ({ match }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchCourse();
    }, []);
    const fetchCourse = () => {
        axios
            .get(
                `https://processo-seletivo-hut8.herokuapp.com/courses/?id=${match.params.id}`
            )
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            {data.map((course) => {
                return (
                    <div className='course-container' key={course.id}>
                        <div>
                            <h1>ASUDHSAUDUASHDUASHDUASHDSAUDHSAUDHUSA</h1>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Course;

