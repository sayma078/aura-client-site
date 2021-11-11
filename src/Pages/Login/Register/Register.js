import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import initializeAuthentication from '../Firebase/firebase.init';


 initializeAuthentication();


const Register = () => {
    const [user, setuser] = useState({
        email: "",
        password: "",
        name: ""
      });

      const [success, setSuccess] = useState('');
      const [errorMsg, setErrorMsg] = useState('');
      const getInputValue = (e) => {
        const getValue = { ...user };
        getValue[e.target.name] = e.target.value;
        setuser(getValue);
      };
      const hangleSignup = (e) => {
        if(user.email !== '' && user.password !== '' && user.name !== ''){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password, user.name)
              .then((userCredential) => {
                const user = userCredential.user;
                setSuccess('Register success')
                setErrorMsg('');
              })
              .catch((error) => {
                const errorMessage = error.message;
                setErrorMsg(errorMessage);
                setSuccess('');
              });
            }
            e.preventDefault();
        }
    return (
        <div>
        <div>
  <h2 className="mt-5">Register Page</h2>
  <p>{success}</p>
  <p>{errorMsg}</p>
  <form onSubmit={hangleSignup}>
  <div className="mb-3 mt-5  d-flex justify-content-center" controlId="formBasicEmail">
      <input onBlur={getInputValue} className="w-50 " type="text" placeholder="Enter your name"name="name" />
    </div>
    <div className="mb-3 d-flex justify-content-center" controlId="formBasicEmail" >
      <input onBlur={getInputValue} className="w-50 "type="email"placeholder="Enter your email"name="email" required />
    </div>
    <div className="mb-3 d-flex justify-content-center "controlId="formBasicPassword">
      <input onBlur={getInputValue} className="w-50 " type="password" placeholder="Enter your password" name="password" required />
    </div>
    <button className="btn btn-primary" variant="primary" type="submit">
      Register
    </button>
  </form>
  
  <div>
    <Link to="/login">Go to Login</Link>
  </div>

</div>
    </div>
    );
};

export default Register;