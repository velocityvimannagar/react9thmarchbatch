import { useNavigate } from "react-router-dom";

export function UserList({ usersList, onUserDelete, onUserUpdate }) {
    const navigate = useNavigate();
    return <div>
        <button onClick={()=> navigate("/users/form")}>Add New</button>
        <br></br>
        <br></br>
        <table>
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {usersList.map(user => {
                    return <tr key={user.id}>
                        <td>{user.firstName + ' ' + user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td>
                            <button onClick={() => {
                                onUserUpdate(user)
                            }}>Update</button>
                            <button onClick={() => {
                                onUserDelete(user.id)
                            }}>Delete</button>
                        </td>
                    </tr>
                })}

                {/* <tr>
            <td>Rohit Sharma</td>
            <td>rohit.sharma@gmail.com</td>
            <td>888888888</td>
        </tr>
        <tr>
            <td>Hardik Pandya</td>
            <td>rohit.sharma@gmail.com</td>
            <td>888888888</td>
        </tr> */}
            </tbody>
        </table>
    </div>
}