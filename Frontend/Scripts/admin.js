const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
const baseUrl = `http://localhost:8080/`;

const admin = JSON.parse(localStorage.getItem("admin-info"));
document.getElementById("admin-name").innerText = admin.name;

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});

function uploadCSV(event) {
	event.preventDefault();

	// Get the selected file
	var fileInput = document.getElementById('csvFile');
	var file = fileInput.files[0];

	// Create a FileReader object
	var reader = new FileReader();

	// Read the file
	reader.onload = function (e) {
	  var contents = e.target.result;

	  // Save the file locally
	  saveCSV(contents);
	};

	reader.readAsText(file);
  }

function saveCSV(contents)
{
	var blob = new Blob([contents], { type: 'text/csv' });
	fetch(`${baseUrl}products/upload/csv`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
		file : blob
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
    .catch(err=>console.log(err));
}


// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})

