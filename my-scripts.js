//set count thus == null does not exist
if(localStorage.getItem("count") == null) {
	localStorage.setItem("count", 0)
}

// update account
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}

update()

//add one to count
function plusOne(){
	localStorage.setItem("count",Number(localStorage.getItem("count"))+1)
update()
}
//reset count
function reset() {
	if (confirm("Are you really sure?")) {
    	localStorage.setItem("count",0);
		update();
	}
}