<?php
	include 'database.php';
	// Achat

$joueur = $_POST['joueur'];
$item = $_POST['item'];
$catégorie = $_POST['catégorie'];
$quantité = $_POST['quantité'];

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
// set the PDO error mode to exception
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


if($catégorie == "6"){  // arme
    if($item == "Flèches Standard"){
        $poids = "0.05";$ST = "distance";$effet = "";$dégâts = "";$précision = "0";$prix = "1";

        $prixT = $quantité*$prix;
        if($Argent >= $prixT){
            $sql = $conn->prepare("SELECT * FROM witcher_inventaire2 WHERE Joueur =:joueur AND Nom = :nom");
            $sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
            $sql->bindValue(':nom', $item, PDO::PARAM_STR);
            $sql->execute();    
            $pseudoINbdd = $sql->rowCount();
            if($pseudoINbdd != 0){
                $result = $sql->setFetchMode(PDO::FETCH_ASSOC);
                while ($result = $sql->fetch()){
                    $Oquantité = $result['Durabilité'];
                }
                $Nquantité = $quantité+$Oquantité;
                $sql2 = $conn->prepare("UPDATE witcher_inventaire2 SET Durabilité =:1 WHERE Joueur =:2 AND Nom =:3");
                    $sql2->bindValue(':1', $Nquantité, PDO::PARAM_STR);
                    $sql2->bindValue(':2', $joueur, PDO::PARAM_STR);
                    $sql2->bindValue(':3', $item, PDO::PARAM_STR);
                    $sql2->execute();
        
                echo "Achat effectué pour $prixT couronnes. Vous avez maintenant $Nquantité $item dans l'inventaire";
            }
            else{
                // Joueur ; Type ; SousType ; Nom ; Poids ; Description ; Protection ; Durabilité ; EV
                $stmt = $conn->prepare("INSERT INTO witcher_inventaire2 (Joueur, Type, SousType, Nom, Poids, Description, Protection, Durabilité, EV) 
                VALUES (:1, 'Arme', :2, :3, :4, :5, :6, :7, :8)");
                    $stmt->bindParam(':1', $joueur);
                    $stmt->bindParam(':2', $ST);
                    $stmt->bindParam(':3', $item);
                    $stmt->bindParam(':4', $poids);
                    $stmt->bindParam(':5', $effet);
                    $stmt->bindParam(':6', $dégâts);
                    $stmt->bindParam(':7', $quantité);
                    $stmt->bindParam(':8', $précision);
                    $stmt->execute();
                    $stmt=null;
                echo "Achat effectué pour $prixT couronnes. Vous avez maintenant $quantité $item dans l'inventaire";
            }            
            $ArgentN = $Argent-$prixT;
            $sql = "UPDATE witcher_stat SET Argent=? WHERE Joueur=?";
            $stmt= $conn->prepare($sql);
            $stmt->execute([$ArgentN,$joueur]);
            $sql=null;$stmt=null;
        }
        else{echo "Vous n'avez pas assez de couronnes pour effectuer cet achat.";}   
    }   
    else{
        if($item == "EP"){$item = "Épée longue en fer";$poids = "1.5";$ST = "";$effet = "";$dégâts = "2d6+2";$durabilité = "10";$précision = "0";$prix = "160";}   
        if($item == "Dague"){$poids = "0.5";$ST = "";$effet = "";$dégâts = "1d6+2";$durabilité = "10";$précision = "0";$prix = "50";}   
        if($item == "Hache"){$poids = "1";$ST = "";$effet = "";$dégâts = "2d6+1";$durabilité = "10";$précision = "0";$prix = "205";}   
        if($item == "Poing américain"){$poids = "0.5";$ST = "";$effet = "Brawling";$dégâts = "1d6";$durabilité = "15";$précision = "1";$prix = "50";}   
        if($item == "Lance"){$poids = "3.5";$ST = "";$effet = "Long Reach";$dégâts = "3d6";$durabilité = "10";$précision = "0";$prix = "375";}   
        if($item == "Couteau de lancer"){$poids = "0.5";$ST = "distance";$effet = "Portée : CORPS x4";$dégâts = "1d6";$durabilité = "5";$précision = "";$prix = "50";}   
        if($item == "Hache de jet"){$poids = "1";$ST = "distance";$effet = "Portée : CORPS x2";$dégâts = "2d6";$durabilité = "10";$précision = "";$prix = "75";}   
        if($item == "Arc court"){$poids = "";$ST = "distance";$effet = "Portée : 100m";$dégâts = "3d6+3";$durabilité = "10";$précision = "0";$prix = "";}   
        if($item == "Arc long"){$poids = "";$ST = "distance";$effet = "Portée : 200m";$dégâts = "4d6";$durabilité = "10";$précision = "0";$prix = "";}   
        if($item == "Arbalète à main"){$poids = "0.5";$ST = "distance";$effet = "Slow Reload ; Portée : 50m";$dégâts = "2d6+2";$durabilité = "5";$précision = "1";$prix = "285";}   
        if($item == "Arbalète"){$poids = "3";$ST = "distance";$effet = "Slow Reload ; Portée : 100m";$dégâts = "4d6+2";$durabilité = "5";$précision = "1";$prix = "455";}       
        
        if($Argent >= $prix){
            // Joueur ; Type ; SousType ; Nom ; Poids ; Description ; Protection ; Durabilité ; EV
            $stmt = $conn->prepare("INSERT INTO witcher_inventaire2 (Joueur, Type, SousType, Nom, Poids, Description, Protection, Durabilité, EV)
            VALUES (:1, 'Arme', :2, :3, :4, :5, :6, :7, :8)");
                $stmt->bindParam(':1', $joueur);
                $stmt->bindParam(':2', $ST);
                $stmt->bindParam(':3', $item);
                $stmt->bindParam(':4', $poids);
                $stmt->bindParam(':5', $effet);
                $stmt->bindParam(':6', $dégâts);
                $stmt->bindParam(':7', $durabilité);
                $stmt->bindParam(':8', $précision);
                $stmt->execute();
            $stmt=null;
            echo "Vous avez acheté $item pour $prix couronnes.";
            $ArgentN = $Argent-$prix;
            $sql = "UPDATE witcher_stat SET Argent=? WHERE Joueur=?";
            $stmt= $conn->prepare($sql);
            $stmt->execute([$ArgentN,$joueur]);
            $sql=null;$stmt=null;
        }
        else{echo "Vous n'avez pas assez de couronnes pour effectuer cet achat.";}         
    }    
}
elseif($catégorie == "7"){  // armure 
    if($item == "Coiffe de chaîne"){$ST = "tête";$effet = "";$protection = "12";$EV = "0";$poids = "1.5";$prix = "250";}    
    if($item == "Gambison"){$ST = "torse";$effet = "";$protection = "3";$EV = "0";$poids = "";$prix = "100";}    
    if($item == "Pantalon blindé"){$ST = "jambe";$effet = "";$protection = "12";$EV = "0";$poids = "3.5";$prix = "250";}    
    if($item == "Bouclier en cuir"){$ST = "bouclier";$effet = "";$protection = "4";$EV = "0";$poids = "0.5";$prix = "50";}    

    if($Argent >= $prix){
        // Joueur ; Type ; SousType ; Nom ; Poids ; Description ; Protection ; Durabilité ; EV
        $stmt = $conn->prepare("INSERT INTO witcher_inventaire2 (Joueur, Type, SousType, Nom, Poids, Description, Protection, Durabilité, EV)
        VALUES (:1, 'Armure', :2, :3, :4, :5, :6, :7, :8)");
            $stmt->bindParam(':1', $joueur);
            $stmt->bindParam(':2', $ST);
            $stmt->bindParam(':3', $item);
            $stmt->bindParam(':4', $poids);
            $stmt->bindParam(':5', $effet);
            $stmt->bindParam(':6', $protection);
            $stmt->bindParam(':7', $protection);
            $stmt->bindParam(':8', $EV);
            $stmt->execute();
        $stmt=null;
        echo "Vous avez acheté $item pour $prix couronnes.";
        $ArgentN = $Argent-$prix;
        $sql = "UPDATE witcher_stat SET Argent=? WHERE Joueur=?";
        $stmt= $conn->prepare($sql);
        $stmt->execute([$ArgentN,$joueur]);
        $sql=null;$stmt=null;
    }
    else{echo "Vous n'avez pas assez de couronnes pour effectuer cet achat.";}         
}
else{
    if($catégorie == "1"){  // général
        if($item == "Bougies"){$poids = "0.1";$description = "";$prix = "1";}
        if($item == "Carte du Continent"){$poids = "0.1";$description = "";$prix = "18";}
        if($item == "Chaines"){$poids = "2";$description = "";$prix = "50";}
        if($item == "Corde"){$poids = "1.5";$description = "20 mètres";$prix = "20";}
        if($item == "Craie"){$poids = "0.1";$description = "";$prix = "2";}
        if($item == "Dé pipé"){$poids = "0.1";$description = "";$prix = "12";}
        if($item == "Fers"){$poids = "0.5";$description = "";$prix = "30";}
        if($item == "Gourde"){$poids = "1";$description = "";$prix = "8";}
        if($item == "Grappin"){$poids = "0.5";$description = "";$prix = "13";}
        if($item == "Instrument"){$poids = "1";$description = "";$prix = "38";}
        if($item == "Jeu de Gwent"){$poids = "0.1";$description = "";$prix = "5";}
        if($item == "Jeu de Poker"){$poids = "0.5";$description = "";$prix = "25";}
        if($item == "Journal / Registre"){$poids = "0.5";$description = "";$prix = "8";}    
        if($item == "Lanterne"){$poids = "1";$description = "";$prix = "33";}    
        if($item == "Miroir à main"){$poids = "0.5";$description = "";$prix = "27";}    
        if($item == "Parfum"){$poids = "0.1";$description = "";$prix = "22";}    
        if($item == "Pipe"){$poids = "0.1";$description = "";$prix = "19";}    
        if($item == "Piton"){$poids = "0.1";$description = "";$prix = "2";}    
        if($item == "Sablier"){$poids = "1";$description = "";$prix = "38";}    
        if($item == "Sac de couchage"){$poids = "1.5";$description = "";$prix = "16";}    
        if($item == "Savon"){$poids = "0.1";$description = "";$prix = "4";}    
        if($item == "Silex et Acier"){$poids = "0.1";$description = "";$prix = "6";}    
        if($item == "Symbole sacré"){$poids = "0.1";$description = "";$prix = "14";}    
        if($item == "Tabac"){$poids = "0.1";$description = "";$prix = "4";}    
        if($item == "Tente"){$poids = "4";$description = "";$prix = "19";}    
        if($item == "Tente (large)"){$poids = "8";$description = "";$prix = "36";}    
        if($item == "Torche"){$poids = "0.1";$description = "";$prix = "1";}    
        if($item == "Verrou"){$poids = "0.1";$description = "";$prix = "34";}    
        if($item == "Verrou (difficile)"){$poids = "0.1";$description = "";$prix = "68";}    
    }
    if($catégorie == "2"){  // conteneur
        if($item == "Carquois"){$poids = "1";$description = "";$prix = "19";}
        if($item == "Panier"){$poids = "0.5";$description = "";$prix = "10";}
        if($item == "Pochette ceinture"){$poids = "0.1";$description = "";$prix = "7";}
        if($item == "Sac"){$poids = "0.1";$description = "";$prix = "3";}
        if($item == "Sac à dos"){$poids = "1";$description = "";$prix = "14";}
        if($item == "Pochette secrète"){$poids = "1.5";$description = "";$prix = "11";}
        if($item == "Gaine – arc"){$poids = "0.1";$description = "";$prix = "24";}
        if($item == "Gaine – jarretière"){$poids = "0.1";$description = "";$prix = "11";}
        if($item == "Gaine – manchette"){$poids = "0.1";$description = "";$prix = "13";}
        if($item == "Coffre en bois"){$poids = "1";$description = "";$prix = "18";}
        if($item == "Coffre en bois (large)"){$poids = "10";$description = "";$prix = "30";}
    }
    if($catégorie == "3"){  // nourriture
        if($item == "Ration de survie"){$poids = "1";$description = "Vous permez de survivre une journée avec une ration.";$prix = "5";}
    }
    if($catégorie == "4"){  // outil
        if($item == "Ustensiles de cuisine"){$poids = "3";$description = "Permet de cuisiner";$prix = "15";}
        if($item == "Equipement de pêche"){$poids = "0.5";$description = "+2 en Survie pour la pêche";$prix = "27";}
        if($item == "Kit de maquillage"){$poids = "0.5";$description = "+2 en Séduction & Charisme";$prix = "35";}
        if($item == "Kit d’écriture"){$poids = "1";$description = "Permet d’écrire des lettres, des notes etc";$prix = "25";}
    }
    if($catégorie == "5"){  // alchimie
        if($item == "Herbes apaisantes"){$poids = "0.1";$description = "Les herbes apaisantes placées dans une plaie soulagent la douleur, réduisant les négatifs des blessures critiques de 2. Les herbes apaisantes réduisent également les pénalités de la mort imminente de 2. Les herbes apaisantes fonctionnent pendant 2d10 tours, puis vous pouvez appliquer une autre dose";$prix = "12";}
    }

    $prixT = $quantité*$prix;
    if($Argent >= $prixT){
        $sql = $conn->prepare("SELECT * FROM witcher_inventaire2 WHERE Joueur =:joueur AND Nom = :nom");
        $sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
        $sql->bindValue(':nom', $item, PDO::PARAM_STR);
        $sql->execute();    
        $pseudoINbdd = $sql->rowCount();
    
        if($pseudoINbdd != 0){
            $result = $sql->setFetchMode(PDO::FETCH_ASSOC);
            while ($result = $sql->fetch()){$Oquantité = $result['Durabilité'];}
            $Nquantité = $quantité+$Oquantité;
            $sql2 = $conn->prepare("UPDATE witcher_inventaire2 SET Durabilité =:1 WHERE Joueur =:2 AND Nom =:3");
                $sql2->bindValue(':1', $Nquantité, PDO::PARAM_STR);
                $sql2->bindValue(':2', $joueur, PDO::PARAM_STR);
                $sql2->bindValue(':3', $item, PDO::PARAM_STR);
            $sql2->execute();
    
            echo "Achat effectué pour $prixT couronnes. Vous avez maintenant $Nquantité $item dans l'inventaire.";
        }
        else{
            // Joueur ; Type ; SousType ; Nom ; Poids ; Description ; Protection ; Durabilité ; EV
            $stmt = $conn->prepare("INSERT INTO witcher_inventaire2 (Joueur, Type, Nom, Poids, Description, Durabilité)
            VALUES (:1, 'Sac', :2, :3, :4, :5)");
                $stmt->bindParam(':1', $joueur);
                $stmt->bindParam(':2', $item);
                $stmt->bindParam(':3', $poids);
                $stmt->bindParam(':4', $description);
                $stmt->bindParam(':5', $quantité);
                $stmt->execute();
            $stmt=null;
            echo "Achat effectué pour $prixT couronnes. Vous avez maintenant $quantité $item dans l'inventaire.";
        }
        $ArgentN = $Argent-$prixT;
        $sql = "UPDATE witcher_stat SET Argent=? WHERE Joueur=?";
        $stmt= $conn->prepare($sql);
        $stmt->execute([$ArgentN,$joueur]);
        $sql=null;$stmt=null;
    }
    else{echo "Vous n'avez pas assez de couronnes pour effectuer cet achat.";}
}
$conn = null;
?>