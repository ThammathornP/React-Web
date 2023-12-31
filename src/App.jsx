import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas, HeroBG } from './components'
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
          <Navbar />
          <div className="relative z-0">
            <Hero />
            <HeroBG />
          </div>
        {/* </div> */}
        <About />
        <Experience />
        {/* <Works /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
