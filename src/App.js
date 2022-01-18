import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import firebase, { useFirebase, useFireStorage } from './firebase/index'

import { useAuth, useFireAuth, authConstants, useFireStore } from './firebase'
import AuthComponentWrapper from './firebase/authComponentWrapper'
import views from './views/views'
import AppHeader from './components/appHeader/AppHeader'


const App = () => {

  const [, dispatchAuth] = useAuth()
  const auth = useFireAuth()
  const firestore = useFireStore()

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { uid } = user
        const userDoc = await firestore.collection("users").doc(uid).get().then(doc => doc.data())
        dispatchAuth({
          type: authConstants.LOGIN_USER, payload: {
            currentUser: { authUser: user, dbUser: userDoc }
          }
        })
      } else {
        dispatchAuth({
          type: authConstants.LOGOUT_USER, payload: {
            currentUser: {}
          }
        })
      }

    })
    return () => {
      unlisten()
    }
  }, [auth, dispatchAuth, firestore])

  // const myOwnFirebase = useFirebase
  // console.log(myOwnFirebase)

  // const fireStorage = useFirebase().storage().ref()
  // const [fireStorage] = useFireStorage()
  // console.log(fireStorage)

  // React.useEffect(() => {
  //   fireStorage.child('Bring life to Color.png').getDownloadURL().then(url => {
  //     // console.log(url)
  //   })

  // }, [fireStorage])
  // console.log(currentUser)
  return (
    <AppHeader>

      <Router>
        <Switch>
          
          {
            views.map(view => {
              const { protectedRoute, name, ...rest } = view
              if (protectedRoute) {
                return (
                  <AuthComponentWrapper key={name} path={rest.path}>
                    <Route key={name} {...rest} />
                  </AuthComponentWrapper>
                )
              } else {
                return <Route key={name} {...rest} />
              }
            })
          }
          <Route path='/*' render={() => <Redirect to={'/'} />} />

        </Switch>
      </Router>
    </AppHeader>
  );
}

export default App;
