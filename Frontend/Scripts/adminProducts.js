const baseUrl = `http://localhost:8080/products/`;

renderUsers();

function renderUsers()
{
    fetch(baseUrl)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        displayUsers(data);
    })
    .catch(err=>console.log(err));
}

function displayUsers(data)
{
    console.log(data);
    let userTbody = document.getElementById("products-tbody");
    userTbody.innerHTML = null;
    data.forEach((item)=>{
        let tr = document.createElement("tr");
        tr.innerHTML = renderTable(item);
        
        let btnTd = document.createElement("td");
        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList.add("edit-btn");
        btnTd.append(editBtn);
        tr.append(btnTd);

        editBtn.addEventListener("click",()=>{
            let editMenu = document.getElementById("edit-menu");
            editMenu.classList.add("show");
            editMenu.classList.remove("noshow");
            let form = document.getElementById("edit-form");
            form.name.value = item.name;
            form.price.value = item.price;
            form.discount.value = item.discount;
            form.finalprice.value = item.finalprice;
            form.stock.value = item.stock;
            form.description.value = item.description;
            form.id.value = item.id;
            form.sex.value = item.sex;
            form.size.value = item.size;
            form.rating.value = item.rating;
            form.image1.value = item.image1;
            form.image2.value = item.image2;
            form.image3.value = item.image3;
            form.image4.value = item.image4;

            form.addEventListener("submit",async(event)=>{
                event.preventDefault();
                const myFormData = new FormData(event.target);
                const formDataObj = {};
                myFormData.forEach((value, key) => (formDataObj[key] = value));
                console.log(formDataObj);
                await postData(formDataObj , item._id);
                editMenu.classList.add("noshow");
                editMenu.classList.remove("show");
                renderUsers();
            })
        })
        userTbody.append(tr);
    });
}

function postData(data,id)
{
    fetch(`${baseUrl}/edit/${id}`,{
        method:"PATCH",
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

function renderTable(item)
{
    return `<td>
    <img src="${item.image1}">
    <p>${item.name}</p>
    </td>
    <td>${item.id}</td>
    <td>${item.finalprice}</td>
    <td>${item.discount}</td>
    <td>${item.stock}</td>`
}