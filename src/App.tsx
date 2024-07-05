import { useState } from 'react'

import './App.css'

function App() {
  const Animals = ['Dog', 'Cat', 'Bird', 'Fish', 'Rabbit']
  const animals = Animals.map((animal) => <li key={animal}>{animal}</li>)
  return (
    <>
      <ul>{animals}</ul>
    </>
  )
}

export default App
