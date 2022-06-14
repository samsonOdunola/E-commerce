import FeaturedProducts from './FeaturedProducts';
import Herosection from './Herosection';
import { useState,useEffect } from 'react';
import { useNavigate, Routes,Route } from 'react-router-dom';



const MainPage = ({checkLogin}) => {
    const[cartDisplay, setCartDisplay]=useState(false)
    const[cartCount, setCartCount]=useState(0)
    const[cart, setCart]=useState([])
    const[activeUser, setActiveUser]=useState("")        
    let navigate = useNavigate(); 
    
    const getActiveUser=()=>{
        if(localStorage.currentUser){
            let user=JSON.parse(localStorage.currentUser);
            setActiveUser(user)
        }
        
    }
    useEffect(()=>{
        getActiveUser()
        
    },[])
    useEffect(()=>{
        getCart()
    },[])

    const getCart=()=>{
        if(localStorage.cart){
            let cart=JSON.parse(localStorage.cart)
            let count = 0
             for(let i=0;i<cart.length;i++){
                count += 1
             }
             setCartDisplay(true)
             setCartCount(count)
        }
    }
    


    const addtocart =(image,desc,price)=>{
        if(localStorage.currentUser){
            setActiveUser(JSON.parse(localStorage.currentUser))
            console.log(checkLogin)
             let newItem = {image,desc,price}
             let updatedCart =[...cart,newItem]
             setCart(updatedCart)
             localStorage.cart=JSON.stringify(updatedCart)
         
             let count = 0
             for(let i=0;i<updatedCart.length;i++){
                count += 1
             }
            console.log(updatedCart)
            setCartCount(count)
            setCartDisplay(true)
            alert("Item added to cart") 

        }else{                                  
            navigate("./login")
        }            
                          
        

    }
    
    
        

   

    

    return <main>        
        <Herosection activeUser={activeUser}cartCount={cartCount} cartDisplay={cartDisplay}/>
        <FeaturedProducts addtocart={addtocart}/>
    </main>;
}


export default MainPage;