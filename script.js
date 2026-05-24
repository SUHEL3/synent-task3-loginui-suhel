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