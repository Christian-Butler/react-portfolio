import { Link } from "react-router-dom";
// import "./assets/app.css" 

const NavBar = () => {

    return (
        <div className="links">
            <Link to="/"> Home</Link> |
            <Link to="/about"> About</Link>
        </div>
    );
}

export default NavBar;