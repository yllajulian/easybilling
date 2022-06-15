<?php 
 
	require_once"../../model/Usuario_model.php";
	require_once"../../controller/Usuario_controller.php"; 

	$funcion = new Usuario();

	$proceso = (isset($_POST['proceso'])) ? $_POST['proceso'] : '';
	$id = (isset($_POST['id'])) ? $_POST['id'] : '';
	$usuario = (isset($_POST['usuario'])) ? $_POST['usuario'] : '';
	$contrasena = (isset($_POST['contrasena'])) ? $_POST['contrasena'] : '';
	$tipo_usuario = (isset($_POST['tipo_usuario'])) ? $_POST['tipo_usuario'] : '';
	$idempleado = (isset($_POST['idempleado'])) ? $_POST['idempleado'] : '';
	$estado = (isset($_POST['estado'])) ? $_POST['estado'] : '';

		

		try {


		switch($proceso){
		    case 'Registro':
				$funcion->Insertar_Usuario($usuario,$contrasena,$tipo_usuario,$idempleado);
		        break;    
		    case 'Edicion':        
				$funcion->Editar_Usuario($id,$usuario,$contrasena,$tipo_usuario,$estado,$idempleado);
		        break;
		    case 'ListarUsuario':        
				$data=$funcion->Listar_Usuarios();
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

?>
