let eye = document.getElementById("eye");
let pass = document.getElementById("pass");

eye.onclick = function(){

    if(pass.type == "password"){
        pass.type = "text";
    }
    else{
        pass.type = "password";
    }

}


let form = document.getElementById("loginForm");
let email = document.getElementById("email");

form.onsubmit = function(event){

    event.preventDefault();

    if(email.value == "" || pass.value == ""){
        alert("Please fill all fields");
    }
    else{
        alert("Login Successful");
    }

}