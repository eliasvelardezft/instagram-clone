const httpGet = ({ url, token }, ...headers) => {
    let headersObj = {
        'Content-type': 'application/json',
    };
    if(token) {
        headersObj.token = token;
    };
    // add each header from the function call to the request headers
    headers.forEach(p => {
        Object.keys(p).forEach(k => {
            headersObj[k] = p[k]
        })
    })
    return fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: headersObj
    })
        .then(res => res.json())
        .then(res => res);
};

export default httpGet;