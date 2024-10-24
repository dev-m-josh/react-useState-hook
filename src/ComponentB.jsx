import React from 'react'
import ComponentC from './ComponentC'

//display using props
export default function ComponentB({user}) {
  return (
    <div className="box-2">
      <h1>ComponentB</h1>
      <h2>{`Hello again ${user}`}</h2>
      <ComponentC />
    </div>
  )
}
