import { useState } from "react";

export function Counter(props){
    // const [variable, settter] = useState(initialValue);
     let [count, setCount] = useState(0);
    // let count = 0;
    // State => Is local data of component, When state changes the component re-render.
    const increment = () =>{
        // console.log("Current Count", count);
        const updatedCount= count+1
        setCount(updatedCount)
        console.log("Updated Count", updatedCount);
        props.onCountChange(updatedCount)
    }
    const decrement = () =>{
        // console.log("Current Count", count);
        const updatedCount= count-1
        setCount(updatedCount);
        console.log("Updated Count", updatedCount);
        props.onCountChange(updatedCount)
    }
    return <div id="counter-component">
        <p>Counter Component: {props.counterName}</p>
        Count: {count}
        <br></br><br></br>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
}

// Props - Data passed from parent component to child component.