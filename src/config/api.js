

const baseUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed' //test


// export const practiseDeck = async (studentId,set_Id,sharedId) => {
//     const token = store.getState().userReducer.userInfo.sessionToken
//     const ipv4Address = await NetworkInfo.getIPV4Address()
    
//     var isSharedDeck;
//     if(sharedId == 1)
//     {
//         isSharedDeck= true
//     }
//     else{
//         isSharedDeck= false
//     }
//     const mode = 'answer'
//     const response = await fetch(`${practiseDeckUrl}?mode=${mode}&setId=${set_Id}&studentId=${studentId}&isSharedDeck=${isSharedDeck}`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'accept': 'application/json',
//             ipv4address : ipv4Address,
//             'userid': studentId,
//             'Authorization': `Bearer ${token}`
//         }
//     })
//     const responseJson = await response.json()
//     // console.log("responseJson in practiseDeck",responseJson);

//     if (response.status == 200) {
//         // console.log("responseJson in practiseDeck",responseJson);
//         return {
//             status: 200,
//             // courses: responseJson.courses,
//             activity:  responseJson
//         }
//     }
//     return {
//         status: response.status, ...responseJson
//     }
// }

export const getAllMovies = async studentId => {
   

    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed", {
        method: 'GET',
       
    })
    const responseJson = await response.json()
    // console.log("responseJson in getAll",responseJson);
  
        return {
            status: 200,
            activity:  responseJson
        }
   
}

export const getAllRating = async studentId => {
   

    const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed", {
        method: 'GET',
       
    })
    const responseJson = await response.json()
    // console.log("responseJson in getAll",responseJson);
  
        return {
            status: 200,
            list:  responseJson
        }
   
}

