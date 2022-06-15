	
  <script>
  $( function() {
    var spinner = $( "#spinner" ).spinner();
          spinner.spinner( "value", 5 );
 
  } );
  </script>

  <script type="text/javascript" src="https://jqueryui.com/resources/demos/external/jquery-mousewheel/jquery.mousewheel.js"></script>
 
<p>
  <label for="spinner">Select a value:</label>
  <input id="spinner" name="value">
</p>
 



















    <div class="col-12 bg-info-400 p-2 mb-3 rounded">
		<h3 class="text-dark"><i class="mdi mdi-clipboard-text-outline"></i> DATOS DE LA EMPRESA</h3>
	</div>

<div class="row">
	<div class="col-lg-6">
	<div class="card">
	
 	 <form  name="formvalidate">    
          <div class="card-body">

                        <div class="row ">
                            <input type="hidden"  id="txtID" name="txtID" class="form-control" value="">
                            <input type="hidden"  id="txtProceso" name="txtProceso" class="form-control" value="">                                                
                        </div>

                        <div class="row"> 
                            <div class="col-lg-12">
                            <div class="form-group div-moneda">
                            <label for="" class="col-form-label">Moneda</label>
                            <select  id="cbMoneda" name="cbMoneda" class="form-select select2">
                                <!-- <option id="moneda">pen soles</option> -->
                            </select>
                            </div>               
                            </div>
                        </div>
                        <div class="row"> 
                            <div class="col-lg-12">
                            <div class="form-group">
                            <label for="" class="col-form-label">Empresa</label>
				    <input type="text" class="form-control focus " id="txtEmpresa" placeholder="elegir moneda">
                            </div>               
                            </div>
                        </div>

                        <div class="row"> 
                            <div class="col-lg-12">
                            <div class="form-group">
                            <label for="" class="col-form-label">Propietario</label>
				    <input type="text" class="form-control" id="txtPropietario" placeholder="ingresar nombres">

                            </div>               
                            </div>
                
                        </div>
                        <div class="row"> 
                            <div class="col-lg-6">
                            <div class="form-group">
                            <label for="" class="col-form-label">DNI</label>
				    <input type="text" class="form-control" id="txtNIT">

                            </div>               
                            </div>
                            <div class="col-lg-6">
                            <div class="form-group">
                            <label for="" class="col-form-label">RUC</label>
				    <input type="text" class="form-control" id="txtNRC">
                            </div>
                            </div>  
                        </div>
                        <div class="row"> 
                            <div class="col-lg-6">
                            <div class="form-group">
                            <label for="" class="col-form-label">Porcentaje IGV</label>
				    <input type="text" class="form-control" id="txtPIVA">

                            </div>               
                            </div>
                            <div class="col-lg-6">
                            <div class="form-group">
                            <label for="" class="col-form-label">Porcentaje Retencion *</label>
				    <input type="text" class="form-control" id="txtPRET">
                            </div>
                            </div>  
                        </div>
                        <div class="row"> 
                            <div class="col-lg-6">
                            <div class="form-group">
                            <label for="" class="col-form-label">Retener a partir de : * </label>
				    <input type="text" class="form-control" id="txtMontoR">

                            </div>               
                            </div>
                            <div class="col-lg-6">
                            <div class="form-group">
                            <label for="" class="col-form-label">Direccion</label>
				    <input type="text" class="form-control" id="txtDireccion">
                            </div>
                            </div>  
                        </div>
                   </div>

	          <div class="modal-footer">
                <span class="btnOpenEditar" id="btnOpenEditar"></span>
                <span class="btnGuardar" id="btnGuardar"></span>
				<span class="btncancel" id="btncancel"></span>
	          </div>
        </form> 
	</div>

	</div>
	<div class="col-lg-6">
		<div class="card-title bg-white p-5">
			<form action="#" class="dropzone  ">
				<div class="fallback">
						<input name="file" type="file" multiple="multiple">
				</div>
				<div class="dz-message needsclick">
					<div class="mb-1"><i class="display-4 text-muted uil uil-cloud-upload"></i></div>
					<h4>Suelta los archivos aquí o haz clic para subir.</h4>
				</div>
			</form>
		</div>

	</div>

</div>



<?php include_once'includes/footer.php';
      include_once'includes/settings-off-canvas.php'; ?>
      
    <script src="web/custom-js/global.js"></script>
    <script src="web/custom-js/parametro.js"></script>
  

  </body>


</html>
