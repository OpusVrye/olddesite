import { useFirebase } from './index'

const useFireStore = () => {
    const store = useFirebase().firestore()
    return store
}

export default useFireStore