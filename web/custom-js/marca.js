var urlprocess = 'web/ajax/ajxmarca.php';

$(document).ready(function() {
    ConsultarMarca();

})
 
function ConsultarMarca() {
    $.ajax({
        data: { "proceso": "ListarMarca" },
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
                                <th>Estado</th>
                                <th class="text-center">opciones</th>
                            </tr>
                        </thead>
                        <tbody>`


        $.each(response, function(index, data) {
            html += `<tr>
                        <td> ${data.idmarca} </td>
                        <td> ${data.nombre_marca}</td>`

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
                            <button id="btnEditar" class="dropdown-item btn btn-warning" onclick="openMarca('editar','${data.idmarca}','${data.nombre_marca}','${data.estado}')"><span class="fa fa-edit"></span> Modificar</button>
                            <button class='dropdown-item btn btn-danger' onclick="openMarca('ver','${data.idmarca}','${data.nombre_marca}','${data.estado}')"><span class='fa fa-eye'></span> Ver</button>
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

        txtMarca: {required: true, minlength: 3,maxlength:30 },

    },
    // Specify validation error messages
    messages: {

      txtMarca: {
        required: "Por favor ingrese nombre",
        minlength: "Debe ingresar 4 caracteres minimo"
      },


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



function openMarca(action, idmarca,nombre_marca,estado){

console.log(action);

    if (action == 'nuevo'){
            $('#txtProceso').val('Registro');
            $("#txtID").val('');
            $("#txtMarca").val('');
            setSwitchery(mySwitch, true);

            $('#txtMarca').prop( "disabled" , false);
            $('#chkEstado').prop( "disabled" , true);

            $('#btnGuardar').show();
            $("#btnGuardar").text("Guardar");
            $(".modal-title").text("Registro Empleado");
            $('#modal_iconified').modal('show');
            

     }else if(action=='editar') {

            $('#txtProceso').val('Edicion');
            $("#txtID").val(idmarca);
            $("#txtMarca").val(nombre_marca);
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


            $('#txtMarca').prop( "disabled" , false);
            $('#chkEstado').prop( "disabled" , false);

            $('#btnGuardar').show();
            $("#btnGuardar").text("Actualizar");
            $(".modal-title").text("Actualizar Empleado");
            $('#modal_iconified').modal('show');
     } else if(action=='ver'){

            $('#txtProceso').val('Ver');
            $("#txtID").val(idmarca);
            $("#txtMarca").val(nombre_marca);

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

            $('#txtMarca').prop( "disabled" , true);
            $('#chkEstado').prop( "disabled" , true);

            $('#btnGuardar').hide();
            $(".modal-title").text("Detalles de Empleado");
            $('#modal_iconified').modal('show');
     }
 };
 

function enviar_frm()
{
  var urlprocess = 'web/ajax/ajxmarca.php';
  var proceso = $("#txtProceso").val();
  var id = $("#txtID").val();
  var marca =$("#txtMarca").val();
  var estado = $('#chkEstado').is(':checked') ? 1 : 0;

  var dataString='proceso='+proceso+'&id='+id+'&marca='+marca+'&estado='+estado;

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

                ConsultarMarca();
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
                  ConsultarMarca();
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


