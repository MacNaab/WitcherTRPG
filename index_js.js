function p1(){
    document.getElementById('p1').className = "nav-link active";
    document.getElementById('p2').className = "nav-link";
    document.getElementById('p3').className = "nav-link";
    document.getElementById('p4').className = "nav-link";

    page_1.style.display = "block";
    page_2.style.display = "none";
    page_3.style.display = "none";
    page_4.style.display = "none";
}

function p2(){
    document.getElementById('p2').className = "nav-link active";
    document.getElementById('p1').className = "nav-link";
    document.getElementById('p3').className = "nav-link";
    document.getElementById('p4').className = "nav-link";

    page_2.style.display = "block";
    page_1.style.display = "none";
    page_3.style.display = "none";
    page_4.style.display = "none";
}

function p3(){
    document.getElementById('p3').className = "nav-link active";
    document.getElementById('p2').className = "nav-link";
    document.getElementById('p1').className = "nav-link";
    document.getElementById('p4').className = "nav-link";

    page_3.style.display = "block";
    page_2.style.display = "none";
    page_1.style.display = "none";
    page_4.style.display = "none";
}

function p4(){
    document.getElementById('p4').className = "nav-link active";
    document.getElementById('p3').className = "nav-link";
    document.getElementById('p2').className = "nav-link";
    document.getElementById('p1').className = "nav-link";

    page_4.style.display = "block";
    page_3.style.display = "none";
    page_2.style.display = "none";
    page_1.style.display = "none";
}

function affiche_ou(){
  var el = document.getElementById('jdr');
  if(el.style.display == 'block'){el.style.display = 'none';}
  else{el.style.display = 'block';}
}


function img_nouvelle_page(){
    var lien =  document.getElementById('mon_image_cool').src;
    window.open(lien);
}

