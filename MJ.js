function MI_item(){
    var Nombre = Number(document.getElementById('MI_item').value);
    var Loot = ["","Journal partiellement utilisé | Statuette étrange | Poupée magique noire", "Cuisse de dinde enveloppée | Copeaux d'ongle | Masque étrange", "Médaillon | Pot de cendres | Cercle étrange", "Miroir à main | Collier étrangleur | Oreille d'elfe" , "Instrument | Souris taxidermée | Pieu en bois avec runes", "Badge de guilde | Mèche de cheveux | Livre lié dans la peau", "Outils de voleurs | Lettre étrange | Partie de monstre (au choix du MJ)", "Peau d'animal | Instructions pour un métier | Unité de minerai rougeoyant "," Livre aléatoire | Fragment de pierre | Champignon hallucinogène "," Gourde | Poche pleine de gravier | Organe conservé dans un bocal "," Bague en argent | Fortunes griffonnées | Fiole de sang "," Menottes | Boule d'argile | Registres de magie noire "," Rouleau de lit | Remède populaire pour quelque chose | Main sanglante "," Dés | Pièce mécanique | Sac de dents "," Grand livre commercial | Os gratté | Crâne de monstre "," Vin pas cher | Sous-vêtements féminins | Notes sur les joueurs "," Carte de la région | Étrange viande séchée | Carte d'un endroit inconnu "," Flacon de spiritueux | Matériel de chantage | Oiseau mort " , "Porte-bonheur d'une certaine forme | Aides conjugales | Croquis fébriles "," Deck Gwent | Journal de rêve étrange | Notes insensés "," Tente | Arêtes de poisson | Parchemin illisible "," Esquisse d'une personne | Remarque avec un chiffre | Symbole écrit dans le sang "," Savon | Dent | Étrange statuette de jade "," Symbole sacré | Chaussure usée | Une mèche de cheveux blonds "," Allume feu | Rênes | Une étrange lampe vide "," Sifflet | Liste de personnes | Os humain écorcé "," Pierre du soleil | Cinq clous de fer | Chaussures de fer "," Liste de courses | Coquilles de mer étranges | Crâne humain "," 1 unité de plumes | Poésie étrange | Encensoir plein de sang séché "," Viande séchée ou poisson salé | Pain extrêmement moisi | Peau tatouée "," Poche d'épices | Clé inconnue | Dague rituelle "," Flacon vide | Papier avec des marques de rouge à lèvres | Anneau de magie noire "," Craie | Pointe de flèche | Langue coupée "];
    var Item = "";
    for (let i = 0; i < Nombre; i++) {
        var Rand = Math.floor(Math.random() * Math.floor(100))+1;
        if(Rand != 100){
            var Rand = Math.ceil(Rand/3);
        }else{var Rand = 33;}
        var Item = Item+Loot[Rand]+"<br>";
    }
    MI_item_aff.innerHTML = Item;    
}
function MI(){
    var Monstre = Number(MI_nbre.value);
    var Item = "";
    for (let i = 0; i < Monstre; i++) {
        var Rand = Math.floor(Math.random() * Math.floor(6))+1;
        var Item = Item+"Montre intelligent "+Number(i+1)+" : "+Rand+" items; ";
        var Item = Item+"<br>";
    }
    MI_aff.innerHTML = Item;
}
function Tanière(){
    // 1d6 corps / 3 monstres mais monstre L = 6 monstres
    var Monstre = Tanière_M.value; if(Monstre == null){var Monstre = "0";}
    var Monstre_large = Tanière_L.value; if(Monstre_large == null){var Monstre_large = "0";}

    var Nbre_Corps = Math.floor(Number(Number(Monstre)+Number(Monstre_large)*6));
    var Nbre_Corps = Math.floor(Number(Nbre_Corps)/3);
    const Corps = [];
    for (let i = 0; i < Nbre_Corps; i++) {
        Corps.push(Math.floor(Math.random() * Math.floor(6))+1);
    }
    var Item = "";
    for (let i = 0; i < Corps.length; i++) {
        var Rand = Math.floor(Math.random() * Math.floor(6))+1;
        var Item = Item+"Corps "+Number(i+1)+" : "+Rand+" items; ";
        var Item = Item+"<br>";
    }
    Tanière_aff.innerHTML = "Nombre de corps : "+Corps.length+"<br>"+Item;
}

