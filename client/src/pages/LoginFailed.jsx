import { Link } from "react-router-dom";
import loginFailed from "../assets/loginFailed.gif";

const LoginFailed = () => {
  return (
    <div className="page-container">
      <div className="page-form">
        <img src={loginFailed} alt="" />
        <p className="loginSucccess">Wrong <br /> credentials</p>
        <Link to={"/"}>
          <button className="btn">Back to login page</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginFailed;
