// console.log("I'm connected https://www.youtube.com/watch?v=rJesac0_Ftw")
const swapi = "https://swapi.co/api/people/?limit=87&page=2"
const HTMLDataContainer = document.getElementById("api-data")
var btn = document.getElementById("submit-btn");
var incByOne = 1;

btn.addEventListener("click", getData) 

function getData() {
	var api = `https://learnwebcode.github.io/json-example/animals-${incByOne}-s.json`
	var httpRequest = new XMLHttpRequest();
	httpRequest.open('GET', api, true);
	httpRequest.onload = function() {
		if (httpRequest.status >= 200 && httpRequest.status < 400) {
			console.log("Success!", httpRequest.status)
			updateAPILinkByOne()
			var ourData = JSON.parse(httpRequest.responseText);
			addDataToHTML(ourData);
		} else {
			console.log("Connected to the server but returned an error.", httpRequest.status)
		}
	};

	httpRequest.onerror = function() {
		console.log("Connection error", httpRequest.status)
	}
	
	httpRequest.send();
}

function addDataToHTML(data) {
	data.forEach(function(item, value) {
		HTMLDataContainer.insertAdjacentHTML("beforeend", `<li id="${data[value].name}" class="${incByOne}-cat">${data[value].name} is a ${data[value].species}.</li>`)
	})	
}

function updateAPILinkByOne() {
	incByOne++
	if (incByOne > 3) {
		console.log("incByOne", incByOne)
		btn.classList.add("disable-btn");
		btn.removeEventListener("click", getData)
	} else if (incByOne > 1) {
		// console.log("i see 2, maybe add a previous/remove last data btn?? ")
	} else {
		// console.log("i see else")
		btn.style.visibility = "visible";
	}
	
	return 
}


