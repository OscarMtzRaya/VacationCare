<?php
include_once('Database.php');
define('SS_DB_NAME', 'grupoar6_vcare');
define('SS_DB_USER', 'grupoar6_vcare');
define('SS_DB_PASSWORD', 'gVzs-0iSw*UD');
define('SS_DB_HOST', 'localhost');

$dsn	= 	"mysql:dbname=".SS_DB_NAME.";host=".SS_DB_HOST."";
$pdo	=	"";
try {
	$pdo = new PDO($dsn, SS_DB_USER, SS_DB_PASSWORD);
}catch (PDOException $e) {
	echo "Connection failed: " . $e->getMessage();
}
$db 	=	new Database($pdo);
?>