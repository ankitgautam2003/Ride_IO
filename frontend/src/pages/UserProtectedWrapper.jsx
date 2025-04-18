import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({ children }) => {
  const [tokenExists, setTokenExists] = useState(
    !!localStorage.getItem("token")
  );
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      setTokenExists(true);
    }
  }, [navigate]);

  // Optional: catch token removal from other tabs or on logout
  useEffect(() => {
    const handleStorageChange = () => {
      if (!localStorage.getItem("token")) {
        navigate("/login");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [navigate]);

  return tokenExists ? <>{children}</> : <div>Loading...</div>;
};

export default UserProtectedWrapper;
