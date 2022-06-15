<?php

	require_once "../../controller/Cliente_controller.php";
	require_once "../../model/Cliente_model.php";

	$funcion = new Cliente();

		// $proceso = (isset($_POST['proceso'])) ? $_POST['proceso'] : '';
		$id = (isset($_POST['id'])) ? $_POST['id'] : '';
		$nombre_cliente = (isset($_POST['nombre_cliente'])) ? $_POST['nombre_cliente'] : '';
		$numero_telefono = (isset($_POST['numero_telefono'])) ? $_POST['numero_telefono'] : '';
		$numero_nit = (isset($_POST['numero_nit'])) ? $_POST['numero_nit'] : '';
		$numero_nrc = (isset($_POST['numero_nrc'])) ? $_POST['numero_nrc'] : '';
		$email = (isset($_POST['email'])) ? $_POST['email'] : '';
		$giro = (isset($_POST['giro'])) ? $_POST['giro'] : '';
		$estado = (isset($_POST['estado'])) ? $_POST['estado'] : '';
		$direccion = (isset($_POST['direccion'])) ? $_POST['direccion'] : '';
		$limite_credito = (isset($_POST['limite_credito'])) ? $_POST['limite_credito'] : '';

		$proceso="Listar";

		try {
 
			switch($proceso){
				case 'Listar':
				$data=$funcion->Listar_Clientes();
				// var_dump($data);

			// // $items = [];
			// foreach($data as $column) {

   //    			$estado=$column["estado"]==1?'<span class=" btn-success btn-sm p-1"><span class="text-bold">ACTIVO</span></span>': '<span class=" btn-secondary btn-sm p-1"><span class="text-bold">INACTIVO</span></span>'; 


   //    			$dniruc=$column["numero_nrc"]!=''?$column["numero_nrc"]:$column["numero_nit"];



			//     $items[] = [ 

			//         'codigo_cliente'=> $column["codigo_cliente"],
			//         'nombre_cliente'=> $column["nombre_cliente"],
			//         'numero_nrc'=> $dniruc,
			//         'direccion_cliente'=> $column["direccion_cliente"],
			//         'numero_telefono'=> $column["numero_telefono"],
			//         'estado' => $estado,

			//     ];
			//  }

			echo json_encode($data);
						



				// print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
				break;

			case 'Registro':
				$funcion->Insertar_Cliente($nombre_cliente,$numero_nit,$numero_nrc,$direccion,
				$numero_telefono,$email,$giro,$limite_credito);
			break;

			case 'Edicion':
				$funcion->Editar_Cliente($id,$nombre_cliente,$numero_nit,$numero_nrc,$direccion,
				$numero_telefono,$email,$giro,$limite_credito,$estado);
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




		 // public  static function Autocomplete_Producto($search){

			// try {

			// $sugg_json = array();    // this is for displaying json data as a autosearch suggestion
			// $json_row = array();     // this is for stroring mysql results in json string

			// $keyword = preg_replace('/\s+/', ' ', $search); // it will replace multiple spaces from the input.

			// $query = "CALL sp_search_producto(:search)";
			// $stmt = Conexion::Conectar()->prepare($query);
			// $stmt->bindParam(":search", $keyword);
			// $stmt->execute();

			// if ($stmt->rowCount() > 0){

			// while($recResult = $stmt->fetch(PDO::FETCH_ASSOC)) {

			// 	$json_row["value"] = $recResult['idproducto'];
			// 	$json_row["label"] = $recResult['codigo_barra'].' - '.$recResult['nombre_producto'];
			// 	$json_row["producto"] = $recResult['nombre_producto'];
			// 	$json_row["precio_compra"] = $recResult['precio_compra'];
			// 	$json_row["exento"] = $recResult['exento'];
			// 	$json_row["perecedero"] = $recResult['perecedero'];
			// 	$json_row["datos"] = $recResult['nombre_marca'].' - '.$recResult['siglas'];

			// 	array_push($sugg_json, $json_row);
			// }

			// } else {

			// 	$json_row["value"] = "";
			// 	$json_row["label"] = "";
			// 	$json_row["datos"] = "";
			// 	array_push($sugg_json, $json_row);
			// }


			//  $jsonOutput = json_encode($sugg_json, JSON_UNESCAPED_SLASHES);
 		// 	 print $jsonOutput;


			// } catch (Exception $e) {

			// 	echo "Error al cargar el listado";
			// }

		 //  }























?>
