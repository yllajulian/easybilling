<?php

	require_once"../../model/Producto_model.php";
	require_once"../../controller/Producto_controller.php"; 
	$funcion = new Producto();

	$proceso = (isset($_POST['proceso'])) ? $_POST['proceso'] : '';
	$id = (isset($_POST['id'])) ? $_POST['id'] : '';
	$codigo_barra = (isset($_POST['codigo'])) ? $_POST['codigo'] : '';
	$nombre_producto = (isset($_POST['nombre_producto'])) ? $_POST['nombre_producto'] : '';
	$precio_compra = (isset($_POST['precio_compra'])) ? $_POST['precio_compra'] : '';
	$precio_venta = (isset($_POST['precio_venta'])) ? $_POST['precio_venta'] : '';
	$precio_venta_mayoreo = (isset($_POST['precio_venta_mayoreo'])) ? $_POST['precio_venta_mayoreo'] : '';
	$stock = (isset($_POST['stock'])) ? $_POST['stock'] : '';
	$stock_min = (isset($_POST['stock_min'])) ? $_POST['stock_min'] : '';
	$idcategoria = (isset($_POST['idcategoria'])) ? $_POST['idcategoria'] : '';
	$idmarca = (isset($_POST['idmarca'])) ? $_POST['idmarca'] : '';
	$idpresentacion = (isset($_POST['idpresentacion'])) ? $_POST['idpresentacion'] : '';
	$estado = (isset($_POST['estado'])) ? $_POST['estado'] : '';
	$exento = (isset($_POST['exento'])) ? $_POST['exento'] : '';
	$inventariable = (isset($_POST['inventariable'])) ? $_POST['inventariable'] : '';
	$perecedero = 0;


		try {

		switch($proceso){
			case 'Registro':
				$funcion->Insertar_Producto($codigo_barra,$nombre_producto,$precio_compra,$precio_venta,
				$precio_venta_mayoreo,$stock,$stock_min,
				$idcategoria,$idmarca,$idpresentacion,$exento,$inventariable,$perecedero);
			break;

			case 'Edicion':
				$funcion->Editar_Producto($id,$codigo_barra, $nombre_producto, $precio_compra, $precio_venta, $precio_venta_mayoreo,
					$stock_min, $idcategoria, $idmarca, $idpresentacion, $estado, $exento, $inventariable, $perecedero);
			break;

		  	case 'ListarProducto':
					// almacenar petición ( es decir , obtener / post) array global a una variable
					$requestData= $_REQUEST;
					// var_dump($requestData);

					$columns = array( 
					// índice de columna tabla de datos = > nombre de la columna de base de datos
					    0 => 'idproducto', 
					    1 => 'nombre_producto',

					);

					$tabla ="view_productos";
					$where = " ";
					$orderBy =" ORDER BY idproducto ASC";

					//Obtener el total de registros sin ninguna búsqueda
					$respuesta = $funcion->Listar_Productos_SS($tabla,$where,$orderBy);
					$totalData = count($respuesta);
					// var_dump($totalData);

					//Cuando no hay un parámetro de búsqueda el número total de 
					//registros filtrados es igual al total de registros.
					$totalFiltered = $totalData;

					//$where = " WHERE 1=1 AND disponible = 'Si'";
					$where = " WHERE 1=1";

					//Si hay un parámetro de búsqueda , $RequestData [ 'search '] [ ' valor '] 
					//contiene parámetros de búsqueda.
					if( !empty($requestData['search']['value']) ) {  
					    $where.=" AND ( idproducto LIKE '%".$requestData['search']['value']."%' ";    
					    $where.=" OR nombre_producto LIKE '%".$requestData['search']['value']."%')";
					}

					//Obtener el total de registros con parámetros.
					$respuesta = $funcion->Listar_Productos_SS($tabla,$where,$orderBy);
					
					//Cuando hay un parámetro de búsqueda, tenemos que
					//modificar el total de filas filtradas.
					$totalFiltered = count($respuesta);

					$orderBy=" ORDER BY ". $columns[$requestData['order'][0]['column']]." ".$requestData['order'][0]['dir']."  LIMIT ".$requestData['start']." ,".$requestData['length']."   ";
				// var_dump($orderBy);
					//Obtener el total de registros con parámetros.
					//con el orden y filtro especificados.
					$respuesta = $funcion->Listar_Productos_SS($tabla,$where,$orderBy);
				// var_dump($respuesta);
					$data = array();

					if (count($respuesta) > 0){
						foreach ($respuesta as $row => $item){
					        // Obtener codigo de barra si no existe caso contrario Codigo interno 
							if ($item['codigo_barra']== ""){$idproducto =$item['codigo_interno'];}else{$idproducto = $item['codigo_barra'];};

						if ($item['inventariable']== 1) {

						    if ($item['stock'] >= 1 && $item['stock'] <=  $item['stock_min']) {
						        $stock_print ='<span class="badge rounded-pill bg-warning position-relative"> POR AGOTARSE
						                  <span class="position-absolute top-0 center-100 translate-middle badge rounded-pill bg-info">
						                    '.$item['stock'].'</span></span>';
						    }
						     else if ($item['stock'] > $item['stock_min']) {
						        $stock_print = '<span class="text-center">'.$item['stock'] .' </span>';
						    } else if ($item['stock'] == 0) {
						        $stock_print = '<h5><span class="badge bg-danger">AGOTADO</span></h5>  ';
						    }
						} else {
						        $stock_print = '<h6><span class="badge rounded-pill bg-primary">SERVICIO</span></h6>';
						};
				                // $opccion='<div class="btn-group dropleft">
				                //             <button type="button" class="btn btn-success btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
				                //               <i class="fas fa-align-justify"></i>
				                //             </button>
				                //             <ul class="dropdown-menu table-witch ">
				                //             <button class="dropdown-item btn btn-success" onclick="openProducto('
						              //           ."'"."editar"."',"
						              //           ."'".$item['idproducto']."',"
						              //           ."'".$item['codigo_interno']."',"
						              //           ."'".$item['nombre_producto']."',"
						              //           ."'".$item['precio_compra']."',"
						              //           ."'".$item['precio_venta']."',"
						              //           ."'".$item['precio_venta_mayoreo']."',"
						              //           ."'".$item['stock']."',"
						              //           ."'".$item['stock_min']."',"
						              //           ."'".$item['idcategoria']."',"
						              //           ."'".$item['idmarca']."',"
						              //           ."'".$item['idpresentacion']."',"
						              //           ."'".$item['estado']."',"
						              //           ."'".$item['exento']."',"
						              //           ."'".$item['inventariable']."'".
				                //             ')"><span class="fa fa-edit"></span> Modificar</button>

				                //             <button class="dropdown-item btn btn-danger" 
						//						onclick="openProducto('
				                //          	."'"."ver"."',"
				                //             ."'".$item['idproducto']."',"
				                //             ."'".$item['codigo_interno']."',"
				                //             ."'".$item['nombre_producto']."',"
				                //             ."'".$item['precio_compra']."',"
				                //             ."'".$item['precio_venta']."',"
				                //             ."'".$item['precio_venta_mayoreo']."',"
				                //             ."'".$item['stock']."',"
				                //             ."'".$item['stock_min']."',"
				                //             ."'".$item['idcategoria']."',"
				                //             ."'".$item['idmarca']."',"
				                //             ."'".$item['idpresentacion']."',"
				                //             ."'".$item['estado']."',"
				                //             ."'".$item['exento']."',"
				                //             ."'".$item['inventariable']."'".
				                //             ')"
						//><span class="fa fa-eye"></span> Ver</button>
				                //             </ul>
				                //           </div>';

						$opccion='<button class="btn bg-twitter btn-sm btn-animate" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Editar"
									onclick="openProducto('
				                         	."'"."editar"."',"
				                            ."'".$item['idproducto']."',"
				                            ."'".$item['codigo_interno']."',"
				                            ."'".$item['nombre_producto']."',"
				                            ."'".$item['precio_compra']."',"
				                            ."'".$item['precio_venta']."',"
				                            ."'".$item['precio_venta_mayoreo']."',"
				                            ."'".$item['stock']."',"
				                            ."'".$item['stock_min']."',"
				                            ."'".$item['idcategoria']."',"
				                            ."'".$item['idmarca']."',"
				                            ."'".$item['idpresentacion']."',"
				                            ."'".$item['estado']."',"
				                            ."'".$item['exento']."',"
				                            ."'".$item['inventariable']."'".
				                            ')"

								><span class="fa fa-edit text-white"></span>
						</button>
						<button class="btn bg-google-plus btn-animate btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="ver" 
									onclick="openProducto('
				                         	."'"."ver"."',"
				                            ."'".$item['idproducto']."',"
				                            ."'".$item['codigo_interno']."',"
				                            ."'".$item['nombre_producto']."',"
				                            ."'".$item['precio_compra']."',"
				                            ."'".$item['precio_venta']."',"
				                            ."'".$item['precio_venta_mayoreo']."',"
				                            ."'".$item['stock']."',"
				                            ."'".$item['stock_min']."',"
				                            ."'".$item['idcategoria']."',"
				                            ."'".$item['idmarca']."',"
				                            ."'".$item['idpresentacion']."',"
				                            ."'".$item['estado']."',"
				                            ."'".$item['exento']."',"
				                            ."'".$item['inventariable']."'".
				                            ')"


						>
						  <span class="fa fa-eye text-white"></span>
						</button>
						<button class="btn bg-facebook  btn-sm btn-animate" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Codigo de Barra">
						  <span class="fa fa-barcode text-dark"></span>
						</button>';
					        $nestedData=array();
					        $nestedData[] =	$idproducto;
					        $nestedData[] = $item['nombre_producto'];
					        $nestedData[] = $item['nombre_marca'];
					        $nestedData[] = $item['nombre_presentacion'];
					        $nestedData[] = $item['stock_min'];
					        $nestedData[] = $stock_print;
					        $nestedData[] = $item['precio_compra'];
					        $nestedData[] = $item['precio_venta'];
					        $nestedData[] = $opccion;

					        $data[] = $nestedData;
					    }
					}

					$json_data = array(
					    "draw"            => intval( $requestData['draw'] ),   
					    "recordsTotal"    => intval( $totalData ),  
					    "recordsFiltered" => intval( $totalFiltered ), 
					    "data"            => $data   
					    );

					echo json_encode($json_data);//envio el array final el formato json a AJAX

		    break;

		    case 'ListarCategoria':        
				$data=$funcion->Listar_Categorias();
			      print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
		    break;

		    case 'ListarMarca':        
				$data=$funcion->Listar_Marcas();
			      print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
		    break;
		    case 'ListarPresentacion':        
				$data=$funcion->Listar_Presentaciones();
			      print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
		    break;

			default:
				$data = "Error Proceso";
				print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX

			break;
		}

		} catch (Exception $e) {
			
			$data = "Error";
			print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
		}

?>
