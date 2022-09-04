const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email")
const password = document.getElementById("password");
const passwordCheck = document.getElementById("passwordCheck");

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkRequire(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()=== ''){
            showError(input, `${getFieldName(input)} is Require`)
        }
        else{
            showSuccess(input);
        }
    });
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check email validation

function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(input.value.trim())){
        showSuccess(input);
    }
    else {
        showError(input, 'Email is not valid');
    }
}

function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters` );
    }else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than  ${mix} characters` );
    }
    else {
        showSuccess(input);
    }
}

function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do no match');
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequire([username, email, password, passwordCheck]);
    checkLength(username,4,10);
    checkLength(password,6,25);
    checkEmail(email);
    checkPasswordMatch(password , passwordCheck);


});
