<?php 

	require_once"../../model/Marca_model.php";
	require_once"../../controller/Marca_controller.php"; 

	$funcion = new Marca();
	$proceso = (isset($_POST['proceso'])) ? $_POST['proceso'] : '';
	$id = (isset($_POST['id'])) ? $_POST['id'] : '';
	$marca = (isset($_POST['marca'])) ? $_POST['marca'] : '';
	$estado = (isset($_POST['estado'])) ? $_POST['estado'] : '';

		try {


		switch($proceso){
		    case 'Registro':
				$funcion->Insertar_Marca($marca);
		        break;    
		    case 'Edicion':        
				$funcion->Editar_Marca($id,$marca,$estado);
		        break;
		    case 'ListarMarca':        
				$data=$funcion->Listar_marcas();
				echo json_encode($data);                      
		        break;
			default:
				$data = "Error";
 	   		 	echo json_encode($data);
			break;
		}
			
		} catch (Exception $e) {
			
			$data = "Error";
 	   		echo json_encode($data);
		}

?>
