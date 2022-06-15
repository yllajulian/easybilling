var urlprocess = 'web/ajax/ajxcaja.php';

$(document).ready(function() {
getMovimiento();
getdata();
getMoneda();
getIngreso();
getDevoluciones();
getPrestamo();
getGasto();
})



function getIngreso() {
    $.ajax({
        data: { "proceso": "getingreso" },
        url: urlprocess,
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {
        var html = '';                  
        html += `<table class="table  table-secondary datatable-basic dt-responsive table-sm table-hover table-striped" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                        <thead class="text-center">
                            <tr>
                                <th>Description</th>
                                <th>Monto</th>
                            </tr>
                        </thead>
                        <tbody>`
        $.each(response, function(index, data) {
            html += `<tr>
                        <td> ${data.descripcion_movimiento} </td>
                        <td> ${data.monto_movimiento}</td>`
        });
         html += `  </tbody>
                </table>`;
        document.getElementById("DataTableIngreso").innerHTML = html;
        $('.datatable-basic').DataTable();
    }).fail(function(response) {
        console.log(response);
    });
}

function getDevoluciones() {
    $.ajax({
        data: { "proceso": "getdevoluciones" },
        url: urlprocess,
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {
        var html = '';                  
        html += `<table class="table  table-secondary datatable-basic dt-responsive table-sm table-hover table-striped" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                        <thead class="text-center">
                            <tr>
                                <th>Description</th>
                                <th>Monto</th>
                            </tr>
                        </thead>
                        <tbody>`
        $.each(response, function(index, data) {
            html += `<tr>
                        <td> ${data.descripcion_movimiento} </td>
                        <td> ${data.monto_movimiento}</td>`
        });
         html += `  </tbody>
                </table>`;
        document.getElementById("DataTableDevoluciones").innerHTML = html;
        $('.datatable-basic').DataTable();
    }).fail(function(response) {
        console.log(response);
    });
}
function getPrestamo() {
    $.ajax({
        data: { "proceso": "getprestamos" },
        url: urlprocess,
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {
        var html = '';                  
        html += `<table class="table  table-secondary datatable-basic dt-responsive table-sm table-hover table-striped" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                        <thead class="text-center">
                            <tr>
                                <th>Description</th>
                                <th>Monto</th>
                            </tr>
                        </thead>
                        <tbody>`
        $.each(response, function(index, data) {
            html += `<tr>
                        <td> ${data.descripcion_movimiento} </td>
                        <td> ${data.monto_movimiento}</td>`
        });
         html += `  </tbody>
                </table>`;
        document.getElementById("DataTablePrestamos").innerHTML = html;
        $('.datatable-basic').DataTable();
    }).fail(function(response) {
        console.log(response);
    });
}

function getGasto() {
    $.ajax({
        data: { "proceso": "getgastos" },
        url: urlprocess,
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {
        var html = '';                  
        html += `<table class="table  table-secondary datatable-basic dt-responsive table-sm table-hover table-striped" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                        <thead class="text-center">
                            <tr>
                                <th>Description</th>
                                <th>Monto</th>
                            </tr>
                        </thead>
                        <tbody>`
        $.each(response, function(index, data) {
            html += `<tr>
                        <td> ${data.descripcion_movimiento} </td>
                        <td> ${data.monto_movimiento}</td>`
        });
         html += `  </tbody>
                </table>`;
        document.getElementById("DataTableGastos").innerHTML = html;
        $('.datatable-basic').DataTable();
    }).fail(function(response) {
        console.log(response);
    });
}


function getMoneda() {
    $.ajax({
        data: { "proceso": "getmoneda" },
        url: urlprocess,
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {

        $.each(response, function(index, data) {

       $simbolo=data.Symbol!=''? data.Symbol: 'S/.'; 

        });
      $(".simbolo").html($simbolo);

    }).fail(function(response) {
        console.log(response);
    });
}


function getMovimiento() {
    $.ajax({
        data: { "proceso": "getmovimiento" },
        url: urlprocess,
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {

        $.each(response, function(index, data) {

       ingresos= data.p_ingresos;
       devoluciones= data.p_devoluciones;
       prestamos= data.p_prestamos;
       gastos= data.p_gastos;
       egresos= data.p_egresos;
       saldo= data.p_saldo ;
       movimientos= data.p_total_movimiento ;
       diferencia= data.p_diferencia;
       monto_inicial= data.p_monto_inicial;
       ingresos_totales= data.p_ingresos_totales;


       $ingresos=ingresos!=null? ingresos : ' 0.00'; 
       $devoluciones=devoluciones!=null? devoluciones : ' 0.00'; 
       $prestamos=prestamos!=null? prestamos : ' 0.00'; 
       $gastos=gastos!=null? gastos : ' 0.00'; 
       $egresos=egresos!=null? egresos : ' 0.00'; 
       $saldo=saldo!=null? saldo : ' 0.00'; 
       $movimientos=movimientos!=null? movimientos : ' 0.00'; 
       $diferencia=diferencia!=null? diferencia : ' 0.00'; 
       $monto_inicial=monto_inicial!=null? monto_inicial : '100.00'; 
       $ingresos_totales=ingresos_totales!=null? ingresos_totales : ' 0.00'; 
       // values 
      $("#txtvalinicial").val($monto_inicial);
      $("#txtvaldiferencia").val($diferencia);

      $("#txtingreso").html(`${$ingresos}`);
      $("#txtdevoluciones").html(`${$devoluciones}`);
      $("#txtprestamos").html(`${$prestamos}`);
      $("#txtgastos").html(`${$gastos}`);
      $("#txtegresos").html(`${$egresos}`);
      $("#txtsaldo").html(`${$saldo}`);
      $("#txtmovimientos").html(`${$movimientos}`);
      $("#txtdiferencia").html(`${$diferencia}`);
      $("#txtinicial").html(`${$monto_inicial}`);
      $("#txttotal").html(`${$ingresos_totales}`);

        });

    }).fail(function(response) {
        console.log(response);
    });
}


function getdata() {
    $.ajax({
        data: { "proceso": "getdata" },
        url: urlprocess,
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {
        var html = '';                  

        $.each(response, function(index, data) {

      $estado_caja = data.estado;
      $fecha_apertura =data.fecha_apertura;
      $veces_abierta = data.veces_abierta;


if ($estado_caja!==null) {

                if ($estado_caja==1) {
                      $estado =  `<span class="badge bg-success-800"><span
                      class="text-bold">VIGENTE / ABIERTA</span></span>`;

                        var fecha = new Date($fecha_apertura);
                        $c_fecha_apertura=new Intl.DateTimeFormat('en-GB').format(fecha);
                        $("#fecha_apertura").html($c_fecha_apertura);

                }else{

                      $estado = `<span class="bg-secondary text-white p-1 rounded-2 chat-message light h-6">
                      <span class="text-bold">CERRADA</span></span>`;
                        console.log($estado);

                      if($fecha_apertura==null)
                      {
                        $c_fecha_apertura = '';

                      } else {

                        var fecha = new Date($fecha_apertura);
                        $c_fecha_apertura=new Intl.DateTimeFormat('en-GB').format(fecha);

                        $("#fecha_apertura").html($c_fecha_apertura);

                        console.log($c_fecha_apertura);
            
                      }
                };

 
                 if ($veces_abierta == "0" && $estado_caja == "") { 

                 $div_stado_caja=`
                                  <div class="p-1">      
                                    <div class="btn-group">
                                      <button class="btn btn-danger btn-sm py-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">Imprimir Reporte</button>
                                      <div class="dropdown-menu dropdown-menu-end">
                                                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#modal_iconified"
                                                  onclick="openMovimiento('abrir','')"> Abrir Caja <i class="fas fa-inbox float-end"></i></a>
                                      </div>
                                    </div>
                                  </div>`
        
                  } else if ($veces_abierta == "1" && $estado_caja == "1"){

                    $div_stado_caja=`



                    <div class="btn-group mb-2 ">
                      <button class="btn bg-blue-400 btn-sm p-1 me-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Movimiento de Caja</button>
                      <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#" data-toggle="modal" data-target="#modal_iconified"
                          onclick="openMovimiento('devolucion','')"> Devolucion <i class="fas fa-inbox float-end"></i></a>

                          <a class="dropdown-item" href="#" data-toggle="modal" data-target="#modal_iconified"
                          onclick="openMovimiento('prestamo','')"> Prestamo <i class="fas fa-inbox float-end"></i></a>

                          <a class="dropdown-item" href="#" data-toggle="modal" data-target="#modal_iconified"
                          onclick="openMovimiento('gasto','')"> Gasto <i class="fas fa-inbox float-end"></i></a>

                      </div>
                    </div>
 
                    <div class="btn-group mb-2 ">
                      <button class="btn bg-slate-700 btn-sm p-1 me-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Corte de caja</button>
                      <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#" data-toggle="modal" data-target="#modal_iconified"
                          onclick="openMovimiento('abrir','')"> Corte Z - Diario <i class="fas fa-inbox float-end"></i></a>
                          <a class="dropdown-item" href="#" data-toggle="modal" data-target="#modal_iconified"
                          onclick="openMovimiento('abrir','')"> Corte Z - Mensual <i class="fas fa-inbox float-end"></i></a>

                      </div>
                    </div>

                    <div class="btn-group mb-2 ">
                      <button class="btn bg-green-700 btn-sm p-1 me-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Opciones</button>
                      <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#" data-toggle="modal" data-target="#modal_iconified"
                          onclick="openMovimiento('update','')"> Editar Monto Inicial <i class="fas fa-inbox float-end"></i></a>

                          <a class="dropdown-item" href="#" data-toggle="modal" data-target="#modal_iconified"
                          onclick="openMovimiento('cerrar','')"> Cerrar Caja <i class="fas fa-inbox float-end"></i></a>

                      </div>
                    </div>`


                  } else if ($veces_abierta == "1" && $estado_caja == "0"){ 

                $div_stado_caja=`<div class="btn-group mb-2 ">
                  <button class="btn btn-success btn-sm p-1 me-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Opciones</button>
                  <div class="dropdown-menu">
                      <a class="dropdown-item" href="#" data-toggle="modal" data-target="#modal_iconified"
                      onclick="openMovimiento('abrir','')"> Abrir Caja <i class="fas fa-inbox float-end"></i></a>

                  </div>
                </div>`
                  }

        $("#stado_caja").html($estado);
        $("#div_estado_caja").html($div_stado_caja);


}else{

        $c_fecha_apertura = '  ';
        $("#fecha_apertura").html($c_fecha_apertura);
        $estado = `<span class="label label-info label-rounded">
        <span class="text-bold badge bg-grey">SIN ABRIR</span></span>`;
        $("#stado_caja").html($estado);

             if ($estado_caja==null) { 

                   $div_stado_caja=`<div class="btn-group mb-2 ">
                            <button class="btn btn-success btn-sm p-1 me-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Opciones</button>
                            <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#modal_iconified"
                                onclick="openMovimiento('abrir','')"> Abrir Caja <i class="fas fa-inbox float-end"></i></a>

                            </div>
                          </div>`

              }
    $("#div_estado_caja").html($div_stado_caja);

};


        });

    }).fail(function(response) {
        console.log(response);
    });
}







$(function() {

  // Initialize form validation on the registration form.
  $("form[name='formvalidate']").validate({
    // Specify validation rules

        rules: {
            txtMonto:{
              required: true
            },            
            txtCantidad:{
              required: true
            },

        },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {

      enviar_frm();
    }
  });
});




function openMovimiento(action){

console.log(action);

    if (action == 'devolucion'){
          $('#txtProceso').val('Devolucion');
          $('#txtMonto').val('');
          $('#txtDescripcion').val('');


          $('#btnGuardar').show();
          $("#btnGuardar").text("Guardar");
          $(".modal-title").text("Devolucion de Efectivo de Caja");
          $('#modal_iconified_movimiento').modal('show');
          

     }else if(action=='prestamo') {

            $('#txtProceso').val('Prestamo');
            $('#txtMonto').val('');
            $('#txtDescripcion').val('');


            $('#btnGuardar').show();
            $("#btnGuardar").text("Actualizar");
            $(".modal-title").text("Actualizar Empleado");
            $('#modal_iconified_movimiento').modal('show');
     } else if(action=='gasto'){

            $('#txtProceso').val('Gasto');
            $('#txtMonto').val('');
            $('#txtDescripcion').val('');


            $('#btnGuardar').show();
            $(".modal-title").text("Gasto de Efectivo de Caja");
            $('#modal_iconified_movimiento').modal('show');
     } else if(action=='abrir'){
            $('#txtProceso').val('Abrir');
            $('#txtCantidad').val('');
            $('#txtDescripcion').val('');


            $('#btnGuardar').hide();
            $(".modal-title").text("Editar Monto Inicial de Caja");
            $('#modal_iconified').modal('show');
     } else if(action=='cerrar'){

            $('#txtProceso').val('Cerrar');
            var diferencia = $("#txtvaldiferencia").val();
            $('#txtCantidad').val(diferencia);

            $('#btnGuardar').hide();
            $(".modal-title").text("Cerrar Caja");
            $('#modal_iconified').modal('show');
     } else if(action=='update'){
            $('#txtProceso').val('Update');
            var saldo = $("#txtvalinicial").val();
            $('#txtCantidad').val(saldo);


            $('#btnGuardar').hide();
            $(".modal-title").text("Cerrar Caja");
            $('#modal_iconified').modal('show');
     }


 };
 


function enviar_frm()
{
  var proceso = $("#txtProceso").val();
  var monto = $("#txtMonto").val();

  var cantidad = $("#txtCantidad").val();
  var descripcion = $("#txtDescripcion").val();

  var dataString='proceso='+proceso+'&monto='+monto+'&cantidad='+cantidad+'&descripcion='+descripcion;

    console.log(dataString);

  $.ajax({
     type:'POST',
     url:urlprocess,
     data: dataString,
     dataType: 'json',
     success: function(data){

        if(data=="Validado"){

             if(proceso=="Devolucion"){

              swal.fire({
                    toast:true,
                    title: "Devolucion registrada",
                    showConfirmButton: false,
                    timer:1500,
                    timerProgressBar:false,
                    position:"top",
              });
              getMovimiento();
              $('#modal_iconified_movimiento').modal('toggle');


              } else if(proceso == "Prestamo") {

                  swal.fire({
                    toast:true,
                    title: "Prestamo registrado",
                    showConfirmButton: false,
                    timer:1500,
                    timerProgressBar:false,
                    position:"top",
                  });

                getMovimiento();
                $('#modal_iconified_movimiento').modal('toggle');

              }

              else if(proceso == "Gasto") {

                  swal.fire({
                    toast:true,
                    title: "Gasto registrado",
                    showConfirmButton: false,
                    timer:1500,
                    timerProgressBar:false,
                    position:"top",
                  });

                  getMovimiento();
                  $('#modal_iconified_movimiento').modal('toggle');
  
              }  else if(proceso == "Abrir") {

                swal.fire({
                    toast:true,
                    title: "Caja Abierta con Exito!",
                    showConfirmButton: false,
                    timer:1500,
                    timerProgressBar:false,
                    position:"top",
                });
                  
                  getdata();
                  $('#modal_iconified').modal('hide');

              }  else if(proceso == "Cerrar") {

                swal.fire({
                    toast:true,
                    title: "Caja Cerrada con Exito",
                    showConfirmButton: false,
                    timer:1500,
                    timerProgressBar:false,
                    position:"top",
                });
                  
                  getdata();
                  $('#modal_iconified').modal('hide');

              }  else if(proceso == "Update") {

                swal.fire({
                    toast:true,
                    title: "Monto Inicial Editado con Exito",
                    showConfirmButton: false,
                    timer:1500,
                    timerProgressBar:false,
                    position:"top",
                });
                  
                  getMovimiento();
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

