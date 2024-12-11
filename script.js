function validate(){  
    var name=document.f1.name.value;  
    var password=document.f1.password.value;  
    var status=false;  
      
    if(name.length<1){  
    document.getElementById("normal").innerHTML=  
    "  Please enter your name";  
    status=false;  
    }else{  
    
    document.getElementById("normal").innerHTML=" <img src='checked.gif'/>";  
    status=true;  
    }  
    if(password.length<6){  
    document.getElementById("normal").innerHTML=  
    Password must be at least 6 char long";
    status=false;  
    }else{  
    document.getElementById("normal").innerHTML=" <img src='checked.gif'/>";  
    }  
    return status;  
    }  