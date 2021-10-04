import api from '../api';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';

const loginAction = (data) => {
    return {
        type: LOGIN,
        payload: data
    };
};

export const login = (data) => async (dispatch) => {
    try {
        const response = await api.login(data);
        const toJson = await response.json();
        if (response.ok) {
            dispatch(loginAction({ 
                userId: response.userId
            }));
        }
        else {
            dispatch(loginAction({ 
                userId: null, 
                error: toJson.message 
            }));
        }
    }
    catch (err) {   
        throw new Error(err);
    }
};

export const logout = () => async (dispatch) => {
    try {
        const response = await api.logout();
        if (response.status) {
            dispatch({
                type: LOGOUT
            });
        }
    }
    catch (err) {   
        throw new Error(err);
    }
}
