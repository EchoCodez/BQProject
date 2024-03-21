import { BrowserRouter } from "react-router-dom";

import { About, Conclusion, Thing, Navbar, Testing, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <About />
          <Thing />
        </div>
        <div className='relative z-0'>
          <Conclusion />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
