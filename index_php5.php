<?php
	include 'database.php';
	// Affiche PAGE 3

$joueur = $_POST['joueur'];
	
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$conn->exec("SET NAMES 'UTF8'");


$sql = $conn->prepare("SELECT * FROM witcher_inventaire2 WHERE (joueur =:joueur AND Type = 'Arme')");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
 
	if($pseudoINbdd != 0){
?>
<div><h3>Armes :</h3>
      <div class="table-responsive">
        <table class="table table-striped table-dark P3TABLE" >
          <thead>
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">Dégâts</th>
              <th scope="col">Précision/EV</th>
              <th scope="col">Durabilité</th>
			  <th scope="col">Effet</th>
			  <th scope="col">Poids</th>
            </tr>
          </thead>
          <tbody>
<?php
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){
?>			  
            <tr>
              <th scope="row" id="ARME_<?=nl2br(htmlspecialchars($result['Nom']));?>"><?=$result['Nom'];?></th>
              <td id="ARME_<?=nl2br(htmlspecialchars($result['Nom']));?>_dmg"><?=$result['Protection'];?></td>
              <td><?=$result['EV'];?></td>
              <td><?=$result['Durabilité'];?></td>
			  <td id="ARME_<?=nl2br(htmlspecialchars($result['Nom']));?>_effet"><?=$result['Description'];?></td>
			  <td><?=$result['Poids'];?></td>
			</tr>
<?php } ?>			
          </tbody>
        </table>
      </div>
    </div>
<?php
	}
$sql = null;

$sql = $conn->prepare("SELECT * FROM witcher_inventaire2 WHERE (joueur =:joueur AND Type = 'Armure')");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
 
	if($pseudoINbdd != 0){
?>
<div><h3>Ensemble d'armures :</h3>
      <div class="table-responsive">
      <table class="table table-striped table-dark P3TABLE" >
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Type</th>
            <th scope="col">Protection</th>
            <th scope="col">EV</th>
            <th scope="col">Effet</th>
            <th scope="col">Poids</th>
          </tr>
        </thead>
        <tbody>
<?php
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){
	if($result['SousType'] == "tête"){$soustypo = "Casque";}
	if($result['SousType'] == "torse"){$soustypo = "Armure";}
	if($result['SousType'] == "jambe"){$soustypo = "Pantalon";}
?>
          <tr>
            <th scope="row"><?=$result['Nom'];?></th>
            <td><?=$soustypo?></td>
            <td><?=$result['Protection'];?>/<?=$result['Protection'];?></td>
            <td><?=$result['EV'];?></td>
            <td><?=$result['Description'];?></td>
            <td><?=$result['Poids'];?></td>
		  </tr>
<?php } ?>			
        </tbody>
      </table>
      </div>
    </div>
	<?php
	}
$sql = null;

$sql = $conn->prepare("SELECT * FROM witcher_inventaire2 WHERE (joueur =:joueur AND Type = 'Sac')");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
 
	if($pseudoINbdd != 0){
?>
<div><h3>Inventaire :</h3>
      <div class="table-responsive">
        <table class="table table-striped table-dark P3TABLE" >
          <thead>
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">Description</th>
			  <th scope="col">Quantité</th>
			  <th scope="col">Poids</th>
            </tr>
          </thead>
          <tbody>
<?php
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){
  if($result['SousType'] != "Diagramme"){
?>
          <tr>
            <th scope="row"><?=$result['Nom'];?></th>
            <td><?=$result['Description'];?></td>
			<td><?=$result['Durabilité'];?></td>
			<td><?=$result['Poids']*$result['Durabilité'];?></td>
		  </tr>
<?php }} ?>			
        </tbody>
      </table>
      </div>     
    </div>
<?php
}
$sql = null;

$sql = $conn->prepare("SELECT * FROM witcher_inventaire2 WHERE (joueur =:joueur AND SousType = 'Diagramme' AND Type = 'Sac')");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
	if($pseudoINbdd != 0){
?>
<div><h3>Diagramme :</h3>
      <div class="table-responsive">
        <table class="table table-striped table-dark P3TABLE" >
          <thead>
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">Description</th>
			  <th scope="col">Quantité</th>
			  <th scope="col">Poids</th>
            </tr>
          </thead>
          <tbody>
<?php
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){
?>
          <tr>
            <th scope="row"><?=$result['Nom'];?></th>
            <td><?=$result['Description'];?></td>
			<td><?=$result['Durabilité'];?></td>
			<td><?=$result['Poids']*$result['Durabilité'];?></td>
		  </tr>
<?php } ?>			
        </tbody>
      </table>
      </div>     
    </div>
<?php
}
$sql = null;

$conn = null
?>