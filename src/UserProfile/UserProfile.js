import { useState } from "react"

export function UserProfile(user){
    // const user = {
    //     id: '1',
    //     firstName: "Rohit",
    //     lastName: "Sharma",
    //     age: 40,
    //     gender: "Male",
    //     isAdmin: true
    // }
    const [isLoading, setIsLoading]  = useState(false);
    return !isLoading &&  <div>
        <p>Name: {user.firstName}  {user.lastName}</p>
        <p>Age: {user.age}</p>
        { user.isAdmin && <p>Gender: {user.gender}</p>}
        {user.isAdmin? <p>I am an Admin</p>:<p>I am not an Admin</p>}
    </div>
}