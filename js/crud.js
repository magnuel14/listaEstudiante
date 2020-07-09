$(document).ready(function () {
	
	obtenerTareas();


	
	let modificar = false;
	function obtenerTareas() {
		$.ajax({
			url: 'listar.php',
			type: "GET",
			success: function (response) {
				let estudiantes = JSON.parse(response);
				let template = '';
				estudiantes.forEach(estudiante => {
					template += `
					<tr estudianteId="${estudiante.id}">
						<td>${estudiante.id}</td>
						<td>
						${estudiante.apellido}&nbsp;${estudiante.nombre} 
						</td>
						<td>${estudiante.cedula}</td>
						<td>${estudiante.materia}</td>
						<td id="ca1">${estudiante.nota1}</td>
						<td id="ca2">${estudiante.nota2}</td>
						<td id="ca3">${estudiante.nota3}</td>
						<td>${estudiante.suma}</td>
						<td>${estudiante.promedio}</td>

						<td>
						<a href="#" class="usuario-item btn btn-success">Modificar </a>
						<a href="#" style="font-size: 9px;"  class="usuario-delete btn btn-danger ">Eliminar</a>
						</td>
					
					</tr>
					`
				}); // termina el for
				$('#estudiantes').html(template);
			}
		});
	}
	

	$('#formulario').submit(e => {
		const datos = {
			nombre: $('#nombre').val(),
			apellido: $('#apellido').val(),
			cedula: $('#cedula').val(),
			materia: $('#materia').val(),
			nota1: $('#nota1').val(),
			nota2: $('#nota2').val(),
			nota3: $('#nota3').val(),
			suma: $('#suma').val(),
			promedio: $('#promedio').val(),

			id: $('#estudianteId').val(),
		};

		const url = modificar === false ? 'insertar.php' : 'modificar.php';

		$.post(url, datos, (response) => {
			obtenerTareas();
		});
	});
	$(document).on('click', '.usuario-item', (e) => {
		const elemento = $(this)[0].activeElement.parentElement.parentElement;
		const id = $(elemento).attr('estudianteId');
		console.log(id);
		$.post('getTarea.php', { id }, (response) => {
			console.log(response);
			const estudiante = JSON.parse(response);

			$('#nombre').val(estudiante.nombre);
			$('#apellido').val(estudiante.apellido);
			$('#cedula').val(estudiante.cedula);
			$('#materia').val(estudiante.materia);
			$('#nota1').val(estudiante.nota1);
			$('#nota2').val(estudiante.nota2);
			$('#nota3').val(estudiante.nota3);
			$('#suma').val(estudiante.suma);
			$('#promedio').val(estudiante.promedio);

			

			$('#estudianteId').val(estudiante.id);
			modificar = true;
		});
	});


	$(document).on('click', '.usuario-delete', (e) => {
		if (confirm('Desea eliminar al Usario')) {
			const elemento = $(this)[0].activeElement.parentElement.parentElement;
			const id = $(elemento).attr('estudianteId');
			$.post('eliminar.php', { id }, (response) => {
				obtenerTareas();
			});
		}
	});
	$('#search').keyup(function () {
		if ($('#search').val()) {
			let search = $('#search').val();
			$.ajax({
				url: 'buscar.php',
				data: { search },
				type: 'POST',
				success: function (response) {
					let estudiantes = JSON.parse(response);
					let template = '';
					estudiantes.forEach(estudiante => {
						template += `
					<tr estudianteId="${estudiante.id}">
						<td>${estudiante.id}</td>
						<td>
						${estudiante.apellido}&nbsp;${estudiante.nombre} 
						</td>
						<td>${estudiante.cedula}</td>
						<td>${estudiante.materia}</td>
						<td id="ca1">${estudiante.nota1}</td>
						<td id="ca2">${estudiante.nota2}</td>
						<td id="ca3">${estudiante.nota3}</td>
						<td>${estudiante.suma}</td>
						<td>${estudiante.promedio}</td>

					
					
					</tr>
					`
				}); // termina el for
				$('#container1').html(template);
				}
			});
		}
	});


});

