const baseUrl = `http://localhost:3030/users/`;

const userTbody = document.getElementById("user-tbody");

console.log(userTbody);

fetch(baseUrl)
.then(res=>res.json())
.then(data=>{
    console.log(data);
})