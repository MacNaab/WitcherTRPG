$(document).ready(function(){
	$('#app').load("htm/log.htm");
	$('#toast').load("htm/toast.htm");
});

function Reload_PJ(){
	$.getJSON('data/pj.json', function(jd) {
		JSON_FICHE = jd;
		JSON_FICHE = JSON_FICHE[joueur];
		$("#toast1_H").html("Rechargement de la Fiche du PJ");
    	$("#toast1_C").html(joueur);
		$("#toast1").toast('show');
	});
}

var JSON_FICHE = "";
var joueur = "";
$.getJSON('data/pj.json', function(jd) {
	JSON_FICHE = jd;
});

var JSON_CAPACITES = "";
$.getJSON('data/dtb/capacités.json', function(jd) {
	JSON_CAPACITES = jd;
});

function loggin(){
  joueur = $('#exampleInputEmail1').val();
  var mdp = $('#exampleInputPassword1').val();
  if(joueur!=""){
    if(JSON_FICHE.hasOwnProperty(joueur) == true){
      if(JSON_FICHE[joueur].Race == mdp){
		JSON_FICHE = JSON_FICHE[joueur];
		logged();effets();
      }else{
		$("#toast2_C").html('Mauvais mot de passe');
        $("#toast2").toast('show');
      }
    }else{
		$("#toast2_C").html('Pas de joueur à ce nom');
        $("#toast2").toast('show');
    }
  }
}
function loggin2(e){
	if (e.length <= 0) {return false;}
	var fr = new FileReader();
  
  fr.onload = function(f) { 
    var r = JSON.parse(f.target.result);
		joueur = Object.keys(r)[0];
		JSON_FICHE = r[joueur];
		logged();effets();
		$('#app').append("<div id='content-footer'></div>");	
		$('#content-footer').load("htm/footer.htm");
		$("body").css("margin-bottom", "0");
		$("content-footer").css("margin-top", "75px");
  } 
  fr.readAsText(e.item(0));
}

function logged(){
	$('#app').html('');
	$('#app').append("<div id='content-nav'></div>");	
	$('#app').append("<div id='content-page'></div>");	
	$('#content-nav').load("htm/nav.htm");	
	$('#content-page').load("htm/page1.htm");	
}

function page(e){
	for (let i = 1; i < 6; i++) {
		document.getElementById('p'+i).className = "nav-link";
	}
	document.getElementById('p'+e).className = "nav-link active";
	$('#content-page').load("htm/page"+e+".htm");	
}

function FichePJ(){
	// Caractéristiques secondaires:
	var COR = Number(JSON_FICHE.Caractéristique.COR);if(Effet.COR){COR = Number(COR)+Number(Effet.COR);}
	var VOL = Number(JSON_FICHE.Caractéristique.VOL);if(Effet.VOL){COR = Number(VOL)+Number(Effet.VOL);}
	var VIT = Number(JSON_FICHE.Caractéristique.VIT);if(Effet.VIT){COR = Number(VIT)+Number(Effet.VIT);}
		var tablecorps = Math.floor((Number(COR)+Number(VOL))/2);
		var ETOUcalculé = tablecorps;if(ETOUcalculé > "10"){ETOUcalculé = '10';}
		var RUNcalc = VIT*3;
		var SAUTcalc = Math.floor(RUNcalc/5);
		var ENDcalc = tablecorps*5;
		var ENCcalc = COR*10;
		//if(JSON_FICHE.Race == "Nain" || JSON_FICHE.Race == "Naine"){ENCcalc = Number(ENCcalc)+25;}
	JSON_FICHE.Caractéristique.ETOU = ETOUcalculé;
	JSON_FICHE.Caractéristique.COU = RUNcalc;
	JSON_FICHE.Caractéristique.SAUT = SAUTcalc;
	JSON_FICHE.Caractéristique.PS = ENDcalc;
	JSON_FICHE.Caractéristique.END = ENDcalc;
	JSON_FICHE.Caractéristique.ENC = ENCcalc;
	JSON_FICHE.Caractéristique.REC = tablecorps;
	JSON_FICHE.Caractéristique.Pieds = CoupPieds(COR);
	JSON_FICHE.Caractéristique.Poings = CoupPoings(COR);
	JSON_FICHE.PS = ENDcalc;
	JSON_FICHE.END = ENDcalc;
	JSON_FICHE.Relance = JSON_FICHE.Caractéristique.CHA;
	if(!JSON_FICHE.Effet){JSON_FICHE.Effet = {};}
}

function CoupPoings(e){
  var f = 0;
  if(e%2 != 0){
    f = Math.trunc(e/2)+1;
  }else{
  	f = Math.trunc(e/2);
  }
  var g = -4+2*f;
  if(g==0){g="";}
  if(g>0){g='+'+g;}
  return '1d6'+g;
}
function CoupPieds(e){
  var f = 0;
  if(e%2 != 0){
    f = Math.trunc(e/2)+1;
  }else{
  	f = Math.trunc(e/2);
  }
  var g = 0+2*f;
  if(g==0){g="";}if(g>0){g='+'+g;}
  return '1d6'+g;
}