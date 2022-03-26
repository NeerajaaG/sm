

const loginUrl = "https://reqres.in/api/login"
const regUrl = "https://reqres.in/api/register "

import store from '../redux/store'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const login = async (email, password) => {

    const body = {email, password }

    console.log("body",body);

    const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),

    })
    const responseData = await response.json()
    console.log("responseDT",responseData);
    await AsyncStorage.setItem(
        '@Token',
        responseData.token
      );
   
    const userInfo = responseData.token
    return {
        ...responseData
    }
}

export const reg = async (email, password) => {

    const body = {email, password }

    console.log("body",body);

    const response = await fetch(regUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),

    })
    const responseData = await response.json()
    console.log("responseDT",responseData);
   
   
    const userInfo = responseData.token
    return {
        ...responseData
    }
}

export const getMyProfile = async studentId => {
   

    const response = await fetch("https://reqres.in/api/users/4 ", {
        method: 'GET',
       
    })
    const responseJson = await response.json()
    // console.log("responseJson in getAll",responseJson);
  
        return {
            activity:  responseJson.data
        }
   
}

export const getAllProfile = async studentId => {
   

    const response = await fetch("https://reqres.in/api/users?page=1", {
        method: 'GET',
       
    })
    const responseJson = await response.json()
    console.log("responseJson in getAll",responseJson);
  
        return {
            activity:  responseJson.data
        }
   
}