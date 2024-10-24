import React, { useState } from 'react'
import ComponentB from './ComponentB'

export default function ComponentA() {

    const [user, setUser] = useState("John")
  return (
    <div className="box-1">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <ComponentB user={user}/>
    </div>
  )
}
