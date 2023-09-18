// simulador interactivo de cotizador de servicios de manicura (ideado en proyecto Kaloop DW)
alert("Bienvenido a Kaloop! Aqui te mostramos los servicios disponibles:")

// valores de cada servicio de manicura
const valor1 = 10000
const valor2 = 15000
const valor3 = 35000
const valor4 = 30000

// funcion para la adicion de valores de servicios
let ValorTotal = function(valor){
    Resultadofinal = valor + Resultadofinal
}
let Resultadofinal = 0

let AgregarServicio = null
// ciclo para cuando el usuario requiera o no agregar servicios
do {
    let manicura = parseInt(prompt("selecciona el numero que corresponde al servicio que requieres:\n 1 Manicure Spa \n 2 Manicure Permanente \n 3 Nails acrilicas \n 4 Nails Gel")) 

    // condicional para el servicio seleccionado por el usuario
    if (manicura == 1) {
        alert("el valor de manicure spa es de: " + valor1);
        ValorTotal(valor1)
    }else if (manicura == 2) {
        alert("el valor de manicure permanente es de: " + valor2);
        ValorTotal(valor2)
    }else if (manicura == 3) {
        alert("el valor de nails acrilicas es de: " + valor3);
        ValorTotal(valor3)
    }else if (manicura == 4) {
        alert("el valor de nails gel es de: " + valor4);
        ValorTotal(valor4)
    }else{
        alert("ingresa un numero valido")
    }    
    
    AgregarServicio = prompt("Desea algun servicio adicional?")
} while(AgregarServicio == "si")

alert("continua para conocer el valor total")

alert("el valor total de tu servicio es de " + Resultadofinal)



