import { useState } from 'react'
import './App.css'
import Info from './components/info'
import DisplayInfo from './components/displayInfo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrapper'>
      <div className='right'>
        <Info />
      </div>
      <div className='left'>
        <DisplayInfo />
      </div>
    </div>
  )
}

export default App;
