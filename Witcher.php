<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>JdR The Witcher</title>

<?php
	include '../bootstrap.html';
?>

<link rel="stylesheet" href="validenonvalide.css"/>

<style>
div#GrT{
	margin-top:2.5%;
	text-align:center;
}
div.select{
	margin-left:25%;
	margin-right:25%;
}
body {background-color:#F0EFF5;margin-bottom:2.5%}
h3 {text-align:center;text-decoration: underline;}
h2 {text-align: center;font-family: Impact, Charcoal, sans-serif;text-decoration: overline;}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}


@media only screen and (min-width: 600px) {
	.Etape {
	margin-left:20%;
	margin-right:20%;
	}
}

</style>

</head>
<body>

<script src="Witcher.js"></script>	

<!-- Navigation -->
<div id="navigation" style="z-index:100">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">The Witcher</a>
<?php
	include 'nav.html';
?>

<div id="GrT"> <!-- Tableau autour du texte -->

<h2>The Witcher</h2>
<p style = "text-decoration: underline; font-weight: bold;"> Merci de remplir la feuille de création de personnage ci-dessous et de le valider <a target="_blank" href="../Guide/Witcher_fr.pdf" class="badge badge-warning">Description Fr ici</a></p>
	
	<div style="margin-left:25%;margin-right:25%;">	<!-- Barre de progression -->
<div class="progress" style="height: 20px;">
  <div id="PB_V" class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuemin="0" aria-valuemax="5" style="width: 0%"></div>
  <div id="PB_EC" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="5" style="width: 20%">Étape 1</div>
</div>
	</div>
	
	<br><br>

	<form name="form1" action="" method="post" class="was-validated">

<div id="Etape_1" class="Etape">	<!-- Etape 1 : nom joueur, perso, sexe, race, profession -->
	<div class="form-row">	<!-- Noms -->
		    <div class="col">
				<input type="text" name="joueur" id="joueur" class="form-control" placeholder="Prénom du joueur" required>
				<div class="invalid-feedback">Remplissez votre prénom</div>
			</div>			  
		<br>
		    <div class="col">
				<input type="text" name="personnage" id="personnage" class="form-control" placeholder="Prénom, nom ou surnom du personnage" required>
				<div class="invalid-feedback">Remplissez le nom de votre personnage</div>
			</div>
	</div>
	<br>
	<div class="form-row">	<!-- Sexe + Race + Profession -->
		<div class="col">
			<select name="Sexe" id="Sexe" class="custom-select" style="background-color:white" required>
				<option disabled selected value="">Sexe du personnage</option>
				<option value="0">Homme</option>
				<option value="1">Femme</option>
			</select>
			<div class="invalid-feedback">Selectionnez le sexe du personnage</div>			
		</div>
		<div class="col">
			<select name="Race" id="Race" class="custom-select" style="background-color:white" onchange="Race2();Pouet()" required>
				<option disabled selected value="">Race</option>
					<option value="Sorceleur">Sorceleur</option>
					<option value="Humain">Humain</option>
					<option value="Elfe">Elfe</option>
					<option value="Nain">Nain</option>
			</select>
			<div class="invalid-feedback">Selectionnez la race du personnage</div>			
		</div>
		<div class="col">
			<select name="Profession" id="Profession" class="custom-select" style="background-color:white" onchange="Pouet()" required>
				<option disabled selected value="">Profession</option>
					<option value="1">Artisan</option>
					<option value="2">Barde</option>
					<option value="3">Criminel</option>
					<option value="4">Docteur</option>
					<option value="5">Homme d’armes</option>
					<option value="6">Mage</option>
					<option value="7">Marchand</option>
					<option value="8">Prêtre / Druide</option>
					<option disabled value="9">Sorceleur</option>
			</select>
			<div class="invalid-feedback">Selectionnez la profession du personnage</div>			
		</div>
	</div>
	<br>
</div>


<div id="Etape_2" class="Etape" style="display:none;">	<!-- Etape 2 : passé du personnage -->

<div><h4>L'histoire de vie de votre personnage :</h4></div>
<br>
<div id="Passé_Normaux">
<div>Je préfère sauter cette étape (aléatoire)
<label class="switch">
			<input type="checkbox" id="HdV_random" onclick="RandomLife()">
			<span class="slider round"></span>
</label>
</div>
<br>
<div><h4>Patrie :</h4>	<!-- Patrie -->
<div class="form-row" >	
		<div class="col">
			<select name="Région" id="Région" class="custom-select" style="background-color:white" onchange="Région2()">
				<option disabled selected value="">Région</option>
				<option value="1">Royaumes du Nord</option>
				<option value="2">Nilfgaard</option>
				<option disabled value="3">Terres Ancestrales</option>
			</select>
			<div class="invalid-feedback">Selectionnez la région du personnage</div>			
		</div>
		<div class="col">
			<select name="Origine" id="Origine" class="custom-select" style="background-color:white" onchange="">
				<option disabled selected value="">Origine</option>
				<optgroup label="Royaumes du Nord">
					<option id="Origine_RN_1" value="1_1">Redania</option>
					<option id="Origine_RN_2" value="1_2">Kaedwen</option>
					<option id="Origine_RN_3" value="1_3">Temeria</option>
					<option id="Origine_RN_4" value="1_4">Aedirn</option>
					<option id="Origine_RN_5" value="1_5">Lyria & Rivia</option>
					<option id="Origine_RN_6" value="1_6">Kovir & Poviss</option>
					<option id="Origine_RN_7" value="1_7">Skellige</option>
					<option id="Origine_RN_8" value="1_8">Cidaris</option>
					<option id="Origine_RN_9" value="1_9">Verden</option>
					<option id="Origine_RN_10" value="1_10">Cintra</option>
				</optgroup>
				<optgroup label="Nilfgaard">
					<option id="Origine_N_1" value="2_1">Le Cœur de Nilfgaard</option>
					<option id="Origine_N_2" value="2_2">Vicovaro</option>
					<option id="Origine_N_3" value="2_3">Angren</option>
					<option id="Origine_N_4" value="2_4">Nazair</option>
					<option id="Origine_N_5" value="2_5">Mettina</option>
					<option id="Origine_N_6" value="2_6">Mag Turga</option>
					<option id="Origine_N_7" value="2_7">Gheso</option>
					<option id="Origine_N_8" value="2_8">Ebbing</option>
					<option id="Origine_N_9" value="2_9">Maecht</option>
					<option id="Origine_N_10" value="2_10">Gemmeria</option>
					<option id="Origine_N_11" value="2_11">Etolia</option>
				</optgroup>
				<optgroup label="Terres Ancestrales">
					<option disabled value="3_1">Dol Blathanna</option>
					<option disabled value="3_2">Mahakam</option>
				</optgroup>
			</select>
			<div class="invalid-feedback">Selectionnez la région d'origine du personnage</div>			
		</div>
	</div>
</div>
	<br>
<div><h4>Situation familiale :</h4>	<!-- Famille -->

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Modal_Destins_Explication">
  Destins
</button>

<!-- Modal -->
<div class="modal fade bd-example-modal-xl" id="Modal_Destins_Explication" tabindex="-1" role="dialog" aria-labelledby="Modal_Destins_Explication_Titre" aria-hidden="true">
  <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="Modal_Destins_Explication_Titre">Destins - description</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

<div class="accordion" id="accordion_Destin_Explication">
  <div class="card">
    <div class="card-header" id="heading_Destin_Familial">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse_Destin_Familial" aria-expanded="true" aria-controls="collapse_Destin_Familial">
          Destin familial
        </button>
      </h2>
    </div>

    <div id="collapse_Destin_Familial" class="collapse" aria-labelledby="heading_Destin_Familial" data-parent="#accordion_Destin_Explication">
      <div class="card-body">

<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Royaumes du Nord</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Nilfgaard</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Terres Ancestrales</a>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div style="text-align:left;" class="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  
<b><u>Destin 1 :</u></b>
<br>Votre famille a été dispersée par les guerres et vous ne savez pas où se trouvent la plupart d'entre elles.
<br>
<b><u>Destin 2 :</u></b>
<br>Votre famille a été emprisonnée pour des délits ou pour des accusations forgées de toutes pièces. Tu étais le seul à t'échapper. Vous voudrez peut-être les libérer ... ou peut-être pas.
<br>
<b><u>Destin 3 :</u></b>
<br>Votre maison familiale a été maudite et maintenant les récoltes ne poussent plus et des spectres parcourent les couloirs. Il est devenu trop dangereux pour vous de rester dans cette maison.
<br>
<b><u>Destin 4 :</u></b>
<br>Avec tant de guerres, le gagne-pain de votre famille a été détruit. Votre famille s'est tournée vers le crime pour survivre.
<br>
<b><u>Destin 5 :</u></b>
<br>Votre famille a accumulé une énorme dette de jeux. Vous avez désespérément besoin d'argent.
<br>
<b><u>Destin 6 :</u></b>
<br>Votre famille est morte dans une querelle avec une autre famille. Vous ne vous souvenez peut-être même pas pourquoi cette querelle a commencé...
<br>
<b><u>Destin 7 :</u></b>
<br>En raison d'une action ou d'une inaction, votre famille est devenue détestée dans votre ville natale et maintenant personne là-bas ne veut rien avoir à faire avec eux.
<br>
<b><u>Destin 8 :</u></b>
<br>Un jour, tout ce que vous aviez a été arraché par une bande de bandits. Votre famille a été massacrée, vous laissant entièrement seul.
<br>
<b><u>Destin 9 :</u></b>
<br>Votre famille a un secret profond et sombre qui, s'il était découvert, vous ruinerait complètement. Vous pouvez décider quel est ce secret, ou le MJ peut décider.
<br>
<b><u>Destin 10 :</u></b>
<br>Votre famille en est venue à se mépriser. Personne avec qui vous avez grandi ne vous reparlera et vous avez de la chance de recevoir le bonjour de vos frères et sœurs.

  
  </div>
  <div style="text-align:left;" class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

<b><u>Destin 1 :</u></b>
<br>
Votre famille a été condamné pour des crimes contre l'Empire ou pour de fausses accusations. Vous seul avez échappé.
<br>
<b><u>Destin 2 :</u></b>
<br>
Votre famille a été exilée dans le désert de Korath et vous avez probablement passé la majeure partie de votre jeunesse à lutter pour survivre dans ce désert mortel.
<br>
<b><u>Destin 3 :</u></b>
<br>
Votre famille a été tuée par un mage renégat qui a eu une vendetta contre votre famille ou qui voulait juste du sang. De toute façon, vous êtes seul.
<br>
<b><u>Destin 4 :</u></b>
<br>
Votre famille a disparu et vous ne savez pas où ils sont allés. Un jour, ils se sont levés et sont partis.
<br>
<b><u>Destin 5 :</u></b>
<br>
Votre famille a été exécutée pour trahison contre l'Empire. Vous étiez le seul à échapper à ce sort.
<br>
<b><u>Destin 6 :</u></b>
<br>
Votre famille a été dépouillée de son titre pour une raison quelconque. Vous avez été expulsé de votre domicile et vous avez dû survivre parmi le peuple.
<br>
<b><u>Destin 7 :</u></b>
<br>
Votre nom de famille a été terni par un parent magicien qui s'affiche honteusement comme un mage du Nord.
<br>
<b><u>Destin 8 :</u></b>
<br>
Vous avez déshonoré votre famille aux yeux de l'Empire. Quelque chose que vous avez fait ou omis de faire a ruiné votre nom personnel et a nui à votre famille.
<br>
<b><u>Destin 9 :</u></b>
<br>
Votre famille a un secret profond et sombre qui, s'il était découvert, les détruirait ainsi que leur nom pour toujours. Vous devez protéger ce secret avec votre vie.
<br>
<b><u>Destin 10 :</u></b>
<br>
Votre famille a été assassinée. Ils peuvent avoir gêné le plan de quelqu'un ou avoir été utilisé pour atteindre quelqu'un de plus puissant. De toute façon, votre famille est partie maintenant.
  
  </div>
  <div style="text-align:left;" class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  
