fetch("servicios.json", { mode: 'no-cors'})
    .then((response) => {
        return response.json()
    })
    .then(data =>{
        debugger
        let servicios = data.servicios

        let table = document.getElementById('TablaServiciosBody');
        servicios.forEach(
                function(servicio, _index){
                    let row = "";
                    row = `<tr> <td>${servicio.id}</td> <td>${servicio.name}</td> <td>${servicio.valor}</td><td><button>${servicio.seleccion}</button></td> </tr>`;
                    table.innerHTML += row
                }
            )
    })

// Servicios.push({id:5, name:"Pedicura tradicional", valor:10000})

// console.log(Servicios)

// Aplicando DOM
// let table = document.getElementById('TablaServiciosBody');
// Servicios.forEach(
//     function(servicio, _index){
//         let row = "";
//         row = `<tr> <td>${servicio.id}</td> <td>${servicio.name}</td> <td>${servicio.valor}</td><td><button>${servicio.seleccion}</button></td> </tr>`;
//         table.innerHTML += row
//     }
// )

// // Evento
// let boton = document.getElementById("mensaje")
// boton.addEventListener("click", function(){alert("Gracias por preferir a Kaloop, con gusto te ayudaremos")})

// // funcion para la adicion de valores de servicios
// let ValorTotal = function(valor){
//     Resultadofinal = valor + Resultadofinal
// }
// let Resultadofinal = 0

// let listaServicios = ""

// Servicios.forEach(
//     function(servicio, index){
//         listaServicios = listaServicios + (index + 1) + " " + servicio.name + "\n"
//     }
// )

// let AgregarServicio = null

// // ciclo para cuando el usuario requiera o no agregar servicios
// do {
//     let manicura = parseInt(prompt("selecciona el numero que corresponde al servicio que requieres:\n" + listaServicios)) 

//     // condicional para el servicio seleccionado por el usuario
//     if (manicura >= 1 && manicura <= Servicios.length) {
//         let Servicio = Servicios.find((x)=> manicura == x.id)
//         alert("el valor de " + Servicio.name + " es de " + Servicio.valor);
//         ValorTotal(Servicio.valor)
//     }else{
//         console.log("ingresa un numero valido")
//     }    
    
//     AgregarServicio = prompt("Desea algun servicio adicional?")
// } while(AgregarServicio.toLowerCase() == "si")

// alert("continua para conocer el valor total")

// alert("el valor total de tu servicio es de " + Resultadofinal)



