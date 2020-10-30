$(document).ready(function(){
	$('#app').load("htm/log.htm");
});

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
		logged();FichePJ();
      }else{
        alert('Mauvais mot de passe');
      }
    }else{
      alert('Pas de joueur à ce nom');
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
		logged();FichePJ();
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
		var tablecorps = Math.floor((Number(JSON_FICHE.Caractéristique.COR)+Number(JSON_FICHE.Caractéristique.VOL))/2);
		var ETOUcalculé = tablecorps;if(ETOUcalculé > "10"){ETOUcalculé = '10';}
		var RUNcalc = JSON_FICHE.Caractéristique.VIT*3;
		var SAUTcalc = Math.floor(RUNcalc/5);
		var ENDcalc = tablecorps*5;
		var ENCcalc = JSON_FICHE.Caractéristique.COR*10;if(JSON_FICHE.Race == "Nain" || JSON_FICHE.Race == "Naine"){ENCcalc = Number(ENCcalc)+25;}
	if(!JSON_FICHE.Caractéristique.ETOU){JSON_FICHE.Caractéristique.ETOU = ETOUcalculé;}
	if(!JSON_FICHE.Caractéristique.COU){JSON_FICHE.Caractéristique.COU = RUNcalc;}
	if(!JSON_FICHE.Caractéristique.SAUT){JSON_FICHE.Caractéristique.SAUT = SAUTcalc;}
	if(!JSON_FICHE.Caractéristique.PS){JSON_FICHE.Caractéristique.PS = ENDcalc;}
	if(!JSON_FICHE.Caractéristique.END){JSON_FICHE.Caractéristique.END = ENDcalc;}
	if(!JSON_FICHE.Caractéristique.ENC){JSON_FICHE.Caractéristique.ENC = ENCcalc;}
	if(!JSON_FICHE.Caractéristique.REC){JSON_FICHE.Caractéristique.REC = tablecorps;}
	if(!JSON_FICHE.Caractéristique.Pieds){JSON_FICHE.Caractéristique.Pieds = CoupPieds(JSON_FICHE.Caractéristique.COR);}
	if(!JSON_FICHE.Caractéristique.Poings){JSON_FICHE.Caractéristique.Poings = CoupPoings(JSON_FICHE.Caractéristique.COR);}
	if(!JSON_FICHE.PS){JSON_FICHE.PS = ENDcalc;}
	if(!JSON_FICHE.END){JSON_FICHE.END = ENDcalc;}
	if(!JSON_FICHE.Relance){JSON_FICHE.Relance = JSON_FICHE.Caractéristique.CHA;}
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