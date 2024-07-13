import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { addUser } from "./usersSlice";

export function ReduxStoreExample() {
    return <Provider store={store}>
        <div>Redux Store Example</div>
        <ReduxCounterExample></ReduxCounterExample>
        <br></br>
        <br></br>
        <hr></hr>
        {/* <ReduxUsersExample></ReduxUsersExample> */}
    </Provider>
}

function ReduxCounterExample(){
    const count = useSelector((state) => {
        console.log("dd", state)
        return  state.counter.count
    })
    const dispatch = useDispatch()


    return <div>
         <br></br>
         <br></br>
        Count: {count}
        <br></br>
        <br></br>
        <button onClick={()=>{
            dispatch(increment())
        }}>Increment</button>
         <button onClick={()=>{
            dispatch(decrement())
        }}>Decrement</button>

        <button onClick={()=>{
            dispatch(incrementByAmount(5))
        }}>Increment by 5</button>
    </div>
}

function ReduxUsersExample(){
    const users = useSelector((state)=> state.users)
    const dispatch = useDispatch()
    return <div>
        Total Users : {users.length}
        {
            users.map(user=>{
                return <div key={user.id}>{user.name}</div>
            })
        }
        <button onClick={()=>{
            dispatch(addUser({
                id: users.length+1,
                name: "Virat"+users.length
            }))
        }}>Add User</button>
    </div>
}