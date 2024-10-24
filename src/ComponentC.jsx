import React from 'react'
import ComponentD from './ComponentD'

export default function ComponentC({user}) {
  return (
    <div className="box-3">
      <h1>ComponentC</h1>
      <ComponentD user={user}/>
    </div>
  )
}
