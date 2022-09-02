import React from "react";
import { TextField, Button } from "@mui/material";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styled";

const SignUpForm = () => {
  const [form, onChange, clear] = useForm({ name:"", email: "", password: "" });
  const onSubmitForm = (event) => {
    console.log(form);
    event.preventDefault();
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
          helperText={"Senha deve conter no mínimo 6 caracteres"}
        />
        <Button
          type={"submit"}
          fullWidth
          sx={{ mt: 2 }}
          variant={"contained"}
          color={"primary"}
        >
          Cadastrar
        </Button>
      </form>
    </InputsContainer>
  );
};

export default SignUpForm;
