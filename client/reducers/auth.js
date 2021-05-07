import {
    USER_LOADING,
    USER_LOADED,
    LOGIN_SUCCESS,
    UPDATE_FIELD_AUTH,
    REGISTER_SUCCESS, FETCH_CURRENT_USER,

    AUTH_ERROR,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,

} from '../constants/actionTypes'

const initialState = {
    isAuthenticated: null,
    isLoading: false,
    user: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        //responsible for getting the user from the backend to the point to where we fetch the user
        case USER_LOADING:
            return {
                ...state,
                // user: action.payload,
                isLoading: true,
            }
        //when the user is actually loaded, this action will run all the time to check if we are logged in
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload.data
                // user: action.payload.data
            }

        case FETCH_CURRENT_USER:
            return action.payload.data || false;

        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                // isAuthenticated: true,
                isLoading: false
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            return {
                ...state,
                user: null,
                // token: null,
                isAuthenticated: false,
                isLoading: false
            }
        // case UPDATE_FIELD_AUTH:
        //     return { ...state, [action.key]: action.value };
        default:
            return state;
    }
}