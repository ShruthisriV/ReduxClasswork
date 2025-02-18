import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>Counter</div>
            <button onClick={() => setCount(count+9)}>+</button>
            <p>{count}</p>
            <button onClick={() => setCount(count-1)}>-</button>
        </>
    )
}

export default Counter