<b><u>Destin 1 :</u></b>
<br>
Votre famille était marquée comme des sympathisants humains et n'est pas particulièrement aimée dans sa patrie.
<br>
<b><u>Destin 2 :</u></b>
<br>
Votre famille a été ostracisée pour ses opinions dissidentes et maintenant les gens ne vont plus socialiser avec vous ou votre famille.
<br>
<b><u>Destin 3 :</u></b>
<br>
Votre famille est morte dans les guerres du Nord. Ils ont peut-être effectivement combattu pendant la guerre ou ont été des victimes de la guerre.
<br>
<b><u>Destin 4 :</u></b>
<br>
Votre famille est prise dans une querelle depuis des siècles. Vous ne vous souvenez peut-être pas pourquoi cette querelle a commencé, mais c'est terrible.
<br>
<b><u>Destin 5 :</u></b>
<br>
Votre famille a été dépouillée de son titre pour une raison quelconque. Vous avez été expulsé de votre domicile et laissé en difficulté pour survivre
<br>
<b><u>Destin 6 :</u></b>
<br>
Votre famille a pillé des établissements humains au début de votre vie pour obtenir de la nourriture et peut-être riposter contre les humains.
<br>
<b><u>Destin 7 :</u></b>
<br>
Votre maison familiale est hantée. C'est très probablement parce que votre maison a été le site de nombreux morts pendant la guerre contre les humains.
<br>
<b><u>Destin 8 :</u></b>
<br>
Votre famille a été divisée par un beau-père humain qui a été amené dans votre famille par un frère ou une sœur. Certains membres de votre famille les aiment et d'autres les détestent.</option>
<br>
<b><u>Destin 9 :</u></b>
<br>
Votre famille a été tuée par des humains qui les prennaient pour des Scoia’tael. Ils peuvent avoir été abattus ou pendus sans procédure ni procès.
<br>
<b><u>Destin 10 :</u></b>
<br>
Votre famille est issue d'un traître infâme. Il entache les interactions de votre famille avec les autres races et rend la vie dans les terres ancestrales difficile.

  </div>
</div>

      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Destin parental
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion_Destin_Explication">
      <div class="card-body">

<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link" id="Destin_P_RN" data-toggle="pill" href="#pills-Destin_parents_1" role="tab" aria-controls="pills-home" aria-selected="true">Royaumes du Nord</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="Destin_P_N" data-toggle="pill" href="#pills-Destin_parents_2" role="tab" aria-controls="pills-profile" aria-selected="false">Nilfgaard</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="Destin_TA_N" data-toggle="pill" href="#pills-Destin_parents_3" role="tab" aria-controls="pills-contact" aria-selected="false">Terres Ancestrales</a>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div  style="text-align:left;" class="tab-pane fade" id="pills-Destin_parents_1" role="tabpanel" aria-labelledby="Destin_P_RN">
<b><u>Destin 1 :</u></b>
<br>
Un ou plusieurs de vos parents ont été tués dans les guerres du Nord. Très probablement votre père, mais il est également possible que votre mère se soit battue ou ait été une victime.
<br>
<b><u>Destin 2 :</u></b>
<br>
Un ou plusieurs de vos parents vous ont laissé seul dans les étendus sauvages. Peut-être qu'ils ne pouvaient pas se permettre de vous garder; vous étiez peut-être un accident.
<br>
<b><u>Destin 3 :</u></b>
<br>
Un ou plusieurs de vos parents ont été maudits par un mage ou à cause de la haine intense de quelqu'un qu'ils ont rencontré. La malédiction leur a pris la vie.
<br>
<b><u>Destin 4 :</u></b>
<br>
Un ou plusieurs de vos parents vous ont vendu pour de la monnaie ou vous ont peut-être échangé contre certains biens ou services. Vos parents avaient plus besoin d'argent que vous.
<br>
<b><u>Destin 5 :</u></b>
<br>
Un ou plusieurs de vos parents ont rejoint un gang. Vous avez vu ce gang souvent et avez parfois été obligé de travailler avec eux.
<br>
<b><u>Destin 6 :</u></b>
<br>
Un ou plusieurs de vos parents ont été tués par des monstres. C'est à vous de décider à quoi ils ont pu être la proie.
<br>
<b><u>Destin 7 :</u></b>
<br>
Un ou plusieurs de vos parents ont été exécutés à tort. Ils peuvent avoir été un bouc émissaire pour quelque chose ou simplement au mauvais endroit.
<br>
<b><u>Destin 8 :</u></b>
<br>
Un ou plusieurs de vos parents sont morts de la peste. Il n'y avait rien d'autre à faire que d'essayer d'achever leur souffrance.
<br>
<b><u>Destin 9 :</u></b>
<br>
Un ou plusieurs de vos parents ont fait défection à Nilfgaard. Ils ont peut-être obtenu un accord pour obtenir des informations ou ils ont peut-être simplement franchi la frontière.
<br>
<b><u>Destin 10 :</u></b>
<br>
Un ou plusieurs de vos parents ont été enlevés par des nobles. C'est probablement votre mère qui a attiré l'attention d'un seigneur local ou de son fils.
  </div>
  <div style="text-align:left;" class="tab-pane fade" id="pills-Destin_parents_2" role="tabpanel" aria-labelledby="Destin_P_N">
<b><u>Destin 1 :</u></b>
<br>
Votre père est décédé dans l'une des guerres du Nord. Il a peut-être déjà été dans l'armée ou il peut avoir été enrôlé pendant cette guerre
<br>
<b><u>Destin 2 :</u></b>
<br>
Un ou plusieurs de vos parents ont été empoisonnés. Cela a peut-être été le travail d'un rival professionnel, ou cela a peut-être été pour écarter vos parents.
<br>
<b><u>Destin 3 :</u></b>
<br>
La police secrète a emmené votre ou vos parents pour un «interrogatoire». La semaine suivante, leur corps a été retrouvé pendu dans les rues de la ville.
<br>
<b><u>Destin 4 :</u></b>
<br>
Un ou plusieurs de vos parents ont été tués par un mage voyou. Ils ont très probablement essayé de remettre le mage en question et en ont payé le prix.
<br>
<b><u>Destin 5 :</u></b>
<br>
Un ou plusieurs de vos parents ont été emprisonnés pour magie illégale. Peut-être qu'ils ont réellement commis le crime ou peut-être que c'était une mise en scène.
<br>
<b><u>Destin 6 :</u></b>
<br>
Un ou plusieurs de vos parents ont été exilés dans le désert de Korath. Ils ont probablement commis un crime majeur, mais les tuer causerait des problèmes.
<br>
<b><u>Destin 7 :</u></b>
<br>
Un ou plusieurs de vos parents ont été maudits par un mage. Le mage avait probablement une vendetta contre eux.
<br>
<b><u>Destin 8 :</u></b>
<br>
Vos parents vous ont simplement quittés. Vous ne savez peut-être même pas pourquoi ils l'ont fait. Un jour, vos parents ont tout simplement disparu.
<br>
<b><u>Destin 9 :</u></b>
<br>
Un ou plusieurs de vos parents ont été réduits en esclavage. Ils ont commis un crime contre l'Empire ou ont été piégé par un rival.
<br>
<b><u>Destin 10 :</u></b>
<br>
Un ou plusieurs de vos parents ont été envoyés dans le Nord comme agents doubles. Vous ne savez probablement même pas où ils sont maintenant, mais ils servent l'Empereur.
  </div>
  <div style="text-align:left;" class="tab-pane fade" id="pills-Destin_parents_3" role="tabpanel" aria-labelledby="Destin_TA_N">
<b><u>Destin 1 :</u></b>
<br>
Un ou plusieurs de vos parents ont été accusés d’être Scoia’tael. Les gens autour de vous jettent des regards à vos parents.
<br>
<b><u>Destin 2 :</u></b>
<br>
Un ou plusieurs de vos parents se sont retournés contre votre propre peuple et ont vendu les races aînées aux humains. Vos parents ne sont pas les bienvenus dans votre pays d'origine.
<br>
<b><u>Destin 3 :</u></b>
<br>
Un ou plusieurs de vos parents se sont suicidés de désespoir. Sans espoir de regagner la gloire du passé, ils ont abandonné et y ont mis fin.
<br>
<b><u>Destin 4 :</u></b>
<br>
En voyage, un ou plusieurs de vos parents sont devenus la proie du racisme humain. Ils sont morts dans un pogrom et leurs corps ont été affichés sur des piques.
<br>
<b><u>Destin 5 :</u></b>
<br>
Un ou plusieurs de vos parents sont devenus obsédés par le fait de retrouver l'ancienne gloire de leur race. Ils ont tout sacrifié pour cette cause.
<br>
<b><u>Destin 6 :</u></b>
<br>
Un ou plusieurs de vos parents ont été exilés de votre patrie. Il existe de nombreuses raisons possibles, du crime aux opinions dissidentes.
<br>
<b><u>Destin 7 :</u></b>
<br>
Un ou plusieurs de vos parents ont été maudits. Vous pouvez décider de ce qu'est cette malédiction ou, le Game Master peut décider.
<br>
<b><u>Destin 8 :</u></b>
<br>
Vos parents vous ont donné à une autre famille pour que vous puissiez survivre, car ils ne pouvaient pas prendre soin de vous.
<br>
<b><u>Destin 9 :</u></b>
<br>
Un ou plusieurs de vos parents ont rejoint les Scoia’tael pour tenter de se venger des humains qu’ils considèrent comme ruinant leur vie.
<br>
<b><u>Destin 10 :</u></b>
<br>
Un ou plusieurs de vos parents sont décédés dans un «accident». Très probablement, ils se sont fait un ennemi puissant qui a finalement trouvé un moyen de s'en débarrasser.
  </div>
</div>

      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Statut familial
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion_Destin_Explication">
      <div class="card-body">

<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-Statut_familial_1" role="tab" aria-controls="pills-home" aria-selected="true">Royaumes du Nord</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-Statut_familial_2" role="tab" aria-controls="pills-profile" aria-selected="false">Nilfgaard</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-Statut_familial_3" role="tab" aria-controls="pills-contact" aria-selected="false">Terres Ancestrales</a>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div  style="text-align:left;" class="tab-pane fade" id="pills-Statut_familial_1" role="tabpanel" aria-labelledby="pills-home-tab">
<b><u>Statut 1 :</u></b>
<br>
Aristocratie: Vous avez grandi dans un noble manoir avec des serviteurs pour vous attendre, mais vous vous attendiez toujours à vous comporter et à impressionner.
Équipement de départ: Papier de noblesse (+2 Réputation)
<br>
<b><u>Statut 2 :</u></b>
<br>
Adopté par un mage: Vous avez été donné à un mage à un jeune âge. Vous viviez dans le confort mais voyiez à peine votre concierge, toujours occupé.
Équipement de départ: une chronique (+1 éducation)
<br>
<b><u>Statut 3 :</u></b>
<br>
Chevaliers: Vous avez grandi dans un manoir où vous avez appris à être une vraie dame ou un seigneur. Votre destin a été fixé dès la naissance.
Équipement de départ: Héraldique personnelle (+1 réputation)
<br>
<b><u>Statut 4 :</u></b>
<br>
Famille de marchands: vous avez grandi parmi les marchands et vous avez toujours été entouré de cris, de marchandages et d'argent.
Équipement de départ: 2 connaissances
<br>
<b><u>Statut 5 :</u></b>
<br>
Famille d'artisans: vous avez grandi dans un atelier d'artisans. Vos journées ont été remplies des bruits incessants de la création, et souvent longues.
Équipement de départ: 3 diagrammes / formules communes
<br>
<b><u>Statut 6 :</u></b>
<br>
Entertainer Family: Vous avez grandi avec un groupe d'artistes. Vous avez peut-être voyagé ou joué dans un théâtre.
Équipement de départ: 1 instrument et 1 ami
<br>
<b><u>Statut 7 :</u></b>
<br>
Famille paysanne: vous avez grandi dans une ferme à la campagne. Vous n'aviez pas grand-chose à votre nom et votre vie était simple, mais dangereuse.
Équipement de départ: un jeton chanceux (+1 chance)  
  </div>
  <div style="text-align:left;" class="tab-pane fade" id="pills-Statut_familial_2" role="tabpanel" aria-labelledby="pills-profile-tab">
