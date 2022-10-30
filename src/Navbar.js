import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <h1>React Blog Application</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/create">NewBlog</Link>

                </div>
            </nav>
        </div>
    );
}
 
export default Navbar;