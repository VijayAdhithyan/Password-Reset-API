import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      navigate("/login/authentication");
    }
    if (email) {
      let login = async () => {
        try {
          let res = await axios.post(
            `${import.meta.env.VITE_API_URL}/user/requestResetPassword`,
            {
              email,
            }
          );
          if (res.status === 200) {
            navigate("/email/success");
          }
        } catch (error) {
          console.log(error);
          navigate("/email/failed");
        }
      };
      login();
    }

    if (!email) {
      alert("Enter Email");
    }
  };

  return (
    <div className="page-container">
      <div className="page-form">
        <p className="login-title">Password reset request</p>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">Enter Email-ID</label>
          <input
            type="text"
            name=""
            id="email"
            placeholder="enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn"> Send email</button>
          <p>OR</p>
          <Link to={"/"}>
            <button className="btn"> Back to login page</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
