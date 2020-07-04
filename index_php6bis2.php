<?php
	include 'database.php';
	// Affiche Magie

$joueur = $_POST['joueur'];
	
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$conn->exec("SET NAMES 'UTF8'");


$sql = $conn->prepare("SELECT * FROM witcher_cc WHERE (joueur =:joueur AND type='magie')");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
 
	if($pseudoINbdd != 0){
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
?>
<br><div class="container" >
  <div class="row">
    <div class="col-sm">
      <select class="custom-select" id="P4_Magie">
        <option value="" selected>Jet de Magie</option>
<?php
while ($result = $sql->fetch()){
?>
        <option value="<?=$result['dégâts'];?>"><?=$result['nom'];?></option>
<?php } ?>
      </select>
    </div>
    <div class="col-sm" style="text-align: center;">
      <input type="button" class="btn btn-primary" value="Roll !" id="Roll_in_4">
    </div>
  </div>
</div>
<?php
}
$sql = null;

$conn = null
?>