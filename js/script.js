
const submit = document.getElementById('sub');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('cpassword');


  function showSuccess(input) {
    input.style.borderColor = "greenyellow";
    const small = input.parentElement.querySelector('small');
    small.innerText = "";
  }

  function showError(input, message) {
    input.style.borderColor = "red";
    const small = input.parentElement.querySelector('small');
    small.innerText = message;
  }


  function checkUsernameLength(input){
    if(input.value.length>=3)
    showSuccess(input);
    else showError(input,"Username length should be at least 3")
  }

  function validateEmail(inputEmail){
    var re = /\S+@\S+\.\S+/;
    if (re.test(inputEmail.value))
    showSuccess(inputEmail);
  else showError(inputEmail,"Enter a valid email address")
  
  }


  function checkPasswordLength(inputPassword){
    if(inputPassword.value.length>=6)
    showSuccess(inputPassword);
    else  showError(inputPassword,"Password length should be at least 6")
      
  }


  function confirmPassword(inputPassword,inputConfirmPassword){
    if(inputConfirmPassword.value==""&&inputPassword.value==""){
        showError(inputConfirmPassword,"Password length should be at least 6");
        return;
    }

    if (inputPassword.value == inputConfirmPassword.value) 
        showSuccess(inputConfirmPassword);
    
    else  showError(inputConfirmPassword,"Password doesn't match")
      
  }






submit.addEventListener('click', function(e) {
    e.preventDefault();
    checkUsernameLength(username);
    validateEmail(email);
    checkPasswordLength(password);
    confirmPassword(password,password2);
    
    
  });
  