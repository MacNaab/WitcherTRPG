$(document).ready(function(){
    $('#app-nav').load("htm/mj/nav.htm");	
    $('#app-content').load("htm/mj/page1.htm");	
    $('#app-table').load("htm/mj/table.htm");	
    $('#app-footer').load("htm/mj/footer.htm");
    $("body").css("margin-bottom", "0");
    $('#toast').load("htm/toast.htm");
});

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
    $("#MI_item_aff").html(Item);  
}
function MI(){
    var Monstre = Number(MI_nbre.value);
    var Item = "";
    for (let i = 0; i < Monstre; i++) {
        var Rand = Math.floor(Math.random() * Math.floor(6))+1;
        var Item = Item+"Montre intelligent "+Number(i+1)+" : "+Rand+" items; ";
        var Item = Item+"<br>";
    }
    $("#MI_aff").html(Item);
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
    $("#Tanière_aff").html("Nombre de corps : "+Corps.length+"<br>"+Item);
}

function Humain(){
    var Nbre_Humain = Number(Humain_Nbre.value);
    var Item = "";
    for (let i = 0; i < Nbre_Humain; i++) {
        var Rand = Math.floor(Math.random() * Math.floor(10))+1;
        var Item = Item+"Humain "+Number(i+1)+" : "+Rand+" items; ";
        var Item = Item+"<br>";
    }
    $("#Humain_aff").html(Item);
}

function Maison(){
    var check = document.getElementById('Maison');
    if(check.checked == true){
        var Rand = Math.floor(Math.random() * Math.floor(10))+1;
        var Rand2 = Math.floor(Math.random() * Math.floor(10))+1;
        var Item = Number(Rand)+Number(Rand2);
        $("#Maison_aff").html(Item+" items dans la maison, si un loot <b>> 80%</b> c'est un objet rare ou un diagramme !");
    }
    else{$("#Maison_aff").html('');}
}

function Couronnes(){
    var Max = Number(Couronnes_max.value);
    var Rand = Math.floor(Math.random() * Math.floor(Max))+1;
    $("#Couronnes_aff").html(Rand+" couronnes");
}