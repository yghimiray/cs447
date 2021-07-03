window.onload = function() {
    console.log('inside client js - main.js')
    document.getElementById('product-form').onsubmit = function (event) {
        event.preventDefault();

    }
}