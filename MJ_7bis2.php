<?php
	include 'database.php';
	// Ajout Item : armure

	$joueur = $_POST['joueur'];
	$type = $_POST['type'];
	$nom = $_POST['nom'];
	$poids = $_POST['poids'];

	$protection = $_POST['protection'];
	$EV = $_POST['EV'];
	$effet = $_POST['effet'];

if($type == "5"){$ST = "tête";}
if($type == "6"){$ST = "torse";}
if($type == "7"){$ST = "jambe";}

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
$stmt = $conn->prepare("INSERT INTO witcher_inventaire2 (Joueur, Type, SousType, Nom, Poids, Description, Protection, Durabilité, EV)
						VALUES (:1, 'Armure', :2, :3, :4, :5, :6, :7, :8)");
$stmt->bindParam(':1', $joueur);
$stmt->bindParam(':2', $ST);
$stmt->bindParam(':3', $nom);
$stmt->bindParam(':4', $poids);
$stmt->bindParam(':5', $effet);
$stmt->bindParam(':6', $protection);
$stmt->bindParam(':7', $protection);
$stmt->bindParam(':8', $EV);
$stmt->execute();
$stmt=null;

$aff = "$Perso vient d'acquérir $nom";

echo $aff;

$conn=null;
?>