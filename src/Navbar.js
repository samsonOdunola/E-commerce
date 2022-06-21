import img from "./images/logo.png";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";

const Navbar = ({ cartCount, cartDisplay, activeUser }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentUserEmail");
    localStorage.removeItem("cart");
    window.location.reload();
  };
  const toggleMenu = () => {
    console.log("toggleMenu");
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      {showMenu && (
        <div className="mobileonly mobilemenu">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contacts</li>
            <li className="user">
              {activeUser ? (
                `Hi, ${activeUser}`
              ) : (
                <Link className="login" to="/login">
                  login
                </Link>
              )}
              {activeUser && (
                <ul className="dropdown-menu">
                  <li>Orders</li>
                  <li>Inbox</li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              )}
            </li>
            {activeUser && <li onClick={handleLogout}>Logout</li>}
          </ul>
          <button onClick={() => setShowMenu(!showMenu)}>Close</button>
        </div>
      )}
      <img src={img} alt="red store logo" />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contacts</li>
        <li className="user">
          {activeUser ? (
            `Hi, ${activeUser}`
          ) : (
            <Link className="login" to="/login">
              Login
            </Link>
          )}
          {activeUser && (
            <ul className="dropdown-menu">
              <li>Orders</li>
              <li>Inbox</li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          )}
        </li>
        <Link className="cartlink" to="cart">
          <li className="cart">
            <BsFillCartFill className="cart-icon" />
            {cartDisplay && <span>{cartCount}</span>}
          </li>
        </Link>
      </ul>
      <Link className="mobileonly cartlink" to="cart">
        <span className="cart">
          <BsFillCartFill className="cart-icon" />
          {cartDisplay && <span>{cartCount}</span>}
        </span>
      </Link>
      <BiMenuAltRight
        onClick={toggleMenu}
        className="mobileonly mobilebutton"
      />
    </nav>
  );
};

export default Navbar;
