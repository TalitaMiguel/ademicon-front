import React from "react";
import useProtectPage from "../../hooks/useProtectedPage";

const HomePage = () => {
    useProtectPage()
    return (
        <div>
            <h1>HomePage</h1>
        </div>
    )
}

export default HomePage