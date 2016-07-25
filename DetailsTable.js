function validateForm() {
    var name = document.forms["myForm"]["name"].value;
	var email = document.forms["myForm"]["email"].value;
	var address = document.forms["myForm"]["address"].value;
	var phone = document.forms["myForm"]["phone"].value;
    if (name == null || name == "") {
        alert("name must be filled out");
        return false;
    }
	if (email == null || email == "") {
        alert("email must be filled out");
        return false;
    }
	if (address == null || address == "") {
        alert("address must be filled out");
        return false;
    }
	if (phone == null || phone == "") {
        alert("phone must be filled out");
        return false;
    }
	else{
		alert("test");
		addData(name,email,address,phone);
	}
};

function addData(n,e,a,p){
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	var node_name = document.createTextNode(n);
	var node_email = document.createTextNode(e);
	var node_address = document.createTextNode(a);
	var node_phone = document.createTextNode(p);
	td.appendChild(node);
	tr.appendChild(td);

	var table = document.getElementById("myTable");
	table.appendChild(tr);
};

function Update(n,e,a,p){
// var para = document.createElement("p");
// var node = document.createTextNode("This is new.");
// para.appendChild(node);

// var parent = document.getElementById("div1");
// var child = document.getElementById("p1");
// parent.replaceChild(para,child); 
};

function DeleteData(n,e,a,p){
// var parent = document.getElementById("div1");
// var child = document.getElementById("p1");
// parent.removeChild(child);
};