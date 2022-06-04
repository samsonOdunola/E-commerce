import { BiArrowBack } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useState,useEffect } from "react";
import userEvent from "@testing-library/user-event";
const Cart = () => {
    const [mainCart, setMainCart]= useState([])
    const [loading, setLoading]= useState(false)
    const [cartCount, setCartCount]= useState(0)
    const [cartSumation, setCartSumation]= useState(0)
    useEffect(() => {              
        console.log("call use effect")
        getCart()
        
        
        
        
        
        
            
        
    }, [])
    
    function getCart(){
        if(localStorage.cart){
            cartSum()
            let cart = JSON.parse(localStorage.cart)
            setMainCart(cart)
            console.log(mainCart)
            console.log(loading)
            
            setLoading(true)
            

        }else{
            alert("Cart is empty")
        }
            
    }
    const cartSum = () => {
        console.log(" sum function triggered")
        let priceArray = [];
        for(let i=0;i<mainCart.length;i++){
            priceArray.push(mainCart[i].price)
        }        
        setCartSumation(()=>{
            let sum =priceArray.reduce((a, b) => a + b, 0);
            return sum
        })
        setLoading(true)
        console.log(cartSumation)
    }
    
    
    
    return <section className="cart-section">
        {console.log("render item")}
        
        
        <div className="cart-items-list">
          <div className="head">
              <button><BiArrowBack/></button>
              <h3>Cart</h3>
          </div>
          {loading&&mainCart.map((item)=>{ 
              console.log(loading,mainCart)
              console.log(cartSumation)                             
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
                <p>${cartSumation}</p>
            </div>
            
            <button>Checkout</button>

        </div>
    </section>;
}


export default Cart;