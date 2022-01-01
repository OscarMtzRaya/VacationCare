<?php
if (isset($_REQUEST)) {
  include_once($_SERVER["DOCUMENT_ROOT"] . '/admin/controllers/router.php');
  $router = new Router;
  include_once($router->createRoute('admin/include/config.php'));

  extract($_REQUEST);
  $update = array(
    "id" => $_REQUEST['id'],
    "nombre" => $nombre,
    "apellido" => $apellido,
    "rol" => $rol,
    "puesto" => $puesto,
    "activo" => $activo
  );

  //Preparamos las variables de respuesta
  $type;
  $message;

  $sql = "UPDATE usuarios SET nombre=:nombre, apellido=:apellido, rol=:rol, puesto=:puesto, activo=:activo WHERE id=:id";
  try {
    $stmt = $db->getPdo()->prepare($sql)->execute($update);
    if ($stmt) {
      $type = "success";
      $message = "Actualizado correctamente";
    } else {
      $type = "error";
      $message = "Ninguna registro fue actualizado";
    }
    echo json_encode(array('type' => $type, 'message' => $message));
  } catch (PDOException $e) {
    $type = "error";
    $message = $e;
    echo json_encode(array('type' => $type, 'message' => $message));
  }
} else {
    header('location'.$router->createRoute('admin/'));
}
