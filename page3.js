var xhttp = new XMLHttpRequest();

var i = localStorage.getItem('index1');
var j= localStorage.getItem("This");
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
    document.getElementById("Ord").innerHTML=Math.floor(Math.random()*100);
    document.getElementById("CONFIRM").innerHTML="Your Order confirmation is sent to your emai id "+ j +"<br><br>"+ "Thanks for shopping, Please come again";
}
