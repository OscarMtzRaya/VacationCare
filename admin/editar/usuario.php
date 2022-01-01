<?php
include_once($_SERVER["DOCUMENT_ROOT"].'/admin/include/sesion.php');
include_once($_SERVER["DOCUMENT_ROOT"].'/admin/controllers/router.php');
$router = new Router;

//Revisar si el id viene en la url
if (isset($_GET['id'])) {
  $id = $_GET['id'];
  //Cargamos la conexión a BD
  include_once($router->createRoute('admin/include/config.php'));
  
  //Leemos el usuario de la BD, y también los datos completos de la vista datosusuarios
  $usuario = $db->getAllRecords('usuarios', '*', ' AND id="' . $id . '"LIMIT 1')[0];
  $datosusuario = $db->getAllRecords('datosusuarios', '*', ' AND id="' . $id . '"LIMIT 1')[0];

  //Variable de validación
  $id_valido = true;
} else {

  //Si el id no viene, mandamos a tabla de usuarios
  header('location: /admin/usuarios.php');
}

//Entra si el id es válido y ya se consultó la BD
if ($id_valido) {

  //Consultamos roles y puestos de la BD
  $roles = $db->getAllRecords('roles', '*');
  $puestos = $db->getAllRecords('puestos', '*');

  //Cargamos los datos actuales: rol, puesto, nombre, apellido
  $rol_actual = $datosusuario['rol'];
  $puesto_actual = $datosusuario['puesto'];
  $estatus_actual = $datosusuario['activo'] == 1 ? "Activo" : "Inactivo";
  $nombre = $datosusuario['nombre'];
  $apellido = $datosusuario['apellido'];
  
  //Preparamos las variables que contendrán las <option></option>
  $vista_roles = '';
  $vista_puestos = '';

  //Recorremos cada arreglo y creamos los <option></option>
  foreach ($roles as $rol) {
    $vista_roles .= '<option value="'.$rol['id'].'">' . $rol['tipo'] . '</option>';
  }

  foreach ($puestos as $puesto) {
    $vista_puestos .= '<option value="'.$puesto['id'].'">' . $puesto['tipo'] . '</option>';
  }

  //Finalmente cargamos los archivos que contienen la UI
  include_once($router->createRoute('admin/include/head.php'));
  include_once($router->createRoute('admin/include/header.php'));
  include_once($router->createRoute('admin/modules/editarusuario.php'));
  include_once($router->createRoute('admin/include/footer.php'));
} else {

  //Si no pasa la validación, mandamos a la tabla de usuarios
  header('location: /admin/usuarios.php');
}