const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm-password');
const form=document.getElementById('register');
const wrongUsername=document.getElementById('wrong-username')
const wrongEmail=document.getElementById('wrong-email')
const wrongPass=document.getElementById('wrong-pass')
const wrongMatch=document.getElementById('wrong-matchPass')

form.addEventListener('submit', (e) => {

    if (username.value.length<3) {
        e.preventDefault()
        wrongUsername.style.color="red"
        username.style.borderColor="red"
        wrongUsername.innerHTML = "Username must be at least 3 characters";
    }  
    else{
        username.style.borderColor="green"
        wrongUsername.innerHTML = "";
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.value.match(mailformat)){
        e.preventDefault()
        wrongEmail.style.color="red"
        email.style.borderColor="red"
        wrongEmail.innerHTML = "Email is not valid"
    }
    else{
        email.style.borderColor="green"
        wrongEmail.innerHTML = ""
    }
    
    if (password.value.length<6) {
        e.preventDefault()
        password.style.borderColor="red"
        wrongPass.style.color="red"
        wrongPass.innerHTML = "Password must be at least 6 characters"
    }  
    else{
        password.style.borderColor="green"
        wrongPass.innerHTML = ""
    }
    if(password2.value===""){
        e.preventDefault()
        password2.style.borderColor="red"
        wrongMatch.style.color="red"
        wrongMatch.innerHTML="Password2 is required"
    }
    else if(password2.value !=password.value){
        password2.style.borderColor="red"
        wrongMatch.style.color="red"
        wrongMatch.innerHTML="Passwords do not match"    
    }
    else{
        password2.style.borderColor="green"
        wrongMatch.innerHTML=""
    }
  })