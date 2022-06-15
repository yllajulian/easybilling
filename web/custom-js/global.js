              // swal.fire({ 
              // // title: "Bienvenido",
              // showConfirmButton: false,
              // background: 'transparent',
              // imageUrl: "web/assets/images/unlock.gif",
              // // backdrop: `rgba(14, 22, 33, 1)`,
              // backdrop: `#262626`,

              // imageWidth:"100%"});
              // setTimeout(function(){
              //     // window.location.href = "./?View=Inicio";
              //   }, 1000);


        // Swal.fire({
        //               showConfirmButton: false,
        //               background: 'transparent',
        //               imageUrl: "web/assets/images/unlock.gif",
        //               // backdrop: `rgba(14, 22, 33, 1)`,
        //               backdrop: `#262626`,

        //               imageWidth:"100%",
        //   timer: 500
        // })








$(document).ready(function() {


// var elem = document.querySelector('.js-switch');
// var init = new Switchery(elem, { size: 'small' });

console.log(' this is global');
// Setting datatable defaults
$.extend( $.fn.dataTable.defaults, {

       // dom: '<"top"lf>rt<"bottom"lp><"clear">',
        "iDisplayLength": 50,

       dom:"<'row'<'col-sm-12 col-md-6'f><'col-sm-12 col-md-6'l>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        // "iDisplayLength": 2,
  // "pagingType": "first_last_numbers",
    "responsive":true,
    language:{
              "sProcessing":     "Procesando...",
              "sLengthMenu":     "Mostrar _MENU_ registros",
              "sZeroRecords":    "No se encontraron resultados",
              "sEmptyTable":     "Ningún dato disponible en esta tabla",
              "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
              "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
              "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
              "sSearch":         "Buscar:",
              "sInfoThousands":  ",",
              "sLoadingRecords": "Cargando...",
              "searchPlaceholder": "Escriba para filtrar...",
              // "oPaginate": {
              //     "sFirst":    "a",
              //     "sLast":     "Último",
              //     "sNext":     "Siguiente",
              //     "sPrevious": "Anterior"
              // },

              "oPaginate": {
                  "sNext": '<i class="fas fa-arrow-right" ></i>',
                  "sPrevious": '<i class="fas fa-arrow-left" ></i>'
              },
              "oAria": {
                  "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                  "sSortDescending": ": Activar para ordenar la columna de manera descendente"
              },
              "buttons": {
                  "copy": "Copiar",
                  "colvis": "Visibilidad"
              }
          }
  });

  jQuery.extend(jQuery.validator.messages, {
    required:"<span class='fas fa-times-circle text-danger'></span> Este campo es obligatorio.",
    remote: "Por favor, rellena este campo.",
    email: "Por favor, escribe una dirección de correo válida",
    url: "Por favor, escribe una URL válida.",
    date: "Por favor, escribe una fecha válida.",
    dateISO: "Por favor, escribe una fecha (ISO) válida.",
    number: "Por favor, escribe un número entero válido.",
    digits: "Por favor, escribe sólo dígitos.",
    creditcard: "Por favor, escribe un número de tarjeta válido.",
    equalTo: "Por favor, escribe el mismo valor de nuevo.",
    accept: "Por favor, escribe un valor con una extensión aceptada.",
    maxlength: jQuery.validator.format("Por favor, no escribas más de {0} caracteres."),
    minlength: jQuery.validator.format("Por favor, no escribas menos de {0} caracteres."),
    rangelength: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
    range: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1}."),
    max: jQuery.validator.format("Por favor, escribe un valor menor o igual a {0}."),
    min: jQuery.validator.format("Por favor, escribe un valor mayor o igual a {0}.")
  });

    $('.datatable-basic').DataTable();


$('.text-uppercase').keyup(function(){
    $(this).val($(this).val().toUpperCase());
});

$(".text-number").on('input', function () { 
this.value = this.value.replace(/[^0-9.]/g, '').replace(/,/g, '.');
});

$(".text-number").change(function() {
    $(this).val(parseFloat($(this).val()).toFixed(0));
});

$(".text-decimal").on('input', function () { 
this.value = this.value.replace(/[^0-9.]/g, '').replace(/,/g, '.');
});

$(".text-decimal").change(function() {
    $(this).val(parseFloat($(this).val()).toFixed(2));
});


// // Custom plugins Date now//
//     configd = {
//     dateFormat: "d-m-Y",
//     locale: "es",
//     };
//     flatpickr('.dFormatDay', configd);


// // Custom plugins Month//
//     configm = {
//       locale:"es",
//       plugins: [
//         new monthSelectPlugin({
//           // shorthand: true,
//           dateFormat: "m-Y", 

//           // altFormat: "F Y", 
//         })
//       ]
//     };
//     flatpickr('.dFormatMonth', configm);




});


