
var i=0;
var xhttp = new XMLHttpRequest();
var abc;
var index1;
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        abc= response.allProducts;
        def();
    }
}
xhttp.open("GET", "guitardata1.json", true);
xhttp.send();


function def(){
    document.getElementById("img1").src = abc[i].image_path;
    document.getElementById("displayInfo").innerHTML = abc[i].product_description;
    document.getElementById("shippingDetails").innerHTML = abc[i].shipping_details;
    document.getElementById("price").innerHTML = abc[i].price;
}
function next() {
    if (i < abc.length) {
        i++;
        def();
        localStorage.setItem('index1',i);
    }

}

function prev() {
    if (i > 0) {
        i--;
        def();
        localStorage.setItem('index1',i);
    }
}
 function dispInfo(){
    var x= document.getElementById("displayInfo");
    if(x.style.display !== "block"){
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
 }
 function details() {
     var t= document.getElementById("shippingDetails");
     if(t.style.display !== "block") {
         t.style.display = "block";
     }
     else {
         t.style.display = "none";
     }
 }
function price() {
    var d= document.getElementById("price");
    if(d.style.display !== "block") {
        d.style.display = "block";
    }
    else {
        d.style.display = "none";
    }
}
 function buy() {
     location.href="page2.html";
 }
