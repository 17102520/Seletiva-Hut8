import React, { useEffect, useState } from 'react'
import './App.css';

import { getUser } from './Services/request'
import { getCourses } from './Services/request'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './Conteiners/Home/home'
import Sidebar from './Components/Sidebar/sidebar'
import Courses from './Conteiners/Courses/courses'
import FetchCourse from './Components/FetchCourse/fetchcourse'


const sidebar = {
  "dashboard": "Dashboard",
  "myarea": "Meus cursos",
};
// eslint-disable-next-line no-lone-blocks
{/*Aquisições da api: Primeiro elas vão para a variável "data" e a partir do useState conseguimos settar na variável user e assim podemos usar. */ }
const App = () => {

  const [user, setUser] = useState([])

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await getUser()
        setUser(data)
      }
      catch (err) {
        console.err(err)
      }
    }

    getUserData()
  }, [])

  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getCoursesData = async () => {
      try {
        const { data } = await getCourses()
        setCourses(data)
      }
      catch (err) {
        console.err(err)
      }
    }

    getCoursesData()
  }, [])

  

  // eslint-disable-next-line no-lone-blocks
  {/*Definindo as rotas de cada página do site */ }
  const routes = [
    {
      path: '/',
      exact: true,
      main: () => <Home user={user} />
    },
    {
      path: '/courses',
      exact: true,
      main: () => <Courses courses={courses}/>
    },
    {
      path: '/courses/:id',
      main: () => <FetchCourse/>
    }

  ]
  return (
    console.log(),
    <div className="App">
      <Router>
        <Sidebar user={user} sidebar={sidebar} />
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
          ))}
        </Switch>

      </Router>
    </div>


  );
}

export default App;
