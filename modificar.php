<?php
	include('database.php');
	if (isset($_POST['id'])) {
		$nombre = $_POST['nombre'];
		$apellido = $_POST['apellido'];
		$cedula = $_POST['cedula'];
		$materia = $_POST['materia'];
		$nota1 = $_POST['nota1'];
		$nota2 = $_POST['nota2'];
		$nota3 = $_POST['nota3'];
		$suma = $_POST['suma'];
		$promedio = $_POST['promedio'];

		$id = $_POST['id'];
		$query = "UPDATE estudiante SET nombre = '$nombre',apellido = '$apellido',cedula = '$cedula'
		,materia = '$materia',nota1 = '$nota1',nota2 = '$nota2',nota3 = '$nota3',suma = '$suma',promedio = '$promedio'
		WHERE id = '$id'";
		$resultado = mysqli_query($conexion, $query);

		if(!$resultado){
			die('sentencia ha fallado');
		}
		echo "Se Actualizó correctamente";
	}
?>