import { useFirebase } from './index'

const useFireAuth = () => {
    const auth = useFirebase().auth()
    return auth
}

export default useFireAuth