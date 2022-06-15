var urlprocess = 'web/ajax/ajxcaja.php';

$(document).ready(function() {
    // GetHcaja();
 ConsultarHcaja()

})

 var form= $("form[name='formvalidate']").validate({
    rules: {

        txtF1: {required: true},
        txtF1: { required: true},
    },
    // Specify validation error messages
    messages: {

      nombre: {
        required: "Por favor ingrese nombre",
      },

      apellido: {
        required: "Por favor ingrese una apellido",
      },

    },
    submitHandler: function(form) {
      ConsultarHcaja();
    }
  });


function ConsultarHcaja() {

  var proceso='gethcaja';

     // fecha1 =$("#txtF1").val();
     // fecha2 =$("#txtF2").val();
     fecha1 = $("#txtF1").val().split("-").reverse().join("-");
     fecha2 = $("#txtF2").val().split("-").reverse().join("-");

    var dataString='proceso='+proceso+'&fecha1='+fecha1+'&fecha2='+fecha2;
        console.log(dataString);

    $.ajax({
        data:dataString,
        url: urlprocess,
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {
        var html = '';                  

        html += `<table class="table datatable-basic table-secondary dt-responsive table-sm table-hover table-striped" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                        <thead class="text-center">
                            <tr>
                                <th>Fecha Apertura</th>
                                <th>Monto Apertura</th>
                                <th>Monto Cierre</th>
                                <th>Fecha Cierre</th>
                                <th>Estado</th>
                                <th class="text-center">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>`


        $.each(response, function(index, data) {

             $fecha_apertura =data.fecha_apertura;
             // $fapertura = $fecha_apertura.split("-").reverse().join("-");
             // console.log($fecha_apertura);
             $fecha_cierre = data.fecha_cierre;
             estado=data.estado;

            //   options = {
            //   year: 'numeric', month: 'numeric', day: 'numeric',
            //   hour: 'numeric', minute: 'numeric', second: 'numeric',
            //   hour12: false,
            //   timeZone: 'America/Lima'
            // };

            // $envio_date=$fecha_apertura!=null? new Intl.DateTimeFormat('en-GB',options).format(new Date($fecha_apertura)):'' ;
            // $envio_date2=$fecha_cierre!=null? new Intl.DateTimeFormat('en-GB',options ).format(new Date($fecha_apertura)):'';
            $estado=estado==1?'<span class=" btn-success btn-sm p-1"><span class="text-bold">ABIERTO</span></span>':'<span class=" btn-secondary btn-sm p-1"><span class="text-bold">CERRADO</span></span>';
            $estadoOpccion=estado==1?`<div class="dropdown">
                                        <button class="btn btn-primary btn-sm dropdown-toggle" id="dropdownOpcciones" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-align-justify"></i></button>
                                        <div class="dropdown-menu dropdown-menu-end py-1" aria-labelledby="dropdownOpcciones">
                                        <button id="close_caja" class="dropdown-item" type="button" data-id="${data.idcaja}"><span class="fa fa-edit"></span> <span class="float-end">Cerrar</span> </button>
                                      </div>`:'';

                 html +=`<tr>
                            <td> ${$fecha_apertura}</td>
                            <td> ${data.monto_apertura}</td>
                            <td> ${data.monto_cierre} </td>
                            <td> ${$fecha_cierre}</td>
                            <td> ${$estado}</td>
                            <td> ${$estadoOpccion}</td>
                        </tr>`
        });
         html += `  </tbody>
                </table>`;
        document.getElementById("DataTableContent").innerHTML = html;
        $('.datatable-basic').DataTable();
    }).fail(function(response) {
        console.log(response);
    });
}


 $(document).on('click', '#close_caja', function(e){
       var productId = $(this).data('id');
       SwalDelete(productId);
       e.preventDefault();
  });


function SwalDelete(productId){

    Swal.fire({
      title: '¿Está seguro que desea cerrar la caja?',
      text: "Este proceso es irreversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Cerrar',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        var dataString='proceso=Cerrar-M&id='+productId;
        console.log(dataString);

        $.ajax({
            data:dataString,
            url: urlprocess,
            type: 'POST',
            dataType: 'json'
        }).done(function(response) {
            Swal.fire({
                    title: "Cerrada",
                    html: response.message,
                    icon: response.status,
                    showConfirmButton: true,
                    timer:1500,
             });
            ConsultarHcaja();

        }).fail(function(response) {
            swal.fire({
                    title: "Esta bien",
                    html: 'Puedes seguir donde te quedaste:)',
                    icon: 'info',
                    showConfirmButton: true,
                    timer:1000,
             });
        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {

        swal.fire({
                title: "Esta bien",
                html: 'Puedes seguir donde te quedaste:)',
                icon: 'info',
                showConfirmButton: true,
                timer:1000,
         });

      }
    });
}

