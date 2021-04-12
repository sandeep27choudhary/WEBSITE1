//Popup Contact Form

//Validating all fields
function input_fields(){
	if(document.getElementById('name').value=="" || document.getElementById('email').value=="" || document.getElementById('msg').value==""){
		alert("Complete all fields right now...");
	}
	else{
		document.getElementById('form').submit();
		alert("Message Sent Successfully...");
	}
}

//Display Conatct form
function show_form(){
	document.getElementById('MessageBox').style.display = "block";
}

//Close Contact form
function close_form(){
	document.getElementById('MessageBox').style.display = "none";
}



