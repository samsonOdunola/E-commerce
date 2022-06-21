import { BiArrowBack } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useState, useEffect } from "react";
import userEvent from "@testing-library/user-event";
import { PaystackButton } from "react-paystack";
import { Link, useNavigate } from "react-router-dom";
const Cart = () => {
  const [mainCart, setMainCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartSumation, setCartSumation] = useState(0);

  const publicKey = "pk_test_8bb63b32fa5fba4bf49542459088db1ab6e71934";
  const amount = cartSumation * 100;
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    console.log("call use effect");
    getCart();
  }, []);
  const getUSerDetails = () => {
    if (localStorage.currentUserEmail) {
      let userEmail = JSON.parse(localStorage.currentUserEmail);
      setEmail(userEmail);
      console.log(userEmail);
    }
  };

  useEffect(() => {
    cartSum();
    getUSerDetails();
  }, [mainCart]);

  function getCart() {
    if (localStorage.cart) {
      let cart = JSON.parse(localStorage.cart);
      setMainCart(cart);
      setLoading(true);
    } else {
      alert("Cart is empty");
    }
  }
  const cartSum = () => {
    let priceArray = [];
    for (let i = 0; i < mainCart.length; i++) {
      priceArray.push(mainCart[i].price);
    }
    console.log(priceArray);
    let sum = priceArray.reduce((a, b) => a + b, 0);
    console.log(sum);
    setCartSumation(sum);

    console.log(cartSumation);
  };
  const componentProps = {
    email,
    amount,
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      alert("Thanks for doing business with us! Come back soon!!");
      localStorage.removeItem("cart");
      navigate("/");
    },

    onClose: () => {
      alert("You are just one ste away from completing your purchase");
    },
  };

  return (
    <section className="cart-section">
      {console.log("render item")}

      <div className="cart-items-list">
        <div className="head">
          <Link to="/">
            <BiArrowBack />
          </Link>
          <h3>Cart</h3>
        </div>
        {loading &&
          mainCart.map((item) => {
            const { image, desc, price, id } = item;
            return (
              <div key={id} className="cart-item">
                <div className="item-pic">
                  <img src={require(`${image}`)} alt="" />
                  <button>
                    <AiFillDelete />
                    Remove
                  </button>
                </div>
                <h2>{desc}</h2>
                <div className="count">
                  <p className="price">${price}</p>
                  <div className="count-btns">
                    <button>-</button>
                    <p>0</p>
                    <button>+</button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="summary">
        <h3>Cart Summary</h3>
        <div className="sub-total">
          <p>Subtotal</p>
          <p>₦{cartSumation}</p>
        </div>

        <PaystackButton {...componentProps} />
      </div>
    </section>
  );
};

export default Cart;