<b><u>Statut 1 :</u></b>
<br>
Aristocratie: Vous avez grandi dans un manoir, vous vous entraînez à bien connaître le monde de la cour. Le luxe n'était que votre motivation.
Équipement de départ: Papier de noblesse (+2 Réputation)
<br>
<b><u>Statut 2 :</u></b>
<br>
Haut clergé: vous avez été élevé parmi le clergé du Grand Soleil. Vous avez grandi pieux et toujours conscient que l'Église vous guiderait.
Équipement de départ: un symbole sacré (+1 Courage)
<br>
<b><u>Statut 3 :</u></b>
<br>
Chevaliers: Vous avez grandi en sachant que votre devoir était envers l'empereur et que tout votre luxe était une récompense pour votre service éventuel.
Équipement de départ: Héraldique personnelle (+1 réputation)
<br>
<b><u>Statut 4 :</u></b>
<br>
Famille d'artisan: Vous avez grandi dans une boutique d'artisan, apprenant à créer des produits à vendre dans le monde entier. Vous avez appris la valeur de la qualité.
Équipement de départ: 3 diagrammes / formules communes
<br>
<b><u>Statut 5 :</u></b>
<br>
Famille de marchands: vous avez grandi en vendant des produits dans tout l'Empire. Vous avez vu toutes sortes de produits exotiques du monde entier.
Équipement de départ: 2 connaissances
<br>
<b><u>Statut 6 :</u></b>
<br>
Né dans la servitude: vous êtes né dans la servitude et avez vécu dans des quartiers simples. Vous possédiez très peu et peiniez souvent.
Équipement de départ: un oiseau ou un serpent entraîné
<br>
<b><u>Statut 7 :</u></b>
<br>
Famille paysanne: Vous avez grandi dans l'une des milliers de fermes de l'Empire. Vous aviez peu de choses à votre nom mais la vie était simple.
Équipement de départ: un jeton chanceux (+1 chance)
  </div>
  <div style="text-align:left;" class="tab-pane fade" id="pills-Statut_familial_3" role="tabpanel" aria-labelledby="pills-contact-tab">
<b><u>Statut 1 :</u></b>
<br>
Aristocratie: Vous avez grandi dans un palais et vous avez constamment rappelé la gloire du passé. Vous deviez être à la hauteur de l'héritage.
Équipement de départ: Papier de noblesse (+2 Réputation)
<br>
<b><u>Statut 2 :</u></b>
<br>
Guerrier noble: Vous avez grandi en tant qu'enfant de noble guerrier, censé élever la réputation de votre famille et ne jamais déshonorer votre héritage.
Équipement de départ: Héraldique personnelle (+1 réputation)
<br>
<b><u>Statut 3 :</u></b>
<br>
Marchands: vous avez grandi parmi les marchands itinérants. La vie était parfois difficile, mais les loisirs non humains ont toujours de la valeur.
Équipement de départ: 2 connaissances
<br>
<b><u>Statut 4 :</u></b>
<br>
Famille de scribes: Vous avez grandi en tant qu'enfant de scribes, enregistrant et protégeant le plus possible l'histoire des personnes âgées.
Équipement de départ: une chronique (+1 éducation)
<br>
<b><u>Statut 5 :</u></b>
<br>
Artistes: Vous avez grandi en chantant des chansons et en jouant des pièces. Vous avez travaillé dans les coulisses, aidé à écrire des chansons et réparé des instruments.
Équipement de départ: 1 instrument et 1 ami
<br>
<b><u>Statut 6 :</u></b>
<br>
Famille d'artisans: Vous avez grandi dans une famille d'artisans, visitant d'anciens palais pour vous inspirer et passant des heures chaque jour sur des projets.
Équipement de départ: 3 diagrammes / formules courants
<br>
<b><u>Statut 7 :</u></b>
<br>
Famille de roturiers: vous avez grandi dans une famille basse-née, occupée aux manoirs des autres ou occupant de petits emplois dans votre ville natale.
Équipement de départ: un jeton chanceux (+1 chance)
  </div>
</div>

      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingFour">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          Mentor / Influences
        </button>
      </h2>
    </div>
    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion_Destin_Explication">
      <div class="card-body">

<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-Influences_1" role="tab" aria-controls="pills-home" aria-selected="true">Royaumes du Nord</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-Influences_2" role="tab" aria-controls="pills-profile" aria-selected="false">Nilfgaard</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-Influences_3" role="tab" aria-controls="pills-contact" aria-selected="false">Terres Ancestrales</a>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div  style="text-align:left;" class="tab-pane fade" id="pills-Influences_1" role="tabpanel" aria-labelledby="pills-home-tab">
<b><u>Mentor 1 :</u></b>
<br>Une église: vous avez grandi sous l'influence de votre religion locale et avez passé des heures par jour à l'église.
Équipement: un texte sacré
<br>
<b><u>Mentor 2 :</u></b>
<br>Un artisan: Votre plus grande influence a été un artisan qui vous a appris à apprécier l'art et les compétences.
Équipement: un jeton que vous avez créé
<br>
<b><u>Mentor 3 :</u></b>
<br>Un comte: votre plus grande influence a été un comte ou une comtesse qui vous a appris à vous composer.
Équipement: une bague en argent
<br>
<b><u>Mentor 4 :</u></b>
<br>Un mage: Votre plus grande influence a été un mage qui vous a appris à ne pas craindre la magie et à toujours remettre en question.
Équipement: un petit pendentif
<br>
<b><u>Mentor 5 :</u></b>
<br>Une sorcière: Votre plus grande influence était une sorcière du village qui vous a appris l'importance de la connaissance.
Équipement: une poupée magique noire
<br>
<b><u>Mentor 6 :</u></b>
<br>Une personne maudite: Votre plus grande influence était une personne maudite qui vous a appris à ne jamais juger les autres trop sévèrement.
Équipement: un totem sculpté
<br>
<b><u>Mentor 7 :</u></b>
<br>Un artiste: Votre plus grande influence était un artiste qui vous a beaucoup appris sur le spectacle.
Équipement: un ticket
<br>
<b><u>Mentor 8 :</u></b>
<br>Un marchand: Votre plus grande influence était un marchand qui vous a appris à être astucieux et intelligent.
Équipement: une pièce que vous avez gagnée
<br>
<b><u>Mentor 9 :</u></b>
<br>Un criminel: Votre plus grande influence était un criminel qui vous a appris à prendre soin de vous.
Équipement: un masque
<br>
<b><u>Mentor 10 :</u></b>
<br>Un homme d'armes: Votre plus grande influence a été un soldat qui vous a appris à vous défendre.
Équipement: un trophée de bataille
  </div>
  <div style="text-align:left;" class="tab-pane fade" id="pills-Influences_2" role="tabpanel" aria-labelledby="pills-profile-tab">
<b><u>Mentor 1 :</u></b>
<br>Le culte du grand soleil: Votre plus grande influence a été l'Église. Vous avez passé des années à apprendre des chants et des rituels.
Équipement: un masque de cérémonie
<br>
<b><u>Mentor 2 :</u></b>
<br>Un paria: Votre plus grande influence a été un paria social qui vous a appris à toujours remettre en question la société.
Équipement: un badge coloré brillant
<br>
<b><u>Mentor 3 :</u></b>
<br>Un comte: votre plus grande influence a été un comte qui vous a appris à diriger et à inculquer l'ordre.
Équipement: un collier en argent
<br>
<b><u>Mentor 4 :</u></b>
<br>Un mage: Votre plus grande influence a été un mage qui vous a appris l'importance de l'ordre et de la prudence.
Équipement: un emblème
<br>
<b><u>Mentor 5 :</u></b>
<br>Un avocat: Votre plus grande influence était un détective impérial. Vous avez passé beaucoup de temps à résoudre des mystères.
Équipement: une loupe
<br>
<b><u>Mentor 6 :</u></b>
<br>Un chasseur de mages: Votre plus grande influence a été un chasseur de mages qui vous a appris à faire attention à la magie et aux mages.
Équipement: une bague en Dimeritium
<br>
<b><u>Mentor 7 :</u></b>
<br>Un homme d'armes: Votre plus grande influence a été un soldat qui a partagé des histoires de danger et d'excitation.
Équipement: un trophée de bataille
<br>
<b><u>Mentor 8 :</u></b>
<br>Un artisan: Votre plus grande influence a été un artisan qui vous a appris à apprécier la compétence et la précision.
Équipement: un bijou que vous avez créé
<br>
<b><u>Mentor 9 :</u></b>
<br>Un monstre sensible: votre plus grande influence était un monstre sensible qui vous a appris que tous les monstres ne sont pas mauvais.
Équipement: un étrange totem
<br>
<b><u>Mentor 10 :</u></b>
<br>Un artiste: Votre plus grande influence a été un artiste qui vous a appris à vous exprimer.
Équipement: un jeton d'un fan
  </div>
  <div style="text-align:left;" class="tab-pane fade" id="pills-Influences_3" role="tabpanel" aria-labelledby="pills-contact-tab">
<b><u>Mentor 1 :</u></b>
<br>Un humain: Votre plus grande influence a été un humain qui vous a appris que le racisme est parfois infondé.
Équipement: une poupée de paille
<br>
<b><u>Mentor 2 :</u></b>
<br>Un artisan: Votre plus grande influence a été un artisan qui vous a appris à apprécier le grand art des personnes âgées.
Équipement: un petit jeton que vous avez créé
<br>
<b><u>Mentor 3 :</u></b>
<br>Un noble guerrier: votre plus grande influence était un Danseur de Guerre ou un Défenseur Mahakaman qui vous a enseigné l'honneur.
Équipement: un jeton de bataille
<br>
<b><u>Mentor 4 :</u></b>
<br>Un Highborn: Votre plus grande influence était un highborn qui vous a enseigné la fierté et comment vous comporter.
Équipement: une chevalière
<br>
<b><u>Mentor 5 :</u></b>
<br>Un artiste: Votre plus grande influence a été un artiste qui vous a appris l'importance du bonheur et de la beauté.
Équipement: un ticket
<br>
<b><u>Mentor 6 :</u></b>
<br>Un pillard: Votre plus grande influence a été un pillard qui vous a appris que vous avez le droit de prendre ce dont vous avez besoin.
Équipement: un cartable
<br>
<b><u>Mentor 7 :</u></b>
<br>Un sage: Votre plus grande influence a été un sage qui vous a enseigné l'importance de l'histoire des personnes âgées.
Équipement: un livre de contes
<br>
<b><u>Mentor 8 :</u></b>
<br>Un criminel: Votre plus grande influence était un criminel qui vous a appris à suivre vos propres règles.
Équipement: un masque
<br>
<b><u>Mentor 9 :</u></b>
<br>Un chasseur: Votre plus grande influence était un chasseur qui vous a appris à survivre dans les terres sauvages.
Équipement: un trophée de chasse
<br>
<b><u>Mentor 10 :</u></b>
<br>Un agriculteur des basses terres: votre plus grande influence a été un agriculteur des basses terres qui vous a appris à vivre heureux.
Équipement: pelle d'agriculteur
  </div>
</div>

      </div>
    </div>
  </div>
</div>




      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<br><br>
<div class="form-row" >	
		<div class="col">
			<select name="Famille" id="Famille" class="custom-select" style="background-color:white" onchange="famille2()">
				<option disabled selected value="">Famille</option>
				<option value="1">Certain sont encore en vie</option>
				<option value="2">Quelque chose est arrivé...</option>
			</select>
			<div class="invalid-feedback">Selectionnez le statut familial</div>			
		</div>
		<div class="col">
			<select name="Parents" id="Parents" class="custom-select" style="background-color:white" onchange="parents2()">
				<option disabled selected value="">Parents</option>
				<option value="1">Vivants</option>
				<option value="2">Morts</option>
			</select>
			<div class="invalid-feedback">Selectionnez le statut parental</div>			
		</div>
