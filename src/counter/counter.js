export function Counter(props){
    console.log(props)
    const age = 50;
    return <div id="counter-component">
        <p>Counter Component</p>
        <p>{`${props.greeting} ${props.name}`}</p>
        <p>My Age is: {age}</p>
    </div>
}

// Props - Data passed from parent component to child component.