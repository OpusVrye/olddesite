import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import SignInContainer from './SignInContainer'
import SignUpContainer from './SignUpContainer'

const loginTabTypes = { SignUp: 'SignUp', SignIn: 'SignIn' }

export function SimpleDialog({ onClose, open }) {

    const [loginTabSelected, setLoginTabSelected] = React.useState(loginTabTypes.SignIn)

    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
            {loginTabSelected === loginTabTypes.SignIn && <SignInContainer closeDialog={onClose} loginTabTypes={loginTabTypes} setLoginTabSelected={setLoginTabSelected} />}
            {loginTabSelected === loginTabTypes.SignUp && <SignUpContainer closeDialog={onClose} loginTabTypes={loginTabTypes} setLoginTabSelected={setLoginTabSelected} />}
        </Dialog>
    );
}




// modal={true}
        // repositionOnUpdate={false}
        // autoDetectWindowHeight={false}
        // autoScrollBodyContent={false}
        // contentStyle={{
        //     width: '100%',
        //     maxWidth: '450px',
        //     maxHeight: '100% !important'
        // }}
        // bodyStyle={{
        //     maxHeight: '100% !important'
        // }}
        // style={{
        //     paddingTop: '0 !important',
        //     marginTop: '-65px !important',
        //     bottom: '0 !important',
        //     overflow: 'scroll !important',
        //     height: 'auto !important'
        // }}