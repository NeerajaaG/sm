

const loginUrl = "https://reqres.in/api/login"

import store from '../redux/store'


export const login = async (email, password) => {
    console.log("password",password);
    const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
        },
        body: JSON.stringify({
            email, password
        })
    })
    const responseData = await response.json()
    console.log("responseDT",response);
    // if (response.status == 200 && responseData.length > 0) {
    //     const userInfo = responseData[0]
    //     return {
    //         userInfo, status: response.status
    //     }
    // }
    // return {
    //     ...responseData, status: response.status
    // }
}
