window.onload = function() {

    displayLogin();
    document.getElementById('sign_up_btn').onclick = displaySignUpForm;
    document.getElementById('submit-btn1').onclick = addBooks;
    document.getElementById('show-cart-btn').onclick = showShoppingCart;
    document.getElementById('place-order').onclick = function() {
        alert("ordered succefully")
            // ();
        document.getElementById('cart-list').style.display = "none";
        displayLogin()
            // displayCRUDList()
    }

    document.getElementById('login-btn').onclick = async function(event) {
        event.preventDefault();
        let result = await fetch('http://localhost:5500/users/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username: document.getElementById('username').value,
                password: document.getElementById('password').value
            })
        }).then(response => response.json());
        if (result.accessToken) {
            sessionStorage.setItem("accessToken", result.accessToken);
            sessionStorage.setItem('username', document.getElementById('username').value)
                // alert("1......")
            displayBookForm()
                // displayCRUDList();
        } else {
            displayLoginPage();
        }


        loggedUsername = document.getElementById('username').value,
            fetchBooks();
        // if (admin) {
        //     displayCRUDList();
        // } else {
        //     displaySalesList();
        // }
        console.log(result.accessToken)
    }

    document.getElementById('c_btn').onclick = async function(event) {
        event.preventDefault();
        let result = await fetch('http://localhost:5500/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username: document.getElementById('c_username').value,
                password: document.getElementById('c_password').value,
                role: document.getElementById('c_role').value
            })
        }).then(response => response.json());

        displayLogin()

    }




    document.getElementById("show-cart-btn").onclick = function(event) {
        event.preventDefault();
        showShoppingCart();
    }


    document.getElementById('add-a-Book').onclick = function(event) {
            event.preventDefault();
            displayNewPurchase();
        }
        ////////////////////////////////////////////////////////////////////////////////////////
        // document.getElementById("submit-btn").onclick = function(event) {
        //     event.preventDefault();
        //     const bookId = this.dataset.id;
        //     if (bookId) {
        //         updateBook(bookId);
        //     } else {
        //         addBooks();
        //     }
        //     displayNewPurchase();
        // }
}


////////////////////////////////////////////////////////////////////////////////////////////
async function fetchBooks() {
    const tbody = document.getElementById("book-list-body");
    const books = await fetch('http://localhost:5500/books', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
            }

        })
        .then(response => response.json())
    console.log(books)
    books.forEach(book => {
        // if (admin) {
        attachbooks(tbody, book)
            // } else {
            //     attachSalebooks(tbody, book);
            // }
    })
}



///////////////////////////////////////////////////////////////////////////////////////////////
async function addBooks() {
    const tbody = document.getElementById("book-list-body");
    alert(document.getElementById("title").value)
    await fetch('http://localhost:5500/books', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
            },
            body: JSON.stringify({
                id: document.getElementById("code").value,
                title: document.getElementById("title").value,
                qty: document.getElementById("qty").value,
                publishedDate: document.getElementById("pub-date").value,
                price: document.getElementById("unitprice").value
            })
        }).then(response => response.json())
        .then(book => {
            console.log(book)
            attachbooks(tbody, book);
            document.getElementById('input-form').reset();
        })
}



///////////////////////////////////////////////////////////////////////////////////////////////////
async function addShoppingCart(book) {
    await fetch('http://localhost:5500/users/carts', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
            },
            body: JSON.stringify({
                username: sessionStorage.getItem('username'),
                obj: book
            })
        }).then(response => response.json())
        .then(book => {
            alert("Selected item added to the cart successfully");
        })
}

//////////////////////////////////////////////////////////////////////////////////////////////

