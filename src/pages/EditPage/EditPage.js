import React from "react";
import useProtectPage from "../../hooks/useProtectedPage";

const EditPage = () => {
    useProtectPage()
    return (
        <div>
            <h1>EditPage</h1>
        </div>
    )
}

export default EditPage