import React, { useContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import initializeAuthentication from "../Firebase/firebase.init";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

initializeAuthentication();

const Login = () => {
    const [user, setuser] = useState({
        email: "",
        password: "",
      });
      const [success, setSuccess] = useState("");
      const [errorMsg, setErrorMsg] = useState("");
      const [loginUser, setLoginUser] = useContext(AuthContext);
      const getInputValue = (e) => {
        const getValue = { ...user };
        getValue[e.target.name] = e.target.value;
        setuser(getValue);
      };
      const hangleSignin = (e) => {
        if (user.email !== "" && user.password !== "") {
          const auth = getAuth();
          signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
              const user = userCredential.user;
              setLoginUser(user);
              setSuccess("Login success");
              setErrorMsg("");
            })
            .catch((error) => {
              const errorMessage = error.message;
              setErrorMsg(errorMessage);
              setSuccess("");
            });
        }
        e.preventDefault();
      };
    return (
        <div>
        <h2 className="mt-5">Log In Page</h2>
        <p>{success}</p>
        <p>{errorMsg}</p>
        <form onSubmit={hangleSignin}>
          <div className="mb-3 mt-5  d-flex justify-content-center"controlId="formBasicEmail">
            <input onBlur={getInputValue} className="w-50 " type="email"placeholder="Enter your email"name="email" required />
          </div>
          <div className="mb-3 d-flex justify-content-center "controlId="formBasicPassword" >
            <input onBlur={getInputValue}className="w-50 "type="password"placeholder="Enter your password"name="password"required />
          </div>
          <button className="btn btn-primary" variant="primary" type="submit">
     Login
    </button>
        </form>
        <div>
          <Link to="/register">Go to Register</Link>
        </div>
        
      </div>
    );
};

export default Login;