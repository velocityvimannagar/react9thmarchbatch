import './App.css';
import { Flag } from './Flag/flag';
import { Greeting } from './Greeting';
import { TodoList } from './TodoList/TodoList';
import { UsersList } from './UserProfile/UserList';
import { UserProfile } from './UserProfile/UserProfile';
import { Counter } from './counter/counter';

function App() {
  const onCallback = (count) =>{
    console.log('Data From Child', count);
  }
  return (
    <div className="App">
        {/* <p>App Component</p>
        <p>This is react application.</p>
        <hr></hr> */}
        {/* <Greeting name="Virat" greeting="Hi"></Greeting>
        <hr></hr> */}
        {/* <Counter counterName={5} onCountChange={onCallback}></Counter>
        <hr></hr> */}
        {/* <Counter counterName="Counter2"></Counter>
        <hr></hr> */}
        {/* <Flag></Flag>
        <hr></hr> */}
        {/* <UserProfile></UserProfile>
        <hr></hr> */}
        {/* <TodoList></TodoList>
        <hr></hr> */}
        <UsersList></UsersList>
        <hr></hr>
    </div>
  );
}

export default App;

// JSX = javascript + HTML
// JS = javascript

