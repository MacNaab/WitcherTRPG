function todtb(e){
/*    $.ajax({
        url: "data/pj.php",
        type: "POST",
        data: {
            nom: joueur,
            dtb: JSON_FICHE,
        },
        cache: false,
        success: function(data){
*/            $("#toast1_H").html(e);
            $("#toast1_C").html('Mise à jour');
            $("#toast1").toast('show');
/*        }
    });
*/
}
function tojournal(e){
/*    $.ajax({
        url: "data/data.php",
        type: "POST",
        data: {
            nom: joueur,
            action: "journal",
            url: JSON_data[joueur].Journal,
        },
        cache: false,
        success: function(data){
*/            $("#toast1_H").html(e);
            $("#toast1_C").html('Mise à jour du Journal');
            $("#toast1").toast('show');
/*        }
    });
*/
}
function tomap(e){
/*    $.ajax({
        url: "data/data.php",
        type: "POST",
        data: {
            nom: joueur,
            action: "map",
            url: JSON_data.map[joueur],
        },
        cache: false,
        success: function(data){
*/            $("#toast1_H").html(e);
            $("#toast1_C").html('Mise à jour');
            $("#toast1").toast('show');
/*        }
    });
*/
}

var JSON_effet = ""
$.getJSON('data/effet.json', function(jd) {
	JSON_effet = jd;
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
            if(Effet[B]){C += Effet[B];}
            if(Effet[found.C]){C += Effet[found.C];}
            Compt = found.V;
            if(Effet[B]){C += Effet[B];}
            if(Compt == "-"){Compt = 0;}
		}else{
            Caract = JSON_FICHE.Caractéristique[A];
            if(Effet[B]){C += Effet[B];}
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

function calcul_effet(e,f){
    if(e==4||e==6||e==7||e==9){
        var rand = Math.floor(Math.random() * Math.floor(10))+1;
    }else{
        var rand = Math.floor(Math.random() * Math.floor(6))+1;
    }
    // TEC
    if(e==0||e==4){
        var caract = Number(JSON_FICHE.Caractéristique.TEC);if(Effet.TEC){caract = Number(caract)+Number(Effet.TEC);}
    }
    // EMP
    else if(e==6||e==10){
        var caract = Number(JSON_FICHE.Caractéristique.EMP);if(Effet.EMP){caract = Number(caract)+Number(Effet.EMP);}
    }
    // INT
    else{
        var caract = Number(JSON_FICHE.Caractéristique.INT);if(Effet.INT){caract = Number(caract)+Number(Effet.INT);}
    }
    var result = Number(rand)+Number(caract);
    var aff = "Jet de <b>"+f+": "+result+"</b> ("+rand+ "[<i>jet</i>] + "+caract+" [<i>caractéristique</i>])";
    $("#P4_LOG").html($("#P4_LOG").html()+"<br>"+aff);
    log_backup = $("#P4_LOG").html();       
}

var Effet = {};
function effets(){
    Effet = {};    
    if(JSON_FICHE.Origine){
        var found = JSON_effet.Origine.find(x => x.Nom == JSON_FICHE.Origine);
        if(found != undefined || found!="undefined"){
                $("#P4_Bonus").append("<div><b>Origine:</b> "+JSON_FICHE.Origine+", +1 "+found.V+"</div>");
                if(Effet[found.V]){Effet[found.V] += 1;}else{Effet[found.V] = 1;}
        }
    }
    if(JSON_FICHE.Race){
        var R = JSON_FICHE.Race;if(R == "Humaine"){R = "Humain";}if(R == "Naine"){R = "Naine";}if(R == "Halfeline"){R = "Halfeline";}
        var found = JSON_effet.Raciaux.find(x => x.Nom == R);
        if(found != undefined){
            found.V.forEach(function(e){
                if(Effet[e.Nom]){Effet[e.Nom] += e.V;}else{Effet[e.Nom] = e.V;}
            });
        }
    }

    // A la fin pour avoir les modification d'ENC
    var ENC = JSON_FICHE.Caractéristique.ENC;if(Effet.ENC){ENC = Number(ENC)+Number(Effet.ENC);}
    try{
        if(Poids > ENC){
            var Malus = Math.trunc((Number(Poids)-Number(JSON_FICHE.Caractéristique.ENC))/5)+1;
            $("#P4_Malus").append("<div><b>Encombrement:</b> -"+Malus+" RÉF, DEX et VIT</div>");
            if(!Effet.REF){Effet.REF = -Malus;}else{Effet.REF += -Malus;}
            if(!Effet.DEX){Effet.DEX = -Malus;}else{Effet.DEX += -Malus;}
            if(!Effet.VIT){Effet.VIT = -Malus;}else{Effet.VIT += -Malus;}
        }
        if(VE > 0){
            $("#P4_Malus").append("<div><b>Encombrement d'armure:</b> -"+VE+" RÉF, DEX</div>");
            if(!Effet.REF){Effet.REF = -Malus;}else{Effet.REF += -Malus;}
            if(!Effet.DEX){Effet.DEX = -Malus;}else{Effet.DEX += -Malus;}
        }
    } catch {}
    FichePJ();
}