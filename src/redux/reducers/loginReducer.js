import {LOGIN, LOGIN_SUCCESS, LOGIN_FAIL,LOGOUT} from '../actions'

const initialState = {
    loading: false,
    message: ''
}

export default (state=initialState, action) => {
    // console.log("action reducer",action);
    switch (action.type) {
        case LOGIN: {
            return {
                loading: true,
                message: ''
            }
        }
        case LOGIN_FAIL: {
            const message = action.payload
            return {
                loading: false, message
            }
        }
        case LOGIN_SUCCESS:
            return initialState
        case LOGOUT:
            // const message = action.payload
            // return {
            //     loading: false,message
            // }
            return initialState
        default:
            return state
    }
}