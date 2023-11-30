function toggleLogin() {
    var loginBox = document.getElementById("login-box")
    var createAccountBox = document.getElementById("signup-box")
    
    loginBox.classList.toggle('display-none')
    loginBox.classList.toggle('login-box')
    createAccountBox.classList.toggle('signup-box')
    createAccountBox.classList.toggle('display-none')
}

function login() {
    // TODO
    // check DB for valid login
    window.location.href = 'home.html'
}

function toggleNewPost() {
    var newPostButton = document.getElementById("new-post-button-container")
    var postCreator = document.getElementById("new-post-container")

    newPostButton.classList.toggle('display-none')
    newPostButton.classList.toggle('new-post-button-container')
    postCreator.classList.toggle('display-none')
    postCreator.classList.toggle('new-post-container')
}

function publishPost() {
    var postContent = document.getElementById('postContent').value;
    // TODO
        
    console.log(postContent) // for testing



    // toggleNewPost() // call this at the end
}