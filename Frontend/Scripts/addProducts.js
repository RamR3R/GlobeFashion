const baseUrl = `http://localhost:3030/products/`;
let editMenu = document.getElementById("edit-menu");
let form = document.getElementById("edit-form");

form.addEventListener("submit",async(event)=>{
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    await postData(formDataObj);
    console.log(formDataObj)
})

function postData(data,id)
{
    fetch(`${baseUrl}/add`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
    .catch(err=>console.log(err));
}