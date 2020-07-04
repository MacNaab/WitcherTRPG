function oncalculebien(){
    var A = document.getElementById('P4_Caract').value;
    var B = document.getElementById('P4_Compt').value;if(B == "0"){var B = "rien";}
    var C = document.getElementById('P4_Mod').value;

    if(A == "1"){var Caract = document.getElementById('P2_INT').innerHTML;var A_aff = "intelligence";}
    if(A == "2"){var Caract = document.getElementById('P2_REF').innerHTML;var A_aff = "reflexe";}
    if(A == "3"){var Caract = document.getElementById('P2_DEX').innerHTML;var A_aff = "dextérité";}
    if(A == "4"){var Caract = document.getElementById('P2_COR').innerHTML;var A_aff = "corps";}
    if(A == "5"){var Caract = document.getElementById('P2_VIT').innerHTML;var A_aff = "vitesse";}
    if(A == "6"){var Caract = document.getElementById('P2_EMP').innerHTML;var A_aff = "empathie";}
    if(A == "7"){var Caract = document.getElementById('P2_TEC').innerHTML;var A_aff = "technique";}
    if(A == "8"){var Caract = document.getElementById('P2_VOL').innerHTML;var A_aff = "volonté";}
    if(A == "9"){var Caract = document.getElementById('P2_CHANCE').innerHTML;var A_aff = "chance";}

    if(document.getElementById('P2_'+B)){var Compt = document.getElementById('P2_'+B).innerHTML;}
    else{var Compt = "0";}
    if(C == ""){var C = "0";}

    var Rand = Math.floor(Math.random() * Math.floor(10))+1;
    var Rand_aff = Rand;
    var Total = Number(Rand)+Number(Caract)+Number(Compt)+Number(C);
    if(Number(Rand)=="1"){
        var Rand2 = Math.floor(Math.random() * Math.floor(10))+1;
        var Rand_aff = '<b>Echec !</b> '+Rand+" -> "+Rand2;
        var Rand = Number(Rand)+Number(Rand2);
        var Total = Number(Caract)+Number(Compt)+Number(C)-Number(Rand);
    }
    if(Number(Rand)=="10"){
        var Rand2 = Math.floor(Math.random() * Math.floor(10))+1;
        var Rand_aff = '<b>Critique !</b> '+Rand+" -> "+Rand2;
        var Rand = Number(Rand)+Number(Rand2);
        var Total = Number(Rand)+Number(Caract)+Number(Compt)+Number(C);
    }
    var SOMME = Rand_aff+', '+Caract+" (caractéristique), "+Compt+" (compétence), "+C+" (modificateur)";
    if(B != "rien"){var aff = 'Jet de <b>'+B+'</b>: '+Total+' ('+SOMME+')';}
    else{var aff = 'Jet de <b>'+A_aff+'</b>: '+Total+' ('+SOMME+')';}

    document.getElementById('P4_LOG').innerHTML = document.getElementById('P4_LOG').innerHTML+"<br>"+aff;
}

