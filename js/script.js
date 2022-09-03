const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }
  


form.addEventListener('submit', function(e) {
    e.preventDefault();
 
    //   checkRequired([username, email, password, password2]);
    checkRequired();
    checkLength(username, 3, 50);
    checkLength(password, 6, 50);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
  });
  
  function checkRequired(){
    const usernameT = username.value.trim();
    const emailT = email.value.trim();
    const passwordT = password.value.trim();
    if(usernameT === ''){
        showError(username, `user name must not empty`);
    }else{
        showSuccess(username);
    }

    if(emailT === ''){
        showError(email, `email must not empty`);
    }else{
        showSuccess(email);
    }

    if(passwordT === ''){
        showError(password, `password must not empty`);
    }else{
        showSuccess(password);
    }
   
  }
 
function checkEmail(email) {
    const format = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (format.test(email.value.trim())) {
      showSuccess(email);
    } else {
      showError(email, 'Email is not valid , again try');
    }
  }
  
function checkLength(username, min, max) {
    if (username.value.length < min) {
      showError(
          username,` must be at least 3 characters`);
    } else if (username.value.length > max) {
      showError(
          username,` must be less than 50 characters`
);
    } else {
      showSuccess(username);
    }
  }
  

  function checkPasswordsMatch(password, password2) {
    if (password.value !== password2.value) {
      showError(password2, 'Passwords do not match , again');
    }
  }
  
  


function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}


function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}


