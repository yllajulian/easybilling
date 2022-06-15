<?php 

	require_once"../../model/Presentacion_model.php";
	require_once"../../controller/Presentacion_controller.php"; 

	$funcion = new Presentacion();
	$proceso = (isset($_POST['proceso'])) ? $_POST['proceso'] : '';
	$id = (isset($_POST['id'])) ? $_POST['id'] : '';
	$presentacion = (isset($_POST['presentacion'])) ? $_POST['presentacion'] : '';
	$siglas = (isset($_POST['siglas'])) ? $_POST['siglas'] : '';
	$estado = (isset($_POST['estado'])) ? $_POST['estado'] : '';

		try {


		switch($proceso){
		    case 'Registro':
				$funcion->Insertar_Presentacion($presentacion,$siglas);
		        break;    
		    case 'Edicion':        
				$funcion->Editar_Presentacion($id,$presentacion,$siglas,$estado);
		        break;
		    case 'ListarPresentacion':        
				$data=$funcion->Listar_presentaciones();
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

	// function __autoload($className){
	// 	$model = "../../model/". $className ."_model.php";
	// 	$controller = "../../controller/". $className ."_controller.php";
	
	// 	require_once($model);
	// 	require_once($controller);
	// }

	// $funcion = new Presentacion();

	// if(isset($_POST['presentacion'])){
		
	// 	try {

	// 		$proceso = $_POST['proceso'];
	// 		$id = $_POST['id'];
	// 		$presentacion = trim($_POST['presentacion']);
	// 		$siglas = trim($_POST['sigla']);
	// 		$estado = trim($_POST['estado']);

	// 		switch($proceso){

	// 		case 'Registro':
	// 			$funcion->Insertar_Presentacion($presentacion,$siglas);
	// 		break;

	// 		case 'Edicion':
	// 			$funcion->Editar_Presentacion($id,$presentacion,$siglas,$estado);
	// 		break;

	// 		default:
	// 			$data = "Error";
 // 	   		 	echo json_encode($data);
	// 		break;
	// 	}
			
	// 	} catch (Exception $e) {
			
	// 		$data = "Error";
 // 	   		echo json_encode($data);
	// 	}

	// }
	
	

  	

?>
