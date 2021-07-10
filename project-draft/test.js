const { from } = rxjs;
const { filter } = rxjs.operators;


window.onload = function () {
    document.getElementById("btn").onclick = async function () {
        let inputId = parseInt(document.getElementById("userId").value);
        let userDiv = document.getElementById("userDiv");
        await displayUser();

        //////////////////////////////////////////////////////////////////

        async function displayUser() {
            userDiv.innerHTML = "";

            let fetchedObj = await fetch("http://jsonplaceholder.typicode.com/users")
            let json = await fetchedObj.json();
            let userInfo = json[inputId - 1];

            let geoLat = userInfo.address.geo.lat;
            let geoLng = userInfo.address.geo.lng;

            let fetchedGeo = await fetch("http://www.mapquestapi.com/geocoding/v1/reverse?key=E1Gg4R8JH9maFXIB0astADW3s7HAHCJC&location=" + geoLat + "," + geoLng)
                .then(resp => resp.json());
            let currLocation = fetchedGeo.results[0].locations[0];

            let template = `
                    <div> <h4>Basic Information</h4> </div>
                    <div>    ${userInfo.username} </div>
                    <div> ${userInfo.name} </div>
                   <div > ${userInfo.phone} </div>
                    <div > ${userInfo.email} </div>
                    <div > 
                    <h4> Permanent Address</h4>
                    <p>${userInfo.address.street} ${userInfo.address.city} ${userInfo.address.zipcode}</p>
                    </div>

                    
                    <div > 
                    <h4> Current Address</h4>
                    <p>${currLocation.street} ${currLocation.adminArea3} </p>
                    </div>


                    <div class="col">
                    <button id="postbtn" class="btn btn-success">View Posts</button>
                    <button id="hidePostbtn" class="btn btn-success">Hide Posts</button>
                    <div id="userpost"></div>
                    </div>
                                                       `;

            const div = document.createElement('div');
            div.classList = 'row border-top';
            div.innerHTML = template;
            userDiv.appendChild(div);

            document.getElementById("postbtn").onclick = async function () {
                await fetchPosts(inputId);
            }

            document.getElementById("hidePostbtn").onclick = async function () {
                await hidePosts();
            }

        }

        function hidePosts() {
            let post = document.getElementById("userpost");
            post.innerHTML = "";
        }


        async function fetchPosts(userId) {
            let fetchedPost = await fetch("http://jsonplaceholder.typicode.com/posts?userId=" + userId).then(resp => resp.json());
            from(fetchedPost)
                .subscribe(element => {
                    showPosts(element);
                });
        }

        function showPosts(element) {
            let post = document.getElementById("userpost");
            let postId = element.id;

            let postsTemplate = `    
        <div class="col">
            <h5>Post ${postId}</h5>
            <h6> ${element.title}</h6>
            <h6> ${element.body}</h6>
        </div>
        <div class="col">
        <button id="commentBtn${postId}" value="${postId}" class="btn btn-success">View Comments</button>
        <button id="hideCommentBtn${postId}" class="btn btn-success">Hide Comments</button>
        <div id="userComment${postId}"></div>
        </div>
`
            const div = document.createElement('div');
            div.classList = 'row border-top';
            div.innerHTML = postsTemplate;
            post.appendChild(div);
            let commentTab = document.getElementById(`commentBtn${postId}`);
            let commentId = Number(commentTab.value);
            document.getElementById(`commentBtn${postId}`).onclick = async function () {
                await fetchComments(commentId);
            }
            document.getElementById(`hideCommentBtn${postId}`).onclick = async function () {
                await hideComments(commentId);
            }
        }


        function hideComments(postId) {
            let comment = document.getElementById(`userComment${postId}`);
            comment.innerHTML = "";
        }

        async function fetchComments(postId) {
            let fetchedComment = await fetch("https://jsonplaceholder.typicode.com/comments/?postId=" + postId).then(resp => resp.json());
            from(fetchedComment)
                .subscribe(element => showComments(element, postId));
        }


        function showComments(element, divId) {
            let comment = document.getElementById(`userComment${divId}`);
            let commentId = element.id;
            let commentTemplate = `    
    <div class="col">
        <h5>Post ${commentId}</h5>
        <h6> ${element.name}</h6>
        <h6> ${element.email}</h6>
        <h6> ${element.body}</h6>
    </div>
    `

            const div = document.createElement('div');
            div.classList = 'row border-top';
            div.innerHTML = commentTemplate;
            comment.appendChild(div);
        }
    }
}