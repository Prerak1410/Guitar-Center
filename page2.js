
var xhttp = new XMLHttpRequest();

var i = localStorage.getItem('index1');
var abc;
//console.log(i);
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        abc = response.allProducts;
        def();
    }
}
xhttp.open("GET", "guitardata1.json", true);
xhttp.send();
function def(){
    document.getElementById("z").src=abc[i].image_path;
    document.getElementById("displayInfo").innerHTML = abc[i].product_description;
    document.getElementById("shippingDetails").innerHTML = abc[i].shipping_details;
    document.getElementById("price").innerHTML = abc[i].price;
}

function validateform() {
    var x=document.forms["myform"]["firstName"].value;
    var y=document.forms["myform"]["lastName"].value;
    var z=document.getElementById("Email").value;
    localStorage.setItem("This",z);
    var p=document.getElementById("One").value;
    if(x=="" || y=="" || z=="" || p==""){
        alert("Please fill all the inputs");
    }
    else {
        document.getElementById("Review_id").style.display="block";
        document.getElementById("Review_id").innerHTML = " First name is " + x + " Last name is " + y + " and your Email id is " + z ;
        document.getElementById("fn").value = "";
        document.getElementById("ln").value = "";
        document.getElementById("One").value = "";
        document.getElementById("Email").value = "";
        document.forms["myform"].style.visibility="hidden";
        document.getElementById("edit").style.visibility="visible";
        document.getElementById("buy").style.visibility="visible";
    }
}
function myFun() {
    var x=document.getElementById("One");
    var y=x.value.length;
    if(y !== 16){
        alert("Enter 16 digit only");
        return false;
    }
}

function EDIT() {
    document.forms["myform"].style.visibility="visible";
    document.getElementById("Review_id").style.display="none";
    document.getElementById("edit").style.visibility="hidden";
    document.getElementById("buy").style.visibility="hidden";
}

function BUY() {
    location.href="page3.html";
}