function oncalculebien2(){
    var A = document.getElementById('P4_Armes').value;

//    alert(document.getElementById('ARME_'+A+'_dmg').innerHTML);
    var arme = document.getElementById('ARME_'+A+'_dmg').innerHTML;
    var effet = document.getElementById('ARME_'+A+'_effet').innerHTML;

    let Splite = arme.split('d');
    var dé = Splite[0];
    var reste = Splite[1];
        let Splate = reste.split('+');
        var face = Splate[0];
        var brut = Splate[1];

    var DMG = "0";var Rand_aff = "";
    for (let i = 0; i < dé; i++) {
        var Rand = Math.floor(Math.random() * Math.floor(face))+1;
        var DMG = Number(DMG)+Number(Rand);
        var Rand_aff = Rand_aff+Rand+", ";
    }
    if(Splate[1]){var DMG = Number(DMG)+Number(Splate[1]);var Rand_aff = Rand_aff+" +"+Splate[1];}

    var aff = "Jet de dommages, <b>"+A+"</b>: "+DMG+" ("+Rand_aff+")";

    let Spliter = effet.split('Argent (');
    if(Spliter[1]){
            var argent_arme = Spliter[1];
            let SpliterA = argent_arme.split(')');
            let SpliterB = SpliterA[0].split('d');
            var Argent_dé = SpliterB[0];
            var Argent_face = SpliterB[1];
            var Argent_DMG = "0";var Argent_Rand_aff = "";
            for (let i = 0; i < Argent_dé; i++) {
                var Rand = Math.floor(Math.random() * Math.floor(Argent_face))+1;
                var Argent_DMG = Number(Argent_DMG)+Number(Rand);
                var Argent_Rand_aff = Argent_Rand_aff+Rand+", ";
            }
            var DMG2 = Number(DMG)+Number(Argent_DMG);
            var Rand_aff2 = Rand_aff+" || "+Argent_Rand_aff;
            var aff = "Jet de dommages, <b>"+A+"</b>: "+DMG+" ("+Rand_aff+") <br> Si monstre : "+DMG2+" ("+Rand_aff2+")";
    }


    document.getElementById('P4_LOG').innerHTML = document.getElementById('P4_LOG').innerHTML+"<br>"+aff;
}

function oncalculebien3(){
    var A = document.getElementById('P2_POINGS').innerHTML;

    let Splite = A.split('d');
    var dé = Splite[0];
    var reste = Splite[1];
        let Splate = reste.split('+');
        let Splote = reste.split('-');
        var face = Splate[0];
        var brut = Splate[1];

    var DMG = "0";var Rand_aff = "";
    for (let i = 0; i < dé; i++) {
        var Rand = Math.floor(Math.random() * Math.floor(face))+1;
        var DMG = Number(DMG)+Number(Rand);
        var Rand_aff = Rand_aff+Rand+", ";
    }
    if(Splate[1]){var DMG = Number(DMG)+Number(Splate[1]);var Rand_aff = Rand_aff+" +"+Splate[1];}
    if(Splote[1]){var DMG = Number(DMG)-Number(Splote[1]);var Rand_aff = Rand_aff+" -"+Splote[1];}

    var aff = "Corps à corps, <b>Poings</b>: "+DMG+" ("+Rand_aff+")";
    document.getElementById('P4_LOG').innerHTML = document.getElementById('P4_LOG').innerHTML+"<br>"+aff;
   
}
function oncalculebien4(){
    var A = document.getElementById('P2_PIEDS').innerHTML;

    let Splite = A.split('d');
    var dé = Splite[0];
    var reste = Splite[1];
        let Splate = reste.split('+');
        let Splote = reste.split('-');
        var face = Splate[0];
        var brut = Splate[1];

    var DMG = "0";var Rand_aff = "";
    for (let i = 0; i < dé; i++) {
        var Rand = Math.floor(Math.random() * Math.floor(face))+1;
        var DMG = Number(DMG)+Number(Rand);
        var Rand_aff = Rand_aff+Rand+", ";
    }
    if(Splate[1]){var DMG = Number(DMG)+Number(Splate[1]);var Rand_aff = Rand_aff+" +"+Splate[1];}
    if(Splote[1]){var DMG = Number(DMG)-Number(Splote[1]);var Rand_aff = Rand_aff+" -"+Splote[1];}

    var aff = "Corps à corps, <b>Pieds</b>: "+DMG+" ("+Rand_aff+")";
    document.getElementById('P4_LOG').innerHTML = document.getElementById('P4_LOG').innerHTML+"<br>"+aff;
   
}

function oncalculebien5(){
    var A = document.getElementById('P4_dé_x').value;
    var Rand = Math.floor(Math.random() * Math.floor(A))+1;

    var aff = "Jet "+A+": "+Rand;
    document.getElementById('P4_LOG').innerHTML = document.getElementById('P4_LOG').innerHTML+"<br>"+aff;
}

