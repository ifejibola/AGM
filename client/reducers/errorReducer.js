import { GET_ERRORS, CLEAR_ERRORS } from '../constants/actionTypes';


const initialState = {
    msg: {},
    status: null,
    id: null
}

//action comes from 
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ERRORS:
            {
                console.log('get err: ', action.payload.msg)
                return {
                    msg: action.payload.msg,
                    status: action.payload.status,
                    id: action.payload.id
                }
            };
        // return {
        //     ...state,
        //     ...action.payload,
        // };
        case CLEAR_ERRORS:
            return {
                msg: {},
                status: null,
                id: null
            };
        default:
            return state;
    }
}