import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';

function App() {
  const [Home, setHome] = useState(null);
  const [About, setAbout] = useState(null);
  const [Contact, setContact] = useState(null);

  useEffect(() => {
    //preload the home component
    import('./Components/Home').then((module) => setHome(() =>module.default));
  }, []);

  const loadHomePage=() => {
    import('./Components/Home').then((module) => setHome(() =>module.default));
  }

  const loadAboutPage = () => {
    import('./Components/About').then((module) => setAbout(() =>module.default));
  }

  const loadContactPage = () => {
    import('./Components/Contact').then((module) => setContact(() =>module.default));
  }



  return (
    <>
      <Router>
        <div>
          {/* <Navbar></Navbar> */}
            <nav>
              <ul>
                <li><Link to="/" onClick={loadHomePage}>Home</Link></li>
                <li><Link to="/about" onClick={loadContactPage}>About</Link></li>
                <li><Link to="/contact" onClick={loadAboutPage}>Contact</Link></li>
              </ul>
            </nav>
          <Routes>
            <Route path='/' element={Home ? <Home/> : <div>Loading..</div>}></Route>
            <Route path='/about' element={About ? <About/> : <div>Loading..</div>}></Route>
            <Route path='/contact' element={Contact ? <Contact/> : <div>Loading..</div>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