async function showShoppingCart() {


    const shoppingCarts = await fetch('http://localhost:5500/users/carts/' + sessionStorage.getItem('username'), {
            method: "GET",
            headers: {
                "content-type": "application/json",
                'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
            },

        })
        .then(response => response.json());
    console.log("Shooping carts")
    console.log(shoppingCarts[0].obj)
    let tBody = document.getElementById('cart-list-body')
    dsiplayCartItem();
    shoppingCarts.forEach(element => {
        atachCartItem(tBody, element.obj);
    })
}

///////////
function atachCartItem(tbody, book) {
    // data addition to the row of the table one by one (for one book)
    const tr = document.createElement('tr');

    const idData = document.createElement('td'); //<td>111</td>
    idData.textContent = book.id;
    tr.appendChild(idData); //

    const titleData = document.createElement('td'); //<td>111</td>
    titleData.textContent = book.title;
    tr.appendChild(titleData); //

    const qtyData = document.createElement('td'); //<td>111</td>
    qtyData.textContent = book.qty;
    tr.appendChild(qtyData);

    const pubData = document.createElement('td'); //<td>111</td>
    pubData.textContent = book.publishedDate;
    tr.appendChild(pubData);

    const priceData = document.createElement('td'); //<td>111</td>
    priceData.textContent = book.price;
    tr.appendChild(priceData);

    ////////////////////////// Creating edit and delete buttons and adding them to the table

    // const actionData = document.createElement('td');
    // const cartButton = document.createElement('button');
    // cartButton.innerText = 'Add to Cart';
    // cartButton.dataset.id = book.id;
    // actionData.appendChild(cartButton);


    //tr.appendChild(actionData);

    ///////////////attaching the one row of the table to the screen
    tbody.appendChild(tr);
}


////////////////////////////////////////////////////////////////////////////////////////////////////////
function attachSalebooks(tbody, book) {

    // data addition to the row of the table one by one (for one book)
    const tr = document.createElement('tr');

    const idData = document.createElement('td'); //<td>111</td>
    idData.textContent = book.id;
    tr.appendChild(idData); //

    const titleData = document.createElement('td'); //<td>111</td>
    titleData.textContent = book.title;
    tr.appendChild(titleData); //

    const qtyData = document.createElement('td'); //<td>111</td>
    qtyData.textContent = book.qty;
    tr.appendChild(qtyData);

    const pubData = document.createElement('td'); //<td>111</td>
    pubData.textContent = book.publishedDate;
    tr.appendChild(pubData);

    const priceData = document.createElement('td'); //<td>111</td>
    priceData.textContent = book.price;
    tr.appendChild(priceData);

    ////////////////////////// Creating edit and delete buttons and adding them to the table

    const actionData = document.createElement('td');
    const cartButton = document.createElement('button');
    cartButton.innerText = 'Add to Cart';
    cartButton.dataset.id = book.id;
    actionData.appendChild(cartButton);


    tr.appendChild(actionData);

    ///////////////attaching the one row of the table to the screen
    tbody.appendChild(tr);

    ///////////////// adding evenhandler to the edit and delete buttons
    cartButton.addEventListener('click', function() {
        displayMorePurchase();
        fetch('http://localhost:5500/books/' + book.id)
            .then(response => response.json())
            .then(data => {
                document.getElementById('moreBook-heading').textContent = `Add ${data.title} to your cart`;
                document.getElementById("moreBook-code").value = data.id;
            });
        document.getElementById("moreBook-btn").onclick = async function(event) {
            event.preventDefault();
            displayNewPurchase();
            const bookId = document.getElementById('moreBook-code').value;
            const orderedQty = Number(document.getElementById("moreQty").value);
            await fetch('http://localhost:5500/books/' + bookId)
                .then(response => response.json())
                .then(book => {
                    if (book.qty < orderedQty) {
                        alert("Ordered quantity is more than our Inventory")
                    } else {
                        document.getElementById('form-heading').textContent = `Adding ${orderedQty} quantity of ${book.title} to your cart`;
                        const addedBook = JSON.parse(JSON.stringify(book));
                        addedBook.qty = orderedQty;
                        addShoppingCart(addedBook);


                        // document.getElementById("code").value = book.id;
                        // document.getElementById("title").value = book.title;
                        // document.getElementById("qty").value = Number(book.qty)-orderedQty;
                        // document.getElementById("pub-date").value = book.publishedDate;
                        // document.getElementById("unitprice").value = book.price
                        // document.getElementById('submit-btn').dataset.id = book.id;

                    }
                })
                // displayCRUDList();
        }
    });
}