function Humain(){
    var Nbre_Humain = Number(Humain_Nbre.value);
    var Item = "";
    for (let i = 0; i < Nbre_Humain; i++) {
        var Rand = Math.floor(Math.random() * Math.floor(10))+1;
        var Item = Item+"Humain "+Number(i+1)+" : "+Rand+" items; ";
        var Item = Item+"<br>";
    }
    Humain_aff.innerHTML = Item;

}

function Maison(){
    var check = document.getElementById('Maison');
    if(check.checked == true){
        var Rand = Math.floor(Math.random() * Math.floor(10))+1;
        var Rand2 = Math.floor(Math.random() * Math.floor(10))+1;
        var Item = Number(Rand)+Number(Rand2);
        Maison_aff.innerHTML = Item+" items dans la maison, si un loot <b>> 80%</b> c'est un objet rare ou un diagramme !"
    }
    else{Maison_aff.innerHTML = "";}
}

function Couronnes(){
    var Max = Number(Couronnes_max.value);
    var Rand = Math.floor(Math.random() * Math.floor(Max))+1;
    Couronnes_aff.innerHTML = Rand+" couronnes";

}

function INI(){
    var REF = Number(Initiative_REF.value);
    var Rand = Math.floor(Math.random() * Math.floor(10))+1;
    var Initiative = Number(REF)+Number(Rand);
    Initiative_aff.innerHTML = "Initiative = "+Initiative;
}

function ATQ(){
    var carac = Number(ATQ_Caractéristique.value);
    var compt = Number(ATQ_Comptétence.value);
    var mod = Number(ATQ_Mod.value);
    var Rand = Math.floor(Math.random() * Math.floor(10))+1;

    var ATQ = Number(carac+compt+mod+Rand);
    ATQ_aff.innerHTML = "Attaque : "+ATQ;
}

function Localisation(){
    var Nbre = Number(Localisation_Nbre.innerHTML)+1;
    Localisation_Nbre.innerHTML = Nbre;
    var Rand = Math.floor(Math.random() * Math.floor(10))+1;
if(Rand == "1"){var aff = "Tête : dmg x3";}
else if(Rand > "7"){var aff ="Jambe : dmg x0.5";}
else{var aff = "Torse : dmg x1";}
    Localisation_aff.innerHTML = "#"+Nbre+" : "+aff;
}

