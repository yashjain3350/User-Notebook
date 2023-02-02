import React, { useState } from 'react';

import './App.css';

import AddUser from './components/Users/AddUser';
import UsersLists from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsers((prevState) => {
      return [...prevState, { name: uName, age: uAge, id: Math.random().toString() }];
    })
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersLists users={users} />
    </React.Fragment>
  );
}

export default App;
