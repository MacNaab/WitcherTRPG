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

<div class="progress">
<?=$PV;?>/<?=$PVmax;?>
    <div class="progress-bar bg-danger" role="progressbar" style="top:<?=$PV_manq;?>%;height:<?=$PV_PC;?>%" >VIE</div>
</div>

<div class="progress" style="right: 10%;">
    <div class="progress-bar bg-success" role="progressbar" style="top:<?=$END_manq;?>%;height:<?=$END_PC;?>%" >END</div>
<?=$END;?>/<?=$PVmax;?></div>


<?php $conn = null; ?>