import React from "react";
import { TextField, Button } from "@mui/material";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styled";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { edit } from "../../services/user";

const EditForm = () => {
  const navigate = useNavigate();
  const {id} = useParams
  const [form, onChange, clear] = useForm({ name:"", email: "", password: "" });

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
    edit(id,form, clear, navigate);
  };

  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"name"}
          value={form.name}
          onChange={onChange}
          label={"Nome"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          type={"text"}
        />
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
          helperText={"Deve conter no mínimo 6 caracteres"}
        />
        <Button
          type={"submit"}
          fullWidth
          sx={{ mt: 2 }}
          variant={"contained"}
          color={"primary"}
        >
          Editar cadastro
        </Button>
      </form>
    </InputsContainer>
  );
};

export default EditForm;