function achat(){
    {
      $('#P3_ACHAT2')
      .empty()
    }
    if(P3_ACHAT.value == "1"){ // Equipement Général
      $('#P3_ACHAT2')
      .append('<option value="Bougies">Bougies</option><option value="Carte du Continent">Carte du Continent</option><option value="Chaines">Chaines</option><option value="Corde">Corde</option><option value="Craie">Craie</option><option value="Dé pipé">Dé pipé</option><option value="Fers">Fers</option><option value="Gourde">Gourde</option><option value="Grappin">Grappin</option><option value="Instrument">Instrument</option><option value="Jeu de Gwent">Jeu de Gwent</option><option value="Jeu de Poker">Jeu de Poker</option><option value="Journal / Registre">Journal / Registre</option><option value="Lanterne">Lanterne</option><option value="Miroir à main">Miroir à main</option><option value="Parfum">Parfum</option><option value="Pipe">Pipe</option><option value="Piton">Piton</option><option value="Sablier">Sablier</option><option value="Sac de couchage">Sac de couchage</option><option value="Savon">Savon</option><option value="Silex et Acier">Silex et Acier</option><option value="Symbole sacré">Symbole sacré</option><option value="Tabac">Tabac</option><option value="Tente">Tente</option><option value="Tente (large)">Tente (large)</option><option value="Torche">Torche</option><option value="Verrou">Verrou</option><option value="Verrou (difficile)">Verrou (difficile)</option>');
    }
    if(P3_ACHAT.value == "2"){ // Conteneur
      $('#P3_ACHAT2')
      .append('<option value="Carquois">Carquois</option><option value="Panier">Panier</option><option value="Pochette ceinture">Pochette ceinture</option><option value="Sac">Sac</option><option value="Sac à dos">Sac à dos</option><option value="Pochette secrète">Pochette secrète</option><option value="Gaine – arc">Gaine – arc</option><option value="Gaine – jarretière">Gaine – jarretière</option><option value="Gaine – manchette">Gaine – manchette</option><option value="Coffre en bois">Coffre en bois</option><option value="Coffre en bois (large)">Coffre en bois (large)</option>');
    }
    if(P3_ACHAT.value == "3"){ // Nourriture
      $('#P3_ACHAT2')
      .append('<option value="Ration de survie">Ration de survie</option>');
    }
    if(P3_ACHAT.value == "4"){ // Outil
      $('#P3_ACHAT2')
      .append('<option value="Ustensiles de cuisine">Ustensiles de cuisine</option><option value="Equipement de pêche">Equipement de pêche</option><option value="Kit de maquillage">Kit de maquillage</option><option value="Kit d’écriture">Kit d’écriture</option>');
    }
    if(P3_ACHAT.value == "5"){ // Alchimie
      $('#P3_ACHAT2')
      .append('<option value="Herbes apaisantes">Herbes apaisantes</option>');
    }
    if(P3_ACHAT.value == "6"){ // Arme
        $('#P3_ACHAT2')
        .append('<option value="Arbalète">Arbalète</option><option value="Arbalète à main">Arbalète à main</option><option value="Arc court">Arc court</option><option value="Arc long">Arc long</option><option value="Couteau de lancer">Couteau de lancer</option><option value="Dague">Dague</option><option value="EP">Épée longue en fer</option><option value="Flèches Standard">Flèches Standard</option><option value="Hache">Hache</option><option value="Hache de jet">Hache de jet</option><option value="Lance">Lance</option><option value="Poing américain">Poing américain</option>');
    }
    if(P3_ACHAT.value == "7"){ // Armure
      $('#P3_ACHAT2')
      .append('<option value="Coiffe de chaîne">Coiffe de chaîne</option><option value="Gambison">Gambison</option><option value="Pantalon blindé">Pantalon blindé</option><option value="Bouclier en cuir">Bouclier en cuir</option>');
    }
    }

