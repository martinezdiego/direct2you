import { LOGIN, LOGOUT } from '../actions/sessionActions';

const initialState = {
    isAuthenticated: false,
    userId: null,
    error: ''
};

const sessionReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (action.type) {
        case LOGIN: {
            const { userId, error } = payload;
            if (userId === null) {
                return { isAuthenticated: false, userId: null, error: error };
            }
            else {
                return { isAuthenticated: true, userId: userId, error: '' };
            }
        }
        case LOGOUT: {
            return { isAuthenticated: false, userId: null, error: '' };
        }
        default: return state;
    }
};

export default sessionReducer;
