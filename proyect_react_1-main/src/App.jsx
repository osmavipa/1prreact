import { useState } from 'react'
import './App.css'
import BtnQuote from './components/BtnQuote'
import Quote from './components/Quote'
import phrases from './utils/phrases.json'
import getRandomAlemArray from './utils/getRandomElemArray'


function App() {
  console.log(phrases)

  
  const numberRandom = getRandomAlemArray([4, 3, 2, 1])


    const [quote, setQuote] = useState(getRandomAlemArray(phrases))
    const [numberBg, setNumberBg] = useState(numberRandom)

    const bgStyle = {
      backgroundImage: `url(/fondo${numberBg}.png)` 

    }


  return (
    <>
      <div className='container' style={bgStyle}>
        <h1 className='container__title'>GALLETA DE LA FORTUNA</h1>
        <Quote phrase={quote}/>
        <BtnQuote 
        setQuote={setQuote}
        phrases={phrases}
        setNumberBg={setNumberBg}
        />
      </div>
    </>
  )
}

export default App
