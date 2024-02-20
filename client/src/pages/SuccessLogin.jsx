import { Link } from "react-router-dom";
import loginSuccess from "../assets/loginSuccess.gif";

const SuccessLogin = () => {
  return (
    <div className="page-container">
      <div className="page-form">
        <img src={loginSuccess} alt="" />
        <p className="loginSucccess">Login Success</p>
        <Link to={"/"}>
          <button className="btn">Back to login page</button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessLogin;
