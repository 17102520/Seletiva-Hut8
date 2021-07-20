import React, { useEffect, useState } from 'react'
import './App.css';

import { getUser } from './Services/request'

import Home from './Conteiners/Home/home'

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

  return (
    <div className="App">
      <Home user={user} />
    </div>


  );
}

export default App;
