<?php

include('database.php');

if (isset($_POST['id'])) {
	$query = "SELECT * FROM estudiante WHERE id = ".$_POST['id'];
	$resultado = mysqli_query($conexion, $query);
	if(!$resultado){
		die('sentencia ha fallado'. mysqli_error($connection));
	}
	
	$json = array();
  	while($row = mysqli_fetch_array($resultado)) {
    	$json[] = array(
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
  $jsonstring = json_encode($json[0]);
  echo $jsonstring;
}

?>