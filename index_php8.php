<?php
	include 'database.php';
	// Affiche BARRES

$joueur = $_POST['joueur'];
	
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$conn->exec("SET NAMES 'UTF8'");


$sql = $conn->prepare("SELECT * FROM witcher_stat WHERE (joueur =:joueur)");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
 
	if($pseudoINbdd != 0){
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){
    $PV = $result['PV'];
    $END = $result['Endurance'];
}}
$sql = null;
$sql = $conn->prepare("SELECT * FROM witcher_perso WHERE (joueur =:joueur)");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
 
	if($pseudoINbdd != 0){
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){
	$PhysicalTable = floor(($result['E1']+$result['A2'])/2);
	$PVmax = $PhysicalTable*5; // = ENDmax
}}
$sql = null;

    // PV max = END max = P2_PV
    $PV_PC = 100*$PV/$PVmax; // PV restant % > Top
    $PV_manq = 100-$PV_PC;  // PV manquant % > H

    $END_PC = 100*$END/$PVmax;
    $END_manq = 100-$END_PC;
?>
<div id='barre3_cl' class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: <?=$PV_PC;?>%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">VIE</div>
<?php $conn = null; ?>