let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let output = "";
let array = Array.from(buttons);
array.forEach(button => {
    button.addEventListener('click',(e)=>{
        // e.preventDefault();
        const btnValue = e.target.innerHTML;
        console.log(btnValue);
        if(btnValue == '='){
            if(output=="0")
            {
                output  = "0";
                inputBox.value = output;
            }else{
                output = eval(output);
                inputBox.value = output;
            }
        }
        else if(btnValue == "AC" ){
            output = "";
            inputBox.value = output;
        }
        else if(btnValue == "DEL"){
            output = output.substring(0,output.length-1);
            inputBox.value = output;
        }
        else{
            output += btnValue;
            inputBox.value = output;
        }
    })
})