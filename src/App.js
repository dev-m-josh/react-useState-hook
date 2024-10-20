import React, { useState } from "react";

//rules while using hooks
//used in function components only
//hooks must be executed in the same order

function App() {
  //anything passed inside the useState will be the default value
  //the first value is the current state while the second value is the function to update the current state
  //the function passed in the useState hook will be called once

  const [count, setCount] = useState(()=>{
    return 10
  });

  function decrementCount() {
    //setCount(count - 1)
    setCount(prevCount => prevCount - 1)
  }

  function increamentCount(){
    //setCount(count + 1)
    setCount(currentCount => currentCount + 1)
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={increamentCount}>+</button>
    </>
  );
}

export default App;
