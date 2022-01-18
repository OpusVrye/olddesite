import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Firebase, { FirebaseProvider, AuthProvider, authReducer, intitialAuthState } from './firebase';

import { MuiThemeProvider } from '@material-ui/core/styles';
import Theme from './constants/themes';

import { CloudinaryContext } from 'cloudinary-react';

ReactDOM.render(
    <FirebaseProvider value={Firebase}>
        <AuthProvider initialState={intitialAuthState} reducer={authReducer}>
            <MuiThemeProvider theme={Theme}>
                <CloudinaryContext cloudName="avaprograms">
                    <App />
                </CloudinaryContext>
            </MuiThemeProvider>
        </AuthProvider>
    </FirebaseProvider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
