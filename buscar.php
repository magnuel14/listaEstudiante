<?php
	include('database.php');
	$search = $_POST['search'];
	
		if(!empty($search)) {

			$query = "SELECT * from estudiante WHERE apellido LIKE '$search%'";
			$result = mysqli_query($conexion,$query);
			if(!$result){
				die('Query con problemas'.mysqli_error($conexion));
			}
	
		
	}
	$json = array();
	while ($row = mysqli_fetch_array($result)) {
		$json[]= array(
			'nombre' => $row['nombre'],
		'apellido' => $row['apellido'],
      	'cedula' => $row['cedula'],
		'materia' => $row['materia'],
		'nota1' => $row['nota1'],
		'nota2' => $row['nota2'],
		'nota3' => $row['nota3'],
		'suma' => $row['suma'],
		'promedio' => $row['promedio'],

      	'id' => $row['id']
		);
	}
	$jsonstring = json_encode($json);
	echo $jsonstring;
?>