////////////////////////////////////////////////////////////////////////////////////////////////////////
function attachbooks(tbody, book) {

    // data addition to the row of the table one by one (for one book)
    const tr = document.createElement('tr');

    const idData = document.createElement('td'); //<td>111</td>
    idData.innerHTML = book.id;
    tr.appendChild(idData); //

    const titleData = document.createElement('td'); //<td>111</td>
    // alert(book.title)
    titleData.innerHTML = book.title;
    tr.appendChild(titleData); //

    const qtyData = document.createElement('td'); //<td>111</td>
    qtyData.innerHTML = book.qty;
    tr.appendChild(qtyData);

    const pubData = document.createElement('td'); //<td>111</td>
    pubData.innerHTML = book.publishedDate;
    tr.appendChild(pubData);

    const priceData = document.createElement('td'); //<td>111</td>
    priceData.innerHTML = book.price;
    tr.appendChild(priceData);

    ////////////////////////// Creating edit and delete buttons and adding them to the table

    const actionData = document.createElement('td');
    const purchaseButton = document.createElement('button');
    purchaseButton.innerText = 'ADD MORE';
    purchaseButton.dataset.id = book.id;
    actionData.appendChild(purchaseButton);

    const editButton = document.createElement('button');
    editButton.innerText = 'EDIT';
    editButton.dataset.id = book.id;
    actionData.appendChild(editButton);


    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'DELETE';
    deleteButton.dataset.id = book.id;
    actionData.appendChild(deleteButton);

    const addCart = document.createElement('button');
    addCart.innerText = 'ADD TO CART';
    addCart.dataset.id = book.id;
    actionData.appendChild(addCart);


    tr.appendChild(actionData);

    ///////////////attaching the one row of the table to the screen
    tbody.appendChild(tr);

    ///////////////// adding evenhandler to the edit and delete buttons
    purchaseButton.addEventListener('click', function() {
        displayMorePurchase();
        fetch('http://localhost:5500/books/' + book.id)
            .then(response => response.json())
            .then(data => {
                document.getElementById('moreBook-heading').textContent = `Purchase more quantity of ${data.title}`;
                document.getElementById("moreBook-code").value = data.id;
            });

        document.getElementById("moreBook-btn").onclick = async function(event) {
            event.preventDefault();
            displayNewPurchase();
            const bookId = document.getElementById('moreBook-code').value;
            const tbody = document.getElementById("book-list-body");
            const updatedQty = Number(document.getElementById("moreQty").value);
            await fetch('http://localhost:5500/books/' + bookId)
                .then(response => response.json())
                .then(data => {
                    document.getElementById('form-heading').textContent = `Purchased ${updatedQty} quantity of ${data.title}`;
                    document.getElementById("code").value = data.id;
                    document.getElementById("title").value = data.title;
                    document.getElementById("qty").value = Number(data.qty) + updatedQty;
                    document.getElementById("pub-date").value = data.publishedDate;
                    document.getElementById("unitprice").value = data.price
                    document.getElementById('submit-btn').dataset.id = data.id;
                })
                // displayCRUDList();
        }
    });



    deleteButton.addEventListener('click', function() {
        fetch('http://localhost:5500/books' + book.id, {
            method: 'DELETE'
        }).then(data => {
            tr.remove();
        });
    });


    editButton.addEventListener('click', function() {
        displayNewPurchase();
        fetch('http://localhost:5500/books/' + book.id)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                document.getElementById('form-heading').textContent = "Edit a Book";
                document.getElementById("code").value = data.id;
                document.getElementById("title").value = data.title;
                document.getElementById("qty").value = data.qty;
                document.getElementById("pub-date").value = data.publishedDate;
                document.getElementById("unitprice").value = data.price
                document.getElementById('submit-btn').dataset.id = data.id;
            });
    });

    addCart.addEventListener('click', async function() {
        // displayNewPurchase();
        alert(book.id)
        const books = await fetch('http://localhost:5500/books/' + book.id, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
                }

            })
            .then(response => response.json())

        console.log("books")
        console.log(books)
        addShoppingCart(books)

    });


}

