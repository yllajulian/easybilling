<?php

 // class Conexion{
 //     public static function Conectar(){
 //         define('servidor','localhost');
 //         define('nombre_bd','bd_maxis');
 //         define('usuario','root');
 //         define('password','');         
 //         $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');
         
 //         try{
 //            $conexion = new PDO("mysql:host=".servidor.";dbname=".nombre_bd, usuario, password, $opciones);             
 //            return $conexion; 
 //         }catch (Exception $e){
 //             die("El error de Conexión es :".$e->getMessage());
 //         }         
 //     }
     
 // }
include_once 'datosConexion.php';
class Conexion{   
    public static function Conectar() {              
        $opciones = array(
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
            PDO::MYSQL_ATTR_DIRECT_QUERY => false,
            PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION
        );          
        try{
            $conexion = new PDO("mysql:host=".SERVIDOR.";dbname=".BD,USUARIO,PASS,$opciones);
            return $conexion;                      
        }catch (Exception $e){
            die("El error de Conexión es: ". $e->getMessage());
        }
    }
}









    // class Conexion {

    //     public static function Conectar(){


    //         $driver = 'mysql'; //mysql no cambiar
    //         $host = 'localhost'; //localhost
    //         $dbname = 'easy-system'; //bdd
    //         $username ='root'; //usuario
    //         $passwd = ''; //contra




    //         $server=$driver.':host='.$host.';dbname='.$dbname;

    //         try {

    //             $conexion = new PDO($server,$username,$passwd);
    //             // $conexion = exec("SET CHARACTER SET utf8");
    //             $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //         } catch (Exception $e) {

    //             $conexion = null;
    //             echo '<span class="label label-danger label-block">ERROR AL CONECTARSE A LA BASE DE DATOS, PRESIONE F5</span>';
    //             exit();
    //         }


    //         return $conexion;

    //     }

    // }

















 ?>

