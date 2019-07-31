//API/awfApi.js

const APIURL = 'http://137.74.116.91'

export function getTipsFromApi(){
    return fetch(`${APIURL}/allTips`)
        .then((response) => response.json())
        .then((responseJson)=> {
            return responseJson.tips
        })
        .catch((error) => {
            console.error(error)
        })
}