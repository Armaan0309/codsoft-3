const display=document.querySelector(".display");
const buttons=document.querySelectorAll("button");
const specialchars=["%","*","/","-","+","="];
let output="";


const Calculate = (btnvalue) =>{
    if(btnvalue === "=" & output !== ""){
        output = eval(output.replace("%", "/100"))
    }
    else if(btnvalue === "AC"){
        output="";
    }
    else if(btnvalue === "DEL"){
        output=output.toString().slice(0,-1);
    }
    else{
        if(output==="" & specialchars.includes(btnvalue)) return;
        output=output+btnvalue;
    }

    display.value = output;
}

// console.log(display,buttons);

buttons.forEach((button) =>{
    button.addEventListener("click", e => Calculate(e.target.dataset.value));
});