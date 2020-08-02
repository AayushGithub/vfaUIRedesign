function input_data(){
	var name = document.getElementById("name").value
	var dots = document.getElementById("dots").value
	var special = document.getElementById("special").value
	var rightCheck = document.getElementById("Right").checked
	eel.input_py(name,dots,special,rightCheck)
	//To process a returned value from the python file
	//use eel.input_py(eg)(RETURNED DATA)

}
function disclaim_show() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
