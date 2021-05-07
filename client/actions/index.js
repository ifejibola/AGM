import axios from 'axios'
import { USER_LOADED, LOGIN_SUCCESS, USER_LOADING, FETCH_CURRENT_USER, REGISTER_SUCCESS, AUTH_ERROR, GET_ERRORS, CLEAR_ERRORS } from '../constants/actionTypes';


export const FETCH_USERS = 'FETCH_USERS';

export const fetch_users = () => async (dispatch, getState, api) => {

    // dispatch({
    //     type: USER_LOADING,
    // })
    const res = await api.get('/user')


    dispatch({
        type: FETCH_USERS,
        payload: res,
    })

    // await api.get('/user').then(res => dispatch({
    //     type: USER_LOADED,
    //     payload: res.data
    // }))
}


export const fetch_current_user = () => async (dispatch, getState, api) => {

    const res = await api.get('/current_user');

    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res,
    })
}
// router.get('/current_user', modCtrl.currentUser)
// router.get('/read', modCtrl.read)
export const Login = ({ email, password }) => async (dispatch, getState, api) => {

    // const res = await api.post('/login');

    // dispatch({
    //     type: LOGIN_SUCCESS,
    //     payload: res,
    // })

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //req
    const body = JSON.stringify({ email, password });

    axios.post('/login', body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            console.log("register error: ", err);
        })
}

export const registerUser = ({ email, password, name, company }) => dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //req
    const body = JSON.stringify({ email, password, name, company });

    axios.post('/mod', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            console.log("register error: ", err);
        })
}
// STATUS
export const loadStatus = () => async (dispatch, getState, api) => {

    //  user loading
    dispatch({ type: USER_LOADING });

    axios.get('/read').then(res => dispatch({
        type: USER_LOADED,
        payload: res.data
    })).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({ type: AUTH_ERROR })
    })
}

/// Error actions

/// RETURN ERRORS
export const returnErrors = (msg, status, id = null) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status, id }
    }
}

// CLEAR ERRORS
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};
// export const loadUser = () => async (dispatch, getState, api) => {
//     // user loading change 
//     // dispatch({ type: USER_LOADING });

//     const token = getState().auth;
//     console.log('This is token from loadUser action: ', token)

//     await api.get('/read')
//         .then(res => dispatch({
//             type: FETCH_CURRENT_USER,
//             payload: res.data
//         }))
//         .catch(err => {
//             console.log("loadUser error: ", err)
//         })

// }
