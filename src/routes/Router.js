import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import EditPage from "../pages/EditPage/EditPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LoginPage />} />
                <Route path="/signUp" element={<SignUpPage />}/>
                <Route path="/edit/:id" element={<EditPage />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router