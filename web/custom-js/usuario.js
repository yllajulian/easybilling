var urlprocess = 'web/ajax/ajxusuario.php';

$(document).ready(function() {
    ConsultarUsuario();
    ConsultarEmpleado()

})
 
function ConsultarUsuario() {
    $.ajax({
        data: { "proceso": "ListarUsuario" },
        url: urlprocess,
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {
        var html = '';

        html += `<table class="table datatable-basic dt-responsive table-secondary table-striped table-sm table-hover" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                            <thead class="text-center">
                                    <tr>
                                        <th>No</th>
                                        <th>Usuario</th>
                                        <th>Tipo Usuario</th>
                                        <th>Nombre Usuario</th>
                                        <th>Estado</th>
                                        <th class="text-center">opciones</th>
                                    </tr>
                            </thead>
                            <tbody>`
 
        $.each(response, function(index, data) {

                var tipo_usuario=data.tipo_usuario=='1'?'<span class="badge bg-success rounded-pill">ADMINISTRADOR</span>':'<span class="badge bg-info rounded-pill">CAJERO</span>';

                var estado=data.estado=='1'?'<span class="badge bg-success rounded-pill">ACTIVO</span>':'inactivo';



            html += `<tr>
                        <td> ${data.idusuario} </td>
                        <td> ${data.usuario} </td>
                        <td> ${tipo_usuario}</td>
                        <td> ${data.nombre_empleado},${data.apellido_empleado}</td>
                        <td> ${estado}</td>`

            html +=`<td>
                          <div class="btn-group dropleft">
                            <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="fas fa-align-justify"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end table-witch ">
                            <button class="dropdown-item btn btn-success" onclick="openUsuario('editar','${data.idusuario}','${data.usuario}','${data.contrasena}',
                            '${data.tipo_usuario}','${data.estado}','${data.idempleado}')"><span class="fa fa-edit"></span> Modificar</button>
                            <button class='dropdown-item btn btn-danger' onclick="openUsuario('ver','${data.idusuario}','${data.usuario}','${data.contrasena}',
                            '${data.tipo_usuario}','${data.estado}','${data.idempleado}')"><span class='fa fa-eye'></span> Ver</button>
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
 
function ConsultarEmpleado() {
    $.ajax({
        data: { "proceso": "ListarEmpleado" },
        url: urlprocess,
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {

        $.each(response, function(index, data) {
            $('#cbEmpleado').append(`<option value="${data.idempleado}">${data.nombre_empleado} ${data.apellido_empleado}</option>`);

        });
        
    }).fail(function(response) {
        console.log(response);
    });
}


 var form= $("form[name='formvalidate']").validate({
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      txtUser: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        minlength: 3
      },
      txtPassword: {
        required: true,
        minlength: 4
      }
    },
    // Specify validation error messages
    messages: {
      // firstname: "Please enter your firstname",
      // lastname: "Please enter your lastname",
      txtUser: {
        required: "Por favor ingrese usuario",
        minlength: "Debe ingresar 4 caracteres minimo"
      },

      txtPassword: {
        required: "<span>.... <b> Por favor ingrese una contraseña</b> </spam>",
        minlength: "Debe ingresar 4 caracteres minimo"
      }

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

  



$(".select2").select2({
    theme: "bootstrap-5",
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

// .js-switch');
// var elem = document.querySelector('.switchery');
// var init = new Switchery(elem);


// var elem = document.querySelector('.js-switch');

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




function openUsuario(action, idusuario, usuario, contrasena, tipo_usuario, estado, idempleado){
$(".select2-modal").select2({
  theme: "bootstrap-5",
  dropdownParent: $('.modal'),
  placeholder: "Seleccione"
});      

   

    console.log(action);
    if (action == 'nuevo'){
            $('#txtProceso').val('Registro');
            $('#txtID').val('');
            $('#txtUser').val('');
            $('#txtPassword').val('');
            $("#cbTipo").select2("val", "All");
            $("#cbEmpleado").select2("val", "All");
            setSwitchery(mySwitch, true);
            $('#txtID').prop( "disabled" , false);
            $('#txtUser').prop( "disabled" , false);
            $('#txtPassword').prop( "disabled" , false);
            $('#cbEmpleado').prop( "disabled" , false);
            $('#cbTipo').prop( "disabled" , false);
            $('#chkEstado').prop( "disabled" , true);

            $('#btnGuardar').show();
            $("#btnGuardar").text("Guardar");
            $(".modal-title").text("Registro Usuario");
            $('#modal_iconified').modal('show');
     }else if(action=='editar') {
            $('#txtProceso').val('Edicion');
            $('#txtID').val(idusuario);
            $('#txtUser').val(usuario);
            $('#txtPassword').val(contrasena);
            $("#cbEmpleado").val(idempleado).trigger("change");
            $("#cbTipo").val(tipo_usuario).trigger("change");

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

            $('#txtID').prop( "disabled" , false);
            $('#txtUser').prop( "disabled" , false);
            $('#txtPassword').prop( "disabled" , false);
            $('#cbEmpleado').prop( "disabled" , false);
            $('#cbTipo').prop( "disabled" , false);
            $('#chkEstado').prop( "disabled" , false);

            
            $('#btnGuardar').show();
            $("#btnGuardar").text("Actualizar");
            $(".modal-title").text("Actualizar Usuario");
            $('#modal_iconified').modal('show');
     } else if(action=='ver'){
            $('#txtProceso').val('Ver');
            $('#txtID').val(idusuario);
            $('#txtUser').val(usuario);
            $('#txtPassword').val(contrasena);
            $("#cbEmpleado").val(idempleado).trigger("change");
            $("#cbTipo").val(tipo_usuario).trigger("change");

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

            $('#txtUser').prop( "disabled" , true);
            $('#txtPassword').prop( "disabled" , true);
            $('#cbEmpleado').prop( "disabled" , true);
            $('#cbTipo').prop( "disabled" , true);
            $('#chkEstado').prop( "disabled" , true);

            $('#btnGuardar').hide();
            $(".modal-title").text("Detalles de Usuario");
            $('#modal_iconified').modal('show');
     }

 };

 

function enviar_frm()
{
  var urlprocess = 'web/ajax/ajxusuario.php';
  var proceso = $("#txtProceso").val();
  var id = $("#txtID").val();
  var usuario =$("#txtUser").val();
  var contrasena =$("#txtPassword").val();
  var tipo_usuario =$("#cbTipo").val();
  var idempleado =$("#cbEmpleado").val();
  var estado = $('#chkEstado').is(':checked') ? 1 : 0;

  var dataString='proceso='+proceso+'&id='+id+'&usuario='+usuario+'&contrasena='+contrasena+'&estado='+estado;
  dataString+='&tipo_usuario='+tipo_usuario+'&idempleado='+idempleado;

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
                            title: "Usuario Registrado",
                            icon: 'success',
                            showConfirmButton: false,
                            timer:1500,
                            timerProgressBar:false,
                            position:"top",
                            background:'#43A047'
                     });
                ConsultarUsuario();
                $('#modal_iconified').modal('hide');


              } else if(proceso == "Edicion") {

                    swal.fire({
                            toast:true,
                            title: "Usuario Actualizado",
                            icon: 'success',
                            showConfirmButton: false,
                            timer:1500,
                            timerProgressBar:false,
                            position:"top",
                            background:'#43A047'
                     });
                  ConsultarUsuario();
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

 