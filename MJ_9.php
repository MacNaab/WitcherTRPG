<?php
	include 'database.php';
	// Affiche inventaire

	$joueur = $_POST['joueur'];
	$type = $_POST['type'];

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$conn->exec("SET NAMES 'UTF8'");

$sql = $conn->prepare("SELECT * FROM witcher_inventaire2 WHERE (Joueur =:joueur)");
	$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
		$sql->execute();
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
	if($type == "1"){
		while ($result = $sql->fetch()){
			if($result['Type'] == "Arme"){
?>
ID: <?=$result['ID'];?>, Nom: <?=$result['Nom'];?>, Poids: <?=$result['Poids'];?>,Dégâts: <?=$result['Protection'];?>, Durabilité: <?=$result['Durabilité'];?>, Précision: <?=$result['EV'];?>,  Effet: <?=$result['Description'];?><br>
<?php
			}
		}
	}
	elseif($type == "2"){while ($result = $sql->fetch()){
		if($result['Type'] == "Armure"){
?>
ID: <?=$result['ID'];?>, Nom: <?=$result['Nom'];?>, Poids: <?=$result['Poids'];?>, Durabilité/Protection: <?=$result['Durabilité'];?>/<?=$result['Protection'];?>, EV: <?=$result['EV'];?>, Effet: <?=$result['Description'];?><br>
<?php
		}}}
	else{while ($result = $sql->fetch()){
		if($result['Type'] == "Sac"){
?>
ID: <?=$result['ID'];?>, Nom: <?=$result['Nom'];?>, Poids: <?=$result['Poids'];?>, Quantité: <?=$result['Durabilité'];?>, Description: <?=$result['Description'];?><br>
<?php
		}}}
$sql = null;
$conn=null;
?>