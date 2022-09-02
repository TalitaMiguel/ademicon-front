import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { goToHome, goToLogin } from "../routes/coordinator";
import { StyledToolbar } from "./styled";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToHome(navigate)} color="inherit">
          ADEMICON
        </Button>
        <Button onClick={() => goToLogin(navigate)} color="inherit">
          Login
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
