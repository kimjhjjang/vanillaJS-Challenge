//Selector Setup
const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting");

//Controll Setup
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username'; // localStorage

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    paintGreeting(username)
    localStorage.setItem(USERNAME_KEY,username);
}

function paintGreeting(username){
    greeting.innerHTML = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreeting(saveUsername)
}


