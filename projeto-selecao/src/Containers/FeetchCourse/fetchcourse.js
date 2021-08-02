import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './fetchcourse.css'

import { FaGraduationCap, FaUserGraduate } from 'react-icons/fa';
import { GrUnorderedList } from 'react-icons/gr'

import Card from '../../Components/Card/card'
import Rectangle from '../../Components/Rectangle/rectangle'
import Professor from '../../Components/Professor/professor'

const Course = ({ courses }) => {

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
                //console.log(res.data);
            })
            .catch((err) => console.log(err));
    };

    const recs = [
        { quantity: data?.overview?.nextActivities, status: "Atividades próximas", icon: <GrUnorderedList/> },
        { quantity: data?.overview?.credits, status: "Créditos", icon: <FaGraduationCap/> },
        { quantity: data?.overview?.enrolledStudents, status: "Alunos matrículados", icon: <FaUserGraduate/>  },
    ]

    const reclist = recs.map((rec, index) => (
        <Rectangle
            quantity={rec.quantity}
            status={rec.status}
            icon={rec.icon}
            key={index}
        />
    ))

    // const professorList = data?.teacher?.map((prof, index) => (
    //     <Professor
    //         avatar={prof.avatar}
    //         name={prof.name}
    //         key={index}
    //      />
    //  ))

    const cardsList = data?.nextActivities?.map((card, index) => (
        <Card
            image={card.image}
            course={card.course}
            title={card.title}
            deadline={card.deadline}
            key={index}
         />
     ))

    return (
        <div key={data.id} className="fetch-container">
            <div className="fetch-usingData">
                <div className="fetch-usingData_resume">
                    <div className="fetch-usingData_resume_data">
                        <h1 className="fetch-usingData_resume_course">{data?.course}</h1>
                        <p className="fetch-usingData_resume_class">{data?.class}</p>
                    </div>
                    <div className="fetch-usingData_resume_professor">
                        <div className="fetch-usingData_resume_professor_img">
                            <img src={data?.teacher?.avatar} alt="Foto de perfil" className="professor-avatar" />
                        </div>
                        <div className="fetch-usingData_resume_professor_data">
                            <h1 className="professor_name">{data?.teacher?.name} </h1>
                            <p className="professor_responsible">Professor responsável</p>
                        </div>
                    </div>
                </div>
                <div className="fetch-usingData_rectangle">{reclist}</div>
                <div className="fetch-usingData_activitie">
                    <h1 className="fetch-usingData_activitie_nextActivities">Próximas atividades</h1>
                </div>
                <div className="fetch-usingData_card">{cardsList}</div>
            </div>   
        </div>  
    );    
};

export default Course;