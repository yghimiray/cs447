window.onload = function(){
    sessionStorage.setItem('accessToken', 'dfadsfadf3434343');

    document.getElementById('cart-btn').onclick = function(){
        
        window.open('shoppingcart.html?prodId='+document.getElementById('prodId').value, '_self');
    }
}