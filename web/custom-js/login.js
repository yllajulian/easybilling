$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      usuario: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        minlength: 4
      },
      password: {
        required: true,
        minlength: 4
      }
    },
    // Specify validation error messages
    messages: {
      // firstname: "Please enter your firstname",
      // lastname: "Please enter your lastname",
      usuario: {
        required: "Por favor ingrese usuario",
        minlength: "Debe ingresar 4 caracteres minimo"
      },

      password: {
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




function enviar_frm()
{

     var urlprocess ='web/ajax/ajxlogin.php';
     var usuario=$("#usuario").val();
     var password=$("#password").val();

     var dataString='usuario='+usuario+'&password='+btoa(password);

     $.ajax({
            type:'POST',
            url:urlprocess,
            data: dataString+'&proceso=login',
            dataType: 'json',
            success: function(data){

             if(data == "Validado"){

              swal.fire({ 
              // title: "Bienvenido",
              showConfirmButton: false,
              background: 'transparent',
              imageUrl: "web/assets/images/unlock.gif",
              // backdrop: `rgba(14, 22, 33, 1)`,
              backdrop: `#262626`,

              imageWidth:"100%"});
              setTimeout(function(){
                  window.location.href = "./?View=Inicio";
                }, 1000);

               } else if (data == "Bad Pass"){
                    swal.fire({
                            title: " <span class='text-danger'> <b>Verifica tus datos! </b></span> ",
                            html: "<span class='text-dark'>Tu usuario ó password son incorrectos</span>",
                            //confirmButtonColor: "#EF5350",
                            //ico: "warning",
                            icon: 'error',
                            showConfirmButton: false,
                            timer:1500,
                            timerProgressBar:true,
                            position:"bottom-end",
                            toast:true
                            // background:'red'
                     });
              }

            }, // END THIRST SUCCESS
             error: function() {

                swal.fire({
                title: "Lo sentimos...",
                text: "No pudimos ingresarte al sistema!",
                confirmButtonColor: "#EF5350",
                type: "error"
                });
           }

         }); /// END THIRST AJAX

}
