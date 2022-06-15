<?php
	require_once"../../model/Parametro_model.php";
	require_once"../../controller/Parametro_controller.php"; 
	$funcion = new Parametro();


// var_dump($_GET['criterio']);



	if (!empty($_GET)){
		$criterio = isset($_GET['criterio']) ? $_GET['criterio'] : '';

		if($criterio == "moneda"){
			$funcion->Ver_Moneda();

		} else if ($criterio =="iva"){
			$funcion->Ver_Impuesto();
		}

	}



if (!empty($_POST))
	{

		$proceso = (isset($_POST['proceso'])) ? $_POST['proceso'] : '';

		$id = (isset($_POST['id'])) ? $_POST['id'] : '';
		$nombre_empresa = (isset($_POST['nombre_empresa'])) ? $_POST['nombre_empresa'] : '';
		$propietario = (isset($_POST['propietario'])) ? $_POST['propietario'] : '';
		$numero_nit = (isset($_POST['numero_nit'])) ? $_POST['numero_nit'] : '';
		$numero_nrc = (isset($_POST['numero_nrc'])) ? $_POST['numero_nrc'] : '';
		$porcentaje_iva = (isset($_POST['porcentaje_iva'])) ? $_POST['porcentaje_iva'] :'';
		$porcentaje_retencion = (isset($_POST['porcentaje_retencion'])) ? $_POST['porcentaje_retencion'] : '';
		$monto_retencion = (isset($_POST['monto_retencion'])) ? $_POST['monto_retencion'] : '';
		$direccion_empresa = (isset($_POST['direccion_empresa'])) ? $_POST['direccion_empresa'] : '';
		$idcurrency = (isset($_POST['idcurrency'])) ? $_POST['idcurrency'] : '';
// var_dump($idcurrency);

		try {


		switch($proceso){
			case 'Registro':
				$funcion->Insertar_Parametro($nombre_empresa,$propietario,$numero_nit,$numero_nrc,$porcentaje_iva,
				$porcentaje_retencion,$monto_retencion,$direccion_empresa,$idcurrency);
			break;

			case 'Edicion':
				$funcion->Editar_Parametro($id,$nombre_empresa,$propietario,$numero_nit,$numero_nrc,$porcentaje_iva,
				$porcentaje_retencion,$monto_retencion,$direccion_empresa,$idcurrency);
			break;

		    case 'getparametros':        
				$data=$funcion->Listar_Parametros();
				echo json_encode($data);                      
		        break;
		    case 'getMoneda':        
				$data=$funcion->Listar_Monedas();
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

	}
?>