</div>
<div class="form-row" >	
		<div class="col">
			<select name="Destin_famille" id="Destin_famille" class="custom-select" style="background-color:white">
				<option disabled selected value="">Destin familiale</option>
				<optgroup label="Royaumes du Nord">
					<option id="Destin_famille_RN_1" value="1_1">Destin 1</option>
					<option id="Destin_famille_RN_2" value="1_2">Destin 2</option>
					<option id="Destin_famille_RN_3" value="1_3">Destin 3</option>
					<option id="Destin_famille_RN_4" value="1_4">Destin 4</option>
					<option id="Destin_famille_RN_5" value="1_5">Destin 5</option>
					<option id="Destin_famille_RN_6" value="1_6">Destin 6</option>
					<option id="Destin_famille_RN_7" value="1_7">Destin 7</option>
					<option id="Destin_famille_RN_8" value="1_8">Destin 8</option>
					<option id="Destin_famille_RN_9" value="1_9">Destin 9</option>
					<option id="Destin_famille_RN_10" value="1_10">Destin 10</option>
				</optgroup>
				<optgroup label="Nilfgaard">
					<option id="Destin_famille_N_1" value="2_1">Destin 1</option>
					<option id="Destin_famille_N_2" value="2_2">Destin 2</option>
					<option id="Destin_famille_N_3" value="2_3">Destin 3</option>
					<option id="Destin_famille_N_4" value="2_4">Destin 4</option>
					<option id="Destin_famille_N_5" value="2_5">Destin 5</option>
					<option id="Destin_famille_N_6" value="2_6">Destin 6</option>
					<option id="Destin_famille_N_7" value="2_7">Destin 7</option>
					<option id="Destin_famille_N_8" value="2_8">Destin 8</option>
					<option id="Destin_famille_N_9" value="2_9">Destin 9</option>
					<option id="Destin_famille_N_10" value="2_10">Destin 10</option>
				</optgroup>
				<optgroup label="Terres Ancestrales">
					<option id="Destin_famille_TA_1" value="3_1">Destin 1</option>
					<option id="Destin_famille_TA_2" value="3_2">Destin 2</option>
					<option id="Destin_famille_TA_3" value="3_3">Destin 3</option>
					<option id="Destin_famille_TA_4" value="3_4">Destin 4</option>
					<option id="Destin_famille_TA_5" value="3_5">Destin 5</option>
					<option id="Destin_famille_TA_6" value="3_6">Destin 6</option>
					<option id="Destin_famille_TA_7" value="3_7">Destin 7</option>
					<option id="Destin_famille_TA_8" value="3_8">Destin 8</option>
					<option id="Destin_famille_TA_9" value="3_9">Destin 9</option>
					<option id="Destin_famille_TA_10" value="3_10">Destin 10</option>
				</optgroup>
			</select>
			<div class="invalid-feedback">Selectionnez le destin familiale</div>			
		</div>
		<div class="col">
			<select name="Destin_parents" id="Destin_parents" class="custom-select" style="background-color:white">
				<option disabled selected value="">Destin parental</option>
				<optgroup label="Royaumes du Nord">
					<option id="Destin_parents_RN_1" value="1_1">Destin 1</option>
					<option id="Destin_parents_RN_2" value="1_2">Destin 2</option>
					<option id="Destin_parents_RN_3" value="1_3">Destin 3</option>
					<option id="Destin_parents_RN_4" value="1_4">Destin 4</option>
					<option id="Destin_parents_RN_5" value="1_5">Destin 5</option>
					<option id="Destin_parents_RN_6" value="1_6">Destin 6</option>
					<option id="Destin_parents_RN_7" value="1_7">Destin 7</option>
					<option id="Destin_parents_RN_8" value="1_8">Destin 8</option>
					<option id="Destin_parents_RN_9" value="1_9">Destin 9</option>
					<option id="Destin_parents_RN_10" value="1_10">Destin 10</option>
				</optgroup>
				<optgroup label="Nilfgaard">
					<option id="Destin_parents_N_1" value="2_1">Destin 1</option>
					<option id="Destin_parents_N_2" value="2_2">Destin 2</option>
					<option id="Destin_parents_N_3" value="2_3">Destin 3</option>
					<option id="Destin_parents_N_4" value="2_4">Destin 4</option>
					<option id="Destin_parents_N_5" value="2_5">Destin 5</option>
					<option id="Destin_parents_N_6" value="2_6">Destin 6</option>
					<option id="Destin_parents_N_7" value="2_7">Destin 7</option>
					<option id="Destin_parents_N_8" value="2_8">Destin 8</option>
					<option id="Destin_parents_N_9" value="2_9">Destin 9</option>
					<option id="Destin_parents_N_10" value="2_10">Destin 10</option>
				</optgroup>
				<optgroup label="Terres Ancestrales">
					<option id="Destin_parents_TA_1" value="3_1">Destin 1</option>
					<option id="Destin_parents_TA_2" value="3_2">Destin 2</option>
					<option id="Destin_parents_TA_3" value="3_3">Destin 3</option>
					<option id="Destin_parents_TA_4" value="3_4">Destin 4</option>
					<option id="Destin_parents_TA_5" value="3_5">Destin 5</option>
					<option id="Destin_parents_TA_6" value="3_6">Destin 6</option>
					<option id="Destin_parents_TA_7" value="3_7">Destin 7</option>
					<option id="Destin_parents_TA_8" value="3_8">Destin 8</option>
					<option id="Destin_parents_TA_9" value="3_9">Destin 9</option>
					<option id="Destin_parents_TA_10" value="3_10">Destin 10</option>
				</optgroup>
			</select>
			<div class="invalid-feedback">Selectionnez le destin parental</div>			
		</div>
		<div class="col">
			<select name="Statut_familial" id="Statut_familial" class="custom-select" style="background-color:white">
				<option disabled selected value="">Statut familial</option>
				<optgroup label="Royaumes du Nord">
					<option id="Statut_familial_RN_1" value="1_1">Statut 1</option>
					<option id="Statut_familial_RN_2" value="1_2">Statut 2</option>
					<option id="Statut_familial_RN_3" value="1_3">Statut 3</option>
					<option id="Statut_familial_RN_4" value="1_4">Statut 4</option>
					<option id="Statut_familial_RN_5" value="1_5">Statut 5</option>
					<option id="Statut_familial_RN_6" value="1_6">Statut 6</option>
					<option id="Statut_familial_RN_7" value="1_7">Statut 7</option>
				</optgroup>
				<optgroup label="Nilfgaard">
					<option id="Statut_familial_N_1" value="2_1">Statut 1</option>
					<option id="Statut_familial_N_2" value="2_2">Statut 2</option>
					<option id="Statut_familial_N_3" value="2_3">Statut 3</option>
					<option id="Statut_familial_N_4" value="2_4">Statut 4</option>
					<option id="Statut_familial_N_5" value="2_5">Statut 5</option>
					<option id="Statut_familial_N_6" value="2_6">Statut 6</option>
					<option id="Statut_familial_N_7" value="2_7">Statut 7</option>
				</optgroup>
				<optgroup label="Terres Ancestrales">
					<option id="Statut_familial_TA_1" value="3_1">Statut 1</option>
					<option id="Statut_familial_TA_2"value="3_2">Statut 2</option>
					<option id="Statut_familial_TA_3"value="3_3">Statut 3</option>
					<option id="Statut_familial_TA_4"value="3_4">Statut 4</option>
					<option id="Statut_familial_TA_5"value="3_5">Statut 5</option>
					<option id="Statut_familial_TA_6"value="3_6">Statut 6</option>
					<option id="Statut_familial_TA_7"value="3_7">Statut 7</option>
				</optgroup>
			</select>
			<div class="invalid-feedback">Selectionnez le statut familial</div>			
		</div>
</div>
<div class="form-row" >	
		<div class="col">
			<select name="Mentor" id="Mentor" class="custom-select" style="background-color:white">
				<option disabled selected value="">Mentor</option>
				<optgroup label="Royaumes du Nord">
					<option id="Mentor_RN_1" value="1_1">Mentor 1</option>
					<option id="Mentor_RN_2" value="1_2">Mentor 2</option>
					<option id="Mentor_RN_3" value="1_3">Mentor 3</option>
					<option id="Mentor_RN_4" value="1_4">Mentor 4</option>
					<option id="Mentor_RN_5" value="1_5">Mentor 5</option>
					<option id="Mentor_RN_6" value="1_6">Mentor 6</option>
					<option id="Mentor_RN_7" value="1_7">Mentor 7</option>
					<option id="Mentor_RN_8" value="1_8">Mentor 8</option>
					<option id="Mentor_RN_9" value="1_9">Mentor 9</option>
					<option id="Mentor_RN_10" value="1_10">Mentor 10</option>
				</optgroup>
				<optgroup label="Nilfgaard">
					<option id="Mentor_N_1" value="2_1">Mentor 1</option>
					<option id="Mentor_N_2" value="2_2">Mentor 2</option>
					<option id="Mentor_N_3" value="2_3">Mentor 3</option>
					<option id="Mentor_N_4" value="2_4">Mentor 4</option>
					<option id="Mentor_N_5" value="2_5">Mentor 5</option>
					<option id="Mentor_N_6" value="2_6">Mentor 6</option>
					<option id="Mentor_N_7" value="2_7">Mentor 7</option>
					<option id="Mentor_N_8" value="2_8">Mentor 8</option>
					<option id="Mentor_N_9" value="2_9">Mentor 9</option>
					<option id="Mentor_N_10" value="2_10">Mentor 10</option>
				</optgroup>
				<optgroup label="Terres Ancestrales">
					<option id="Mentor_TA_1" value="3_1">Mentor 1</option>
					<option id="Mentor_TA_2" value="3_2">Mentor 2</option>
					<option id="Mentor_TA_3" value="3_3">Mentor 3</option>
					<option id="Mentor_TA_4" value="3_4">Mentor 4</option>
					<option id="Mentor_TA_5" value="3_5">Mentor 5</option>
					<option id="Mentor_TA_6" value="3_6">Mentor 6</option>
					<option id="Mentor_TA_7" value="3_7">Mentor 7</option>
					<option id="Mentor_TA_8" value="3_8">Mentor 8</option>
					<option id="Mentor_TA_9" value="3_9">Mentor 9</option>
					<option id="Mentor_TA_10" value="3_10">Mentor 10</option>
				</optgroup>
			</select>
			<div class="invalid-feedback">Selectionnez votre mentor</div>			
		</div>
		<div class="col">
			<select name="Fratrie" id="Fratrie" class="custom-select" style="background-color:white">
				<option disabled selected value="">Fratrie</option>
				<option id="Fratrie_0" value="0">Enfant unique</option>
				<option id="Fratrie_1" value="1">1</option>
				<option id="Fratrie_2" value="2">2</option>
				<option id="Fratrie_3" value="3">3</option>
				<option id="Fratrie_4" value="4">4</option>
				<option id="Fratrie_5" value="5">5</option>
				<option id="Fratrie_6" value="6">6</option>
				<option id="Fratrie_7" value="7">7</option>
				<option id="Fratrie_8" value="8">8</option>
			</select>
			<div class="invalid-feedback">Selectionnez le statut parental</div>			
		</div>
</div>
</div>
	<br>
<div><h4>Evénements :</h4>	<!-- Evénements -->
<div class="form-row" >	
		<div class="col">
			<select style="width:50%" name="Age" id="Age" class="custom-select" style="background-color:white" onchange="RandomLife()">
				<option disabled selected value="">Age</option>
				<option value="2">Vingtaine</option>
				<option value="3">Trentaine</option>
				<option id="Age_4" value="4">Quarantaine</option>
				<option id="Age_5" value="5">Cinquantaine</option>
			</select>
			<div class="invalid-feedback">Selectionnez l'âge du personnage</div>			
		</div>
</div>
<br>
<div style="text-align:left" id="Events"></div>

</div>

</div>
<div id="Passé_Witcher">
<div>Je préfère sauter cette étape (aléatoire)
<label class="switch">
			<input type="checkbox" id="HdV_random_Witcher" onclick="RandomLifeWither()">
			<span class="slider round"></span>
</label>
</div>
<br>
<div class="form-row" >	
		<div class="col">
			<select id="Sorceleur_1" class="custom-select" style="background-color:white" onchange="">
				<option disabled selected value="">Quand êtes-vous devenu un sorceleur ?</option>
				<option value="1">1-2 ans</option>
				<option value="2">4-6 ans</option>
				<option value="3">8-11 ans</option>
			</select>
			<div class="invalid-feedback">Selectionnez un choix</div>			
		</div>
		<div class="col">
			<select id="Sorceleur_2" class="custom-select" style="background-color:white" onchange="">
				<option disabled selected value="">Dans quelle école ?</option>
				<option value="1">Loup</option>
				<option value="2">Griffon</option>
				<option value="3">Chat</option>
				<option value="4">Vipère</option>
				<option value="5">Ours</option>
			</select>
			<div class="invalid-feedback">Selectionnez un choix</div>			
		</div>
