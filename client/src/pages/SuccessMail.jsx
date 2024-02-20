import { Link } from "react-router-dom";
import successMail from "../assets/successMail.gif";

const SuccessMail = () => {
  return (
    <div className="page-container">
      <div className="page-form">
        <img src={successMail} alt="" />
        <p className="loginSucccess">
          Link send <br /> successfully
        </p>
        <p style={{margin:"3px"}}>Check your E-mail</p>
        <Link to={"/"}>
          <button className="btn">Back to login page</button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessMail;
