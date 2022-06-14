import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    let navigate =useNavigate();

    const handleLogin=(email,password)=>{
        let user={email,password}
        if(localStorage.AllUser){
            let alluser=JSON.parse(localStorage.AllUser);
        for (let i = 0; i < alluser.length; i++) {
            if(alluser[i].email===email && alluser[i].password===password){
                localStorage.currentUser=JSON.stringify(alluser[i].firstName); 
                localStorage.currentUserEmail=JSON.stringify(alluser[i].email);               
                console.log(alluser[i].firstName);                
                console.log(user)
                console.log(alluser)
                setEmail("");
                setPassword("");
                navigate("/");
            }else{
                alert("user not found");
            }
        }

        }else{
            alert("Please Sign up first");
            navigate("/signup");
        }
        
        
    }

    return <div className="login-container" action="">
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/><br/>
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/><br/>
        <button onClick={()=>handleLogin(email,password)}>Login</button>
        <Link className="signup" to="/signup"><p>Sign up if you dont have an accout</p></Link>
    </div>

}
export default Login;