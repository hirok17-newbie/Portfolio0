let display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value="";
}

function deleteChar(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value="Error";
    }
}
document.addEventListener("keydown", function(event){

    let key = event.key;

    if(!isNaN(key) || key === "."){
        append(key);
    }

    else if(key === "+" || key === "-" || key === "*" || key === "/" || key === "%"){
        append(key);
    }

    else if(key === "Enter"){
        calculate();
    }

    else if(key === "Backspace"){
        deleteChar();
    }

    else if(key === "Escape"){
        clearDisplay();
    }

});