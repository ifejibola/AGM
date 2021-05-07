import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED } from '../constants/actionTypes'


/*
    A reducer receives both the current state and the action as parameters, and returns the modified
    state.

    Well written reducer should not have any side-effects, that is a reducer with the same state
    and action, you should always get the same result. 

    Reducers should not modify or rely on any global state. 
    It is good practice to encapsulate as much of your application logic as possible in reducers.
*/

const defaultState = {
    appName: 'AGMEETING',
    token: null,
    viewChangeCounter: 0
}

export default (state = null, action) => {
    switch (action.type) {
        case HOME_PAGE_LOADED:
            return {
                ...state,
                // tags: action.payload[0].tags
            };
        case HOME_PAGE_UNLOADED:
            return {};
        default:
            return state;
    }
}