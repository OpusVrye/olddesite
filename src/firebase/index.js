import { useFirebase, FirebaseContext, FirebaseProvider, useAuth, AuthContext, AuthProvider } from './context';
import authConstants from './authConstants'
import authReducer, {intitialAuthState} from './authReducer'
import Firebase from './firebase';
import useFireStorage from './useFireStorage'
import useFireAuth from './useFireAuth'
import useFireStore from './useFireStore'

export default Firebase;

export {
    useFirebase, AuthContext, AuthProvider,
    useAuth, authReducer, intitialAuthState,
    authConstants,
    useFireStorage, useFireAuth, useFireStore,
    FirebaseContext, FirebaseProvider,
    
};

