<?php

    require_once "../../controller/Proveedor_controller.php";
    require_once "../../model/Proveedor_model.php";

    $funcion = new Proveedor();
        try {
            $proceso = (isset($_POST['proceso'])) ? $_POST['proceso'] : '';
            $id = (isset($_POST['id'])) ? $_POST['id'] : '';
            $nombre_proveedor = (isset($_POST['nombre_proveedor'])) ? $_POST['nombre_proveedor'] : '';
            $numero_telefono = (isset($_POST['numero_telefono'])) ? $_POST['numero_telefono'] : '';
            $numero_nit = (isset($_POST['numero_nit'])) ? $_POST['numero_nit'] : '';
            $numero_nrc = (isset($_POST['numero_nrc'])) ? $_POST['numero_nrc'] : '';
            $nombre_contacto = (isset($_POST['nombre_contacto'])) ? $_POST['nombre_contacto'] : '';
            $telefono_contacto = (isset($_POST['telefono_contacto'])) ? $_POST['telefono_contacto'] : '';
            $estado = (isset($_POST['estado'])) ? $_POST['estado'] : '';


            switch($proceso){
                case 'Listar':
                $data=$funcion->Listar_Proveedores();
                print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
                break;

            case 'Registro':
                $funcion->Insertar_Proveedor($nombre_proveedor, $numero_telefono, $numero_nit, $numero_nrc,
                $nombre_contacto, $telefono_contacto);
            break;
            case 'Edicion':
                $funcion->Editar_Proveedor($id,$nombre_proveedor, $numero_telefono, $numero_nit, $numero_nrc,
                $nombre_contacto, $telefono_contacto,$estado);
            break;
            default:
                $data = "Error en el proceso";
                print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
            break;
        }

        } catch (Exception $e) {
            $data = "Error";
            print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
        }



?>
