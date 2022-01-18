import { useFirebase } from './index'

const useFireStorage = () => {
    const storage = useFirebase().storage().ref()
    return storage
}

export default useFireStorage