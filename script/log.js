$(document).ready(function(){
  $('#app').load("htm/log.htm");
});

var JSON = "";
$.getJSON('../data/pj.json', function(jd) {
	JSON = jd;
});

function loggin(){
  var joueur = $('#exampleInputEmail1').val();
  var mdp = $('#exampleInputPassword1').val();
  if(joueur!=""){
    var found = JSON.find(x => x == joueur);
    if(found!=undefined){
      if(found.Race == mdp){
        alert('logged');
      }else{
        alert('Mauvais mot de passe');
      }
    }else{
      alert('Pas de joueur à ce nom');
    }
  }
}
