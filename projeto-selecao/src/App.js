import React from 'react'
import Avatar from './Components/Avatar/avatar';



const App = () => {

  const avatar = {
    "id": 1,
    "name": "Fausto Silva",
    "curse": "Ciência da Computação"
  };



  return (
    <div className="App">
      <Avatar
        avatar={avatar}
      />
    </div>
  );
}

export default App;