</div>
<br>
<div>
<input id="Bouton_Formation_Witcher" class="btn btn-primary" type="button" value="Cliquez ici pour découvrir votre formation" onclick="FormationWitcher()">
<div id="Sorceleur_3_4" style="display:none">
Comment s'est passée la formation précoce ?<br><div style="text-align:left" id="Sorceleur_3"></div>
<br>Comment s'est déroulé votre Epreuve des herbes ?<br><div style="text-align:left" id="Sorceleur_4"></div>
</div>
<br>
<div class="form-row" >	
		<div class="col">
			<select id="Sorceleur_5" class="custom-select" style="background-color:white" onchange="">
				<option disabled selected value="">Quel a été votre événement le plus important ?</option>
				<option value="1">Avoir un enfant par le Droit de Surprise</option>
				<option value="2">Chassé par un monstre sensible</option>
				<option value="3">Combattu aux côtés d'un chevalier</option>
				<option value="4">Capturé par un mage pour des expériences</option>
				<option value="5">A travaillé pour un noble</option>
				<option value="6">Est allé au-delà des frontières</option>
				<option value="7">Romance significative</option>
				<option value="8">Combattu pour votre donjon</option>
				<option value="9">Infamie acquise</option>
				<option value="10">Acquis la renommée</option>
			</select>
			<div class="invalid-feedback">Selectionnez un choix</div>			
		</div>
		<div class="col">
			<select id="Sorceleur_6" class="custom-select" style="background-color:white" onchange="">
				<option disabled selected value="">Qui êtes-vous maintenant?</option>
				<option value="1">Sorceleur personnel</option>
				<option value="2">Cherche du travail</option>
				<option value="3">Hermite</option>
				<option value="4">Vie normale</option>
				<option value="5">Criminel</option>
			</select>
			<div class="invalid-feedback">Selectionnez un choix</div>			
		</div>
</div>
<div>La vie en tant que Sorceleur :
<div class="form-row" >	
		<div class="col">
			<select id="Sorceleur_7" class="custom-select" style="background-color:white" onchange="RandomLifeWither()">
				<option disabled selected value="">Degrès de sécurité</option>
				<option value="1">Prudent</option>
				<option value="2">Ordinaire</option>
				<option value="3">Non neutre</option>
				<option value="4">Risqué</option>
			</select>
			<div class="invalid-feedback">Selectionnez votre premier événément</div>			
		</div>
		<div class="col">
			<select id="Sorceleur_8" class="custom-select" style="background-color:white" onchange="RandomLifeWither()">
				<option disabled selected value="">Degrès de sécurité</option>
				<option value="1">Prudent</option>
				<option value="2">Ordinaire</option>
				<option value="3">Non neutre</option>
				<option value="4">Risqué</option>
			</select>
			<div class="invalid-feedback">Selectionnez votre second événément</div>			
		</div>
		<div class="col">
			<select id="Sorceleur_9" class="custom-select" style="background-color:white" onchange="RandomLifeWither()">
				<option disabled selected value="">Degrès de sécurité</option>
				<option value="1">Prudent</option>
				<option value="2">Ordinaire</option>
				<option value="3">Non neutre</option>
				<option value="4">Risqué</option>
			</select>
			<div class="invalid-feedback">Selectionnez votre dernier événément</div>			
		</div>
</div>
<br>
<div style="text-align:left">
<div>1.<span id="Evénement_Sorceleur_1"></span></div>
<div>2.<span id="Evénement_Sorceleur_2"></span></div>
<div>3.<span id="Evénement_Sorceleur_3"></span></div>
</div>
</div>



</div>
</div>
</div>

<div id="Etape_3" class="Etape" style="display:none;"> <!-- Etape 3 : caractéristiques -->

<div>	<!-- Caractéristiques -->
<b>60 points</b> à dépenser dans les 9 caractéristiques primaires suivantes : (max = 10 / min = 1)
<br><br>
<div>	<!-- 1-2-3 -->
				<div class="form-row">	<!-- Compétence Corps  -->
		<div class="input-group col">
		  <span class="form-control">INTELLIGENCE</span>
		  <div class="input-group-append">
			<input type="button" value="-" onclick="Caractéristique_1_Moins();Caractéristique();Compétence2()">
			<input name="Caractéristique_1" type="number" min="1" max="5" class="input-group-text" id="Caractéristique_1" value="1" readonly>
			<input type="button" value="+" onclick="Caractéristique_1_Plus();Caractéristique();Compétence2()">
		  </div>
		</div>

		<div class="input-group col">
		  <span class="form-control">RÉFLEXES</span>
		  <div class="input-group-append">
			<input type="button" value="-" onclick="Caractéristique_2_Moins();Caractéristique();Compétence2()">
			<input name="Caractéristique_2" type="number" min="1" max="4" class="input-group-text" id="Caractéristique_2" value="1" readonly>
			<input type="button" value="+" onclick="Caractéristique_2_Plus();Caractéristique();Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">DEXTÉRITÉ</span>
		  <div class="input-group-append">
			<input type="button" value="-" onclick="Caractéristique_3_Moins();Caractéristique()">
			<input name="Caractéristique_3" type="number" min="1" max="4" class="input-group-text" id="Caractéristique_3" value="1" readonly>
			<input type="button" value="+" onclick="Caractéristique_3_Plus();Caractéristique()">
		  </div>
		</div>
			</div>
	</div>
	<br>
	<div>	<!-- 4-5-6 -->
				<div class="form-row">	<!-- Compétence Esprit  -->
		<div class="input-group col">
		  <span class="form-control">CORPS</span>
		  <div class="input-group-append">
			<input type="button" value="-" onclick="Caractéristique_4_Moins();Caractéristique()">
			<input name="Caractéristique_4" type="number" min="1" max="5" class="input-group-text" id="Caractéristique_4" value="1" readonly>
			<input type="button" value="+" onclick="Caractéristique_4_Plus();Caractéristique()">
		  </div>
		</div>

		<div class="input-group col">
		  <span class="form-control">VITESSE</span>
		  <div class="input-group-append">
			<input type="button" value="-" onclick="Caractéristique_5_Moins();Caractéristique()">
			<input name="Caractéristique_5" type="number" min="1" max="4" class="input-group-text" id="Caractéristique_5" value="1" readonly>
			<input type="button" value="+" onclick="Caractéristique_5_Plus();Caractéristique()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">EMPATHIE</span>
		  <div class="input-group-append">
			<input type="button" value="-" onclick="Caractéristique_6_Moins();Caractéristique()">
			<input name="Caractéristique_6" type="number" min="1" max="4" class="input-group-text" id="Caractéristique_6" value="1" readonly>
			<input type="button" value="+" onclick="Caractéristique_6_Plus();Caractéristique()">
		  </div>
		</div>
			</div>
	</div>
	<br>
	<div>	<!-- 7-8-9 -->
				<div class="form-row">	<!-- Compétence Esprit  -->
		<div class="input-group col">
		  <span class="form-control">TECHNIQUE</span>
		  <div class="input-group-append">
			<input type="button" value="-" onclick="Caractéristique_7_Moins();Caractéristique()">
			<input name="Caractéristique_7" type="number" min="1" max="5" class="input-group-text" id="Caractéristique_7" value="1" readonly>
			<input type="button" value="+" onclick="Caractéristique_7_Plus();Caractéristique()">
		  </div>
		</div>

		<div class="input-group col">
		  <span class="form-control">VOLONTÉ</span>
		  <div class="input-group-append">
			<input type="button" value="-" onclick="Caractéristique_8_Moins();Caractéristique()">
			<input name="Caractéristique_8" type="number" min="1" max="4" class="input-group-text" id="Caractéristique_8" value="1" readonly>
			<input type="button" value="+" onclick="Caractéristique_8_Plus();Caractéristique()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">CHANCE</span>
		  <div class="input-group-append">
			<input type="button" value="-" onclick="Caractéristique_9_Moins();Caractéristique()">
			<input name="Caractéristique_9" type="number" min="1" max="4" class="input-group-text" id="Caractéristique_9" value="1" readonly>
			<input type="button" value="+" onclick="Caractéristique_9_Plus();Caractéristique()">
		  </div>
		</div>
			</div>
	</div>
	<br>
	<div>	<!-- Décompte -->
		<button type="button" disabled class="btn btn-primary">Points de caractéristique restant : <span id="Décompte_Caractéristique">51</span></button>
	</div>
      
</div>

</div>

<div id="Etape_4" class="Etape" style="display:none;"> <!-- Etape 4 : compétences de profession -->

<div><b>44 points</b> à dépenser dans les compétences de professions suivantes : (max = 10 / min = 1)</div>
<br><div>En <b>gras</b> les compétences nécessitant 2 points pour augmenter d'un niveau</div>
<br>
<div>INTELLIGENCE :
	<div class="form-row">	<!-- Compétence gen 1 - 3  -->
		<div id="Compétence_Profession_INT_1_aff" class="input-group col">
		  <span class="form-control">Vigilance</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_INT_1" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_INT_2_aff" class="input-group col">
		  <span class="form-control">Négociation</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_INT_2" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_INT_3_aff" class="input-group col">
		  <span class="form-control">Déduction</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_INT_3" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 4 - 6  -->
		<div id="Compétence_Profession_INT_4_aff" class="input-group col">
		  <span class="form-control">Education</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_INT_4" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_INT_5_aff" class="input-group col">
		  <span class="form-control"><b>Langage</b></span>
		  <div class="input-group-append">
		  	<span class="input-group-text" id="Langage_PRO">0</span>
			<input type="number" min="0" max="20" class="input-group-text" id="Compétence_Profession_INT_5" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_INT_6_aff" class="input-group col">
		  <span class="form-control"><b>Connaissance des Monstres</b></span>
		  <div class="input-group-append">
		  	<span class="input-group-text" id="Connaissance_Monstres_PRO">0</span>
			<input type="number" min="0" max="20" class="input-group-text" id="Compétence_Profession_INT_6" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 7 - 9  -->
		<div id="Compétence_Profession_INT_7_aff" class="input-group col">
		  <span class="form-control">Etiquette</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_INT_7" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_INT_8_aff" class="input-group col">
		  <span class="form-control">Connaissance de la rue</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_INT_8" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_INT_9_aff" class="input-group col">
		  <span class="form-control"><b>Tactique</b></span>
		  <div class="input-group-append">
		  	<span class="input-group-text" id="Tactique_PRO">0</span>
			<input type="number" min="0" max="20" class="input-group-text" id="Compétence_Profession_INT_9" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 10 - 11  -->
		<div id="Compétence_Profession_INT_10_aff" class="input-group col">
		  <span class="form-control">Enseignement</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_INT_10" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_INT_11_aff" class="input-group col">
		  <span class="form-control">Survie</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_INT_11" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div style="visibility:hidden" class="input-group col">
		  <span class="form-control">Rien</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text">
		  </div>
		</div>
	</div>
</div>
<div>RÉFLEXES :
	<div class="form-row">	<!-- Compétence gen 1 - 3  -->
		<div id="Compétence_Profession_REF_1_aff" class="input-group col">
		  <span class="form-control">Bagarre</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_REF_1" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_REF_2_aff" class="input-group col">
		  <span class="form-control">Esquive/Evasion</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_REF_2" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_REF_3_aff" class="input-group col">
		  <span class="form-control">Mêlée</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_REF_3" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 4 - 6  -->
		<div id="Compétence_Profession_REF_4_aff" class="input-group col">
		  <span class="form-control">Equitation</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_REF_4" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_REF_5_aff" class="input-group col">
		  <span class="form-control">Navigation</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_REF_5" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_REF_6_aff" class="input-group col">
		  <span class="form-control">Lames courtes</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_REF_6" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 7 - 8  -->
		<div id="Compétence_Profession_REF_7_aff" class="input-group col">
		  <span class="form-control">Bâton/Lance</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_REF_7" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_REF_8_aff" class="input-group col">
		  <span class="form-control">Escrime</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_REF_8" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div style="visibility:hidden" class="input-group col">
		  <span class="form-control">Rien</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text">
		  </div>
		</div>
	</div>
</div>
<div>DEXTÉRITÉ :
	<div class="form-row">	<!-- Compétence gen 1 - 3  -->
		<div id="Compétence_Profession_DEX_1_aff" class="input-group col">
		  <span class="form-control">Archerie</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_DEX_1" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_DEX_2_aff" class="input-group col">
		  <span class="form-control">Athlétisme</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_DEX_2" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_DEX_3_aff" class="input-group col">
		  <span class="form-control">Arbalète</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_DEX_3" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 4 - 5 -->
		<div id="Compétence_Profession_DEX_4_aff" class="input-group col">
		  <span class="form-control">Adresse</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_DEX_4" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_DEX_5_aff" class="input-group col">
		  <span class="form-control">Furtivité</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_DEX_5" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div style="visibility:hidden" class="input-group col">
		  <span class="form-control">Rien</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text">
		  </div>
		</div>
	</div>
