import { BASE_URL } from "../constants/urls";
import Swal from "sweetalert2";
import axios from "axios";
import { goToHome, goToLogin } from "../routes/coordinator";

export const login = (body, clear, navigate, setIsLoggedButton) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      goToHome(navigate)
      setIsLoggedButton("Logout")
      clear();
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Erro na autenticação!",
        footer: `Status do erro - ${error.response.status}`,
      });
      clear();
    });
};

export const signUp = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      goToLogin(navigate)
      clear();
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Erro ao cadastrar!",
        footer: `Status do erro - ${error.response.status}`,
      });
      clear();
    });
};