function Add_Méchant(){
    // crée un nouvel élément div
    var Nbre = Number(EN_nbre.innerHTML)+1;
    EN_nbre.innerHTML = Nbre;

  var newDiv = document.createElement("div");
  newDiv.id = "Ennemie"+Nbre;

    var Nom = EN_nom.value;
    var Initiative = EN_initiative.value;
    var PV = EN_vie.value;
    var Endurance = EN_STA.value;

    // Ajout ATK
    var ATK = document.getElementById('ordre_atk0').innerHTML;
    document.getElementById('ordre_atk0').innerHTML = ATK+'-'+Initiative+','+Nom;    

    var newNom = document.createElement("span");
    newNom.id = "Ennemie_Nom_"+Nbre;
    var newContentNom = document.createTextNode(Nom);
    newNom.appendChild(newContentNom);
    var newIni = document.createElement("span");
    newIni.id = "Ennemie_Ini_"+Nbre;
    var newContentIni = document.createTextNode(Initiative);
    newIni.appendChild(newContentIni);
    var newPV = document.createElement("span");
    newPV.id = "Ennemie_PV_"+Nbre;
    var newContentPV = document.createTextNode(PV);
    newPV.appendChild(newContentPV);
    var newSTA = document.createElement("span");
    newSTA.id = "Ennemie_STA_"+Nbre;
    var newContentSTA = document.createTextNode(Endurance);
    newSTA.appendChild(newContentSTA);

    var newNombre = document.createElement("span");
    newNombre.id = "Ennemie_Nombre_"+Nbre;
    newNombre.style.display = "none";
    var newContentNombre = document.createTextNode('0');
    newNombre.appendChild(newContentNombre);

//    newDiv.appendChild("Ennemie #"+Nbre+": "+newNom+", initiative: "+newIni+", PV: "+newPV+", Endurance: "+newSTA);

var newContent1 = document.createTextNode('Ennemie #'+Nbre+" : ");
newDiv.appendChild(newContent1);
    newDiv.appendChild(newNom);
var newContent2 = document.createTextNode(", initiative : ");
newDiv.appendChild(newContent2);
    newDiv.appendChild(newIni);
var newContent3 = document.createTextNode(", PV: ");
newDiv.appendChild(newContent3);
    newDiv.appendChild(newPV);
var newContent4 = document.createTextNode(", Endurance: ");
newDiv.appendChild(newContent4);
    newDiv.appendChild(newSTA);
    newDiv.appendChild(newNombre);

  // et lui donne un peu de contenu
  // var newContent = document.createTextNode('Hi there and greetings!');
  // ajoute le nœud texte au nouveau div créé
  // newDiv.appendChild(newContent);

  méchant.appendChild(newDiv);

  document.getElementById("Ennemie"+Nbre).style.paddingBottom = "25px";
  
  var option = document.createElement("option");
  option.text = Nom;
  option.value = Nbre;
    Combat_Nom.add(option);
}

function Combat(){
    var nom = Combat_Nom.value;
    var PV = Combat_PV.value;   if(PV == ""){var PV = "0";}
    var PV_aff = document.getElementById('Ennemie_PV_'+nom).innerHTML;
    if(PV == null || PV == "" || PV == "0"){}
    else{
        var PV_aff = Number(PV_aff)-Number(PV);
        document.getElementById('Ennemie_PV_'+nom).innerHTML = PV_aff;
        document.getElementById('Ennemie_PV_'+nom).className = "bold";
        if(PV_aff <= "0"){
            document.getElementById('Ennemie_PV_'+nom).style.color = "red";
            document.getElementById('Ennemie_PV_'+nom).innerHTML = "MORT";
        }
    }
    var STA = Combat_STA.value; if(STA == ""){var STA = "0";}
    if(STA == null || STA == "" || STA == "0"){}
    else{
        var STA_aff = document.getElementById('Ennemie_STA_'+nom).innerHTML;
        var STA_aff = Number(STA_aff)-Number(STA);
        document.getElementById('Ennemie_STA_'+nom).innerHTML = STA_aff;
        document.getElementById('Ennemie_STA_'+nom).className = "bold";
        if(PV_aff <= "0"){document.getElementById('Ennemie_STA_'+nom).style.color = "red";}
    }

    if(isNaN(Number(PV_aff))){document.getElementById('Ennemie_PV_'+nom).innerHTML = "MORT";}
    else{
        var Nbre = Number(document.getElementById('Ennemie_Nombre_'+nom).innerHTML)+1;
        document.getElementById('Ennemie_Nombre_'+nom).innerHTML = Nbre;

        var newContent = document.createTextNode("\n#LOG"+Nbre+": Perte de "+PV+" PV, Perte de "+STA+" points d'endurance.");
        
        var newDiv = document.createElement("div");
        newDiv.appendChild(newContent);
        // ajoute le nœud texte au nouveau div créé
        document.getElementById('Ennemie'+nom).appendChild(newDiv);
    }
}

