import { useState } from "react"

export function TodoList() {
    const [todos, setTodos] = useState([{ taskId: 1, name: "Task1" }, { taskId: 2, name: "Task2" }, { taskId: 3, name: "Task3" }])

    // const getTodos = () => {
    //     const todoElements = [];
    //     todos.forEach(todo => { todoElements.push(<p>{todo}</p>) })
    //     return todoElements;
    // }
    return <div>TOdo List
        {/* <p>{todos[0]}</p>
        <p>{todos[1]}</p> */}
        {/* {getTodos()} */}
        {todos.map((todo) => {
            return <p key={todo.taskId}>{todo.name}</p>
        })}
    </div>
}