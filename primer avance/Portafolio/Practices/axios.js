const axios = require('axios');
const url = 'https://jsonplaceholder.typicode.com/users';

// axios.get(url).then(response =>
//     response.data.forEach(element => {
//         // console.log("user: " + element.username + " city: " + element.address.city);
//         console.log('ID: ' + element.id + " username: " + element.username + " Email: " + element.email);
    
//     })
// )


axios.post(url, {
    usename: "Foo",
    email: "foo@foo.com"
}).then((response) => {
    console.log(response.data);   
})
.catch((err) =>{
    console.log(err);
})