////////////////////////////////////////////////////////////////////////////////////////////

async function updateBook(bookId) {
    await fetch('http://localhost:5500/books/' + bookId, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                id: bookId,
                title: document.getElementById("title").value,
                qty: document.getElementById("qty").value,
                publishedDate: document.getElementById("pub-date").value,
                price: document.getElementById("unitprice").value
            })
        }).then(response => response.json())
        .then(book => {
            console.log(book);
            document.getElementById('form-heading').textContent = "Add a New Book";
            document.getElementById('input-form').reset();
            document.getElementById('submit-btn').dataset.id = '';
            location.reload();
        })
}

//////////////////////////////////////////////////////////////////////////////////////////





function displaySalesList() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('booklist').style.display = 'block';
    document.getElementById('newBook').style.display = 'none';
    document.getElementById('moreBook').style.display = 'none';
    document.getElementById('add-a-Book').style.display = 'none';
}


function displayBookForm() {
    document.getElementById('login').style.display = 'none';
    //document.getElementById('newBookQ').style.display = 'block';
    document.getElementById('booklist').style.display = 'block';
    document.getElementById('newBook').style.display = 'block';
    document.getElementById('moreBook').style.display = 'none';
    document.getElementById('add-a-Book').style.display = 'none';
}

function displayCRUDList() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('booklist').style.display = 'block';
    // document.getElementById('newBook').style.display = 'none';
    document.getElementById('moreBook').style.display = 'none';
    document.getElementById('add-a-Book').style.display = 'block';
}

function displayNewPurchase() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('booklist').style.display = 'none';
    // document.getElementById('newBook').style.display = 'none';
    document.getElementById('moreBook').style.display = 'none';
    document.getElementById('add-a-Book').style.display = 'none';
}

function displayMorePurchase() {
    document.getElementById('booklist').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('moreBook').style.display = 'block';
    document.getElementById('add-a-Book').style.display = 'none';
}



function displayLogin() {
    document.getElementById('login').style.display = 'block';
    document.getElementById('booklist').style.display = 'none';
    //document.getElementById('newBook').style.display = 'none';
    document.getElementById('moreBook').style.display = 'none';
    document.getElementById('add-a-Book').style.display = 'none';
    document.getElementById('creat_new_account').style.display = "none"
    document.getElementById('cart-list').style.display = "none"
}

function displaySignUpForm() {
    document.getElementById('creat_new_account').style.display = "block";
    document.getElementById('login').style.display = 'none';
    document.getElementById('booklist').style.display = 'none';
    // document.getElementById('newBook').style.display = 'none';
    document.getElementById('moreBook').style.display = 'none';
    document.getElementById('add-a-Book').style.display = 'none';
    //document.getElementById('creat_new_account').style.display = "none"
}

function dsiplayCartItem() {
    document.getElementById('cart-list').style.display = "block"
    document.getElementById('creat_new_account').style.display = "none";
    document.getElementById('login').style.display = 'none';
    document.getElementById('booklist').style.display = 'none';
    document.getElementById('newBook').style.display = 'none';
    document.getElementById('moreBook').style.display = 'none';
    document.getElementById('add-a-Book').style.display = 'none';

}