function perlinpinpin(){
    VASTA_1.style.display = "block";
    VASTA_2.style.display = "none";
    VASTA_3.style.display = "none";
    VASTA_4.style.display = "none";
}
function perlinpinpin2(){
    VASTA_1.style.display = "none";
    VASTA_2.style.display = "block";
    VASTA_3.style.display = "none";
    VASTA_4.style.display = "none";
}
function perlinpinpin3(){
    VASTA_1.style.display = "none";
    VASTA_2.style.display = "none";
    VASTA_3.style.display = "block";
    VASTA_4.style.display = "none";
}
function perlinpinpin4(){
    VASTA_1.style.display = "none";
    VASTA_2.style.display = "none";
    VASTA_3.style.display = "none";
    VASTA_4.style.display = "block";
}

function cc_calcul(){
    var attack = document.getElementById('cc_i1').value;
    var défenseur = document.getElementById('cc_i2').value;

    var cc = Number(attack)-Number(défenseur);
    if(cc <= "0"){var cc_aff = "Echec de l'attaque !";}
    else{
        var cc_aff = "Réussite de l'attaque !";
        if(cc > "6"){
            var Rand1 = Math.floor(Math.random() * Math.floor(6))+1;
            var Rand2 = Math.floor(Math.random() * Math.floor(6))+1;
            var Rand = Number(Rand1)+Number(Rand2);
            if(cc < "10"){var cc_aff = "CC Simple : bonus +3 aux DMG -> (roll) "+Rand;}
            if(cc > "9" && cc < "13"){var cc_aff = "CC Complexe : bonus +5 aux DMG -> (roll) "+Rand;}
            if(cc > "12" && cc < "15"){var cc_aff = "CC Difficile : bonus +8 aux DMG -> (roll) "+Rand;}
            if(cc > "14"){var cc_aff = "CC Mortel : bonus +10 aux DMG -> (roll) "+Rand;}
        }
    }

    document.getElementById('attaque_aff').innerHTML = cc_aff;
}

function calcul_dmg_mob(){
    var dé = document.getElementById('dmg_mob_1').value;
    var face = document.getElementById('dmg_mob_2').value;
    var mod = document.getElementById('dmg_mob_3').value;

    var DMG = "0";
    for (let i = 0; i < dé; i++) {
        var Rand = Math.floor(Math.random() * Math.floor(face))+1;
        var DMG = Number(DMG)+Number(Rand);
    }
    if(mod != ""){var DMG = Number(DMG)+Number(mod);}
    document.getElementById('dmg_mob_aff').innerHTML = DMG;
}

