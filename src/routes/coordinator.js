export const goToHome = (navigate) => {
    navigate("/")
}
export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToEdit = (navigate, id) => {
    navigate(`/edit/${id}`)
}

export const goToSignUp = (navigate, id) => {
    navigate("/signUp")
}