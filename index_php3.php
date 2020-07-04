<?php
	include 'database.php';
	// Affiche PAGE 1

$joueur = $_POST['joueur'];
	
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$conn->exec("SET NAMES 'UTF8'");
	
$sql = $conn->prepare("SELECT * FROM witcher_perso WHERE joueur =:joueur");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
 
	if($pseudoINbdd != 0){
//Si la requête renvoi 0, le pseudo n'existe pas dans la base, sinon le pseudo existe.
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){
	if($result['profession'] == "1"){$profession = "Artisan";}
	if($result['profession'] == "2"){$profession = "Barde";}
	if($result['profession'] == "3"){$profession = "Criminel";}
	if($result['profession'] == "4"){$profession = "Docteur";}
	if($result['profession'] == "5"){$profession = "Homme d'armes";}
	if($result['profession'] == "6"){$profession = "Mage";}
	if($result['profession'] == "7"){$profession = "Marchand";}
	if($result['profession'] == "8"){$profession = "Prêtre";}
	if($result['profession'] == "82"){$profession = "Druide";}
	if($result['profession'] == "9"){$profession = "Sorceleur";}

	$PhysicalTable = floor(($result['E1']+$result['A2'])/2);

	$PS = $PhysicalTable*5;    // Points de santé = Endurance
	$REC = $PhysicalTable;   // Récupération
	$SAUV = $PhysicalTable;  // Sauvegarde
	if($PhysicalTable == 11){$SAUV = 10;}
	if($PhysicalTable == 12){$SAUV = 10;}
	if($PhysicalTable == 13){$SAUV = 10;}
	
	if($result['profession'] == "6"){$VIG = "5";}
	else if($result['profession'] == "8" || $result['profession'] == "9"){$VIG = "2";}
	else{$VIG = 0;}   // Vigeur
	$RUN = floor($result['E2']*3);   // Course
	$SAUT = floor($RUN/5);  // Saut
	$ENC = floor($result['E1']*10);   // Encombrement
	
	// Corps à corps 
	if($result['E1'] == "1" || $result['E1'] == "2"){
		$CoupPoings ="1d6-4";     // Coup de poings
		$CoupPieds = "1d6";     // Coup de pieds
	}
	if($result['E1'] == "3" || $result['E1'] == "4"){
		$CoupPoings ="1d6-2";     // Coup de poings
		$CoupPieds = "1d6+2";     // Coup de pieds
	}
	if($result['E1'] == "5" || $result['E1'] == "6"){
		$CoupPoings ="1d6";     // Coup de poings
		$CoupPieds = "1d6+4";     // Coup de pieds
	}
	if($result['E1'] == "7" || $result['E1'] == "8"){
		$CoupPoings ="1d6+2";     // Coup de poings
		$CoupPieds = "1d6+6";     // Coup de pieds
	}
	if($result['E1'] == "9" || $result['E1'] == "10"){
		$CoupPoings ="1d6+4";     // Coup de poings
		$CoupPieds = "1d6+8";     // Coup de pieds
	}
	if($result['E1'] == "11" || $result['E1'] == "12"){
		$CoupPoings ="1d6+6";     // Coup de poings
		$CoupPieds = "1d6+10";     // Coup de pieds
	}
	if($result['E1'] == "13"){
		$CoupPoings ="1d6+8";     // Coup de poings
		$CoupPieds = "1d6+12";     // Coup de pieds
	}


	?>
		<div style="width: 25%; float: right;">
		  <img style="max-width: 100%;height: auto;" src="<?=$result['portrait'];?>">
		</div>
		<h2><b><?=$result['personnage'];?></b></h2>
		<h3><?=$result['race'];?> - <?=$profession;?></h3>
		<br><br>
		<div><h3>Histoire :</h3><?=nl2br(htmlspecialchars($result['HdV']));?></div>
		<br><br>
		<div><h3>Evénements :</h3><?=nl2br(htmlspecialchars($result['événements']));?></div>
		<br><br>
	<?php
		if($result['description'] != null && $result['description'] != ""){
	?>
		<div><h3>Description :</h3><?=nl2br(htmlspecialchars($result['description']));?></div>
		<br><br>
	<?php
		}
	?>
		<div><h3>Caractéristiques :</h3>
      <div class="row">
        <div class="col-sm">Intelligence : <span id="P2_INT"><?=$result['C1'];?></span></div>
        <div class="col-sm">Réflexes : <span id="P2_REF"><?=$result['C2'];?></span></div>
        <div class="col-sm">Dextérité : <span id="P2_DEX"><?=$result['C3'];?></span></div>
      </div>
      <div class="row">
        <div class="col-sm">Corps : <span id="P2_COR"><?=$result['E1'];?></span></div>
        <div class="col-sm">Vitesse : <span id="P2_VIT"><?=$result['E2'];?></span></div>
        <div class="col-sm">Empathie : <span id="P2_EMP"><?=$result['E3'];?></span></div>
      </div>
      <div class="row">
        <div class="col-sm">Technique : <span id="P2_TEC"><?=$result['A1'];?></span></div>
        <div class="col-sm">Volonté : <span id="P2_VOL"><?=$result['A2'];?></span></div>
        <div class="col-sm">Chance : <span id="P2_CHANCE"><?=$result['A3'];?></span></div>
      </div>
    </div>
    <br>
    <div><h3>Caractéristiques secondaires :</h3>
      <div class="row">
        <div  class="col-sm">Sauvegarde : <span id="P2_SAUV"><?=$SAUV;?></span></div>
        <div  class="col-sm">Course : <span id="P2_COU"><?=$RUN;?></span></div>
        <div  class="col-sm">Saut : <span id="P2_SAUT"><?=$SAUT;?></span></div>
      </div>
      <div class="row">
        <div  class="col-sm">Points de Vie : <span id="P2_PV"><?=$PS;?></span></div>
        <div  class="col-sm">Endurance : <span id="P2_END"><?=$PS;?></span></div>
        <div  class="col-sm">Encombrement : <span id="P2_ENC"><?=$ENC;?></span></div>
      </div>
      <div class="row">
        <div  class="col-sm">Récupération : <span id="P2_REC"><?=$REC;?></span></div>
        <div  class="col-sm">Coup de poings : <span id="P2_POINGS"><?=$CoupPoings;?></span></div>
        <div  class="col-sm">Coup de pied : <span id="P2_PIEDS"><?=$CoupPieds;?></span></div>
      </div>
    </div>
	<?php
}
	}
$sql = null;
$conn = null;
?>