import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages & components
import Navbar from './components/Navbar'
import Profile from './components/Profile';
import About from './pages/About'
import Skills from './pages/Skills';
import Protfolio from './pages/Protfolio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <div className='main-container'>
            <Profile />
            <div className='pages'>
              <Routes>
                <Route
                  path="/"
                  element={<About />}
                />
                <Route
                  path='/skills'
                  element={<Skills />}
                />
                <Route
                  path='/protfolio'
                  element={<Protfolio />}
                />
              </Routes>
            </div>
          </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
