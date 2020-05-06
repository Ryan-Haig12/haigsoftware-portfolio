import React from 'react'

import './App.css'
//import Bio from './components/Bio'
//import Footer from './components/Footer'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Title from './components/Title'

const App = () => {
  return (
    <div className="App" >
      <img className="Denver-Skyline" src={ "/img/denver-cut.jpg" } alt={ 'denverSkyline' } />
      <Title />
      <Skills />
      <Projects />
    </div>
  )
}

export default App;
