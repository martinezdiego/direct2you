import api from '../api';

export const SIGNUP = 'SIGNUP';

export const signUp = async (data) => {
    try {
        const response = await api.signUp(data);
        const toJson = await response.json();
        return toJson;
    }
    catch (err) {   
        throw new Error(err);
    }
};
