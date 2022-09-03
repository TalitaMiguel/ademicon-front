import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import Swal from "sweetalert2";
import { login } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { InputsContainer } from "./styled";
import { TextField, Button, CircularProgress } from "@mui/material";

const LoginForm = ({isLoggedButton, setIsLoggedButton}) => {
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false)

  const emailValidation = (email) => {
    const validation = /\S+@\S+\.\S+/;
    return validation.test(email);
  };

  const onSubmitForm = (event) => {
    if (!emailValidation(form.email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email inválido!",
      });
      event.preventDefault();
      return;
    }
    event.preventDefault();
    login(form, clear, navigate, setIsLoggedButton, setIsLoading);
  };

  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          type={"email"}
        />

        <TextField
          name={"password"}
          type={"password"}
          value={form.password}
          onChange={onChange}
          label={"Senha"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          inputProps={{ inputMode: "numeric", pattern: "^.{6,}" }}
        />
        <Button
          type={"submit"}
          fullWidth
          sx={{ mt: 2 }}
          variant={"contained"}
          color={"primary"}
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer Login</>}
        </Button>
      </form>
    </InputsContainer>
  );
};

export default LoginForm;
