function todtb(e){
/*
    $.ajax({
        url: "data/pj.php",
        type: "POST",
        data: {
            nom: joueur,
            dtb: JSON_FICHE,
        },
        cache: false,
        success: function(data){
*/
            $("#toast1_H").html(e);
            $("#toast1_C").html(data);
            $("#toast1").toast('show');
/*
        }
    });
*/
}
var JSON_data = ""
$.getJSON('data/data.json', function(jd) {
	JSON_data = jd;
});

var log_backup = "<i>Début de l'aventure...</i>";

function oncalculebien(){
    var A = document.getElementById('P4_Caract').value;
    var B = document.getElementById('P4_Compt').value;if(B == "0"){var B = "rien";}
    var C = document.getElementById('P4_Mod').value;
    if(C == ""){C = 0;}else{C = Number(C);}
    var found = 0;
	var Compt = 0;
	var Caract = 0;
	if(B != "rien"){
		found = JSON_FICHE.Compétences.find(x => x.Nom == B);
		if(found != undefined){
            Caract = JSON_FICHE.Caractéristique[found.C];
            if(Effet[found.C]){C += Effet[found.C];}
            Compt = found.V;
            if(B == "Résistance à la contrainte"){
                if(Effet.Contrainte){C += Effet.Contrainte;}
            }else if(Effet[B]){C += Effet[B];}
            console.log(Effet);
            console.log(B);
            if(Compt == "-"){Compt = 0;}
		}else{
			Caract = JSON_FICHE.Caractéristique[A];
            if(Effet[A]){C += Effet[A];}
		}
	}else{
		Caract = JSON_FICHE.Caractéristique[A];
        if(Effet[A]){C += Effet[A];}
	}
    var A_aff = $("#P4_Caract option:selected").text();;// Caract

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
    log_backup = $("#P4_LOG").html();
}

function oncalculebien2(){
    var A = document.getElementById('P4_Armes').value;
	var found = JSON_FICHE.Inventaire.Arme.find(x => x.Nom == A);
    var arme = found.Dég;
    var effet = found.Effet;

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
    log_backup = $("#P4_LOG").html();
}

function oncalculebien3(){
	var A = JSON_FICHE.Caractéristique.Poings;

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
    log_backup = $("#P4_LOG").html();
}
function oncalculebien4(){
	var A = JSON_FICHE.Caractéristique.Pieds;

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
    log_backup = $("#P4_LOG").html();   
}

function oncalculebien5(){
    var A = document.getElementById('P4_dé_x').value;
    var Rand = Math.floor(Math.random() * Math.floor(A))+1;

    var aff = "Jet "+A+": "+Rand;
    document.getElementById('P4_LOG').innerHTML = document.getElementById('P4_LOG').innerHTML+"<br>"+aff;
    log_backup = $("#P4_LOG").html();
}

