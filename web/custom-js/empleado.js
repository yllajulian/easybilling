var urlprocess = 'web/ajax/ajxempleado.php';

$(document).ready(function() {
    ConsultarEmpleado();

})
 
function ConsultarEmpleado() {
    $.ajax({
        data: { "proceso": "Listar" },
        url: urlprocess,
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {
        var html = '';                  

        html += `<table class="table  table-secondary datatable-basic dt-responsive table-sm table-hover table-striped" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                        <thead class="text-center">
                            <tr>
                                <th>No</th>
                                <th>Empleado</th>
                                <th>Telefono</th>
                                <th>Estado</th>
                                <th class="text-center">opciones</th>
                            </tr>
                        </thead>
                        <tbody>`


        $.each(response, function(index, data) {
            html += `<tr>
                        <td> ${data.codigo_empleado} </td>
                        <td> ${data.nombre_empleado},${data.apellido_empleado} </td>
                        <td> ${data.telefono_empleado}</td>`

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
                            <button id="btnEditar" class="dropdown-item btn btn-warning" onclick="openEmpleado('editar','${data.idempleado}','${data.codigo_empleado}','${data.nombre_empleado}',
                            '${data.apellido_empleado}','${data.telefono_empleado}','${data.email_empleado}','${data.estado}')"><span class="fa fa-edit"></span> Modificar</button>
                            <button class='dropdown-item btn btn-danger' onclick="openEmpleado('ver','${data.idempleado}','${data.codigo_empleado}','${data.nombre_empleado}',
                            '${data.apellido_empleado}','${data.telefono_empleado}','${data.email_empleado}','${data.estado}')"><span class='fa fa-eye'></span> Ver</button>
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


 var form= $("form[name='formvalidate']").validate({
    rules: {

        nombre: {required: true, minlength: 3,maxlength:30 },
        apellido: { required: true, minlength: 4},

        textnumber: {required: true, number: true, maxlength: 9},
    },
    // Specify validation error messages
    messages: {

      nombre: {
        required: "Por favor ingrese nombre",
        minlength: "Debe ingresar 4 caracteres minimo"
      },

      apellido: {
        required: "Por favor ingrese una apellido",
        minlength: "Debe ingresar 4 caracteres minimo"
      },
    textnumber: {required: "* Ingresa un valor", number: "* Ingresa solo numeros", min: $.validator.format("* Ingresa una cantidad igual o mayor a {0}"), max: $.validator.format("* Ingresa una cantidad igual o menor a {0}")},

    },
    submitHandler: function(form) {
      enviar_frm();
    }
  });
 // Slect2 Theme Bostrap modal inconified//

// reset form  modal inconified//
$(".cancel").click(function() {
    form.resetForm();
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



function openEmpleado(action, idempleado, codigo_empleado, nombre_empleado, apellido_empleado, telefono_empleado, email_empleado,estado){


    if (action == 'nuevo'){
            $('#txtProceso').val('Registro');
            $("#txtID").val('');
            $("#txtCodigo").val('');
            $("#nombre").val('');
            $("#apellido").val('');
            $("#telefono").val('');
            $("#email").val('');
            setSwitchery(mySwitch, true);

            $('#txtCodigo').prop( "disabled" , true);
            $('#nombre').prop( "disabled" , false);
            $('#apellido').prop( "disabled" , false);
            $('#telefono').prop( "disabled" , false);
            $('#email').prop( "disabled" , false);
            $('#chkEstado').prop( "disabled" , true);

            $('#btnGuardar').show();
            $("#btnGuardar").text("Guardar");
            $(".modal-title").text("Registro Empleado");
            $('#modal_iconified').modal('show');
            

     }else if(action=='editar') {

            $('#txtProceso').val('Edicion');
            $("#txtID").val(idempleado);
            $("#txtCodigo").val(codigo_empleado);
            $("#nombre").val(nombre_empleado);
            $("#apellido").val(apellido_empleado);
            $("#telefono").val(telefono_empleado);
            $("#email").val(email_empleado);

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


            $('#txtCodigo').prop( "disabled" , true);
            $('#nombre').prop( "disabled" , false);
            $('#apellido').prop( "disabled" , false);
            $('#telefono').prop( "disabled" , false);
            $('#email').prop( "disabled" , false);
            $('#chkEstado').prop( "disabled" , false);

            $('#btnGuardar').show();
            $("#btnGuardar").text("Actualizar");
            $(".modal-title").text("Actualizar Empleado");
            $('#modal_iconified').modal('show');
     } else if(action=='ver'){

            $('#txtProceso').val('Ver');
            $("#txtID").val(idempleado);
            $("#txtCodigo").val(codigo_empleado);
            $("#nombre").val(nombre_empleado);
            $("#apellido").val(apellido_empleado);
            $("#telefono").val(telefono_empleado);
            $("#email").val(email_empleado);

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

            $('#txtCodigo').prop( "disabled" , true);
            $('#nombre').prop( "disabled" , true);
            $('#apellido').prop( "disabled" , true);
            $('#telefono').prop( "disabled" , true);
            $('#email').prop( "disabled" , true);
            $('#chkEstado').prop( "disabled" , true);

            $('#btnGuardar').hide();
            $(".modal-title").text("Detalles de Empleado");
            $('#modal_iconified').modal('show');
     }
 };
 

function enviar_frm()
{
  var proceso = $("#txtProceso").val();
  console.log(proceso);
  var id = $("#txtID").val();
  var nombre_empleado =$("#nombre").val();
  var apellido_empleado =$("#apellido").val();
  var telefono_empleado =$("#telefono").val();
  var email_empleado =$("#email").val();
  var estado = $('#chkEstado').is(':checked') ? 1 : 0;

  var dataString='proceso='+proceso+'&id='+id+'&nombre_empleado='+nombre_empleado+'&apellido_empleado='+apellido_empleado+'&estado='+estado;
  dataString+='&telefono_empleado='+telefono_empleado+'&email_empleado='+email_empleado;
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

                ConsultarEmpleado();
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
                  ConsultarEmpleado();
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
