var JSON_FICHE = "";
var joueur = "";
$.getJSON('data/pj.json', function(jd) {
	JSON_FICHE = jd;
});
var JSON_wiki = ""
$.getJSON('data/wiki.json', function(jd) {
	JSON_wiki = jd;
});

function todtb(e,f){
/*
	$.ajax({
        url: "data/pj.php",
        type: "POST",
        data: {
            nom: e,
            dtb: f,
        },
        cache: false,
        success: function(data){
*/
            $("#toast1_H").html("Mise à jour effectué");
//            $("#toast1_C").html(data);
            $("#toast1").toast('show');
/*
        }
    });
*/
}

function P4_Action(e){
    $('#P4_aff').load("htm/mj/Actions/A"+e+".htm");
}
function P4_A(e,f){
    if(e=='1'||e=='2'){
        var url = $("#P4_1").val();
        if(e == '1'){var A = "tts";}else{var A = "image";}
/*        $.ajax({
            url: "data/data.php",
            type: "POST",
            data: {
                action: A,
                url: url,
            },
            cache: false,
            success: function(data){
*/
                $('#P4_aff').append("<div>"+data+"</div>");
/*
            }
        });    
*/
    } else{
        var joueur = $("#P4_Joueur").val();
        if(e=='3'){// Ajout Inventaire
            if(!JSON_FICHE[joueur].Inventaire){
                JSON_FICHE[joueur].Inventaire = {"Arme":[],"Armure":[],"Autre":[],"Schéma":[]};
            }
            if(!JSON_FICHE[joueur].Inventaire.Arme){
                JSON_FICHE[joueur].Inventaire.Arme = [];
            }
            if(!JSON_FICHE[joueur].Inventaire.Armure){
                JSON_FICHE[joueur].Inventaire.Armure = [];
            }
            if(!JSON_FICHE[joueur].Inventaire.Autre){
                JSON_FICHE[joueur].Inventaire.Autre = [];
            }
            if(!JSON_FICHE[joueur].Inventaire.Schéma){
                JSON_FICHE[joueur].Inventaire.Schéma = [];
            }
            if(f=="1"){
                JSON_FICHE[joueur].Inventaire.Arme.push(
                    {
                        "Nom": $("#P4_1").val(),
                        "Type": $("#P4_2").val(),
                        "Pré": $("#P4_3").val(),
                        "Dég": $("#P4_4").val(),
                        "Fia": $("#P4_5").val(),
                        "FiaMax": $("#P4_5").val(),
                        "Main": $("#P4_6").val(),
                        "Por": $("#P4_7").val(),
                        "Effet": $("#P4_8").val(),
                        "Diss": $("#P4_9").val(),
                        "AM": "-",
                        "Poids": $("#P4_10").val()
                    }
                )
            }
            if(f=="2"){
                JSON_FICHE[joueur].Inventaire.Armure.push(
                    {
                        "Nom": $("#P4_1").val(),
                        "Type": [$("#P4_2").val()],
                        "PA": $("#P4_3").val(),
                        "Fia": $("#P4_3").val(),
                        "Effet": $("#P4_4").val(),
                        "VE": $("#P4_5").val(),
                        "AM": "-",
                        "Poids": $("#P4_6").val()
                    }
                )
            }
            if(f=="3"){
                JSON_FICHE[joueur].Inventaire.Autre.push(
                    {
                        "Nom": $("#P4_1").val(),
                        "Effet": $("#P4_4").val(),
                        "Qtt": $("#P4_2").val(),
                        "Poids": $("#P4_3").val()
                    }
                )
            }
            if(f=="4"){
                JSON_FICHE[joueur].Inventaire.Schéma.push(
                    {
                        "Nom": $("#P4_1").val(),
                        "Desc": $("#P4_3").val(),
                        "Poids": $("#P4_2").val()
                    }
                )
            }
        }
        if(e=='4'){// Ajout/Retirer
            var N = $("#P4_1").val();
            if(f=="1"){
                var O = JSON_FICHE[joueur].PS;
                JSON_FICHE[joueur].PS = Number(Number(O)+Number(N));
            }
            if(f=="2"){
                var O = JSON_FICHE[joueur].END;
                JSON_FICHE[joueur].END = Number(Number(O)+Number(N));
            }
            if(f=="3"){
                var O = JSON_FICHE[joueur].Or;
                JSON_FICHE[joueur].Or = Number(Number(O)+Number(N));
            }
            if(f=="4"){
                var O = JSON_FICHE[joueur].PP;
                JSON_FICHE[joueur].PP = Number(Number(O)+Number(N));
            }
            if(f=="5"){
                var O = JSON_FICHE[joueur].Relance;
                JSON_FICHE[joueur].Relance = Number(Number(O)+Number(N));
            }

        }
        todtb(joueur,JSON_FICHE[joueur])
    }
}
