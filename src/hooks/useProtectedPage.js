import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/coordinator";

const useProtectPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(!token){
      goToLogin(navigate)
    }

  }, [navigate]);
};

export default useProtectPage