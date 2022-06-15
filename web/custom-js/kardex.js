$(document).ready(function() {
 ValidarKardex();
});












function ValidarKardex() {

    var urlprocess = 'web/ajax/ajxinventario.php';
    // var proceso = 'Validar';
    // var dataString='proceso='+proceso;

    $.ajax({
       type:'POST',
       url:urlprocess,
       data: {'proceso':'Validar'},
       dataType: 'json',
       success: function(data){
        console.log(data);
        html='';
         if(data=="Validado"){

            $(".kardex-title").text("resumen de saldos y movimientos de productos");

            // $(".head_kardek").show();

// $(".head_kardek").css("display", "none");  // To hide
        $(".head_kardek").css("display", "");  // To unhide



            ConsultarKardex();
                GetProducto();
         } else if (data=="No Existe" || data =="0"){
            // $(".head_kardek").hide();
            $(".kardex-title").text("Su inventario se encuentra cerrado");
            
            $(".head_kardek").css("display", "none");  // To hide

            swal.fire({ title: "Bienvenido",
                  showConfirmButton: true,
                  title: "Debes Abrir Inventario!",
                  text: "El Inventario no se encuentra abierto",
                  confirmButtonColor: "#EF5350",
                  type: "warning",
                  imageWidth:"200px"
                 });

                  setTimeout(function(){
                      window.location.href = "./?View=Abrir-Inventario";
                    }, 1200);

          } else if(data =="Error"){

                 Swal.fire({
                  title: "Lo sentimos...",
                  text: "No procesamos bien tus datos!",
                  confirmButtonColor: "#EF5350",
                  type: "error"
              });
          }

       },error: function() {

           Swal.fire({
              title: "Lo sentimos...",
              text: "Algo sucedio mal!",
              confirmButtonColor: "#EF5350",
              type: "error"
          });


       }

    });

};


