import React, { useRef, forwardRef, useState, useEffect } from 'react'


//USEREF
// function UseRefHook() {
//     const inputRef = useRef(null);
//     const focusInput = () => {
//         inputRef.current.focus();
//     }

//     //Sending of ref from parent to child, use forwardRef
//     // const CustomComponent = forwardRef((props, ref) => {
//     //     return <AnotherComp ref={ref} {...props}/>
//     // })

//   return (
//     <div>
//         <input type="text" ref={inputRef}/>
//         <button onClick={focusInput}>Click to Add Focus</button>
        
//         {/* *forward ref
//         <CustomComponent ref={inputRef} placeholder="Enter your age"/> */}
    
//     </div>
//   )
// }

//STOPWATCH
function UseRefHook() {
    const [seconds, setSeconds] = useState(0); //1 //2
    //we want this value to persist accross renders, and when this value
    //changes you do not want to cause a rerender
    // let timerId; //null //ud
    const intervalRef = useRef(null);  //we have a current key references to null{current:null}
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSeconds(prevSec => prevSec+1);
        },1000);
    }, []);

    const handleStop = () => {
        console.log("stopped");
        clearInterval(intervalRef.current);
    }

  return (
    <div>
        <p>Seconds: {seconds}</p>
        <button onClick={handleStop}>Stop Timer</button>
    </div>
  )
}

export default UseRefHook