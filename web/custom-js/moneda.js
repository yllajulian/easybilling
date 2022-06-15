var urlprocess = 'web/ajax/ajxmoneda.php';

$(document).ready(function() {
    ListarMoneda();
 
})
 
function ListarMoneda() {
    $.ajax({
        data: { "proceso": "ListarMoneda" },
        url: urlprocess,
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {
        var html = '';

        html += `<table class="datatable-basic table table-secondary table-striped table-hover table-sm " style="border-collapse: collapse; border-spacing: 0px; width: 100%;" role="grid" aria-describedby="datatable_info">
                            <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Estandar ISO</th>
                                        <th>Lenguage</th>
                                        <th>Nombre Moneda</th>
                                        <th>Sonbolo</th>
                                        <th class="text-center">Opciones</th>
                                    </tr>
                            </thead>
                            <tbody>`

        $.each(response, function(index, data) {
            html += `<tr>
                        <td> ${data.idcurrency} </td>
                        <td> ${data.CurrencyISO} </td>
                        <td> ${data.Language}</td>
                        <td> ${data.CurrencyName}</td>
                        <td> ${data.Symbol}</td>`
            html +=`<td>
                          <div class="btn-group dropleft">
                            <button type="button" class="btn bg-success-800 btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="fas fa-align-justify"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end table-witch">
                            <button class="dropdown-item btn btn-warning" onclick="openMoneda('editar','${data.idcurrency}','${data.CurrencyISO}',
                            '${data.Language}','${data.CurrencyName}','${data.Money}','${data.Symbol}')"><span class="fa fa-edit"></span> Modificar</button>
                            <button class='dropdown-item btn btn-danger' onclick="openMoneda('ver','${data.idcurrency}','${data.CurrencyISO}',
                            '${data.Language}','${data.CurrencyName}','${data.Money}','${data.Symbol}')"><span class='fa fa-eye'></span> Ver</button>
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
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      txtIso: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        minlength: 2
      },
      txtLenguaje: {
        required: true,
        minlength: 2
      }
    },
    // Specify validation error messages
    messages: {
      // firstname: "Please enter your firstname",
      // lastname: "Please enter your lastname",
      txtIso: {
        required: "Por favor ingrese usuario",
        minlength: "Debe ingresar 4 caracteres minimo"
      },

      txtLenguaje: {
        required: "Por favor ingrese una contraseña",
        minlength: "Debe ingresar 4 caracteres minimo"
      }

    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      enviar_frm();
    }
  });
});

function openMoneda(action,idcurrency,CurrencyISO,Language,CurrencyName,Money,Symbol){


    console.log(action);
    if (action == 'nuevo'){
            $('#txtProceso').val('Registro');
            $('#txtID').val('');
            $('#txtIso').val('');
            $('#txtLenguaje').val('');
            $('#txtNombre').val('');
            $('#txtMoneda').val('');
            $('#txtSimbolo').val('');

            $('#txtID').prop( "disabled" , false);
            $('#txtIso').prop( "disabled" , false);
            $('#txtLenguaje').prop( "disabled" , false);
            $('#txtNombre').prop( "disabled" , false);
            $('#txtMoneda').prop( "disabled" , false);
            $('#txtSimbolo').prop( "disabled" , false);

            $('#btnGuardar').show();
            $("#btnGuardar").text("Guardar");
            $(".modal-title").text("Registro Moneda");
            $('#modal_iconified').modal('show');
     }else if(action=='editar') {
            $('#txtProceso').val('Edicion');
            $('#txtID').val(idcurrency);
            $('#txtIso').val(CurrencyISO);
            $('#txtLenguaje').val(Language);
            $('#txtNombre').val(CurrencyName);
            $('#txtMoneda').val(Money);
            $('#txtSimbolo').val(Symbol);

            $('#txtID').prop( "disabled" , false);
            $('#txtIso').prop( "disabled" , false);
            $('#txtLenguaje').prop( "disabled" , false);
            $('#txtNombre').prop( "disabled" , false);
            $('#txtMoneda').prop( "disabled" , false);
            $('#txtSimbolo').prop( "disabled" , false);

            $('#btnGuardar').show();
            $("#btnGuardar").text("Actualizar");
            $(".modal-title").text("Actualizar Moneda");
            $('#modal_iconified').modal('show');
     } else if(action=='ver'){
            $('#txtProceso').val('Ver');
            $('#txtID').val(idcurrency);
            $('#txtIso').val(CurrencyISO);
            $('#txtLenguaje').val(Language);
            $('#txtNombre').val(CurrencyName);
            $('#txtMoneda').val(Money);
            $('#txtSimbolo').val(Symbol);

            $('#txtID').prop( "disabled" , true);
            $('#txtIso').prop( "disabled" , true);
            $('#txtLenguaje').prop( "disabled" , true);
            $('#txtNombre').prop( "disabled" , true);
            $('#txtMoneda').prop( "disabled" , true);
            $('#txtSimbolo').prop( "disabled" , true);

            $('#btnGuardar').hide();
            $(".modal-title").text("Detalles de Moneda");
            $('#modal_iconified').modal('show');
     }
 };

 

function enviar_frm()
{
  var urlprocess = 'web/ajax/ajxmoneda.php';
  var proceso = $("#txtProceso").val();
  var id = $("#txtID").val();
  var CurrencyISO =$("#txtIso").val();
  var Language =$("#txtLenguaje").val();
  var CurrencyName =$("#txtNombre").val();
  var Money =$("#txtMoneda").val();
  var Symbol =$("#txtSimbolo").val();


  var dataString='proceso='+proceso+'&id='+id+'&CurrencyISO='+CurrencyISO+'&Language='+Language+'&CurrencyName='+CurrencyName;
  dataString+='&Money='+Money+'&Symbol='+Symbol;

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
                            title: "Moneda Registrado",
                            icon: 'success',
                            showConfirmButton: false,
                            timer:1500,
                            timerProgressBar:false,
                            position:"top",
                            background:'#43A047'
                     });
                ListarMoneda();
                $('#modal_iconified').modal('hide');


              } else if(proceso == "Edicion") {

                    swal.fire({
                            toast:true,
                            title: "Moneda Actualizado",
                            icon: 'success',
                            showConfirmButton: false,
                            timer:1500,
                            timerProgressBar:false,
                            position:"top",
                            background:'#43A047'
                     });
                  ListarMoneda();
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

 