$(document).ready(function() {
    $('#BTN_MJ_0').on('click', function() {
        var valeur = $('#TEST_TEST0').val();
        if(valeur!=""){
          $.ajax({
            url: "MJ_0.php",
            type: "POST",
            data: {valeur: valeur,},
            cache: false,success: function(data){document.getElementById('P4_LOG').innerHTML = document.getElementById('P4_LOG').innerHTML+"<br>"+data;}
          });
        }
    });
    $('#BTN_MJ_2').on('click', function() {
        var valeur = $('#TEST_TEST').val();
        if(valeur!=""){
          $.ajax({
            url: "MJ_2.php",
            type: "POST",
            data: {valeur: valeur,},
            cache: false,success: function(data){document.getElementById('P4_LOG').innerHTML = document.getElementById('P4_LOG').innerHTML+"<br>"+data;}
          });
        }
    });
    $('#BTN_MJ_3').on('click', function() {
        var valeur = $('#TEST_TEST2').val();
        if(valeur!=""){
            document.getElementById('P4_LOG').innerHTML = document.getElementById('P4_LOG').innerHTML+"<br>"+valeur;
        }
    });  
    $.ajax({
        url: "MJ_4.php",
        type: "POST",
        cache: false,
        success: function(data){$('#liste_joueurs').html(data);}
    });
    $.ajax({
        url: "MJ_4bis.php",
        type: "POST",
        cache: false,
        success: function(data){$('#liste_joueurs2').html(data);}
    });
    $.ajax({
        url: "MJ_4bis2.php",
        type: "POST",
        cache: false,
        success: function(data){$('#liste_joueurs3').html(data);}
    });
    $.ajax({
        url: "MJ_4bis3.php",
        type: "POST",
        cache: false,
        success: function(data){$('#liste_joueurs4').html(data);}
    });
    $('#BTN_MJ_4').on('click', function() {
        var joueur = $('#MJ_ADD_1').val();
        var acte = $('#MJ_ADD_2').val();
        var valeur = $('#MJ_ADD_3').val();
        if(valeur!="" && acte!="" && joueur !=""){
          $.ajax({
            url: "MJ_5.php",
            type: "POST",
            data: {joueur: joueur,acte: acte,valeur: valeur,},
            cache: false,
            success: function(data){document.getElementById('P4_LOG').innerHTML = document.getElementById('P4_LOG').innerHTML+"<br>"+data;}
          });
        }
        else{alert(joueur+" - "+acte+" - "+valeur)}
      
    });
    $('#BTN_MJ_5').on('click', function() {
        var joueur = $('#MJ_ADD_4').val();
        var type = $('#MJ_ADD_5').val();
        var nom = $('#MJ_ADD_6').val();
        var poids = $('#MJ_ADD_7').val();
        if(nom!="" && poids!="" && joueur !="" && type !=""){            
            if(type == "1" || type == "" || type == "3" || type == "4"){
                var dégâts = $('#MJ_ADD_8').val();
                var durabilité = $('#MJ_ADD_9').val();
                var précision = $('#MJ_ADD_10').val();
                var effet = $('#MJ_ADD_11').val();
                if(dégâts!="" && durabilité!="" && précision!=""){
                    $.ajax({
                        url: "MJ_7bis.php",
                        type: "POST",
                        data: {joueur: joueur,type: type,nom: nom,poids: poids,dégâts: dégâts,durabilité: durabilité, précision: précision, effet: effet,},
                        cache: false,
                        success: function(data){document.getElementById('P4_LOG').innerHTML = document.getElementById('P4_LOG').innerHTML+"<br>"+data;}
                    });
                }
                else{alert('il manque des trucs')}
                
            }
            if(type == "5" || type == "6" || type == "7"){
                var protection = $('#MJ_ADD_8').val();
                var EV = $('#MJ_ADD_10').val();
                var effet = $('#MJ_ADD_11').val();
                if(protection!="" && EV!=""){
                    $.ajax({
                        url: "MJ_7bis2.php",
                        type: "POST",
                        data: {joueur: joueur,type: type,nom: nom,poids: poids,protection: protection, EV: EV, effet: effet,},
                        cache: false,
                        success: function(data){document.getElementById('P4_LOG').innerHTML = document.getElementById('P4_LOG').innerHTML+"<br>"+data;}
                    });
                }
                else{alert('il manque des trucs')}
            }
            if(type == "8"){
                var quantité = $('#MJ_ADD_9').val();
                var description = $('#MJ_ADD_11').val();
                $.ajax({
                    url: "MJ_7.php",
                    type: "POST",
                    data: {joueur: joueur,type: type,nom: nom,poids: poids, description: description, quantité: quantité,},
                    cache: false,
                    success: function(data){document.getElementById('P4_LOG').innerHTML = document.getElementById('P4_LOG').innerHTML+"<br>"+data;}
                  });
            }
        }
        else{alert(joueur+" - "+type+" - "+nom+" - "+poids)}
      
    });
    $('#BTN_MJ_6').on('click', function() {
        var joueur = $('#MJ_ADD_3_1').val();
        var type = $('#MJ_ADD_3_2').val();
        if(joueur!="" && type !=""){            
                $.ajax({
                    url: "MJ_9.php",
                    type: "POST",
                    data: {joueur: joueur,type: type,},
                    cache: false,
                    success: function(data){document.getElementById('MJ_ADD_3_aff').innerHTML = data;}
                  });
        }
        else{alert(joueur+" - "+type)}
    });
    $('#BTN_MJ_7').on('click', function() {
        var type = $('#MJ_ADD_3_4').val();
        var ID = $('#MJ_ADD_3_3').val();
        var edit = $('#MJ_ADD_3_5').val();
        if(type !="" && ID !=""){            
                $.ajax({
                    url: "MJ_9bis.php",
                    type: "POST",
                    data: {type: type,edit: edit,ID: ID},
                    cache: false,
                    success: function(data){document.getElementById('P4_LOG').innerHTML = document.getElementById('P4_LOG').innerHTML+"<br>"+data;}
                  });
        }
        else{alert(ID+" - "+type)}
      
    });
    $('#BTN_MJ_8').on('click', function() {
        var joueur = $('#MJ_ADD_4_1').val();
        var type = $('#MJ_ADD_4_2').val();
        if(joueur!="" && type !=""){            
                $.ajax({
                    url: "MJ_8.php",
                    type: "POST",
                    data: {joueur: joueur,type: type,},
                    cache: false,
                    success: function(data){document.getElementById('MJ_ADD_4_3').value = data;}
                  });
        }
        else{alert(joueur+" - "+type)}
      
    });
    $('#BTN_MJ_9').on('click', function() {
        var joueur = $('#MJ_ADD_4_1').val();
        var type = $('#MJ_ADD_4_2').val();
        var edit = $('#MJ_ADD_4_3').val();
        if(joueur!="" && type !=""){            
                $.ajax({
                    url: "MJ_8bis.php",
                    type: "POST",
                    data: {joueur: joueur,type: type,edit: edit,},
                    cache: false,
                    success: function(data){document.getElementById('P4_LOG').innerHTML = document.getElementById('P4_LOG').innerHTML+"<br>"+data;}
                  });
        }
        else{alert(joueur+" - "+type)}
      
    });
  }); 


