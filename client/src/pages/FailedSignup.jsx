import { Link } from "react-router-dom";
import loginFailed from "../assets/loginFailed.gif";

const FailedSignup = () => {
  return (
    <div className="page-container">
      <div className="page-form">
        <img src={loginFailed} alt="" />
        <p className="loginSucccess">
          Something <br />
          went wrong
        </p>
        <Link to={"/"}>
          <button className="btn">Back to login page</button>
        </Link>
      </div>
    </div>
  );
};

export default FailedSignup;
