<?php
if (isset($_POST)) {
  extract($_POST);
  require_once($_SERVER['DOCUMENT_ROOT'] . '/admin/include/config.php');

  //Filtramos los campos introducidos por el usuario
  $filtered_username = filter_var($username, FILTER_SANITIZE_STRING);
  $filtered_password = filter_var($userpassword, FILTER_SANITIZE_STRING);

  //Consultamos base de datos únicamente por 'username'
  $usuario = $db->getAllRecords('usuarios', '*', ' AND username="' . $filtered_username . '"LIMIT 1')[0];

  //Preparamos las variables de respuesta
  $type;
  $message;

  //Si el usuario fue encontrado, avanzamos
  if ($usuario) {
    //Verificamos el hash de password
    if (password_verify($filtered_password, $usuario["password"])) {
      $type = "success";
      $message = "Correcto";

      //Consultamos la vista que contiene toda la información del usuario
      $usuarioCompleto = $db->getAllRecords('datosusuarios', '*', ' AND id="' . $usuario['id'] . '"LIMIT 1')[0];

      //Guardamos en la variable de sesion 'user', el usuario completo con todos los datos
      session_start();
      $_SESSION['user'] = $usuarioCompleto;
    } else {
      $type = "error";
      $message = "Contraseña incorrecta";
    }
  } else {
    $type = "error";
    $message = "Usuario no encontrado";
  }

  //Respondemos con el tipo y mensaje que nuestras verificaciones generaron
  echo json_encode(array("type" => $type, "message" => $message));
}
