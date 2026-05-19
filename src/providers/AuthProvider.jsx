"use client";

import {
  createContext,
  useEffect,
  useState,
} from "react";

export const AuthContext =
  createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    // fake logged in user
    const currentUser = {
      email: "humayan@gmail.com",
      displayName: "Humayan Ahmed",
      photoURL:
        "https://i.ibb.co/4pDNDk1/avatar.png",
    };

    setUser(currentUser);
    setLoading(false);
  }, []);

  const authInfo = {
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;