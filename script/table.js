var JSON_item = ""
$.getJSON('data/dtb/item.json', function(jd) {
	JSON_item = jd;
});
var JSON_magie = ""
$.getJSON('data/dtb/magie.json', function(jd) {
	JSON_magie = jd;
});
var JSON_talent = ""
$.getJSON('data/dtb/talent.json', function(jd) {
    JSON_talent = jd;
});

function searchbar(e){
    if(e == '1'){
        var value = $("#myInput").val().toLowerCase();
        $("#tabloC tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    }
    if(e == '2'){
        var value = $("#myInput2").val().toLowerCase();
        $("#tabloC tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    }
    if(e == '3'){
        var value = $("#myInput3").val().toLowerCase();
        $("#tabloAtout tr").filter(function() {
              $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    }    
}

function TableauAdmin(e){
    for (let i = 1; i <= 8; i++) {
        document.getElementById('TêteTablo'+i).className = "nav-link";
    }
    document.getElementById('TêteTablo'+e).className = "nav-link active";
    if(e == '1'){
        var Tête = ["Nom","Catégorie","Type","Précision","Dispo","Dégats","Fia","mains","Portée","Effet","Taille","AM","Poids","Prix","Race","Source"];
        $('#tabloT').empty();
        Tête.forEach(function(f){$('#tabloT').append("<th scope='col'>"+f+"</th>");});
        $('#tabloC').empty();
        JSON_item.Arme.forEach(function(f){
            $('#tabloC').append("<tr><th scope='row'>"+f.Nom+"</th><td>"+f.Catégorie+"</td><td>"+f.Type+"</td><td>"+f.Précision+"</td><td>"+f.Dispo+"</td><td>"+f.Dégats+"</td><td>"+f.Fia+"</td><td>"+f.Mains+"</td><td>"+f.Portée+"</td><td>"+f.Effet+"</td><td>"+f.Taille+"</td><td>"+f.AM+"</td><td>"+f.Poids+"</td><td>"+f.Prix+"</td><td>"+f.Race+"</td><td>"+f.Source+"</td></tr>");
        });
    }
    if(e == '2'){
        var Tête = ["Nom","Catégorie","PA","Dispo","AM","Effet","VE","Poids","Prix","Race","Source"];
        $('#tabloT').empty();
        Tête.forEach(function(f){$('#tabloT').append("<th scope='col'>"+f+"</th>");});
        $('#tabloC').empty();
        JSON_item.Armure.forEach(function(f){
            $('#tabloC').append("<tr><th scope='row'>"+f.Nom+"</th><td>"+f.Catégorie+"</td><td>"+f.PA+"</td><td>"+f.Dispo+"</td><td>"+f.AM+"</td><td>"+f.Effet+"</td><td>"+f.VE+"</td><td>"+f.Poids+"</td><td>"+f.Prix+"</td><td>"+f.Race+"</td><td>"+f.Source+"</td></tr>");
        });
    }
    if(e == '3'){
        var Tête = ["Nom","Catégorie","Dispo","Effet","Poids","Prix","Taille","Race","Source"]
        $('#tabloT').empty();
        Tête.forEach(function(f){$('#tabloT').append("<th scope='col'>"+f+"</th>");});
        $('#tabloC').empty();
        JSON_item.Item.forEach(function(f){
            $('#tabloC').append("<tr><th scope='row'>"+f.Nom+"</th><td>"+f.Catégorie+"</td><td>"+f.Dispo+"</td><td>"+f.Effet+"</td><td>"+f.Poids+"</td><td>"+f.Prix+"</td><td>"+f.Taille+"</td><td>"+f.Race+"</td><td>"+f.Source+"</td></tr>");
        });
    }
    if(e == '4'){
        var Tête = ["Nom","Rareté","Localisation","Quantité","SD","Poids","Coût"];
        $('#tabloT').empty();
        Tête.forEach(function(f){$('#tabloT').append("<th scope='col'>"+f+"</th>");});
        $('#tabloC').empty();
        JSON_item.Composants.forEach(function(f){
            if(f.Substance == undefined){$('#tabloC').append("<tr><th scope='row'>"+f.Nom+"</th><td>"+f.Rareté+"</td><td>"+f.Localisation+"</td><td>"+f.Quantité+"</td><td>"+f.SD+"</td><td>"+f.Poids+"</td><td>"+f.Coût+"</td></tr>");}
        });
    }
    if(e == '5'){
        var Tête = ["Nom","Type","SD","Durée","Composants","Investissement","Coût"];
        $('#tabloT').empty();
        Tête.forEach(function(f){$('#tabloT').append("<th scope='col'>"+f+"</th>");});
        $('#tabloC').empty();
        JSON_item.Schéma.forEach(function(f){
            $('#tabloC').append("<tr><th scope='row'>"+f.Nom+"</th><td>"+f.Type+"</td><td>"+f.SD+"</td><td>"+f.Durée+"</td><td>"+f.Composants+"</td><td>"+f.Investissement+"</td><td>"+f.Coût+"</td></tr>");
        });
    }
    if(e == '6'){
        var Tête = ["Nom","Type","Dispo","Effet","Durée","Toxi","Prix","Race","Source"];
        $('#tabloT').empty();
        Tête.forEach(function(f){$('#tabloT').append("<th scope='col'>"+f+"</th>");});
        $('#tabloC').empty();
        JSON_item.Potion.forEach(function(f){
            $('#tabloC').append("<tr><th scope='row'>"+f.Nom+"</th><td>"+f.Type+"</td><td>"+f.Dispo+"</td><td>"+f.Effet+"</td><td>"+f.Durée+"</td><td>"+f.Toxi+"</td><td>"+f.Prix+"</td><td>"+f.Race+"</td><td>"+f.Source+"</td></tr>");
        });
    }
    if(e == '7'){
        var Tête = ["Nom","Substance","Rareté","Localisation","Quantité","SD","Poids","Coût"];
        $('#tabloT').empty();
        Tête.forEach(function(f){$('#tabloT').append("<th scope='col'>"+f+"</th>");});
        $('#tabloC').empty();
        JSON_item.Composants.forEach(function(f){
            if(f.Substance != undefined){$('#tabloC').append("<tr><th scope='row'>"+f.Nom+"</th><td>"+f.Substance+"</td><td>"+f.Rareté+"</td><td>"+f.Localisation+"</td><td>"+f.Quantité+"</td><td>"+f.SD+"</td><td>"+f.Poids+"</td><td>"+f.Coût+"</td></tr>");}
        });
    }
    if(e == '8'){
        var Tête = ["Nom","Composants","SD","Durée"];
        $('#tabloT').empty();
        Tête.forEach(function(f){$('#tabloT').append("<th scope='col'>"+f+"</th>");});
        $('#tabloC').empty();
        JSON_item.Formule.forEach(function(f){
            $('#tabloC').append("<tr><th scope='row'>"+f.Nom+"</th><td>"+f.Composants+"</td><td>"+f.SD+"</td><td>"+f.Durée+"</td></tr>");
        });
    }
}

function TableauAdminMagie(e){
    for (let i = 1; i <= 6; i++) {
        document.getElementById('TêteTabloMagie'+i).className = "nav-link";
    }
    document.getElementById('TêteTabloMagie'+e).className = "nav-link active";
    if(e == '1'){
        var Tête = ["Nom","Type","Niveau","END","Portée","Durée","Défense","Effet"];
        $('#tabloMagieT').empty();
        Tête.forEach(function(f){$('#tabloMagieT').append("<th scope='col'>"+f+"</th>");});
        $('#tabloMagieC').empty();
        JSON_magie.Base.forEach(function(f){if(f.Type == "Éléments mixtes" || f.Type == "Terre" || f.Type == "Air" || f.Type == "Feu" || f.Type == "Eau"){$('#tabloMagieC').append("<tr><th scope='row'>"+f.Nom+"</th><td>"+f.Type+"</td><td>"+f.Niveau+"</td><td>"+f.END+"</td><td>"+f.Portée+"</td><td>"+f.Durée+"</td><td>"+f.Défense+"</td><td>"+f.Effet+"</td></tr>");}});
        JSON_magie.Unofficial.forEach(function(f){if(f.Type == "Éléments mixtes" || f.Type == "Terre" || f.Type == "Air" || f.Type == "Feu" || f.Type == "Eau"){$('#tabloMagieC').append("<tr><th scope='row'>"+f.Nom+"</th><td>"+f.Type+"</td><td>"+f.Niveau+"</td><td>"+f.END+"</td><td>"+f.Portée+"</td><td>"+f.Durée+"</td><td>"+f.Défense+"</td><td>"+f.Effet+"</td></tr>");}});
    }
    if(e == '2'){
        var Tête = ["Nom","Type","Niveau","END","Portée","Durée","Défense","Effet"];
        $('#tabloMagieT').empty();
        Tête.forEach(function(f){$('#tabloMagieT').append("<th scope='col'>"+f+"</th>");});
        $('#tabloMagieC').empty();
        JSON_magie.Base.forEach(function(f){if(f.Type == "Druide" || f.Type == "Prêcheur" || f.Type == "Archiprêtre"){$('#tabloMagieC').append("<tr><th scope='row'>"+f.Nom+"</th><td>"+f.Type+"</td><td>"+f.Niveau+"</td><td>"+f.END+"</td><td>"+f.Portée+"</td><td>"+f.Durée+"</td><td>"+f.Défense+"</td><td>"+f.Effet+"</td></tr>");}});
        JSON_magie.Unofficial.forEach(function(f){if(f.Type == "Druide" || f.Type == "Prêcheur" || f.Type == "Archiprêtre"){$('#tabloMagieC').append("<tr><th scope='row'>"+f.Nom+"</th><td>"+f.Type+"</td><td>"+f.Niveau+"</td><td>"+f.END+"</td><td>"+f.Portée+"</td><td>"+f.Durée+"</td><td>"+f.Défense+"</td><td>"+f.Effet+"</td></tr>");}});
    }
    if(e == '3'){
        var Tête = ["Nom","Type","END","Portée","Durée","Défense","Effet"];
        $('#tabloMagieT').empty();
        Tête.forEach(function(f){$('#tabloMagieT').append("<th scope='col'>"+f+"</th>");});
        $('#tabloMagieC').empty();
        JSON_magie.Base.forEach(function(f){if(f.Type == "Signe de base" || f.Type == "Signe alternatif"){$('#tabloMagieC').append("<tr><th scope='row'>"+f.Nom+"</th><td>"+f.Type+"</td><td>"+f.END+"</td><td>"+f.Portée+"</td><td>"+f.Durée+"</td><td>"+f.Défense+"</td><td>"+f.Effet+"</td></tr>");}});
        JSON_magie.Unofficial.forEach(function(f){if(f.Type == "Signe de base" || f.Type == "Signe alternatif"){$('#tabloMagieC').append("<tr><th scope='row'>"+f.Nom+"</th><td>"+f.Type+"</td><td>"+f.END+"</td><td>"+f.Portée+"</td><td>"+f.Durée+"</td><td>"+f.Défense+"</td><td>"+f.Effet+"</td></tr>");}});
    }
    if(e == '4'){
        var Tête = ["Nom","Niveau","END","Temps","SD","Durée","Composants","Effet"];
        $('#tabloMagieT').empty();
        Tête.forEach(function(f){$('#tabloMagieT').append("<th scope='col'>"+f+"</th>");});
        $('#tabloMagieC').empty();
        JSON_magie.Base.forEach(function(f){if(f.Type == "Rituel"){$('#tabloMagieC').append("<tr><th scope='row'>"+f.Nom+"</th><td>"+f.Niveau+"</td><td>"+f.END+"</td><td>"+f.Temps+"</td><td>"+f.SD+"</td><td>"+f.Durée+"</td><td>"+f.Composants+"</td><td>"+f.Effet+"</td></tr>");}});
        JSON_magie.Unofficial.forEach(function(f){if(f.Type == "Rituel"){$('#tabloMagieC').append("<tr><th scope='row'>"+f.Nom+"</th><td>"+f.Niveau+"</td><td>"+f.END+"</td><td>"+f.Temps+"</td><td>"+f.SD+"</td><td>"+f.Durée+"</td><td>"+f.Composants+"</td><td>"+f.Effet+"</td></tr>");}});
    }
    if(e == '5'){
        var Tête = ["Nom","Danger","END","Effet","Prérequis pour le lever"];
        $('#tabloMagieT').empty();
        Tête.forEach(function(f){$('#tabloMagieT').append("<th scope='col'>"+f+"</th>");});
        $('#tabloMagieC').empty();
        JSON_magie.Base.forEach(function(f){if(f.Type == "Envoûtement"){$('#tabloMagieC').append("<tr><th scope='row'>"+f.Nom+"</th><td>"+f.Danger+"</td><td>"+f.END+"</td><td>"+f.Effet+"</td><td>"+f.Prérequis+"</td></tr>");}});
        JSON_magie.Unofficial.forEach(function(f){if(f.Type == "Envoûtement"){$('#tabloMagieC').append("<tr><th scope='row'>"+f.Nom+"</th><td>"+f.Danger+"</td><td>"+f.END+"</td><td>"+f.Effet+"</td><td>"+f.Prérequis+"</td></tr>");}});
    }
    if(e == '6'){
        var Tête = ["Nom","Niveau","END","Durée","Effet"];
        $('#tabloMagieT').empty();
        Tête.forEach(function(f){$('#tabloMagieT').append("<th scope='col'>"+f+"</th>");});
        $('#tabloMagieC').empty();
        JSON_magie.Vampire.forEach(function(f){$('#tabloMagieC').append("<tr><th scope='row'>"+f.Nom+"</th><td>"+f.Niveau+"</td><td>"+f.END+"</td><td>"+f.Durée+"</td><td>"+f.Effet+"</td></tr>");});
    }
}

function testerlamagie(){
  var pro = JSON_FICHE.Profession;
  if(pro == "Mage" || pro == "Prêtre" || pro == "Sorceleur" || pro == "Vampire"){
    if(pro == "Mage"){
      var e = [2,3,6];
      e.forEach(function(f){document.getElementById('TêteTabloMagie'+f).parentNode.style.display = "none";});
    }
    if(pro == "Prêtre"){
      var e = [1,3,6];
      e.forEach(function(f){document.getElementById('TêteTabloMagie'+f).parentNode.style.display = "none";});
    }
    if(pro == "Sorceleur"){
      var e = [1,2,4,5,6];
      e.forEach(function(f){document.getElementById('TêteTabloMagie'+f).parentNode.style.display = "none";});
    }
    if(pro == "Vampire"){
      var e = [1,2,3,4,5];
      e.forEach(function(f){document.getElementById('TêteTabloMagie'+f).parentNode.style.display = "none";});
    }
  }else{$('#aff_magie_tracker').remove();}


}