function effets(){
    if(Poids > JSON_FICHE.Caractéristique.ENC){
        JSON_FICHE.Malus.Encombrement = true;
    }else{JSON_FICHE.Malus.Encombrement = false;}
    if(JSON_FICHE.Malus.Encombrement == true){
        var Malus = Math.trunc((Number(Poids)-Number(JSON_FICHE.Caractéristique.ENC))/5)+1;
        $("#P4_Malus").append("<div><b>Encombrement:</b> -"+Malus+" RÉF, DEX et VIT</div>");
        if(!Effet.REF){Effet.REF = -Malus;}else{Effet.REF += -Malus;}
        if(!Effet.DEX){Effet.DEX = -Malus;}else{Effet.DEX += -Malus;}
        if(!Effet.VIT){Effet.VIT = -Malus;}else{Effet.VIT += -Malus;}
    }
    if(VE > 0){
        JSON_FICHE.Malus.Encombrement = true;
        $("#P4_Malus").append("<div><b>Encombrement d'armure:</b> -"+VE+" RÉF, DEX</div>");
        if(!Effet.REF){Effet.REF = -Malus;}else{Effet.REF += -Malus;}
        if(!Effet.DEX){Effet.DEX = -Malus;}else{Effet.DEX += -Malus;}
    }else{JSON_FICHE.Malus.Encombrement = false;}
    if(JSON_FICHE.Origine){
        if(JSON_FICHE.Origine == "Rédanie"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Éducation</div>");
            if(!Effet.Éducation){Effet.Éducation = 1;}else{Effet.Éducation += 1;}
        }
        if(JSON_FICHE.Origine == "Kaedwen"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Résilience</div>");
            if(!Effet.Résilience){Effet.Résilience = 1;}else{Effet.Résilience += 1;}
        }
        if(JSON_FICHE.Origine == "Témérie"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Charisme</div>");
            if(!Effet.Charisme){Effet.Charisme = 1;}else{Effet.Charisme += 1;}
        }
        if(JSON_FICHE.Origine == "Aedirn"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Artisanat</div>");
            if(!Effet.Artisanat){Effet.Artisanat = 1;}else{Effet.Artisanat += 1;}
        }
        if(JSON_FICHE.Origine == "Lyrie et Rivie"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Résistance à la contrainte</div>");
            if(!Effet.Contrainte){Effet.Contrainte = 1;}else{Effet.Contrainte += 1;}
        }
        if(JSON_FICHE.Origine == "Kovir et Poviss"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Négoce</div>");
            if(!Effet.Négoce){Effet.Négoce = 1;}else{Effet.Négoce += 1;}
        }
        if(JSON_FICHE.Origine == "Skellige"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Courage</div>");
            if(!Effet.Courage){Effet.Courage = 1;}else{Effet.Courage += 1;}
        }
        if(JSON_FICHE.Origine == "Cidaris"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Navigation</div>");
            if(!Effet.Navigation){Effet.Navigation = 1;}else{Effet.Navigation += 1;}
        }
        if(JSON_FICHE.Origine == "Verden"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Survie</div>");
            if(!Effet.Survie){Effet.Survie = 1;}else{Effet.Survie += 1;}
        }
        if(JSON_FICHE.Origine == "Cintra"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Psychologie</div>");
            if(!Effet.Psychologie){Effet.Psychologie = 1;}else{Effet.Psychologie += 1;}
        }
        if(JSON_FICHE.Origine == "Coeur de l’Empire"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Duperie</div>");
            if(!Effet.Duperie){Effet.Duperie = 1;}else{Effet.Duperie += 1;}
        }
        if(JSON_FICHE.Origine == "Vicovaro"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Éducation</div>");
            if(!Effet.Éducation){Effet.Éducation = 1;}else{Effet.Éducation += 1;}
        }
        if(JSON_FICHE.Origine == "Angren"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Survie</div>");
            if(!Effet.Survie){Effet.Survie = 1;}else{Effet.Survie += 1;}
        }
        if(JSON_FICHE.Origine == "Nazair"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Bagarre</div>");
            if(!Effet.Bagarre){Effet.Bagarre = 1;}else{Effet.Bagarre += 1;}
        }
        if(JSON_FICHE.Origine == "Metinna"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Équitation</div>");
            if(!Effet.Équitation){Effet.Équitation = 1;}else{Effet.Équitation += 1;}
        }
        if(JSON_FICHE.Origine == "Mag Turga"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Résilience</div>");
            if(!Effet.Résilience){Effet.Résilience = 1;}else{Effet.Résilience += 1;}
        }
        if(JSON_FICHE.Origine == "Geso"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Furtivité</div>");
            if(!Effet.Furtivité){Effet.Furtivité = 1;}else{Effet.Furtivité += 1;}
        }
        if(JSON_FICHE.Origine == "Ebbing"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Déduction</div>");
            if(!Effet.Déduction){Effet.Déduction = 1;}else{Effet.Déduction += 1;}
        }
        if(JSON_FICHE.Origine == "Maecht"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Charisme</div>");
            if(!Effet.Charisme){Effet.Charisme = 1;}else{Effet.Charisme += 1;}
        }
        if(JSON_FICHE.Origine == "Gemmery"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Intimidation</div>");
            if(!Effet.Intimidation){Effet.Intimidation = 1;}else{Effet.Intimidation += 1;}
        }
        if(JSON_FICHE.Origine == "Étolie"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Courage</div>");
            if(!Effet.Courage){Effet.Courage = 1;}else{Effet.Courage += 1;}
        }
        if(JSON_FICHE.Origine == "Dol Blathanna"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Étiquette</div>");
            if(!Effet.Étiquette){Effet.Étiquette = 1;}else{Effet.Étiquette += 1;}
        }
        if(JSON_FICHE.Origine == "Mahakam"){
            $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 Artisanat</div>");
            if(!Effet.Artisanat){Effet.Artisanat = 1;}else{Effet.Artisanat += 1;}
        }
    }
}
