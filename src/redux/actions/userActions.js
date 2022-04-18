import Axios from "axios";

export const login = (email, password) => {
    return (dispatch) => {
        Axios.get(`http://localhost:2000/users?email=${email}&password${password}`)
            .then(res => {
                console.log(res.data)
                if (res.data.length === 0) {
                    return dispatch({
                        type: 'ERROR_LOGIN'
                    })
                } else {
                    return dispatch({
                        type: 'LOGIN',
                        payload: res.data[0]
                    })
                }

            })
    }
}