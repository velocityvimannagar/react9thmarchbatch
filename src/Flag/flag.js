import { useState } from "react"

// Conditional Rendering
export function Flag() {
    // const [currentState, changeState] = useState('Online')
    const [isOnline, setIsOnline] = useState(false);

    const on = () => {
        setIsOnline(true)
    }
    const off = () => {
        setIsOnline(false)
    }
    const getButton = (handler, buttonName) =>{
        return  <button onClick={handler}>{buttonName}</button>
    }
    return <div>
        {/* I am {isOnline? 'Online': 'Offline'} */}
        {isOnline? <p>I am Online</p>:<p>I am Offline</p>}
        <br></br>
        {getButton(on, "On")} 
        {getButton(off, "Off")}
    </div>
}