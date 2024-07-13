import { useAuth } from "./UseAuth";
import { useOnlineStatus } from "./UseOnlineStatus";

export function CustomHookExample(){
    const isOnline = useOnlineStatus();
    const isAuthenticated = useAuth();
    return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}