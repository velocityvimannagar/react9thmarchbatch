import { useState } from "react"
import "./UserCrud.css"
import { UserForm } from "./UserForm"
import { UserList } from "./UserList"
export function UserCrudWrapper() {
    const [usersList, setUserList] = useState([
        {
            id: 1,
            firstName: "Rohit",
            lastName: "Sharma",
            email: "rohit.sharma@gmail.com",
            mobile: "888888888"
        }
    ]) 
    const onDelete = (id) =>{
        const users = usersList.filter(user=> user.id !== id);
        setUserList([...users])
    }
    return <div className="user-crud-wrapper">
        <UserForm onUserFormSubmit={(values)=>{
            console.log('User Created',values )
            values.id = usersList.length+1;
            usersList.push(values)
            setUserList([...usersList])
        }}></UserForm>
        <UserList usersList={usersList} onUserDelete={(id)=>{
            const bool = window.confirm("Do you want to delete?");
            if(bool){
                onDelete(id)
            }
        }}></UserList>
    </div>
}