import Cookies from 'js-cookie'


export async function postData(url = '', data = {}) {

    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Cookies.get('token')
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}


export async function getData(url = '') {

    const response = await fetch(url);

    return response.json(); // parses JSON response into native JavaScript objects
}
