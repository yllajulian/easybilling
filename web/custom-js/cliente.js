
$(function() {
  $("#DataTableContent").DataTable();

  // Premade test data, you can also use your own
  var urlprocess = 'web/ajax/ajxcliente.php';

  $("#loadData").click(function() {
    loadData();
  });

  function loadData() {
    $.ajax({
      data: { "proceso": "Listar" },
      type: 'POST',
      url: urlprocess,
      // contentType: "text/plain",
      dataType: 'json',
      success: function (data) {
        console.log();
        myJsonData = data;
        populateDataTable(myJsonData);
      },
      error: function (e) {
        console.log("There was an error with your request...");
        console.log("error: " + JSON.stringify(e));
      }
    });
  }
 
  // populate the data table with JSON data

  function populateDataTable(data) {
            // console.log(data);

    console.log("populating data table...");
    // clear the table before populating it with more data
    $("#DataTableContent").DataTable().clear();
// console.log(Object.keys(data).length); // console: ['0', '1', '2']
    var length = Object.keys(data).length;
   // console.log(length);

    for(var i = 0; i < length; i++) {
     var column = data[+i];
   // console.log(column);

      // You could also use an ajax property on the data table initialization
      $('#DataTableContent').dataTable().fnAddData( [
        column.codigo_cliente,
        column.nombre_cliente,
        column.numero_nrc!=''?column.numero_nrc:column.numero_nit,
        column.numero_telefono,
        column.estado==1?'<span class=" btn-success btn-sm p-1"><span class="text-bold">ACTIVO</span></span>': '<span class=" btn-secondary btn-sm p-1"><span class="text-bold">INACTIVO</span></span>',
        column.acciones=`<div class="btn-group dropleft">
                            <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="fas fa-align-justify"></i>
                            </button>
                            <ul class="dropdown-menu table-witch ">
                            <button id="btnEditar" class="dropdown-item btn btn-warning" onclick="openCliente('editar',
                            '${column.idcliente}',
                            '${column.codigo_cliente}',
                            '${column.nombre_cliente}',
                            '${column.numero_telefono}',
                            '${column.numero_nit}',
                            '${column.numero_nrc}',
                            '${column.nombre_contacto}',
                            '${column.telefono_contacto}',
                            '${column.estado}')"><span class="fa fa-edit"></span> Modificar</button>
                            <button class='dropdown-item btn btn-danger' onclick="openCliente('ver',
                            '${column.idcliente}',
                            '${column.codigo_cliente}',
                            '${column.nombre_cliente}',
                            '${column.numero_telefono}',
                            '${column.numero_nit}',
                            '${column.numero_nrc}',
                            '${column.nombre_contacto}',
                            '${column.telefono_contacto}',
                            '${column.estado}')"><span class='fa fa-eye'></span> Ver</button>
                            </ul>
                          </div>`,

      ]);
    }
  }

});












var urlprocess = 'web/ajax/ajxcliente.php';

$(document).ready(function() {
    // ConsultarCliente();

})

function ConsultarCliente() {
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
                                <th>Cliente</th>
                                <th>RUC/ DNI</th>
                                <th>Telefono</th>
                                <th>Estado</th>
                                <th class="text-center">opciones</th>
                            </tr>
                        </thead>
                        <tbody>`


        $.each(response, function(index, data) {
            html += `<tr>
                        <td> ${data.codigo_cliente} </td>
                        <td> ${data.nombre_cliente}</td>
                        <td> ${data.numero_nrc}</td>
                        <td> ${data.numero_telefono}</td>
                        <td> ${data.estado}</td>`

                html +=`<td>

                          <div class="btn-group dropleft">
                            <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="fas fa-align-justify"></i>
                            </button>
                            <ul class="dropdown-menu table-witch ">
                            <button id="btnEditar" class="dropdown-item btn btn-warning" onclick="openCliente('editar',
                            '${data.idcliente}',
                            '${data.codigo_cliente}',
                            '${data.nombre_cliente}',
                            '${data.numero_telefono}',
                            '${data.numero_nit}',
                            '${data.numero_nrc}',
                            '${data.nombre_contacto}',
                            '${data.telefono_contacto}',
                            '${data.estado}')"><span class="fa fa-edit"></span> Modificar</button>
                            <button class='dropdown-item btn btn-danger' onclick="openCliente('ver',
                            '${data.idcliente}',
                            '${data.codigo_cliente}',
                            '${data.nombre_cliente}',
                            '${data.numero_telefono}',
                            '${data.numero_nit}',
                            '${data.numero_nrc}',
                            '${data.nombre_contacto}',
                            '${data.telefono_contacto}',
                            '${data.estado}')"><span class='fa fa-eye'></span> Ver</button>
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



