import { useState } from 'react';
import './App.css'
import { Footer } from './components/Footer';
import { Header } from './components/Header';



export function App() {
  const [name, setName] = useState('Balalal')
  const [age, setAge] = useState(90)
  
  const [bg,setBg] = useState('red');

  const handleClick =() =>{
      if(age == 90){
        setName('ZUZIUZ')
        setAge(20)
        setBg('wheat')
      }else{
        setName('Balalal')
        setAge(90)
        setBg('red')
      }
  }

  return (
    <div style={{
      backgroundColor:bg
    }}> 
      <Header name={name} />
      <button onClick={handleClick}>APERTA</button>
      <Footer age={age} />
    </div>
  )
}
