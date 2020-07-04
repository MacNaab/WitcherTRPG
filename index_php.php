<?php

$joueur = $_POST['joueur'];
$mdp = $_POST['mdp'];

	include 'database.php';
	// MDP
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$conn->exec("SET NAMES 'UTF8'");

			$sql = $conn->prepare("SELECT * FROM witcher_perso WHERE joueur =:joueur");
			$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
			$sql->execute();

	$pseudoINbdd = $sql->rowCount();
	if($pseudoINbdd != 0){
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){
	$perso = $result['race'];
}
if($mdp == $perso){}
else{echo "Mauvais mot de passe";}
	}	
	else{echo "Pas de joueur à ce nom.";}
$sql = null;
$conn = null;
?>