import { Link } from "react-router-dom"


export default function Navbar() {
    return <nav className="nav">
       <Link to="/" className="site-title">Site Name</Link> 
       <ul class="nav">
      <CustomLink Link to="../home/index.html" >Home</CustomLink>
      <CustomLink Link to="../predictions/index.html" >Predictions</CustomLink>
      <CustomLink Link to="../info/index.html" >Information</CustomLink>
      <CustomLink Link to="../schedule/index.html" >Schedule</CustomLink>
      <CustomLink Link to="../login/index.html" >Login</CustomLink>
    </ul>
    </nav>
}

function CustomLink ({ to, children, ...props}) {
    const path = window.location.pathname
   
    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
                </Link>
        </li>
    )
}