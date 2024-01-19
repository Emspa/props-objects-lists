import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Movie } from './components/Movie'
import { Movies } from './models/Movies'

function App() {

  const moviea = new Movies ("Hungergames", 160, "action/ adventure")
  const movieb = new Movies ("Hungergames", 160, "action/ adventure")
  const moviec = new Movies ("Hungergames", 160, "action/ adventure")


  return (
    <div className="App">
      <Movie movies={moviea}/> 
   
    </div>
  )
}

export default App
