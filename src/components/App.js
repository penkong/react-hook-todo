import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';


const App = () => {
  //array destructuring we assign what come in use state firs resource and second setRes
  //- urr state, setter func like stState =  initializer
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <div>
      <UserList />
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource}/>
    </div>
  )
}

export default App

