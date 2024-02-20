import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Log = () => {
  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/login/authentication");
    }
    if (email && password) {
      let login = async () => {
        try {
          let res = await axios.post(
            `${import.meta.env.VITE_API_URL}/user/login`,
            {
              email,
              password,
            }
          );
          if (res.status === 200) {
            navigate("/login/success");
          }
        } catch (error) {
          console.log(error);
          navigate("/login/failed");
        }
      };
      login();
    }

    if (!email) {
      alert("Enter Email");
    }
    if (!password) {
      alert("Enter Password");
    }
  };

  return (
    <div>
      <div className="page-container">
        <div className="page-form">
          <p className="login-title">Login</p>
          <form className="form" onSubmit={handleSubmit}>
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
            <Link to={"/passwordReset"}>forget password?</Link>
            <button className="btn">Login</button>
            <p>OR</p>
            <Link to={"/signup"}>
              <button className="btn"> Create Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Log;
