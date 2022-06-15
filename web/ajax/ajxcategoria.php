<?php 
	require_once"../../model/Categoria_model.php";
	require_once"../../controller/Categoria_controller.php"; 

	$funcion = new Categoria();
	$proceso = (isset($_POST['proceso'])) ? $_POST['proceso'] : '';
	$id = (isset($_POST['id'])) ? $_POST['id'] : '';
	$categoria = (isset($_POST['categoria'])) ? $_POST['categoria'] : '';
	$estado = (isset($_POST['estado'])) ? $_POST['estado'] : '';


		try {


		switch($proceso){
		    case 'Registro':
				$funcion->Insertar_Categoria($categoria);
		        break;    
		    case 'Edicion':        
				$funcion->Editar_Categoria($id,$categoria,$estado);
		        break;
		    case 'ListarCategoria':        
				$data=$funcion->Listar_categorias();
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
