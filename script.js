const display = document.getElementById("display");
function append(input){
    display.value += input;
}

function Clear(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Logic Error Bro !";
        setTimeout(() => {
            console.log("Executing next code.");
            display.value = "";
        }, 1000);
    }

}
function backspace(){
    display.value = display.value.slice(0,-1);
}
