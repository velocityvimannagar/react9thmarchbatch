import './App.css';
import { Flag } from './Flag/flag';
import { Greeting } from './Greeting';
import { Counter } from './counter/counter';

function App() {
  const onCallback = (count) =>{
    console.log('Data From Child', count)
  }
  return (
    <div className="App">
        <p>App Component</p>
        <p>This is react application.</p>
        <hr></hr>
        <Greeting name="Virat" greeting="Hi"></Greeting>
        <hr></hr>
        <Counter counterName={5} onCountChange={onCallback}></Counter>
        {/* <hr></hr>
        <Counter counterName="Counter2"></Counter> */}
        <hr></hr>
        <Flag></Flag>
    </div>
  );
}

export default App;

// JSX = javascript + HTML
// JS = javascript

