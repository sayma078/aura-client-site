import { getAuth } from '@firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [loginUser, setLoginUser] = useState();
    const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      const { displayName, email, photoURL } = user;
      const userInfo = {
        name: displayName,
        email,
        photo: photoURL,
      };
      setLoginUser(userInfo);
    });
  }, [auth]);
    return (
        <AuthContext.Provider value= {[loginUser, setLoginUser]}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;