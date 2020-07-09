<?php
	include('database.php');
	if (isset($_POST['nombre'])) {
		$nombre = $_POST['nombre'];
		$apellido = $_POST['apellido'];
		$cedula = $_POST['cedula'];
		$materia = $_POST['materia'];
		$nota1 = $_POST['nota1'];
		$nota2 = $_POST['nota2'];
		$nota3 = $_POST['nota3'];
		$suma = $_POST['suma'];
		$promedio = $_POST['promedio'];


		$query = "INSERT INTO estudiante(nombre, apellido,cedula,materia,nota1,nota2,nota3,suma, promedio) 
		values ('$nombre', '$apellido','$cedula','$materia','$nota1','$nota2','$nota3','$suma','$promedio')";
		$resultado = mysqli_query($conexion, $query);

		if(!$resultado){
			die('sentencia ha fallado');
		}
		echo "Se registró correctamente";
	}
?>