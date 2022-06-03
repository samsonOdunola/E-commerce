
import img from "./images/logo.png"
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Navbar = ( {cartCount,cartDisplay,activeUser}) => {    

    return <nav>
        <img src={img} alt="" />
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contacts</li>
            <li>Hi, {activeUser}</li>
            <Link to="cart"><li className="cart"><BsFillCartFill className="cart-icon"/>{cartDisplay&&<span>{cartCount}</span>}</li></Link>
        </ul>
    </nav>;
}


export default Navbar;