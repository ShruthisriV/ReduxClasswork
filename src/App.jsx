import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageCarousel from './Components/ImageCarousel';
import Modal from './Components/Modal';
import useVisibility from './useVisibility';

function App() {
  //created to use useVisibility
  const {isVisible, hide, show, toggle} = useVisibility(false);

  return (
    <>

      {/* <ImageCarousel/> */}
      
        <h1>Custom Hook Example</h1>
        <button onClick={show}>Show Modal</button>
        <button onClick={toggle}>Toggle Modal</button>
        <Modal hide={hide} isVisible={isVisible}></Modal>
       
    </>
  )
}

export default App
