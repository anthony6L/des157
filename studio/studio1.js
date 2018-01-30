
var results = document.getElementById("results");
var myMsg=document.getElementById("myMsg");

document.f.onsubmit = processForm;
document.f.onreset = resetForm;

function processForm(){
	results.className = "show";
	var userName = document.f.userName.value;
	var town = document.f.town.value;
	var skill = document.f.skill.value;

	myMsg.innerHTML="Hello " + userName + " of " + town +
					", Welcome to the Clade! You've been assigned to be a " + 
					skill + ". Hope you will get used to the new community soon.";

     //prevent page from reloading
    return false;
}

function resetForm() {
	myMsg.innerHTML = "";
  	results.className = "hide";
}
