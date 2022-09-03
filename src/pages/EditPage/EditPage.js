import React from "react";
import useProtectPage from "../../hooks/useProtectedPage";
import casa from "../../assets/images/carro-casa.png";
import { ScreenContainer, LogoImage } from "./styled";
import EditForm from "./EditForm";

const EditPage = () => {
  useProtectPage();
  return (
    <ScreenContainer>
      <LogoImage src={casa} />
      <EditForm />
    </ScreenContainer>
  );
};

export default EditPage;
