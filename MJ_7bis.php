<?php
	include 'database.php';
	// Ajout Item : arme

	$joueur = $_POST['joueur'];
	$type = $_POST['type'];
	$nom = $_POST['nom'];
	$poids = $_POST['poids'];

	$dégâts = $_POST['dégâts'];
	$durabilité = $_POST['durabilité'];
	$précision = $_POST['précision'];
	$effet = $_POST['effet'];

if($type == "1"){$ST = null;}
if($type == "2"){$ST = "distance";}
if($type == "3"){$ST = "argent";}
if($type == "4"){$ST = "bouclier";}

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
						VALUES (:1, 'Arme', :2, :3, :4, :5, :6, :7, :8)");
$stmt->bindParam(':1', $joueur);
$stmt->bindParam(':2', $ST);
$stmt->bindParam(':3', $nom);
$stmt->bindParam(':4', $poids);
$stmt->bindParam(':5', $effet);
$stmt->bindParam(':6', $dégâts);
$stmt->bindParam(':7', $durabilité);
$stmt->bindParam(':8', $précision);
$stmt->execute();
$stmt=null;

$aff = "$Perso vient d'acquérir $nom";

echo $aff;

$conn=null;
?>