<?php 
 
	require_once"../../model/Tiraje_model.php";
	require_once"../../controller/Tiraje_controller.php"; 

	$funcion = new Tiraje();

		$proceso = (isset($_POST['proceso'])) ? trim($_POST['proceso']) : '';
		$id = (isset($_POST['id'])) ? trim($_POST['id']) : '';
		$fecha_resolucion = (isset($_POST['fecha_resolucion'])) ? trim($_POST['fecha_resolucion']) : '';
		$numero_resolucion = (isset($_POST['numero_resolucion'])) ? trim($_POST['numero_resolucion']) : '';
		$serie = (isset($_POST['serie'])) ? trim($_POST['serie']) : '';
		$desde = (isset($_POST['desde'])) ? trim($_POST['desde']) : '';
		$hasta = (isset($_POST['hasta'])) ? trim($_POST['hasta']) : '';
		$disponibles = (isset($_POST['disponibles'])) ? trim($_POST['disponibles']) : '';
		$idcomprobante = (isset($_POST['idcomprobante'])) ? trim($_POST['idcomprobante']) : '';

		try {


		switch($proceso){
		    case 'Registro':
				$funcion->Insertar_Tiraje($fecha_resolucion,$numero_resolucion,$serie,$desde,$hasta,$disponibles,$idcomprobante);
		        break;    
		    case 'Edicion':        
				$funcion->Editar_Tiraje($id,$fecha_resolucion,$numero_resolucion,$serie,$desde,$hasta,$disponibles,$idcomprobante);
		        break;
		    case 'GetTiraje':        
				$data=$funcion->Listar_Tirajes();
				echo json_encode($data);                      
		        break;
		    case 'GetComprobante':        
				$data=$funcion->Listar_Comprobantes();
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

	// $funcion = new Tiraje();

	// if(isset($_POST['fecha_resolucion']) && isset($_POST['numero_resolucion']) && isset($_POST['serie'])){
		
	// 	try {


	// 		$proceso = $_POST['proceso'];
	// 		$id = $_POST['id'];
	// 		$fecha_resolucion = trim($_POST['fecha_resolucion']);
	// 		$numero_resolucion = trim($_POST['numero_resolucion']);
	// 		$serie = trim($_POST['serie']);
	// 		$desde = trim($_POST['desde']);
	// 		$hasta = trim($_POST['hasta']);
	// 		$disponibles = trim($_POST['disponibles']);
	// 		$idcomprobante = trim($_POST['idcomprobante']);

	// 		$fecha_resolucion = DateTime::createFromFormat('d/m/Y H:i:s', $fecha_resolucion)->format('Y-m-d H:i:s');

	// 		switch($proceso){

	// 		case 'Registro':
	// 			$funcion->Insertar_Tiraje($fecha_resolucion,$numero_resolucion,$serie,$desde,$hasta,$disponibles,$idcomprobante);
	// 		break;

	// 		case 'Edicion':
	// 			$funcion->Editar_Tiraje($id,$fecha_resolucion,$numero_resolucion,$serie,$desde,$hasta,$disponibles,$idcomprobante);
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
