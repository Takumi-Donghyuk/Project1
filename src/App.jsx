import { useState } from 'react';
import './App.css'
import quotes from "./db/quotes.json"
import { getRandomElement } from './utils/random'
import QuoteCard from './components/QuoteCard';
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

const backgrounds=["Fondo1", "Fondo2", "Fondo3"]

function App() {
  const [quote, setQuote] = useState(getRandomElement(quotes))
  const [currentBg, setCurrentBg] = useState(getRandomElement(backgrounds))
  console.log(getRandomElement(quotes));
  const handleChangeQuote = () => 
  {
    setQuote(getRandomElement(quotes));
    setCurrentBg
  }

  return (
    <main className={`app ${currentBg}`}>
      <QuoteCard quote={quote} handleChangeQuote={handleChangeQuote}/>
    </main>
  )
}

export default App
