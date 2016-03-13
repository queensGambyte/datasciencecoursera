(function() {
var user, pass, xhttp, data={};
var ele= function(id) {
			return document.getElementById(id);
		}
		
ele("sub").addEventListener("click", ajaxCall);
//ele("login_form").onsubmit = "return ajaxcall()"
var url = "admin.quikmile.com/token/";

function ajaxCall(evt) {
	evt.preventDefault();
	//console.log("User not found");
	//ele("fail").innerHTML = "User not found";
	user = ele("user").value;
	pass = ele("pass").value;
	console.log(user);
	console.log(pass);
	data = {username: user,
			password: pass
	};
	//console.log(JSON.stringify(data));
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
		console.log(JSON.parse(xhttp.responseText));
    } else if(xhttp.readyState == 4 && xhttp.status == 404) {
		console.log("User not found");
	}
  };
  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Content-type", "application/json;");
  console.log(JSON.stringify(data));
  xhttp.send(JSON.stringify(data)); 
}
})();
		