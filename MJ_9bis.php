<?php
	include 'database.php';
	// Edit inventaire

	$type = $_POST['type']; // Type d'édition
	$ID = $_POST['ID'];		// ID de l'item
	$edit = $_POST['edit'];	// Nouvelle valeure

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$conn->exec("SET NAMES 'UTF8'");

	// 1: Poids, 2:Durabilité, 3:Description, 4:Protection, 5:EV

	if($type == "1"){
		$sql = "UPDATE witcher_inventaire2 SET Poids=? WHERE ID=?";
		$stmt= $conn->prepare($sql);
		$stmt->execute([$edit,$ID]);
		$sql=null;$stmt=null;
	}
	elseif($type == "2"){
		$sql = "UPDATE witcher_inventaire2 SET Durabilité=? WHERE ID=?";
		$stmt= $conn->prepare($sql);
		$stmt->execute([$edit,$ID]);
		$sql=null;$stmt=null;
	}
	elseif($type == "3"){
		$sql = "UPDATE witcher_inventaire2 SET Description=? WHERE ID=?";
		$stmt= $conn->prepare($sql);
		$stmt->execute([$edit,$ID]);
		$sql=null;$stmt=null;
	}
	elseif($type == "4"){
		$sql = "UPDATE witcher_inventaire2 SET Protection=? WHERE ID=?";
		$stmt= $conn->prepare($sql);
		$stmt->execute([$edit,$ID]);
		$sql=null;$stmt=null;
	}
	elseif($type == "SUPPRIMER"){
		$sql = "DELETE FROM witcher_inventaire2 WHERE id=?";
		$stmt= $conn->prepare($sql);
		$stmt->execute([$ID]);
		$sql=null;$stmt=null;
	}
	else{
		$sql = "UPDATE witcher_inventaire2 SET EV=? WHERE ID=?";
		$stmt= $conn->prepare($sql);
		$stmt->execute([$edit,$ID]);
		$sql=null;$stmt=null;
	}
$conn=null;
if($type == "SUPPRIMER"){echo "L'item $ID a bien été supprimé.";}
else{echo "Edition de l'item $ID";}
?>