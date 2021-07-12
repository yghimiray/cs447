function displayLoginPage(){
    document.getElementById('login-form').style.display='block';
    document.getElementById('booklist').style.display='none';
    document.getElementById('newBook').style.display='none';
    document.getElementById('logoutBtn').style.display='none';
}

function displayWelcome(){
    const name = document.getElementById('username').value;
    const div = document.createElement('div');
    div.appendChild(name);
}

function displayList(){
    document.getElementById('booklist').style.display='block';
    document.getElementById('newBook').style.display='none';
    document.getElementById('logoutBtn').style.display='block';
    fetchBooks();
}

function displayAddition(){
    document.getElementById('booklist').style.display='none';
    document.getElementById('newBook').style.display='block';
    document.getElementById('logoutBtn').style.display='block';
}



window.onload = function () {
    // if (sessionStorage.getItem('accessToken')) {
        displayList();
    // } else {
    //     displayLoginPage();
    // }
    
    document.getElementById('login-btn').onclick= async function(event){
        event.preventDefault();
        let result = await fetch('http://localhost:5500/login',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                username:document.getElementById('username').value,
                password:document.getElementById('password').value
            })
        }).then(response=> response.json());
        if(result.accessToken){
            sessionStorage.setItem("accessToken",result.accessToken);
            displayList();
        // }else{
        //     displayLoginPage();
        }
    }

    


    

    document.getElementById('add-a-Book').onclick=function(event){
        event.preventDefault();
        displayAddition();
    }

    document.getElementById("submit-btn").onclick = function(event){
        event.preventDefault();
        const bookId = this.dataset.id;
        if(bookId){
            updateBook(bookId);
        }else{
            addBooks();
        }
        displayList();
    }
}


////////////////////////////////////////////////////////////////////////////////////////////
async function fetchBooks(){      
    const tbody = document.getElementById("book-list-body");
    const books = await fetch('http://localhost:5500/books',{
        method:"GET",
        headers:{
            'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
        }
    })
    .then(response=>response.json())        
    books.forEach(book => {
        attachbooks(tbody,book);
    })
}

///////////////////////////////////////////////////////////////////////////////////////////////
    async function addBooks(){
        const tbody = document.getElementById("book-list-body");
        await fetch('http://localhost:5500/books',{
            method:"POST",
            headers:{
                "content-type":"application/json",
                'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
            },
            body:JSON.stringify({
                title:document.getElementById("title").value,
                ISBN:document.getElementById("isbn").value,
                publishedDate:document.getElementById("pub-date").value,
                author:document.getElementById("author").value
            })
        }).then(response=>response.json())
        .then(book => {           
            attachbooks(tbody,book);
            document.getElementById('input-form').reset();
        })
    }


////////////////////////////////////////////////////////////////////////////////////////////////////////
    function attachbooks(tbody,book){
       
       // data addition to the row of the table one by one (for one book)
        const tr = document.createElement('tr');

       const titleData = document.createElement('td'); //<td>111</td>
       titleData.textContent = book.title;
       tr.appendChild(titleData); //

       const ISBNData = document.createElement('td'); //<td>111</td>
       ISBNData.textContent = book.ISBN;
       tr.appendChild(ISBNData); 
    
       const pubData = document.createElement('td'); //<td>111</td>
       pubData.textContent= book.publishedDate;
       tr.appendChild(pubData);
       
       const authorData = document.createElement('td'); //<td>111</td>
       authorData.textContent = book.author;
       tr.appendChild(authorData); 

////////////////////////// Creating edit and delete buttons and adding them to the table

       const actionData = document.createElement('td');
       const deleteButton=document.createElement('button');
       deleteButton.innerText='DEL';
       deleteButton.dataset.id = book.id;
       actionData.appendChild(deleteButton);

       const editButton=document.createElement('button');
       editButton.innerText='EDIT';
       editButton.dataset.id = book.id;
       actionData.appendChild(editButton);

        tr.appendChild(actionData);
   
///////////////attaching the one row of the table to the screen
        tbody.appendChild(tr);

///////////////// adding evenhandler to the edit and delete buttons
deleteButton.addEventListener('click', function(){
    fetch('http://localhost:5500/books'+book.id,{
        method:'DELETE',
        headers:{
            'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
        }
    }).then(data=>{
        tr.remove();
    });
});


editButton.addEventListener('click', function(){
    displayAddition();
    fetch('http://localhost:5500/books/'+book.id)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        document.getElementById('form-heading').textContent = "Edit a Book";
        document.getElementById("title").value=data.title;
        document.getElementById("isbn").value=data.ISBN;
        document.getElementById("pub-date").value=data.publishedDate;
        document.getElementById("author").value=data.author
        document.getElementById('submit-btn').dataset.id =data.id;
    });
});


}

////////////////////////////////////////////////////////////////////////////////////////////

async function updateBook(bookId){
    const tbody = document.getElementById("book-list-body");
    await fetch('http://localhost:5500/books/'+bookId,{
        method:"PUT",
        headers:{
            "content-type":"application/json",
            'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
            },
        body:JSON.stringify({
            title:document.getElementById("title").value,
            ISBN:document.getElementById("isbn").value,
            publishedDate:document.getElementById("pub-date").value,
            author:document.getElementById("author").value
        })
    }).then(response=>response.json())
    .then(book => {           
        console.log(book);
        document.getElementById('form-heading').textContent = "Add a New Book";
        document.getElementById('input-form').reset();
        document.getElementById('submit-btn').dataset.id = '';
        location.reload();
    })
}


