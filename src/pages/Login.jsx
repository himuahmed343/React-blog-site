import { signInWithPopup } from "@firebase/auth";
import React from "react";
import { useNavigate } from "react-router";
import { auth, provider } from "../firebase-config";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Click Me to Sign in
      </button>
    </div>
  );
};

export default Login;
