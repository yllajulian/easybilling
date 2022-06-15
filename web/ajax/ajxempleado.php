<?php 
	require_once"../../model/Empleado_model.php";
	require_once"../../controller/Empleado_controller.php"; 
	$funcion = new Empleado();




$proceso = (isset($_POST['proceso'])) ? $_POST['proceso'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';
$nombre_empleado = (isset($_POST['nombre_empleado'])) ? $_POST['nombre_empleado'] : '';
$apellido_empleado = (isset($_POST['apellido_empleado'])) ? $_POST['apellido_empleado'] : '';
$telefono_empleado = (isset($_POST['telefono_empleado'])) ? $_POST['telefono_empleado'] : '';
$email_empleado = (isset($_POST['email_empleado'])) ? $_POST['email_empleado'] : '';
$estado = (isset($_POST['estado'])) ? $_POST['estado'] : '';


		try {


		switch($proceso){
		    case 'Registro':
				$funcion->Insertar_Empleado($nombre_empleado, $apellido_empleado, $telefono_empleado,$email_empleado);
		        break;    
		    case 'Edicion':        
				$funcion->Editar_Empleado( $id, $nombre_empleado, $apellido_empleado,  $telefono_empleado,$email_empleado, $estado);
		        break;
		    case 'Listar':        
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


?>
