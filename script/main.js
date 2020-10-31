function todtb(){
    $.ajax({
        url: "data/pj.php",
        type: "POST",
        data: {
            nom: joueur,
            dtb: JSON_FICHE,
        },
        cache: false,
        success: function(data){
            $("#toast1_H").html("Achat effectué");
            $("#toast1_C").html(data);
            $("#toast1").toast('show');
        }
    });
}

function oncalculebien(){
    var A = document.getElementById('P4_Caract').value;
    var B = document.getElementById('P4_Compt').value;if(B == "0"){var B = "rien";}
    var C = document.getElementById('P4_Mod').value;
	var found = 0;
	var Compt = 0;
	var Caract = 0;
	if(B != "rien"){
		found = JSON_FICHE.Compétences.find(x => x.Nom == B);
		if(found != undefined){
			Caract = JSON_FICHE.Caractéristique[found.C];
			Compt = found.V;
		}else{
			Caract = JSON_FICHE.Caractéristique[A];
		}
	}else{
		Caract = JSON_FICHE.Caractéristique[A];
	}
    var A_aff = $("#P4_Caract option:selected").text();;// Caract
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

	var found = JSON_FICHE.Inventaire.Arme.find(x => x.Nom == A);

//    alert(document.getElementById('ARME_'+A+'_dmg').innerHTML);
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
   
}

function oncalculebien5(){
    var A = document.getElementById('P4_dé_x').value;
    var Rand = Math.floor(Math.random() * Math.floor(A))+1;

    var aff = "Jet "+A+": "+Rand;
    document.getElementById('P4_LOG').innerHTML = document.getElementById('P4_LOG').innerHTML+"<br>"+aff;
}


function effets(){
    if(Poids > JSON_FICHE.Caractéristique.ENC){
        JSON_FICHE.Malus.Encombrement = true;
    }else{JSON_FICHE.Malus.Encombrement = false;}
    if(JSON_FICHE.Malus.Encombrement == true){
        var Malus = Math.trunc((Number(Poids)-Number(JSON_FICHE.Caractéristique.ENC))/5)+1;
        $("#P4_Malus").append("<div><b>Encombrement:</b> -"+Malus+" RÉF, DEX et VIT</div>")
    }
    if(VE > 0){
        $("#P4_Malus").append("<div><b>Encombrement d'armure:</b> -"+VE+" RÉF, DEX</div>")
    }else{JSON_FICHE.Malus.Encombrement = true;}
}