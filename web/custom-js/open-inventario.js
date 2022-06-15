var date = new Date();
options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  timeZone: 'America/Los_Angeles'
};

	var firstDay = new Date(date.getFullYear(), date.getMonth(), 2);
	var latestDay = new Date(date.getFullYear(), date.getMonth()+ 1, 1);
	 $firstDay=new Intl.DateTimeFormat('en-GB', options).format(firstDay);
	 $latestDay=new Intl.DateTimeFormat('en-GB', options).format(latestDay);


console.log($firstDay);
$(function() {

    var urlprocess = 'web/ajax/ajxinventario.php';
    var proceso = 'Validar';
    var dataString='proceso='+proceso;
 
    $.ajax({
       type:'POST',
       url:urlprocess,
       data: dataString,
       dataType: 'json',
       success: function(data){


				 openinventario=`<div class="panel-body">
					<div class="row">
						<div class="col-md-12">

							<!-- Widget with rounded icon -->
							<div class="panel">
								<div class="panel-body text-center">
									<div class="icon-object border-primary-400 text-primary-400"><i class="icon-box-add icon-3x text-primary-400"></i>
									</div>
									<h2 class="no-margin text-semibold">INVENTARIO SIN APERTURA </h2>
									<span class="text-uppercase text-size-mini text-muted">Debe abrir un nuevo inventario para
									el mes correspondiente </span> <br><br>
									<button id="btnInventario" onclick="AbrirInventario()" type="button" class="btn btn-success heading-btn"> 
									<i class="icon-key"></i> Abrir Inventario</button>
								</div>
							</div>
							<!-- /widget with rounded icon -->
						</div>
					</div>`

	closeinventario=`<div class="row">
				<div class="col-md-12">

					<!-- Widget with rounded icon -->
					<div class="panel">
						<div class="panel-body text-center">
							<div class="icon-object border-primary-400 text-primary-400"><i class="icon-calendar icon-3x text-primary-400"></i>
							</div>
							<h2 class="no-margin text-semibold">INVENTARIO VIGENTE DESDE ${$firstDay} HASTA
								${$latestDay} </h2>
							<span class="text-uppercase text-size-mini text-muted">Este se cerrara al finalizar el periodo</span> <br><br>
							<button id="btnInventario" onclick="CerrarInventario()" type="button" class="btn btn-danger heading-btn"> 
							<i class="icon-lock5"></i> Cerrar Inventario</button>
						</div>
					</div>
					<!-- /widget with rounded icon -->
				</div>
			</div>`

       	 if(data=="Validado"){

		$('#reload_div').html(`${closeinventario}`)


       	 	console.log("hola Validado");

        } else if (data=="0") {

				productos_empy=`<div class="row">
					<div class="col-md-12">

						<!-- Widget with rounded icon -->
						<div class="panel">
							<div class="panel-body text-center">
								<div class="icon-object border-warning-400 text-primary-400"><i class="icon-warning22 icon-3x text-warning-400"></i>
								</div>
								<h2 class="no-margin text-semibold"> NO TIENE PRODUCTOS REGISTRADOS </h2>
								<span class="text-uppercase text-size-mini text-muted">Debe registrar productos para poder abrir el inventario</span> <br><br>

							</div>
						</div>
						<!-- /widget with rounded icon -->
					</div>
				</div>`




		$('#reload_div').html(`${productos_empy}`)


        } else if (data=="No Existe"){

		$('#reload_div').html(openinventario)

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


});


function AbrirInventario(){

	 var urlprocess = 'web/ajax/ajxinventario.php';
	  var proceso = 'Abrir';
	  var dataString='proceso='+proceso;

	  $.ajax({
	     type:'POST',
	     url:urlprocess,
	     data: dataString,
	     dataType: 'json',
	     success: function(data){


	reload_div=`<div class="row">
				<div class="col-md-12">

					<!-- Widget with rounded icon -->
					<div class="panel">
						<div class="panel-body text-center">
							<div class="icon-object border-primary-400 text-primary-400"><i class="icon-calendar icon-3x text-primary-400"></i>
							</div>
							<h2 class="no-margin text-semibold">INVENTARIO VIGENTE DESDE ${$firstDay} HASTA
								${$latestDay} </h2>
							<span class="text-uppercase text-size-mini text-muted">Este se cerrara al finalizar el periodo</span> <br><br>
							<button id="btnInventario" onclick="CerrarInventario()" type="button" class="btn btn-danger heading-btn"> 
							<i class="icon-lock5"></i> Cerrar Inventario</button>
						</div>
					</div>
					<!-- /widget with rounded icon -->
				</div>
			</div>`
	        if(data=="Validado"){

             Swal.fire({
                  title: "Exito!",
                  text: "Inventario abierto",
                  confirmButtonColor: "#66BB6A",
                  imageUrl: "web/assets/images/unlock.png"
              });

			$('#reload_div').html(`${reload_div}`)


	        } else if (data=="Vigente"){

			$('#reload_div').html(`${reload_div}`)
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


function CerrarInventario(){

	 var urlprocess = 'web/ajax/ajxinventario.php';
	  var proceso = 'Cerrar';
	  var dataString='proceso='+proceso;

	  $.ajax({
	     type:'POST',
	     url:urlprocess,
	     data: dataString,
	     dataType: 'json',
	     success: function(data){
				reload_div=`<div class="panel-body">
					<div class="row">
						<div class="col-md-12">

							<!-- Widget with rounded icon -->
							<div class="panel">
								<div class="panel-body text-center">
									<div class="icon-object border-primary-400 text-primary-400"><i class="icon-box-add icon-3x text-primary-400"></i>
									</div>
									<h2 class="no-margin text-semibold">INVENTARIO SIN APERTURA </h2>
									<span class="text-uppercase text-size-mini text-muted">Debe abrir un nuevo inventario para
									el mes correspondiente </span> <br><br>
									<button id="btnInventario" onclick="AbrirInventario()" type="button" class="btn btn-success heading-btn"> 
									<i class="icon-key"></i> Abrir Inventario</button>
								</div>
							</div>
							<!-- /widget with rounded icon -->
						</div>
					</div>`



	        if(data=="CERRADO"){

			Swal.fire({
                  title: "Exito!",
                  text: "Inventario CERRADO",
                  confirmButtonColor: "#66BB6A",
                  imageUrl: "web/assets/images/cube.png"
              });

				$('#reload_div').html(`${reload_div}`)

	        } else if (data=="Vigente"){

				$('#reload_div').html(`${reload_div}`)

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
