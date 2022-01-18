import Home from './home/Home'
import About from './about/About'
import Library from './library/Library'
import SplashPage from '../SplashPage'
export { Home, About, Library }

const views = [
    { name: "About", path: '/about', component: About, protectedRoute: false, },
    { name: "Library", path: '/library', component: Library, protectedRoute: true, },
    { name: "Home", path: '/home', component: Home, protectedRoute: false, },
    { name: "SplashPage", path: '/', component: SplashPage, protectedRoute: false, },
]

export default views