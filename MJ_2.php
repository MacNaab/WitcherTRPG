<?php
	include 'database.php';
	// Ajout img

$valeur = $_POST['valeur'];

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$conn->exec("SET NAMES 'UTF8'");

$req = $conn->prepare('UPDATE witcher_message SET message = :upd WHERE pseudo = "IMG"');
$req->execute(array('upd' => $valeur));

echo "L'image a bien été envoyé !";

$req=null;$conn=null;
?>