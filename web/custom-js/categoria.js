var urlprocess = 'web/ajax/ajxcategoria.php';

$(document).ready(function() {
    ConsultarCategoria();

})
 
function ConsultarCategoria() {
    $.ajax({
        data: { "proceso": "ListarCategoria" },
        url: urlprocess,
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {
        var html = '';                  

        html += `<table class="table datatable-basic dt-responsive table-sm table-hover table-striped" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                        <thead class="text-center">
                            <tr>
                                <th>No</th>
                                <th>Categoria</th>
                                <th>Estado</th>
                                <th class="text-center">opciones</th>
                            </tr>
                        </thead>
                        <tbody>`


        $.each(response, function(index, data) {
            html += `<tr>
                        <td> ${data.idcategoria} </td>
                        <td> ${data.nombre_categoria}</td>`

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
                            <button id="btnEditar" class="dropdown-item btn btn-warning" onclick="openCategoria('editar','${data.idcategoria}','${data.nombre_categoria}','${data.estado}')"><span class="fa fa-edit"></span> Modificar</button>
                            <button class='dropdown-item btn btn-danger' onclick="openCategoria('ver','${data.idcategoria}','${data.nombre_categoria}','${data.estado}')"><span class='fa fa-eye'></span> Ver</button>
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

        txtCategoria: {required: true, minlength: 3,maxlength:30 },

    },
    // Specify validation error messages
    messages: {

      txtCategoria: {
        required: "Por favor ingrese nombre",
        minlength: "Debe ingresar 4 caracteres minimo"
      },

 textnumber: {required: "* Ingresa un valor", number: "* Ingresa solo numeros", min: $.validator.format("* Ingresa una cantidad igual o mayor a {0}"), max: $.validator.format("* Ingresa una cantidad igual o menor a {0}")},

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



function openCategoria(action, idcategoria,nombre_categoria,estado){

console.log(action);

    if (action == 'nuevo'){
            $('#txtProceso').val('Registro');
            $("#txtID").val('');
            $("#txtCategoria").val('');
            setSwitchery(mySwitch, true);

            $('#txtCategoria').prop( "disabled" , false);
            $('#chkEstado').prop( "disabled" , true);

            $('#btnGuardar').show();
            $("#btnGuardar").text("Guardar");
            $(".modal-title").text("Registro Empleado");
            $('#modal_iconified').modal('show');
            

     }else if(action=='editar') {

            $('#txtProceso').val('Edicion');
            $("#txtID").val(idcategoria);
            $("#txtCategoria").val(nombre_categoria);
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


            $('#txtCategoria').prop( "disabled" , false);
            $('#chkEstado').prop( "disabled" , false);

            $('#btnGuardar').show();
            $("#btnGuardar").text("Actualizar");
            $(".modal-title").text("Actualizar Empleado");
            $('#modal_iconified').modal('show');
     } else if(action=='ver'){

            $('#txtProceso').val('Ver');
            $("#txtID").val(idcategoria);
            $("#txtCategoria").val(nombre_categoria);

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

            $('#txtCategoria').prop( "disabled" , true);
            $('#chkEstado').prop( "disabled" , true);

            $('#btnGuardar').hide();
            $(".modal-title").text("Detalles de Empleado");
            $('#modal_iconified').modal('show');
     }
 };
 

function enviar_frm()
{
  var proceso = $("#txtProceso").val();
  var id = $("#txtID").val();
  var categoria =$("#txtCategoria").val();
  var estado = $('#chkEstado').is(':checked') ? 1 : 0;

  var dataString='proceso='+proceso+'&id='+id+'&categoria='+categoria+'&estado='+estado;

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

                ConsultarCategoria();
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
                  ConsultarCategoria();
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



















// $(function() {

//     // Table setup
//     // ------------------------------

//     // Setting datatable defaults
//     $.extend( $.fn.dataTable.defaults, {
//         autoWidth: false,
//         columnDefs: [{ 
//             orderable: false,
//             width: '100px'
//         }],
//         dom: '<"datatable-header"fpl><"datatable-scroll"t><"datatable-footer"ip>',
//         language: {
//             search: '<span>Buscar:</span> _INPUT_',
//             lengthMenu: '<span>Ver:</span> _MENU_',
//             emptyTable: "No existen registros",
//             sZeroRecords:    "No se encontraron resultados",
//             sInfoEmpty:      "No existen registros que contabilizar",
//             sInfoFiltered:   "(filtrado de un total de _MAX_ registros)",
//             sInfo:           "Mostrando del registro _START_ al _END_ de un total de _TOTAL_ datos",
//             paginate: { 'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;' }

//         },
//         drawCallback: function () {
//             $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').addClass('dropup');
//         },
//         preDrawCallback: function() {
//             $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').removeClass('dropup');
//         }
//     });


//     // Basic datatable
//     $('.datatable-basic').DataTable();

//     // Add placeholder to the datatable filter option
//     $('.dataTables_filter input[type=search]').attr('placeholder','Escriba para filtrar...');


//     // Enable Select2 select for the length option
//     $('.dataTables_length select').select2({
//         minimumResultsForSearch: Infinity,
//         width: 'auto'
//     });


//     jQuery.validator.addMethod("greaterThan",function (value, element, param) {
//       var $min = $(param);
//       if (this.settings.onfocusout) {
//         $min.off(".validate-greaterThan").on("blur.validate-greaterThan", function () {
//           $(element).valid();
//         });
//       }return parseInt(value) > parseInt($min.val());}, "Maximo debe ser mayor a minimo");

//     jQuery.validator.addMethod("lettersonly", function(value, element) {
//         return this.optional(element) || /^[a-z\s, . ()]+$/i.test(value);
//     }, "No se permiten caracteres especiales"); 


//      var validator = $("#frmModal").validate({

//       ignore: '.select2-search__field', // ignore hidden fields
//       errorClass: 'validation-error-label',
//       successClass: 'validation-valid-label',

//       highlight: function(element, errorClass) {
//           $(element).removeClass(errorClass);
//       },
//       unhighlight: function(element, errorClass) {
//           $(element).removeClass(errorClass);
//       },
//       // Different components require proper error label placement
//       errorPlacement: function(error, element) {

//         // Input with icons and Select2
//          if (element.parents('div').hasClass('has-feedback') || element.hasClass('select2-hidden-accessible')) {
//               error.appendTo( element.parent() );
//           }

//          // Input group, styled file input
//           else if (element.parent().hasClass('uploader') || element.parents().hasClass('input-group')) {
//               error.appendTo( element.parent().parent() );
//           }

//         else {
//             error.insertAfter(element);
//         }

//       },

//       rules: {
//         txtCategoria:{
//           maxlength:120,
//           minlength: 4,
//           required: true,
//           lettersonly:true
//         }
//       },
//     validClass: "validation-valid-label",
//      success: function(label) {
//           label.addClass("validation-valid-label").text("Correcto.")
//       },

//        submitHandler: function (form) {
//            enviar_frm();
//         }
//      });

      
//     $('#btnEditar').hide();

//         // Default initialization
//     $(".styled, .multiselect-container input").uniform({
//         radioClass: 'choice'
//     });

//      // Default initialization
//     $(".styled, .multiselect-container input").uniform({
//         radioClass: 'choice'
//     });

//         /*Evento change de ChkEstado en el cual al chequear o deschequear cambia el label*/
//   var mySwitch = new Switchery($('#chkEstado')[0], {
//         size:"small",
//         color: '#0D74E9'
//     });


//     var elem = document.querySelector('.switchery');
//     var init = new Switchery(elem);

//     $("#chkEstado").change(function() {
//         if(this.checked) {
//           $("#chkEstado").val(true);
//           setSwitchery(mySwitch, true);
//           document.getElementById("chkEstado").checked = true;
//           document.getElementById("lblchk").innerHTML = 'VIGENTE';
//         } else {
//           $("#chkEstado").val(false);
//           setSwitchery(mySwitch, false);
//           document.getElementById("chkEstado").checked = false;
//           document.getElementById("lblchk").innerHTML = 'DESCONTINUADA';
//         }
//     });

//   $.fn.modal.Constructor.prototype.enforceFocus = function() {};


// });

//   function limpiarform(){

//     var form = $( "#frmModal" ).validate();
//     form.resetForm();

//   }

//   function setSwitchery(switchElement, checkedBool) {
//     if((checkedBool && !switchElement.isChecked()) || (!checkedBool && switchElement.isChecked())) {
//         switchElement.setPosition(true);
//         switchElement.handleOnchange(true);
//     }
// }

// function newCategoria()
//  {
//     openCategoria('nuevo',null,null);
//     $('#modal_iconified').modal('show');
//  }
// function openCategoria(action,idcategoria,nombre,estado)
//  {
//       var mySwitch = new Switchery($('#chkEstado')[0], {
//           size:"small",
//           color: '#0D74E9'
//       });

//     $('#modal_iconified').on('shown.bs.modal', function () {
//      var modal = $(this);
//      if (action == 'nuevo'){

//       $('#txtProceso').val('Registro');
//       $('#txtID').val('');
//       $('#txtCategoria').val('');
//       setSwitchery(mySwitch, true);

//       $('#txtCategoria').prop( "disabled" , false);
//       $('#chkEstado').prop( "disabled" , true);


//       $('#btnEditar').hide();
//       $('#btnGuardar').show();
//       limpiarform();

//       modal.find('.title-form').text('Ingresar Categoria de Productos');
//      }else if(action=='editar') {

//       $('#modal_iconified').modal('show');

//       $('#txtProceso').val('Edicion');
//       $('#txtID').val(idcategoria);
//       $('#txtCategoria').val(nombre);

//        if (estado == '1')
//         {
//           $("#chkEstado").val(true);
//           setSwitchery(mySwitch, true);
//           document.getElementById("chkEstado").checked = true;
//           document.getElementById("lblchk").innerHTML = 'VIGENTE';
//         }else {
//           $("#chkEstado").val(false);
//           setSwitchery(mySwitch, false);
//           document.getElementById("chkEstado").checked = false;
//           document.getElementById("lblchk").innerHTML = 'DESCONTINUADA';
//         }


//       $('#txtCategoria').prop( "disabled" , false);
//       $('#chkEstado').prop( "disabled" , false);


//       $('#btnEditar').show();
//       $('#btnGuardar').hide();

//       modal.find('.title-form').text('Actualizar Categoria de Productos');
//      } else if(action=='ver'){
//       $('#txtProceso').val('');
//       $('#txtID').val(idcategoria);
//       $('#txtCategoria').val(nombre);
      
//       if (estado == '1')
//         {
//           $("#chkEstado").val(true);
//           setSwitchery(mySwitch, true);
//           document.getElementById("chkEstado").checked = true;
//           document.getElementById("lblchk").innerHTML = 'VIGENTE';
//         }else {
//           $("#chkEstado").val(false);
//           setSwitchery(mySwitch, false);
//           document.getElementById("chkEstado").checked = false;
//           document.getElementById("lblchk").innerHTML = 'DESCONTINUADA';
//         }


//       $('#txtCategoria').prop( "disabled" , true);
//       $('#chkEstado').prop( "disabled" , true);




//       $('#btnEditar').hide();
//       $('#btnGuardar').hide();

//       modal.find('.title-form').text('Ver Categoria de Productos');
//      }
      
//   });

// }

// function enviar_frm()
// {
//   var urlprocess = 'web/ajax/ajxcategoria.php';
//   var proceso = $("#txtProceso").val();
//   var id = $("#txtID").val();
//   var categoria =$("#txtCategoria").val();
//   var estado = $('#chkEstado').is(':checked') ? 1 : 0;

//   var dataString='proceso='+proceso+'&id='+id+'&categoria='+categoria+'&estado='+estado;


//   $.ajax({
//      type:'POST',
//      url:urlprocess,
//      data: dataString,
//      dataType: 'json',
//      success: function(data){

//         if(data=="Validado"){

//              if(proceso=="Registro"){

//               swal({
//                   title: "Exito!",
//                   text: "Categoria registrada",
//                   confirmButtonColor: "#66BB6A",
//                   type: "success"
//               });

//               $('#modal_iconified').modal('toggle');

//               cargarDiv("#reload-div","web/ajax/reload-categoria.php");
//               limpiarform();

//               } else if(proceso == "Edicion") {


//                   swal({
//                       title: "Exito!",
//                       text: "Categoria modificada",
//                       confirmButtonColor: "#2196F3",
//                       type: "info"
//                   });
                  
//                    $('#modal_iconified').modal('toggle');
//                   cargarDiv("#reload-div","web/ajax/reload-categoria.php");

//               }

//         } else if (data=="Duplicado"){

//            swal({
//                   title: "Ops!",
//                   text: "El dato que ingresaste ya existe",
//                   confirmButtonColor: "#EF5350",
//                   type: "warning"
//            });


//         } else if(data =="Error"){

//                swal({
//                 title: "Lo sentimos...",
//                 text: "No procesamos bien tus datos!",
//                 confirmButtonColor: "#EF5350",
//                 type: "error"
//             });
//         }
    
//      },error: function() {

//          swal({
//             title: "Lo sentimos...",
//             text: "Algo sucedio mal!",
//             confirmButtonColor: "#EF5350",
//             type: "error"
//         });

          
//      }

//   });

// }

// function cargarDiv(div,url)
// {
//       $(div).load(url);
// }