</div>
<div>CORPS :
<div class="form-row">	<!-- Compétence gen 1 - 2 -->
		<div id="Compétence_Profession_COR_1_aff" class="input-group col">
		  <span class="form-control">Physique</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_COR_1" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_COR_2_aff" class="input-group col">
		  <span class="form-control">Résilience</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_COR_2" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div style="visibility:hidden" class="input-group col">
		  <span class="form-control">Rien</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text">
		  </div>
		</div>
	</div>
</div>
<div>EMPATHIE :
	<div class="form-row">	<!-- Compétence gen 1 - 3  -->
		<div id="Compétence_Profession_EMP_1_aff" class="input-group col">
		  <span class="form-control">Charisme</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_EMP_1" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_EMP_2_aff" class="input-group col">
		  <span class="form-control">Duperie</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_EMP_2" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_EMP_3_aff" class="input-group col">
		  <span class="form-control">Artiste</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_EMP_3" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 4 - 6  -->
		<div id="Compétence_Profession_EMP_4_aff" class="input-group col">
		  <span class="form-control">Jeu</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_EMP_4" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_EMP_5_aff" class="input-group col">
		  <span class="form-control">Style</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_EMP_5" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_EMP_6_aff" class="input-group col">
		  <span class="form-control">Psychologie</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_EMP_6" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 7 - 9  -->
		<div id="Compétence_Profession_EMP_7_aff" class="input-group col">
		  <span class="form-control">Commandement</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_EMP_7" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_EMP_8_aff" class="input-group col">
		  <span class="form-control">Persuasion</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_EMP_8" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_EMP_9_aff" class="input-group col">
		  <span class="form-control">Représentation</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_EMP_9" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 10  -->
		<div id="Compétence_Profession_EMP_10_aff" class="input-group col">
		  <span class="form-control">Séduction</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_EMP_10" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div style="visibility:hidden" class="input-group col">
		  <span class="form-control">Rien</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text">
		  </div>
		</div>
		<div style="visibility:hidden" class="input-group col">
		  <span class="form-control">Rien</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text">
		  </div>
		</div>
	</div>
</div>
<div>TECHNIQUE
	<div class="form-row">	<!-- Compétence gen 1 - 3  -->
		<div id="Compétence_Profession_TEC_1_aff" class="input-group col">
		  <span class="form-control"><b>Alchimie</b></span>
		  <div class="input-group-append">
		  	<span class="input-group-text" id="Alchimie_PRO">0</span>
			<input type="number" min="0" max="20" class="input-group-text" id="Compétence_Profession_TEC_1" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_TEC_2_aff" class="input-group col">
		  <span class="form-control"><b>Artisanat</b></span>
		  <div class="input-group-append">
		  	<span class="input-group-text" id="Artisanat_PRO">0</span>
			<input type="number" min="0" max="20" class="input-group-text" id="Compétence_Profession_TEC_2" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_TEC_3_aff" class="input-group col">
		  <span class="form-control">Déguisement</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_TEC_3" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 4 - 6  -->
		<div id="Compétence_Profession_TEC_4_aff" class="input-group col">
		  <span class="form-control">Premiers secours</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_TEC_4" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_TEC_5_aff" class="input-group col">
		  <span class="form-control">Falsification</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_TEC_5" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_TEC_6_aff" class="input-group col">
		  <span class="form-control">Crochetage</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_TEC_6" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 7  -->
		<div id="Compétence_Profession_TEC_7_aff" class="input-group col">
		  <span class="form-control"><b>Piège (fabrication)</b></span>
		  <div class="input-group-append">
		  	<span class="input-group-text" id="Piège_PRO">0</span>
			<input type="number" min="0" max="20" class="input-group-text" id="Compétence_Profession_TEC_7" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div style="visibility:hidden" class="input-group col">
		  <span class="form-control">Rien</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text">
		  </div>
		</div>
		<div style="visibility:hidden" class="input-group col">
		  <span class="form-control">Rien</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text">
		  </div>
		</div>
	</div>
</div>
<div>VOLONTÉ
	<div class="form-row">	<!-- Compétence gen 1 - 3  -->
		<div id="Compétence_Profession_VOL_1_aff" class="input-group col">
		  <span class="form-control">Courage</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_VOL_1" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_VOL_2_aff" class="input-group col">
		  <span class="form-control"><b>Malédiction</b></span>
		  <div class="input-group-append">
		  	<span class="input-group-text" id="Malédiction_PRO">0</span>
			<input type="number" min="0" max="20" class="input-group-text" id="Compétence_Profession_VOL_2" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_VOL_3_aff" class="input-group col">
		  <span class="form-control">Intimidation</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_VOL_3" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 4 - 6  -->
		<div id="Compétence_Profession_VOL_4_aff" class="input-group col">
		  <span class="form-control"><b>Incantation</b></span>
		  <div class="input-group-append">
		  	<span class="input-group-text" id="Incantation_PRO">0</span>
			<input type="number" min="0" max="20" class="input-group-text" id="Compétence_Profession_VOL_4" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_VOL_5_aff" class="input-group col">
		  <span class="form-control"><b>Résistance à la magie</b></span>
		  <div class="input-group-append">
		  	<span class="input-group-text" id="Résistance_Magie_PRO">0</span>
			<input type="number" min="0" max="20" class="input-group-text" id="Compétence_Profession_VOL_5" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div id="Compétence_Profession_VOL_6_aff" class="input-group col">
		  <span class="form-control">Résistance à la contrainte</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_Profession_VOL_6" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 7  -->
		<div id="Compétence_Profession_VOL_7_aff" class="input-group col">
		  <span class="form-control"><b>Rituel</b></span>
		  <div class="input-group-append">
		  	<span class="input-group-text" id="Rituel_PRO">0</span>
			<input type="number" min="0" max="20" class="input-group-text" id="Compétence_Profession_VOL_7" oninput="Compétence_PRO()" disabled>
		  </div>
		</div>
		<div style="visibility:hidden" class="input-group col">
		  <span class="form-control">Rien</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text">
		  </div>
		</div>
		<div style="visibility:hidden" class="input-group col">
		  <span class="form-control">Rien</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text">
		  </div>
		</div>
	</div>
</div>

	<div>	<!-- Décompte -->
		<button type="button" disabled class="btn btn-primary">Points de compétences restant : <span id="Décompte_Compétence_PRO">44</span></button>
	</div>


<br>
<div><!-- Magie -->

<div id="Magie_Explication"></div>

<div><!-- Sorts : M = 5 / P = 0 -->
<div class="form-row">	
		<div class="col">
			<select id="Sort_1" class="custom-select" style="background-color:white">
				<option disabled selected value="">Sort</option>
					<option value="1">Miroir d'Afan</option>
					<option value="2">Poussière aveuglante</option>
					<option value="3">Dissiper</option>
					<option value="4">Charme</option>
					<option value="5">Boussole magique</option>
					<option value="6">Manipulation mentale</option>
					<option value="7">Invocation d'un bâton</option>
					<option value="8">Télépathie</option>
				<optgroup label="Terre">
					<option value="9">Cenlly Graig</option>
					<option value="10">Codi Bywyd</option>
					<option value="11">Sort de diagnostic</option>
					<option value="12">Pointe de terre</option>
					<option value="13">Souffle de Korath</option>
					<option value="14">Plume de Luthien</option>
					<option value="15">Guérison magique</option>
					<option value="16">Prison de Talfryn</option>
				</optgroup>
				<optgroup label="Air">
					<option value="17">Adenydd</option>
					<option value="18">Poche d'air</option>
					<option value="19">Rafale de Bronwyn</option>
					<option value="20">Air frais</option>
					<option value="21">Le refuge d'Urien</option>
					<option value="22">Tempête statique</option>
					<option value="23">Télékinésie</option>
					<option value="24">Zéphyr</option>
				</optgroup>
				<optgroup label="Feu">
					<option value="25">Aenye</option>
					<option value="26">Aine Verseos</option>
					<option value="27">Marque de feu</option>
					<option value="28">Prise de Cadfan</option>
					<option value="29">Flamboiement magique</option>
					<option value="30">Élever les flammes</option>
					<option value="31">Tanio Ilchar</option>
					<option value="32">Vague de feu</option>
				</optgroup>
				<optgroup label="Eau">
					<option value="33">Salut de Carys</option>
					<option value="34">Contrôle de l'eau</option>
					<option value="35">Malédiction de Sedna</option>
					<option value="36">Brouillard de Dormyn</option>
					<option value="37">Averse</option>
					<option value="38">Nappe de glace</option>
					<option value="39">Puro Dwr</option>
					<option value="40">Rhewi</option>

				</optgroup>
			</select>
			<div class="invalid-feedback">Selectionnez un sort</div>			
		</div>
		<div class="col">
			<select id="Sort_2" class="custom-select" style="background-color:white">
				<option disabled selected value="">Sort</option>
					<option value="1">Miroir d'Afan</option>
					<option value="2">Poussière aveuglante</option>
					<option value="3">Dissiper</option>
					<option value="4">Charme</option>
					<option value="5">Boussole magique</option>
					<option value="6">Manipulation mentale</option>
					<option value="7">Invocation d'un bâton</option>
					<option value="8">Télépathie</option>
				<optgroup label="Terre">
					<option value="9">Cenlly Graig</option>
					<option value="10">Codi Bywyd</option>
					<option value="11">Sort de diagnostic</option>
					<option value="12">Pointe de terre</option>
					<option value="13">Souffle de Korath</option>
					<option value="14">Plume de Luthien</option>
					<option value="15">Guérison magique</option>
					<option value="16">Prison de Talfryn</option>
				</optgroup>
				<optgroup label="Air">
					<option value="17">Adenydd</option>
					<option value="18">Poche d'air</option>
					<option value="19">Rafale de Bronwyn</option>
					<option value="20">Air frais</option>
					<option value="21">Le refuge d'Urien</option>
					<option value="22">Tempête statique</option>
					<option value="23">Télékinésie</option>
					<option value="24">Zéphyr</option>
				</optgroup>
				<optgroup label="Feu">
					<option value="25">Aenye</option>
					<option value="26">Aine Verseos</option>
					<option value="27">Marque de feu</option>
					<option value="28">Prise de Cadfan</option>
					<option value="29">Flamboiement magique</option>
					<option value="30">Élever les flammes</option>
					<option value="31">Tanio Ilchar</option>
					<option value="32">Vague de feu</option>
				</optgroup>
				<optgroup label="Eau">
					<option value="33">Salut de Carys</option>
					<option value="34">Contrôle de l'eau</option>
					<option value="35">Malédiction de Sedna</option>
					<option value="36">Brouillard de Dormyn</option>
					<option value="37">Averse</option>
					<option value="38">Nappe de glace</option>
					<option value="39">Puro Dwr</option>
					<option value="40">Rhewi</option>

				</optgroup>
			</select>
			<div class="invalid-feedback">Selectionnez un sort</div>			
		</div>
		<div class="col">
			<select id="Sort_3" class="custom-select" style="background-color:white">
				<option disabled selected value="">Sort</option>
					<option value="1">Miroir d'Afan</option>
					<option value="2">Poussière aveuglante</option>
					<option value="3">Dissiper</option>
					<option value="4">Charme</option>
					<option value="5">Boussole magique</option>
					<option value="6">Manipulation mentale</option>
					<option value="7">Invocation d'un bâton</option>
					<option value="8">Télépathie</option>
				<optgroup label="Terre">
					<option value="9">Cenlly Graig</option>
					<option value="10">Codi Bywyd</option>
					<option value="11">Sort de diagnostic</option>
					<option value="12">Pointe de terre</option>
					<option value="13">Souffle de Korath</option>
					<option value="14">Plume de Luthien</option>
					<option value="15">Guérison magique</option>
					<option value="16">Prison de Talfryn</option>
				</optgroup>
				<optgroup label="Air">
					<option value="17">Adenydd</option>
					<option value="18">Poche d'air</option>
					<option value="19">Rafale de Bronwyn</option>
					<option value="20">Air frais</option>
					<option value="21">Le refuge d'Urien</option>
					<option value="22">Tempête statique</option>
					<option value="23">Télékinésie</option>
					<option value="24">Zéphyr</option>
				</optgroup>
				<optgroup label="Feu">
					<option value="25">Aenye</option>
					<option value="26">Aine Verseos</option>
					<option value="27">Marque de feu</option>
					<option value="28">Prise de Cadfan</option>
					<option value="29">Flamboiement magique</option>
					<option value="30">Élever les flammes</option>
					<option value="31">Tanio Ilchar</option>
					<option value="32">Vague de feu</option>
				</optgroup>
				<optgroup label="Eau">
					<option value="33">Salut de Carys</option>
					<option value="34">Contrôle de l'eau</option>
					<option value="35">Malédiction de Sedna</option>
					<option value="36">Brouillard de Dormyn</option>
					<option value="37">Averse</option>
					<option value="38">Nappe de glace</option>
					<option value="39">Puro Dwr</option>
					<option value="40">Rhewi</option>

				</optgroup>
			</select>
			<div class="invalid-feedback">Selectionnez un sort</div>			
		</div>
