const form=document.getElementById('form')
const username=document.getElementById('un')
const email=document.getElementById('em')
const password=document.getElementById('pw')
const password2=document.getElementById('pw2')


 
form.addEventListener('submit',(e)=>{
    e.preventDefault()  
    checkInputs()
      });
   

  function checkInputs(){
    const usernameValue=username.value.trim()
    const emailValue=email.value.trim() 
    const passwordValue=password.value.trim()
    const password2Value=password2.value.trim()
   
    if(usernameValue===''){
    setErrorFor(username,'username can not be blanck')
    }else if (!/^[a-zA-Z0-9]+$/.test(usernameValue)){
       setErrorFor(username,'username must be at least 3 character')
    }
    else{
       setSuccessFor(username)}
   
   
    
    if(emailValue ==='') {
       setErrorFor(email, 'Email cannot be blank');
   } else if (!isEmail(emailValue)) {
       setErrorFor(email, 'Not a valid email');
   } else {
       setSuccessFor(email);
   }
   
   if(passwordValue ==='') {
       setErrorFor(password, 'Password cannot be blank');
   } else if(!isPassword(passwordValue)){
       setErrorFor(password, 'Password must be at least 6 characters'); 
   }
   else {
       setSuccessFor(password);
   }
   
   if(password2Value ==='') {
       setErrorFor(password2, 'Password2 cannot be blank');
   } else if(passwordValue !== password2Value) {
       setErrorFor(password2, 'Passwords does not match');
   } else{
       setSuccessFor(password2);
   }
   }

   

   function setErrorFor(input,message){
    const formControler =input.parantElement
     const small=formControler.querySelector('#ms')
     formControler.className='formControler error'
     small.innerText=message
     
  }
  function setSuccessFor(input) {
      const formControl = input.parentElement;
      formControl.className = 'formControler success';
  }
  function isEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }
  
  
  function isPassword(password){
      const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");  
     return re.test(password)  
      }

  


