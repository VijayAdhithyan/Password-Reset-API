
import loading from "../assets/loading.gif";

const Loading = () => {
  return (
    <div className="page-container">
      <div className="page-form">
        <img src={loading} alt="" />
        <p className="loginSucccess">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
