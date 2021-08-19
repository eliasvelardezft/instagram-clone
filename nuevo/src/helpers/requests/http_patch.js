const httpPatch = ({ url, data, token }) => {
    let headersObj = {
        'Content-type': 'application/json',
    };
    if(token) {
        headersObj.token = token;
    };

    return fetch(url, {
      mode: 'cors',
      method: 'PATCH',
      headers: headersObj,
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => res);
};

export default httpPatch;