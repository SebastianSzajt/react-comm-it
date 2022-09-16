import { Link, useMatch, useResolvedPath} from "react-router-dom"


export default function Navbar() {
    return <nav className="nav">
       <Link to="/" className="site-title">Site Name</Link> 
       <ul class="nav">
      <CustomLink Link to="/Prediction">Predictions</CustomLink>
      <CustomLink Link to="/Info" >Information</CustomLink>
      <CustomLink Link to="/Schedule" >Schedule</CustomLink>
      <CustomLink Link to="/Login" >Login</CustomLink>
      <CustomLink Link to="/SignUp" >Signup</CustomLink>
    </ul>
    </nav>
}

function CustomLink ({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch ({path:resolvedPath.pathname, end:true})
   
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
                </Link>
        </li>
    )
}