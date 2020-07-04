<?php
	include 'database.php';
	// Affiche bonus / malus

	$joueur = $_POST['joueur'];
	$type = $_POST['type'];

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$conn->exec("SET NAMES 'UTF8'");

$sql = $conn->prepare("SELECT * FROM witcher_stat WHERE (Joueur =:joueur)");
	$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
		$sql->execute();
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
	if($type == "1"){while ($result = $sql->fetch()){$aff = $result['Bonus'];}}
	else{while ($result = $sql->fetch()){$aff = $result['Malus'];}}
$sql = null;
$conn=null;
?>
<?=$aff;?>