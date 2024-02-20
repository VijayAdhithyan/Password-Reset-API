import { Route, Routes } from "react-router-dom";
import Login from "./pages/Log";
import Signup from "./pages/Signup";
import PasswordReset from "./pages/PasswordReset";
import SuccessLogin from "./pages/SuccessLogin";
import Loading from "./pages/Loading";
import LoginFailed from "./pages/LoginFailed";
import PwdResetPage from "./pages/PwdResetPage";
import SuccessMail from "./pages/SuccessMail";
import FailedMail from "./pages/FailedMail";
import PwdSuccess from "./pages/PwdSuccess";
import PwdFailed from "./pages/PwdFailed";
import SuccessSignup from "./pages/SuccessSignup";
import FailedSignup from "./pages/FailedSignup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/passwordReset" element={<PasswordReset />} />
      <Route path="/passwordReset/:token/:userId" element={<PwdResetPage />} />
      <Route path="/login/success" element={<SuccessLogin />} />
      <Route path="/login/authentication" element={<Loading />} />
      <Route path="/login/failed" element={<LoginFailed />} />
      <Route path="/email/success" element={<SuccessMail />} />
      <Route path="/email/failed" element={<FailedMail />} />
      <Route path="/password/updated" element={<PwdSuccess />} />
      <Route path="/password/failed" element={<PwdFailed />} />
      <Route path="/signup/success" element={<SuccessSignup />} />
      <Route path="/signup/failed" element={<FailedSignup />} />
    </Routes>
  );
};

export default AllRoutes;
