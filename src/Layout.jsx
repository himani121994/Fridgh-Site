import { Link,Outlet } from "react-router-dom"
import "./layout.css"
const Layout = ()=>{
    return(
        <nav>
            <div className="navlink">
        <Link id="Link1" to="/home">Home</Link>
        <Link id="Link" to="/about">About</Link>
        <Link id="Link" to="/contact">Contact</Link>
        </div>
        
        {/* <hr color="black"/> */}
        <Outlet/>
        <hr/>
        <h1>Company website</h1>
        </nav>
    )
}
export default Layout;