import React, { useState, createContext } from 'react'
import ComponentB from './ComponentB';

//to creat context
// 1. import creatContext 
// 2. assign creatContext and export it

//the provider component
export const UserContext = createContext();

export default function ComponentA() {

    const [user, setUser] = useState("John");
  return (
    <div className="box-1">
      <h1>ComponentA</h1>
      <UserContext.Provider value={user}>
        <ComponentB user={user}/>
      </UserContext.Provider>
    </div>
  )
}
