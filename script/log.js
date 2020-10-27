$(document).ready(function(){
	$('#app').load("htm/log.htm");
});

var JSON_FICHE = "";
var joueur = "";
$.getJSON('data/pj.json', function(jd) {
	JSON_FICHE = jd;
});

function loggin(){
  joueur = $('#exampleInputEmail1').val();
  var mdp = $('#exampleInputPassword1').val();
  if(joueur!=""){
    if(JSON_FICHE.hasOwnProperty(joueur) == true){
      JSON_FICHE = JSON_FICHE[joueur];	
      if(JSON_FICHE.Race == mdp){
        alert('logged');
		test();
      }else{
        alert('Mauvais mot de passe');
      }
    }else{
      alert('Pas de joueur à ce nom');
    }
  }
}
