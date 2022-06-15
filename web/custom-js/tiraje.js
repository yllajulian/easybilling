var urlprocess = 'web/ajax/ajxtiraje.php';

$(document).ready(function() {
    ConsultarTiraje();
ConsultarComprobante()
})
  

function ConsultarTiraje() {
    $.ajax({
        data: { "proceso": "GetTiraje" },
        url: urlprocess,
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {
        var html = '';                  

        html += `<table class="table datatable-basic dt-responsive table-secondary table-sm table-hover table-striped" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                        <thead class="text-center">
                            <tr>
                                <th>No</th>
                                <th>fecha_resolucion</th>
                                <th>Comprobante</th>
                                <th>Disponibles</th>
                                <th>Usados</th>
                                <th class="text-center">opciones</th>
                            </tr>
                        </thead>
                        <tbody>`


        $.each(response, function(index, data) {
            html += `<tr>
                        <td> ${data.idcomprobante} </td>
                        <td> ${data.fecha_resolucion} </td>
                        <td> ${data.nombre_comprobante}</td>
                        <td> ${data.disponibles} </td>
                        <td> ${data.usados} </td>
                        `
                html +=`<td>
                          <div class="btn-group dropleft">
                            <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="fas fa-align-justify"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end table-witch ">
                            <button id="btnEditar" class="dropdown-item btn btn-warning" onclick="openTiraje('editar',
                            '${data.idtiraje}',
                            '${data.fecha_resolucion}',
                            '${data.numero_resolucion}',
                            '${data.serie}',
                            '${data.desde}',
                            '${data.hasta}',
                            '${data.disponibles}',
                            '${data.usados}',
                            '${data.idcomprobante}',
                            )"><span class="fa fa-edit"></span> Modificar</button>
                            <button class='dropdown-item btn btn-danger' onclick="openTiraje('ver',
                            '${data.idtiraje}',
                            '${data.fecha_resolucion}',
                            '${data.numero_resolucion}',
                            '${data.serie}',
                            '${data.desde}',
                            '${data.hasta}',
                            '${data.disponibles}',
                            '${data.usados}',
                            '${data.idcomprobante}',
                            )"><span class='fa fa-eye'></span> Ver</button>
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

function ConsultarComprobante() {
    $.ajax({
        data: { "proceso": "GetComprobante" },
        url: urlprocess,
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {
        var html = '';
        $.each(response, function(index, data) {
            html += `<option value="${data.idcomprobante}">${data.nombre_comprobante}</option>`

        });
        document.getElementById("cbCompro").innerHTML = html;
    }).fail(function(response) {
        console.log(response);
    });
}


 // Slect2 Theme Bostrap modal inconified//
$('.select2').select2({
  theme: "bootstrap-5",
  dropdownParent: $('.modal'),
  placeholder: "........"
});








$(function() {

  // Initialize form validation on the registration form.
  $("form[name='formvalidate']").validate({
    // Specify validation rules
    rules: {

        txtComprobante: {required: true, minlength: 3,maxlength:30 },

    },
    // Specify validation error messages
    messages: {

      txtComprobante: {
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



function openTiraje(action, idtiraje, fecha_resolucion, numero_resolucion, serie, desde, hasta, disponibles, usados, idcomprobante){

console.log(action);

    if (action == 'nuevo'){

        $('#txtProceso').val('Edicion');
        $('#txtID').val(idtiraje);
        $('#txtFechaT').val(fecha_resolucion);
        $('#txtNoResolucion').val(numero_resolucion);
        $('#txtNoSerie').val(serie);
        $('#txtDel').val(desde);
        $('#txtAl').val(hasta);
        $('#txtDispo').val(disponibles);
        $('#txtUsados').val(usados);
        $("#cbCompro").val(idcomprobante).trigger("change");

        $('#txtFechaT').prop( "disabled" , false);
        $('#txtNoResolucion').prop( "disabled" , false);
        $('#txtNoSerie').prop( "disabled" , false);
        $('#txtDel').prop( "disabled" , false);
        $('#txtAl').prop( "disabled" , false);
        $('#txtDispo').prop( "disabled" , false);
        $('#txtUsados').prop( "disabled" , false);
        $('#cbCompro').prop( "disabled" , false);

        $('#btnGuardar').show();
        $("#btnGuardar").text("Guardar");
        $(".modal-title").text("Registro Tiraje");
        $('#modal_iconified').modal('show');


     }else if(action=='editar') {

        $('#txtProceso').val('Edicion');
        $('#txtID').val(idtiraje);
        $('#txtFechaT').val(fecha_resolucion);
        $('#txtNoResolucion').val(numero_resolucion);
        $('#txtNoSerie').val(serie);
        $('#txtDel').val(desde);
        $('#txtAl').val(hasta);
        $('#txtDispo').val(disponibles);
        $('#txtUsados').val(usados);
        $("#cbCompro").val(idcomprobante).trigger("change");


        $('#txtFechaT').prop( "disabled" , false);
        $('#txtNoResolucion').prop( "disabled" , false);
        $('#txtNoSerie').prop( "disabled" , false);
        $('#txtDel').prop( "disabled" , false);
        $('#txtAl').prop( "disabled" , false);
        $('#txtDispo').prop( "disabled" , false);
        $('#txtUsados').prop( "disabled" , false);
        $('#cbCompro').prop( "disabled" , false);

        $('#btnGuardar').show();
        $("#btnGuardar").text("Actualizar");
        $(".modal-title").text("Actualizar Tiraje");
        $('#modal_iconified').modal('show');
     } else if(action=='ver'){

        $('#txtProceso').val('Edicion');
        $('#txtID').val(idtiraje);
        $('#txtFechaT').val(fecha_resolucion);
        $('#txtNoResolucion').val(numero_resolucion);
        $('#txtNoSerie').val(serie);
        $('#txtDel').val(desde);
        $('#txtAl').val(hasta);
        $('#txtDispo').val(disponibles);
        $('#txtUsados').val(usados);
        $("#cbCompro").val(idcomprobante).trigger("change");


        $('#txtFechaT').prop( "disabled" , true);
        $('#txtNoResolucion').prop( "disabled" , true);
        $('#txtNoSerie').prop( "disabled" , true);
        $('#txtDel').prop( "disabled" , true);
        $('#txtAl').prop( "disabled" , true);
        $('#txtDispo').prop( "disabled" , true);
        $('#txtUsados').prop( "disabled" , true);
        $('#cbCompro').prop( "disabled" , true);

        $('#btnGuardar').hide();
        $(".modal-title").text("Detalles de Empleado");
        $('#modal_iconified').modal('show');
     }
 };
 

function enviar_frm(){

  var proceso = $("#txtProceso").val();
  var id = $("#txtID").val();
  var fecha_resolucion =$("#txtFechaT").val();
  var numero_resolucion =$("#txtNoResolucion").val();
  var serie =$("#txtNoSerie").val();
  var desde =$("#txtDel").val();
  var hasta =$("#txtAl").val();
  var disponibles =$("#txtDispo").val();
  var idcomprobante =$("#cbCompro").val();

  var dataString='proceso='+proceso+'&id='+id+'&fecha_resolucion='+fecha_resolucion+'&numero_resolucion='+numero_resolucion+'&serie='+serie;
  dataString+='&desde='+desde+'&hasta='+hasta+'&disponibles='+disponibles+'&idcomprobante='+idcomprobante;

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
                            title: "Comprobante Registrado",
                            icon: 'success',
                            showConfirmButton: false,
                            timer:1500,
                            timerProgressBar:false,
                            background:'#43A047'
                     });

                ConsultarTiraje();
                $('#modal_iconified').modal('hide');


              } else if(proceso == "Edicion") {

                    swal.fire({
                            toast:true,
                            title: "Tiraje Actualizado",
                            icon: 'info',
                            showConfirmButton: false,
                            timer:1500,
                            timerProgressBar:false,
                            position:"top",
                            background:'#43A047'
                     });
                  ConsultarTiraje();
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
//         return this.optional(element) || /^[a-z\s 0-9, / # . ()]+$/i.test(value);
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
//         cbCompro:{
//           required: true
//         },
//         txtFechaT:{
//           required: true
//         },
//         txtNoResolucion:{
//           required: true
//         },
//         txtNoSerie:{
//           required:true
//         },
//         txtDel:{
//           required:true
//         },
//         txtAl:{
//           required:true
//         },
//         txtDel:{
//           required:true
//         },
//         txtDispo:{
//           required:true
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

//       var form = $('#frmModal');

//        $('#cbCompro', form).change(function () {
//             form.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
//         });

//   $('#txtFechaT').datetimepicker({
//         locale: 'es',
//         format: 'DD/MM/YYYY HH:mm:ss'

//   });

//     $('#btnEditar').hide();


//  $('.select-search').select2();

//         /*Evento change de ChkEstado en el cual al chequear o deschequear cambia el label*/
//     $("#chkEstado").change(function() {
//         if(this.checked) {
//            $("#chkEstado").val(true);
//            document.getElementById("lblchk").innerHTML = 'ACTIVO';
//         } else {
//           $("#chkEstado").val(false);
//           document.getElementById("lblchk").innerHTML = 'INACTIVO';
//         }
//     });



//   $.fn.modal.Constructor.prototype.enforceFocus = function() {};

//       $("#cbCompro").select2("val", "All");

//     $("#txtDel").TouchSpin({
//         min: 1,
//         max: 100000000,
//         step: 1
//     });

//     $("#txtUsados").TouchSpin({
//         min: 0,
//         max: 100000000,
//         step: 1
//     });

//     $("#txtDispo").TouchSpin({
//         min: 1,
//         max: 100000000,
//         step: 1
//     });

//     $("#txtAl").TouchSpin({
//         min: 1,
//         max: 100000000,
//         step: 1
//     });

// });

//   function limpiarform(){

//     var form = $( "#frmModal" ).validate();
//     form.resetForm();

//   }


// function newTiraje()
//  {
//     openTiraje('nuevo',null,null,null,null,null,null,null,null,null);
//     $('#modal_iconified').modal('show');
//  }
// function openTiraje(action, idtiraje, fecha_resolucion, numero_resolucion, serie, desde, hasta, disponibles, usados, idcomprobante)
//  {

//     $('#modal_iconified').on('shown.bs.modal', function () {
//      var modal = $(this);
//      if (action == 'nuevo'){

//       $('#txtProceso').val('Registro');
//       $('#txtID').val('');
//       $('#txtFechaT').val('');
//       $('#txtNoResolucion').val('');
//       $('#txtNoSerie').val('');
//       $('#txtDel').val('');
//       $('#txtAl').val('');
//       $('#txtDispo').val('');
//       $('#txtUsados').val('');
//       $("#cbCompro").select2("val", "All");

//       $("#txtAl").change(function() {
//         var disponibles = $("#txtAl").val();
//          $("#txtDispo").val(disponibles);
//       });

//       $('#txtFechaT').prop( "disabled" , false);
//       $('#txtNoResolucion').prop( "disabled" , false);
//       $('#txtNoSerie').prop( "disabled" , false);
//       $('#txtDel').prop( "disabled" , false);
//       $('#txtAl').prop( "disabled" , false);
//       $('#txtDispo').prop( "disabled" , true);
//       $('#txtUsados').prop( "disabled" , true);
//       $('#cbCompro').prop( "disabled" , false);

//       $('#btnEditar').hide();
//       $('#btnGuardar').show();
//       limpiarform();

//       modal.find('.title-form').text('Ingresar Tiraje');
//      }else if(action=='editar') {

//       $('#modal_iconified').modal('show');

//       $('#txtProceso').val('Edicion');
//       $('#txtID').val(idtiraje);
//       $('#txtFechaT').val(fecha_resolucion);
//       $('#txtNoResolucion').val(numero_resolucion);
//       $('#txtNoSerie').val(serie);
//       $('#txtDel').val(desde);
//       $('#txtAl').val(hasta);
//       $('#txtDispo').val(disponibles);
//       $('#txtUsados').val(usados);
//       $("#cbCompro").val(idcomprobante).trigger("change");


//       $('#txtFechaT').prop( "disabled" , false);
//       $('#txtNoResolucion').prop( "disabled" , false);
//       $('#txtNoSerie').prop( "disabled" , false);
//       $('#txtDel').prop( "disabled" , false);
//       $('#txtAl').prop( "disabled" , false);
//       $('#txtDispo').prop( "disabled" , false);
//       $('#txtUsados').prop( "disabled" , false);
//       $('#cbCompro').prop( "disabled" , false);

//       $('#btnEditar').show();
//       $('#btnGuardar').hide();

//       modal.find('.title-form').text('Actualizar Tiraje');
//      } else if(action=='ver'){
//       $('#txtProceso').val('');
//       $('#txtID').val(idtiraje);
//       $('#txtFechaT').val(fecha_resolucion);
//       $('#txtNoResolucion').val(numero_resolucion);
//       $('#txtNoSerie').val(serie);
//       $('#txtDel').val(desde);
//       $('#txtAl').val(hasta);
//       $('#txtDispo').val(disponibles);
//       $('#txtUsados').val(usados);
//       $("#cbCompro").val(idcomprobante).trigger("change");


//       $('#txtFechaT').prop( "disabled" , true);
//       $('#txtNoResolucion').prop( "disabled" , true);
//       $('#txtNoSerie').prop( "disabled" , true);
//       $('#txtDel').prop( "disabled" , true);
//       $('#txtAl').prop( "disabled" , true);
//       $('#txtDispo').prop( "disabled" , true);
//       $('#txtUsados').prop( "disabled" , true);
//       $('#cbCompro').prop( "disabled" , true);


//       $('#btnEditar').hide();
//       $('#btnGuardar').hide();

//       modal.find('.title-form').text('Ver Tiraje');
//      }

//   });

// }

// function enviar_frm()
// {
//   var urlprocess = 'web/ajax/ajxtiraje.php';
//   var proceso = $("#txtProceso").val();
//   var id = $("#txtID").val();
//   var fecha_resolucion =$("#txtFechaT").val();
//   var numero_resolucion =$("#txtNoResolucion").val();
//   var serie =$("#txtNoSerie").val();
//   var desde =$("#txtDel").val();
//   var hasta =$("#txtAl").val();
//   var disponibles =$("#txtDispo").val();
//   var idcomprobante =$("#cbCompro").val();

//   var dataString='proceso='+proceso+'&id='+id+'&fecha_resolucion='+fecha_resolucion+'&numero_resolucion='+numero_resolucion+'&serie='+serie;
//   dataString+='&desde='+desde+'&hasta='+hasta+'&disponibles='+disponibles+'&idcomprobante='+idcomprobante;

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
//                   text: "Tiraje registrado",
//                   confirmButtonColor: "#66BB6A",
//                   type: "success"
//               });

//               $('#modal_iconified').modal('toggle');

//               cargarDiv("#reload-div","web/ajax/reload-tiraje.php");
//               limpiarform();

//               } else if(proceso == "Edicion") {


//                   swal({
//                       title: "Exito!",
//                       text: "Tiraje modificado",
//                       confirmButtonColor: "#2196F3",
//                       type: "info"
//                   });
//                    $('#modal_iconified').modal('toggle');
//                   cargarDiv("#reload-div","web/ajax/reload-tiraje.php");

//               }

//         } else if (data=="Duplicado"){

//            swal({
//                   title: "Ops!",
//                   text: "No permitimos 2 usuarios a un empleado",
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
