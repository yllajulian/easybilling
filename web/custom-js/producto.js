urlprocess='web/ajax/ajxproducto.php';
$(document).ready(function() {
    getProductos();//
    ConsultarCategoria();//
    ConsultarMarca();//
    ConsultarPresentacion();//

})

function getProductos(){
    var table = $('#tblValores').DataTable( {
        destroy: true,
        processing: true,
        serverSide: true,
        responsive: true,
        bAutoWidth: true,
        lengthChange: false,
        pageLength: 25,
        ajax :{
            url:'web/ajax/ajxproducto.php',
            type:'POST',
            data: { "proceso": "ListarProducto" },

        },
        columnDefs: [
            { "orderable": false, "target": 1 }
        ]
    });
}

function ConsultarCategoria() {
    $.ajax({
        data: { "proceso": "ListarCategoria" },
        url: urlprocess,
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {
        $.each(response, function(index, data) {
            $('#cbCategoria').append(`<option value="${data.idcategoria}">${data.nombre_categoria}</option>`);
        });
    }).fail(function(response) {
        console.log(response);
    });
}

function ConsultarMarca() {
    $.ajax({
        data: { "proceso": "ListarMarca" },
        url: urlprocess,
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {
        $.each(response, function(index, data) {
            $('#cbMarca').append(`<option value="${data.idmarca}">${data.nombre_marca}</option>`);
        });
    }).fail(function(response) {
        console.log(response);
    });
}

function ConsultarPresentacion() {
       $.ajax({
        data: {"proceso": "ListarPresentacion"},
        url: urlprocess,
        type: 'POST',
        dataType: 'json',
      success: function(response) {
        $.each(response, function (index, data) {            
                $("#cbPresentacion").append(`<option value="${data.idpresentacion}">${data.nombre_presentacion}</option>`);
            });
      }
    });
}

 var form= $("form[name='formvalidate']").validate({
        // Specify validation rules

    rules: {
      txtProducto: {required:true, minlength:3},
      txtStock: {required: true},
      txtPCompra: {required: true},
      txtPVenta: {required: true},
      txtPVentaM: {required: true},
      txtSMin: {required: true},
      // cbCategoria: {required: true},
      // cbMarca: {required: true},
      // cbPresentacion: {required: true},

    },
    submitHandler: function(form) {
      enviar_frm();
    }
  });

// reset form  modal inconified//
$(".cancel").click(function() {
    form.resetForm();
});


 // Slect2 Theme Bostrap modal inconified//
$('.select2').select2({
  theme: "bootstrap-5",
  dropdownParent: $('.modal'),
  placeholder: "........"
});


/*Evento change de ChkEstado en el cual al chequear o deschequear cambia el btn*/

    $("#chkEstado").change(function() {
        if(this.checked) {
           $("#chkEstado").val(true);
           document.getElementById("lblchk").innerHTML = 'VIGENTE';
        } else {
          $("#chkEstado").val(false);
          document.getElementById("lblchk").innerHTML = 'DESCONTINUADA';
        }
    });

    $("#chkExento").change(function() {
        if(this.checked) {
           $("#chkExento").val(true);
           document.getElementById("lblchk-e").innerHTML = 'SIN IGV';
        } else {
          $("#chkExento").val(false);
          document.getElementById("lblchk-e").innerHTML = 'CON IGV';
        }
    });

    $("#chkInven").change(function() {
        if(this.checked) {
           $("#chkInven").val(true);
           document.getElementById("lblchk-i").innerHTML = 'INVENTARIABLE';
        } else {
          $("#chkInven").val(false);
          document.getElementById("lblchk-i").innerHTML = 'NO INVENTARIABLE';
        }
    });



      var mySwitch1 = new Switchery($('#chkExento')[0], {
          size:"small",
          color: '#03A9F4'
      });

      var mySwitch2 = new Switchery($('#chkInven')[0], {
          size:"small",
          color: '#8BC34A'
      });

      var mySwitch3 = new Switchery($('#chkEstado')[0], {
          size:"small",
          color: '#0D74E9'
      });





// var elem = document.querySelector('.switchery');

function setSwitchery(switchElement, checkedBool) {
    if((checkedBool && !switchElement.isChecked()) || (!checkedBool && switchElement.isChecked())) {
        switchElement.setPosition(true);
        switchElement.handleOnchange(true);
    }
}

function openProducto(action, idproducto, codigo_interno, nombre_producto, precio_compra, precio_venta, precio_venta_mayoreo, stock, stock_min, idcategoria, idmarca,
idpresentacion, estado, exento, inventariable){
    
    console.log(action);
     if (action == 'nuevo'){
            $('#txtProceso').val('Registro');
            $('#txtID').val('');
            $('#txtCodigo').val('');
            $('#txtProducto').val('');
            $('#txtStock').val('');
            $('#txtPCompra').val('');
            $('#txtPVenta').val('');
            $('#txtPVentaM').val('');
            $('#txtSMin').val('');
            $("#cbCategoria").select2("val", "All");
            $("#cbMarca").select2("val", "All");
            $("#cbPresentacion").select2("val", "All");
            setSwitchery(mySwitch1, false);
            setSwitchery(mySwitch2, true);
            setSwitchery(mySwitch3, true);


            $('#txtCodigo').prop( "disabled" , true);
            $('#txtProducto').prop( "disabled" , false);
            $('#txtStock').prop( "disabled" , false);
            $('#txtPCompra').prop( "disabled" , false);
            $('#txtPVenta').prop( "disabled" , false);
            $('#txtPVentaM').prop( "disabled" , false);
            $('#txtSMin').prop( "disabled" , false);
            $('#cbCategoria').prop( "disabled" , false);
            $('#cbMarca').prop( "disabled" , false);
            $('#cbPresentacion').prop( "disabled" , false);
            $('#chkEstado').prop( "disabled" , true);
            $('#chkExento').prop( "disabled" , false);
            $('#chkInven').prop( "disabled" , false);


            $('#btnGuardar').show();
            $("#btnGuardar").text("Guardar");
            $(".modal-title").text("Registro Producto");
            $('#modal_iconified').modal('show');
     }
     else if(action=='editar') {
          $('#txtProceso').val('Edicion');
          $('#txtID').val(idproducto);
          $('#txtCodigo').val(codigo_interno);
          $('#txtProducto').val(nombre_producto);
          $('#txtStock').val(stock);
          $('#txtPCompra').val(precio_compra);
          $('#txtPVenta').val(precio_venta);
          $('#txtPVentaM').val(precio_venta_mayoreo);
          $('#txtSMin').val(stock_min);
          $("#cbCategoria").val(idcategoria).trigger("change");
          $("#cbMarca").val(idmarca).trigger("change");
          $("#cbPresentacion").val(idpresentacion).trigger("change");



            if (exento == '1'){
                $("#chkExento").val(true);
                setSwitchery(mySwitch1, true);
                document.getElementById("chkExento").checked = true;
                document.getElementById("lblchk-e").innerHTML = 'SIN IGV';
            }else {
                $("#chkExento").val(false);
                setSwitchery(mySwitch1, false);
                document.getElementById("chkExento").checked = false;
                document.getElementById("lblchk-e").innerHTML = 'CON IGV';
              }

            if (inventariable == '1')
            {
              $("#chkInven").val(true);
              setSwitchery(mySwitch2, true);
              document.getElementById("chkInven").checked = true;
              document.getElementById("lblchk-i").innerHTML = 'INVENTARIABLE';
            }else {
              $("#chkInven").val(false);
              setSwitchery(mySwitch2, false);
              document.getElementById("chkInven").checked = false;
              document.getElementById("lblchk-i").innerHTML = 'NO INVENTARIABLE';
            }
            if (estado == '1')
            {
              $("#chkEstado").val(true);
              setSwitchery(mySwitch3, true);
              document.getElementById("chkEstado").checked = true;
              document.getElementById("lblchk").innerHTML = 'VIGENTE';
            }else {
              $("#chkEstado").val(false);
              setSwitchery(mySwitch3, false);
              document.getElementById("chkEstado").checked = false;
              document.getElementById("lblchk").innerHTML = 'DESCONTINUADO';
            }

            $('#txtCodigo').prop( "disabled" , true);
            $('#txtProducto').prop( "disabled" , false);
            $('#txtStock').prop( "disabled" , true);
            $('#txtPCompra').prop( "disabled" , false);
            $('#txtPVenta').prop( "disabled" , false);
            $('#txtPVentaM').prop( "disabled" , false);
            $('#txtSMin').prop( "disabled" , false);
            $('#cbCategoria').prop( "disabled" , false);
            $('#cbMarca').prop( "disabled" , false);
            $('#cbPresentacion').prop( "disabled" , false);
            $('#chkEstado').prop( "disabled" , false);
            $('#chkExento').prop( "disabled" , false);
            $('#chkInven').prop( "disabled" , false);

            $('#btnGuardar').show();
            $("#btnGuardar").text("Actualizar");
            $(".modal-title").text("Actualizar Producto");
            $('#modal_iconified').modal('show');
     } else if(action=='ver'){

                $('#txtProceso').val('Ver');
                $('#txtID').val(idproducto);
                $('#txtCodigo').val(codigo_interno);
                $('#txtProducto').val(nombre_producto);
                $('#txtStock').val(stock);
                $('#txtPCompra').val(precio_compra);
                $('#txtPVenta').val(precio_venta);
                $('#txtPVentaM').val(precio_venta_mayoreo);
                $('#txtSMin').val(stock_min);
                $("#cbCategoria").val(idcategoria).trigger("change");
                $("#cbMarca").val(idmarca).trigger("change");
                $("#cbPresentacion").val(idpresentacion).trigger("change");


            if (exento == '1')
            {
                $("#chkExento").val(true);
                setSwitchery(mySwitch1, true);
                document.getElementById("chkExento").checked = true;
                document.getElementById("lblchk-e").innerHTML = 'SIN IGV';
            }else {
                $("#chkExento").val(false);
                setSwitchery(mySwitch1, false);
                document.getElementById("chkExento").checked = false;
                document.getElementById("lblchk-e").innerHTML = 'CON IGV';
              };

            if (inventariable == '1')
            {
              $("#chkInven").val(true);
              setSwitchery(mySwitch2, true);
              document.getElementById("chkInven").checked = true;
              document.getElementById("lblchk-i").innerHTML = 'INVENTARIABLE';
            }else {
              $("#chkInven").val(false);
              setSwitchery(mySwitch2, false);
              document.getElementById("chkInven").checked = false;
              document.getElementById("lblchk-i").innerHTML = 'NO INVENTARIABLE';
            };

            if (estado == '1')
            {
              $("#chkEstado").val(true);
              setSwitchery(mySwitch3, true);
              document.getElementById("chkEstado").checked = true;
              document.getElementById("lblchk").innerHTML = 'VIGENTE';
            }else {
              $("#chkEstado").val(false);
              setSwitchery(mySwitch3, false);
              document.getElementById("chkEstado").checked = false;
              document.getElementById("lblchk").innerHTML = 'DESCONTINUADO';
            };

            $('#txtCodigo').prop( "disabled" , true);
            $('#txtProducto').prop( "disabled" , true);
            $('#txtStock').prop( "disabled" , true);
            $('#txtPCompra').prop( "disabled" , true);
            $('#txtPVenta').prop( "disabled" , true);
            $('#txtPVentaM').prop( "disabled" , true);
            $('#txtSMin').prop( "disabled" , true);
            $('#cbCategoria').prop( "disabled" , true);
            $('#cbMarca').prop( "disabled" , true);
            $('#cbPresentacion').prop( "disabled" , true);
            $('#chkEstado').prop( "disabled" , true);
            $('#chkExento').prop( "disabled" , true);
            $('#chkInven').prop( "disabled" , true);

            $('#btnGuardar').hide();
            $(".modal-title").text("Detalles de Producto");
            $('#modal_iconified').modal('show');
     }
 }

 

function enviar_frm()
{

        var urlprocess = 'web/ajax/ajxproducto.php';
        var proceso = $("#txtProceso").val();
        var id = $("#txtID").val();
        var codigo = $("#txtCodigo").val();

        var nombre_producto =$("#txtProducto").val();
        var precio_compra  =$("#txtPCompra").val();
        var precio_venta =$("#txtPVenta").val();
        var precio_venta_mayoreo  =$("#txtPVentaM").val();
        var stock = $("#txtStock").val();
        var stock_min =$("#txtSMin").val();
        var idcategoria  =$("#cbCategoria").val();
        var idmarca  =$("#cbMarca").val();
        var idpresentacion  =$("#cbPresentacion").val();
        var estado = $('#chkEstado').is(':checked') ? 1 : 0;
        var exento = $('#chkExento').is(':checked') ? 1 : 0;
        var inventariable = $('#chkInven').is(':checked') ? 1 : 0;

      if (idmarca == null)
      {
        idmarca = '';
      }

          var dataString='proceso='+proceso+'&id='+id+'&codigo='+codigo+'&nombre_producto='+nombre_producto+'&precio_compra='+precio_compra;
          dataString+='&precio_venta='+precio_venta+'&precio_venta_mayoreo='+precio_venta_mayoreo+'&stock='+stock+'&stock_min='+stock_min+'&idcategoria='+idcategoria;
          dataString+='&idmarca='+idmarca+'&idpresentacion='+idpresentacion+'&estado='+estado+'&exento='+exento+'&inventariable='+inventariable;
          console.log(dataString);
          $.ajax({
             type:'POST',
             url:urlprocess,
             data: dataString,
             dataType: 'json',
             success: function(data)
             {

                if(data=="Validado")
                {
                        if(proceso=="Registro")
                           {
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
                                        getProductos();
                                        $('#modal_iconified').modal('hide');
                           }else if(proceso == "Edicion") 
                           {
                                swal.fire({
                                            toast:true,
                                            title: "Usuario Actualizado",
                                            icon: 'success',
                                            showConfirmButton: false,
                                            timer:5500,
                                            timerProgressBar:false,
                                            position:"top",
                                            background:'#43A047'
                                        });
                              // ConsultarProducto();
                              getProductos();
                              $('#modal_iconified').modal('hide');
                            }

                } else if (data=="Duplicado")
                {
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
                } else if(data =="Error")
                {
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
                };

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