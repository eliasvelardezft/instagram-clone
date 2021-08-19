const httpDelete = ({ url, token }) => {
    let headersObj = {
        'Content-type': 'application/json',
    };
    if(token) {
        headersObj.token = token;
    };
    return fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        headers: headersObj
    })
        .then(res => res.json())
        .then(res => res);
};

export default httpDelete;