function GetProducto() {
    var urlprocess = 'web/ajax/ajxkardex.php';
    $.ajax({
        data: { "proceso": "Get_Producto" },
        url: urlprocess,
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {
        var html = '';
        $.each(response, function(index, data) {
            html += `<option value="${data.idproducto}">${data.codigo_barra} - ${data.nombre_producto}</option>`

        });
        document.getElementById("cbProducto").innerHTML = html;
    }).fail(function(response) {
        console.log(response);
    });
}













     var validator = $("#frmSearch").validate({

      // ignore: '.select2-search__field', // ignore hidden fields
      // errorClass: 'validation-error-label',
      // successClass: 'validation-valid-label',

      highlight: function(element, errorClass) {
          $(element).removeClass(errorClass);
      },
      unhighlight: function(element, errorClass) {
          $(element).removeClass(errorClass);
      },
      // Different components require proper error label placement
      errorPlacement: function(error, element) {

        // Input with icons and Select2
         if (element.parents('div').hasClass('has-feedback') || element.hasClass('select2-hidden-accessible')) {
              error.appendTo( element.parent() );
          }

         // Input group, styled file input
          else if (element.parent().hasClass('uploader') || element.parents().hasClass('input-group')) {
              error.appendTo( element.parent().parent() );
          }

        else {
            error.insertAfter(element);
        }

      },

      rules: {
        txtMes:{
          required: true
        }
      },
    validClass: "validation-valid-label",
     success: function(label) {
          label.addClass("validation-valid-label").text("Correcto.")
      },

       submitHandler: function (form) {
           ConsultarKardex();
        }
     });



 
function ConsultarKardex() {


 // var mes = $("#txtMes").val();
  var proceso='Get_Kardex';

     // fecha1 =$("#txtF1").val();
     // fecha2 =$("#txtF2").val();
     mes = $("#txtMes").val().split("-").reverse().join("-");

    var dataString='proceso='+proceso+'&mes='+mes;
    console.log(dataString);

    $.ajax({
        data:dataString,
        url: 'web/ajax/ajxkardex.php',
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {

        var html = ''; 

        html += `<table class="table datatable-basic dt-responsive table-secondary table-sm table-hover table-striped" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                        <thead class="text-center">
                            <tr>
                                <th>No</th>
                                <th>PRODUCTO</th>
                                <th>MARCA</th>
                                <th>SALDO INICIAL</th>
                                <th>ENTRADAS</th>
                                <th>SALIDA</th>
                                <th>SALDO</th>
                            </tr>
                        </thead>
                        <tbody>`;
        $.each(response, function(index, data) {
            html += `<tr>
                        <td> ${data.idproducto} </td>
                        <td> ${data.producto} </td>
                        <td> ${data.nombre_marca} </td>
                        <td> ${data.saldo_inicial} </td>
                        <td> ${data.entradas} </td>
                        <td> ${data.salidas} </td>
                        <td> ${data.saldo_final}</td>
                    </tr>`;
        });
         html += `</tbody>
                </table>`;
        document.getElementById("DataTableContent").innerHTML = html;
        $('.datatable-basic').DataTable();
    }).fail(function(response) {
        console.log(response);
    });
}



  $(document).on('click', '#new_entrada', function(e){
           console.log("hola mundo");

       openMovimiento('entrada');
       e.preventDefault();
  });

  $(document).on('click', '#new_salida', function(e){
     var valor='salida';
   
       openMovimiento(valor);
       e.preventDefault();
  });



$(".select2").select2({
    theme: "bootstrap-5",
});


function openMovimiento(action)
{

    $(".select2-modal").select2({
      theme: "bootstrap-5",
      dropdownParent: $('.modal'),
      placeholder: "........"
    });      

           console.log(action);
      if (action == 'entrada'){

      $('#txtProceso').val('Entrada');
      $('#txtCant').val('');
      
      $("#cbProducto").select2("val", "All");
      $("#cbMotivo").select2("val", "All");

      $('#AVERIA').prop( "disabled" , true);
      $('#IN-INI').prop( "disabled" , false);
      $('#PROMOCIONAL').prop( "disabled" , false);

      $('#modal_iconified').modal('show');
      $(".modal-title").text('Registrar Entrada de Producto');



      } else if (action == 'salida'){

        $('#txtProceso').val('Salida');
        $('#txtCant').val('');
        

        $("#cbProducto").select2("val", "All");
        $("#cbMotivo").select2("val", "All");

        $('#AVERIA').prop( "disabled" , false);
        $('#IN-INI').prop( "disabled" , true);
        $('#PROMOCIONAL').prop( "disabled" , true);

        $('#modal_iconified').modal('show');
        $(".modal-title").text('Registrar Salida de Producto');
      }
  
   }
  // $("form[name='formvalidate']").validate({


     var validator = $("form[name='formvalidate']").validate({

      ignore: '.select2-search__field', // ignore hidden fields
      errorClass: 'validation-error-label',
      successClass: 'validation-valid-label',

      highlight: function(element, errorClass) {
          $(element).removeClass(errorClass);
      },
      unhighlight: function(element, errorClass) {
          $(element).removeClass(errorClass);
      },
      // Different components require proper error label placement
      errorPlacement: function(error, element) {

        // Input with icons and Select2
         if (element.parents('div').hasClass('has-feedback') || element.hasClass('select2-hidden-accessible')) {
              error.appendTo( element.parent() );
          }

         // Input group, styled file input
          else if (element.parent().hasClass('uploader') || element.parents().hasClass('input-group')) {
              error.appendTo( element.parent().parent() );
          }

        else {
            error.insertAfter(element);
        }

      },

      rules: {
        txtCant:{
          required: true
        },
        cbProducto:{
          required:true
        },
        cbMotivo:{
          required:true
        }
      },

    validClass: "validation-valid-label",
     success: function(label) {
          label.addClass("validation-valid-label").text("Correcto.")
      },

       submitHandler: function (form) {
           enviar_frm();
        }
     });



 

function enviar_frm()
{
  var urlprocess = 'web/ajax/ajxkardex.php';
  var proceso = $("#txtProceso").val();
  var cantidad =$("#txtCant").val();
  var producto =$("#cbProducto").val();
  var motivo =$("#cbMotivo").val();
 
  var dataString='proceso='+proceso+'&producto='+producto+'&motivo='+motivo+'&cantidad='+cantidad;
  console.log(dataString);
  $.ajax({
     type:'POST',
     url:urlprocess,
     data: dataString,
     dataType: 'json',
     success: function(data){

        if(data=="Validado"){

           if(proceso=="Entrada"){

            Swal.fire({
                title: "Exito!",
                text: "Entrada registrada",
                confirmButtonColor: "#66BB6A",
                type: "success"
            });

            $('#modal_iconified').modal('toggle');
            // cargarDiv("#reload-div","web/ajax/reload-kardex.php?mes=reload");
            // limpiarform();

            } else if(proceso == "Salida") {

              Swal.fire({
                  title: "Exito!",
                  text: "Salida registrada",
                  confirmButtonColor: "#66BB6A",
                  type: "success"
              });

                $('#modal_iconified').modal('toggle');
                // cargarDiv("#reload-div","web/ajax/reload-kardex.php?mes=reload");
                // limpiarform();
          }

        } else if(data =="Error"){

               Swal.fire({
                title: "Lo sentimos...",
                text: "No procesamos bien tus datos!",
                confirmButtonColor: "#EF5350",
                type: "error"
            });
        }
    
     },error: function() {

         Swal.fire({
            title: "Lo sentimos...",
            text: "Algo sucedio mal!",
            confirmButtonColor: "#EF5350",
            type: "error"
        });

          
     }

  });

}










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

//   $('#txtMes').datetimepicker({
//         locale: 'es',
//         format: 'MM/YYYY',
//         useCurrent:true,
//         viewDate: moment()

//   });

//      var validator = $("#frmSearch").validate({

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
//         txtMes:{
//           required: true
//         }
//       },
//     validClass: "validation-valid-label",
//      success: function(label) {
//           label.addClass("validation-valid-label").text("Correcto.")
//       },

//        submitHandler: function (form) {
//            buscar_datos();
//         }
//      });

//     $('.select-search').select2();

//     $("#txtCant").TouchSpin({
//         min: 0,
//         max: 100000000,
//         step: 0.01,
//         decimals: 2,
//         prefix: '<i class="icon-box-add"></i>'
//     });


//      var validator = $("#frmMov").validate({

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
//         txtCant:{
//           required: true
//         },
//         cbProducto:{
//           required:true
//         },
//         cbMotivo:{
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


//      var form = $('#frmMov');

//      $('#cbProducto', form).change(function () {
//           form.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
//       });

//      $('#cbMotivo', form).change(function () {
//           form.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
//       });
  

// });


//   function limpiarform(){

//     var form = $( "#frmMov" ).validate();
//     form.resetForm();

//   }

// function openMovimiento(action)
// {
//      $('#modal_iconified').on('shown.bs.modal', function () {
//       var modal = $(this);
//       if (action == 'entrada'){

//       $('#txtProceso').val('Entrada');

//       $('#txtCant').val('');
      
//       $('#cbMotivo').select2("destroy");
//       $('#AVERIA').prop( "disabled" , true);
//       $('.select-search').select2();
//       $("#cbProducto").select2("val", "All");
//       $("#cbMotivo").select2("val", "All");

//       $('#AVERIA').prop( "disabled" , true);
//       $('#IN-INI').prop( "disabled" , false);
//       $('#PROMOCIONAL').prop( "disabled" , false);

//       modal.find('.title-form').text('Registrar Entrada de Producto');

//       } else if (action == 'salida'){

//         $('#txtProceso').val('Salida');
//         $('#txtCant').val('');
        
//         $('#cbMotivo').select2("destroy");

//         $('.select-search').select2();
//         $("#cbProducto").select2("val", "All");
//         $("#cbMotivo").select2("val", "All");

//         $('#AVERIA').prop( "disabled" , false);
//         $('#IN-INI').prop( "disabled" , true);
//         $('#PROMOCIONAL').prop( "disabled" , true);

//         modal.find('.title-form').text('Registrar Salida de Producto');

//       }
  
//    });
// }


// function buscar_datos()
// {
//  var mes = $("#txtMes").val();

//     if(mes!="")
//     {
//         $.ajax({

//            type:"GET",
//            url:"web/ajax/reload-kardex.php?mes="+mes,
//            success: function(data){
//               $('#reload-div').html(data);
//            }

//        });
//     }

// }

// function Print_Report(Criterio)
// {


//   var mes = $("#txtMes").val();

//     if(mes!="")
//     {
//           if(Criterio == "Saldos") {

//            window.open('reportes/Kardex_Inventario.php?mes='+mes,
//           'win2','status=yes,toolbar=yes,scrollbars=yes,titlebar=yes,menubar=yes,'+
//           'resizable=yes,width=800,height=800,directories=no,location=no'+
//           'fullscreen=yes');

//           } else if (Criterio == "Entradas") {

//            window.open('reportes/Entradas_Inventario.php?mes='+mes,
//           'win2','status=yes,toolbar=yes,scrollbars=yes,titlebar=yes,menubar=yes,'+
//           'resizable=yes,width=800,height=800,directories=no,location=no'+
//           'fullscreen=yes');


//           } else if (Criterio == "Salidas") {

//            window.open('reportes/Salidas_Inventario.php?mes='+mes,
//           'win2','status=yes,toolbar=yes,scrollbars=yes,titlebar=yes,menubar=yes,'+
//           'resizable=yes,width=800,height=800,directories=no,location=no'+
//           'fullscreen=yes');

//           }


//       } else {


//           swal({
//                   title: "Ops!",
//                   imageUrl: "web/assets/images/calendar.png",
//                   text: "Debes seleccionar el Mes",
//                   confirmButtonColor: "#EF5350"
//            });

//       }


// }

// function enviar_frm()
// {
//   var urlprocess = 'web/ajax/ajxkardex.php';
//   var proceso = $("#txtProceso").val();
//   var cantidad =$("#txtCant").val();
//   var producto =$("#cbProducto").val();
//   var motivo =$("#cbMotivo").val();
 
//   var dataString='proceso='+proceso+'&producto='+producto+'&motivo='+motivo+'&cantidad='+cantidad;
  
//   $.ajax({
//      type:'POST',
//      url:urlprocess,
//      data: dataString,
//      dataType: 'json',
//      success: function(data){

//         if(data=="Validado"){

//            if(proceso=="Entrada"){

//             swal({
//                 title: "Exito!",
//                 text: "Entrada registrada",
//                 confirmButtonColor: "#66BB6A",
//                 type: "success"
//             });

//             $('#modal_iconified').modal('toggle');
//             cargarDiv("#reload-div","web/ajax/reload-kardex.php?mes=reload");
//             limpiarform();

//             } else if(proceso == "Salida") {

//               swal({
//                   title: "Exito!",
//                   text: "Salida registrada",
//                   confirmButtonColor: "#66BB6A",
//                   type: "success"
//               });

//                 $('#modal_iconified').modal('toggle');
//                 cargarDiv("#reload-div","web/ajax/reload-kardex.php?mes=reload");
//                 limpiarform();
//           }

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
