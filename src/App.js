import { useState } from 'react';
import './App.css';
import { Flag } from './Flag/flag';
import { FormExample } from './FormExample';
import { FormikExample } from './FormikExample';
import { Greeting } from './Greeting';
import { ImageCarasoul } from './ImageCarasoul/ImageCarasoul';
import { TodoList } from './TodoList/TodoList';
import { UseEffectExample } from './UseEffect/UseEffectExample';
import { UsersList } from './UserProfile/UserList';
import { UserProfile } from './UserProfile/UserProfile';
import { ContextExample } from './context/ContextExample';
import { Counter } from './counter/counter';
import { UserCrudWrapper } from './UserCrud/UserCrudWrapper';
import { TicTacToe } from './tictactoe/TicTacToe';

function App() {
  const [name, setName] = useState("Rohit");
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
        {/* <UsersList></UsersList>
        <hr></hr> */}
        {/* <FormExample></FormExample>
        <hr></hr> */}
        {/* <FormikExample></FormikExample>
        <hr></hr> */}
        {/* <ImageCarasoul></ImageCarasoul> */}
        {/* <ContextExample></ContextExample>
        <hr></hr> */}
        {/* <UseEffectExample name={name}></UseEffectExample>
        <button onClick={()=>setName(name+Math.random()*10)}>Change Name Prop</button> */}
        {/* <UserCrudWrapper></UserCrudWrapper> */}
        <TicTacToe></TicTacToe>
    </div>
  );
}

export default App;

// JSX = javascript + HTML
// JS = javascript

