window.onload = function() {
    document.getElementById('addBtn').onclick = function(event){
        event.preventDefault();
        
        const title = document.getElementById('title').value;
        const price = document.getElementById('price').value;
        const description = document.getElementById('description').value;

        fetch('http://localhost:3000/products', {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                price: price,
                description: description
            })
        }).then(data => data.json())
        .then(data => {
            console.log(data);
            document.getElementById('add-form').reset();
        });

    }
    
}