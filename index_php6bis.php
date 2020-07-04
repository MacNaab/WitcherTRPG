<?php
	include 'database.php';
	// Affiche des armes

$joueur = $_POST['joueur'];
	
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$conn->exec("SET NAMES 'UTF8'");


$sql = $conn->prepare("SELECT * FROM witcher_inventaire2 WHERE (joueur =:joueur AND type='Arme')");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
 
	if($pseudoINbdd != 0){
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
?>
<div class="col-sm">
  <select class="custom-select" id="P4_Armes">
      <option value="" selected>Jet d'Arme</option>
<?php
while ($result = $sql->fetch()){
  if($result['SousType'] != "bouclier"){
?>
      <option value="<?=$result['Nom'];?>"><?=$result['Nom'];?></option>
<?php }} ?>
  </select>
</div>
<?php
}
$sql = null;

$conn = null
?>