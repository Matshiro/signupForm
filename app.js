const formInput = document.querySelectorAll("input");
const formLabel = document.querySelectorAll("label");
const userPassword = document.getElementById("user_password");
const userConfirmedPassword = document.getElementById("confirmPassword");
const dontMatchMessage = document.getElementById("smallText");

for(let i=0; i < formInput.length; i++){
    formInput[i].addEventListener('focusout', (e) =>{
        if(formInput[i].value.length >= 1 && !formInput[i].checkValidity() ){
            formInput[i].style.borderColor = "#FF0000";
            formLabel[i].style.color = "#FF0000";
            return;
        }
        formInput[i].style.borderColor = "black";
        formLabel[i].style.color = "#393939";
        return;
    });
}

checkPasswords();

function checkPasswords(){
    userConfirmedPassword.addEventListener('focusout', (e) =>{
        if(userConfirmedPassword.value === userPassword.value){
            dontMatchMessage.textContent = "";
            return
        }
        userConfirmedPassword.style.borderColor = "#FF0000";
        dontMatchMessage.textContent = "Password don't match";
        
    
    });
    userConfirmedPassword.addEventListener("keyup", (e) =>{
        if(userConfirmedPassword.value === userPassword.value){
            dontMatchMessage.textContent = "";
            return;
        }
    });
}

