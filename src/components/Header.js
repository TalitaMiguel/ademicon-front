import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { goToHome, goToLogin } from "../routes/coordinator";
import { StyledToolbar } from "./styled";

const Header = ({isLoggedButton, setIsLoggedButton}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("id")
  }

  const isLoggedButtonAction = () => {
    if (token) {
      logout()
      setIsLoggedButton("Login")
      goToLogin(navigate)
    } else {
      goToLogin(navigate)
    }
  }

  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <Button onClick={() => goToHome(navigate)} color="inherit">
          ADEMICON
        </Button>
        <Button onClick={() => isLoggedButtonAction()} color="inherit">
          {isLoggedButton}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
