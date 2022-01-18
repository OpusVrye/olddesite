// import React, {useState, useEffect} from 'react'
// import {
//     useFirebaseApp,
//     useFirestoreDocData,
//   } from 'reactfire'


// const useFireState = ({collection,doc,default: startWithValue}) => {

//     const firebaseApp = useFirebaseApp();

//     const firebaseRef = firebaseApp.firestore().collection(collection).doc(doc)
    
//     const firebaseData = useFirestoreDocData(firebaseRef,{startWithValue})

//     const [firebaseState, setFirebaseState] = useState(startWithValue)

//     useEffect(()=>{
//         setFirebaseState(firebaseData)
//     },[firebaseData,setFirebaseState])

//     return [firebaseState]
// }

// export default useFireState;