function openCliente(action,idcliente, codigo_cliente, nombre_cliente, numero_telefono, numero_nit, numero_nrc, nombre_contacto, telefono_contacto, estado)
{


    if (action == 'nuevo'){
            $('#txtProceso').val('Registro');
            $('#txtID').val('');
            $('#txtCodigo').val('');
            $('#txtCliente').val('');
            $('#txtNIT').val('');
            $('#txtNRC').val('');
            $('#txtTelefono').val('');
            $('#txtContacto').val('');
            $('#txtTelefonoC').val('');
            setSwitchery(mySwitch, true);

            $('#txtCodigo').prop( "disabled" , true);
            $('#txtCliente').prop( "disabled" , false);
            $('#txtNIT').prop( "disabled" , false);
            $('#txtNRC').prop( "disabled" , false);
            $('#txtTelefono').prop( "disabled" , false);
            $('#txtContacto').prop( "disabled" , false);
            $('#txtTelefonoC').prop( "disabled" , false);
            $('#chkEstado').prop( "disabled" , false);

            $('#btnGuardar').show();
            $("#btnGuardar").text("Guardar");
            $(".modal-title").text("Registro Cliente");
            $('#modal_iconified').modal('show');


     }else if(action=='editar') {

       $('#txtProceso').val('Edicion');
       $('#txtID').val(idcliente);
       $('#txtCodigo').val(codigo_cliente);
       $('#txtCliente').val(nombre_cliente);
       $('#txtNIT').val(numero_nit);
       $('#txtNRC').val(numero_nrc);
       $('#txtTelefono').val(numero_telefono);
       $('#txtContacto').val(nombre_contacto);
       $('#txtTelefonoC').val(telefono_contacto);

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
            $('#txtCliente').prop( "disabled" , false);
            $('#txtNIT').prop( "disabled" , false);
            $('#txtNRC').prop( "disabled" , false);
            $('#txtTelefono').prop( "disabled" , false);
            $('#txtContacto').prop( "disabled" , false);
            $('#txtTelefonoC').prop( "disabled" , false);
            $('#chkEstado').prop( "disabled" , false);

            $('#btnGuardar').show();
            $("#btnGuardar").text("Actualizar");
            $(".modal-title").text("Actualizar Cliente");
            $('#modal_iconified').modal('show');

     } else if(action=='ver'){
            $('#txtProceso').val('Ver');
            $('#txtID').val(idcliente);
            $('#txtCodigo').val(codigo_cliente);
            $('#txtCliente').val(nombre_cliente);
            $('#txtNIT').val(numero_nit);
            $('#txtNRC').val(numero_nrc);
            $('#txtTelefono').val(numero_telefono);
            $('#txtContacto').val(nombre_contacto);
            $('#txtTelefonoC').val(telefono_contacto);

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
            $('#txtCliente').prop( "disabled" , true);
            $('#txtNIT').prop( "disabled" , true);
            $('#txtNRC').prop( "disabled" , true);
            $('#txtTelefono').prop( "disabled" , true);
            $('#txtContacto').prop( "disabled" , true);
            $('#txtTelefonoC').prop( "disabled" , true);
            $('#chkEstado').prop( "disabled" , true);
            $('#btnGuardar').hide();
            $(".modal-title").text("Detalles de Cliente");
            $('#modal_iconified').modal('show');
     }
 };


function enviar_frm()
{
  var urlprocess = 'web/ajax/ajxcliente.php';
  var proceso = $("#txtProceso").val();
  var id = $("#txtID").val();
  var nombre_cliente =$("#txtCliente").val();
  var numero_telefono =$("#txtTelefono").val();
  var numero_nit =$("#txtNIT").val();
  var numero_nrc =$("#txtNRC").val();
  var nombre_contacto =$("#txtContacto").val();
  var telefono_contacto =$("#txtTelefonoC").val();
  var estado = $('#chkEstado').is(':checked') ? 1 : 0;

  var dataString='proceso='+proceso+'&id='+id+'&nombre_cliente='+nombre_cliente+'&numero_telefono='+numero_telefono+'&estado='+estado;
  dataString+='&numero_nit='+numero_nit+'&numero_nrc='+numero_nrc+'&nombre_contacto='+nombre_contacto+'&telefono_contacto='+telefono_contacto;

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
                            title: "Cliente Registrado",
                            icon: 'success',
                            showConfirmButton: false,
                            timer:1500,
                            timerProgressBar:false,
                            background:'#43A047'
                     });

                ConsultarCliente();
                $('#modal_iconified').modal('hide');


              } else if(proceso == "Edicion") {

                    swal.fire({
                            toast:true,
                            title: "Cliente Actualizado",
                            icon: 'success',
                            showConfirmButton: false,
                            timer:1500,
                            timerProgressBar:false,
                            position:"top",
                            background:'#43A047'
                     });
                  ConsultarCliente();
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
