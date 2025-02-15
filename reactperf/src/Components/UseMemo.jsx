import React, { useMemo, useState } from 'react'


const generateLargeArray = () => {
    const largeArray = [];
    for(let i=0;i<10000; i++){
        largeArray.push(i);
    }
    return largeArray;
}

function sumArr(arr){
    return arr.reduce((acc, curr) => acc + curr,0)
}

// function UseMemo() {
    
//     console.time();
//     console.log("Calculating sum");
//     const largeArr = useMemo(() => generateLargeArray(), []);
//     const sum = useMemo(() => sumArr(largeArr), [largeArr])
//     console.log("Sum is ", sum);
//     console.timeEnd();

//     const [count, setCount] = useState(0);
//     return (
//         <div>
//             <h1>Sum: {sum}</h1>
//             <button onClick={() => setCount(count+1)}>+</button>
//             <p>Count: {count}</p>
//         </div>
//     )
// }



//DOUBT:  for comparison it uses Object.is
//how can we add array and objects to dependency list
//with reducer and setState we always return new array, object
//ideally we wont update our state with same value though
function UseMemo(){
    const [numbers, setNumbers] = useState([1,2,3]);
    const total = useMemo(() => {
        console.log("expensive comp running...");
        return numbers.reduce((acc,curr) => acc+curr,0);
    }, [numbers]);
    //it does shallow checking 
    return(
        <div>
            <div>Total: {total}</div>
            <button onClick={() => setNumbers([...numbers, numbers.length+1])}>Add Number</button>
        </div>
    )
}
//useMemo is only useful when output of one function is the input
//for other function where they both are same

export default UseMemo