function caract(){
{
  $('#P4_Compt')
  .empty()
  .append('<option selected="selected" value="0">Aucune compétence</option>');
}
if(P4_Caract.value == "1"){ // INT
  $('#P4_Compt')
  .append('<option value="Connaissance de la rue">Connaissance de la rue</option><option value="Connaissance des monstres">Connaissance des monstres</option><option value="Déduction">Déduction</option><option value="Éducation">Éducation</option><option value="Enseignement">Enseignement</option><option value="Étiquette">Étiquette</option><option value="Langue ancienne">Langue ancienne</option><option value="Langue commune">Langue commune</option><option value="Langue naine">Langue naine</option><option value="Négoce">Négoce</option><option value="Survie">Survie</option><option value="Tactique">Tactique</option><option value="Vigilance">Vigilance</option>');
}
if(P4_Caract.value == "2"){ // REF
  $('#P4_Compt')
  .append('<option value="Bagarre">Bagarre</option><option value="Bâton/Lance">Bâton/Lance</option><option value="Équitation">Équitation</option><option value="Escrime">Escrime</option><option value="Esquive/Évasion">Esquive/Évasion</option><option value="Lames courtes">Lames courtes</option><option value="Mêlée">Mêlée</option><option value="Navigation">Navigation</option>');
}
if(P4_Caract.value == "3"){ // DEX
  $('#P4_Compt')
  .append('<option value="Adresse">Adresse</option><option value="Arbalète">Arbalète</option><option value="Archerie">Archerie</option><option value="Athlétisme">Athlétisme</option><option value="Furtivité">Furtivité</option>');
}
if(P4_Caract.value == "4"){ // Corps
  $('#P4_Compt')
  .append('<option value="Physique">Physique</option><option value="Résilience">Résilience</option>');
}
if(P4_Caract.value == "6"){ // EMP
  $('#P4_Compt').append('<option value="Beaux-arts">Beaux-arts</option><option value="Charisme">Charisme</option><option value="Commandement">Commandement</option><option value="Duperie">Duperie</option><option value="Jeu">Jeu</option><option value="Persuasion">Persuasion</option><option value="Psychologie">Psychologie</option><option value="Représentation">Représentation</option><option value="Séduction">Séduction</option><option value="Stylisme">Stylisme</option>');
}
if(P4_Caract.value == "7"){ // TEC
  $('#P4_Compt').append('<option value="Alchimie">Alchimie</option><option value="Artisanat">Artisanat</option><option value="Contrefaçon">Contrefaçon</option><option value="Crochetage">Crochetage</option><option value="Déguisement">Déguisement</option><option value="Fabrication de pièges">Fabrication de pièges</option><option value="Premiers soins">Premiers soins</option>');
}
if(P4_Caract.value == "8"){ // VOL
  $('#P4_Compt')
  .append('<option value="Courage">Courage</option><option value="Envoûtement">Envoûtement</option><option value="Incantation">Incantation</option><option value="Intimidation">Intimidation</option><option value="Résistance à la contrainte">Résistance à la contrainte</option><option value="Résistance à la magie">Résistance à la magie</option><option value="Rituels">Rituels</option>');
}
}

  $(document).ready(function() {
    $('#Se_connecter').on('click', function() {
      var joueur = $('#exampleInputEmail1').val();
      var mdp = $('#exampleInputPassword1').val();
      if(joueur!=""){
        $.ajax({
          url: "index_php3.php",
          type: "POST",
          data: {
            joueur: joueur,
          },
          cache: false,
          success: function(data){
            $('#P1_INFO').html(data); 
          }
        });
      }
      if(joueur!="" && mdp!=""){
        $.ajax({
          url: "index_php.php",
          type: "POST",
          data: {
            joueur: joueur,mdp: mdp,
          },
          cache: false,
          success: function(data){
            if(data == ""){
              login_formulaire.style.display = "none";la_page.style.display = "block";
              $.ajax({
                url: "index_php7.php",
                type: "POST",
                data: {joueur: joueur,},
                cache: false,
                success: function(data){$('#barre1').html(data);}
              });
              $.ajax({
                url: "index_php8.php",
                type: "POST",
                data: {joueur: joueur,},
                cache: false,
                success: function(data){$('#barre3').html(data);}
              });
              $.ajax({
                url: "index_php8bis.php",
                type: "POST",
                data: {joueur: joueur,},
                cache: false,
                success: function(data){$('#barre2').html(data);}
              });
              $.ajax({
                url: "index_php4.php",
                type: "POST",
                data: {
                  joueur: joueur,
                },
                cache: false,
                success: function(data){
                  $('#P2_INFO').html(data); 
                }
              });
              $.ajax({
                url: "index_php5.php",
                type: "POST",
                data: {joueur: joueur,},
                cache: false,
                success: function(data){$('#P3_INFO').html(data);}
              });
              $.ajax({
                url: "index_php6.php",
                type: "POST",
                data: {
                  joueur: joueur,
                },
                cache: false,
                success: function(data){
                  $('#P4_INFO').html(data); 
                }
              });
              $.ajax({
                url: "index_php6bis.php",
                type: "POST",
                data: {
                  joueur: joueur,
                },
                cache: false,
                success: function(data){
                  $('#P4_Armes_aff').html(data); 
                }
              });
              $.ajax({
                url: "index_php6bis2.php",
                type: "POST",
                data: {
                  joueur: joueur,
                },
                cache: false,
                success: function(data){
                  $('#P4_magie_aff').html(data); 
                }
              });
            }
            else{alert(data);}
          }
        });
      }
    });
    $('#P3_INV_REFRESH').on('click', function() {
      var joueur = $('#exampleInputEmail1').val();
      $.ajax({
        url: "index_php5.php",
        type: "POST",
        data: {joueur: joueur,},
        cache: false,
        success: function(data){$('#P3_INFO').html(data);}
      });
    });
    $('#P4_FICHE_REFRESH').on('click', function() {
      var joueur = $('#exampleInputEmail1').val();
      $.ajax({
        url: "index_php6.php",
        type: "POST",
        data: {
          joueur: joueur,
        },
        cache: false,
        success: function(data){
          $('#P4_INFO').html(data); 
        }
      });
      $.ajax({
        url: "index_php7.php",
        type: "POST",
        data: {joueur: joueur,},
        cache: false,
        success: function(data){$('#barre1').html(data);}
      });
      $.ajax({
        url: "index_php8.php",
        type: "POST",
        data: {joueur: joueur,},
        cache: false,
        success: function(data){$('#barre3').html(data);}
      });
      $.ajax({
        url: "index_php8bis.php",
        type: "POST",
        data: {joueur: joueur,},
        cache: false,
        success: function(data){$('#barre2').html(data);}
      });
    });
    $('#P4_IMG_REFRESH').on('click', function() {
      $.ajax({
        url: "index_php2bis.php",
        type: "POST",
        cache: false,
        success: function(data){
          $('#P4_img').html(data); 
        }
      });
    });
    $('#P4_TTS_REFRESH').on('click', function() {
      $.ajax({
        url: "index_php2bis2.php",
        type: "POST",
        cache: false,
        success: function(data){
//          $('#jdr').src(data);
          document.getElementById('jdr').src = data;
          document.getElementById('jdr0').href = data;
          document.getElementById('jdr0').innerHTML = "ouvrir le TTS dans un nouvel onglet";
        }
      });
    });
  }); 