function oncalculebien6(){
    var dégâts = $('#TEST_COMBAT_1').val();
    var armure = $('#TEST_COMBAT_2').val();
    var localisation = $('#TEST_COMBAT_3').val();
    var RV = $('#TEST_COMBAT_4').val();

    var CalculA = Number(dégâts)-Number(armure);
    if(CalculA < "0"){var aff = "Blocage des dégâts. Perte de "+dégâts+" points d'armure";}
    else{
        if(localisation == "1"){CalculA = Math.floor(Number(CalculA)*3);}
        if(localisation == "3"){CalculA = Math.floor(Number(CalculA)/2);}

        if(RV == "2"){CalculA = Number(CalculA)*2;}
        if(RV == "1"){CalculA = Math.floor(Number(CalculA)/2);}

        if(armure > "0"){var aff = "Le cible subit "+CalculA+" points de dégâts et pert "+armure+" points d'armure.";}
        else{var aff = "Le cible subit "+CalculA+" points de dégâts.";}
    }
    document.getElementById('P3_LOG').innerHTML = document.getElementById('P3_LOG').innerHTML+"<br>"+aff;
}

function P3_A(){
    document.getElementById('P3_1').style.display = "block";
    document.getElementById('P3_2').style.display = "none";
    document.getElementById('P3_3').style.display = "none";
}
function P3_B(){
    document.getElementById('P3_2').style.display = "block";
    document.getElementById('P3_1').style.display = "none";
    document.getElementById('P3_3').style.display = "none";
}
function P3_C(){
    document.getElementById('P3_3').style.display = "block";
    document.getElementById('P3_2').style.display = "none";
    document.getElementById('P3_1').style.display = "none";
}

function trie1(){
    var liste = document.getElementById('ordre_atk0').innerHTML;
    let Splite0 = liste.split('-');
    var Lan0 = Splite0.length;   
   
    var arr = [];
    for (let i = 1; i < Lan0; i++) {
        var AAA = Splite0[i].split(',');
        var AAAA = [];
        AAAA.push(AAA[0]);
        AAAA.push(AAA[1]);
        arr.push(AAAA);
    }
    var XYZ = arr.sort(function(a,b) {return b[0]-a[0]});
    
    var aff = "";
    for (let i = 0; i < (Lan0-1); i++) {
        var aff = aff+'\n'+(i+1)+':'+XYZ[i][1];
    }
    document.getElementById('ordre_atk').innerHTML = aff;
}