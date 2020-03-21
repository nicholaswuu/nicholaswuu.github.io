function ddown() {
	dropdown = document.getElementById('content');
	if (dropdown.style.display === "none"){
		dropdown.style.display = "block";
	} else{
		dropdown.style.display = "none";
	}
}

function info(){
	cardbg = document.getElementById("cardbg")
	card = document.getElementById("card")
	cardbg.style.display = "block"
	card.style.display = "inline-block"
}

function infoout(){
	cardbg = document.getElementById("cardbg")
	card = document.getElementById("card")
	cardbg.style.display = "none"
	card.style.display = "none"
}