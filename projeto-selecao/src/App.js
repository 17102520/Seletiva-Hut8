import React from 'react'
import './App.css';

import Sidebar from './Components/Sidebar/sidebar'


const App = () => {

  const sidebar = {
    "id": 1,
    "name": "Fausto Silva",
    "curse": "Ciência da Computação",
    "dashboard": "Dashboard",
    "myarea": "Meus cursos"
  };

  

  return (
    <div className="App">
      <Sidebar
        sidebar={sidebar}
      />
    </div>
  );
}

export default App;
