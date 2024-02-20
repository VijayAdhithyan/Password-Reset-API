import { Link } from "react-router-dom";
import loginFailed from "../assets/loginFailed.gif";

const PwdFailed = () => {
  return (
    <div className="page-container">
      <div className="page-form">
        <img style={{ width: "165px" }} src={loginFailed} alt="" />
        <p className="loginSucccess">Link Failed</p>
        <p style={{ textAlign: "center", margin: "4px 0" }}>
          Invalid or expired <br /> password reset token
        </p>
        <Link to={"/"}>
          <button className="btn">Back to login page</button>
        </Link>
      </div>
    </div>
  );
};

export default PwdFailed;
