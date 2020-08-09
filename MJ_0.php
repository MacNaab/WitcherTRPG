<?php
	include 'database.php';
	// modif TTS

$valeur = $_POST['valeur'];

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$conn->exec("SET NAMES 'UTF8'");

$req = $conn->prepare('UPDATE witcher_message SET message = :upd WHERE pseudo = "TTS"');
$req->execute(array('upd' => $valeur));

echo "L'url du TTS a bien été modifié ! - $valeur";

$req=null;$conn=null;
?>