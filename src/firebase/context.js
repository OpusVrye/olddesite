import React, { createContext, useContext, useReducer } from 'react';

export const FirebaseContext = createContext();
export const FirebaseProvider = ({ children, value }) => (
    <FirebaseContext.Provider value={value}>
        {children}
    </FirebaseContext.Provider>
);
export const useFirebase = () => useContext(FirebaseContext);

export const AuthContext = createContext();
export const AuthProvider = ({ children, initialState, reducer }) => (
    <AuthContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </AuthContext.Provider>
);
export const useAuth = () => useContext(AuthContext);








// import React, { createContext, useContext, useReducer } from 'react';

// export const StateContext = createContext();

// export const StateProvider = ({ reducer, initialState, children }) => (
//     <StateContext.Provider value={useReducer(reducer, initialState)}>
//         {children}
//     </StateContext.Provider>
// );

// export const useStateValue = () => useContext(StateContext);