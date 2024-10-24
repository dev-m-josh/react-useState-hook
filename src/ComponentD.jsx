import React, {useContext} from 'react'
import { UserContext } from './ComponentA'

//to use context 
// 1. import useContext from react
// 2. import myContext from provider Component
// 3. assign value = useContext(myContext)

export default function ComponentD() {

    const user = useContext(UserContext)
  return (
    <div  className="box-4">
      <h2>ComponentD</h2>
      <h2>{`Bye ${user}`}</h2>
    </div>
  )
}
