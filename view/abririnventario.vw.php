	<?php if($tipo_usuario==1){ ?>
			<!-- Basic initialization -->
<div class="container-fluid">

	<div id="reload_div" class="card p-2">
	</div>


</div>
		
 
<?php } else { ?>

	<div class="panel-body">
		<div class="row">
			<div class="col-md-12">

				<!-- Widget with rounded icon -->
				<div class="panel">
					<div class="panel-body text-center">
						<div class="icon-object border-danger-400 text-primary-400"><i class="icon-lock5 icon-3x text-danger-400"></i>
						</div>
						<h2 class="no-margin text-semibold"> SU USUARIO NO POSEE PERMISOS SUFICIENTES </h2>
						<span class="text-uppercase text-size-mini text-muted">Su usuario no posee los permisos respectivos
						para poder accesar a este modulo. Lo invitamos a dar click </span> <a href="./?View=Inicio">AQUI</a> <br><br>

					</div>
				</div>
				<!-- /widget with rounded icon -->
			</div>
		</div>
	</div>

<?php } ?>




<?php include_once'includes/footer.php';
      include_once'includes/settings-off-canvas.php'; ?>
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> -->

<!--     <script src="web/vendors/jquery/jquery.min.js"></script>
    <script src="web/vendors/popper/popper.min.js"></script>
    <script src="web/vendors/bootstrap/bootstrap.min.js"></script>
    <script src="web/vendors/anchorjs/anchor.min.js"></script>
    <script src="web/vendors/is/is.min.js"></script>
    <script src="web/vendors/fontawesome/all.min.js"></script>
    <script src="web/vendors/lodash/lodash.min.js"></script>
    <script src="web/vendors/list.js/list.min.js"></script>
    <script src="web/assets/js/theme.js"></script>


    <script src="web/vendors/switchery-master/dist/switchery.js"></script>
    <script src="web/vendors/sweetalert2/sweetalert2.min.js"></script>
    <script src="web/vendors/datatable/js/datatables.min.js"></script>       
    <script src="web/vendors/validate/validate.min.js"></script>   
    <script src="web/vendors/select2/js/select2.min.js"></script>
    <script src="web/custom-js/global.js"></script>
    <script src="web/vendors/touchspin-master/dist/jquery.bootstrap-touchspin.min.js"></script>
 -->

     <script type="text/javascript" src="web/custom-js/open-inventario.js"></script>



  </body>


</html>
