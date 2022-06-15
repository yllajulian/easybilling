<?php 

	require_once("../../controller/Producto_controller.php");
	require_once("../../model/Producto_model.php");
	
	 $funcion = new Producto();

	 $keyword = trim($_REQUEST['term']);

// var_dump($keyword);
	 $funcion->Autocomplete_Producto($keyword);
	  

?>