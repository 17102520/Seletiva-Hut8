import React from 'react';
import './home.css'
import { FaGraduationCap, FaUserGraduate } from 'react-icons/fa';
import { GrUnorderedList } from 'react-icons/gr'

import Sidebar from '../../Components/Sidebar/sidebar'
import Card from '../../Components/Card/card'
import Rectangle from '../../Components/Rectangle/rectangle'
import Cardlist from '../../Components/CardList/cardlist'

// Dados para os retângulos e o seu .map para percorrer os dados e coloca-los em cada retângulo
const recs = [
    { quantity: "02", status: "Cursos matriculados", icon: <FaGraduationCap/> },
    { quantity: "02", status: "Atividades próximas", icon: <GrUnorderedList/> },
    { quantity: "785", status: "Alunos online", icon: <FaUserGraduate/>  },
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
const cards = [
    { image: "https://i.imgur.com/aadwyfC.jpg", course: "Algoritmos e Programação", tittle: "Enviar arquivo Peter Smokes", deadline: "10/10/21"},
    { image: "https://i.imgur.com/RgQrlAS.jpg", course: "Projeto de Banco de Dados", tittle: "Enviar o esquema MySQL", deadline: "10/10/21"},
]

const cardsList = cards.map((card, index) => (
    <Card
        image={card.image}
        course={card.course}
        tittle={card.tittle}
        deadline={card.deadline}
        key={index}
    />
))

const Home = ({ user }) => (

    <div className="home-conteiner">

        {/* <div className="home-dashboard">
          <Sidebar user={user} sidebar={sidebar} />
        </div>
        */}
        <div className="home-middle">
            <h1 className="home-resume">Resumo</h1>
            <div className="home-rectangle">{reclist}</div>
            <h1 className="home-next">Próximas atividades</h1>
            <div className="home-cards">{cardsList}</div>
        </div>

    </div>
)

export default Home;