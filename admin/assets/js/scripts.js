$(document).ready(function () {
	const tablaUsuarios = $("#tablaUsuarios").DataTable({
		processing: true,
		serverSide: true,
		ajax: "controllers/usuarios.php",
		paging: true,
		columns: [
			{ Nombre: "data.nombre" },
			{ Apellido: "data.apellido" },
			{ Puesto: "data.puesto" },
			{ Rol: "data.rol" },
			{ Activo: "data.activo" },
			{ Acción: "data.id" },
		],
	});

	/* $("#tablaUsuarios tbody").on("click", "tr", function () {
		var data = tablaUsuarios.row(this).data();
		alert("You clicked on " + data[0] + "'s row");
	}); */
});

$("#formEditarUsuario").submit(function (e) {
	e.preventDefault();

	const goToUsuarios = () => {
		console.log("amonos");
	};

	$.post(
		"/admin/controllers/editarusuario.php",
		$(this).serialize(),
		function (data, textStatus, jqXHR) {
			if (data.type == "success") {
				const swalert = Swal.fire({
					title: 'Correcto', 
					text: data.message, 
					icon: data.type,
					close: goToUsuarios
				});

				console.log(swalert);
			} else if (data.type == "error") {
				Swal.fire("Error", data.message, data.type);
			}
		},
		"JSON"
	);
});
