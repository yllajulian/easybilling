<?php 
 
	require_once"../../model/Comprobante_model.php";
	require_once"../../controller/Comprobante_controller.php"; 

	$funcion = new Comprobante();

	$proceso = (isset($_POST['proceso'])) ? $_POST['proceso'] : '';
	$id = (isset($_POST['id'])) ? $_POST['id'] : '';
	$comprobante = (isset($_POST['comprobante'])) ? $_POST['comprobante'] : '';
	$estado = (isset($_POST['estado'])) ? $_POST['estado'] : '';

		try {


		switch($proceso){
		    case 'Registro':
				$funcion->Insertar_Comprobante($comprobante);
		        break;    
		    case 'Edicion':        
				$funcion->Editar_Comprobante($id,$comprobante,$estado);
		        break;
		    case 'GetComprobante':        
				$data=$funcion->Listar_Comprobantes();
				echo json_encode($data);                      
		        break;
		    case 'ListarEmpleado':        
				$data=$funcion->Listar_Empleados();
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

	// $funcion = new Comprobante();

	// if(isset($_POST['comprobante'])){
		
	// 	try {

	// 		$proceso = $_POST['proceso'];
	// 		$id = $_POST['id'];
	// 		$comprobante = trim($_POST['comprobante']);
	// 		$estado = trim($_POST['estado']);

	// 		switch($proceso){

	// 		case 'Registro':
	// 			$funcion->Insertar_Comprobante($comprobante);
	// 		break;

	// 		case 'Edicion':
	// 			$funcion->Editar_Comprobante($id,$comprobante,$estado);
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
