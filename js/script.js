const forms= document.getElementById('form');
const usernameError= document.getElementById('usernameError');
const emailError= document.getElementById('emailError');
const passwordError= document.getElementById('passwordError');
const confirmPasswordError= document.getElementById('confirmpasswordError');

 //validate username
function validateUsername(){
   let username= document.getElementById('username').value;
if(username.length == 0){
    usernameError.innerText=' (is required)';
    return false;
}
if(!username.match(/^[A-Za-z]*\w{3}[A-Za-z]*$/)){ 
    usernameError.innerText=' (must be at least 3 characters)';
    return false;
}  
    usernameError.innerText='';
    return true;
}

 //validate email
function validateEmail(){
    let email= document.getElementById('email').value; 
if(email.length == 0){
    emailError.innerText=' (is required)';
        return false;     
}
if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){ 
    emailError.innerText=' (must be valid)';
    return false;
}  
    emailError.innerText='';
    return true;
}

//validate password
function validatepassword(){
    let password= document.getElementById('password').value; 
if(password.length == 0){
    passwordError.innerText=' (is required)';
        return false;     
}
if(!password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)){ 
    passwordError.innerText=' (must be at least 6 characters)';
    return false;
}  
    passwordError.innerText='';
    return true;
}

 //validate confirmPassword
function validateconfirmPassword(){
    let confirmPassword= document.getElementById('confirmPassword').value; 
if(confirmPassword.length == 0){
    confirmPasswordError.innerText=' (is required)';
        return false;     
}
if(!confirmPasswordError.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)){ 
   confirmPassword.innerText=' (must be at least 6 characters)';
    return false;
}  
   confirmPasswordError.innerText='';
    return true;
}
/*if(confirmPassword == password){
    confirmPasswordError.innerText='';
    return true;
} */


 
 
