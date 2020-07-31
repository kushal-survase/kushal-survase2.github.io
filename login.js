   
function validate() 
{
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var error_message = document.getElementById("error_message");
 

    error_message.style.padding = "10px";
    var text;

    if(name!="kushal"){
        text = "Enter Valid Username";
        error_message.innerHTML = text;
        return false;
    }
    if(password!="kushal111"){
        text = "Enter valid Password!!";
        error_message.innerHTML= text;
        return false;

    }

    window.location.href = "store.html"
    alert("Login Was Successfull. Click OK to continue....")
    return true;
    

}