
function ajax() {
    try {

        request = new XMLHttpRequest();

    } catch (e) {
        alert("Your browser does not support AJAX!");
    }
    var email = document.regform.email - address.value;
    var url = "checkEmail.php";
    request.open("POST", url, true);
    request.onreadystatechange = displayResult();

    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("email-address=" + email);
}

function displayResult() {
    if ((request.readyState == 4) && (request.status == 200)) {

        document.getElementById('message').innerHTML = request.responseText;

    }
}

function addToCartAjax() {
    cart = new XMLHttpRequest();
    var url = "add_to_cart.php";
    cart.open("POST", url, true);
    cart.onreadystatechange = displayResult();

    cart.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    cart.send("product_id=" + product_id);
}