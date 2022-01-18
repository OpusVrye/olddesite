import { useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { useAuth } from "./index";

function isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object;
}

const AuthComponentWrapper = ({ children, history, location, path }) => {
    const [authState] = useAuth()
    const { loggedIn = false, currentUser = null } = authState
    useEffect(() => {
        if (isObject(currentUser) && Object.keys(currentUser).length === 0 && location.pathname === path) {
            history.push('/')
        }
    }, [currentUser, history,location.pathname,path])


    return (
        loggedIn ? children: null
    )
}

export default withRouter(AuthComponentWrapper)
