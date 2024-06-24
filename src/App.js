import './App.css';
import { Counter } from './counter/counter';

function App() {
  return (
    <div className="App">
        <p>This is react application.</p>
        <Counter name="Rohit" greeting="Hello" fullName="Sharma"></Counter>
        <Counter name="Virat" greeting="Hi"></Counter>
    </div>
  );
}

export default App;

// JSX = javascript + HTML
// JS = javascript
