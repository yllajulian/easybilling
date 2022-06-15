var urlprocess = 'web/ajax/ajxparametro.php';
        
$('.div-moneda').hide();




$(document).ready(function() {
        ConsultarMoneda();

    GetParametros();
})
 
function GetParametros() {
       $.ajax({
        data: {"proceso": "getparametros"},
        url: urlprocess,
        type: 'POST',
        dataType: 'json',
      success: function(response) {

        $.each(response, function (index, data) { 
        $('#txtID').val(data.idparametro);
        $('#txtEmpresa').val(data.nombre_empresa);
        $('#txtPropietario').val(data.propietario);
        $('#txtNIT').val(data.numero_nit);
        $('#txtNRC').val(data.numero_nrc);
        $('#txtPIVA').val(data.porcentaje_iva);
        $('#txtPRET').val(data.porcentaje_retencion);
        $('#txtMontoR').val(data.monto_retencion);
        $("#txtDireccion").val(data.direccion_empresa);
        // $("#cbMoneda").val(data.idcurrency).trigger("change");
            
         $("#btnOpenEditar").html(`<button  id="btnEditar" type="button" class="btn btn-success m-2" onclick="openParametro('editar','${data.idcurrency}')">Editar</button>`);

        $('#txtEmpresa').prop( "disabled" , true);
        $('#txtNIT').prop( "disabled" , true);
        $('#txtNRC').prop( "disabled" , true);
        $('#txtPropietario').prop( "disabled" , true);
        $('#txtPIVA').prop( "disabled" , true);
        $('#txtPRET').prop( "disabled" , true);
        $('#txtMontoR').prop( "disabled" , true);
        $('#txtDireccion').prop( "disabled" , true);
        $('#cbMoneda').prop( "disabled" , true);
        });

      }
    });
}
   
function ConsultarMoneda() {
    $.ajax({
        data: { "proceso": "getMoneda" },
        url: urlprocess,
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {
        var html = '';
        $.each(response, function(index, data) {
            html += `<option value="${data.idcurrency}">${data.CurrencyName}</option>`

        });
        document.getElementById("cbMoneda").innerHTML = html;
    }).fail(function(response) {
        console.log(response);
    });
}
 var form= $("form[name='formvalidate']").validate({
 rules: {
        cbMoneda:{
          required:true
        },
        txtEmpresa:{
          maxlength:150,
          minlength: 4,
          required: true,
          lettersonly:true
        },
        txtNIT:{
          maxlength:70
        },
        txtNRC:{
          required: true,
          maxlength:70
        },
        txtPropietario:{
          maxlength:150,
          minlength: 1,
          required: true
        },
        txtPIVA:{
          required: true
        },
        txtPRET:{
          required: true
        },
        txtMontoR:{
          required: true
        },
        txtDireccion:{
          required:true,
          minlength:4,
          maxlength:200
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


 





function openParametro(action,idcurrency) {
console.log(idcurrency);
      if(action=='editar') {
      $('#txtProceso').val('Edicion');
      $("#cbMoneda").val(idcurrency).trigger("change");
      $('#txtEmpresa').prop( "disabled" , false);
      $('#txtNIT').prop( "disabled" , false);
      $('#txtNRC').prop( "disabled" , false);
      $('#txtPropietario').prop( "disabled" , false);
      $('#txtPIVA').prop( "disabled" , false);
      $('#txtPRET').prop( "disabled" , false);
      $('#txtMontoR').prop( "disabled" , false);
      $('#txtDireccion').prop( "disabled" , false);
      $('#cbMoneda').prop( "disabled" , false);
      $('.btnGuardar').html(`<button id="btnGuardar" class="btn btn-primary" type="submit">Actualizar </button>`);
      $('.btncancel').html(`<button  id="btnCancel" type="button" class="btn btn-danger m-2 " onclick="openParametro('cancel')">Cancelar</button>`);
      $('.div-moneda').show();
      $('#btnEditar').hide();
      $('#btnGuardar').show();
      $('#btncancel').show();

     }
     if(action=='cancel') {
      GetParametros();
      $('#btnEditar').show();
      $('#btncancel').hide();
      $('#btnGuardar').hide();
      $('.div-moneda').hide();
     }

};

function enviar_frm()
{
  var urlprocess = 'web/ajax/ajxparametro.php';
  var proceso = $("#txtProceso").val();
  var id = $("#txtID").val();
  var nombre_empresa =$("#txtEmpresa").val();
  var propietario =$("#txtPropietario").val();
  var numero_nit =$("#txtNIT").val();
  var numero_nrc =$("#txtNRC").val();
  var porcentaje_iva = $("#txtPIVA").val();
  var porcentaje_retencion = $('#txtPRET').val();
  var monto_retencion = $('#txtMontoR').val();
  var direccion_empresa = $("#txtDireccion").val();
  var idcurrency = $("#cbMoneda").val();

  var dataString='proceso='+proceso+'&id='+id+'&nombre_empresa='+nombre_empresa+'&propietario='+propietario;
  dataString+='&numero_nit='+numero_nit+'&numero_nrc='+numero_nrc+'&porcentaje_iva='+porcentaje_iva+'&direccion_empresa='+direccion_empresa+'&idcurrency='+idcurrency;
  dataString+='&porcentaje_retencion='+porcentaje_retencion+'&monto_retencion='+monto_retencion;


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

                $('.div-moneda').hide();
                GetParametros();


              } else if(proceso == "Edicion") {

                    swal.fire({
                            toast:true,
                            title: "Dato Actualizado",
                            icon: 'success',
                            showConfirmButton: false,
                            timer:1500,
                            timerProgressBar:false,
                            position:"top",
                            background:'#43A047'
                     });
                  GetParametros();
                $('.div-moneda').hide();
                $('#btnEditar').show();
                $('#btncancel').hide();
                $('#btnGuardar').hide();
 
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
