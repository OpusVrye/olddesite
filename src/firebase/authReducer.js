import authConstants from './authConstants'

export const intitialAuthState = {
    loggedIn: false,
    currentUser: null,
}

const { LOGIN_USER, LOGOUT_USER } = authConstants

const authReducer = (state, action) => {
    const { type, payload = {} } = action
    const { currentUser = {} } = payload
    switch (type) {
        case LOGIN_USER:
            return { ...state, loggedIn: true, currentUser }

        case LOGOUT_USER:
            return { ...state, loggedIn: false, currentUser }

        default:
            return state
    }
}

export default authReducer