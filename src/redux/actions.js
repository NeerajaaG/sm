export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const signIn = loginInfo => {
    console.log("loginInfo signin",loginInfo);

    return {
        type: LOGIN,
        payload: loginInfo
    }
}

export const loggingout = loginInfo => {
    // console.log("loginInfo",loginInfo);
    return {
        type: LOGOUT,
        payload: loginInfo
       
    }
}

