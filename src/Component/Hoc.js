import React, { useState } from "react";


function HOC(){
    const [Count, setCount] = useState(0)
    return(
        <>
            <h2>HOC Component</h2>
            <h3>Count: {Count}</h3>
            <button onClick={() => setCount(Count + 1)}>Increment</button>
            <button className="btn2" onClick={() => setCount(Count - 1)}>Decrement</button>   
        </>
    )
}

export default HOC