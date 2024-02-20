import { Link } from "react-router-dom";
import loginFailed from "../assets/loginFailed.gif";

const FailedMail = () => {
  return (
    <div className="page-container">
      <div className="page-form">
        <img src={loginFailed} alt="" />
        <p className="loginSucccess">
          Invalid Mail Id
        </p>
        <p style={{ margin: "3px" }}>User does not exist</p>
        <Link to={"/"}>
          <button className="btn">Back to login page</button>
        </Link>
      </div>
    </div>
  );
};

export default FailedMail;
