<?php
if (isset($_POST)) {
  extract($_POST);
  include_once('/admin/include/config.php');

  $filtered_username = filter_var($username, FILTER_SANITIZE_STRING);
  $filtered_password = filter_var($userpassword, FILTER_SANITIZE_STRING);
  $hashed_password = password_hash($filtered_password, PASSWORD_DEFAULT);

  $usuario = $db->getAllRecords('roles', '*', ' AND username="' . $filtered_username . '"LIMIT 1')[0];
  if (password_verify($filterd_password, $usuario["password"])) {
    echo true;
  } else {
    echo false;
  }
}
