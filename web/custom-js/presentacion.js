var urlprocess = 'web/ajax/ajxpresentacion.php';

$(document).ready(function() {
    ConsultarPresentacion();

})
 
function ConsultarPresentacion() {
    $.ajax({
        data: { "proceso": "ListarPresentacion" },
        url: urlprocess,
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {
        var html = '';                  

        html += `<table class="table datatable-basic dt-responsive table-sm table-hover table-striped" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                        <thead class="text-center">
                            <tr>
                                <th>No</th>
                                <th>Marca</th>
                                <th>Siglas</th>
                                <th>Estado</th>
                                <th class="text-center">opciones</th>
                            </tr>
                        </thead>
                        <tbody>`

        $.each(response, function(index, data) {
            html += `<tr>
                        <td> ${data.idpresentacion} </td>
                        <td> ${data.nombre_presentacion}</td>
                        <td> ${data.siglas}</td>`

                if(data.estado == '1'){

                html += `<td><span class=" btn-success btn-sm p-1"><span class="text-bold">ACTIVO</span></span></td>`

                }else if(data.estado == '0'){

                html += `<td><span class=" btn-secondary btn-sm p-1"><span class="text-bold">INACTIVO</span></span></td>`  
                };
                html +=`<td>
                          <div class="btn-group dropleft">
                            <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="fas fa-align-justify"></i>
                            </button>
                            <ul class="dropdown-menu table-witch ">
                            <button id="btnEditar" class="dropdown-item btn btn-warning" onclick="openPresentacion('editar','${data.idpresentacion}','${data.nombre_presentacion}','${data.siglas}','${data.estado}')"><span class="fa fa-edit"></span> Modificar</button>
                            <button class='dropdown-item btn btn-danger' onclick="openPresentacion('ver','${data.idpresentacion}','${data.nombre_presentacion}','${data.siglas}','${data.estado}')"><span class='fa fa-eye'></span> Ver</button>
                            </ul>
                          </div>
                          </td> 
                        </tr> `
        });
         html += `  </tbody>
                </table>`;
        document.getElementById("DataTableContent").innerHTML = html;
        $('.datatable-basic').DataTable();
    }).fail(function(response) {
        console.log(response);
    });
}




$(function() {

  // Initialize form validation on the registration form.
  $("form[name='formvalidate']").validate({
    // Specify validation rules
    rules: {

        txtPresentacion: {required: true, minlength: 4,maxlength:30},
        txtSiglas: {required: true, minlength: 2,maxlength:30},

    },
    // Specify validation error messages
    messages: {
      txtPresentacion: {required: "Este campo es obligatorio.",minlength:"Por favor, no escribas menos de 4 caracteres."},
      txtSiglas: {required: "Este campo es obligatorio.",minlength:"Debe ingresar 2 caracteres minimo"},


    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      enviar_frm();
    }
  });
});



/*Evento change de ChkEstado en el cual al chequear o deschequear cambia el label*/
$("#chkEstado").change(function() {
    if(this.checked) {
       $("#chkEstado").val(true);
       document.getElementById("lblchk").innerHTML = 'ACTIVO';
    } else {
      $("#chkEstado").val(false);
      document.getElementById("lblchk").innerHTML = 'INACTIVO';
    }
});

var elem = document.querySelector('.switchery');
var mySwitch = new Switchery($('#chkEstado')[0], {
            size:"small",
            color: '#0D74E9'
        });

function setSwitchery(switchElement, checkedBool) {
    if((checkedBool && !switchElement.isChecked()) || (!checkedBool && switchElement.isChecked())) {
        switchElement.setPosition(true);
        switchElement.handleOnchange(true);
    }
}



function openPresentacion(action, idpresentacion,nombre_presentacion,siglas,estado){

console.log(action);

    if (action == 'nuevo'){
            $('#txtProceso').val('Registro');
            $("#txtID").val('');
            $("#txtPresentacion").val('');
            $("#txtSiglas").val('');
            setSwitchery(mySwitch, true);

            $('#txtPresentacion').prop( "disabled" , false);
            $('#txtSiglas').prop( "disabled" , false);
            $('#chkEstado').prop( "disabled" , true);

            $('#btnGuardar').show();
            $("#btnGuardar").text("Guardar");
            $(".modal-title").text("Registro Empleado");
            $('#modal_iconified').modal('show');
            

     }else if(action=='editar') {

            $('#txtProceso').val('Edicion');
            $("#txtID").val(idpresentacion);
            $("#txtPresentacion").val(nombre_presentacion);
            $("#txtSiglas").val(siglas);
          if (estado == '1')
            {
              $("#chkEstado").val(true);
              setSwitchery(mySwitch, true);
              document.getElementById("chkEstado").checked = true;
              document.getElementById("lblchk").innerHTML = 'ACTIVO';
            }else if(estado == '0'){
              $("#chkEstado").val(false);
              setSwitchery(mySwitch, false);
              document.getElementById("chkEstado").checked = false;
              document.getElementById("lblchk").innerHTML = 'INACTIVO';
            }


            $('#txtPresentacion').prop( "disabled" , false);
            $('#txtSiglas').prop( "disabled" , false);
            $('#chkEstado').prop( "disabled" , false);

            $('#btnGuardar').show();
            $("#btnGuardar").text("Actualizar");
            $(".modal-title").text("Actualizar Empleado");
            $('#modal_iconified').modal('show');
     } else if(action=='ver'){

            $('#txtProceso').val('Ver');
            $("#txtID").val(idpresentacion);
            $("#txtSiglas").val(siglas);
            $("#txtPresentacion").val(nombre_presentacion);

          if (estado == '1')
            {
              $("#chkEstado").val(true);
              setSwitchery(mySwitch, true);
              document.getElementById("chkEstado").checked = true;
              document.getElementById("lblchk").innerHTML = 'ACTIVO';
            }else if(estado == '0'){
              $("#chkEstado").val(false);
              setSwitchery(mySwitch, false);
              document.getElementById("chkEstado").checked = false;
              document.getElementById("lblchk").innerHTML = 'INACTIVO';
            }

            $('#txtPresentacion').prop( "disabled" , true);
            $('#txtSiglas').prop( "disabled" , true);
            $('#chkEstado').prop( "disabled" , true);

            $('#btnGuardar').hide();
            $(".modal-title").text("Detalles de Empleado");
            $('#modal_iconified').modal('show');
     }
 };
 

function enviar_frm()
{
    var urlprocess = 'web/ajax/ajxpresentacion.php';
    var proceso = $("#txtProceso").val();
    var id = $("#txtID").val();
    var presentacion =$("#txtPresentacion").val();
    var siglas =$("#txtSiglas").val();
    var estado = $('#chkEstado').is(':checked') ? 1 : 0;

    var dataString='proceso='+proceso+'&id='+id+'&presentacion='+presentacion+'&siglas='+siglas+'&estado='+estado;

console.log(dataString);

  $.ajax({
     type:'POST',
     url:urlprocess,
     data: dataString,
     dataType: 'json',
     success: function(data){

        if(data=="Validado"){

             if(proceso=="Registro"){

                    swal.fire({
                            toast:true,
                            position:"top",
                            title: "Empleado Registrado",
                            icon: 'success',
                            showConfirmButton: false,
                            timer:1500,
                            timerProgressBar:false,
                            background:'#43A047'
                     });

                ConsultarPresentacion();
                $('#modal_iconified').modal('hide');


              } else if(proceso == "Edicion") {

                    swal.fire({
                            toast:true,
                            title: "Empleado Actualizado",
                            icon: 'success',
                            showConfirmButton: false,
                            timer:1500,
                            timerProgressBar:false,
                            position:"top",
                            background:'#43A047'
                     });
                  ConsultarPresentacion();
                  $('#modal_iconified').modal('hide');
 
              }

        } else if (data=="Duplicado"){
                    swal.fire({
                            toast:true,
                            title: "El dato que ingresaste ya existe",
                            icon: 'warning',
                            showConfirmButton: false,
                            timer:1500,
                            timerProgressBar:false,
                            position:"top",
                            background:'#F4511E'
                     });



        } else if(data =="Error"){

                    swal.fire({
                            toast:true,
                            title: "No procesamos bien tus datos!",
                            icon: 'warning',
                            showConfirmButton: false,
                            timer:1500,
                            timerProgressBar:false,
                            position:"top",
                            background:'#F4511E'
                     });
        }

     },error: function() {

        swal.fire({
                toast:true,
                title: "Algo sucedio mal!",
                icon: 'danger',
                showConfirmButton: false,
                timer:1500,
                timerProgressBar:false,
                position:"top",
                background:'#E53935'
         }); 

     }

  });

};