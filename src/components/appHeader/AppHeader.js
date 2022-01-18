import React from 'react'
import Header from './Header'
import './AppHeader.css'

const AppHeader = ({children}) => {
    return (
        <div id="appMain">
            <Header />
            <div id="bodyWrapper">
                {children ? children : null}
            </div>
        </div>
    )
}

export default AppHeader
