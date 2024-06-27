import { useState } from "react"

export function Flag() {
    const [currentState, changeState] = useState('Online')

    const on = () => {
        changeState('Online')
    }
    return <div>
        I am {currentState}
        <br></br>
        <button onClick={on}>On</button>
        <button onClick={() => {
            changeState('Offline')
        }}>Off</button>
    </div>
}