import {LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT,REG} from '../actions'

const initialState = {
    
    // email: __DEV__?'neeraja':'',
    // password: __DEV__?'Test@123':'',
    email: '',
    password: '',
    userInfo: null,
}
const emptyState = {
    email: '',
    password: '',
    userInfo: null,

}

export default (state=initialState, action,emptyState) => {
    switch (action.type) {
        default:
            break
       
        case LOGIN: {
            const {  userInfo, email, password} = action.payload
            console.log("userReducer",action.payload);
            return {email, password,userInfo}

        }
        case REG: {
            const {   email, password} = action.payload
            console.log("userReducer Reg",action.payload);
            return {email, password}

        }
        case LOGIN_FAIL: {
            return {...initialState}
        }
        case LOGOUT: {
            // const {userInfo, rememberMe, email, password} = action.payload
            
            const {email, password} = action.payload
            console.log("userReducer in logout",action.payload);

            // if (rememberMe) {
                return {email, password}
            // }
            // return {email: '', password: '', userInfo:null}
            // return {...emptyState}
        }
    }
    return state
}
