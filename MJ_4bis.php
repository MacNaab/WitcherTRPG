<?php
	include 'database.php';
	// Afficher la liste des joueurs

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$conn->exec("SET NAMES 'UTF8'");

    $sql = $conn->prepare("SELECT * FROM witcher_perso");
    $sql->execute();
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
?>
          <select id="MJ_ADD_4" class="custom-select">
              <option selected>Joueur</option>
<?php
while ($result = $sql->fetch()){
?><option value="<?=$result['joueur'];?>"><?=$result['joueur'];?></option><?php
}
?>
          </select>
<?php

$sql=null;$conn=null;
?>