import { BASE_URL } from "../constants/urls";
import Swal from "sweetalert2";
import axios from "axios";
import { goToHome, goToLogin } from "../routes/coordinator";

export const login = (body, clear, navigate, setIsLoggedButton, setIsLoading) => {
  setIsLoading(true)
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      setIsLoading(false)
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      goToHome(navigate);
      setIsLoggedButton("Logout");
      clear();
    })
    .catch(() => {
      setIsLoading(false)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        confirmButtonColor: "#B7312C",
        text: "E-mail ou senha incorretos!",
      });
      clear();
    });
};

export const signUp = (body, clear, navigate, setIsLoading) => {
  setIsLoading(true)
  axios
    .post(`${BASE_URL}/signup`, body)
    .then(() => {
      setIsLoading(false)

      Swal.fire({
        icon: "success",
        title: "Cadastrado!",
        text: "Seu cadastro foi realizado.",
        confirmButtonColor: "#B7312C",
      });

      goToLogin(navigate);
      clear();
    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        confirmButtonColor: "#B7312C",
        text: "Erro ao cadastrar!",
      });
      clear();
      setIsLoading(false)
    });
};

export const edit = (id, body, clear, navigate, setIsLoading) => {
  setIsLoading(true)
  console.log("form2", body)
  console.log("id", id)
  axios
    .put(`${BASE_URL}/${id}`, body)
    .then(() => {
      setIsLoading(false)
      Swal.fire({
        icon: "success",
        title: "Editado!",
        text: "Seu cadastro foi editado.",
        confirmButtonColor: "#B7312C",
      });
      goToHome(navigate)
    })
    .catch(() => {
      setIsLoading(false)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        confirmButtonColor: "#B7312C",
        text: "Erro ao editar!"
      });
      clear();
    });
};

export const userData = (id, setData) => {
  axios
    .get(`${BASE_URL}/byId/${id}`)
    .then((res) => {
      setData(res.data[0]);
    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        confirmButtonColor: "#B7312C",
        text: "Erro ao localizar usuário!",
      });
    });
};

export const userDelete = (id, navigate) => {
  Swal.fire({
    title: "Tem certeza que deseja deletar seu cadastro?",
    text: "Essa ação não poderá ser revertida!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#B7312C",
    cancelButtonColor: "#B7312C",
    confirmButtonText: "Sim",
    cancelButtonText: "Não",
  }).then((result) => {
    if (result.isConfirmed) {
      axios
        .delete(`${BASE_URL}/${id}`)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Deletado!",
            text: "Seu cadastro foi deletado.",
            confirmButtonColor: "#B7312C",
          });
          goToLogin(navigate)
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Erro ao deletar cadastro!",
          });
        });
    }
  });
};
