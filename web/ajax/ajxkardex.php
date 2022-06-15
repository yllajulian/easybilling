<?php 
 
		require_once"../../model/Inventario_model.php";
		require_once"../../controller/Inventario_controller.php"; 

		require_once"../../model/Producto_model.php";
		require_once"../../controller/Producto_controller.php"; 

		$funcion = new Inventario();
		$funcionP = new Producto();

			//$proceso = $_POST['proceso'];
			// $producto = trim($_POST['producto']);
			// $motivo = trim($_POST['motivo']);
			// $cantidad = trim($_POST['cantidad']);
			$proceso = (isset($_POST['proceso'])) ? $_POST['proceso'] : '';
			$producto = (isset($_POST['producto'])) ? $_POST['producto'] : '';
			$motivo = (isset($_POST['motivo'])) ? $_POST['motivo'] : '';
			$cantidad = (isset($_POST['cantidad'])) ? $_POST['cantidad'] : '';
			// $id = (isset($_POST['id'])) ? $_POST['id'] : '';
			// $marca = (isset($_POST['marca'])) ? $_POST['marca'] : '';
			// $estado = (isset($_POST['estado'])) ? $_POST['estado'] : '';	
			$mes = (isset($_POST['mes'])) ? $_POST['mes'] : '';
			// $mes='':

		try {

 

			switch($proceso){

			case 'Entrada':
				$funcion->Insertar_Entrada($motivo,$cantidad,$producto);
			break;

			case 'Salida':
				$funcion->Insertar_Salida($motivo,$cantidad,$producto);
			break;

			case 'Get_Kardex':
				$data=$funcion->Listar_Kardex($mes);
 	   		 	echo json_encode($data);
			break;

			case 'Get_Producto':
				$data=$funcionP->Listar_Productos();
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


