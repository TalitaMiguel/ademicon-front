import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "../components/Header";
import EditPage from "../pages/EditPage/EditPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const Router = () => {
    return (
        <BrowserRouter>
            {/* Header precisa ter acesso ao histórico de navegação */}
            <Header />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route path="/signUp" element={<SignUpPage />}/>
                <Route path="/edit/:id" element={<EditPage />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router