import { useState } from 'react'
import './App.css'
import FirstComponent from './components/FirstComponent'

function App() {

  let [state,setState] = useState(false)

  return (
      <div>
          <h2 onClick={()=>{setState(!state)}} style={{cursor:'pointer'}}>show / Hide</h2>
          {state&&<FirstComponent/>}
      </div>
  )
}

export default App
