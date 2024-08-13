import React from 'react';
// import Button from './Button'
import ToggleButton  from './Toggle-button';
import Child from './Child'

function App(){
 
  let date = new Date();
  return (
    <div>
      <ToggleButton />
      <Child date={date.toLocaleDateString()}/>
    </div>
  )
}





export default App;