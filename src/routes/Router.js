import React from "react";
import { Routes, Route } from "react-router-dom";
import EditPage from "../pages/EditPage/EditPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const Router = ({ isLoggedButton, setIsLoggedButton }) => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route
        path="/login"
        element={
          <LoginPage
            isLoggedButton={isLoggedButton}
            setIsLoggedButton={setIsLoggedButton}
          />
        }
      />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="/edit/:id" element={<EditPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
