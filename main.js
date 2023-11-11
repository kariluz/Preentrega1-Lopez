let servicios = [];
let serviciosCotizados = [];
fetch("servicios.json")
    .then((response) => {
        return response.json()
    })
    .then(data =>{
        servicios = data.servicios

        let table = document.getElementById('TablaServiciosBody');
        servicios.forEach(
                function(servicio, _index){
                    let row = "";
                        row = `<tr> <td>${servicio.id}</td> <td>${servicio.name}</td><td><button onclick="agregarServi(${servicio.id})">Agregar</button></td> </tr>`;  
                    table.innerHTML += row
                }
            )
    })
    
function agregarServi(id) {
  // Aqui ya tenemos el servicio elegido po el cliente
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Estas seguro?",
    text: "No podras volver atras",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Si, quiero agregar este servicio",
    cancelButtonText: "No, cancelar",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {  

      swalWithBootstrapButtons.fire({
        title: "Agregado",
        text: "El servicio ha sido agregado con exito",
        icon: "success"
      });   
        
      let servicio = servicios.find( x => x.id == id);

      serviciosCotizados.push(servicio);

      let ServJsonString = JSON.stringify(serviciosCotizados);

      localStorage.setItem("servicios cotizados", ServJsonString);

      ImprimirCotizados();
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelado",
        text: "Puedes continuar si requieres algun servicio",
        icon: "error"
      });
    }
  });
}

function ImprimirCotizados() {
  let listaAImprimir = '';
  serviciosCotizados.forEach(
    function(servicio){
      listaAImprimir += `<tr> <td>${servicio.name}</td> <td>${servicio.valor}</td> </tr>`
    }
  )
  document.getElementById('TablaCotizacion').innerHTML = listaAImprimir;
}

function ValorTotal() {
  let total = 0;

  serviciosCotizados.forEach(
    function(servicio){
      total = total + servicio.valor;
    }
  )

  document.getElementById('TablaCotizacion').innerHTML += `<tr> <td>valor total</td> <td>${total}</td> </tr>`;
}

