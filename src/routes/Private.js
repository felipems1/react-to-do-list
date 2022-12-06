import { useState, useEffect } from "react";
import { auth } from "../firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          uid: user.uid,
          email: user.email,
        };
        localStorage.setItem("@detailUser", JSON.stringify(userData));
        setLoading(false);
        setSigned(true);
      } else {
        setLoading(false);
        setSigned(false);
      }
    });
  };

  if (loading) {
    return <div></div>;
  }

  if (!signed) {
    return <Navigate to="/" />;
  }

  return children;
};

export default Private;
