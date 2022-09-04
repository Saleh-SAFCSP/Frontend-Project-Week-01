const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password_confrimation= document.getElementById('passwordconfirm');


function showError(message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}


function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}


function checkNameLength(input) {
  if(input.value.trim()==''){
    showError('name is required')
  }
  if (input.value.length < 3) {
    showError('name need to be at least 3 character long')
  } else {
    showSuccess(input);
  }
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError('Email is not valid');
  }
}



function checkPasswordLength(input1,input2) {
  if(input.value.trim()==''){
    showError('password is required')
  }
  if (input.value.length < 6) {
    showError('password need to be at least 6 character long')
  } else {
    showSuccess(input1);
  }
}


function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}



form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkNameLength(username);
  checkEmail(email);
  checkPasswordLength(password);
  checkPasswordsMatch(password,password_confrimation);
});
