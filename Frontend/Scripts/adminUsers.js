const baseUrl = `http://localhost:8080/users/`;

renderUsers();

function renderUsers()
{
    fetch(baseUrl)
.then(res=>res.json())
.then(data=>{
    console.log(data.data);
    displayUsers(data.data);
})
}

function displayUsers(data)
{
    console.log(data);
    let userTbody = document.getElementById("user-tbody");
    data.forEach((item)=>{
        let tr = document.createElement("tr");
        tr.innerHTML = renderTable(item);

        userTbody.append(tr);
    });
}

function renderTable(item)
{
    return `<td>${item.name}</td>
    <td>${item.email}</td>
    <td>${item.noOfOrder}</td>
    <td>${item.admin}</td>`
}