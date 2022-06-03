import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const [allUser, setAllUser] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    

    const handleSubmit = (firstName,lastName,email,password) => {
        let user = {firstName,lastName,email,password}
        let newUser = [...allUser,user]
        setAllUser(newUser);
        localStorage.allUser=JSON.stringify(newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        console.log(newUser);
        navigate("/login");
    }

    return <div className="login-container" >
        <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} placeholder="First name"/><br/>
        <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} placeholder="Last name"/><br/>
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}placeholder="Email"/><br/>
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/><br/>
        <button onClick={()=>handleSubmit(firstName,lastName,email,password)}>Signup</button>        
    </div>;
}



export default SignUp;