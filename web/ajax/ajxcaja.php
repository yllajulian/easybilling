<?php 

    require_once"../../model/Caja_model.php";
    require_once"../../controller/Caja_controller.php"; 

    require_once"../../model/Parametro_model.php";
    require_once"../../controller/Parametro_controller.php"; 


	$objCaja = new Caja();
  	$objParametro = new Parametro();


	$proceso = (isset($_POST['proceso'])) ? $_POST['proceso'] : '';
	$id = (isset($_POST['id'])) ? $_POST['id'] : '';
	$monto = (isset($_POST['monto'])) ? $_POST['monto'] : '';
	$cantidad = (isset($_POST['cantidad'])) ? $_POST['cantidad'] : '';
	$descripcion = (isset($_POST['descripcion'])) ? $_POST['descripcion'] : '';
	$fecha1 = (isset($_POST['fecha1'])) ? $_POST['fecha1'] : '';
	$fecha2 = (isset($_POST['fecha2'])) ? $_POST['fecha2'] : '';

     // $proceso='consultarhcaja';
     // $fecha1='2021/05/10';
     // $fecha2='2021/10/02';


		try {

		switch($proceso){
			case 'getdata':
				$data=$objCaja->Listar_Datos();
				print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX 	
			break;

			case 'getmovimiento':
				$data=$objCaja->Listar_Movimientos();
				print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX 	
			break;

			case 'getmoneda':
				$data=$objParametro->Ver_Moneda_Simbolo();
				print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX 	
			break;
			case 'getingreso':
				$data=$objCaja->Listar_Ingresos();
				print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX 	
			break;
			case 'getdevoluciones':
				$data=$objCaja->Listar_Devoluciones();
				print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX 	
			break;
			case 'getprestamos':
				$data=$objCaja->Listar_Prestamos();
				print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX 	
			break;
			case 'getgastos':
				$data=$objCaja->Listar_Gastos();
				print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX 	
			break;
			case 'gethcaja':
				$data=$objCaja->Listar_Historico($fecha1 ,$fecha2);
				print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX 	
			break;
			case 'Validar':
				$objCaja->Validar_Caja();
			break;

			case 'Abrir':
				$objCaja->Abrir_Caja($cantidad);
			break;

			case 'Update':
				$objCaja->Update_Caja($cantidad);
			break;

			case 'Cerrar':
				$objCaja->Cerrar_Caja($cantidad);
			break;

			case 'Cerrar-M':
				$objCaja->Cerrar_Caja_Manual($id);
			break;

			case 'Devolucion':
				$objCaja->Insertar_Movimiento(2,$monto,$descripcion);
			break;

			case 'Prestamo':
				$objCaja->Insertar_Movimiento(3,$monto,$descripcion);
			break;

			case 'Gasto':
				$objCaja->Insertar_Movimiento(4,$monto,$descripcion);
			break;

			default:
				$data = "Error";
				print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX 	
			break;
		}
			
		} catch (Exception $e) {
			$data = "Error";
 	   		
		}

?>
