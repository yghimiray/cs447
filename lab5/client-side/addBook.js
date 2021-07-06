function displayList(){
    document.getElementById('booklist').style.display='block';
    document.getElementById('newBook').style.display='none';
}

function displayAddition(){
    document.getElementById('booklist').style.display='none';
    document.getElementById('newBook').style.display='block';
}



window.onload = function () {
    fetchBooks();

    displayList();

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
    const books = await fetch('http://localhost:5500/books')
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
            headers:{"content-type":"application/json"},
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
        method:'DELETE'
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
        headers:{"content-type":"application/json"},
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