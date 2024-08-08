import React from "react";

export class ClassLifecycle extends React.Component{
    constructor(props){
       super(props)
       this.state = {}
        console.log('Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        if (props.someValue !== state.someValue) {
            return { someValue: props.someValue };
        }
        return null;
    }
    render(){
        console.log('Render')
        return <div>Class ClassLifecycle Component
            {this.state.someValue}
            <button onClick={()=>{
                this.setState({
                    someValue: 5
                })
            }}>Update state</button>
        </div>
    }
    componentDidMount(){
        console.log('Component Did Mount')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate")
        return null; // or some value
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate")
    }
    componentWillUnmount() {
        console.log("Component is destroying")
    }

    componentDidCatch(){
        console.log('Caught Error')
    }
    static getDerivedStateFromError(error){
        console.log('dd')
    }
}


/** 
 * Phases
 * 1. Mounting
 *    constructor
 *    getDerivedStateFromProps
 *    render
 *    componentDidMount
 *    
 * 2. Updating
 *    getDerivedStateFromProps
 *    shouldComponentUpdate
 *    render
 *    getSnapshotBeforeUpdate(prevProps, prevState)
 *    componentDidUpdate(prevProps, prevState, snapshot)
 * 
 * 3. UnMounting
 *    componentWillUnmount
 * 
 * 4. Error
 *   componentDidCatch
 *   getDerivedStateFromError
 * */ 