import { ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import Router from "./routes/Router";
import theme from "./constants/theme";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  const token = localStorage.getItem("token");

  const [isLoggedButton, setIsLoggedButton] = useState(
    token ? "Logout" : "Login"
  );

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          isLoggedButton={isLoggedButton}
          setIsLoggedButton={setIsLoggedButton}
        />
        <Router
          isLoggedButton={isLoggedButton}
          setIsLoggedButton={setIsLoggedButton}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
