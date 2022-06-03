import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Login=({setCheckLogin})=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    let navigate =useNavigate();

    const handleLogin=(email,password)=>{
        let user={email,password}
        let alluser=JSON.parse(localStorage.allUser);
        for (let i = 0; i < alluser.length; i++) {
            if(alluser[i].email===email && alluser[i].password===password){
                localStorage.currentUser=JSON.stringify(alluser[i].firstName);                
                console.log(alluser[i].firstName);
                setCheckLogin(true);
                navigate("/");
            }else{
                alert("user not found");
            }
        }
        console.log(user)
        console.log(alluser)
        setEmail("");
        setPassword("");
    }

    return <div className="login-container" action="">
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/><br/>
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/><br/>
        <button onClick={()=>handleLogin(email,password)}>Login</button>
        <Link className="signup" to="/signup"><p>Sign up</p></Link>
    </div>

}
export default Login;