import { BiArrowBack } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useState,useEffect } from "react";
const Cart = () => {
    const [mainCart, setMainCart]= useState([])
    const [loading, setLoading]= useState(false)
    const [cartCount, setCartCount]= useState(0)
    useEffect(() => {              
        
        getCart()
        
        
        
            
        
    }, [])
    
    function getCart(){
            let cart = JSON.parse(localStorage.cart)
            setMainCart(cart)
            console.log(mainCart)
            setLoading(true)
    }
    
    
    
    return <section className="cart-section">
        
        
        <div className="cart-items-list">
          <div className="head">
              <button><BiArrowBack/></button>
              <h3>Cart</h3>
          </div>
          {loading&&mainCart.map((item)=>{                
                const{image,desc,price,id}=item
                return <div key={id} className="cart-item">
              <div className="item-pic">
                  <img src={require(`${image}`)} alt="" />
                  <button><AiFillDelete/>Remove</button>
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
              
          </div>})}         

        </div>
        <div className="summary">
            <h3>Cart Summary</h3>
            <div className="sub-total">
                <p>Subtotal</p>
                <p>$200</p>
            </div>
            
            <button>Checkout</button>

        </div>
    </section>;
}


export default Cart;