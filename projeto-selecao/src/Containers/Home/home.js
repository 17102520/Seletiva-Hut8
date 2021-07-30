import React from 'react';
import './home.css'
import { FaGraduationCap, FaUserGraduate } from 'react-icons/fa';
import { GrUnorderedList } from 'react-icons/gr'

import Card from '../../Components/Card/card'
import Rectangle from '../../Components/Rectangle/rectangle'



const Home = ({ user }) => {

    // Dados para os retângulos e o seu .map para percorrer os dados e coloca-los em cada retângulo
    const recs = [
        { quantity: user?.overview?.enrolledCourses, status: "Cursos matriculados", icon: <FaGraduationCap/> },
        { quantity: user?.overview?.nextActivities, status: "Atividades próximas", icon: <GrUnorderedList/> },
        { quantity: user?.overview?.onlineStudents, status: "Alunos online", icon: <FaUserGraduate/>  },
    ]

    const reclist = recs.map((rec, index) => (
        <Rectangle
            quantity={rec.quantity}
            status={rec.status}
            icon={rec.icon}
            key={index}
        />
    ))

    // Dados para os cards e o seu .map para percorrer os dados e coloca-los em cada card
    
    const cardsList = user?.nextActivities?.map((card, index) => (
        <Card
            image={card.image}
            course={card.course}
            title={card.title}
            deadline={card.deadline}
            key={index}
         />
     ))

    return (
        <div className="home-conteiner">
            <div className="home-middle">
                <h1 className="home-resume">Resumo</h1>
                <div className="home-rectangle">{reclist}</div>
                <h1 className="home-next">Próximas atividades</h1>
                <div className="home-cards">{cardsList}</div>
            </div>

        </div>
    )
}

export default Home;