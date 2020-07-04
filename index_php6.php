<?php
	include 'database.php';
	// Affiche PAGE 4

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
?>
<h3>Fiche :</h3>
<div class="container">
  <div class="row">
    <div class="col">Argent : <?=$result['Argent'];?> couronnes</div>
    <div class="col">Relance : <?=$result['Relance'];?> dé</div>
    <div class="col">Réputation : <?=$result['Réputation'];?></div>
  </div>
  <div class="row">
    <div class="col">XP : <?=$result['XP'];?></div>
    <div class="col">PV : <span id="PV_ACC_P4"><?=$result['PV'];?></span></div>
    <div class="col">Endurance : <span id="STA_ACC_P4"><?=$result['Endurance'];?></span></div>
  </div>
</div>
<?php
$MALUS = nl2br(htmlspecialchars($result['Malus']));
$BONUS = nl2br(htmlspecialchars($result['Bonus']));
}}
$sql = null;

$sql = $conn->prepare("SELECT * FROM witcher_inventaire2 WHERE (joueur =:joueur AND SousType ='tête')");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
$SomT = 0; 
$SomTac = 0; 
	if($pseudoINbdd != 0){
    $result = $sql->setFetchMode(PDO::FETCH_ASSOC);
    
    while ($result = $sql->fetch()){
      $SomT = $SomT+$result['Protection'];
      $SomTac = $SomTac+$result['Durabilité'];
    }}
    $sql = null;

$sql = $conn->prepare("SELECT * FROM witcher_inventaire2 WHERE (joueur =:joueur AND SousType ='torse')");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
$Som_T = 0; 
$Som_Tac = 0; 
	if($pseudoINbdd != 0){
    $result = $sql->setFetchMode(PDO::FETCH_ASSOC);
    while ($result = $sql->fetch()){
      $Som_T = $Som_T+$result['Protection'];
      $Som_Tac = $Som_Tac+$result['Durabilité'];
    }}
    $sql = null;

$sql = $conn->prepare("SELECT * FROM witcher_inventaire2 WHERE (joueur =:joueur AND SousType ='jambe')");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
$SomJ = 0;
$SomJac = 0;
	if($pseudoINbdd != 0){
    $result = $sql->setFetchMode(PDO::FETCH_ASSOC);
    
    while ($result = $sql->fetch()){
      $SomJ = $SomJ+$result['Protection'];
      $SomJac = $SomJac+$result['Durabilité'];
    }}
    $sql = null;

    $SomTaff = "$SomTac/$SomT";$Som_Taff = "$Som_Tac/$Som_T";$SomJaff = "$SomJac/$SomJ";
    if($SomT == "0"){$SomTaff = "0";}
    if($Som_T == "0"){$Som_Taff = "0";}
    if($SomJ == "0"){$SomJaff = "0";}
?>
<div><b>Protection :</b>
  <div class="container">
    <div class="row">
      <div class="col">Tête : <?=$SomTaff;?></div>
      <div class="col">Torse : <?=$Som_Taff;?></div>
      <div class="col">Jambes : <?=$SomJaff;?></div>
    </div>
  </div>
</div>
<br>
<?php
$sql = $conn->prepare("SELECT * FROM witcher_inventaire2 WHERE (joueur =:joueur AND Type ='Armure')");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
$EV_val = 0; 
	if($pseudoINbdd != 0){
    $result = $sql->setFetchMode(PDO::FETCH_ASSOC);
    
    while ($result = $sql->fetch()){
      $EV_val = $EV_val+$result['EV'];
    }}
    $sql = null;
$sql = $conn->prepare("SELECT * FROM witcher_inventaire2 WHERE (joueur =:joueur)");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
$ENC_val = 0; 
	if($pseudoINbdd != 0){
    $result = $sql->setFetchMode(PDO::FETCH_ASSOC);
    
    while ($result = $sql->fetch()){
      if($result['Type']  == "Sac"){$ENC_val = $ENC_val+($result['Poids']*$result['Durabilité']);}
      else{$ENC_val = $ENC_val+$result['Poids'];}
    }}
    $sql = null;
$sql = $conn->prepare("SELECT * FROM witcher_perso WHERE (joueur =:joueur)");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
$ENC_max = 0; 
	if($pseudoINbdd != 0){
    $result = $sql->setFetchMode(PDO::FETCH_ASSOC);
    
    while ($result = $sql->fetch()){
      $ENC_max = $result['E1']*10;
    }}
    $sql = null;

// Si poids > ENC
$MALUS2 = null;
if($ENC_val >= $ENC_max){
  $Poids_trop = $ENC_val-$ENC_max;
  $Poids_X = floor($Poids_trop/5);
  if($Poids_X == 0){$Poids_X = 1;}
  $MALUS2 = "<b>Encombré</b> : -$Poids_X REF, DEX et Vitesse.";
}
$MALUS3 = null;
if($EV_val > 0){
  $MALUS3 = "<b>Encombrement d'armure</b> : -$EV_val REF et DEX.";
}  
?>
<div class="container">
  <div class="row">
    <div class="col">Encombrement : <?=$ENC_val;?> kg / <?=$ENC_max;?></div>
    <div class="col">Encombrement d'armure : <?=$EV_val;?></div>
  </div>
</div>
<div><b>Bonus :</b><br><?=$BONUS;?></div>
<div><b>Malus :</b><br><?=$MALUS;?><div><?=$MALUS2;?></div><div><?=$MALUS3;?></div></div>
<?php
$sql = null;

$conn = null
?>