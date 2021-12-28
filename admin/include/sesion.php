<?php
session_start();
if (!isset($_SESSION['user'])) {
  header('location: /admin/auth-login.php');
}
?>