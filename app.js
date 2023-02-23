const formInput = document.querySelectorAll("input");
const formLabel = document.querySelectorAll("label");

for(let i=0; i < formInput.length; i++){
    formInput[i].addEventListener('blur', (e) =>{
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
