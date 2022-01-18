import React from 'react'
import { useAuth } from "./index";
import { Route, Redirect } from 'react-router-dom';


const withAuth = WrappedComponent => {
    const [authState] = useAuth()
    const { loggedIn = false } = authState

    if (loggedIn) {
        return <WrappedComponent />
    } else {
        return <Route path='/*' render={() => <Redirect to={'/'} />} />
    }

}

export default withAuth
