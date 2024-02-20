import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/login/authentication");
    }
    if (name && email && password) {
      let signup = async () => {
        try {
          let res = await axios.post(
            `${import.meta.env.VITE_API_URL}/user/signup`,
            {
              email,
              name,
              password,
            }
          );
          if (res.status === 200) {
            navigate("/signup/success");
          }
        } catch (error) {
          console.log(error);
          navigate("/signup/failed");
        }
      };
      signup();
    }

    if (!email) {
      alert("Enter Email");
    }
    if (!password) {
      alert("Enter Password");
    }
  };
  return (
    <div className="page-container">
      <div className="page-form">
        <p className="login-title">Create Account</p>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="enter name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="pwd">Password</label>
          <input
            type="password"
            id="pwd"
            placeholder="enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn">Create Account</button>
          <p>OR</p>
          <Link to={"/"}>
            <button className="btn">Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
