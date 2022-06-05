
import img from "./images/logo.png"
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Navbar = ( {cartCount,cartDisplay,activeUser}) => {  
    const handleLogout = () => {        
        localStorage.removeItem("currentUser");
        localStorage.removeItem("currentUserEmail");
        localStorage.removeItem("cart");
        window.location.reload();
    }  

    return <nav>
        <img src={img} alt="" />
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contacts</li>
            <li className="user">{activeUser?`Hi, ${activeUser}`:<Link className="login" to="/login">Login</Link>}{activeUser&&<ul className="dropdown-menu"><li>Orders</li>
            <li>Inbox</li><li><button onClick={handleLogout} >Logout</button></li></ul>}</li>
            <Link to="cart"><li className="cart"><BsFillCartFill className="cart-icon"/>{cartDisplay&&<span>{cartCount}</span>}</li></Link>
        </ul>
    </nav>;
}


export default Navbar;