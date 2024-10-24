import React from 'react'
import ComponentC from './ComponentC'

export default function ComponentB({user}) {
  return (
    <div className="box-2">
      <h1>ComponentB</h1>
      <ComponentC user={user}/>
    </div>
  )
}