$(document).ready(function() {
    $('#P3_ACHAT_BOUTTON').on('click', function() {
        var joueur = $('#exampleInputEmail1').val();
        var item = $('#P3_ACHAT2').val();
        var catégorie = $('#P3_ACHAT').val();
        var quantité = $('#P3_ACHAT4').val();if(quantité == ""){var quantité = "1";}
        $.ajax({
            url: "index_php9.php",
            type: "POST",
            data: {
              joueur: joueur,item: item,catégorie: catégorie,quantité: quantité,
            },
            cache: false,
            success: function(data){
                $('#P3_ACHAT3').html(data); 
            }
          });
      });
});

function achat_aff(){
    var X = document.getElementById('P3_ACHAT2').value;

    if(X == "Sac de couchage"){var aff = "Prix: 16; Poids: 1.5";}
    if(X == "Bougies"){var aff = "Prix: 1;  Poids: 0.1";}
    if(X == "Craie"){var aff = "Prix: 2;  Poids: 0.1";}
    if(X == "Jeu de Poker"){var aff = "Prix: 25;  Poids: 0.5";}
    if(X == "Silex et Acier"){var aff = "Prix: 6;  Poids: 0.1";}
    if(X == "Grappin"){var aff = "Prix: 13;  Poids: 0.5";}
    if(X == "Jeu de Gwent"){var aff = "Prix: 5;  Poids: 0.1";}
    if(X == "Miroir à main"){var aff = "Prix: 27;  Poids: 0.5";}
    if(X == "Symbole sacré"){var aff = "Prix: 14;  Poids: 0.1";}
    if(X == "Sablier"){var aff = "Prix: 38;  Poids: 1";}
    if(X == "Instrument"){var aff = "Prix: 38;  Poids: 1";}
    if(X == "Journal / Registre"){var aff = "Prix: 8;  Poids: 0.5";}
    if(X == "Lanterne"){var aff = "Prix: 33;  Poids: 1";}
    if(X == "Dé pipé"){var aff = "Prix: 12;  Poids: 0.1";}
    if(X == "Verrou"){var aff = "Prix: 34;  Poids: 0.1";}
    if(X == "Verrou (difficile)"){var aff = "Prix: 68;  Poids: 0.1";}
    if(X == "Fers"){var aff = "Prix: 30;  Poids: 0.5";}
    if(X == "Carte du Continent"){var aff = "Prix: 18;  Poids: 0.1";}
    if(X == "Parfum"){var aff = "Prix: 0.1;  Poids: 22";}
    if(X == "Pipe"){var aff = "Prix: 0.1;  Poids: 19";}
    if(X == "Piton"){var aff = "Prix: 2;  Poids: 0.1";}
    if(X == "Corde"){var aff = "Prix: 20;  Poids: 1.5";}
    if(X == "Chaines"){var aff = "Prix: 50;  Poids: 2";}
    if(X == "Savon"){var aff = "Prix: 4;  Poids: 0.1";}
    if(X == "Tente"){var aff = "Prix: 19;  Poids: 4";}
    if(X == "Tente (large)"){var aff = "Prix: 36;  Poids: 8";}
    if(X == "Tabac"){var aff = "Prix: 4;  Poids: 0.1";}
    if(X == "Torche"){var aff = "Prix: 1;  Poids: 0.1";}
    if(X == "Gourde"){var aff = "Prix: 8;  Poids: 1";}

    if(X == "Carquois"){var aff = "Prix: 19;  Poids: 1";}
    if(X == "Panier"){var aff = "Prix: 10;  Poids: 0.5";}
    if(X == "Pochette ceinture"){var aff = "Prix: 7;  Poids: 0.1";}
    if(X == "Sac"){var aff = "Prix: 3;  Poids: 0.1";}
    if(X == "Sac à dos"){var aff = "Prix: 14;  Poids: 1";}
    if(X == "Pochette secrète"){var aff = "Prix: 11;  Poids: 0.1";}
    if(X == "Gaine – arc"){var aff = "Prix: 24;  Poids: 1.5";}
    if(X == "Gaine – jarretière"){var aff = "Prix: 11;  Poids: 0.1";}
    if(X == "Gaine – manchette "){var aff = "Prix: 13;  Poids: 0.1";}
    if(X == "Coffre en bois"){var aff = "Prix: 18;  Poids: 1";}
    if(X == "Coffre en bois (large)"){var aff = "Prix: 30;  Poids: 10";}

    if(X == "Ration de survie"){var aff = "Prix: 1;  Poids: 5";}

    if(X == "Ustensiles de cuisine"){var aff = "Prix: 15; Poids: 3;    Permet de cuisiner";}
    if(X == "Equipement de pêche"){var aff = "Prix: 27; Poids: 0.5;    +2 en Survie pour la pêche";}
    if(X == "Kit de maquillage"){var aff = "Prix: 35; Poids: 0.5;    +2 Séduction & Charisme";}
    if(X == "Kit d’écriture"){var aff = "Prix: 25; Poids: 1;    Permet d’écrire des lettres, des notes etc";}

    if(X == "Herbes apaisantes"){var aff = "Prix: 12; Poids: 0.1;<br>Les herbes apaisantes placées dans une plaie soulagent la douleur, réduisant les négatifs des blessures critiques de 2. Les herbes apaisantes réduisent également les pénalités de la mort imminente de 2. Les herbes apaisantes fonctionnent pendant 2d10 tours, puis vous pouvez appliquer une autre dose.";}
    
    if(X == "EP"){var aff = "Prix: 160;    Poids: 1.5;  DMG: 2d6+2; Arme à 2 mains";}
    if(X == "Dague"){var aff = "Prix: 50; Poids: 0.5;    DMG: 1d6+2; Arme à 1 main";}
    if(X == "Hache"){var aff = "Prix: 205; Poids: 1;    DMG: 2d6+1; Arme à 1 main";}
    if(X == "Poing américain"){var aff = "Prix: 50; Poids: 0.5;    DMG: 1d6; Effet: Brawling; Arme à 1 main";}
    if(X == "Lance"){var aff = "Prix: 375; Poids: 3.5;    DMG: 3d6; Effet: Long Reach; Arme à 2 mains";}
    if(X == "Couteau de lancer"){var aff = "Prix: 50; Poids: 0.5;    DMG: 1d6;   Arme à 1 main";}
    if(X == "Hache de jet"){var aff = "Prix: 75; Poids: 1;    DMG: 2d6;    Arme à 1 main";}
    if(X == "Arc court"){var aff = "Prix: 290; Poids: 1;    DMG: 3d6+3; Portée: 100m;   Arme à 2 main";}
    if(X == "Arc long"){var aff = "Prix: 475; Poids: 2;    DMG: 4d6;    Portée: 200m;   Arme à 2 main";}
    if(X == "Arbalète à main"){var aff = "Prix: ; Poids: ;    DMG: 2d6+2;   Arme à 1 main";}
    if(X == "Arbalète"){var aff = "Prix: ; Poids: ;    DMG: 4d6+2;  Arme à 2 main";}
    if(X == "Flèches Standard"){var aff = "Prix: 1; Poids: 0.05";}
    
    if(X == "Coiffe de chaîne"){var aff = "Prix: 250; Poids: 1.5;    Protection: 12";}
    if(X == "Gambison"){var aff = "Prix: 100; Poids: 1;    Protection: 3";}
    if(X == "Pantalon blindé"){var aff = "Prix: 250; Poids: 3.5;    Protection: 12";}
    if(X == "Bouclier en cuir"){var aff = "Prix: 50; Poids: 0.5;    Protection: 4";}

    document.getElementById('P3_ACHAT3').innerHTML = aff;

}