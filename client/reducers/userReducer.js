import { FETCH_USERS } from '../actions';


const initialState = {
    users: [],
}
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            // return action.payload;
            return {
                ...state,
                users: action.payload.data,
            }

        default:
            return state;
    }
}