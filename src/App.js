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
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { ReduxStoreExample } from './redux-store/ReduxStoreExample';

function App() {
  const navigate = useNavigate();
  const [name, setName] = useState("Rohit");
  const onCallback = (count) => {
    console.log('Data From Child', count);
  }
  return (
    <div className="App">
      <div className='header'>Header Component</div>
      <div className='container-body'>
        <div className='sidebar'>
          <Link to={"/"}>Home</Link>
          <Link to={"/counter-path"}>Counter</Link>
          <Link to={"/users"}>Users</Link>
          <Link to={"/redux-example"}>Redux Example</Link>
          <Link to={"/todo"}>Todo List</Link>
          {/* <Link to={"/greeting-path"}>Greeting</Link> */}
          <button onClick={() => {
            navigate("/greeting-path")
          }}>Greeting</button>
        </div>
        <div className="content">
          <Routes>
            <Route path='/' element={<div>Content Div</div>}></Route>
            <Route path='/counter-path' element={<Counter></Counter>}></Route>
            <Route path='/todo' element={<TodoList></TodoList>}></Route>
            <Route path='/greeting-path' element={<Greeting name="Virat" greeting="Hi"></Greeting>}></Route>
            <Route path='/redux-example' element={<ReduxStoreExample></ReduxStoreExample>}></Route>
            <Route path="/users/*" element={<UserCrudWrapper></UserCrudWrapper>}> </Route>
            <Route path='*' element={<div>This url is not mapped</div>}></Route>
          </Routes>
        </div>
      </div>

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
      {/* <TicTacToe></TicTacToe> */}
    </div>
  );
}

export default App;

// JSX = javascript + HTML
// JS = javascript

