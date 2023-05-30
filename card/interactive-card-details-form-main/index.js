/* cardholder */
let nametarjeta = document.querySelector(".titulo-tarjeta")
let nameimput = document.querySelector("#dueño-form")
let errordueño = document.querySelector(".form-error-dueño")

nameimput.addEventListener("input", ()=>{
    if(nameimput.value == ""){
        nametarjeta.innerText = "Jane Apples"
    }else{
        nametarjeta.innerText = nameimput.value;
    }
})
/* card number */
let numerodetarjeta = document.querySelector(".numero-detarjeta");
let numeroinput = document.querySelector("#numero-tarjeta-form");
let errornumero = document.querySelector(".form-error-numero");

numeroinput.addEventListener("input", Event=>{
    let inputvalue = Event.target.value
    
    numerodetarjeta.innerText = numeroinput.value;
    
    let regExp = /[A-z]/g
    if(regExp.test(numeroinput.value)){
        errornumero.innerText = "error de numero";
    }else{
        numeroinput.value = inputvalue.replace(/\s/g, "").replace(/([0-9]{4})/g, "$1 ").trim()
        errornumero.innerText= ""
    }
    
    if(numeroinput.value == ""){
        numerodetarjeta.innerText = "0000 0000 0000 0000";
    }
})
/* mm */
let mmtarjeta = document.querySelector(".tarjeta-mm");
let mminput = document.querySelector("#fecha-de-nacimiento-form-mm");
let mmerror = document.querySelector(".error-fecha-mm");

mminput.addEventListener("input", ()=>{
    mmtarjeta.innerText = mminput.value
})

/* yy */
let yytarjeta= document.querySelector(".tarjeta-yy")
let yyinput = document.querySelector("#fecha-de-nacimiento-form-yy");
let yyerror = document.querySelector(".error-fecha-yy");

yyinput.addEventListener("input", ()=>{
    yytarjeta.innerText = yyinput.value
})

/* CVC */
let CVCtarjeta= document.querySelector(".cvv")
let CVCinput = document.querySelector("#CVC-form");
let CVCerror = document.querySelector(".error-cvc");

CVCinput.addEventListener("input", ()=>{
    CVCtarjeta.innerText = CVCinput.value
})



let button= document.querySelector("button-neon")

button.addEventListener("click", event=>{
    event.preventDefault()
    console.log(parseInt(mminput.value))
})
if(parseInt(mminput.value)>0 && parseInt(mminput.value)<= 12){
    showError(mminput, mmerror, "", false)
}else{

    showError(mminput, mmerror, "Mes incorrecto")
}
