import { Link } from "react-router-dom"
import { useTheme } from "../context/ThemeProvider"
import { Moon, Sun } from "lucide-react"


export default function Navbar(){
    const {theme, toggleTheme} = useTheme()
    return(
        // <nav className="navbar">
        //     <Link className="navbar-brand" to={'/'}>Home</Link>

            
        //     <button className="nav-link btn btn-primary" onClick={toggleTheme}>
        //         {theme === 'dark' ? <Sun /> : <Moon />}
        //     </button>
        //     <Link className="nav-link" to={'/dashboard'}>Dashboard</Link>
        //     <Link className="nav-link" to={'/auth/login'}>Login</Link>
        //     <Link className="nav-link" to={'/auth/register'}>Register</Link>
        // </nav>

        // <nav className="navbar navbar-expand-lg">
        //     <div className="container-fluid">
        //         <Link className="navbar-brand text-primary fs-1" to={'/'}>SkillMatrix</Link>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //         </button>
                
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <Link className="nav-link text-info" to={'/dashboard'}>Dashboard</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link text-info" to={'/auth/login'}>Login</Link>
        //                 </li>
        //                 <li className="nav-item">
                            
        //                 </li>
        //             </ul> */}
        //             <Link className="nav-link text-info" to={'/dashboard'}>Dashboard</Link>
        //             <Link className="nav-link text-info" to={'/auth/login'}>Login</Link>
        //             <form class="d-flex" role="search">
        //                 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        //                 <button class="btn btn-outline-success" type="submit">Search</button>
        //             </form>
        //         </div>
                
        //      <Link className="nav-link" to={'/auth/register'}><button className="btn btn-primary ms-2">Register</button></Link>
        //      <button className="nav-link btn btn-primary ms-2" onClick={toggleTheme}>
        //          {theme === 'dark' ? <Sun /> : <Moon />}
        //      </button>
        //     </div>
        // </nav>

        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <Link className="navbar-brand text-primary fs-1" to={'/'}>SkillMatriX</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link className="nav-link text-info fs-5" to={'/dashboard'}>Dashboard</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link text-info fs-5" to={'/courses'}>Courses</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link text-info fs-5" to={'/auth/login'}>Login</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control m-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success m-2" type="submit">Search</button>
      </form>
      <Link className="nav-link" to={'/register'}><button className="btn btn-primary ms-2 fs-5 m-2">Register</button></Link>
       <button className="nav-link btn btn-primary m-2" onClick={toggleTheme}>{theme === 'dark' ? <Sun /> : <Moon />}</button>
    </div>
  </div>
</nav>

    );
}