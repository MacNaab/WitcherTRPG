<?php
	include 'database.php';
	// Edit bonus / malus

	$joueur = $_POST['joueur'];
	$type = $_POST['type'];
	$edit = $_POST['edit'];

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$conn->exec("SET NAMES 'UTF8'");

	if($type == "1"){
		$sql = "UPDATE witcher_stat SET Bonus=? WHERE Joueur=?";
		$stmt= $conn->prepare($sql);
		$stmt->execute([$edit,$joueur]);
		$sql=null;$stmt=null;
	}
	else{
		$sql = "UPDATE witcher_stat SET Malus=? WHERE Joueur=?";
		$stmt= $conn->prepare($sql);
		$stmt->execute([$edit,$joueur]);
		$sql=null;$stmt=null;
	}
$conn=null;
if($type == "1"){echo "Edition des bonus de $joueur.";}
else{echo "Edition des malus de $joueur.";}
?>