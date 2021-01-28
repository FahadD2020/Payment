
function testLength(value, length){

    if (value.length == length){
            return true;
        }else{
            return false;
        }
    
    }
  
    function testNumber(value){
    
        if(!(isNaN(value))){
            return true;
        }else{
            return false;
        }
    
    }
  
    function validateControl(control,name,length){
    
        if(testLength(control.value, length)){
            if(testNumber(control.value)){
                return true;
            }else{
                    alert("Warning enter numbers only" name+);
                return false;
            }
        }else{
            alert("Warning length is invalid "+name);
            return false;
        }
    }
   
    function validateCreditCard(value){
    var firstDigit = value.charAt(0);
    var card = "";
    var validCard = false;
    
    if (firstDigit == '3'){
           
           card = value.replace(/\s/g,'');
           
           validCard = testLength(card, 15, true);
            if(validCard == true){
               
               validCard = testNumber(card);
                if(validCard == false){
                   
                   alert("Warning numbers only");
                    return false;
                }else{
                    return true;
                }
            }
            else{
                alert("Warning credit card is invalid");
                return false;
            }
    }
    if (firstDigit == '6'){
        card = value.replace(/\s/g,'');
        
        validCard = testLength(card, 16, true);
        
        if(validCard == true){
           
           validCard = testNumber(card);
           
           if(validCard == false){
                alert("Warning credit card is invalid");
                return false;
            }else{
                return true;
            }
        }else{
            alert("Warning Credit card length is invalid");
            return false;
        }
    }
    if (firstDigit == '5'){
        card = value.replace(/\s/g,'');
        
        validCard = testLength(card, 16, true);
        
        if(validCard == true){
        
        validCard = testNumber(card);
    
            if(validCard == false){
    
                alert("Warning credit card is invalid");
                return false;
            }else{
                return true;
            }
        }else{
            alert("Warning Credit card length is invalid");
            return false;
        }
    }
    if (firstDigit == '4'){
        
        card = value.replace(/\s/g,'');
        
        validCard = testLength(card, 16, true);
        
        if(validCard == true){
            
            validCard = testNumber(card);
            
            if(validCard == false){
                
                alert("Warning credit card is invalid");
                return false;
            }else{
                return true;
            }
        }else{
            alert("Warning Credit card length is invalid");
            return false;
        }
        }else{
        alert("Warning credit card is invalid");
        return false;
    }
    }
    
    function validateDate(value){
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth()+1; 
        var expiration = value.split("-");
        var xpy = expiration[0];
        var xpm = expiration[1];
    
        if(xpy > year){
            return true;
        }
        else if(xpy == year){
            if(xpm > month){
                return true;
            }else{
                alert("Warning check experation date");
                return false;
            }
        }else{
            alert("Warning check experation date");
            return false;
        }
    
    }
    
    
    function validateEmail(value){
    
    var regX = RegExp ("[a-zA-Z0-9_\.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9\.]{2,5}$");
    
    var validEmail = regX.test(value);
    
    if (!validEmail){
        alert("Warning enter valid Email");
    }
        return(validEmail);
    }
    
    
    function validateForm(){
    
        var zip = document.getElementById("zip");
        
        var cvv = document.getElementById("cvv");
        
        var num = document.getElementById("num");
        
        var Xp = document.getElementById("Xp");
        
        var state = document.getElementById("state");
        
        var emailaddress = document.getElementById("emailaddress");
    
        if(validateControl(zip, "zip", 5)){
            
        if(validateControl(cvv, "cvv", 3)){
            
        if(validateCreditCard(num.value)){
            
        if(validateDate(Xp.value)){
            
        if(validateEmail(emailaddress.value)){
            
        if(validateState(state.selectedIndex)){
            
        alert("Thank You for the Payment");
        
        document.getElementById("Form").reset();
        return true;
        
                    }
                }
            }
        }
    }
    }
        return false;
    
    }
    
    function validateState(value){
        
        if(value == 0){
            
            alert("Warning must select state");
            return false;
        }else{
            return true;
        }
    
    }
    