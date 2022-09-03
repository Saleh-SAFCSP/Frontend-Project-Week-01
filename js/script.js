const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const button = document.getElementById("submit-form");

button.addEventListener("click", (e) => {
  e.preventDefault();
  checkValue();
});
const setError = (element, message) => {
  const elementParent = element.parentElement;
  const divError = elementParent.childNodes[5];
  divError.innerText = message;
  elementParent.childNodes[3].classList.remove("success");
  elementParent.childNodes[3].classList.add("error");
  divError.classList.add("text-danger");
};
const setSuccess = (element) => {
  const elementParent = element.parentElement;
  const divSuccess = elementParent.childNodes[5];
  divSuccess.innerText = " ";
  elementParent.childNodes[3].classList.remove("error");
  elementParent.childNodes[3].classList.add("success");
};
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const checkValue = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  console.log(usernameValue);
  if (usernameValue.length < 3) {
    setError(username, "Username must be at least 3 characters");
  } else {
    setSuccess(username);
  }
  if (validateEmail(emailValue)) {
    setSuccess(email);
  } else {
    setError(email, "Email is not valid");
  }
  if (passwordValue.length < 6) {
    setError(password, "Password must be at least 6 characters");
  } else {
    setSuccess(password);
  }
  if (password2Value.length == 0) {
    setError(password2, "Password2 is required");
  } else if (passwordValue !== password2Value) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
};
