import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../custom-hooks/UseAuth";


function withAuthentication(WrappedComponent){
    return ()=>{
        const isAuthenticated = useAuth()
        // const [isAuthenticated, setAuth] = useState(false);
        // const navigate = useNavigate();
    
        // useEffect(() => {
        //     const token = localStorage.getItem('token');
        //     if (token) {
        //         setAuth(true)
        //     } else {
        //         setAuth(false)
        //     }
        // }, [navigate])
        return isAuthenticated? <WrappedComponent></WrappedComponent> : <div>You are not authorized!</div>
    }
}

function ExampleComponent(){
    return <div>I am authenticated component</div>
}
export const AuthenticatedExampleComponent = withAuthentication(ExampleComponent);