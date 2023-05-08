import React from 'react'


// Rather than doing this for every jsx file in "container" folder...
// import About from './container/About'

// Make index.js in "container" folder, then type this here...
import { About, Footer, Header, Skills, Testimonial, Work } from './container'

import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;