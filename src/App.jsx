import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/button/Button'
import Modal from './components/modal/Modal'

function App() {
  const [modalStatus , setModalStatus] = useState(false)
 
  const ShowModal =() => {
    setModalStatus(true)
  }

  return (
    <div className="App">
      <Button name={'click me'} Clicked={ShowModal} seter={setModalStatus}/>
      {modalStatus ? <Modal seter={setModalStatus}/>:''}         
    </div>
  )
}

export default App
