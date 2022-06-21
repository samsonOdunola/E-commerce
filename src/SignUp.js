import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (firstName, lastName, email, password) => {
    let newUser = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      alert("Please fill all the fields");
    } else {
      if (!localStorage.AllUser) {
        let finalAllUser = [];
        finalAllUser.push(newUser);
        localStorage.AllUser = JSON.stringify(finalAllUser);
        navigate("/login");
      } else {
        let finalAllUser = JSON.parse(localStorage.AllUser);
        finalAllUser.push(newUser);
        localStorage.AllUser = JSON.stringify(finalAllUser);
        navigate("/login");
      }
    }
  };

  return (
    <div className="login-container">
      <input
        type="text"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        placeholder="First name"
      />
      <br />
      <input
        type="text"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        placeholder="Last name"
      />
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Email"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
      />
      <br />
      <button
        onClick={() => handleSubmit(firstName, lastName, email, password)}
      >
        Signup
      </button>{" "}
      <br />
      <p>
        Have an account <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