</div>
<div class="form-row">
		<div class="col">
			<select style="width:66.66%" id="Sort_4" class="custom-select" style="background-color:white">
				<option disabled selected value="">Sort</option>
					<option value="1">Miroir d'Afan</option>
					<option value="2">Poussière aveuglante</option>
					<option value="3">Dissiper</option>
					<option value="4">Charme</option>
					<option value="5">Boussole magique</option>
					<option value="6">Manipulation mentale</option>
					<option value="7">Invocation d'un bâton</option>
					<option value="8">Télépathie</option>
				<optgroup label="Terre">
					<option value="9">Cenlly Graig</option>
					<option value="10">Codi Bywyd</option>
					<option value="11">Sort de diagnostic</option>
					<option value="12">Pointe de terre</option>
					<option value="13">Souffle de Korath</option>
					<option value="14">Plume de Luthien</option>
					<option value="15">Guérison magique</option>
					<option value="16">Prison de Talfryn</option>
				</optgroup>
				<optgroup label="Air">
					<option value="17">Adenydd</option>
					<option value="18">Poche d'air</option>
					<option value="19">Rafale de Bronwyn</option>
					<option value="20">Air frais</option>
					<option value="21">Le refuge d'Urien</option>
					<option value="22">Tempête statique</option>
					<option value="23">Télékinésie</option>
					<option value="24">Zéphyr</option>
				</optgroup>
				<optgroup label="Feu">
					<option value="25">Aenye</option>
					<option value="26">Aine Verseos</option>
					<option value="27">Marque de feu</option>
					<option value="28">Prise de Cadfan</option>
					<option value="29">Flamboiement magique</option>
					<option value="30">Élever les flammes</option>
					<option value="31">Tanio Ilchar</option>
					<option value="32">Vague de feu</option>
				</optgroup>
				<optgroup label="Eau">
					<option value="33">Salut de Carys</option>
					<option value="34">Contrôle de l'eau</option>
					<option value="35">Malédiction de Sedna</option>
					<option value="36">Brouillard de Dormyn</option>
					<option value="37">Averse</option>
					<option value="38">Nappe de glace</option>
					<option value="39">Puro Dwr</option>
					<option value="40">Rhewi</option>

				</optgroup>
			</select>
			<div class="invalid-feedback">Selectionnez un sort</div>			
		</div>
		<div class="col">
			<select style="width:66.66%" id="Sort_5" class="custom-select" style="background-color:white">
				<option disabled selected value="">Sort</option>
					<option value="1">Miroir d'Afan</option>
					<option value="2">Poussière aveuglante</option>
					<option value="3">Dissiper</option>
					<option value="4">Charme</option>
					<option value="5">Boussole magique</option>
					<option value="6">Manipulation mentale</option>
					<option value="7">Invocation d'un bâton</option>
					<option value="8">Télépathie</option>
				<optgroup label="Terre">
					<option value="9">Cenlly Graig</option>
					<option value="10">Codi Bywyd</option>
					<option value="11">Sort de diagnostic</option>
					<option value="12">Pointe de terre</option>
					<option value="13">Souffle de Korath</option>
					<option value="14">Plume de Luthien</option>
					<option value="15">Guérison magique</option>
					<option value="16">Prison de Talfryn</option>
				</optgroup>
				<optgroup label="Air">
					<option value="17">Adenydd</option>
					<option value="18">Poche d'air</option>
					<option value="19">Rafale de Bronwyn</option>
					<option value="20">Air frais</option>
					<option value="21">Le refuge d'Urien</option>
					<option value="22">Tempête statique</option>
					<option value="23">Télékinésie</option>
					<option value="24">Zéphyr</option>
				</optgroup>
				<optgroup label="Feu">
					<option value="25">Aenye</option>
					<option value="26">Aine Verseos</option>
					<option value="27">Marque de feu</option>
					<option value="28">Prise de Cadfan</option>
					<option value="29">Flamboiement magique</option>
					<option value="30">Élever les flammes</option>
					<option value="31">Tanio Ilchar</option>
					<option value="32">Vague de feu</option>
				</optgroup>
				<optgroup label="Eau">
					<option value="33">Salut de Carys</option>
					<option value="34">Contrôle de l'eau</option>
					<option value="35">Malédiction de Sedna</option>
					<option value="36">Brouillard de Dormyn</option>
					<option value="37">Averse</option>
					<option value="38">Nappe de glace</option>
					<option value="39">Puro Dwr</option>
					<option value="40">Rhewi</option>

				</optgroup>
			</select>
			<div class="invalid-feedback">Selectionnez un sort</div>			
		</div>
</div>
</div>

<div class="form-row">	<!-- Invocations : M = 0 / P = 2 -->
		<div class="col">
			<select name="Invocation_1" id="Invocation_1" class="custom-select" style="background-color:white">
				<option disabled selected value="">Invocation</option>
				<optgroup label="Druide">
					<option value="1">Sang bouillonnant</option>
					<option value="2">Maladie maudite</option>
					<option value="3">Ami de la Nature Sauvage</option>
					<option value="4">Don de la nature</option>
					<option value="5">Vision de la nature</option>
					<option value="6">Sceau du Caché</option>
				</optgroup>
				<optgroup label="Précheur">
					<option value="7">Bénédiction de bonne fortune</option>
					<option value="8">Bénédiction d'amour</option>
					<option value="9">Lumière sacrée</option>
					<option value="10">Eaux de purification</option>
					<option value="11">Toile de mensonges</option>
					<option value="12">Puit de connaissances</option>

				</optgroup>
			</select>
			<div class="invalid-feedback">Selectionnez une invocation</div>			
		</div>
		<div class="col">
			<select name="Invocation_2" id="Invocation_2" class="custom-select" style="background-color:white">
				<option disabled selected value="">Invocation</option>
				<optgroup label="Druide">
					<option value="1">Sang bouillonnant</option>
					<option value="2">Maladie maudite</option>
					<option value="3">Ami de la Nature Sauvage</option>
					<option value="4">Don de la nature</option>
					<option value="5">Vision de la nature</option>
					<option value="6">Sceau du Caché</option>
				</optgroup>
				<optgroup label="Précheur">
					<option value="7">Bénédiction de bonne fortune</option>
					<option value="8">Bénédiction d'amour</option>
					<option value="9">Lumière sacrée</option>
					<option value="10">Eaux de purification</option>
					<option value="11">Toile de mensonges</option>
					<option value="12">Puit de connaissances</option>

				</optgroup>
			</select>
			<div class="invalid-feedback">Selectionnez une invocation</div>			
		</div>
</div>

<div class="form-row">	<!-- Rituels : M = 1 / P = 2 -->
		<div class="col">
			<select name="Rituel_1" id="Rituel_1" class="custom-select" style="background-color:white">
				<option disabled selected value="">Rituel</option>
					<option value="1">Rituel de purification</option>
					<option value="2">Hydromancie</option>
					<option value="3">Message magique</option>
					<option value="4">Pyromancie</option>
					<option value="5">Rituel de vie</option>
					<option value="6">Rituel de magie</option>
					<option value="7">Lampe magique</option>
					<option value="8">Séance spirituelle</option>
					<option value="9">Telecommunication</option>
			</select>
			<div class="invalid-feedback">Selectionnez un rituel</div>			
		</div>
		<div class="col">
			<select name="Rituel_2" id="Rituel_2" class="custom-select" style="background-color:white">
				<option disabled selected value="">Rituel</option>
					<option value="1">Rituel de purification</option>
					<option value="2">Hydromancie</option>
					<option value="3">Message magique</option>
					<option value="4">Pyromancie</option>
					<option value="5">Rituel de vie</option>
					<option value="6">Rituel de magie</option>
					<option value="7">Lampe magique</option>
					<option value="8">Séance spirituelle</option>
					<option value="9">Telecommunication</option>
			</select>
			<div class="invalid-feedback">Selectionnez un rituel</div>			
		</div>
</div>

<div class="form-row">	<!-- Malédictions : M = 1 / P = 2 -->
		<div class="col">
			<select name="Malédiction_1" id="Malédiction_1" class="custom-select" style="background-color:white">
				<option disabled selected value="">Malédiction</option>
					<option value="1">Le sort des ombres</option>
					<option value="2">La démangeaison éternelle</option>
			</select>
			<div class="invalid-feedback">Selectionnez une malédiction</div>			
		</div>
		<div class="col">
			<select name="Malédiction_2" id="Malédiction_2" class="custom-select" style="background-color:white">
				<option disabled selected value="">Malédiction</option>
					<option value="1">Le sort des ombres</option>
					<option value="2">La démangeaison éternelle</option>
			</select>
			<div class="invalid-feedback">Selectionnez une malédiction</div>			
		</div>
</div>

</div>


</div>

<div id="Etape_5" class="Etape" style="display:none;"> <!-- Etape 5 : compétences générale -->

<div><b><span id="Points_Comp_Bonus">INT + REF</span> points</b> supplémentaire à dépenser parmi toutes les autres compétences : (max = 10 / min = 0)</div>
<br>
<div>En <b>gras</b> les compétences nécessitant 2 points pour augmenter d'un niveau</div>
<br>
<div>INTELLIGENCE :
	<div class="form-row">	<!-- Compétence gen 1 - 3  -->
		<div class="input-group col">
		  <span class="form-control">Vigilance</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_INT_1" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Négociation</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_INT_2" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Déduction</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_INT_3" oninput="Compétence2()">
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 4 - 6  -->
		<div class="input-group col">
		  <span class="form-control">Education</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_INT_4" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control"><b>Langage</b></span>
		  <div class="input-group-append">
		  	<span class="input-group-text" id="Langage">0</span>
			<input type="number" min="0" max="20" class="input-group-text" id="Compétence_INT_5" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control"><b>Connaissance des Monstres</b></span>
		  <div class="input-group-append">
			<span class="input-group-text" id="Connaissance_Monstres">0</span>
			<input type="number" min="0" max="20" class="input-group-text" id="Compétence_INT_6" oninput="Compétence2()">
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 7 - 9  -->
		<div class="input-group col">
		  <span class="form-control">Etiquette</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_INT_7" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Connaissance de la rue</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_INT_8" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control"><b>Tactique</b></span>
		  <div class="input-group-append">
			<span class="input-group-text" id="Tactique">0</span>
			<input type="number" min="0" max="20" class="input-group-text" id="Compétence_INT_9" oninput="Compétence2()">
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 10 - 11  -->
		<div class="input-group col">
		  <span class="form-control">Enseignement</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_INT_10" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Survie</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_INT_11" oninput="Compétence2()">
		  </div>
		</div>
		<div style="visibility:hidden" class="input-group col">
		  <span class="form-control">Rien</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" oninput="Compétence2()">
		  </div>
		</div>
	</div>
</div>
<div>RÉFLEXES :
	<div class="form-row">	<!-- Compétence gen 1 - 3  -->
		<div class="input-group col">
		  <span class="form-control">Bagarre</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_REF_1" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Esquive/Evasion</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_REF_2" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Mêlée</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_REF_3" oninput="Compétence2()">
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 4 - 6  -->
		<div class="input-group col">
		  <span class="form-control">Equitation</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_REF_4" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Navigation</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_REF_5" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Lames courtes</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_REF_6" oninput="Compétence2()">
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 7 - 8  -->
		<div class="input-group col">
		  <span class="form-control">Bâton/Lance</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_REF_7" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Escrime</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_REF_8" oninput="Compétence2()">
		  </div>
		</div>
		<div style="visibility:hidden" class="input-group col">
		  <span class="form-control">Rien</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" oninput="Compétence2()">
		  </div>
		</div>
	</div>
</div>
<div>DEXTÉRITÉ :
	<div class="form-row">	<!-- Compétence gen 1 - 3  -->
		<div class="input-group col">
		  <span class="form-control">Archerie</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_DEX_1" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Athlétisme</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_DEX_2" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Arbalète</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_DEX_3" oninput="Compétence2()">
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 4 - 5 -->
		<div class="input-group col">
		  <span class="form-control">Adresse</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_DEX_4" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Furtivité</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_DEX_5" oninput="Compétence2()">
		  </div>
		</div>
		<div style="visibility:hidden" class="input-group col">
		  <span class="form-control">Rien</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" oninput="Compétence2()">
		  </div>
		</div>
	</div>
