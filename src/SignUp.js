import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
const SignUp = () => {
    const [allUser, setAllUser] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    

    const handleSubmit = (firstName,lastName,email,password) => {
        let newUser = {firstName,lastName,email,password}
        
        setAllUser((oldState)=>{
            let newAllUser = [...oldState,newUser]
            localStorage.allUser=JSON.stringify(newAllUser);
            console.log(allUser);
            return newAllUser
        });
        
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        
        // navigate("/login");
    }

    return <div className="login-container" >
        <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} placeholder="First name"/><br/>
        <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} placeholder="Last name"/><br/>
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}placeholder="Email"/><br/>
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/><br/>
        <button onClick={()=>handleSubmit(firstName,lastName,email,password)}>Signup</button>   
        <Link to="/login">Login</Link>     
    </div>;
}



export default SignUp;