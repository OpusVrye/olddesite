import React from 'react'
import { useAuth } from "./index";

const withAuth = WrappedComponent => {
    const [authState] = useAuth()
    const { loggedIn = false } = authState

    if (loggedIn) {
        return <WrappedComponent />
    } else {
        return null
    }

}

export default withAuth
