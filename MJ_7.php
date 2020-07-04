<?php
	include 'database.php';
	// Ajout Item : sac

	$joueur = $_POST['joueur'];
	$type = $_POST['type'];
	$nom = $_POST['nom'];
	$poids = $_POST['poids'];

	$quantité = $_POST['quantité'];
	$description = $_POST['description'];

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$conn->exec("SET NAMES 'UTF8'");

$sql = $conn->prepare("SELECT * FROM witcher_perso WHERE (joueur =:joueur)");
	$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
		$sql->execute();
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){
	$Perso = $result['personnage'];
}
$sql = null;

// Joueur ; Type ; SousType ; Nom ; Poids ; Description ; Protection ; Durabilité ; EV
$stmt = $conn->prepare("INSERT INTO witcher_inventaire2 (Joueur, Type, Nom, Poids, Description, Durabilité)
						VALUES (:1, 'Sac', :2, :3, :4, :5)");
$stmt->bindParam(':1', $joueur);
$stmt->bindParam(':2', $nom);
$stmt->bindParam(':3', $poids);
$stmt->bindParam(':4', $description);
$stmt->bindParam(':5', $quantité);
$stmt->execute();
$stmt=null;

if($quantité > "1"){$aff = "$Perso vient d'acquérir $nom x$quantité";}
else{$aff = "$Perso vient d'acquérir $nom";}

echo $aff;
$conn=null;
?>