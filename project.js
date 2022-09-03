function validateform(){  
    var name=document.myform.username.value;
	var firstpassword=document.myform.password.value;   
    var secondpassword=document.myform.password2.value;  
    // var email = document.myForm.Email.value;
	// var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 
 
    
// 1 user name
    if(name.length<3){
        document.getElementById('ename').innerText="Username must be at least 3 characters";
    }

   
// 2 password   
    if(firstpassword.length<6){ 
    document.getElementById('epass').innerText="Password must be at least 6 characters long."; 
        return false;  
    }

// 2 confirm password
    if (secondpassword==null || secondpassword==""){  
    document.getElementById('epass2').innerText="Confirm Password is require"; 
        return false; 
    } 
    
    else if (firstpassword==secondpassword){  
        return true;  
    } else { 
    
    document.getElementById('epass2').innerText="Confirm Password must be same!"; 

        return false;  
    } 

 // 2 email
    // if (email == "" || !regEmail.test(email)) {
    // alert("Please enter a valid e-mail address.");
	//     email.focus();
	// 	return false;
	// }
    
} 


















		
