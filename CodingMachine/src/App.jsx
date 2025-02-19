import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageCarousel from './Components/ImageCarousel';
import Modal from './Components/Modal';
import useVisibility from './useVisibility';
import ProgressBar from './Components/ProgressBar/ProgressBar';

function App() {
  //created to use useVisibility
  const {isVisible, hide, show, toggle} = useVisibility(true);
  
  //Progress bar
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if(prev>=100){
          clearInterval(interval)
          alert("Data Loaded");
          return 100;
        }
        return prev+1;
      })
    }, 100);

    return () => {
      clearInterval(interval);
    };

  },[]);

  return (
    <>

      {/* <ImageCarousel/> */}
      
        {/* <h1>Custom Hook Example</h1>
        <button onClick={show}>Show Modal</button>
        <button onClick={toggle}>Toggle Modal</button>
        <Modal hide={hide} isVisible={isVisible}></Modal> */}

        <ProgressBar width={progress} text={`Data Loaded: ${progress}%`}/>
       
    </>
  )
}

export default App