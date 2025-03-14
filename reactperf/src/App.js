import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { useEffect, useState, Suspense, lazy } from 'react';
import UseMemo from './Components/UseMemo';
import UseCallback from './Components/UseCallback';
import UseRefHook from './Components/UseRefHook';
import Stopwatch from './Components/Stopwatch';

// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';

function App() {
  // const [Home, setHome] = useState(null);
  // const [About, setAbout] = useState(null);
  // const [Contact, setContact] = useState(null);

  //performing lazy 
  const Home = lazy(() => import("./Components/Home"))
  const About = lazy(() => import("./Components/About"))
  const Contact = lazy(() => import("./Components/Contact"))

  // useEffect(() => {
  //   //preload the home component
  //   import('./Components/Home').then((module) => setHome(() =>module.default));
  // }, []);

  // const loadHomePage=() => {
  //   import('./Components/Home').then((module) => setHome(() =>module.default));
  // }

  // const loadAboutPage = () => {
  //   import('./Components/About').then((module) => setAbout(() =>module.default));
  // }

  // const loadContactPage = () => {
  //   import('./Components/Contact').then((module) => setContact(() =>module.default));
  // }

  //fallback
  // const fallBackHome = () => {
  //   return(
  //     <div>loading..</div>
  //   )
  // }

  return (
    
      // <Router>
      //   <div>
      //     {/* <Navbar></Navbar> */}
      //     <nav>
      //       <ul>
      //         {/* <li><Link to="/" onClick={loadHomePage}>Home</Link></li>
      //         <li><Link to="/about" onClick={loadContactPage}>About</Link></li>
      //         <li><Link to="/contact" onClick={loadAboutPage}>Contact</Link></li> */}

      //         <li><Link to="/" >Home</Link></li>
      //         <li><Link to="/about" >About</Link></li>
      //         <li><Link to="/contact" >Contact</Link></li>
      //       </ul>
      //     </nav>
      //     <Suspense fallback={<div>Loading..</div>}> {/* fallBackHome given this while fallback*/} 
      //       <Routes>
      //         <Route 
      //           path="/"
      //            //element={Home?<Home/> : <div>Loading..</div>}
      //            element={<Home/>}
      //         ></Route>
      //         <Route 
      //           path="/about" 
      //             //element={About ? <About/> : <div>Loading..</div>}
      //             element={<About/>}
      //         ></Route>
      //         <Route 
      //           path='/contact' 
      //             //element={Contact ? <Contact/> : <div>Loading..</div>}
      //             element={<Contact/>}
      //         ></Route>
      //       </Routes>
      //     </Suspense>
      //   </div>
      // </Router>

      // <UseMemo/>
      // <UseCallback/>
      // <UseRefHook/>
      <Stopwatch/>
  );
}

export default App;
