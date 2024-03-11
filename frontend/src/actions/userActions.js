import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGOUT,
    USER_LOGIN_SUCCESS,
    LOGIN_URL
} from "../constants/userConstants";
export const login = (email, password) => async(dispatch) => {
    dispatch({
        type: USER_LOGIN_REQUEST
    });

    try {
        const postData = { username, password }
        const config = {
            Headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await Axios.post(LOGIN_URL, postData, config);
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })

    }

}