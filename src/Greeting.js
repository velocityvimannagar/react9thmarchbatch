export function Greeting(props){
    console.log("Props", props)
    const age = 50;
    return <div id="greeting-component">
        <p>Greeting Component</p>
        <p>{`${props.greeting} ${props.name}`}</p>
        <p>My Age is: {age}</p>
    </div>
}

// Props - Data passed from parent component to child component.