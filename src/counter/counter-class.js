import React from "react";

export class CounterClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            count2: 0
        }
        this.decrement = this.decrement.bind(this);
    }

    increment = () => {
        console.log("Current Count", this.state.count);
        const updatedCount = this.state.count + 1;

        this.setState(
            {
                ...this.state,
                count: updatedCount,
            }
        )
    }
    decrement() {
        console.log("Current Count", this.state.count);
        const updatedCount = this.state.count - 1
        this.setState(
            {
                ...this.state,
                count: updatedCount,
            }
        )
    }
    render() {
        return <div id="counter-component">
            <p>Counter Component: {this.props.counterName}</p>
            Count: {this.state.count}
            <br></br>
            Count 2: {this.state.count2}
            <br></br><br></br>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
        </div>
    }
}