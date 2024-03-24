import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_LOGOUT,
    LOGIN_URL,
    REGISTER_URL

} from "../constants/userConstants";
import axios from "axios";
export const login = (email, password) => async(dispatch) => {
    dispatch({
        type: USER_LOGIN_REQUEST
    });

    try {
        const postData = { "username": email, "password": password };
        const config = {
            Headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post(LOGIN_URL, postData, config);
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
export const register = (name, email, password) => async(dispatch) => {
    dispatch({
        type: USER_REGISTER_REQUEST
    });

    try {
        const postData = {
            "name": name,
            "email": email,
            "password": password
        };
        const config = {
            Headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post(REGISTER_URL, postData, config);
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        });

        // Login the user Automatically
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });

        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })

    }

}


export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({
        type: USER_LOGOUT
    })
}