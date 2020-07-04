<?php
	include 'database.php';
	// Modif stat

$joueur = $_POST['joueur'];
$acte = $_POST['acte'];
$valeur = $_POST['valeur'];

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$conn->exec("SET NAMES 'UTF8'");

$sql = $conn->prepare("SELECT * FROM witcher_stat WHERE (Joueur =:joueur)");
	$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
		$sql->execute();
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){
	$PV = $result['PV'];
	$END = $result['Endurance'];
	$Réput = $result['Réputation'];
	$Argent = $result['Argent'];
	$Relance = $result['Relance'];
	$XP = $result['XP'];
}
$sql = null;

$sql = $conn->prepare("SELECT * FROM witcher_perso WHERE (joueur =:joueur)");
	$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
		$sql->execute();
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){
	$PhysicalTable = floor(($result['E1']+$result['A2'])/2);
	$PVmax = $PhysicalTable*5;    // Points de santé = Endurance
	$Perso = $result['personnage'];
}
$sql = null;


if($acte == "1"){	// PV
	$nouveau = $PV+$valeur;
	if($nouveau <= "0"){
		// Mort
		$aff = "$Perso vient de perdre tous ses points de santé ! $Perso est inconscient, au sol et mourant.";
		$sql = "UPDATE witcher_stat SET PV='0' WHERE Joueur=?";
		$stmt= $conn->prepare($sql);
		$stmt->execute([$joueur]);
		$sql=null;$stmt=null;
	}
	elseif($nouveau >= $PVmax){
		// Full
		$aff = "$Perso vient de regagner tous ses points de santé ($PVmax/$PVmax).";
		$sql = "UPDATE witcher_stat SET PV=? WHERE Joueur=?";
		$stmt= $conn->prepare($sql);
		$stmt->execute([$PVmax,$joueur]);
		$sql=null;$stmt=null;
	}
	else{
		$sql = "UPDATE witcher_stat SET PV=? WHERE Joueur=?";
		$stmt= $conn->prepare($sql);
		$stmt->execute([$nouveau,$joueur]);
		$sql=null;$stmt=null;
		if($valeur > "0"){$aff = "$Perso vient de regagner $valeur points de santé ($nouveau/$PVmax).";}
		elseif($valeur < "0"){$aff = "$Perso vient de perdre $valeur points de santé ($nouveau/$PVmax).";}
		else{}
}
}

elseif($acte == "2"){	// END
	$nouveau = $END+$valeur;
	if($nouveau <= "0"){
		$aff = "$Perso vient de perdre tous ses points d'endurance ! $Perso tombe au sol,inconscient.";
		$sql = "UPDATE witcher_stat SET Endurance='0' WHERE Joueur=?";
		$stmt= $conn->prepare($sql);
		$stmt->execute([$joueur]);
		$sql=null;$stmt=null;
	}
	elseif($nouveau >= $PVmax){
		$aff = "$Perso vient de récuperer tous ses points d'endurance ($PVmax/$PVmax).";
		$sql = "UPDATE witcher_stat SET Endurance=? WHERE Joueur=?";
		$stmt= $conn->prepare($sql);
		$stmt->execute([$PVmax,$joueur]);
		$sql=null;$stmt=null;
	}
	else{
		$sql = "UPDATE witcher_stat SET Endurance=? WHERE Joueur=?";
		$stmt= $conn->prepare($sql);
		$stmt->execute([$nouveau,$joueur]);
		$sql=null;$stmt=null;
		if($valeur > "0"){$aff = "$Perso vient de récuperer $valeur points d'endurance ($nouveau/$PVmax).";}
		elseif($valeur < "0"){$aff = "$Perso vient de perdre $valeur points d'endurance ($nouveau/$PVmax).";}
		else{}
	}

}

elseif($acte == "3"){	// Réput
	$nouveau = $Réput+$valeur;
	$sql = "UPDATE witcher_stat SET Réputation=? WHERE Joueur=?";
	$stmt= $conn->prepare($sql);
	$stmt->execute([$nouveau,$joueur]);
	$sql=null;$stmt=null;	
		if($valeur > "0"){$aff = "$Perso vient de gagner en réputation !";}
		if($valeur < "0"){$aff = "$Perso a perdu en réputation...";}
}

elseif($acte == "4"){	// XP
	$nouveau = $XP+$valeur;
	$sql = "UPDATE witcher_stat SET XP=? WHERE Joueur=?";
	$stmt= $conn->prepare($sql);
	$stmt->execute([$nouveau,$joueur]);
	$sql=null;$stmt=null;	
		if($valeur > "0"){$aff = "$Perso vient de gagner $valeur points d'expérience !";}
		if($valeur < "0"){$aff = "$Perso vient d'utiliser $valeur points d'expérience.";}
}

elseif($acte == "5"){	// Argent
	$nouveau = $Argent+$valeur;
	$sql = "UPDATE witcher_stat SET Argent=? WHERE Joueur=?";
	$stmt= $conn->prepare($sql);
	$stmt->execute([$nouveau,$joueur]);
	$sql=null;$stmt=null;	
		if($valeur > "0"){$aff = "$Perso vient de gagner $valeur couronnes !";}
		if($valeur < "0"){$aff = "$Perso vient de dépenser $valeur couronnes.";}
}

elseif($acte == "6"){	// Relance
	$nouveau = $Relance+$valeur;
	$sql = "UPDATE witcher_stat SET Relance=? WHERE Joueur=?";
	$stmt= $conn->prepare($sql);
	$stmt->execute([$nouveau,$joueur]);
	$sql=null;$stmt=null;	
		if($valeur > "0"){$aff = "$Perso vient de gagner $valeur relance !";}
		if($valeur < "0"){$aff = "$Perso vient d'utiliser une relance.";}
}

echo $aff;
$conn=null;
?>