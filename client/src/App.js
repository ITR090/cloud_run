import React, {use, useEffect, useState} from 'react'
//import './App.css'
import './output.css'

function App() {

  const [users,setUsers] = useState()

  useEffect(()=>{

    const backendUrl = process.env.NODE_ENV == 'development' 
    ? 'http://localhost:5000' 
    : '';

    console.log(process.env.NODE_ENV)
    fetch(`${backendUrl}/api/posts`)
    .then(response=> response.json())
    .then(data=>{
      setUsers(data)
    })

  },[])

  return (
    <div className="App">
      <h6 className='text-2xl m-5'>All Users</h6>
      {!users && <p>loading</p>}
      {users && users.map((user,index)=>(
        <div key={user.id} className='m-5 bg-sky-200 rounded-lg p-3'>
           <h6>Name: {user.name}</h6>
           <p>Email: {user.email}</p>
           <h6>Company Name: {user.company.name}</h6>
           <h6>Company Address: {user.company.catchPhrase}</h6>
           <p>City: {user.address.city}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
