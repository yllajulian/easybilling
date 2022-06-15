<?php 
 
	require_once"../../model/Moneda_model.php";
	require_once"../../controller/Moneda_controller.php"; 

	$funcion = new Moneda();
	$proceso = (isset($_POST['proceso'])) ? $_POST['proceso'] : '';
	$id = (isset($_POST['id'])) ? $_POST['id'] : '';


	$CurrencyISO = (isset($_POST['CurrencyISO'])) ? $_POST['CurrencyISO'] : '';
	$Language = (isset($_POST['Language'])) ? $_POST['Language'] : '';
	$CurrencyName = (isset($_POST['CurrencyName'])) ? $_POST['CurrencyName'] : '';
	$Money = (isset($_POST['Money'])) ? $_POST['Money'] : '';
	$Symbol = (isset($_POST['Symbol'])) ? $_POST['Symbol'] : '';

		
	
		try {

			switch($proceso){

			case 'Registro':
				$funcion->Insertar_Moneda($CurrencyISO, $Language, $CurrencyName, $Money, $Symbol);
			break;

			case 'Edicion':
				$funcion->Editar_Moneda($id,$CurrencyISO, $Language, $CurrencyName, $Money, $Symbol);
			break;

		    case 'ListarMoneda':        
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


	
	

  	

?>
