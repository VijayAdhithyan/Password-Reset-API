import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PwdResetPage = () => {
  const { token, userId } = useParams();
  console.log(token, userId);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    if (password) {
      navigate("/login/authentication");
    }
    if (password) {
      let PwdReset = async () => {
        try {
          let res = await axios.post(
            `${import.meta.env.VITE_API_URL}/user/resetPassword`,
            { userId, token, password }
          );
          if (res.status === 200) {
            navigate("/password/updated");
          }
        } catch (error) {
          console.log(error);
          navigate("/password/failed");
        }
      };
      PwdReset();
    }

    if (!password) {
      alert("Enter password");
    }
  };

  return (
    <div className="page-container">
      <div className="page-form">
        <p className="login-title">Reset Password</p>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="pwd">Enter new password</label>
          <input
            type="password"
            name=""
            id="pwd"
            placeholder="enter new password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn">Update</button>
        </form>
      </div>
    </div>
  );
};

export default PwdResetPage;
