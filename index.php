<?php



	//session_start();
	 require_once"config/app.conf.php";
	 date_default_timezone_set('America/Lima');

        require_once"model/Login_model.php";
        require_once"controller/Login_controller.php"; 
       
		$Login = new Login();
                // if (!empty($conf[$view]["layout"])){
                //         echo ($conf[$view]["file"]);
                //    } 

		#Si NO EXISTE SESION LO MANDO A LOGIN
	    if(!isset($_SESSION['user_id'])){

			if (empty($_GET["View"])){
	 		$view = DEFAULT_VIEW;	
			}
			elseif ($_GET["View"]==="Login") {

	 		$view = DEFAULT_VIEW;	
			}elseif($_GET["View"]==="Logout"){

	 		$view = DEFAULT_LOGOUT;	
			}else{
			$view = DEFAULT_VIEW;	 
			}

	    } else if (!empty($_GET["View"]) && isset($_SESSION['user_id'])){
				  //Si  existe vista pone la que viene en GET - ?view=Algo
			$view = $_GET["View"];

			$usuario = $_SESSION['user_name'];
			$tipo_usuario = $_SESSION['user_tipo'];
			$nombre_empleado =  $_SESSION['user_empleado'];

		}  else if(empty($_GET["View"]) && isset($_SESSION['user_id'])) {
		   //poner por defecto Home
		    $view = "Inicio";
			$usuario = $_SESSION['user_name'];
			$tipo_usuario = $_SESSION['user_tipo'];
			$nombre_empleado =  $_SESSION['user_empleado'];
		}

		if (empty($conf[$view]))
		{
		  //Si es vacia poner error no existe hacela en la vista y no existe hacela en la vista y agrega a config

			
		  $view = "error_404"; //asi debes configurarlo en el app.conf.php error_404== nombre en el conf

		}

		if (empty($conf[$view]["layout"]))
		{





		  //Si no tiene layout agregar el por defecto
		$conf[$view]["layout"] = DEFAULT_LAYOUT;


		}

		 $pathLayout = PATH_LAYOUT."/".$conf[$view]["layout"];// cargo el layou
  		 $pathView = PATH_VIEW."/".$conf[$view]["file"]; // busco la vista almacenada en conf
		require_once($pathLayout); // agrego el layout encontrado y dentro del el busco la vista correspondiente en
		//este proceso












 ?>


