import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './fetchcourse.css'

const Course = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetchCourse();
    }, []);
    const fetchCourse = () => {
        axios
            .get(
                `https://processo-seletivo-hut8.herokuapp.com/courses/${id}`
            )
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }

    // return (
    //     <div>
    //         {data.map((course) => {
                 return (
    //                 console.log(data),
                    // <div className='course-container' key={course.id}>
                        <div>
                            <h1>ASUDHSAUDUASHDUASHDUASHDSAUDHSAUDHUSA</h1>
                        </div>
                    // </div>
        //         )
        //     })}
        // </div>
    );
};

export default Course;

