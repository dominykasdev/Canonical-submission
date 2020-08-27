const requestOptions = {
    method: 'GET',
    redirect: 'follow'
}, url = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

export default fetch(url, requestOptions)
    .then(result => {
        return result
    })
    .catch(error => console.log('error', error));