const INITIAL_STATE = {
    id: null,
    email: "",
    password: "",
    role: "",
    errorLogin: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                password: action.payload.password,
                role: action.payload.role
            }
        case 'ERROR_LOGIN':
            return {
                ...state,
                errorLogin: true
            }
            default:
                return state
    }
}


export default userReducer 