<?php

	require_once('Conexion.php');

	class DashboardModel extends Conexion
	{

		public static function Ver_Moneda_Reporte(){

			$dbconec = Conexion::Conectar();

			try {
				$query = "CALL sp_view_money()";
				$stmt = $dbconec->prepare($query);
				$stmt->execute();
				$count = $stmt->rowCount();

				if($count > 0)
				{
					return $stmt->fetchAll(PDO::FETCH_ASSOC);
				}


				$dbconec = null;

			} catch (Exception $e) {

				echo "Error al cargar el listado";
			}

		}
		
		public static function Datos_Paneles()
		{
			$dbconec = Conexion::Conectar();

			try
			{
				$query = "CALL sp_panel_dashboard();";
				$stmt = $dbconec->prepare($query);
				$stmt->execute();
				$count = $stmt->rowCount();

				if($count > 0)
				{
					return $stmt->fetchAll(PDO::FETCH_ASSOC);
				}


				$dbconec = null;
			} catch (Exception $e) {

				echo '<span class="label label-danger label-block">ERROR AL CARGAR LOS DATOS, PRESIONE F5</span>';
			}
		}

		public static function Compras_Anuales()
		{
			$dbconec = Conexion::Conectar();

			try
			{
				$query = "CALL sp_compras_anual();";
				$stmt = $dbconec->prepare($query);
				$stmt->execute();
				$count = $stmt->rowCount();

				if($count > 0)
				{
					return $stmt->fetchAll(PDO::FETCH_ASSOC);
				}

				$dbconec = null;
			} catch (Exception $e) {
				//echo $e;
				echo '<span class="label label-danger label-block">ERROR AL CARGAR LOS DATOS, PRESIONE F5</span>';
			}
		}

		public static function Ventas_Anuales()
		{
			$dbconec = Conexion::Conectar();

			try
			{
				$query = "CALL sp_ventas_anual();";
				$stmt = $dbconec->prepare($query);
				$stmt->execute();
				$count = $stmt->rowCount();

				if($count > 0)
				{
					return $stmt->fetchAll(PDO::FETCH_ASSOC);
				}

				$dbconec = null;
			} catch (Exception $e) {
				//echo $e;
				echo '<span class="label label-danger label-block">ERROR AL CARGAR LOS DATOS, PRESIONE F5</span>';
			}
		}


	}

?>
