import { Link } from "react-router-dom";
import loginSuccess from "../assets/loginSuccess.gif";

const SuccessSignup = () => {
  return (
    <div className="page-container">
      <div className="page-form">
        <img src={loginSuccess} alt="" />
        <p className="loginSucccess">
          Created <br /> Successfuly
        </p>
        <Link to={"/"}>
          <button className="btn">Back to login page</button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessSignup;
