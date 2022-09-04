const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");
const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;




function validation(){

            //username
    if(username.value.trim() === ''){
                document.getElementById("username error").innerText = "username is required"
                username.style.borderColor= "red";
            }else if(username.value.length < 3){
                document.getElementById("username error").innerText = "username must be at least 3 charaters"
                username.style.borderColor= "red";
            }else if(username.value.length >15){
                document.getElementById("username error").innerText = "username must be less than 15 charaters"
                username.style.borderColor= "red";
            }else{
                document.getElementById("username error").innerText = "";
                username.style.borderColor= "green";

            }

        //email
        if(email.value.trim() === ''){
            document.getElementById("email error").innerText = "Email is required"
            email.style.borderColor= "red";
        }else if(!email.value.match(pattern)){
            document.getElementById("email error").innerText = "Email is not valid"
            email.style.borderColor= "red";
        }else{
            document.getElementById("email error").innerText = "";
            email.style.borderColor= "green";
        }

        //password

        if(password.value.trim() === ''){
            document.getElementById("password error").innerText = "Password is required"
            password.style.borderColor= "red";
        }else if(password.value.length < 6){
            document.getElementById("password error").innerText = "Password must be at least 6 charaters"
            password.style.borderColor= "red";
        }else if(password.value.length >25){
            document.getElementById("password error").innerText = "Password must be less than 25 charaters"
            password.style.borderColor= "red";
        }else{
            document.getElementById("password error").innerText = "";
            password.style.borderColor= "green";
        }

        //pasword2
        if(password2.value.trim() === ''){
            document.getElementById("password2 error").innerText = "Password2 is required"
            password2.style.borderColor= "red";
        }else if(password.value !== password2.value){
            document.getElementById("password2 error").innerText = "Passwords do not match"
            password2.style.borderColor= "red";
        } else {
            document.getElementById("password2 error").innerText = "";
            password2.style.borderColor= "green"; 
        }



}



