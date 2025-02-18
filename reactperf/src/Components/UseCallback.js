import React, { useCallback, useMemo, useState } from 'react'


// const removeItem = (itemToBeRemoved, setItems) => {
//     console.log(itemToBeRemoved);
//     setItems((prevItems) =>  prevItems.filter((item) => item != itemToBeRemoved))
    
// };
function UseCallback({value}) {
    const [items, setItems] = useState(["Item1", "Item2", "Item3"]);
    // const compValue = useMemo(() => someExpensiveComputation(),[]);
    //1) when to use dependency array in Usecallback?? Ans: when result is time taking process
    const removeItem = useCallback((itemToBeRemoved) => {
        console.log(itemToBeRemoved);
    //     // let updatedItems = items.filter((item) => item != itemToBeRemoved);
    //     //if you want to update the items state, then do not include that
    //     //state as dependency. It will destroy the overall necessity to add useCallback,
    //     //instead use the callback approach in your setItems function to access the
    //     //latest state value
        setItems((prevItems) =>  prevItems.filter((item) => item != itemToBeRemoved))
        console.log(value);
    },[value, /*compValue*/]);
    // const removeItem = useCallback((itemToBeRemoved) => {
    //     console.log(itemToBeRemoved);
    //     let updatedItems = items.filter((item) => item != itemToBeRemoved);
    //     setItems([updatedItems]);
    // },[items]);


    return (
    <div>
        {
            items.map((item, idx) => {
                return (
                    <div>
                        {item}
                        <button onClick={() => removeItem(item)}>Remove</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default UseCallback