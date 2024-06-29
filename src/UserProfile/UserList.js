import { useState } from "react"
import { UserProfile } from "./UserProfile"

export function UsersList(){
    const [users, setUsers] = useState([
        {
            id: '1',
            firstName: "Rohit",
            lastName: "Sharma",
            age: 40,
            gender: "Male",
            isAdmin: true
        },
        {
            id: '2',
            firstName: "hardik",
            lastName: "Pandya",
            age: 40,
            gender: "Male",
            isAdmin: false
        },
        {
            id: '3',
            firstName: "Priyanka",
            lastName: "Pandya",
            age: 40,
            gender: "Famale",
            isAdmin: true
        }
    ] );

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: ''
    })
    const onInputChange = (e) =>{
        console.log(e.target.value, e.target.name)
        formValues[e.target.name] = e.target.value;
        setFormValues({...formValues})
    } 
    // const [firstName, setFirstName ] = useState("");
    // const [lastName, setLastName ] = useState("");
    // const onFirstNameChange = (e) =>{
    //     setFirstName(e.target.value)
    // }
    // const onLastNameChange = (e) =>{
    //     setLastName(e.target.value)
    // }
    const addUser = ()=>{
        // console.log(firstName, lastName)
        // users.push({
        //     "id": users.length+1,
        //     "firstName": firstName,
        //     "lastName": lastName,
        // })

        // setUsers([...users]);
        // setFirstName('');
        // setLastName('');
        users.push({
            "id": users.length+1,
            "firstName": formValues.firstName,
            "lastName": formValues.lastName,
        })
        setUsers([...users]);
        setFormValues({
            firstName: '',
            lastName: ''
        })
    }
    return <div>
        {/* <UserProfile firstName="Priyanka" lastName="Pandya" age={40} gender="Female" isAdmin={true}></UserProfile>
        <hr></hr>
        <UserProfile firstName="Hardik" lastName="Pandya" age={40} gender="Male" isAdmin={false}></UserProfile> */}
        {/* <input placeholder="First Name" value={firstName} onChange={onFirstNameChange}></input>
        <input placeholder="Last Name" value={lastName} onChange={onLastNameChange}></input> */}
         <input name="firstName" placeholder="First Name" value={formValues.firstName} onChange={onInputChange}></input>
        <input name="lastName" placeholder="Last Name" value={formValues.lastName} onChange={onInputChange}></input>
        <br></br>
        <button onClick={addUser}>Add User</button>
        {users.map(user=>{
            return <div key={user.id}>
                <UserProfile firstName={user.firstName} lastName={user.lastName} age={user.age} gender={user.gender} isAdmin={user.isAdmin}></UserProfile> 
                <hr></hr>
                </div>
        })}
    </div>
}