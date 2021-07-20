import React from 'react';
import './home.css'

import Sidebar from '../../Components/Sidebar/sidebar'
import Card from '../../Components/Card/card'
import Rectangle from '../../Components/Rectangle/rectangle'

const sidebar = {
    "dashboard": "Dashboard",
    "myarea": "Meus cursos",
};

const status = {
    "status": "Cursos Matriculados",
}

const nextActivities = [
    {
        "course": "Algoritmos e Programação",
        "title": "Enviar arquivo Peter Smokes",
        "image": "https://i.imgur.com/aadwyfC.jpg",
        "deadline": "10/10/21"
    },
    {
        "course": "Projeto de Banco de Dados",
        "title": "Enviar o esquema MySQL",
        "image": "https://i.imgur.com/RgQrlAS.jpg",
        "deadline": "10/10/21"
    },
];



const Home = ({ user }) => (

    <div className="home-conteiner">

        <div className="home-dashboard">
            <Sidebar user={user} sidebar={sidebar} />
        </div>

        <div className="home-middle">
            <h1 className="home-resume">Resumo</h1>
            <div>
                <Rectangle user={user} status={status} />
            </div>
            <h1 className="home-next">Próximas atividades</h1>
            <div>
                <Card user={user} nextActivities={nextActivities} />
            </div>
        </div>

    </div>
)

export default Home;