</div>
<div>CORPS :
<div class="form-row">	<!-- Compétence gen 1 - 2 -->
		<div class="input-group col">
		  <span class="form-control">Physique</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_COR_1" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Résilience</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_COR_2" oninput="Compétence2()">
		  </div>
		</div>
		<div style="visibility:hidden" class="input-group col">
		  <span class="form-control">Rien</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" oninput="Compétence2()">
		  </div>
		</div>
	</div>
</div>
<div>EMPATHIE :
	<div class="form-row">	<!-- Compétence gen 1 - 3  -->
		<div class="input-group col">
		  <span class="form-control">Charisme</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_EMP_1" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Duperie</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_EMP_2" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Artiste</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_EMP_3" oninput="Compétence2()">
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 4 - 6  -->
		<div class="input-group col">
		  <span class="form-control">Jeu</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_EMP_4" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Style</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_EMP_5" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Psychologie</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_EMP_6" oninput="Compétence2()">
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 7 - 9  -->
		<div class="input-group col">
		  <span class="form-control">Commandement</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_EMP_7" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Persuasion</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_EMP_8" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Représentation</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_EMP_9" oninput="Compétence2()">
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 10  -->
		<div class="input-group col">
		  <span class="form-control">Séduction</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_EMP_10" oninput="Compétence2()">
		  </div>
		</div>
		<div style="visibility:hidden" class="input-group col">
		  <span class="form-control">Rien</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" oninput="Compétence2()">
		  </div>
		</div>
		<div style="visibility:hidden" class="input-group col">
		  <span class="form-control">Rien</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" oninput="Compétence2()">
		  </div>
		</div>
	</div>
</div>
<div>TECHNIQUE
	<div class="form-row">	<!-- Compétence gen 1 - 3  -->
		<div class="input-group col">
		  <span class="form-control"><b>Alchimie</b></span>
		  <div class="input-group-append">
			<span class="input-group-text" id="Alchimie">0</span>
			<input type="number" min="0" max="20" class="input-group-text" id="Compétence_TEC_1" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control"><b>Artisanat</b></span>
		  <div class="input-group-append">
			<span class="input-group-text" id="Artisanat">0</span>
			<input type="number" min="0" max="20" class="input-group-text" id="Compétence_TEC_2" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Déguisement</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_TEC_3" oninput="Compétence2()">
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 4 - 6  -->
		<div class="input-group col">
		  <span class="form-control">Premiers secours</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_TEC_4" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Falsification</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_TEC_5" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Crochetage</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_TEC_6" oninput="Compétence2()">
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 7  -->
		<div class="input-group col">
		  <span class="form-control"><b>Piège (fabrication)</b></span>
		  <div class="input-group-append">
			<span class="input-group-text" id="Piège">0</span>
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_TEC_7" oninput="Compétence2()">
		  </div>
		</div>
		<div style="visibility:hidden" class="input-group col">
		  <span class="form-control">Rien</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" oninput="Compétence2()">
		  </div>
		</div>
		<div style="visibility:hidden" class="input-group col">
		  <span class="form-control">Rien</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" oninput="Compétence2()">
		  </div>
		</div>
	</div>
</div>
<div>VOLONTÉ
	<div class="form-row">	<!-- Compétence gen 1 - 3  -->
		<div class="input-group col">
		  <span class="form-control">Courage</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_VOL_1" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control"><b>Malédiction</b></span>
		  <div class="input-group-append">
			<span class="input-group-text" id="Malédiction">0</span>
			<input type="number" min="0" max="20" class="input-group-text" id="Compétence_VOL_2" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Intimidation</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_VOL_3" oninput="Compétence2()">
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 4 - 6  -->
		<div class="input-group col">
		  <span class="form-control"><b>Incantation</b></span>
		  <div class="input-group-append">
			<span class="input-group-text" id="Incantation">0</span>
			<input type="number" min="0" max="20" class="input-group-text" id="Compétence_VOL_4" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control"><b>Résistance à la magie</b></span>
		  <div class="input-group-append">
			<span class="input-group-text" id="Résistance_Magie">0</span>
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_VOL_5" oninput="Compétence2()">
		  </div>
		</div>
		<div class="input-group col">
		  <span class="form-control">Résistance à la contrainte</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_VOL_6" oninput="Compétence2()">
		  </div>
		</div>
	</div>
	<div class="form-row">	<!-- Compétence gen 7  -->
		<div class="input-group col">
		  <span class="form-control"><b>Rituel</b></span>
		  <div class="input-group-append">
			<span class="input-group-text" id="Rituel">0</span>
			<input type="number" min="0" max="10" class="input-group-text" id="Compétence_VOL_7" oninput="Compétence2()">
		  </div>
		</div>
		<div style="visibility:hidden" class="input-group col">
		  <span class="form-control">Rien</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text">
		  </div>
		</div>
		<div style="visibility:hidden" class="input-group col">
		  <span class="form-control">Rien</span>
		  <div class="input-group-append">
			<input type="number" min="0" max="10" class="input-group-text">
		  </div>
		</div>
	</div>
</div>

	<div>	<!-- Décompte -->
		<button type="button" disabled class="btn btn-primary">Points de compétences restant : <span id="Décompte_Compétence">INT + REF</span></button>
	</div>

</div>


<div id="Récap" class="Etape" style="text-align:left;display:none;">


<div>	<!-- Client -->

Nom du joueur : <span id="Récap_joueur"></span> ;
Nom du personnage : <span id="Récap_perso"></span> ;
<br>Sexe : <span id="Récap_sexe"></span> ;
Race : <span id="Récap_race"></span>
Profession : <span id="Récap_profession"></span>

<br><br>Histoire de vie :<br>
<span id="Récap_HDM"></span>

<br><br>Caractéristiques :<br>
INTELLIGENCE <span id="Récap_puissance"></span> ; RÉFLEXES <span id="Récap_vigueur"></span> ; DEXTÉRITÉ <span id="Récap_agilité"></span> ;
<br>CORPS <span id="Récap_intellect"></span> ; VITESSE <span id="Récap_perception"></span> ; EMPATHIE <span id="Récap_ténacité"></span> ;
<br>TECHNIQUE <span id="Récap_charisme"></span> ; VOLONTÉ <span id="Récap_communication"></span> ; CHANCE <span id="Récap_instinct"></span> ;
<br><br>Compétences :</br>
<span id="Récap_compétences"></span>
<br><span id="RRRécap" style="display:none"> Magie : 
<br><span id="Récap_magie"></span></span>

</div>
<br>
<div style="margin-left:10%;margin-right:10%">
Description du personnage (facultatif) :
  <textarea name="Description" class="form-control" aria-label="With textarea" rows="7" placeholder="Style personnel : vestimentaire, personnalité, aspirations, physique, valeurs etc"></textarea>
</div>


<div style="display:none">	<!-- Serveur -->
Serveur :
  <textarea id="Récap2_compétences" name="Récap2_compétences" placeholder="Compétences"></textarea>
  <textarea id="Récap2_HDM" name="Récap2_HDM" placeholder="HDM"></textarea>
  <textarea id="Récap2_magie" name="Récap2_magie" placeholder="Magie"></textarea>
  
</div>




</div>
	
	<br><br>
	<div class="form-row">	<!-- Bouton Suivant -->
		<div class="col">
			<button type="button" class="btn btn-secondary" onclick="AV()">Précedent</button>
		</div>
		<div class="col" id="Boutton_Suivant">
			<button type="button" class="btn btn-success"  onclick="PE();Récapitulatif()">Suivant</button>
		</div>
	</div>	
	
	<br>
	<div style="display:none;" id="Le_Bouton_Final" class="form-group">	<!-- Bouton valider -->
          <label class="col-md-12 control-label" for="submit"></label>
          <div class="col-md-12">
            <button id="submit" name="envoi" type="submit" class="btn btn-success">Valider !</button>
          </div>
	</div>	
		
	</form>
		
</div> <!-- Tableau texte -->


<?php

if(isset($_POST['envoi'])){ // si formulaire soumis

require '../../connection.php';

$joueur = $_POST['joueur'];
$personnage = $_POST['personnage'];
$sexe = $_POST['Sexe'];
$race = $_POST['Race'];
if($race == "Sorceleur"){$profession = "9";}
else{$profession = $_POST['Profession'];}
$C1 = $_POST['Caractéristique_1'];	// Corps 1
$C2 = $_POST['Caractéristique_2'];
$C3 = $_POST['Caractéristique_3'];
$E1 = $_POST['Caractéristique_4'];	// Esprit
$E2 = $_POST['Caractéristique_5'];
$E3 = $_POST['Caractéristique_6'];
$A1 = $_POST['Caractéristique_7'];	// Âme
$A2 = $_POST['Caractéristique_8'];
$A3 = $_POST['Caractéristique_9'];
$compétence = $_POST['Récap2_compétences'];
$magie = !empty($_POST['Récap2_magie']) ? $_POST['Récap2_magie'] : NULL;
$HdV = $_POST['Récap2_HDM'];
$description = !empty($_POST['Description']) ? $_POST['Description'] : NULL;

	try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$conn->exec("SET NAMES 'UTF8'");
	}

	catch(PDOException $e)
		{
		echo $sql . "<br>" . $e->getMessage();
		}
	

$pseudo_Exist = $conn->prepare("SELECT joueur FROM jdr_witcher WHERE joueur =:joueur");
//On recupère les pseudo de t'as base ou les pseudo son egal au pseudo passer par le formulaire
$pseudo_Exist->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$pseudo_Exist->execute();
//on exécute la requête
 
$pseudoINbdd = $pseudo_Exist->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
 
	if($pseudoINbdd == 0){
//Si la requête renvoi 0, le pseudo n'existe pas dans la base, sinon le pseudo existe.
  
  // joueur	personnage	sexe	race	profession	C1	C2	C3	E1	E2	E3	A1	A2	A3	compétence	magie	HdV	description
  
$stmt = $conn->prepare("INSERT INTO jdr_witcher (joueur, personnage, sexe, race, profession, C1, C2, C3, E1, E2, E3, A1, A2, A3, compétence, magie, HdV, description)
						VALUES (:1, :2, :3, :4, :5, :6, :7, :8, :9, :10, :11, :12, :13, :14, :15, :16, :17, :18)");
$stmt->bindParam(':1', $joueur);
$stmt->bindParam(':2', $personnage);
$stmt->bindParam(':3', $sexe);
$stmt->bindParam(':4', $race);
$stmt->bindParam(':5', $profession);
$stmt->bindParam(':6', $C1);
$stmt->bindParam(':7', $C2);
$stmt->bindParam(':8', $C3);
$stmt->bindParam(':9', $E1);
$stmt->bindParam(':10', $E2);
$stmt->bindParam(':11', $E3);
$stmt->bindParam(':12', $A1);
$stmt->bindParam(':13', $A2);
$stmt->bindParam(':14', $A3);
$stmt->bindParam(':15', $compétence);
$stmt->bindParam(':16', $magie);
$stmt->bindParam(':17', $HdV);
$stmt->bindParam(':18', $description);
$stmt->execute();	

if($sexe == 1){	
	echo '<p style="text-align: center;" >'.$personnage.' à bien été créée '.$joueur.'!</p>';
		echo '
<div class="swal2-icon swal2-success swal2-animate-success-icon" style="display: flex;background: white;"><span class="swal2-success-line-tip"></span><span class="swal2-success-line-long"></span><div class="swal2-success-ring"></div></div>
		';
}else{		
	echo '<p style="text-align: center;" >'.$personnage.' à bien été créé '.$joueur.'!</p>';
		echo '
<div class="swal2-icon swal2-success swal2-animate-success-icon" style="display: flex;background: white;"><span class="swal2-success-line-tip"></span><span class="swal2-success-line-long"></span><div class="swal2-success-ring"></div></div>
		';
}

}

	if($pseudoINbdd != 0) {
		echo '<p style="text-align: center;" >Vous aviez déjà crée un personnage '.$joueur.'...</p>';
		echo '
<div class="swal2-icon swal2-success swal2-animate-success-icon" style="display: flex;background: white;"><span class="swal2-success-line-tip"></span><span class="swal2-success-line-long"></span><div class="swal2-success-ring"></div></div>
		';
}

$conn = null;

}

?>



</body>
</html>