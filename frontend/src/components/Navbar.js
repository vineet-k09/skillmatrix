import { Link } from "react-router-dom"
import { useTheme } from "../context/ThemeProvider"
import { Moon, Sun } from "lucide-react"


export default function Navbar(){
    const {theme, toggleTheme} = useTheme()
    return(
        <nav>
            <button onClick={toggleTheme}>
                {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
            <Link to={'/dashboard'}>Dashboard</Link>
            <Link to={'/auth/login'}>Login</Link>
            <Link to={'/auth/register'}>Register</Link>
        </nav>
    )
}