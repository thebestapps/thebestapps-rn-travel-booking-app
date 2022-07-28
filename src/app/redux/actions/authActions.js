import * as actionTypes from '../actionTypes';
import * as api from '../../api/index';
import EncryptedStorage from 'react-native-encrypted-storage';

export const fetchToken = (setLoading) => async dispatch => {
    dispatch({ type: actionTypes.CLEAR_ERRORS });
    setLoading(true);
    try {
        const session = await EncryptedStorage.getItem("access_token");
        if (session !== undefined && session !== null) {
            dispatch({type: actionTypes.TOKEN_FETCH});
        }else{
            await EncryptedStorage.clear();
            dispatch({type: actionTypes.LOG_OUT});
        }
    } catch (error) {
        dispatch({ type: actionTypes.SET_ERRORS, payload: error?.response?.data });
        setLoading(false);
    }
};

export const refreshToken = (formData, setLoading) => async dispatch => {
    dispatch({ type: actionTypes.CLEAR_ERRORS });
    setLoading(true);
    try {
        const { data } = await api.refreshToken(formData);
        if (data) {
          dispatch({type: actionTypes.REFRESH_TOKEN});
          setLoading(false);
        }
    } catch (error) {
        dispatch({ type: actionTypes.SET_ERRORS, payload: error?.response?.data });
        setLoading(false);
    }
};

export const logIn = (formData, setLoading) => async dispatch => {
    dispatch({ type: actionTypes.CLEAR_ERRORS });
    setLoading(true);
    try {
        const { data } = await api.login(formData);
        if (data?.status === "success" && data?.error !== true) {
          dispatch({type: actionTypes.LOG_IN});
          await EncryptedStorage.setItem("access_permission", JSON.stringify(data?.data?.access_permission));
          await EncryptedStorage.setItem("access_token", JSON.stringify(data?.data?.access_token));
          await EncryptedStorage.setItem("employee_info", JSON.stringify(data?.data?.employee_info));
          await EncryptedStorage.setItem("refresh_token", JSON.stringify(data?.data?.refresh_token));
          setLoading(false);
        }
        console.log(data)
    } catch (error) {
        console.log(error)
        dispatch({ type: actionTypes.SET_ERRORS, payload: error?.response?.data });
        setLoading(false);
    }
};

export const logOut = (setLoading) => async dispatch => {
    dispatch({ type: actionTypes.CLEAR_ERRORS });
    console.log("Logged Out")
    setLoading(true);
    try {
        await EncryptedStorage.clear();
        dispatch({type: actionTypes.LOG_OUT});
        setLoading(false);
    } catch (error) {
        dispatch({ type: actionTypes.SET_ERRORS, payload: error?.response?.data });
        setLoading(false);
    }
};

