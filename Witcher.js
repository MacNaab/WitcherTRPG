function AV(){	// Précedent
	var Valider = document.getElementById("PB_V");
	var En_cours = document.getElementById("PB_EC");

		var Etape_1 = document.getElementById("Etape_1");
		var Etape_2 = document.getElementById("Etape_2");
		var Etape_3 = document.getElementById("Etape_3");
		var Etape_4 = document.getElementById("Etape_4");
		var Etape_5 = document.getElementById("Etape_5");

		if(Valider.style.width == "20%"){	// 2 > 1
			Valider.style.width = "0%";
			En_cours.innerHTML = "Etape 1";
			Etape_1.style.display = "block";
			Etape_2.style.display = "none";
		}
		if(Valider.style.width == "40%"){	// 3 > 2
			Valider.style.width = "20%";
			En_cours.innerHTML = "Etape 2";
			Etape_2.style.display = "block";
			Etape_3.style.display = "none";
		}
		if(Valider.style.width == "60%"){	// 4 > 3
			Valider.style.width = "40%";
			En_cours.innerHTML = "Etape 3";
			Etape_3.style.display = "block";
			Etape_4.style.display = "none";
		}
		if(Valider.style.width == "80%"){	// 5 > 4
			Valider.style.width = "60%";
			En_cours.innerHTML = "Etape 4";
			Etape_4.style.display = "block";
			Etape_5.style.display = "none";
		}
		if(Valider.style.width == "100%"){	// Récap > 4
			Valider.style.width = "80%";
			En_cours.style.width = "20%";
			En_cours.innerHTML = "Etape 5";
			Etape_5.style.display = "block";
		document.getElementById("Récap").style.display = "none";
		document.getElementById("Le_Bouton_Final").style.display = "none";
		document.getElementById("Boutton_Suivant").style.display = "block";
		}
	
}

function PE(){	// Suivant 
		var Valider = document.getElementById("PB_V");
		var En_cours = document.getElementById("PB_EC");

		var Etape_1 = document.getElementById("Etape_1");
		var Etape_2 = document.getElementById("Etape_2");
		var Etape_3 = document.getElementById("Etape_3");
		var Etape_4 = document.getElementById("Etape_4");
		var Etape_5 = document.getElementById("Etape_5");
		
		if(Valider.style.width == "80%"){	// Etape 5 > récap
if(Décompte_Compétence.innerHTML != "0"){
	if(Décompte_Compétence.innerHTML > "0"){alert("Vous devez dépenser tous les points");}
	else{alert("Vous avez dépensé trop de points");}
}
else{			
	Valider.style.width = "100%";
	En_cours.style.width = "0%";
	Etape_5.style.display = "none";
	document.getElementById("Récap").style.display = "block";
	document.getElementById("Le_Bouton_Final").style.display = "block";
	document.getElementById("Boutton_Suivant").style.display = "none";
}
		}
		if(Valider.style.width == "60%"){	// Etape 4 > 5

if(Profession.value == "6"){	// Mage
	if(Décompte_Compétence_PRO.innerHTML != "0" || Sort_1.value == "" || Sort_2.value == "" || Sort_3.value == "" || Sort_4.value == "" || Sort_5.value == "" || Rituel_1.value == "" || Malédiction_1.value == ""){
		var a = "";

		if(Décompte_Compétence_PRO.innerHTML > "0"){var a = "Vous devez dépenser tous les points";}
		if(Décompte_Compétence_PRO.innerHTML < "0"){var a = "Vous avez dépensé trop de points";}
		if(Sort_1.value == ""){var a = a+"Choisir votre 1er sort"}
		if(Sort_2.value == ""){var a = a+"Choisir votre 2e sort"}
		if(Sort_3.value == ""){var a = a+"Choisir votre 3e sort"}
		if(Sort_4.value == ""){var a = a+"Choisir votre 4e sort"}
		if(Sort_5.value == ""){var a = a+"Choisir votre 5e sort"}
		if(Rituel_1.value == ""){var a = a+"Choisir votre rituel"}
		if(Malédiction_1.value == ""){var a = a+"Choisir votre malédiction"}
		
		alert(a);
	}
	else{
		Valider.style.width = "80%";
		En_cours.innerHTML = "Etape 5";
		Etape_4.style.display = "none";
		Etape_5.style.display = "block";
	}		
}
else if(Profession.value == "8"){ // Prêtre / Druide
	if(Décompte_Compétence_PRO.innerHTML != "0" || Invocation_1.value == "" || Invocation_2.value == "" || Rituel_1.value == "" || Rituel_2.value == ""){
		var a = "";
		if(Décompte_Compétence_PRO.innerHTML > "0"){var a = "Vous devez dépenser tous les points";}
		if(Décompte_Compétence_PRO.innerHTML < "0"){var a = "Vous avez dépensé trop de points";}
		if(Invocation_1.value == ""){var a = a+"Choisir votre 1er invocation"}
		if(Invocation_2.value == ""){var a = a+"Choisir votre 2e invocation"}
		if(Rituel_1.value == ""){var a = a+"Choisir votre 1er rituel"}
		if(Rituel_2.value == ""){var a = a+"Choisir votre 2e rituel"}
		
		alert(a);
	}
	else{
		Valider.style.width = "80%";
		En_cours.innerHTML = "Etape 5";
		Etape_4.style.display = "none";
		Etape_5.style.display = "block";
	}		
}
else{
	if(Décompte_Compétence_PRO.innerHTML != "0"){
		if(Décompte_Compétence_PRO.innerHTML > "0"){alert("Vous devez dépenser tous les points");}
		else{alert("Vous avez dépensé trop de points");}
	}
	else{
		Valider.style.width = "80%";
		En_cours.innerHTML = "Etape 5";
		Etape_4.style.display = "none";
		Etape_5.style.display = "block";
	}	
}	
		}
		if(Valider.style.width == "40%"){	// Etape 3 > 4
if(Décompte_Caractéristique.innerHTML != "0"){
	if(Décompte_Caractéristique.innerHTML > "0"){alert("Vous devez dépenser tous les points");}
	else{alert("Vous avez dépensé trop de points");}
}
else{
	Valider.style.width = "60%";
	En_cours.innerHTML = "Etape 4";
	Etape_3.style.display = "none";
	Etape_4.style.display = "block";
}			
		}
		if(Valider.style.width == "20%"){	// Etape 2 > 3
		
			if(Profession.value == "9"){
if(Sorceleur_1.value == "" || Sorceleur_2.value == "" || Sorceleur_3.innerHTML == "" || Sorceleur_4.innerHTML == "" || Sorceleur_5.value == "" || Sorceleur_6.value == "" || Sorceleur_7.value == "" || Sorceleur_8.value == "" || Sorceleur_9.value == ""){
	var a = "";
	if(Sorceleur_1.value == ""){var a = "\nL'âge";}
	if(Sorceleur_2.value == ""){var a = a+"\nL'école";}
	if(Sorceleur_3.innerHTML == "" || Sorceleur_4.innerHTML == ""){var a = a+"\nCliquez sur le bouton";}
	if(Sorceleur_5.value == ""){var a = a+"\nL'événement marquant";}
	if(Sorceleur_6.value == ""){var a = a+"\nMaintenant";}
	if(Sorceleur_7.value == ""){var a = a+"\nLe premier événement";}
	if(Sorceleur_8.value == ""){var a = a+"\nLe second événement";}
	if(Sorceleur_9.value == ""){var a = a+"\nLe troisième événement";}
	alert("Vous devez remplir les éléments :"+a);
}
else{
	Valider.style.width = "40%";
	En_cours.innerHTML = "Etape 3";
	Etape_2.style.display = "none";
	Etape_3.style.display = "block";
}
				}
			else{
if(Région.value == "" || Origine.value == "" || Age.value == ""){
	var a = "";
	if(Région.value == ""){var a = "\nLa Patrie de votre personnage";}
	if(Origine.value == ""){var a = a+"\nLa région d'origine de votre personnage";}
	if(Age.value == ""){var a = a+"\nL'âge de votre personnage";}
	alert("Vous devez remplir les éléments :"+a);
}
else{
	Valider.style.width = "40%";
	En_cours.innerHTML = "Etape 3";
	Etape_2.style.display = "none";
	Etape_3.style.display = "block";
}
			}
		}
		if(Valider.style.width == "0%"){	// Etape 1 > 2
if(joueur.value == "" || personnage.value == "" || Sexe.value == "" || Race.value == "" || Profession.value == ""){
	var a = "";
	if(joueur.value == ""){var a = "\nVotre prénom";}
	if(personnage.value == ""){var a = a+"\nLe nom de votre personnage";}
	if(Sexe.value == ""){var a = a+"\nLe sexe de votre personnage";}
	if(Race.value == ""){var a = a+"\nLa race de votre personnage";}
	if(Profession.value == ""){var a = a+"\nLa profession de votre personnage";}
	alert("Vous devez remplir les éléments :"+a);
}	
else{
	Valider.style.width = "20%";
	En_cours.innerHTML = "Etape 2";
	Etape_1.style.display = "none";
	Etape_2.style.display = "block";
}
		}
	}

function Caractéristique(){
  var Caractéristique_1 = document.getElementById("Caractéristique_1").value;
  var Caractéristique_2 = document.getElementById("Caractéristique_2").value;
  var Caractéristique_3 = document.getElementById("Caractéristique_3").value;
  var Caractéristique_4 = document.getElementById("Caractéristique_4").value;
  var Caractéristique_5 = document.getElementById("Caractéristique_5").value;
  var Caractéristique_6 = document.getElementById("Caractéristique_6").value;
  var Caractéristique_7 = document.getElementById("Caractéristique_7").value;
  var Caractéristique_8 = document.getElementById("Caractéristique_8").value;
  var Caractéristique_9 = document.getElementById("Caractéristique_9").value;
  
  var Somme = Number(Caractéristique_1) + Number(Caractéristique_2) + Number(Caractéristique_3) + Number(Caractéristique_4) + Number(Caractéristique_5) + Number(Caractéristique_6) + Number(Caractéristique_7) + Number(Caractéristique_8) + Number(Caractéristique_9);
  var Restant = 60 - Somme;
  document.getElementById("Décompte_Caractéristique").innerHTML = Restant;
}

function Caractéristique_1_Plus() {
  var compé = Number(document.getElementById("Caractéristique_1").value);
  var Max = Number(document.getElementById("Décompte_Caractéristique").innerHTML)
  
  if(compé < "10" && Max > "0"){
	document.getElementById("Caractéristique_1").value = Number(compé)+1;
  }
}
function Caractéristique_1_Moins() {
  var compé = document.getElementById("Caractéristique_1").value;
  if(compé > 1){
	document.getElementById("Caractéristique_1").value = Number(compé)-1;
  }
}

function Caractéristique_2_Plus() {
  var compé = Number(document.getElementById("Caractéristique_2").value);
  var Max = Number(document.getElementById("Décompte_Caractéristique").innerHTML)
  
  if(compé < "10" && Max > "0"){
	document.getElementById("Caractéristique_2").value = Number(compé)+1;
  }
}
function Caractéristique_2_Moins() {
  var compé = document.getElementById("Caractéristique_2").value;
  if(compé > 1){
	document.getElementById("Caractéristique_2").value = Number(compé)-1;
  }
}

function Caractéristique_3_Plus() {
  var compé = Number(document.getElementById("Caractéristique_3").value);
  var Max = Number(document.getElementById("Décompte_Caractéristique").innerHTML)
  
  if(compé < "10" && Max > "0"){
	document.getElementById("Caractéristique_3").value = Number(compé)+1;
  }
}
function Caractéristique_3_Moins() {
  var compé = document.getElementById("Caractéristique_3").value;
  if(compé > 1){
	document.getElementById("Caractéristique_3").value = Number(compé)-1;
  }
}

function Caractéristique_4_Plus() {
  var compé = Number(document.getElementById("Caractéristique_4").value);
  var Max = Number(document.getElementById("Décompte_Caractéristique").innerHTML)
  
  if(compé < "10" && Max > "0"){
	document.getElementById("Caractéristique_4").value = Number(compé)+1;
  }
}
function Caractéristique_4_Moins() {
  var compé = document.getElementById("Caractéristique_4").value;
  if(compé > 1){
	document.getElementById("Caractéristique_4").value = Number(compé)-1;
  }
}

function Caractéristique_5_Plus() {
  var compé = Number(document.getElementById("Caractéristique_5").value);
  var Max = Number(document.getElementById("Décompte_Caractéristique").innerHTML)
  
  if(compé < "10" && Max > "0"){
	document.getElementById("Caractéristique_5").value = Number(compé)+1;
  }
}
function Caractéristique_5_Moins() {
  var compé = document.getElementById("Caractéristique_5").value;
  if(compé > 1){
	document.getElementById("Caractéristique_5").value = Number(compé)-1;
  }
}

function Caractéristique_6_Plus() {
  var compé = Number(document.getElementById("Caractéristique_6").value);
  var Max = Number(document.getElementById("Décompte_Caractéristique").innerHTML)
  
  if(compé < "10" && Max > "0"){
	document.getElementById("Caractéristique_6").value = Number(compé)+1;
  }
}
function Caractéristique_6_Moins() {
  var compé = document.getElementById("Caractéristique_6").value;
  if(compé > 1){
	document.getElementById("Caractéristique_6").value = Number(compé)-1;
  }
}

function Caractéristique_7_Plus() {
  var compé = Number(document.getElementById("Caractéristique_7").value);
  var Max = Number(document.getElementById("Décompte_Caractéristique").innerHTML)
  
  if(compé < "10" && Max > "0"){
	document.getElementById("Caractéristique_7").value = Number(compé)+1;
  }
}
function Caractéristique_7_Moins() {
  var compé = document.getElementById("Caractéristique_7").value;
  if(compé > 1){
	document.getElementById("Caractéristique_7").value = Number(compé)-1;
  }
}

function Caractéristique_8_Plus() {
  var compé = Number(document.getElementById("Caractéristique_8").value);
  var Max = Number(document.getElementById("Décompte_Caractéristique").innerHTML)
  
  if(compé < "10" && Max > "0"){
	document.getElementById("Caractéristique_8").value = Number(compé)+1;
  }
}
function Caractéristique_8_Moins() {
  var compé = document.getElementById("Caractéristique_8").value;
  if(compé > 1){
	document.getElementById("Caractéristique_8").value = Number(compé)-1;
  }
}

function Caractéristique_9_Plus() {
  var compé = Number(document.getElementById("Caractéristique_9").value);
  var Max = Number(document.getElementById("Décompte_Caractéristique").innerHTML)
  
  if(compé < "10" && Max > "0"){
	document.getElementById("Caractéristique_9").value = Number(compé)+1;
  }
}
function Caractéristique_9_Moins() {
  var compé = document.getElementById("Caractéristique_9").value;
  if(compé > 1){
	document.getElementById("Caractéristique_9").value = Number(compé)-1;
  }
}

// Aff Compétence Profession
function Pouet(){
// Retire les sorts
	for (let i = 1; i <= 5; i++) {var A = "Sort_"+i;document.getElementById(A).style.display = "none";	}
// Retire les invoc
	for (let i = 1; i <= 2; i++) {var A = "Invocation_"+i;document.getElementById(A).style.display = "none";}
// Retire les rituels
	for (let i = 1; i <= 2; i++) {var A = "Rituel_"+i;document.getElementById(A).style.display = "none";}
// Retire les malédictions
	for (let i = 1; i <= 2; i++) {
		var A = "Malédiction_"+i;
		document.getElementById(A).style.display = "none";
		document.getElementById(A).value = "";
		document.getElementById(A).disabled = false;
		}


// Retire INT
	for (let i = 1; i <= 11; i++) {var A = "Compétence_Profession_INT_"+i+"_aff";document.getElementById(A).style.visibility = "hidden";}
// Retire REF
	for (let i = 1; i <= 8; i++) {var A = "Compétence_Profession_REF_"+i+"_aff";document.getElementById(A).style.visibility = "hidden";}
// Retire DEX
	for (let i = 1; i <= 5; i++) {var A = "Compétence_Profession_DEX_"+i+"_aff";document.getElementById(A).style.visibility = "hidden";}
// Retire COR
	for (let i = 1; i <= 2; i++) {var A = "Compétence_Profession_COR_"+i+"_aff";document.getElementById(A).style.visibility = "hidden";}
// Retire EMP
	for (let i = 1; i <= 10; i++) {var A = "Compétence_Profession_EMP_"+i+"_aff";document.getElementById(A).style.visibility = "hidden";}
// Retire TEC
	for (let i = 1; i <= 7; i++) {var A = "Compétence_Profession_TEC_"+i+"_aff";document.getElementById(A).style.visibility = "hidden";}
// Retire VOL
	for (let i = 1; i <= 7; i++) {var A = "Compétence_Profession_VOL_"+i+"_aff";document.getElementById(A).style.visibility = "hidden";}


// Affiche INT
	for (let i = 1; i <= 11; i++) {var A = "Compétence_INT_"+i;document.getElementById(A).style.visibility = "visible";}
// Affiche REF
	for (let i = 1; i <= 8; i++) {var A = "Compétence_REF_"+i;document.getElementById(A).style.visibility = "visible";}
// Affiche DEX
	for (let i = 1; i <= 5; i++) {var A = "Compétence_DEX_"+i;document.getElementById(A).style.visibility = "visible";}
// Affiche COR
	for (let i = 1; i <= 2; i++) {var A = "Compétence_COR_"+i;document.getElementById(A).style.visibility = "visible";}
// Affiche EMP
	for (let i = 1; i <= 10; i++) {var A = "Compétence_EMP_"+i;document.getElementById(A).style.visibility = "visible";}
// Affiche TEC
	for (let i = 1; i <= 7; i++) {var A = "Compétence_TEC_"+i;document.getElementById(A).style.visibility = "visible";}
// Affiche VOL
	for (let i = 1; i <= 7; i++) {var A = "Compétence_VOL_"+i;document.getElementById(A).style.visibility = "visible";}

	
// Retire INT
	for (let i = 1; i <= 11; i++) {var A = "Compétence_Profession_INT_"+i;document.getElementById(A).value = "";document.getElementById(A).min = "0";}
// Retire REF
	for (let i = 1; i <= 8; i++) {var A = "Compétence_Profession_REF_"+i;document.getElementById(A).value = "";document.getElementById(A).min = "0";}
// Retire DEX
	for (let i = 1; i <= 5; i++) {var A = "Compétence_Profession_DEX_"+i;document.getElementById(A).value = "";document.getElementById(A).min = "0";}
// Retire COR
	for (let i = 1; i <= 2; i++) {var A = "Compétence_Profession_COR_"+i;document.getElementById(A).value = "";document.getElementById(A).min = "0";}
// Retire EMP
	for (let i = 1; i <= 10; i++) {var A = "Compétence_Profession_EMP_"+i;document.getElementById(A).value = "";document.getElementById(A).min = "0";}
// Retire TEC
	for (let i = 1; i <= 7; i++) {var A = "Compétence_Profession_TEC_"+i;document.getElementById(A).value = "";document.getElementById(A).min = "0";}
// Retire VOL
	for (let i = 1; i <= 7; i++) {var A = "Compétence_Profession_VOL_"+i;document.getElementById(A).value = "";document.getElementById(A).min = "0";}
	

var Profession = document.getElementById('Profession').value;

if (Profession == "1"){
// Artisan

// Business (INT:2), Education (INT:4), Streetwise (INT:8)
// Fine Arts (EMP:3), Persuasion (EMP:8)
// Athletics (DEX:2)
// Alchemy (TEC:1), Crafting (TEC:2)
// Endurance (COR:2), Physique (COR:1)

	Compétence_Profession_INT_2_aff.style.visibility = "visible";
	Compétence_Profession_INT_2.disabled = false;
	Compétence_Profession_INT_2.value = "1";
	Compétence_Profession_INT_2.min = "1";
	Compétence_Profession_INT_4_aff.style.visibility = "visible";
	Compétence_Profession_INT_4.disabled = false;
	Compétence_Profession_INT_4.value = "1";
	Compétence_Profession_INT_4.min = "1";
	Compétence_Profession_INT_8_aff.style.visibility = "visible";
	Compétence_Profession_INT_8.disabled = false;
	Compétence_Profession_INT_8.value = "1";
	Compétence_Profession_INT_8.min = "1";
	
	Compétence_Profession_EMP_3_aff.style.visibility = "visible";
	Compétence_Profession_EMP_3.disabled = false;
	Compétence_Profession_EMP_3.value = "1";
	Compétence_Profession_EMP_3.min = "1";
	Compétence_Profession_EMP_8_aff.style.visibility = "visible";
	Compétence_Profession_EMP_8.disabled = false;
	Compétence_Profession_EMP_8.value = "1";
	Compétence_Profession_EMP_8.min = "1";
	
	Compétence_Profession_DEX_2_aff.style.visibility = "visible";
	Compétence_Profession_DEX_2.disabled = false;
	Compétence_Profession_DEX_2.value = "1";
	Compétence_Profession_DEX_2.min = "1";
	
	Compétence_Profession_COR_1_aff.style.visibility = "visible";
	Compétence_Profession_COR_1.disabled = false;
	Compétence_Profession_COR_1.value = "1";
	Compétence_Profession_COR_1.min = "1";
	Compétence_Profession_COR_2_aff.style.visibility = "visible";
	Compétence_Profession_COR_2.disabled = false;
	Compétence_Profession_COR_2.value = "1";
	Compétence_Profession_COR_2.min = "1";

	Compétence_Profession_TEC_1_aff.style.visibility = "visible";
	Compétence_Profession_TEC_1.disabled = false;
	Compétence_Profession_TEC_1.value = "1";
	Compétence_Profession_TEC_1.min = "1";
	Compétence_Profession_TEC_2_aff.style.visibility = "visible";
	Compétence_Profession_TEC_2.disabled = false;
	Compétence_Profession_TEC_2.value = "1";
	Compétence_Profession_TEC_2.min = "1";

// ---

	Compétence_INT_2.style.visibility = "hidden";
	Compétence_INT_4.style.visibility = "hidden";
	Compétence_INT_8.style.visibility = "hidden";
	Compétence_EMP_3.style.visibility = "hidden";
	Compétence_EMP_8.style.visibility = "hidden";
	Compétence_DEX_2.style.visibility = "hidden";
	Compétence_COR_1.style.visibility = "hidden";
	Compétence_COR_2.style.visibility = "hidden";
	Compétence_TEC_1.style.visibility = "hidden";
	Compétence_TEC_2.style.visibility = "hidden";


}
if (Profession == "2"){
// Barde
// Charisma (EMP:1), Deceit (EMP:2),  Fine Arts (EMP:3), Human Perception (EMP:6), Persuasion (EMP:8), Performance (EMP:9),Seduction (EMP:10),
// Language (INT:5), Social Etiquette (INT:7), Streetwise (INT:8)

	Compétence_Profession_EMP_1_aff.style.visibility = "visible";
	Compétence_Profession_EMP_1.disabled = false;
	Compétence_Profession_EMP_1.value = "1";
	Compétence_Profession_EMP_1.min = "1";
	Compétence_Profession_EMP_2_aff.style.visibility = "visible";
	Compétence_Profession_EMP_2.disabled = false;
	Compétence_Profession_EMP_2.value = "1";
	Compétence_Profession_EMP_2.min = "1";
	Compétence_Profession_EMP_3_aff.style.visibility = "visible";
	Compétence_Profession_EMP_3.disabled = false;
	Compétence_Profession_EMP_3.value = "1";
	Compétence_Profession_EMP_3.min = "1";
	Compétence_Profession_EMP_6_aff.style.visibility = "visible";
	Compétence_Profession_EMP_6.disabled = false;
	Compétence_Profession_EMP_6.value = "1";
	Compétence_Profession_EMP_6.min = "1";
	Compétence_Profession_EMP_8_aff.style.visibility = "visible";
	Compétence_Profession_EMP_8.disabled = false;
	Compétence_Profession_EMP_8.value = "1";
	Compétence_Profession_EMP_8.min = "1";
	Compétence_Profession_EMP_9_aff.style.visibility = "visible";
	Compétence_Profession_EMP_9.disabled = false;
	Compétence_Profession_EMP_9.value = "1";
	Compétence_Profession_EMP_9.min = "1";
	Compétence_Profession_EMP_10.value = "1";
	Compétence_Profession_EMP_10.min = "1";
	Compétence_Profession_EMP_10_aff.style.visibility = "visible";
	Compétence_Profession_EMP_10.disabled = false;

	Compétence_Profession_INT_5_aff.style.visibility = "visible";
	Compétence_Profession_INT_5.disabled = false;
	Compétence_Profession_INT_5.value = "1";
	Compétence_Profession_INT_5.min = "1";
	Compétence_Profession_INT_7_aff.style.visibility = "visible";
	Compétence_Profession_INT_7.disabled = false;
	Compétence_Profession_INT_7.value = "1";
	Compétence_Profession_INT_7.min = "1";
	Compétence_Profession_INT_8.value = "1";
	Compétence_Profession_INT_8.min = "1";
	Compétence_Profession_INT_8_aff.style.visibility = "visible";
	Compétence_Profession_INT_8.disabled = false;

// ---

	Compétence_EMP_1.style.visibility = "hidden";
	Compétence_EMP_2.style.visibility = "hidden";
	Compétence_EMP_3.style.visibility = "hidden";
	Compétence_EMP_6.style.visibility = "hidden";
	Compétence_EMP_8.style.visibility = "hidden";
	Compétence_EMP_9.style.visibility = "hidden";
	Compétence_EMP_10.style.visibility = "hidden";
	Compétence_INT_5.style.visibility = "hidden";
	Compétence_INT_7.style.visibility = "hidden";
	Compétence_INT_8.style.visibility = "hidden";


}
if (Profession == "3"){
// Criminel
// Awareness (INT:1), Streetwise (INT:8)
// Athletics (DEX:2)
// Deceit (EMP:2)
// Forgery (TEC:5), Pick Locks (TEC:6)
// Intimidate (VOL:3)
// Sleight of Hand (DEX:4), Stealth (DEX:5)
// Small Blades (REF:6)

	Compétence_Profession_INT_1_aff.style.visibility = "visible";
	Compétence_Profession_INT_1.disabled = false;
	Compétence_Profession_INT_1.value = "1";
	Compétence_Profession_INT_1.min = "1";
	Compétence_Profession_INT_8.value = "1";
	Compétence_Profession_INT_8.min = "1";
	Compétence_Profession_INT_8_aff.style.visibility = "visible";
	Compétence_Profession_INT_8.disabled = false;

	Compétence_Profession_DEX_2_aff.style.visibility = "visible";
	Compétence_Profession_DEX_2.disabled = false;
	Compétence_Profession_DEX_2.value = "1";
	Compétence_Profession_DEX_2.min = "1";

	Compétence_Profession_EMP_2_aff.style.visibility = "visible";
	Compétence_Profession_EMP_2.disabled = false;
	Compétence_Profession_EMP_2.value = "1";
	Compétence_Profession_EMP_2.min = "1";

	Compétence_Profession_TEC_5_aff.style.visibility = "visible";
	Compétence_Profession_TEC_5.disabled = false;
	Compétence_Profession_TEC_5.value = "1";
	Compétence_Profession_TEC_5.min = "1";
	Compétence_Profession_TEC_6_aff.style.visibility = "visible";
	Compétence_Profession_TEC_6.disabled = false;
	Compétence_Profession_TEC_6.value = "1";
	Compétence_Profession_TEC_6.min = "1";

	Compétence_Profession_VOL_3_aff.style.visibility = "visible";
	Compétence_Profession_VOL_3.disabled = false;
	Compétence_Profession_VOL_3.value = "1";
	Compétence_Profession_VOL_3.min = "1";

	Compétence_Profession_DEX_4_aff.style.visibility = "visible";
	Compétence_Profession_DEX_4.disabled = false;
	Compétence_Profession_DEX_4.value = "1";
	Compétence_Profession_DEX_4.min = "1";
	Compétence_Profession_DEX_5.value = "1";
	Compétence_Profession_DEX_5.min = "1";
	Compétence_Profession_DEX_5_aff.style.visibility = "visible";
	Compétence_Profession_DEX_5.disabled = false;

	Compétence_Profession_REF_6_aff.style.visibility = "visible";
	Compétence_Profession_REF_6.disabled = false;
	Compétence_Profession_REF_6.value = "1";
	Compétence_Profession_REF_6.min = "1";

// --- 

	Compétence_INT_1.style.visibility = "hidden";
	Compétence_INT_8.style.visibility = "hidden";
	Compétence_DEX_2.style.visibility = "hidden";
	Compétence_EMP_2.style.visibility = "hidden";
	Compétence_TEC_5.style.visibility = "hidden";
	Compétence_TEC_6.style.visibility = "hidden";
	Compétence_VOL_3.style.visibility = "hidden";
	Compétence_DEX_4.style.visibility = "hidden";
	Compétence_DEX_5.style.visibility = "hidden";
	Compétence_REF_6.style.visibility = "hidden";



}
if (Profession == "4"){
// Docteur
// Business (INT:2), Deduction (INT:3), Social Etiquette (INT:7), Wilderness Survival (INT:11)
// Alchemy (TEC:1),
// Charisma (EMP:1), Human Perception (EMP:6)
// Courage (VOL:1), Resist Coercion (VOL:6)
// Small Blades (REF:6)

	Compétence_Profession_INT_2_aff.style.visibility = "visible";
	Compétence_Profession_INT_2.disabled = false;
	Compétence_Profession_INT_2.value = "1";
	Compétence_Profession_INT_2.min = "1";
	Compétence_Profession_INT_3_aff.style.visibility = "visible";
	Compétence_Profession_INT_3.disabled = false;
	Compétence_Profession_INT_3.value = "1";
	Compétence_Profession_INT_3.min = "1";
	Compétence_Profession_INT_7_aff.style.visibility = "visible";
	Compétence_Profession_INT_7.disabled = false;
	Compétence_Profession_INT_7.value = "1";
	Compétence_Profession_INT_7.min = "1";
	Compétence_Profession_INT_11.value = "1";
	Compétence_Profession_INT_11.min = "1";
	Compétence_Profession_INT_11_aff.style.visibility = "visible";
	Compétence_Profession_INT_11.disabled = false;

	Compétence_Profession_TEC_1_aff.style.visibility = "visible";
	Compétence_Profession_TEC_1.disabled = false;
	Compétence_Profession_TEC_1.value = "1";
	Compétence_Profession_TEC_1.min = "1";

	Compétence_Profession_EMP_1_aff.style.visibility = "visible";
	Compétence_Profession_EMP_1.disabled = false;
	Compétence_Profession_EMP_1.value = "1";
	Compétence_Profession_EMP_1.min = "1";
	Compétence_Profession_EMP_6.value = "1";
	Compétence_Profession_EMP_6.min = "1";
	Compétence_Profession_EMP_6_aff.style.visibility = "visible";
	Compétence_Profession_EMP_6.disabled = false;

	Compétence_Profession_VOL_1_aff.style.visibility = "visible";
	Compétence_Profession_VOL_1.disabled = false;
	Compétence_Profession_VOL_1.value = "1";
	Compétence_Profession_VOL_1.min = "1";
	Compétence_Profession_VOL_6.value = "1";
	Compétence_Profession_VOL_6.min = "1";
	Compétence_Profession_VOL_6_aff.style.visibility = "visible";
	Compétence_Profession_VOL_6.disabled = false;

	Compétence_Profession_REF_6_aff.style.visibility = "visible";
	Compétence_Profession_REF_6.disabled = false;
	Compétence_Profession_REF_6.value = "1";
	Compétence_Profession_REF_6.min = "1";

// ---

	Compétence_INT_2.style.visibility = "hidden";
	Compétence_INT_3.style.visibility = "hidden";
	Compétence_INT_7.style.visibility = "hidden";
	Compétence_INT_11.style.visibility = "hidden";
	Compétence_TEC_1.style.visibility = "hidden";
	Compétence_EMP_1.style.visibility = "hidden";
	Compétence_EMP_6.style.visibility = "hidden";
	Compétence_VOL_1.style.visibility = "hidden";
	Compétence_VOL_6.style.visibility = "hidden";
	Compétence_REF_6.style.visibility = "hidden";


}
if (Profession == "5"){
// H d'armes
// Any 5 Combat Skills > REF1 + 3 + 8 / DEX 1 + 3
// Courage VOL:1 Intimidation VOL:3
// Dodge/Escape REF:2
// Physique COR:1
// Wilderness Survival INT:11

	Compétence_Profession_INT_11_aff.style.visibility = "visible";
	Compétence_Profession_INT_11.disabled = false;
	Compétence_Profession_INT_11.value = "1";
	Compétence_Profession_INT_11.min = "1";

	Compétence_Profession_VOL_1_aff.style.visibility = "visible";
	Compétence_Profession_VOL_1.disabled = false;
	Compétence_Profession_VOL_1.value = "1";
	Compétence_Profession_VOL_1.min = "1";
	Compétence_Profession_VOL_3_aff.style.visibility = "visible";
	Compétence_Profession_VOL_3.disabled = false;
	Compétence_Profession_VOL_3.value = "1";
	Compétence_Profession_VOL_3.min = "1";
	
	Compétence_Profession_REF_2_aff.style.visibility = "visible";
	Compétence_Profession_REF_2.disabled = false;
	Compétence_Profession_REF_2.value = "1";
	Compétence_Profession_REF_2.min = "1";
	Compétence_Profession_REF_1_aff.style.visibility = "visible";
	Compétence_Profession_REF_1.disabled = false;
	Compétence_Profession_REF_1.value = "1";
	Compétence_Profession_REF_1.min = "1";
	Compétence_Profession_REF_3_aff.style.visibility = "visible";
	Compétence_Profession_REF_3.disabled = false;
	Compétence_Profession_REF_3.value = "1";
	Compétence_Profession_REF_3.min = "1";
	Compétence_Profession_REF_8.value = "1";
	Compétence_Profession_REF_8.min = "1";
	Compétence_Profession_REF_8_aff.style.visibility = "visible";
	Compétence_Profession_REF_8.disabled = false;

	Compétence_Profession_DEX_1_aff.style.visibility = "visible";
	Compétence_Profession_DEX_1.disabled = false;
	Compétence_Profession_DEX_1.value = "1";
	Compétence_Profession_DEX_1.min = "1";
	Compétence_Profession_DEX_3.value = "1";
	Compétence_Profession_DEX_3.min = "1";
	Compétence_Profession_DEX_3_aff.style.visibility = "visible";
	Compétence_Profession_DEX_3.disabled = false;

	Compétence_Profession_COR_1_aff.style.visibility = "visible";
	Compétence_Profession_COR_1.disabled = false;
	Compétence_Profession_COR_1.value = "1";
	Compétence_Profession_COR_1.min = "1";

// ---

	Compétence_INT_11.style.visibility = "hidden";
	Compétence_VOL_1.style.visibility = "hidden";
	Compétence_VOL_3.style.visibility = "hidden";
	Compétence_REF_2.style.visibility = "hidden";
	Compétence_REF_1.style.visibility = "hidden";
	Compétence_REF_3.style.visibility = "hidden";
	Compétence_REF_8.style.visibility = "hidden";
	Compétence_DEX_1.style.visibility = "hidden";
	Compétence_DEX_3.style.visibility = "hidden";
	Compétence_COR_1.style.visibility = "hidden";

}	
if (Profession == "6"){
// Mage
// Education (INT:4), Social Etiquette (INT:7)
// Grooming & Style (EMP:5), Human Perception (EMP:6), Seduction (EMP:10)
// Hex Weaving (VOL:2), Spell Casting (VOL:4), Resist Magic (VOL:5), Ritual Crafting (VOL:7)
// Staff /Spear (REF:7)

	Compétence_Profession_INT_4_aff.style.visibility = "visible";
	Compétence_Profession_INT_4.disabled = false;
	Compétence_Profession_INT_4.value = "1";
	Compétence_Profession_INT_4.min = "1";
	Compétence_Profession_INT_7.value = "1";
	Compétence_Profession_INT_7.min = "1";
	Compétence_Profession_INT_7_aff.style.visibility = "visible";
	Compétence_Profession_INT_7.disabled = false;

	Compétence_Profession_EMP_5_aff.style.visibility = "visible";
	Compétence_Profession_EMP_5.disabled = false;
	Compétence_Profession_EMP_5.value = "1";
	Compétence_Profession_EMP_5.min = "1";
	Compétence_Profession_EMP_6_aff.style.visibility = "visible";
	Compétence_Profession_EMP_6.disabled = false;
	Compétence_Profession_EMP_6.value = "1";
	Compétence_Profession_EMP_6.min = "1";
	Compétence_Profession_EMP_10.value = "1";
	Compétence_Profession_EMP_10.min = "1";
	Compétence_Profession_EMP_10_aff.style.visibility = "visible";
	Compétence_Profession_EMP_10.disabled = false;

	Compétence_Profession_VOL_2_aff.style.visibility = "visible";
	Compétence_Profession_VOL_2.disabled = false;
	Compétence_Profession_VOL_2.value = "1";
	Compétence_Profession_VOL_2.min = "1";
	Compétence_Profession_VOL_4_aff.style.visibility = "visible";
	Compétence_Profession_VOL_4.disabled = false;
	Compétence_Profession_VOL_4.value = "1";
	Compétence_Profession_VOL_4.min = "1";
	Compétence_Profession_VOL_5_aff.style.visibility = "visible";
	Compétence_Profession_VOL_5.disabled = false;
	Compétence_Profession_VOL_5.value = "1";
	Compétence_Profession_VOL_5.min = "1";
	Compétence_Profession_VOL_7.value = "1";
	Compétence_Profession_VOL_7.min = "1";
	Compétence_Profession_VOL_7_aff.style.visibility = "visible";
	Compétence_Profession_VOL_7.disabled = false;
	
	Compétence_Profession_REF_7_aff.style.visibility = "visible";
	Compétence_Profession_REF_7.disabled = false;
	Compétence_Profession_REF_7.value = "1";
	Compétence_Profession_REF_7.min = "1";

// ---

	Compétence_INT_4.style.visibility = "hidden";
	Compétence_INT_7.style.visibility = "hidden";
	Compétence_EMP_5.style.visibility = "hidden";
	Compétence_EMP_6.style.visibility = "hidden";
	Compétence_EMP_10.style.visibility = "hidden";
	Compétence_VOL_2.style.visibility = "hidden";
	Compétence_VOL_4.style.visibility = "hidden";
	Compétence_VOL_5.style.visibility = "hidden";
	Compétence_VOL_7.style.visibility = "hidden";
	Compétence_REF_7.style.visibility = "hidden";



// 5 Novice Spells, 1 Novice Ritual, 1 Low Danger Hex

	Magie_Explication.innerHTML = "5 sorts, 1 rituel et 1 malédiction :"
	Sort_1.style.display = "block";
	Sort_2.style.display = "block";
	Sort_3.style.display = "block";
	Sort_4.style.display = "block";
	Sort_5.style.display = "block";
	Rituel_1.style.display = "block";
	Malédiction_1.style.display = "block";


}
if (Profession == "7"){
// Marchand

// Business INT:2 Education INT:4 Language INT:5 Streetwise INT:8
// Charisma EMP:1 Gambling EMP:4 Human Perception EMP:6 Persuasion EMP8
// Resist Coercion VOL:6
// Small Blades REF:6

	Compétence_Profession_INT_2_aff.style.visibility = "visible";
	Compétence_Profession_INT_2.disabled = false;
	Compétence_Profession_INT_2.value = "1";
	Compétence_Profession_INT_2.min = "1";
	Compétence_Profession_INT_4_aff.style.visibility = "visible";
	Compétence_Profession_INT_4.disabled = false;
	Compétence_Profession_INT_4.value = "1";
	Compétence_Profession_INT_4.min = "1";
	Compétence_Profession_INT_5_aff.style.visibility = "visible";
	Compétence_Profession_INT_5.disabled = false;
	Compétence_Profession_INT_5.value = "1";
	Compétence_Profession_INT_5.min = "1";
	Compétence_Profession_INT_8_aff.style.visibility = "visible";
	Compétence_Profession_INT_8.disabled = false;
	Compétence_Profession_INT_8.value = "1";
	Compétence_Profession_INT_8.min = "1";

	Compétence_Profession_EMP_1_aff.style.visibility = "visible";
	Compétence_Profession_EMP_1.disabled = false;
	Compétence_Profession_EMP_1.value = "1";
	Compétence_Profession_EMP_1.min = "1";
	Compétence_Profession_EMP_4_aff.style.visibility = "visible";
	Compétence_Profession_EMP_4.disabled = false;
	Compétence_Profession_EMP_4.value = "1";
	Compétence_Profession_EMP_4.min = "1";
	Compétence_Profession_EMP_6_aff.style.visibility = "visible";
	Compétence_Profession_EMP_6.disabled = false;
	Compétence_Profession_EMP_6.value = "1";
	Compétence_Profession_EMP_6.min = "1";
	Compétence_Profession_EMP_8_aff.style.visibility = "visible";
	Compétence_Profession_EMP_8.disabled = false;
	Compétence_Profession_EMP_8.value = "1";
	Compétence_Profession_EMP_8.min = "1";

	Compétence_Profession_VOL_6_aff.style.visibility = "visible";
	Compétence_Profession_VOL_6.disabled = false;
	Compétence_Profession_VOL_6.value = "1";
	Compétence_Profession_VOL_6.min = "1";

	Compétence_Profession_REF_6_aff.style.visibility = "visible";
	Compétence_Profession_REF_6.disabled = false;
	Compétence_Profession_REF_6.value = "1";
	Compétence_Profession_REF_6.min = "1";

// ---

	Compétence_INT_2.style.visibility = "hidden";
	Compétence_INT_4.style.visibility = "hidden";
	Compétence_INT_5.style.visibility = "hidden";
	Compétence_INT_8.style.visibility = "hidden";
	Compétence_EMP_1.style.visibility = "hidden";
	Compétence_EMP_4.style.visibility = "hidden";
	Compétence_EMP_6.style.visibility = "hidden";
	Compétence_EMP_8.style.visibility = "hidden";
	Compétence_VOL_6.style.visibility = "hidden";
	Compétence_REF_6.style.visibility = "hidden";

}
if (Profession == "8"){
// Prêtre
// Charisma EMP:1 Human Perception EMP:6 Leadership EMP:7
// First Aid TEC:4
// Courage VOL:1 Hex Weaving VOL:2 Spell Casting VOL:4 Ritual Crafting VOL:7
// Teaching INT:10 Wilderness Survival INT:11

	Compétence_Profession_INT_10_aff.style.visibility = "visible";
	Compétence_Profession_INT_10.disabled = false;
	Compétence_Profession_INT_11_aff.style.visibility = "visible";
	Compétence_Profession_INT_11.disabled = false;
	Compétence_Profession_INT_10.value = "1";
	Compétence_Profession_INT_10.min = "1";
	Compétence_Profession_INT_11.value = "1";
	Compétence_Profession_INT_11.min = "1";

	Compétence_Profession_EMP_1_aff.style.visibility = "visible";
	Compétence_Profession_EMP_1.disabled = false;
	Compétence_Profession_EMP_1.value = "1";
	Compétence_Profession_EMP_1.min = "1";
	Compétence_Profession_EMP_6_aff.style.visibility = "visible";
	Compétence_Profession_EMP_6.disabled = false;
	Compétence_Profession_EMP_6.value = "1";
	Compétence_Profession_EMP_6.min = "1";
	Compétence_Profession_EMP_7_aff.style.visibility = "visible";
	Compétence_Profession_EMP_7.disabled = false;
	Compétence_Profession_EMP_7.value = "1";
	Compétence_Profession_EMP_7.min = "1";

	Compétence_Profession_TEC_4_aff.style.visibility = "visible";
	Compétence_Profession_TEC_4.disabled = false;
	Compétence_Profession_TEC_4.value = "1";
	Compétence_Profession_TEC_4.min = "1";

	Compétence_Profession_VOL_1_aff.style.visibility = "visible";
	Compétence_Profession_VOL_1.disabled = false;
	Compétence_Profession_VOL_1.value = "1";
	Compétence_Profession_VOL_1.min = "1";
	Compétence_Profession_VOL_2_aff.style.visibility = "visible";
	Compétence_Profession_VOL_2.disabled = false;
	Compétence_Profession_VOL_2.value = "1";
	Compétence_Profession_VOL_2.min = "1";
	Compétence_Profession_VOL_4_aff.style.visibility = "visible";
	Compétence_Profession_VOL_4.disabled = false;
	Compétence_Profession_VOL_4.value = "1";
	Compétence_Profession_VOL_4.min = "1";
	Compétence_Profession_VOL_7.value = "1";
	Compétence_Profession_VOL_7.min = "1";
	Compétence_Profession_VOL_7_aff.style.visibility = "visible";
	Compétence_Profession_VOL_7.disabled = false;

// ---

	Compétence_INT_10.style.visibility = "hidden";
	Compétence_INT_11.style.visibility = "hidden";
	Compétence_EMP_1.style.visibility = "hidden";
	Compétence_EMP_6.style.visibility = "hidden";
	Compétence_EMP_7.style.visibility = "hidden";
	Compétence_TEC_4.style.visibility = "hidden";
	Compétence_VOL_1.style.visibility = "hidden";
	Compétence_VOL_2.style.visibility = "hidden";
	Compétence_VOL_4.style.visibility = "hidden";
	Compétence_VOL_7.style.visibility = "hidden";


// 2 Novice Invocations, 2 Novice Rituals, 2 Low Danger Hexes

	Magie_Explication.innerHTML = "2 invocations, 2 rituels et 2 malédictions :"
	Invocation_1.style.display = "block";
	Invocation_2.style.display = "block";
	Rituel_1.style.display = "block";
	Rituel_2.style.display = "block";
	Malédiction_1.style.display = "block";
	Malédiction_1.value = "1";
	Malédiction_1.disabled = true;
	Malédiction_2.style.display = "block";
	Malédiction_2.value = "2";
	Malédiction_2.disabled = true;

}
if (Profession == "9"){
// Sorceleur
// Alchemy TEC:1
// Athletics DEX:2 Stealth DEX:5
// Awareness INT:1 Deduction INT:3 Wilderness Survival INT:11
// Dodge/Escape REF:2 Ride REF:4 Swordsmanship REF:8
// Spell Casting VOL:4

	Compétence_Profession_TEC_1_aff.style.visibility = "visible";
	Compétence_Profession_TEC_1.disabled = false;
	Compétence_Profession_TEC_1.value = "1";
	Compétence_Profession_TEC_1.min = "1";

	Compétence_Profession_DEX_2_aff.style.visibility = "visible";
	Compétence_Profession_DEX_2.disabled = false;
	Compétence_Profession_DEX_2.value = "1";
	Compétence_Profession_DEX_2.min = "1";
	Compétence_Profession_DEX_5.value = "1";
	Compétence_Profession_DEX_5.min = "1";
	Compétence_Profession_DEX_5_aff.style.visibility = "visible";
	Compétence_Profession_DEX_5.disabled = false;

	Compétence_Profession_INT_1_aff.style.visibility = "visible";
	Compétence_Profession_INT_1.disabled = false;
	Compétence_Profession_INT_1.value = "1";
	Compétence_Profession_INT_1.min = "1";
	Compétence_Profession_INT_3_aff.style.visibility = "visible";
	Compétence_Profession_INT_3.disabled = false;
	Compétence_Profession_INT_3.value = "1";
	Compétence_Profession_INT_3.min = "1";
	Compétence_Profession_INT_11.value = "1";
	Compétence_Profession_INT_11.min = "1";
	Compétence_Profession_INT_11_aff.style.visibility = "visible";
	Compétence_Profession_INT_11.disabled = false;

	Compétence_Profession_REF_2_aff.style.visibility = "visible";
	Compétence_Profession_REF_2.disabled = false;
	Compétence_Profession_REF_2.value = "1";
	Compétence_Profession_REF_2.min = "1";
	Compétence_Profession_REF_4_aff.style.visibility = "visible";
	Compétence_Profession_REF_4.disabled = false;
	Compétence_Profession_REF_4.value = "1";
	Compétence_Profession_REF_4.min = "1";
	Compétence_Profession_REF_8.value = "1";
	Compétence_Profession_REF_8.min = "1";
	Compétence_Profession_REF_8_aff.style.visibility = "visible";
	Compétence_Profession_REF_8.disabled = false;

	Compétence_Profession_VOL_4_aff.style.visibility = "visible";
	Compétence_Profession_VOL_4.disabled = false;
	Compétence_Profession_VOL_4.value = "1";
	Compétence_Profession_VOL_4.min = "1";

// ---

	Compétence_TEC_1.style.visibility = "hidden";
	Compétence_DEX_2.style.visibility = "hidden";
	Compétence_DEX_5.style.visibility = "hidden";
	Compétence_INT_1.style.visibility = "hidden";
	Compétence_INT_3.style.visibility = "hidden";
	Compétence_INT_11.style.visibility = "hidden";
	Compétence_REF_2.style.visibility = "hidden";
	Compétence_REF_4.style.visibility = "hidden";
	Compétence_REF_8.style.visibility = "hidden";
	Compétence_VOL_4.style.visibility = "hidden";

}	
	
	}

function Race2(){
	
	var Race = document.getElementById('Race').value;
	var Profession = document.getElementById('Profession');

	Profession.disabled = false;
	Profession.value = "";	
	Région.disabled = false;
	Région.value = "";	
	Origine.disabled = false;
	Origine.value = "";	

Age_4.disabled = true;
Age_5.disabled = true;

		Région.required = true;
		Origine.required = true;
		Famille.required = true;
		Parents.required = true;
		Destin_famille.required = true;
		Destin_parents.required = true;
		Statut_familial.required = true;
		Mentor.required = true;
		Fratrie.required = true;
		Age.required = true;
		Sorceleur_1.required = false;
		Sorceleur_2.required = false;
		Sorceleur_5.required = false;
		Sorceleur_6.required = false;
		Sorceleur_7.required = false;
		Sorceleur_8.required = false;
		Sorceleur_9.required = false;

		Passé_Normaux.style.display = "block";
		Passé_Witcher.style.display = "none";


	if(Race == "Sorceleur"){
		Profession.value = "9";
		Profession.disabled = true;
		Passé_Normaux.style.display = "none";

		Région.required = false;
		Origine.required = false;
		Famille.required = false;
		Parents.required = false;
		Destin_famille.required = false;
		Destin_parents.required = false;
		Statut_familial.required = false;
		Mentor.required = false;
		Fratrie.required = false;
		Age.required = false;

		Passé_Witcher.style.display = "block";
		Sorceleur_1.required = true;
		Sorceleur_2.required = true;
		Sorceleur_5.required = true;
		Sorceleur_6.required = true;
		Sorceleur_7.required = true;
		Sorceleur_8.required = true;
		Sorceleur_9.required = true;

	}
	if(Race == "Elfe"){
		Région.value = "3";
		Région.disabled = true;
		Origine.value = "3_1";
		Origine.disabled = true;

// - Destin Famille RN
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_RN_"+i;document.getElementById(A).disabled = true;	}
// - Destin Famille N
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_N_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Parent RN
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Parent N
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_N_"+i;document.getElementById(A).disabled = true;	}
// Active Statut Famille RN
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Statut Famille N
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_N_"+i;document.getElementById(A).disabled = true;	}
// Active Mentor RN
	for (let i = 1; i <= 10; i++) {var A = "Mentor_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Mentor N
	for (let i = 1; i <= 10; i++) {var A = "Mentor_N_"+i;document.getElementById(A).disabled = true;	}

// + Fratrie
	for (let i = 1; i <= 8; i++) {var A = "Fratrie_"+i;document.getElementById(A).disabled = false;	}
// - Fratrie
	for (let i = 3; i <= 8; i++) {var A = "Fratrie_"+i;document.getElementById(A).disabled = true;	}

Age_4.disabled = false;
Age_5.disabled = false;
	}
	if(Race == "Nain"){
		Région.value = "3";
		Région.disabled = true;
		Origine.value = "3_2";
		Origine.disabled = true;

// - Destin Famille RN
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_RN_"+i;document.getElementById(A).disabled = true;	}
// - Destin Famille N
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_N_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Parent RN
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Parent N
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_N_"+i;document.getElementById(A).disabled = true;	}
// Active Statut Famille RN
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Statut Famille N
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_N_"+i;document.getElementById(A).disabled = true;	}
// Active Mentor RN
	for (let i = 1; i <= 10; i++) {var A = "Mentor_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Mentor N
	for (let i = 1; i <= 10; i++) {var A = "Mentor_N_"+i;document.getElementById(A).disabled = true;	}

// + Fratrie
	for (let i = 1; i <= 8; i++) {var A = "Fratrie_"+i;document.getElementById(A).disabled = false;	}
// - Fratrie
	for (let i = 6; i <= 8; i++) {var A = "Fratrie_"+i;document.getElementById(A).disabled = true;	}

document.getElementById('Age_4').disabled = false;
document.getElementById('Age_5').disabled = false;

	}
}

function Région2(){

	var Région = document.getElementById('Région').value;

// Active les origines RN
	for (let i = 1; i <= 10; i++) {var A = "Origine_RN_"+i;document.getElementById(A).disabled = false;	}
// Active les origines N
	for (let i = 1; i <= 11; i++) {var A = "Origine_N_"+i;document.getElementById(A).disabled = false;	}

// Active Destin Famille RN
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_RN_"+i;document.getElementById(A).disabled = false;	}
// Active Destin Famille N
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_N_"+i;document.getElementById(A).disabled = false;	}
// Active Destin Famille TA
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_TA_"+i;document.getElementById(A).disabled = false;	}

// Active Destin Parent RN
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_RN_"+i;document.getElementById(A).disabled = false;	}
// Active Destin Parent N
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_N_"+i;document.getElementById(A).disabled = false;	}
// Active Destin Parent TA
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_TA_"+i;document.getElementById(A).disabled = false;	}

// Active Statut Famille RN
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_RN_"+i;document.getElementById(A).disabled = false;	}
// Active Statut Famille N
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_N_"+i;document.getElementById(A).disabled = false;	}
// Active Statut Famille TA
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_TA_"+i;document.getElementById(A).disabled = false;	}

// Active Mentor RN
	for (let i = 1; i <= 10; i++) {var A = "Mentor_RN_"+i;document.getElementById(A).disabled = false;	}
// Active Mentor N
	for (let i = 1; i <= 10; i++) {var A = "Mentor_N_"+i;document.getElementById(A).disabled = false;	}
// Active Mentor TA
	for (let i = 1; i <= 10; i++) {var A = "Mentor_TA_"+i;document.getElementById(A).disabled = false;	}

// Active Fratrie
	for (let i = 1; i <= 8; i++) {var A = "Fratrie_"+i;document.getElementById(A).disabled = false;	}

	if(Région == "1"){	// Nord
// Désactive les origines N
	for (let i = 1; i <= 11; i++) {var A = "Origine_N_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Famille N
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_N_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Famille TA
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_TA_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Parent N
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_N_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Parent TA
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_TA_"+i;document.getElementById(A).disabled = true;	}
// Active Statut Famille N
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_N_"+i;document.getElementById(A).disabled = true;	}
// Active Statut Famille TA
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_TA_"+i;document.getElementById(A).disabled = true;	}
// Active Mentor N
	for (let i = 1; i <= 10; i++) {var A = "Mentor_N_"+i;document.getElementById(A).disabled = true;	}
// Active Mentor TA
	for (let i = 1; i <= 10; i++) {var A = "Mentor_TA_"+i;document.getElementById(A).disabled = true;	}

	}		
	if(Région == "2"){	// Nilfgaard
// Désactive les origines RN
	for (let i = 1; i <= 10; i++) {var A = "Origine_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Famille RN
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Famille TA
	for (let i = 1; i <= 10; i++) {var A = "Destin_famille_TA_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Parent RN
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Destin Parent TA
	for (let i = 1; i <= 10; i++) {var A = "Destin_parents_TA_"+i;document.getElementById(A).disabled = true;	}
// Active Statut Famille RN
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Statut Famille TA
	for (let i = 1; i <= 7; i++) {var A = "Statut_familial_TA_"+i;document.getElementById(A).disabled = true;	}
// Active Mentor RN
	for (let i = 1; i <= 10; i++) {var A = "Mentor_RN_"+i;document.getElementById(A).disabled = true;	}
// Active Mentor TA
	for (let i = 1; i <= 10; i++) {var A = "Mentor_TA_"+i;document.getElementById(A).disabled = true;	}

// Active Fratrie
	for (let i = 6; i <= 8; i++) {var A = "Fratrie_"+i;document.getElementById(A).disabled = true;	}


	}
	
}

function famille2(){
	var Famille = document.getElementById('Famille').value;
		Parents.disabled = false;
		Destin_famille.disabled = false;
		Destin_parents.disabled = false;
		Statut_familial.disabled = false;
	
	if(Famille == "1"){
		// En vie > Parents
		
	}
	else{
		// Mort > Destin Famille
		Parents.disabled = true;
		Parents.value = "";
		Destin_parents.disabled = true;
		Destin_parents.value = "";
		Statut_familial.disabled = true;
		Statut_familial.value = "";
	}
}

function parents2(){
	var Parents = document.getElementById('Parents').value;
		Parents.disabled = false;
		Destin_famille.disabled = false;
		Destin_parents.disabled = false;
		Statut_familial.disabled = false;

	if(Parents == "1"){
		// En vie > Statut familial
		Destin_famille.disabled = true;
		Destin_famille.value = "";
		Destin_parents.disabled = true;
		Destin_parents.value = "";
	}
	else{
		// Morts > Destin Parents
		Destin_famille.disabled = true;
		Destin_famille.value = "";
		Statut_familial.disabled = true;
		Destin_parents.value = "";
	}
}

function Compétence_PRO(){

	var Restant = 44;

// Retire INT
	for (let i = 1; i <= 11; i++) {var A = "Compétence_Profession_INT_"+i;var Restant = Restant-Number(document.getElementById(A).value);}
// Retire REF
	for (let i = 1; i <= 8; i++) {var A = "Compétence_Profession_REF_"+i;var Restant = Restant-Number(document.getElementById(A).value)	;}
// Retire DEX
	for (let i = 1; i <= 5; i++) {var A = "Compétence_Profession_DEX_"+i;var Restant = Restant-Number(document.getElementById(A).value)	;}
// Retire COR
	for (let i = 1; i <= 2; i++) {var A = "Compétence_Profession_COR_"+i;var Restant = Restant-Number(document.getElementById(A).value)	;}
// Retire EMP
	for (let i = 1; i <= 10; i++) {var A = "Compétence_Profession_EMP_"+i;var Restant = Restant-Number(document.getElementById(A).value);}
// Retire TEC
	for (let i = 1; i <= 7; i++) {var A = "Compétence_Profession_TEC_"+i;var Restant = Restant-Number(document.getElementById(A).value)	;}
// Retire VOL
	for (let i = 1; i <= 7; i++) {var A = "Compétence_Profession_VOL_"+i;var Restant = Restant-Number(document.getElementById(A).value)	;}

  document.getElementById("Décompte_Compétence_PRO").innerHTML = Restant;


// 2x Compétence
var Langage = Number(Compétence_Profession_INT_5.value)/2;if (!Number.isInteger(Langage)) {var Langage = Langage-0.5;}
Langage_PRO.innerHTML = Langage

var Connaissance_Monstres = Number(Compétence_Profession_INT_6.value)/2;if (!Number.isInteger(Connaissance_Monstres)) {var Connaissance_Monstres = Connaissance_Monstres-0.5;}
Connaissance_Monstres_PRO.innerHTML = Connaissance_Monstres

var Tactique = Number(Compétence_Profession_INT_9.value)/2;if (!Number.isInteger(Tactique)) {var Tactique = Tactique-0.5;}
Tactique_PRO.innerHTML = Tactique

var Alchimie = Number(Compétence_Profession_TEC_1.value)/2;if (!Number.isInteger(Alchimie)) {var Alchimie = Alchimie-0.5;}
Alchimie_PRO.innerHTML = Alchimie

var Artisanat = Number(Compétence_Profession_TEC_2.value)/2;if (!Number.isInteger(Artisanat)) {var Artisanat = Artisanat-0.5;}
Artisanat_PRO.innerHTML = Artisanat

var Piège = Number(Compétence_Profession_TEC_7.value)/2;if (!Number.isInteger(Piège)) {var Piège = Piège-0.5;}
Piège_PRO.innerHTML = Piège

var Malédiction = Number(Compétence_Profession_VOL_2.value)/2;if (!Number.isInteger(Malédiction)) {var Malédiction = Malédiction-0.5;}
Malédiction_PRO.innerHTML = Malédiction

var Incantation = Number(Compétence_Profession_VOL_4.value)/2;if (!Number.isInteger(Incantation)) {var Incantation = Incantation-0.5;}
Incantation_PRO.innerHTML = Incantation

var Résistance_Magie = Number(Compétence_Profession_VOL_5.value)/2;if (!Number.isInteger(Résistance_Magie)) {var Résistance_Magie = Résistance_Magie-0.5;}
Résistance_Magie_PRO.innerHTML = Résistance_Magie

var Rituel = Number(Compétence_Profession_VOL_7.value)/2;if (!Number.isInteger(Rituel)) {var Rituel = Rituel-0.5;}
Rituel_PRO.innerHTML = Rituel


}

function Compétence2(){

	var INT = document.getElementById("Caractéristique_1").value;
	var REF = document.getElementById("Caractéristique_2").value;

	var Restant = Number(INT)+Number(REF);

	Points_Comp_Bonus.innerHTML = Restant;

// Retire INT
	for (let i = 1; i <= 11; i++) {var A = "Compétence_INT_"+i;var Restant = Restant-Number(document.getElementById(A).value);}
// Retire REF
	for (let i = 1; i <= 8; i++) {var A = "Compétence_REF_"+i;var Restant = Restant-Number(document.getElementById(A).value)	;}
// Retire DEX
	for (let i = 1; i <= 5; i++) {var A = "Compétence_DEX_"+i;var Restant = Restant-Number(document.getElementById(A).value)	;}
// Retire COR
	for (let i = 1; i <= 2; i++) {var A = "Compétence_COR_"+i;var Restant = Restant-Number(document.getElementById(A).value)	;}
// Retire EMP
	for (let i = 1; i <= 10; i++) {var A = "Compétence_EMP_"+i;var Restant = Restant-Number(document.getElementById(A).value);}
// Retire TEC
	for (let i = 1; i <= 7; i++) {var A = "Compétence_TEC_"+i;var Restant = Restant-Number(document.getElementById(A).value)	;}
// Retire VOL
	for (let i = 1; i <= 7; i++) {var A = "Compétence_VOL_"+i;var Restant = Restant-Number(document.getElementById(A).value)	;}

  document.getElementById("Décompte_Compétence").innerHTML = Restant;

// 2x Compétence
var Langage = Number(Compétence_INT_5.value)/2;if (!Number.isInteger(Langage)) {var Langage = Langage-0.5;}
document.getElementById('Langage').innerHTML = Langage;

var Connaissance_Monstres = Number(Compétence_INT_6.value)/2;if (!Number.isInteger(Connaissance_Monstres)) {var Connaissance_Monstres = Connaissance_Monstres-0.5;}
document.getElementById('Connaissance_Monstres').innerHTML = Connaissance_Monstres;

var Tactique = Number(Compétence_INT_9.value)/2;if (!Number.isInteger(Tactique)) {var Tactique = Tactique-0.5;}
document.getElementById('Tactique').innerHTML = Tactique;

var Alchimie = Number(Compétence_TEC_1.value)/2;if (!Number.isInteger(Alchimie)) {var Alchimie = Alchimie-0.5;}
document.getElementById('Alchimie').innerHTML = Alchimie;

var Artisanat = Number(Compétence_TEC_2.value)/2;if (!Number.isInteger(Artisanat)) {var Artisanat = Artisanat-0.5;}
document.getElementById('Artisanat').innerHTML = Artisanat;

var Piège = Number(Compétence_TEC_7.value)/2;if (!Number.isInteger(Piège)) {var Piège = Piège-0.5;}
document.getElementById('Piège').innerHTML = Piège;

var Malédiction = Number(Compétence_VOL_2.value)/2;if (!Number.isInteger(Malédiction)) {var Malédiction = Malédiction-0.5;}
document.getElementById('Malédiction').innerHTML = Malédiction;

var Incantation = Number(Compétence_VOL_4.value)/2;if (!Number.isInteger(Incantation)) {var Incantation = Incantation-0.5;}
document.getElementById('Incantation').innerHTML = Incantation;

var Résistance_Magie = Number(Compétence_VOL_5.value)/2;if (!Number.isInteger(Résistance_Magie)) {var Résistance_Magie = Résistance_Magie-0.5;}
document.getElementById('Résistance_Magie').innerHTML = Résistance_Magie;

var Rituel = Number(Compétence_VOL_7.value)/2;if (!Number.isInteger(Rituel)) {var Rituel = Rituel-0.5;}
document.getElementById('Rituel').innerHTML = Rituel;


}

function RandomLife(){
	var checkBox = document.getElementById("HdV_random");

	var Région = document.getElementById('Région').value;
	var Race = document.getElementById('Race').value;

	if(checkBox.checked == true){
		if(Région == ""){
			var A = Math.floor(Math.random() * Math.floor(2))+1;
			// A = Région : 1 = TN / 2 = N
			document.getElementById("Région").value = A;
			if(A == 1){
			var B = Math.floor(Math.random() * Math.floor(10))+1;
			// B = Origine
			Origine.value = A+"_"+B;}
			else{var B = Math.floor(Math.random() * Math.floor(11))+1;Origine.value = A+"_"+B;}
		
			var C = Math.floor(Math.random() * Math.floor(2))+1;
			// C = Famille
			Famille.value = C
			if(C == 1){
		// En vie > Parents
			var D = Math.floor(Math.random() * Math.floor(2))+1;
			// D = Parents	
			Parents.value = D;

	if(D == "1"){
		// En vie > Statut familial
Destin_famille.disabled = true;Destin_famille.value = "";Destin_parents.disabled = true;Destin_parents.value = "";

			var G = Math.floor(Math.random() * Math.floor(7))+1;
			Statut_familial.value = A+"_"+G;
	}
	else{
		// Morts > Destin Parents
Destin_famille.disabled = true;Destin_famille.value = "";Statut_familial.disabled = true;Destin_parents.value = "";
	
			var F = Math.floor(Math.random() * Math.floor(10))+1;
			Destin_parents.value = A+"_"+F;
	
	}


			}
			else{
		// Mort > Destin Famille
Parents.disabled = true;Parents.value = "";Destin_parents.disabled = true;Destin_parents.value = "";Statut_familial.disabled = true;Statut_familial.value = "";		

			var E = Math.floor(Math.random() * Math.floor(10))+1;
			Destin_famille.value = A+"_"+E;
			
			}
		
			var H = Math.floor(Math.random() * Math.floor(10))+1;
			// H = Mentor
			Mentor.value = A+"_"+H;
			
			if(A == 1){var I = Math.floor(Math.random() * Math.floor(9));}
			if(A == 2){var I = Math.floor(Math.random() * Math.floor(6));}
			Fratrie.value = I;
		}
		
		if(Race == "Elfe"){
			var C = Math.floor(Math.random() * Math.floor(2))+1;
			// C = Famille
			Famille.value = C
			if(C == 1){
		// En vie > Parents
			var D = Math.floor(Math.random() * Math.floor(2))+1;
			// D = Parents	
			Parents.value = D;

	if(D == "1"){
		// En vie > Statut familial
Destin_famille.disabled = true;Destin_famille.value = "";Destin_parents.disabled = true;Destin_parents.value = "";

			var G = Math.floor(Math.random() * Math.floor(7))+1;
			Statut_familial.value = "3_"+G;
	}
	else{
		// Morts > Destin Parents
Destin_famille.disabled = true;Destin_famille.value = "";Statut_familial.disabled = true;Destin_parents.value = "";
	
			var F = Math.floor(Math.random() * Math.floor(10))+1;
			Destin_parents.value = "3_"+F;
	
	}


			}
			else{
		// Mort > Destin Famille
Parents.disabled = true;Parents.value = "";Destin_parents.disabled = true;Destin_parents.value = "";Statut_familial.disabled = true;Statut_familial.value = "";		

			var E = Math.floor(Math.random() * Math.floor(10))+1;
			Destin_famille.value = "3_"+E;
			
			}
		
			var H = Math.floor(Math.random() * Math.floor(10))+1;
			// H = Mentor
			Mentor.value = "3_"+H;
			
			var I = Math.floor(Math.random() * Math.floor(3))
			Fratrie.value = I;
			
		}

		if(Race == "Nain"){
			var C = Math.floor(Math.random() * Math.floor(2))+1;
			// C = Famille
			Famille.value = C
			if(C == 1){
		// En vie > Parents
			var D = Math.floor(Math.random() * Math.floor(2))+1;
			// D = Parents	
			Parents.value = D;

	if(D == "1"){
		// En vie > Statut familial
Destin_famille.disabled = true;Destin_famille.value = "";Destin_parents.disabled = true;Destin_parents.value = "";

			var G = Math.floor(Math.random() * Math.floor(7))+1;
			Statut_familial.value = "3_"+G;
	}
	else{
		// Morts > Destin Parents
Destin_famille.disabled = true;Destin_famille.value = "";Statut_familial.disabled = true;Destin_parents.value = "";
	
			var F = Math.floor(Math.random() * Math.floor(10))+1;
			Destin_parents.value = "3_"+F;
	
	}


			}
			else{
		// Mort > Destin Famille
Parents.disabled = true;Parents.value = "";Destin_parents.disabled = true;Destin_parents.value = "";Statut_familial.disabled = true;Statut_familial.value = "";		

			var E = Math.floor(Math.random() * Math.floor(10))+1;
			Destin_famille.value = "3_"+E;
			
			}
		
			var H = Math.floor(Math.random() * Math.floor(10))+1;
			// H = Mentor
			Mentor.value = "3_"+H;
			
			var I = Math.floor(Math.random() * Math.floor(6))
			Fratrie.value = I;
			
		}
		
	}

var Age = document.getElementById('Age').value;
if(Age == "2"){
	var EV_1 = Math.floor(Math.random() * Math.floor(10))+1;
// Evénement 1 : 1-4 Fortune or Misfortune ; 5-7 Allies and Enemies ; 8-10 Romance	

if(EV_1 < "5"){
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Forturne ; 2 = Inforturne
		
	if(Chance == "1"){
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff = "<b>Jackpot :</b> un événement majeur ou un coup de chance vous a apporté "+Argent+" couronnes !";}
		if(Forturne == "2"){var Chance_aff = "<b>Enseignement :</b> vous vous êtes entraîné avec un enseignant. Gagnez +1 dans n'importe quelle compétence INT ou commencez une nouvelle compétence INT à +2.";}
		if(Forturne == "3"){var Chance_aff = "<b>Remerciement :</b> quelque chose que vous avez fait vous a valu une faveur d'un noble / noble.";}
		if(Forturne == "4"){var Chance_aff = "<b>Enseignement de combat :</b> vous vous êtes entraîné avec un soldat. Gagnez +1 dans n'importe quelle compétence de combat ou commencez une nouvelle compétence de combat à +2.";}
		if(Forturne == "5"){var Chance_aff = "<b>Remerciement :</b> vous avez rencontré un sorceleur à un moment donné et avez réussi à en obtenir une faveur.";}
		if(Forturne == "6"){var Chance_aff = "<b>Gang :</b> vous êtes tombé sur un gang de bandits. Une fois par mois, vous pouvez demander une faveur à ces bandits.";}
		if(Forturne == "7"){
			var Animal = Math.floor(Math.random() * Math.floor(10))+1;
			if(Animal < "8"){var Animal = "chien";}
			else{var Animal = "loup";}
			var Chance_aff = "<b>Domptage :</b> vous avez apprivoisé un "+Animal+" que vous avez rencontré dans la nature.";}
		if(Forturne == "8"){var Chance_aff = "<b>Remerciement :</b> vous avez réussi à obtenir 1 faveur d'un puissant mage que vous avez aidé.";}
		if(Forturne == "9"){var Chance_aff = "<b>Béni par un prêtre :</b> on vous a donné un symbole sacré que vous pouvez montrer aux gens de cette religion pour gagner un +2 au Charisme avec eux.";}
		if(Forturne == "10"){var Chance_aff = "<b>Chevalier :</b> vous avez été fait chevalier pour acte valeureux dans votre royaume. Dans ce royaume, vous gagnez +2 en réputation et êtes reconnu comme chevalier.";}
	}
	else{
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff = "<b>Dette :</b> vous vous êtes profondément endetté à hauteur de "+Argent+" couronnes !";}
		if(Forturne == "2"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Chance_aff = "<b>Emprisonnement :</b> quelque chose que vous avez fait (ou une fausse accusation) vous a fait emprisonner pendant "+Argent+" 1d10 mois.";}
		if(Forturne == "3"){var Chance_aff = "<b>Dépendance :</b> vous avez développé une addiction. Vous pouvez la choisir.";}
		if(Forturne == "4"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "6"){var Argent = "Ils sont morts dans un accident.";}
			else if(Argent > "8"){var Argent = "Ils ont été assassinés par des bandits.";}
			else{var Argent = "Ils ont été assassinés par des monstres.";}
			var Chance_aff = "<b>Amant, ami ou parent tué :</b> "+Argent;}
		if(Forturne == "5"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "vol.";}
			else if(Argent > "3" && Argent < "6"){var Argent = "meurtre.";}
			else if(Argent > "5" && Argent < "10"){var Argent = "viol.";}
			else{var Argent = "sorcellerie illégale.";}			
			var Chance_aff = "<b>Fausse accusation :</b> accusation de "+Argent;}
		if(Forturne == "6"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Ce ne sont que quelques gardes.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "C’est toute une petite ville.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "C’est une grande ville.";}
			else{var Argent = "Tout un royaume est après toi.";}		
			var Chance_aff = "<b>Chassé par la loi :</b> "+Argent;}
		if(Forturne == "7"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous êtes victime de chantage.";}
			else if(Argent > "7"){var Argent = "Vous avez été trahi par quelqu'un de très proche de vous.";}
			else{var Argent = "Un secret a été dévoilé.";}		
			var Chance_aff = "<b>Trahison :</b> "+Argent;}
		if(Forturne == "8"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "5"){var Argent = "Vous étiez défiguré. Changez votre position sociale en peur.";}
			else if(Argent > "4" && Argent < "7"){var Argent = "Vous avez guéri en 5 mois.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez perdu la mémoire 7 mois cette année-là.";}
			else{var Argent = "Vous souffrez d'horribles cauchemars (7 chances sur 10 à chaque fois que vous dormez).";}
			var Chance_aff = "<b>Accident :</b> "+Argent;}
		if(Forturne == "9"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous avez été empoisonné; perdre définitivement 5 PV.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "Vous souffrez de crises d'angoisse et devez effectuer des jets d'étourdissement (tous les 5 tours) en période de stress.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez une psychose majeure. Vous entendez des voix et êtes violent, irrationnel et dépressif. Le GM contrôle ces voix..";}
			else{var Argent = ".";}
			var Chance_aff = "<b>Incapacité mentale ou physique :</b> "+Argent;}
		if(Forturne == "10"){var Chance_aff = "<b>Maudit :</b> vous avez été maudit. A voir avec le MJ.";}		
}

}
else if(EV_1 > "7"){

	var Chance = Math.floor(Math.random() * Math.floor(10))+1;	
	// 1 A Happy Love aftair ; 2-4 A Romantic Tragedy ; 5-6 A Problematic Love ; 7-10 Whores and Debauchery

if(Chance == "1"){var Chance_aff = "<b>Amour parfait :</b> la joie durable et le véritable amour sont une possibilité. Mais ils sont rares. Si vous y parvenez, il est supposé que vous êtes heureux ensemble jusqu'à ce que vous lanciez une autre romance d'un type différent. Ce jet s'applique ensuite à votre état sentimental actuel.";}
else if(Chance > "1" && Chance < "5"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
	
	if(Roll == "1"){var Roll = "Votre amant a été capturé par des bandits il y a quelque temps et est toujours leur captif.";}
	if(Roll == "2"){var Roll = "Votre amant a mystérieusement disparu un jour et vous ne savez pas où ils sont allés.";}
	if(Roll == "3"){var Roll = "Votre amant a été emprisonné ou exilé pour des crimes qu'il n'a peut-être pas commis.";}
	if(Roll == "4"){var Roll = "Votre amant vous a été enlevé par une puissante malédiction.";}
	if(Roll == "5"){var Roll = "Quelque chose s'est passé entre vous et votre amant et vous avez été forcé de les tuer.";}
	if(Roll == "6"){var Roll = "Votre amant s'est suicidé. Vous ne savez peut-être pas pourquoi ils l'ont fait.";}
	if(Roll == "7"){var Roll = "Votre amant a été enlevé par un noble et la prise pour concubine.";}
	if(Roll == "8"){var Roll = "Un rival a volé votre amour.";}
	if(Roll == "9"){var Roll = "Votre amant a été tué par des monstres. Il peut s'agir d'un accident ou prévu.";}
	if(Roll == "10"){var Roll = "Votre amant est un mage, un sorceleur ou un monstre sensible, condamnant la romance.";}
	
	var Chance_aff = "<b>Tragédie romantique :</b> "+Roll;
}
else if(Chance > "4" && Chance < "7"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
		
	if(Roll == "1"){var Roll = "La famille ou les amis de votre amant vous détestent et ne tolèrent pas votre romance.";}
	if(Roll == "2"){var Roll = "Votre amoureux travaille comme une pute pour gagner sa vie et refuse de renoncer à son travail.";}
	if(Roll == "3"){var Roll = "Votre amoureux est soumis à une malédiction mineure telle que la paranoïa ou d'horribles cauchemars.";}
	if(Roll == "4"){var Roll = "Votre amant a dormi et a refusé de s'arrêter quand vous l'avez découvert.";}
	if(Roll == "5"){var Roll = "Votre amoureux est incroyablement jaloux et ne supporte pas que vous soyez avec un rival possible.";}
	if(Roll == "6"){var Roll = "Vous vous battez constamment et rien ne peut l'arrêter longtemps. Vous descendez toujours dans des cris.";}
	if(Roll == "7"){var Roll = "Vous êtes en quelque sorte des rivaux professionnels. Vous vous dérobez souvent des clients.";}
	if(Roll == "8"){var Roll = "L'un de vous est humain et l'autre non humain, ce qui rend votre vie difficile.";}
	if(Roll == "9"){var Roll = "Votre amant est déjà marié.";}
	if(Roll == "10"){var Roll = "Vos amis ou votre famille détestent votre amant et ne tolèrent pas votre romance.";}

	var Chance_aff = "<b>Amour problématique :</b> "+Roll;
}
else {var Chance_aff = "<b>Débauche :</b> vous avez passé votre temps à dormir, à aller aux putes et peut-être à laisser une traînée d'enfants bâtards dans votre sillage si vous ne faisiez pas attention."}
}
else{
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Ami ; 2 = Ennemie
	
if(Chance == "1"){
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un chasseur de primes qui vous a sauvés de quelque chose";}
if(Ami == "2"){var Ami = "Une magicienne que vous avez rencontré dans une taverne";}
if(Ami == "3"){var Ami = "Un mentor qui vous a sauvés de quelque chose";}
if(Ami == "4"){var Ami = "Une amie d'enfance qui vous a engagé pour quelque chose";}
if(Ami == "5"){var Ami = "Un artisan avec qui vous êtiez prisonnés";}
if(Ami == "6"){var Ami = "Une vieille ennemie avec qui Vous avez été forcé de travailler ensemble";}
if(Ami == "7"){var Ami = "Un duc qui vous a engagé pour quelque chose";}
if(Ami == "8"){var Ami = "Une prêtresse que vous avez rencontrés en état d'ébriété";}
if(Ami == "9"){var Ami = "Un soldat que vous avez rencontré en voyageant";}
if(Ami == "10"){var Ami = "Une barde avec qui vous avez combattu ensemble";}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

if(Close < "5"){var Close = "des connaissances";}
else if(Close > "4" && Close < "7"){var Close = "des amis";}
else if(Close > "6" && Close < "9"){var Close = "des amis proches";}
else if(Close == "9"){var Close = "inséparable";}
else{var Close = "lié par serment";}

	var Situation = Math.floor(Math.random() * Math.floor(10))+1;	
if(Situation < "4"){var Situation = "dans les Royaumes du Nord.";}
else if(Situation > "3" && Situation < "7"){var Situation = "dans l'Empire de Nilfgaard.";}
else if(Situation > "6" && Situation < "10"){var Situation = "dans les Terres Ancestrales.";}
else{var Situation = "au-delà des frontières.";}

	var Chance_aff = "<b>Allier :</b> "+Ami+", vous êtes "+Close+", il/elle est actuellement "+Situation;
}

else{
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un ancien ami ";}
if(Ami == "2"){var Ami = "Un ancien amour ";}
if(Ami == "3"){var Ami = "Un homme ";}
if(Ami == "4"){var Ami = "Une ennemie d'enfance ";}
if(Ami == "5"){var Ami = "Un cultiste ";}
if(Ami == "6"){var Ami = "Une barde ";}
if(Ami == "7"){var Ami = "Un soldat ";}
if(Ami == "8"){var Ami = "Une bandit ";}
if(Ami == "9"){var Ami = "Un duc ";}
if(Ami == "10"){var Ami = "Une magicienne ";}

	var Faute = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = sa faute ; 2 = votre faute
	var Cause = Math.floor(Math.random() * Math.floor(10))+1;	
if(Faute == "1"){
if(Cause == "1"){var Cause = "qui vous a agressé";}
if(Cause == "2"){var Cause = "qui a causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "qui vous a humilié en publique";}
if(Cause == "4"){var Cause = "qui a causé une malédiction";}
if(Cause == "5"){var Cause = "qui vous a accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "qui a refusé vos avances";}
if(Cause == "7"){var Cause = "qui vous a causé une terrible blessure";}
if(Cause == "8"){var Cause = "qui vous fait chanter";}
if(Cause == "9"){var Cause = "qui a déjoué vos plans";}
if(Cause == "10"){var Cause = "qui a causé une attaque de monstres";}
}
else{
if(Cause == "1"){var Cause = "que vous avez agressé";}
if(Cause == "2"){var Cause = "à qui vous avez causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "que vous avez humilié en publique";}
if(Cause == "4"){var Cause = "à qui vous avez causé une malédiction";}
if(Cause == "5"){var Cause = "que vous avez accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "à qui vous avez refusé ses avances";}
if(Cause == "7"){var Cause = "à qui vous avez causé une terrible blessure";}
if(Cause == "8"){var Cause = "que vous faites chanter";}
if(Cause == "9"){var Cause = "à qui vous avez déjoué ses plans";}
if(Cause == "10"){var Cause = "à qui vous avez causé une attaque de monstres";}
}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

	var Chance_aff = "<b>Ennemie :</b> "+Ami+Cause+". Attention, son pouvoir est de "+Close+"/10";

}

}

	var EV_2 = Math.floor(Math.random() * Math.floor(10))+1;
// Evénement 1 : 1-4 Fortune or Misfortune ; 5-7 Allies and Enemies ; 8-10 Romance	

if(EV_2 < "5"){
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Forturne ; 2 = Inforturne
		
	if(Chance == "1"){
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff2 = "<b>Jackpot :</b> un événement majeur ou un coup de chance vous a apporté "+Argent+" couronnes !";}
		if(Forturne == "2"){var Chance_aff2 = "<b>Enseignement :</b> vous vous êtes entraîné avec un enseignant. Gagnez +1 dans n'importe quelle compétence INT ou commencez une nouvelle compétence INT à +2.";}
		if(Forturne == "3"){var Chance_aff2 = "<b>Remerciement :</b> quelque chose que vous avez fait vous a valu une faveur d'un noble / noble.";}
		if(Forturne == "4"){var Chance_aff2 = "<b>Enseignement de combat :</b> vous vous êtes entraîné avec un soldat. Gagnez +1 dans n'importe quelle compétence de combat ou commencez une nouvelle compétence de combat à +2.";}
		if(Forturne == "5"){var Chance_aff2 = "<b>Remerciement :</b> vous avez rencontré un sorceleur à un moment donné et avez réussi à en obtenir une faveur.";}
		if(Forturne == "6"){var Chance_aff2 = "<b>Gang :</b> vous êtes tombé sur un gang de bandits. Une fois par mois, vous pouvez demander une faveur à ces bandits.";}
		if(Forturne == "7"){
			var Animal = Math.floor(Math.random() * Math.floor(10))+1;
			if(Animal < "8"){var Animal = "chien";}
			else{var Animal = "loup";}
			var Chance_aff2 = "<b>Domptage :</b> vous avez apprivoisé un "+Animal+" que vous avez rencontré dans la nature.";}
		if(Forturne == "8"){var Chance_aff2 = "<b>Remerciement :</b> vous avez réussi à obtenir 1 faveur d'un puissant mage que vous avez aidé.";}
		if(Forturne == "9"){var Chance_aff2 = "<b>Béni par un prêtre :</b> on vous a donné un symbole sacré que vous pouvez montrer aux gens de cette religion pour gagner un +2 au Charisme avec eux.";}
		if(Forturne == "10"){var Chance_aff2 = "<b>Chevalier :</b> vous avez été fait chevalier pour acte valeureux dans votre royaume. Dans ce royaume, vous gagnez +2 en réputation et êtes reconnu comme chevalier.";}
	}
	else{
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff2 = "<b>Dette :</b> vous vous êtes profondément endetté à hauteur de "+Argent+" couronnes !";}
		if(Forturne == "2"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Chance_aff2 = "<b>Emprisonnement :</b> quelque chose que vous avez fait (ou une fausse accusation) vous a fait emprisonner pendant "+Argent+" 1d10 mois.";}
		if(Forturne == "3"){var Chance_aff2 = "<b>Dépendance :</b> vous avez développé une addiction. Vous pouvez la choisir.";}
		if(Forturne == "4"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "6"){var Argent = "Ils sont morts dans un accident.";}
			else if(Argent > "8"){var Argent = "Ils ont été assassinés par des bandits.";}
			else{var Argent = "Ils ont été assassinés par des monstres.";}
			var Chance_aff2 = "<b>Amant, ami ou parent tué :</b> "+Argent;}
		if(Forturne == "5"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "vol.";}
			else if(Argent > "3" && Argent < "6"){var Argent = "meurtre.";}
			else if(Argent > "5" && Argent < "10"){var Argent = "viol.";}
			else{var Argent = "sorcellerie illégale.";}			
			var Chance_aff2 = "<b>Fausse accusation :</b> accusation de "+Argent;}
		if(Forturne == "6"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Ce ne sont que quelques gardes.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "C’est toute une petite ville.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "C’est une grande ville.";}
			else{var Argent = "Tout un royaume est après toi.";}		
			var Chance_aff2 = "<b>Chassé par la loi :</b> "+Argent;}
		if(Forturne == "7"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous êtes victime de chantage.";}
			else if(Argent > "7"){var Argent = "Vous avez été trahi par quelqu'un de très proche de vous.";}
			else{var Argent = "Un secret a été dévoilé.";}		
			var Chance_aff2 = "<b>Trahison :</b> "+Argent;}
		if(Forturne == "8"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "5"){var Argent = "Vous étiez défiguré. Changez votre position sociale en peur.";}
			else if(Argent > "4" && Argent < "7"){var Argent = "Vous avez guéri en 5 mois.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez perdu la mémoire 7 mois cette année-là.";}
			else{var Argent = "Vous souffrez d'horribles cauchemars (7 chances sur 10 à chaque fois que vous dormez).";}
			var Chance_aff2 = "<b>Accident :</b> "+Argent;}
		if(Forturne == "9"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous avez été empoisonné; perdre définitivement 5 PV.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "Vous souffrez de crises d'angoisse et devez effectuer des jets d'étourdissement (tous les 5 tours) en période de stress.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez une psychose majeure. Vous entendez des voix et êtes violent, irrationnel et dépressif. Le GM contrôle ces voix..";}
			else{var Argent = ".";}
			var Chance_aff2 = "<b>Incapacité mentale ou physique :</b> "+Argent;}
		if(Forturne == "10"){var Chance_aff2 = "<b>Maudit :</b> vous avez été maudit. A voir avec le MJ.";}		
}

}
else if(EV_2 > "7"){

	var Chance = Math.floor(Math.random() * Math.floor(10))+1;	
	// 1 A Happy Love aftair ; 2-4 A Romantic Tragedy ; 5-6 A Problematic Love ; 7-10 Whores and Debauchery

if(Chance == "1"){var Chance_aff2 = "<b>Amour parfait :</b> la joie durable et le véritable amour sont une possibilité. Mais ils sont rares. Si vous y parvenez, il est supposé que vous êtes heureux ensemble jusqu'à ce que vous lanciez une autre romance d'un type différent. Ce jet s'applique ensuite à votre état sentimental actuel.";}
else if(Chance > "1" && Chance < "5"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
	
	if(Roll == "1"){var Roll = "Votre amant a été capturé par des bandits il y a quelque temps et est toujours leur captif.";}
	if(Roll == "2"){var Roll = "Votre amant a mystérieusement disparu un jour et vous ne savez pas où ils sont allés.";}
	if(Roll == "3"){var Roll = "Votre amant a été emprisonné ou exilé pour des crimes qu'il n'a peut-être pas commis.";}
	if(Roll == "4"){var Roll = "Votre amant vous a été enlevé par une puissante malédiction.";}
	if(Roll == "5"){var Roll = "Quelque chose s'est passé entre vous et votre amant et vous avez été forcé de les tuer.";}
	if(Roll == "6"){var Roll = "Votre amant s'est suicidé. Vous ne savez peut-être pas pourquoi ils l'ont fait.";}
	if(Roll == "7"){var Roll = "Votre amant a été enlevé par un noble et la prise pour concubine.";}
	if(Roll == "8"){var Roll = "Un rival a volé votre amour.";}
	if(Roll == "9"){var Roll = "Votre amant a été tué par des monstres. Il peut s'agir d'un accident ou prévu.";}
	if(Roll == "10"){var Roll = "Votre amant est un mage, un sorceleur ou un monstre sensible, condamnant la romance.";}
	
	var Chance_aff2 = "<b>Tragédie romantique :</b> "+Roll;
}
else if(Chance > "4" && Chance < "7"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
		
	if(Roll == "1"){var Roll = "La famille ou les amis de votre amant vous détestent et ne tolèrent pas votre romance.";}
	if(Roll == "2"){var Roll = "Votre amoureux travaille comme une pute pour gagner sa vie et refuse de renoncer à son travail.";}
	if(Roll == "3"){var Roll = "Votre amoureux est soumis à une malédiction mineure telle que la paranoïa ou d'horribles cauchemars.";}
	if(Roll == "4"){var Roll = "Votre amant a dormi et a refusé de s'arrêter quand vous l'avez découvert.";}
	if(Roll == "5"){var Roll = "Votre amoureux est incroyablement jaloux et ne supporte pas que vous soyez avec un rival possible.";}
	if(Roll == "6"){var Roll = "Vous vous battez constamment et rien ne peut l'arrêter longtemps. Vous descendez toujours dans des cris.";}
	if(Roll == "7"){var Roll = "Vous êtes en quelque sorte des rivaux professionnels. Vous vous dérobez souvent des clients.";}
	if(Roll == "8"){var Roll = "L'un de vous est humain et l'autre non humain, ce qui rend votre vie difficile.";}
	if(Roll == "9"){var Roll = "Votre amant est déjà marié.";}
	if(Roll == "10"){var Roll = "Vos amis ou votre famille détestent votre amant et ne tolèrent pas votre romance.";}

	var Chance_aff2 = "<b>Amour problématique :</b> "+Roll;
}
else {var Chance_aff2 = "<b>Débauche :</b> vous avez passé votre temps à dormir, à aller aux putes et peut-être à laisser une traînée d'enfants bâtards dans votre sillage si vous ne faisiez pas attention."}
}
else{
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Ami ; 2 = Ennemie
	
if(Chance == "1"){
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un chasseur de primes qui vous a sauvés de quelque chose";}
if(Ami == "2"){var Ami = "Une magicienne que vous avez rencontré dans une taverne";}
if(Ami == "3"){var Ami = "Un mentor qui vous a sauvés de quelque chose";}
if(Ami == "4"){var Ami = "Une amie d'enfance qui vous a engagé pour quelque chose";}
if(Ami == "5"){var Ami = "Un artisan avec qui vous êtiez prisonnés";}
if(Ami == "6"){var Ami = "Une vieille ennemie avec qui Vous avez été forcé de travailler ensemble";}
if(Ami == "7"){var Ami = "Un duc qui vous a engagé pour quelque chose";}
if(Ami == "8"){var Ami = "Une prêtresse que vous avez rencontrés en état d'ébriété";}
if(Ami == "9"){var Ami = "Un soldat que vous avez rencontré en voyageant";}
if(Ami == "10"){var Ami = "Une barde avec qui vous avez combattu ensemble";}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

if(Close < "5"){var Close = "des connaissances";}
else if(Close > "4" && Close < "7"){var Close = "des amis";}
else if(Close > "6" && Close < "9"){var Close = "des amis proches";}
else if(Close == "9"){var Close = "inséparable";}
else{var Close = "lié par serment";}

	var Situation = Math.floor(Math.random() * Math.floor(10))+1;	
if(Situation < "4"){var Situation = "dans les Royaumes du Nord.";}
else if(Situation > "3" && Situation < "7"){var Situation = "dans l'Empire de Nilfgaard.";}
else if(Situation > "6" && Situation < "10"){var Situation = "dans les Terres Ancestrales.";}
else{var Situation = "au-delà des frontières.";}

	var Chance_aff2 = "<b>Allier :</b> "+Ami+", vous êtes "+Close+", il/elle est actuellement "+Situation;
}

else{
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un ancien ami ";}
if(Ami == "2"){var Ami = "Un ancien amour ";}
if(Ami == "3"){var Ami = "Un homme ";}
if(Ami == "4"){var Ami = "Une ennemie d'enfance ";}
if(Ami == "5"){var Ami = "Un cultiste ";}
if(Ami == "6"){var Ami = "Une barde ";}
if(Ami == "7"){var Ami = "Un soldat ";}
if(Ami == "8"){var Ami = "Une bandit ";}
if(Ami == "9"){var Ami = "Un duc ";}
if(Ami == "10"){var Ami = "Une magicienne ";}

	var Faute = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = sa faute ; 2 = votre faute
	var Cause = Math.floor(Math.random() * Math.floor(10))+1;	
if(Faute == "1"){
if(Cause == "1"){var Cause = "qui vous a agressé";}
if(Cause == "2"){var Cause = "qui a causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "qui vous a humilié en publique";}
if(Cause == "4"){var Cause = "qui a causé une malédiction";}
if(Cause == "5"){var Cause = "qui vous a accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "qui a refusé vos avances";}
if(Cause == "7"){var Cause = "qui vous a causé une terrible blessure";}
if(Cause == "8"){var Cause = "qui vous fait chanter";}
if(Cause == "9"){var Cause = "qui a déjoué vos plans";}
if(Cause == "10"){var Cause = "qui a causé une attaque de monstres";}
}
else{
if(Cause == "1"){var Cause = "que vous avez agressé";}
if(Cause == "2"){var Cause = "à qui vous avez causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "que vous avez humilié en publique";}
if(Cause == "4"){var Cause = "à qui vous avez causé une malédiction";}
if(Cause == "5"){var Cause = "que vous avez accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "à qui vous avez refusé ses avances";}
if(Cause == "7"){var Cause = "à qui vous avez causé une terrible blessure";}
if(Cause == "8"){var Cause = "que vous faites chanter";}
if(Cause == "9"){var Cause = "à qui vous avez déjoué ses plans";}
if(Cause == "10"){var Cause = "à qui vous avez causé une attaque de monstres";}
}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

	var Chance_aff2 = "<b>Ennemie :</b> "+Ami+Cause+". Attention, son pouvoir est de "+Close+"/10";

}

}


Events.innerHTML = Chance_aff+"<br>"+Chance_aff2;
}

if(Age == "3"){
	var EV_1 = Math.floor(Math.random() * Math.floor(10))+1;
// Evénement 1 : 1-4 Fortune or Misfortune ; 5-7 Allies and Enemies ; 8-10 Romance	

if(EV_1 < "5"){
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Forturne ; 2 = Inforturne
		
	if(Chance == "1"){
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff = "<b>Jackpot :</b> un événement majeur ou un coup de chance vous a apporté "+Argent+" couronnes !";}
		if(Forturne == "2"){var Chance_aff = "<b>Enseignement :</b> vous vous êtes entraîné avec un enseignant. Gagnez +1 dans n'importe quelle compétence INT ou commencez une nouvelle compétence INT à +2.";}
		if(Forturne == "3"){var Chance_aff = "<b>Remerciement :</b> quelque chose que vous avez fait vous a valu une faveur d'un noble / noble.";}
		if(Forturne == "4"){var Chance_aff = "<b>Enseignement de combat :</b> vous vous êtes entraîné avec un soldat. Gagnez +1 dans n'importe quelle compétence de combat ou commencez une nouvelle compétence de combat à +2.";}
		if(Forturne == "5"){var Chance_aff = "<b>Remerciement :</b> vous avez rencontré un sorceleur à un moment donné et avez réussi à en obtenir une faveur.";}
		if(Forturne == "6"){var Chance_aff = "<b>Gang :</b> vous êtes tombé sur un gang de bandits. Une fois par mois, vous pouvez demander une faveur à ces bandits.";}
		if(Forturne == "7"){
			var Animal = Math.floor(Math.random() * Math.floor(10))+1;
			if(Animal < "8"){var Animal = "chien";}
			else{var Animal = "loup";}
			var Chance_aff = "<b>Domptage :</b> vous avez apprivoisé un "+Animal+" que vous avez rencontré dans la nature.";}
		if(Forturne == "8"){var Chance_aff = "<b>Remerciement :</b> vous avez réussi à obtenir 1 faveur d'un puissant mage que vous avez aidé.";}
		if(Forturne == "9"){var Chance_aff = "<b>Béni par un prêtre :</b> on vous a donné un symbole sacré que vous pouvez montrer aux gens de cette religion pour gagner un +2 au Charisme avec eux.";}
		if(Forturne == "10"){var Chance_aff = "<b>Chevalier :</b> vous avez été fait chevalier pour acte valeureux dans votre royaume. Dans ce royaume, vous gagnez +2 en réputation et êtes reconnu comme chevalier.";}
	}
	else{
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff = "<b>Dette :</b> vous vous êtes profondément endetté à hauteur de "+Argent+" couronnes !";}
		if(Forturne == "2"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Chance_aff = "<b>Emprisonnement :</b> quelque chose que vous avez fait (ou une fausse accusation) vous a fait emprisonner pendant "+Argent+" 1d10 mois.";}
		if(Forturne == "3"){var Chance_aff = "<b>Dépendance :</b> vous avez développé une addiction. Vous pouvez la choisir.";}
		if(Forturne == "4"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "6"){var Argent = "Ils sont morts dans un accident.";}
			else if(Argent > "8"){var Argent = "Ils ont été assassinés par des bandits.";}
			else{var Argent = "Ils ont été assassinés par des monstres.";}
			var Chance_aff = "<b>Amant, ami ou parent tué :</b> "+Argent;}
		if(Forturne == "5"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "vol.";}
			else if(Argent > "3" && Argent < "6"){var Argent = "meurtre.";}
			else if(Argent > "5" && Argent < "10"){var Argent = "viol.";}
			else{var Argent = "sorcellerie illégale.";}			
			var Chance_aff = "<b>Fausse accusation :</b> accusation de "+Argent;}
		if(Forturne == "6"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Ce ne sont que quelques gardes.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "C’est toute une petite ville.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "C’est une grande ville.";}
			else{var Argent = "Tout un royaume est après toi.";}		
			var Chance_aff = "<b>Chassé par la loi :</b> "+Argent;}
		if(Forturne == "7"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous êtes victime de chantage.";}
			else if(Argent > "7"){var Argent = "Vous avez été trahi par quelqu'un de très proche de vous.";}
			else{var Argent = "Un secret a été dévoilé.";}		
			var Chance_aff = "<b>Trahison :</b> "+Argent;}
		if(Forturne == "8"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "5"){var Argent = "Vous étiez défiguré. Changez votre position sociale en peur.";}
			else if(Argent > "4" && Argent < "7"){var Argent = "Vous avez guéri en 5 mois.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez perdu la mémoire 7 mois cette année-là.";}
			else{var Argent = "Vous souffrez d'horribles cauchemars (7 chances sur 10 à chaque fois que vous dormez).";}
			var Chance_aff = "<b>Accident :</b> "+Argent;}
		if(Forturne == "9"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous avez été empoisonné; perdre définitivement 5 PV.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "Vous souffrez de crises d'angoisse et devez effectuer des jets d'étourdissement (tous les 5 tours) en période de stress.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez une psychose majeure. Vous entendez des voix et êtes violent, irrationnel et dépressif. Le GM contrôle ces voix..";}
			else{var Argent = ".";}
			var Chance_aff = "<b>Incapacité mentale ou physique :</b> "+Argent;}
		if(Forturne == "10"){var Chance_aff = "<b>Maudit :</b> vous avez été maudit. A voir avec le MJ.";}		
}

}
else if(EV_1 > "7"){

	var Chance = Math.floor(Math.random() * Math.floor(10))+1;	
	// 1 A Happy Love aftair ; 2-4 A Romantic Tragedy ; 5-6 A Problematic Love ; 7-10 Whores and Debauchery

if(Chance == "1"){var Chance_aff = "<b>Amour parfait :</b> la joie durable et le véritable amour sont une possibilité. Mais ils sont rares. Si vous y parvenez, il est supposé que vous êtes heureux ensemble jusqu'à ce que vous lanciez une autre romance d'un type différent. Ce jet s'applique ensuite à votre état sentimental actuel.";}
else if(Chance > "1" && Chance < "5"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
	
	if(Roll == "1"){var Roll = "Votre amant a été capturé par des bandits il y a quelque temps et est toujours leur captif.";}
	if(Roll == "2"){var Roll = "Votre amant a mystérieusement disparu un jour et vous ne savez pas où ils sont allés.";}
	if(Roll == "3"){var Roll = "Votre amant a été emprisonné ou exilé pour des crimes qu'il n'a peut-être pas commis.";}
	if(Roll == "4"){var Roll = "Votre amant vous a été enlevé par une puissante malédiction.";}
	if(Roll == "5"){var Roll = "Quelque chose s'est passé entre vous et votre amant et vous avez été forcé de les tuer.";}
	if(Roll == "6"){var Roll = "Votre amant s'est suicidé. Vous ne savez peut-être pas pourquoi ils l'ont fait.";}
	if(Roll == "7"){var Roll = "Votre amant a été enlevé par un noble et la prise pour concubine.";}
	if(Roll == "8"){var Roll = "Un rival a volé votre amour.";}
	if(Roll == "9"){var Roll = "Votre amant a été tué par des monstres. Il peut s'agir d'un accident ou prévu.";}
	if(Roll == "10"){var Roll = "Votre amant est un mage, un sorceleur ou un monstre sensible, condamnant la romance.";}
	
	var Chance_aff = "<b>Tragédie romantique :</b> "+Roll;
}
else if(Chance > "4" && Chance < "7"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
		
	if(Roll == "1"){var Roll = "La famille ou les amis de votre amant vous détestent et ne tolèrent pas votre romance.";}
	if(Roll == "2"){var Roll = "Votre amoureux travaille comme une pute pour gagner sa vie et refuse de renoncer à son travail.";}
	if(Roll == "3"){var Roll = "Votre amoureux est soumis à une malédiction mineure telle que la paranoïa ou d'horribles cauchemars.";}
	if(Roll == "4"){var Roll = "Votre amant a dormi et a refusé de s'arrêter quand vous l'avez découvert.";}
	if(Roll == "5"){var Roll = "Votre amoureux est incroyablement jaloux et ne supporte pas que vous soyez avec un rival possible.";}
	if(Roll == "6"){var Roll = "Vous vous battez constamment et rien ne peut l'arrêter longtemps. Vous descendez toujours dans des cris.";}
	if(Roll == "7"){var Roll = "Vous êtes en quelque sorte des rivaux professionnels. Vous vous dérobez souvent des clients.";}
	if(Roll == "8"){var Roll = "L'un de vous est humain et l'autre non humain, ce qui rend votre vie difficile.";}
	if(Roll == "9"){var Roll = "Votre amant est déjà marié.";}
	if(Roll == "10"){var Roll = "Vos amis ou votre famille détestent votre amant et ne tolèrent pas votre romance.";}

	var Chance_aff = "<b>Amour problématique :</b> "+Roll;
}
else {var Chance_aff = "<b>Débauche :</b> vous avez passé votre temps à dormir, à aller aux putes et peut-être à laisser une traînée d'enfants bâtards dans votre sillage si vous ne faisiez pas attention."}
}
else{
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Ami ; 2 = Ennemie
	
if(Chance == "1"){
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un chasseur de primes qui vous a sauvés de quelque chose";}
if(Ami == "2"){var Ami = "Une magicienne que vous avez rencontré dans une taverne";}
if(Ami == "3"){var Ami = "Un mentor qui vous a sauvés de quelque chose";}
if(Ami == "4"){var Ami = "Une amie d'enfance qui vous a engagé pour quelque chose";}
if(Ami == "5"){var Ami = "Un artisan avec qui vous êtiez prisonnés";}
if(Ami == "6"){var Ami = "Une vieille ennemie avec qui Vous avez été forcé de travailler ensemble";}
if(Ami == "7"){var Ami = "Un duc qui vous a engagé pour quelque chose";}
if(Ami == "8"){var Ami = "Une prêtresse que vous avez rencontrés en état d'ébriété";}
if(Ami == "9"){var Ami = "Un soldat que vous avez rencontré en voyageant";}
if(Ami == "10"){var Ami = "Une barde avec qui vous avez combattu ensemble";}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

if(Close < "5"){var Close = "des connaissances";}
else if(Close > "4" && Close < "7"){var Close = "des amis";}
else if(Close > "6" && Close < "9"){var Close = "des amis proches";}
else if(Close == "9"){var Close = "inséparable";}
else{var Close = "lié par serment";}

	var Situation = Math.floor(Math.random() * Math.floor(10))+1;	
if(Situation < "4"){var Situation = "dans les Royaumes du Nord.";}
else if(Situation > "3" && Situation < "7"){var Situation = "dans l'Empire de Nilfgaard.";}
else if(Situation > "6" && Situation < "10"){var Situation = "dans les Terres Ancestrales.";}
else{var Situation = "au-delà des frontières.";}

	var Chance_aff = "<b>Allier :</b> "+Ami+", vous êtes "+Close+", il/elle est actuellement "+Situation;
}

else{
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un ancien ami ";}
if(Ami == "2"){var Ami = "Un ancien amour ";}
if(Ami == "3"){var Ami = "Un homme ";}
if(Ami == "4"){var Ami = "Une ennemie d'enfance ";}
if(Ami == "5"){var Ami = "Un cultiste ";}
if(Ami == "6"){var Ami = "Une barde ";}
if(Ami == "7"){var Ami = "Un soldat ";}
if(Ami == "8"){var Ami = "Une bandit ";}
if(Ami == "9"){var Ami = "Un duc ";}
if(Ami == "10"){var Ami = "Une magicienne ";}

	var Faute = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = sa faute ; 2 = votre faute
	var Cause = Math.floor(Math.random() * Math.floor(10))+1;	
if(Faute == "1"){
if(Cause == "1"){var Cause = "qui vous a agressé";}
if(Cause == "2"){var Cause = "qui a causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "qui vous a humilié en publique";}
if(Cause == "4"){var Cause = "qui a causé une malédiction";}
if(Cause == "5"){var Cause = "qui vous a accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "qui a refusé vos avances";}
if(Cause == "7"){var Cause = "qui vous a causé une terrible blessure";}
if(Cause == "8"){var Cause = "qui vous fait chanter";}
if(Cause == "9"){var Cause = "qui a déjoué vos plans";}
if(Cause == "10"){var Cause = "qui a causé une attaque de monstres";}
}
else{
if(Cause == "1"){var Cause = "que vous avez agressé";}
if(Cause == "2"){var Cause = "à qui vous avez causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "que vous avez humilié en publique";}
if(Cause == "4"){var Cause = "à qui vous avez causé une malédiction";}
if(Cause == "5"){var Cause = "que vous avez accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "à qui vous avez refusé ses avances";}
if(Cause == "7"){var Cause = "à qui vous avez causé une terrible blessure";}
if(Cause == "8"){var Cause = "que vous faites chanter";}
if(Cause == "9"){var Cause = "à qui vous avez déjoué ses plans";}
if(Cause == "10"){var Cause = "à qui vous avez causé une attaque de monstres";}
}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

	var Chance_aff = "<b>Ennemie :</b> "+Ami+Cause+". Attention, son pouvoir est de "+Close+"/10";

}

}

	var EV_2 = Math.floor(Math.random() * Math.floor(10))+1;
// Evénement 1 : 1-4 Fortune or Misfortune ; 5-7 Allies and Enemies ; 8-10 Romance	

if(EV_2 < "5"){
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Forturne ; 2 = Inforturne
		
	if(Chance == "1"){
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff2 = "<b>Jackpot :</b> un événement majeur ou un coup de chance vous a apporté "+Argent+" couronnes !";}
		if(Forturne == "2"){var Chance_aff2 = "<b>Enseignement :</b> vous vous êtes entraîné avec un enseignant. Gagnez +1 dans n'importe quelle compétence INT ou commencez une nouvelle compétence INT à +2.";}
		if(Forturne == "3"){var Chance_aff2 = "<b>Remerciement :</b> quelque chose que vous avez fait vous a valu une faveur d'un noble / noble.";}
		if(Forturne == "4"){var Chance_aff2 = "<b>Enseignement de combat :</b> vous vous êtes entraîné avec un soldat. Gagnez +1 dans n'importe quelle compétence de combat ou commencez une nouvelle compétence de combat à +2.";}
		if(Forturne == "5"){var Chance_aff2 = "<b>Remerciement :</b> vous avez rencontré un sorceleur à un moment donné et avez réussi à en obtenir une faveur.";}
		if(Forturne == "6"){var Chance_aff2 = "<b>Gang :</b> vous êtes tombé sur un gang de bandits. Une fois par mois, vous pouvez demander une faveur à ces bandits.";}
		if(Forturne == "7"){
			var Animal = Math.floor(Math.random() * Math.floor(10))+1;
			if(Animal < "8"){var Animal = "chien";}
			else{var Animal = "loup";}
			var Chance_aff2 = "<b>Domptage :</b> vous avez apprivoisé un "+Animal+" que vous avez rencontré dans la nature.";}
		if(Forturne == "8"){var Chance_aff2 = "<b>Remerciement :</b> vous avez réussi à obtenir 1 faveur d'un puissant mage que vous avez aidé.";}
		if(Forturne == "9"){var Chance_aff2 = "<b>Béni par un prêtre :</b> on vous a donné un symbole sacré que vous pouvez montrer aux gens de cette religion pour gagner un +2 au Charisme avec eux.";}
		if(Forturne == "10"){var Chance_aff2 = "<b>Chevalier :</b> vous avez été fait chevalier pour acte valeureux dans votre royaume. Dans ce royaume, vous gagnez +2 en réputation et êtes reconnu comme chevalier.";}
	}
	else{
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff2 = "<b>Dette :</b> vous vous êtes profondément endetté à hauteur de "+Argent+" couronnes !";}
		if(Forturne == "2"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Chance_aff2 = "<b>Emprisonnement :</b> quelque chose que vous avez fait (ou une fausse accusation) vous a fait emprisonner pendant "+Argent+" 1d10 mois.";}
		if(Forturne == "3"){var Chance_aff2 = "<b>Dépendance :</b> vous avez développé une addiction. Vous pouvez la choisir.";}
		if(Forturne == "4"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "6"){var Argent = "Ils sont morts dans un accident.";}
			else if(Argent > "8"){var Argent = "Ils ont été assassinés par des bandits.";}
			else{var Argent = "Ils ont été assassinés par des monstres.";}
			var Chance_aff2 = "<b>Amant, ami ou parent tué :</b> "+Argent;}
		if(Forturne == "5"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "vol.";}
			else if(Argent > "3" && Argent < "6"){var Argent = "meurtre.";}
			else if(Argent > "5" && Argent < "10"){var Argent = "viol.";}
			else{var Argent = "sorcellerie illégale.";}			
			var Chance_aff2 = "<b>Fausse accusation :</b> accusation de "+Argent;}
		if(Forturne == "6"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Ce ne sont que quelques gardes.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "C’est toute une petite ville.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "C’est une grande ville.";}
			else{var Argent = "Tout un royaume est après toi.";}		
			var Chance_aff2 = "<b>Chassé par la loi :</b> "+Argent;}
		if(Forturne == "7"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous êtes victime de chantage.";}
			else if(Argent > "7"){var Argent = "Vous avez été trahi par quelqu'un de très proche de vous.";}
			else{var Argent = "Un secret a été dévoilé.";}		
			var Chance_aff2 = "<b>Trahison :</b> "+Argent;}
		if(Forturne == "8"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "5"){var Argent = "Vous étiez défiguré. Changez votre position sociale en peur.";}
			else if(Argent > "4" && Argent < "7"){var Argent = "Vous avez guéri en 5 mois.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez perdu la mémoire 7 mois cette année-là.";}
			else{var Argent = "Vous souffrez d'horribles cauchemars (7 chances sur 10 à chaque fois que vous dormez).";}
			var Chance_aff2 = "<b>Accident :</b> "+Argent;}
		if(Forturne == "9"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous avez été empoisonné; perdre définitivement 5 PV.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "Vous souffrez de crises d'angoisse et devez effectuer des jets d'étourdissement (tous les 5 tours) en période de stress.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez une psychose majeure. Vous entendez des voix et êtes violent, irrationnel et dépressif. Le GM contrôle ces voix..";}
			else{var Argent = ".";}
			var Chance_aff2 = "<b>Incapacité mentale ou physique :</b> "+Argent;}
		if(Forturne == "10"){var Chance_aff2 = "<b>Maudit :</b> vous avez été maudit. A voir avec le MJ.";}		
}

}
else if(EV_2 > "7"){

	var Chance = Math.floor(Math.random() * Math.floor(10))+1;	
	// 1 A Happy Love aftair ; 2-4 A Romantic Tragedy ; 5-6 A Problematic Love ; 7-10 Whores and Debauchery

if(Chance == "1"){var Chance_aff2 = "<b>Amour parfait :</b> la joie durable et le véritable amour sont une possibilité. Mais ils sont rares. Si vous y parvenez, il est supposé que vous êtes heureux ensemble jusqu'à ce que vous lanciez une autre romance d'un type différent. Ce jet s'applique ensuite à votre état sentimental actuel.";}
else if(Chance > "1" && Chance < "5"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
	
	if(Roll == "1"){var Roll = "Votre amant a été capturé par des bandits il y a quelque temps et est toujours leur captif.";}
	if(Roll == "2"){var Roll = "Votre amant a mystérieusement disparu un jour et vous ne savez pas où ils sont allés.";}
	if(Roll == "3"){var Roll = "Votre amant a été emprisonné ou exilé pour des crimes qu'il n'a peut-être pas commis.";}
	if(Roll == "4"){var Roll = "Votre amant vous a été enlevé par une puissante malédiction.";}
	if(Roll == "5"){var Roll = "Quelque chose s'est passé entre vous et votre amant et vous avez été forcé de les tuer.";}
	if(Roll == "6"){var Roll = "Votre amant s'est suicidé. Vous ne savez peut-être pas pourquoi ils l'ont fait.";}
	if(Roll == "7"){var Roll = "Votre amant a été enlevé par un noble et la prise pour concubine.";}
	if(Roll == "8"){var Roll = "Un rival a volé votre amour.";}
	if(Roll == "9"){var Roll = "Votre amant a été tué par des monstres. Il peut s'agir d'un accident ou prévu.";}
	if(Roll == "10"){var Roll = "Votre amant est un mage, un sorceleur ou un monstre sensible, condamnant la romance.";}
	
	var Chance_aff2 = "<b>Tragédie romantique :</b> "+Roll;
}
else if(Chance > "4" && Chance < "7"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
		
	if(Roll == "1"){var Roll = "La famille ou les amis de votre amant vous détestent et ne tolèrent pas votre romance.";}
	if(Roll == "2"){var Roll = "Votre amoureux travaille comme une pute pour gagner sa vie et refuse de renoncer à son travail.";}
	if(Roll == "3"){var Roll = "Votre amoureux est soumis à une malédiction mineure telle que la paranoïa ou d'horribles cauchemars.";}
	if(Roll == "4"){var Roll = "Votre amant a dormi et a refusé de s'arrêter quand vous l'avez découvert.";}
	if(Roll == "5"){var Roll = "Votre amoureux est incroyablement jaloux et ne supporte pas que vous soyez avec un rival possible.";}
	if(Roll == "6"){var Roll = "Vous vous battez constamment et rien ne peut l'arrêter longtemps. Vous descendez toujours dans des cris.";}
	if(Roll == "7"){var Roll = "Vous êtes en quelque sorte des rivaux professionnels. Vous vous dérobez souvent des clients.";}
	if(Roll == "8"){var Roll = "L'un de vous est humain et l'autre non humain, ce qui rend votre vie difficile.";}
	if(Roll == "9"){var Roll = "Votre amant est déjà marié.";}
	if(Roll == "10"){var Roll = "Vos amis ou votre famille détestent votre amant et ne tolèrent pas votre romance.";}

	var Chance_aff2 = "<b>Amour problématique :</b> "+Roll;
}
else {var Chance_aff2 = "<b>Débauche :</b> vous avez passé votre temps à dormir, à aller aux putes et peut-être à laisser une traînée d'enfants bâtards dans votre sillage si vous ne faisiez pas attention."}
}
else{
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Ami ; 2 = Ennemie
	
if(Chance == "1"){
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un chasseur de primes qui vous a sauvés de quelque chose";}
if(Ami == "2"){var Ami = "Une magicienne que vous avez rencontré dans une taverne";}
if(Ami == "3"){var Ami = "Un mentor qui vous a sauvés de quelque chose";}
if(Ami == "4"){var Ami = "Une amie d'enfance qui vous a engagé pour quelque chose";}
if(Ami == "5"){var Ami = "Un artisan avec qui vous êtiez prisonnés";}
if(Ami == "6"){var Ami = "Une vieille ennemie avec qui Vous avez été forcé de travailler ensemble";}
if(Ami == "7"){var Ami = "Un duc qui vous a engagé pour quelque chose";}
if(Ami == "8"){var Ami = "Une prêtresse que vous avez rencontrés en état d'ébriété";}
if(Ami == "9"){var Ami = "Un soldat que vous avez rencontré en voyageant";}
if(Ami == "10"){var Ami = "Une barde avec qui vous avez combattu ensemble";}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

if(Close < "5"){var Close = "des connaissances";}
else if(Close > "4" && Close < "7"){var Close = "des amis";}
else if(Close > "6" && Close < "9"){var Close = "des amis proches";}
else if(Close == "9"){var Close = "inséparable";}
else{var Close = "lié par serment";}

	var Situation = Math.floor(Math.random() * Math.floor(10))+1;	
if(Situation < "4"){var Situation = "dans les Royaumes du Nord.";}
else if(Situation > "3" && Situation < "7"){var Situation = "dans l'Empire de Nilfgaard.";}
else if(Situation > "6" && Situation < "10"){var Situation = "dans les Terres Ancestrales.";}
else{var Situation = "au-delà des frontières.";}

	var Chance_aff2 = "<b>Allier :</b> "+Ami+", vous êtes "+Close+", il/elle est actuellement "+Situation;
}

else{
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un ancien ami ";}
if(Ami == "2"){var Ami = "Un ancien amour ";}
if(Ami == "3"){var Ami = "Un homme ";}
if(Ami == "4"){var Ami = "Une ennemie d'enfance ";}
if(Ami == "5"){var Ami = "Un cultiste ";}
if(Ami == "6"){var Ami = "Une barde ";}
if(Ami == "7"){var Ami = "Un soldat ";}
if(Ami == "8"){var Ami = "Une bandit ";}
if(Ami == "9"){var Ami = "Un duc ";}
if(Ami == "10"){var Ami = "Une magicienne ";}

	var Faute = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = sa faute ; 2 = votre faute
	var Cause = Math.floor(Math.random() * Math.floor(10))+1;	
if(Faute == "1"){
if(Cause == "1"){var Cause = "qui vous a agressé";}
if(Cause == "2"){var Cause = "qui a causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "qui vous a humilié en publique";}
if(Cause == "4"){var Cause = "qui a causé une malédiction";}
if(Cause == "5"){var Cause = "qui vous a accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "qui a refusé vos avances";}
if(Cause == "7"){var Cause = "qui vous a causé une terrible blessure";}
if(Cause == "8"){var Cause = "qui vous fait chanter";}
if(Cause == "9"){var Cause = "qui a déjoué vos plans";}
if(Cause == "10"){var Cause = "qui a causé une attaque de monstres";}
}
else{
if(Cause == "1"){var Cause = "que vous avez agressé";}
if(Cause == "2"){var Cause = "à qui vous avez causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "que vous avez humilié en publique";}
if(Cause == "4"){var Cause = "à qui vous avez causé une malédiction";}
if(Cause == "5"){var Cause = "que vous avez accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "à qui vous avez refusé ses avances";}
if(Cause == "7"){var Cause = "à qui vous avez causé une terrible blessure";}
if(Cause == "8"){var Cause = "que vous faites chanter";}
if(Cause == "9"){var Cause = "à qui vous avez déjoué ses plans";}
if(Cause == "10"){var Cause = "à qui vous avez causé une attaque de monstres";}
}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

	var Chance_aff2 = "<b>Ennemie :</b> "+Ami+Cause+". Attention, son pouvoir est de "+Close+"/10";

}

}

	var EV_3 = Math.floor(Math.random() * Math.floor(10))+1;
// Evénement 1 : 1-4 Fortune or Misfortune ; 5-7 Allies and Enemies ; 8-10 Romance	

if(EV_3 < "5"){
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Forturne ; 2 = Inforturne
		
	if(Chance == "1"){
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff3 = "<b>Jackpot :</b> un événement majeur ou un coup de chance vous a apporté "+Argent+" couronnes !";}
		if(Forturne == "2"){var Chance_aff3 = "<b>Enseignement :</b> vous vous êtes entraîné avec un enseignant. Gagnez +1 dans n'importe quelle compétence INT ou commencez une nouvelle compétence INT à +2.";}
		if(Forturne == "3"){var Chance_aff3 = "<b>Remerciement :</b> quelque chose que vous avez fait vous a valu une faveur d'un noble / noble.";}
		if(Forturne == "4"){var Chance_aff3 = "<b>Enseignement de combat :</b> vous vous êtes entraîné avec un soldat. Gagnez +1 dans n'importe quelle compétence de combat ou commencez une nouvelle compétence de combat à +2.";}
		if(Forturne == "5"){var Chance_aff3 = "<b>Remerciement :</b> vous avez rencontré un sorceleur à un moment donné et avez réussi à en obtenir une faveur.";}
		if(Forturne == "6"){var Chance_aff3 = "<b>Gang :</b> vous êtes tombé sur un gang de bandits. Une fois par mois, vous pouvez demander une faveur à ces bandits.";}
		if(Forturne == "7"){
			var Animal = Math.floor(Math.random() * Math.floor(10))+1;
			if(Animal < "8"){var Animal = "chien";}
			else{var Animal = "loup";}
			var Chance_aff3 = "<b>Domptage :</b> vous avez apprivoisé un "+Animal+" que vous avez rencontré dans la nature.";}
		if(Forturne == "8"){var Chance_aff3 = "<b>Remerciement :</b> vous avez réussi à obtenir 1 faveur d'un puissant mage que vous avez aidé.";}
		if(Forturne == "9"){var Chance_aff3 = "<b>Béni par un prêtre :</b> on vous a donné un symbole sacré que vous pouvez montrer aux gens de cette religion pour gagner un +2 au Charisme avec eux.";}
		if(Forturne == "10"){var Chance_aff3 = "<b>Chevalier :</b> vous avez été fait chevalier pour acte valeureux dans votre royaume. Dans ce royaume, vous gagnez +2 en réputation et êtes reconnu comme chevalier.";}
	}
	else{
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff3 = "<b>Dette :</b> vous vous êtes profondément endetté à hauteur de "+Argent+" couronnes !";}
		if(Forturne == "2"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Chance_aff3 = "<b>Emprisonnement :</b> quelque chose que vous avez fait (ou une fausse accusation) vous a fait emprisonner pendant "+Argent+" 1d10 mois.";}
		if(Forturne == "3"){var Chance_aff3 = "<b>Dépendance :</b> vous avez développé une addiction. Vous pouvez la choisir.";}
		if(Forturne == "4"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "6"){var Argent = "Ils sont morts dans un accident.";}
			else if(Argent > "8"){var Argent = "Ils ont été assassinés par des bandits.";}
			else{var Argent = "Ils ont été assassinés par des monstres.";}
			var Chance_aff3 = "<b>Amant, ami ou parent tué :</b> "+Argent;}
		if(Forturne == "5"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "vol.";}
			else if(Argent > "3" && Argent < "6"){var Argent = "meurtre.";}
			else if(Argent > "5" && Argent < "10"){var Argent = "viol.";}
			else{var Argent = "sorcellerie illégale.";}			
			var Chance_aff3 = "<b>Fausse accusation :</b> accusation de "+Argent;}
		if(Forturne == "6"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Ce ne sont que quelques gardes.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "C’est toute une petite ville.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "C’est une grande ville.";}
			else{var Argent = "Tout un royaume est après toi.";}		
			var Chance_aff3 = "<b>Chassé par la loi :</b> "+Argent;}
		if(Forturne == "7"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous êtes victime de chantage.";}
			else if(Argent > "7"){var Argent = "Vous avez été trahi par quelqu'un de très proche de vous.";}
			else{var Argent = "Un secret a été dévoilé.";}		
			var Chance_aff3 = "<b>Trahison :</b> "+Argent;}
		if(Forturne == "8"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "5"){var Argent = "Vous étiez défiguré. Changez votre position sociale en peur.";}
			else if(Argent > "4" && Argent < "7"){var Argent = "Vous avez guéri en 5 mois.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez perdu la mémoire 7 mois cette année-là.";}
			else{var Argent = "Vous souffrez d'horribles cauchemars (7 chances sur 10 à chaque fois que vous dormez).";}
			var Chance_aff3 = "<b>Accident :</b> "+Argent;}
		if(Forturne == "9"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous avez été empoisonné; perdre définitivement 5 PV.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "Vous souffrez de crises d'angoisse et devez effectuer des jets d'étourdissement (tous les 5 tours) en période de stress.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez une psychose majeure. Vous entendez des voix et êtes violent, irrationnel et dépressif. Le GM contrôle ces voix..";}
			else{var Argent = ".";}
			var Chance_aff3 = "<b>Incapacité mentale ou physique :</b> "+Argent;}
		if(Forturne == "10"){var Chance_aff3 = "<b>Maudit :</b> vous avez été maudit. A voir avec le MJ.";}		
}

}
else if(EV_3 > "7"){

	var Chance = Math.floor(Math.random() * Math.floor(10))+1;	
	// 1 A Happy Love aftair ; 2-4 A Romantic Tragedy ; 5-6 A Problematic Love ; 7-10 Whores and Debauchery

if(Chance == "1"){var Chance_aff3 = "<b>Amour parfait :</b> la joie durable et le véritable amour sont une possibilité. Mais ils sont rares. Si vous y parvenez, il est supposé que vous êtes heureux ensemble jusqu'à ce que vous lanciez une autre romance d'un type différent. Ce jet s'applique ensuite à votre état sentimental actuel.";}
else if(Chance > "1" && Chance < "5"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
	
	if(Roll == "1"){var Roll = "Votre amant a été capturé par des bandits il y a quelque temps et est toujours leur captif.";}
	if(Roll == "2"){var Roll = "Votre amant a mystérieusement disparu un jour et vous ne savez pas où ils sont allés.";}
	if(Roll == "3"){var Roll = "Votre amant a été emprisonné ou exilé pour des crimes qu'il n'a peut-être pas commis.";}
	if(Roll == "4"){var Roll = "Votre amant vous a été enlevé par une puissante malédiction.";}
	if(Roll == "5"){var Roll = "Quelque chose s'est passé entre vous et votre amant et vous avez été forcé de les tuer.";}
	if(Roll == "6"){var Roll = "Votre amant s'est suicidé. Vous ne savez peut-être pas pourquoi ils l'ont fait.";}
	if(Roll == "7"){var Roll = "Votre amant a été enlevé par un noble et la prise pour concubine.";}
	if(Roll == "8"){var Roll = "Un rival a volé votre amour.";}
	if(Roll == "9"){var Roll = "Votre amant a été tué par des monstres. Il peut s'agir d'un accident ou prévu.";}
	if(Roll == "10"){var Roll = "Votre amant est un mage, un sorceleur ou un monstre sensible, condamnant la romance.";}
	
	var Chance_aff3 = "<b>Tragédie romantique :</b> "+Roll;
}
else if(Chance > "4" && Chance < "7"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
		
	if(Roll == "1"){var Roll = "La famille ou les amis de votre amant vous détestent et ne tolèrent pas votre romance.";}
	if(Roll == "2"){var Roll = "Votre amoureux travaille comme une pute pour gagner sa vie et refuse de renoncer à son travail.";}
	if(Roll == "3"){var Roll = "Votre amoureux est soumis à une malédiction mineure telle que la paranoïa ou d'horribles cauchemars.";}
	if(Roll == "4"){var Roll = "Votre amant a dormi et a refusé de s'arrêter quand vous l'avez découvert.";}
	if(Roll == "5"){var Roll = "Votre amoureux est incroyablement jaloux et ne supporte pas que vous soyez avec un rival possible.";}
	if(Roll == "6"){var Roll = "Vous vous battez constamment et rien ne peut l'arrêter longtemps. Vous descendez toujours dans des cris.";}
	if(Roll == "7"){var Roll = "Vous êtes en quelque sorte des rivaux professionnels. Vous vous dérobez souvent des clients.";}
	if(Roll == "8"){var Roll = "L'un de vous est humain et l'autre non humain, ce qui rend votre vie difficile.";}
	if(Roll == "9"){var Roll = "Votre amant est déjà marié.";}
	if(Roll == "10"){var Roll = "Vos amis ou votre famille détestent votre amant et ne tolèrent pas votre romance.";}

	var Chance_aff3 = "<b>Amour problématique :</b> "+Roll;
}
else {var Chance_aff3 = "<b>Débauche :</b> vous avez passé votre temps à dormir, à aller aux putes et peut-être à laisser une traînée d'enfants bâtards dans votre sillage si vous ne faisiez pas attention."}
}
else{
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Ami ; 2 = Ennemie
	
if(Chance == "1"){
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un chasseur de primes qui vous a sauvés de quelque chose";}
if(Ami == "2"){var Ami = "Une magicienne que vous avez rencontré dans une taverne";}
if(Ami == "3"){var Ami = "Un mentor qui vous a sauvés de quelque chose";}
if(Ami == "4"){var Ami = "Une amie d'enfance qui vous a engagé pour quelque chose";}
if(Ami == "5"){var Ami = "Un artisan avec qui vous êtiez prisonnés";}
if(Ami == "6"){var Ami = "Une vieille ennemie avec qui Vous avez été forcé de travailler ensemble";}
if(Ami == "7"){var Ami = "Un duc qui vous a engagé pour quelque chose";}
if(Ami == "8"){var Ami = "Une prêtresse que vous avez rencontrés en état d'ébriété";}
if(Ami == "9"){var Ami = "Un soldat que vous avez rencontré en voyageant";}
if(Ami == "10"){var Ami = "Une barde avec qui vous avez combattu ensemble";}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

if(Close < "5"){var Close = "des connaissances";}
else if(Close > "4" && Close < "7"){var Close = "des amis";}
else if(Close > "6" && Close < "9"){var Close = "des amis proches";}
else if(Close == "9"){var Close = "inséparable";}
else{var Close = "lié par serment";}

	var Situation = Math.floor(Math.random() * Math.floor(10))+1;	
if(Situation < "4"){var Situation = "dans les Royaumes du Nord.";}
else if(Situation > "3" && Situation < "7"){var Situation = "dans l'Empire de Nilfgaard.";}
else if(Situation > "6" && Situation < "10"){var Situation = "dans les Terres Ancestrales.";}
else{var Situation = "au-delà des frontières.";}

	var Chance_aff3 = "<b>Allier :</b> "+Ami+", vous êtes "+Close+", il/elle est actuellement "+Situation;
}

else{
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un ancien ami ";}
if(Ami == "2"){var Ami = "Un ancien amour ";}
if(Ami == "3"){var Ami = "Un homme ";}
if(Ami == "4"){var Ami = "Une ennemie d'enfance ";}
if(Ami == "5"){var Ami = "Un cultiste ";}
if(Ami == "6"){var Ami = "Une barde ";}
if(Ami == "7"){var Ami = "Un soldat ";}
if(Ami == "8"){var Ami = "Une bandit ";}
if(Ami == "9"){var Ami = "Un duc ";}
if(Ami == "10"){var Ami = "Une magicienne ";}

	var Faute = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = sa faute ; 2 = votre faute
	var Cause = Math.floor(Math.random() * Math.floor(10))+1;	
if(Faute == "1"){
if(Cause == "1"){var Cause = "qui vous a agressé";}
if(Cause == "2"){var Cause = "qui a causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "qui vous a humilié en publique";}
if(Cause == "4"){var Cause = "qui a causé une malédiction";}
if(Cause == "5"){var Cause = "qui vous a accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "qui a refusé vos avances";}
if(Cause == "7"){var Cause = "qui vous a causé une terrible blessure";}
if(Cause == "8"){var Cause = "qui vous fait chanter";}
if(Cause == "9"){var Cause = "qui a déjoué vos plans";}
if(Cause == "10"){var Cause = "qui a causé une attaque de monstres";}
}
else{
if(Cause == "1"){var Cause = "que vous avez agressé";}
if(Cause == "2"){var Cause = "à qui vous avez causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "que vous avez humilié en publique";}
if(Cause == "4"){var Cause = "à qui vous avez causé une malédiction";}
if(Cause == "5"){var Cause = "que vous avez accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "à qui vous avez refusé ses avances";}
if(Cause == "7"){var Cause = "à qui vous avez causé une terrible blessure";}
if(Cause == "8"){var Cause = "que vous faites chanter";}
if(Cause == "9"){var Cause = "à qui vous avez déjoué ses plans";}
if(Cause == "10"){var Cause = "à qui vous avez causé une attaque de monstres";}
}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

	var Chance_aff3 = "<b>Ennemie :</b> "+Ami+Cause+". Attention, son pouvoir est de "+Close+"/10";

}

}


Events.innerHTML = Chance_aff+"<br>"+Chance_aff2+"<br>"+Chance_aff3;
}

if(Age == "4"){
	var EV_1 = Math.floor(Math.random() * Math.floor(10))+1;
// Evénement 1 : 1-4 Fortune or Misfortune ; 5-7 Allies and Enemies ; 8-10 Romance	

if(EV_1 < "5"){
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Forturne ; 2 = Inforturne
		
	if(Chance == "1"){
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff = "<b>Jackpot :</b> un événement majeur ou un coup de chance vous a apporté "+Argent+" couronnes !";}
		if(Forturne == "2"){var Chance_aff = "<b>Enseignement :</b> vous vous êtes entraîné avec un enseignant. Gagnez +1 dans n'importe quelle compétence INT ou commencez une nouvelle compétence INT à +2.";}
		if(Forturne == "3"){var Chance_aff = "<b>Remerciement :</b> quelque chose que vous avez fait vous a valu une faveur d'un noble / noble.";}
		if(Forturne == "4"){var Chance_aff = "<b>Enseignement de combat :</b> vous vous êtes entraîné avec un soldat. Gagnez +1 dans n'importe quelle compétence de combat ou commencez une nouvelle compétence de combat à +2.";}
		if(Forturne == "5"){var Chance_aff = "<b>Remerciement :</b> vous avez rencontré un sorceleur à un moment donné et avez réussi à en obtenir une faveur.";}
		if(Forturne == "6"){var Chance_aff = "<b>Gang :</b> vous êtes tombé sur un gang de bandits. Une fois par mois, vous pouvez demander une faveur à ces bandits.";}
		if(Forturne == "7"){
			var Animal = Math.floor(Math.random() * Math.floor(10))+1;
			if(Animal < "8"){var Animal = "chien";}
			else{var Animal = "loup";}
			var Chance_aff = "<b>Domptage :</b> vous avez apprivoisé un "+Animal+" que vous avez rencontré dans la nature.";}
		if(Forturne == "8"){var Chance_aff = "<b>Remerciement :</b> vous avez réussi à obtenir 1 faveur d'un puissant mage que vous avez aidé.";}
		if(Forturne == "9"){var Chance_aff = "<b>Béni par un prêtre :</b> on vous a donné un symbole sacré que vous pouvez montrer aux gens de cette religion pour gagner un +2 au Charisme avec eux.";}
		if(Forturne == "10"){var Chance_aff = "<b>Chevalier :</b> vous avez été fait chevalier pour acte valeureux dans votre royaume. Dans ce royaume, vous gagnez +2 en réputation et êtes reconnu comme chevalier.";}
	}
	else{
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff = "<b>Dette :</b> vous vous êtes profondément endetté à hauteur de "+Argent+" couronnes !";}
		if(Forturne == "2"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Chance_aff = "<b>Emprisonnement :</b> quelque chose que vous avez fait (ou une fausse accusation) vous a fait emprisonner pendant "+Argent+" 1d10 mois.";}
		if(Forturne == "3"){var Chance_aff = "<b>Dépendance :</b> vous avez développé une addiction. Vous pouvez la choisir.";}
		if(Forturne == "4"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "6"){var Argent = "Ils sont morts dans un accident.";}
			else if(Argent > "8"){var Argent = "Ils ont été assassinés par des bandits.";}
			else{var Argent = "Ils ont été assassinés par des monstres.";}
			var Chance_aff = "<b>Amant, ami ou parent tué :</b> "+Argent;}
		if(Forturne == "5"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "vol.";}
			else if(Argent > "3" && Argent < "6"){var Argent = "meurtre.";}
			else if(Argent > "5" && Argent < "10"){var Argent = "viol.";}
			else{var Argent = "sorcellerie illégale.";}			
			var Chance_aff = "<b>Fausse accusation :</b> accusation de "+Argent;}
		if(Forturne == "6"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Ce ne sont que quelques gardes.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "C’est toute une petite ville.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "C’est une grande ville.";}
			else{var Argent = "Tout un royaume est après toi.";}		
			var Chance_aff = "<b>Chassé par la loi :</b> "+Argent;}
		if(Forturne == "7"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous êtes victime de chantage.";}
			else if(Argent > "7"){var Argent = "Vous avez été trahi par quelqu'un de très proche de vous.";}
			else{var Argent = "Un secret a été dévoilé.";}		
			var Chance_aff = "<b>Trahison :</b> "+Argent;}
		if(Forturne == "8"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "5"){var Argent = "Vous étiez défiguré. Changez votre position sociale en peur.";}
			else if(Argent > "4" && Argent < "7"){var Argent = "Vous avez guéri en 5 mois.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez perdu la mémoire 7 mois cette année-là.";}
			else{var Argent = "Vous souffrez d'horribles cauchemars (7 chances sur 10 à chaque fois que vous dormez).";}
			var Chance_aff = "<b>Accident :</b> "+Argent;}
		if(Forturne == "9"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous avez été empoisonné; perdre définitivement 5 PV.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "Vous souffrez de crises d'angoisse et devez effectuer des jets d'étourdissement (tous les 5 tours) en période de stress.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez une psychose majeure. Vous entendez des voix et êtes violent, irrationnel et dépressif. Le GM contrôle ces voix..";}
			else{var Argent = ".";}
			var Chance_aff = "<b>Incapacité mentale ou physique :</b> "+Argent;}
		if(Forturne == "10"){var Chance_aff = "<b>Maudit :</b> vous avez été maudit. A voir avec le MJ.";}		
}

}
else if(EV_1 > "7"){

	var Chance = Math.floor(Math.random() * Math.floor(10))+1;	
	// 1 A Happy Love aftair ; 2-4 A Romantic Tragedy ; 5-6 A Problematic Love ; 7-10 Whores and Debauchery

if(Chance == "1"){var Chance_aff = "<b>Amour parfait :</b> la joie durable et le véritable amour sont une possibilité. Mais ils sont rares. Si vous y parvenez, il est supposé que vous êtes heureux ensemble jusqu'à ce que vous lanciez une autre romance d'un type différent. Ce jet s'applique ensuite à votre état sentimental actuel.";}
else if(Chance > "1" && Chance < "5"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
	
	if(Roll == "1"){var Roll = "Votre amant a été capturé par des bandits il y a quelque temps et est toujours leur captif.";}
	if(Roll == "2"){var Roll = "Votre amant a mystérieusement disparu un jour et vous ne savez pas où ils sont allés.";}
	if(Roll == "3"){var Roll = "Votre amant a été emprisonné ou exilé pour des crimes qu'il n'a peut-être pas commis.";}
	if(Roll == "4"){var Roll = "Votre amant vous a été enlevé par une puissante malédiction.";}
	if(Roll == "5"){var Roll = "Quelque chose s'est passé entre vous et votre amant et vous avez été forcé de les tuer.";}
	if(Roll == "6"){var Roll = "Votre amant s'est suicidé. Vous ne savez peut-être pas pourquoi ils l'ont fait.";}
	if(Roll == "7"){var Roll = "Votre amant a été enlevé par un noble et la prise pour concubine.";}
	if(Roll == "8"){var Roll = "Un rival a volé votre amour.";}
	if(Roll == "9"){var Roll = "Votre amant a été tué par des monstres. Il peut s'agir d'un accident ou prévu.";}
	if(Roll == "10"){var Roll = "Votre amant est un mage, un sorceleur ou un monstre sensible, condamnant la romance.";}
	
	var Chance_aff = "<b>Tragédie romantique :</b> "+Roll;
}
else if(Chance > "4" && Chance < "7"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
		
	if(Roll == "1"){var Roll = "La famille ou les amis de votre amant vous détestent et ne tolèrent pas votre romance.";}
	if(Roll == "2"){var Roll = "Votre amoureux travaille comme une pute pour gagner sa vie et refuse de renoncer à son travail.";}
	if(Roll == "3"){var Roll = "Votre amoureux est soumis à une malédiction mineure telle que la paranoïa ou d'horribles cauchemars.";}
	if(Roll == "4"){var Roll = "Votre amant a dormi et a refusé de s'arrêter quand vous l'avez découvert.";}
	if(Roll == "5"){var Roll = "Votre amoureux est incroyablement jaloux et ne supporte pas que vous soyez avec un rival possible.";}
	if(Roll == "6"){var Roll = "Vous vous battez constamment et rien ne peut l'arrêter longtemps. Vous descendez toujours dans des cris.";}
	if(Roll == "7"){var Roll = "Vous êtes en quelque sorte des rivaux professionnels. Vous vous dérobez souvent des clients.";}
	if(Roll == "8"){var Roll = "L'un de vous est humain et l'autre non humain, ce qui rend votre vie difficile.";}
	if(Roll == "9"){var Roll = "Votre amant est déjà marié.";}
	if(Roll == "10"){var Roll = "Vos amis ou votre famille détestent votre amant et ne tolèrent pas votre romance.";}

	var Chance_aff = "<b>Amour problématique :</b> "+Roll;
}
else {var Chance_aff = "<b>Débauche :</b> vous avez passé votre temps à dormir, à aller aux putes et peut-être à laisser une traînée d'enfants bâtards dans votre sillage si vous ne faisiez pas attention."}
}
else{
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Ami ; 2 = Ennemie
	
if(Chance == "1"){
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un chasseur de primes qui vous a sauvés de quelque chose";}
if(Ami == "2"){var Ami = "Une magicienne que vous avez rencontré dans une taverne";}
if(Ami == "3"){var Ami = "Un mentor qui vous a sauvés de quelque chose";}
if(Ami == "4"){var Ami = "Une amie d'enfance qui vous a engagé pour quelque chose";}
if(Ami == "5"){var Ami = "Un artisan avec qui vous êtiez prisonnés";}
if(Ami == "6"){var Ami = "Une vieille ennemie avec qui Vous avez été forcé de travailler ensemble";}
if(Ami == "7"){var Ami = "Un duc qui vous a engagé pour quelque chose";}
if(Ami == "8"){var Ami = "Une prêtresse que vous avez rencontrés en état d'ébriété";}
if(Ami == "9"){var Ami = "Un soldat que vous avez rencontré en voyageant";}
if(Ami == "10"){var Ami = "Une barde avec qui vous avez combattu ensemble";}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

if(Close < "5"){var Close = "des connaissances";}
else if(Close > "4" && Close < "7"){var Close = "des amis";}
else if(Close > "6" && Close < "9"){var Close = "des amis proches";}
else if(Close == "9"){var Close = "inséparable";}
else{var Close = "lié par serment";}

	var Situation = Math.floor(Math.random() * Math.floor(10))+1;	
if(Situation < "4"){var Situation = "dans les Royaumes du Nord.";}
else if(Situation > "3" && Situation < "7"){var Situation = "dans l'Empire de Nilfgaard.";}
else if(Situation > "6" && Situation < "10"){var Situation = "dans les Terres Ancestrales.";}
else{var Situation = "au-delà des frontières.";}

	var Chance_aff = "<b>Allier :</b> "+Ami+", vous êtes "+Close+", il/elle est actuellement "+Situation;
}

else{
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un ancien ami ";}
if(Ami == "2"){var Ami = "Un ancien amour ";}
if(Ami == "3"){var Ami = "Un homme ";}
if(Ami == "4"){var Ami = "Une ennemie d'enfance ";}
if(Ami == "5"){var Ami = "Un cultiste ";}
if(Ami == "6"){var Ami = "Une barde ";}
if(Ami == "7"){var Ami = "Un soldat ";}
if(Ami == "8"){var Ami = "Une bandit ";}
if(Ami == "9"){var Ami = "Un duc ";}
if(Ami == "10"){var Ami = "Une magicienne ";}

	var Faute = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = sa faute ; 2 = votre faute
	var Cause = Math.floor(Math.random() * Math.floor(10))+1;	
if(Faute == "1"){
if(Cause == "1"){var Cause = "qui vous a agressé";}
if(Cause == "2"){var Cause = "qui a causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "qui vous a humilié en publique";}
if(Cause == "4"){var Cause = "qui a causé une malédiction";}
if(Cause == "5"){var Cause = "qui vous a accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "qui a refusé vos avances";}
if(Cause == "7"){var Cause = "qui vous a causé une terrible blessure";}
if(Cause == "8"){var Cause = "qui vous fait chanter";}
if(Cause == "9"){var Cause = "qui a déjoué vos plans";}
if(Cause == "10"){var Cause = "qui a causé une attaque de monstres";}
}
else{
if(Cause == "1"){var Cause = "que vous avez agressé";}
if(Cause == "2"){var Cause = "à qui vous avez causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "que vous avez humilié en publique";}
if(Cause == "4"){var Cause = "à qui vous avez causé une malédiction";}
if(Cause == "5"){var Cause = "que vous avez accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "à qui vous avez refusé ses avances";}
if(Cause == "7"){var Cause = "à qui vous avez causé une terrible blessure";}
if(Cause == "8"){var Cause = "que vous faites chanter";}
if(Cause == "9"){var Cause = "à qui vous avez déjoué ses plans";}
if(Cause == "10"){var Cause = "à qui vous avez causé une attaque de monstres";}
}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

	var Chance_aff = "<b>Ennemie :</b> "+Ami+Cause+". Attention, son pouvoir est de "+Close+"/10";

}

}

	var EV_2 = Math.floor(Math.random() * Math.floor(10))+1;
// Evénement 1 : 1-4 Fortune or Misfortune ; 5-7 Allies and Enemies ; 8-10 Romance	

if(EV_2 < "5"){
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Forturne ; 2 = Inforturne
		
	if(Chance == "1"){
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff2 = "<b>Jackpot :</b> un événement majeur ou un coup de chance vous a apporté "+Argent+" couronnes !";}
		if(Forturne == "2"){var Chance_aff2 = "<b>Enseignement :</b> vous vous êtes entraîné avec un enseignant. Gagnez +1 dans n'importe quelle compétence INT ou commencez une nouvelle compétence INT à +2.";}
		if(Forturne == "3"){var Chance_aff2 = "<b>Remerciement :</b> quelque chose que vous avez fait vous a valu une faveur d'un noble / noble.";}
		if(Forturne == "4"){var Chance_aff2 = "<b>Enseignement de combat :</b> vous vous êtes entraîné avec un soldat. Gagnez +1 dans n'importe quelle compétence de combat ou commencez une nouvelle compétence de combat à +2.";}
		if(Forturne == "5"){var Chance_aff2 = "<b>Remerciement :</b> vous avez rencontré un sorceleur à un moment donné et avez réussi à en obtenir une faveur.";}
		if(Forturne == "6"){var Chance_aff2 = "<b>Gang :</b> vous êtes tombé sur un gang de bandits. Une fois par mois, vous pouvez demander une faveur à ces bandits.";}
		if(Forturne == "7"){
			var Animal = Math.floor(Math.random() * Math.floor(10))+1;
			if(Animal < "8"){var Animal = "chien";}
			else{var Animal = "loup";}
			var Chance_aff2 = "<b>Domptage :</b> vous avez apprivoisé un "+Animal+" que vous avez rencontré dans la nature.";}
		if(Forturne == "8"){var Chance_aff2 = "<b>Remerciement :</b> vous avez réussi à obtenir 1 faveur d'un puissant mage que vous avez aidé.";}
		if(Forturne == "9"){var Chance_aff2 = "<b>Béni par un prêtre :</b> on vous a donné un symbole sacré que vous pouvez montrer aux gens de cette religion pour gagner un +2 au Charisme avec eux.";}
		if(Forturne == "10"){var Chance_aff2 = "<b>Chevalier :</b> vous avez été fait chevalier pour acte valeureux dans votre royaume. Dans ce royaume, vous gagnez +2 en réputation et êtes reconnu comme chevalier.";}
	}
	else{
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff2 = "<b>Dette :</b> vous vous êtes profondément endetté à hauteur de "+Argent+" couronnes !";}
		if(Forturne == "2"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Chance_aff2 = "<b>Emprisonnement :</b> quelque chose que vous avez fait (ou une fausse accusation) vous a fait emprisonner pendant "+Argent+" 1d10 mois.";}
		if(Forturne == "3"){var Chance_aff2 = "<b>Dépendance :</b> vous avez développé une addiction. Vous pouvez la choisir.";}
		if(Forturne == "4"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "6"){var Argent = "Ils sont morts dans un accident.";}
			else if(Argent > "8"){var Argent = "Ils ont été assassinés par des bandits.";}
			else{var Argent = "Ils ont été assassinés par des monstres.";}
			var Chance_aff2 = "<b>Amant, ami ou parent tué :</b> "+Argent;}
		if(Forturne == "5"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "vol.";}
			else if(Argent > "3" && Argent < "6"){var Argent = "meurtre.";}
			else if(Argent > "5" && Argent < "10"){var Argent = "viol.";}
			else{var Argent = "sorcellerie illégale.";}			
			var Chance_aff2 = "<b>Fausse accusation :</b> accusation de "+Argent;}
		if(Forturne == "6"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Ce ne sont que quelques gardes.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "C’est toute une petite ville.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "C’est une grande ville.";}
			else{var Argent = "Tout un royaume est après toi.";}		
			var Chance_aff2 = "<b>Chassé par la loi :</b> "+Argent;}
		if(Forturne == "7"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous êtes victime de chantage.";}
			else if(Argent > "7"){var Argent = "Vous avez été trahi par quelqu'un de très proche de vous.";}
			else{var Argent = "Un secret a été dévoilé.";}		
			var Chance_aff2 = "<b>Trahison :</b> "+Argent;}
		if(Forturne == "8"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "5"){var Argent = "Vous étiez défiguré. Changez votre position sociale en peur.";}
			else if(Argent > "4" && Argent < "7"){var Argent = "Vous avez guéri en 5 mois.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez perdu la mémoire 7 mois cette année-là.";}
			else{var Argent = "Vous souffrez d'horribles cauchemars (7 chances sur 10 à chaque fois que vous dormez).";}
			var Chance_aff2 = "<b>Accident :</b> "+Argent;}
		if(Forturne == "9"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous avez été empoisonné; perdre définitivement 5 PV.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "Vous souffrez de crises d'angoisse et devez effectuer des jets d'étourdissement (tous les 5 tours) en période de stress.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez une psychose majeure. Vous entendez des voix et êtes violent, irrationnel et dépressif. Le GM contrôle ces voix..";}
			else{var Argent = ".";}
			var Chance_aff2 = "<b>Incapacité mentale ou physique :</b> "+Argent;}
		if(Forturne == "10"){var Chance_aff2 = "<b>Maudit :</b> vous avez été maudit. A voir avec le MJ.";}		
}

}
else if(EV_2 > "7"){

	var Chance = Math.floor(Math.random() * Math.floor(10))+1;	
	// 1 A Happy Love aftair ; 2-4 A Romantic Tragedy ; 5-6 A Problematic Love ; 7-10 Whores and Debauchery

if(Chance == "1"){var Chance_aff2 = "<b>Amour parfait :</b> la joie durable et le véritable amour sont une possibilité. Mais ils sont rares. Si vous y parvenez, il est supposé que vous êtes heureux ensemble jusqu'à ce que vous lanciez une autre romance d'un type différent. Ce jet s'applique ensuite à votre état sentimental actuel.";}
else if(Chance > "1" && Chance < "5"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
	
	if(Roll == "1"){var Roll = "Votre amant a été capturé par des bandits il y a quelque temps et est toujours leur captif.";}
	if(Roll == "2"){var Roll = "Votre amant a mystérieusement disparu un jour et vous ne savez pas où ils sont allés.";}
	if(Roll == "3"){var Roll = "Votre amant a été emprisonné ou exilé pour des crimes qu'il n'a peut-être pas commis.";}
	if(Roll == "4"){var Roll = "Votre amant vous a été enlevé par une puissante malédiction.";}
	if(Roll == "5"){var Roll = "Quelque chose s'est passé entre vous et votre amant et vous avez été forcé de les tuer.";}
	if(Roll == "6"){var Roll = "Votre amant s'est suicidé. Vous ne savez peut-être pas pourquoi ils l'ont fait.";}
	if(Roll == "7"){var Roll = "Votre amant a été enlevé par un noble et la prise pour concubine.";}
	if(Roll == "8"){var Roll = "Un rival a volé votre amour.";}
	if(Roll == "9"){var Roll = "Votre amant a été tué par des monstres. Il peut s'agir d'un accident ou prévu.";}
	if(Roll == "10"){var Roll = "Votre amant est un mage, un sorceleur ou un monstre sensible, condamnant la romance.";}
	
	var Chance_aff2 = "<b>Tragédie romantique :</b> "+Roll;
}
else if(Chance > "4" && Chance < "7"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
		
	if(Roll == "1"){var Roll = "La famille ou les amis de votre amant vous détestent et ne tolèrent pas votre romance.";}
	if(Roll == "2"){var Roll = "Votre amoureux travaille comme une pute pour gagner sa vie et refuse de renoncer à son travail.";}
	if(Roll == "3"){var Roll = "Votre amoureux est soumis à une malédiction mineure telle que la paranoïa ou d'horribles cauchemars.";}
	if(Roll == "4"){var Roll = "Votre amant a dormi et a refusé de s'arrêter quand vous l'avez découvert.";}
	if(Roll == "5"){var Roll = "Votre amoureux est incroyablement jaloux et ne supporte pas que vous soyez avec un rival possible.";}
	if(Roll == "6"){var Roll = "Vous vous battez constamment et rien ne peut l'arrêter longtemps. Vous descendez toujours dans des cris.";}
	if(Roll == "7"){var Roll = "Vous êtes en quelque sorte des rivaux professionnels. Vous vous dérobez souvent des clients.";}
	if(Roll == "8"){var Roll = "L'un de vous est humain et l'autre non humain, ce qui rend votre vie difficile.";}
	if(Roll == "9"){var Roll = "Votre amant est déjà marié.";}
	if(Roll == "10"){var Roll = "Vos amis ou votre famille détestent votre amant et ne tolèrent pas votre romance.";}

	var Chance_aff2 = "<b>Amour problématique :</b> "+Roll;
}
else {var Chance_aff2 = "<b>Débauche :</b> vous avez passé votre temps à dormir, à aller aux putes et peut-être à laisser une traînée d'enfants bâtards dans votre sillage si vous ne faisiez pas attention."}
}
else{
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Ami ; 2 = Ennemie
	
if(Chance == "1"){
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un chasseur de primes qui vous a sauvés de quelque chose";}
if(Ami == "2"){var Ami = "Une magicienne que vous avez rencontré dans une taverne";}
if(Ami == "3"){var Ami = "Un mentor qui vous a sauvés de quelque chose";}
if(Ami == "4"){var Ami = "Une amie d'enfance qui vous a engagé pour quelque chose";}
if(Ami == "5"){var Ami = "Un artisan avec qui vous êtiez prisonnés";}
if(Ami == "6"){var Ami = "Une vieille ennemie avec qui Vous avez été forcé de travailler ensemble";}
if(Ami == "7"){var Ami = "Un duc qui vous a engagé pour quelque chose";}
if(Ami == "8"){var Ami = "Une prêtresse que vous avez rencontrés en état d'ébriété";}
if(Ami == "9"){var Ami = "Un soldat que vous avez rencontré en voyageant";}
if(Ami == "10"){var Ami = "Une barde avec qui vous avez combattu ensemble";}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

if(Close < "5"){var Close = "des connaissances";}
else if(Close > "4" && Close < "7"){var Close = "des amis";}
else if(Close > "6" && Close < "9"){var Close = "des amis proches";}
else if(Close == "9"){var Close = "inséparable";}
else{var Close = "lié par serment";}

	var Situation = Math.floor(Math.random() * Math.floor(10))+1;	
if(Situation < "4"){var Situation = "dans les Royaumes du Nord.";}
else if(Situation > "3" && Situation < "7"){var Situation = "dans l'Empire de Nilfgaard.";}
else if(Situation > "6" && Situation < "10"){var Situation = "dans les Terres Ancestrales.";}
else{var Situation = "au-delà des frontières.";}

	var Chance_aff2 = "<b>Allier :</b> "+Ami+", vous êtes "+Close+", il/elle est actuellement "+Situation;
}

else{
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un ancien ami ";}
if(Ami == "2"){var Ami = "Un ancien amour ";}
if(Ami == "3"){var Ami = "Un homme ";}
if(Ami == "4"){var Ami = "Une ennemie d'enfance ";}
if(Ami == "5"){var Ami = "Un cultiste ";}
if(Ami == "6"){var Ami = "Une barde ";}
if(Ami == "7"){var Ami = "Un soldat ";}
if(Ami == "8"){var Ami = "Une bandit ";}
if(Ami == "9"){var Ami = "Un duc ";}
if(Ami == "10"){var Ami = "Une magicienne ";}

	var Faute = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = sa faute ; 2 = votre faute
	var Cause = Math.floor(Math.random() * Math.floor(10))+1;	
if(Faute == "1"){
if(Cause == "1"){var Cause = "qui vous a agressé";}
if(Cause == "2"){var Cause = "qui a causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "qui vous a humilié en publique";}
if(Cause == "4"){var Cause = "qui a causé une malédiction";}
if(Cause == "5"){var Cause = "qui vous a accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "qui a refusé vos avances";}
if(Cause == "7"){var Cause = "qui vous a causé une terrible blessure";}
if(Cause == "8"){var Cause = "qui vous fait chanter";}
if(Cause == "9"){var Cause = "qui a déjoué vos plans";}
if(Cause == "10"){var Cause = "qui a causé une attaque de monstres";}
}
else{
if(Cause == "1"){var Cause = "que vous avez agressé";}
if(Cause == "2"){var Cause = "à qui vous avez causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "que vous avez humilié en publique";}
if(Cause == "4"){var Cause = "à qui vous avez causé une malédiction";}
if(Cause == "5"){var Cause = "que vous avez accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "à qui vous avez refusé ses avances";}
if(Cause == "7"){var Cause = "à qui vous avez causé une terrible blessure";}
if(Cause == "8"){var Cause = "que vous faites chanter";}
if(Cause == "9"){var Cause = "à qui vous avez déjoué ses plans";}
if(Cause == "10"){var Cause = "à qui vous avez causé une attaque de monstres";}
}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

	var Chance_aff2 = "<b>Ennemie :</b> "+Ami+Cause+". Attention, son pouvoir est de "+Close+"/10";

}

}

	var EV_3 = Math.floor(Math.random() * Math.floor(10))+1;
// Evénement 1 : 1-4 Fortune or Misfortune ; 5-7 Allies and Enemies ; 8-10 Romance	

if(EV_3 < "5"){
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Forturne ; 2 = Inforturne
		
	if(Chance == "1"){
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff3 = "<b>Jackpot :</b> un événement majeur ou un coup de chance vous a apporté "+Argent+" couronnes !";}
		if(Forturne == "2"){var Chance_aff3 = "<b>Enseignement :</b> vous vous êtes entraîné avec un enseignant. Gagnez +1 dans n'importe quelle compétence INT ou commencez une nouvelle compétence INT à +2.";}
		if(Forturne == "3"){var Chance_aff3 = "<b>Remerciement :</b> quelque chose que vous avez fait vous a valu une faveur d'un noble / noble.";}
		if(Forturne == "4"){var Chance_aff3 = "<b>Enseignement de combat :</b> vous vous êtes entraîné avec un soldat. Gagnez +1 dans n'importe quelle compétence de combat ou commencez une nouvelle compétence de combat à +2.";}
		if(Forturne == "5"){var Chance_aff3 = "<b>Remerciement :</b> vous avez rencontré un sorceleur à un moment donné et avez réussi à en obtenir une faveur.";}
		if(Forturne == "6"){var Chance_aff3 = "<b>Gang :</b> vous êtes tombé sur un gang de bandits. Une fois par mois, vous pouvez demander une faveur à ces bandits.";}
		if(Forturne == "7"){
			var Animal = Math.floor(Math.random() * Math.floor(10))+1;
			if(Animal < "8"){var Animal = "chien";}
			else{var Animal = "loup";}
			var Chance_aff3 = "<b>Domptage :</b> vous avez apprivoisé un "+Animal+" que vous avez rencontré dans la nature.";}
		if(Forturne == "8"){var Chance_aff3 = "<b>Remerciement :</b> vous avez réussi à obtenir 1 faveur d'un puissant mage que vous avez aidé.";}
		if(Forturne == "9"){var Chance_aff3 = "<b>Béni par un prêtre :</b> on vous a donné un symbole sacré que vous pouvez montrer aux gens de cette religion pour gagner un +2 au Charisme avec eux.";}
		if(Forturne == "10"){var Chance_aff3 = "<b>Chevalier :</b> vous avez été fait chevalier pour acte valeureux dans votre royaume. Dans ce royaume, vous gagnez +2 en réputation et êtes reconnu comme chevalier.";}
	}
	else{
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff3 = "<b>Dette :</b> vous vous êtes profondément endetté à hauteur de "+Argent+" couronnes !";}
		if(Forturne == "2"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Chance_aff3 = "<b>Emprisonnement :</b> quelque chose que vous avez fait (ou une fausse accusation) vous a fait emprisonner pendant "+Argent+" 1d10 mois.";}
		if(Forturne == "3"){var Chance_aff3 = "<b>Dépendance :</b> vous avez développé une addiction. Vous pouvez la choisir.";}
		if(Forturne == "4"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "6"){var Argent = "Ils sont morts dans un accident.";}
			else if(Argent > "8"){var Argent = "Ils ont été assassinés par des bandits.";}
			else{var Argent = "Ils ont été assassinés par des monstres.";}
			var Chance_aff3 = "<b>Amant, ami ou parent tué :</b> "+Argent;}
		if(Forturne == "5"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "vol.";}
			else if(Argent > "3" && Argent < "6"){var Argent = "meurtre.";}
			else if(Argent > "5" && Argent < "10"){var Argent = "viol.";}
			else{var Argent = "sorcellerie illégale.";}			
			var Chance_aff3 = "<b>Fausse accusation :</b> accusation de "+Argent;}
		if(Forturne == "6"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Ce ne sont que quelques gardes.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "C’est toute une petite ville.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "C’est une grande ville.";}
			else{var Argent = "Tout un royaume est après toi.";}		
			var Chance_aff3 = "<b>Chassé par la loi :</b> "+Argent;}
		if(Forturne == "7"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous êtes victime de chantage.";}
			else if(Argent > "7"){var Argent = "Vous avez été trahi par quelqu'un de très proche de vous.";}
			else{var Argent = "Un secret a été dévoilé.";}		
			var Chance_aff3 = "<b>Trahison :</b> "+Argent;}
		if(Forturne == "8"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "5"){var Argent = "Vous étiez défiguré. Changez votre position sociale en peur.";}
			else if(Argent > "4" && Argent < "7"){var Argent = "Vous avez guéri en 5 mois.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez perdu la mémoire 7 mois cette année-là.";}
			else{var Argent = "Vous souffrez d'horribles cauchemars (7 chances sur 10 à chaque fois que vous dormez).";}
			var Chance_aff3 = "<b>Accident :</b> "+Argent;}
		if(Forturne == "9"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous avez été empoisonné; perdre définitivement 5 PV.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "Vous souffrez de crises d'angoisse et devez effectuer des jets d'étourdissement (tous les 5 tours) en période de stress.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez une psychose majeure. Vous entendez des voix et êtes violent, irrationnel et dépressif. Le GM contrôle ces voix..";}
			else{var Argent = ".";}
			var Chance_aff3 = "<b>Incapacité mentale ou physique :</b> "+Argent;}
		if(Forturne == "10"){var Chance_aff3 = "<b>Maudit :</b> vous avez été maudit. A voir avec le MJ.";}		
}

}
else if(EV_3 > "7"){

	var Chance = Math.floor(Math.random() * Math.floor(10))+1;	
	// 1 A Happy Love aftair ; 2-4 A Romantic Tragedy ; 5-6 A Problematic Love ; 7-10 Whores and Debauchery

if(Chance == "1"){var Chance_aff3 = "<b>Amour parfait :</b> la joie durable et le véritable amour sont une possibilité. Mais ils sont rares. Si vous y parvenez, il est supposé que vous êtes heureux ensemble jusqu'à ce que vous lanciez une autre romance d'un type différent. Ce jet s'applique ensuite à votre état sentimental actuel.";}
else if(Chance > "1" && Chance < "5"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
	
	if(Roll == "1"){var Roll = "Votre amant a été capturé par des bandits il y a quelque temps et est toujours leur captif.";}
	if(Roll == "2"){var Roll = "Votre amant a mystérieusement disparu un jour et vous ne savez pas où ils sont allés.";}
	if(Roll == "3"){var Roll = "Votre amant a été emprisonné ou exilé pour des crimes qu'il n'a peut-être pas commis.";}
	if(Roll == "4"){var Roll = "Votre amant vous a été enlevé par une puissante malédiction.";}
	if(Roll == "5"){var Roll = "Quelque chose s'est passé entre vous et votre amant et vous avez été forcé de les tuer.";}
	if(Roll == "6"){var Roll = "Votre amant s'est suicidé. Vous ne savez peut-être pas pourquoi ils l'ont fait.";}
	if(Roll == "7"){var Roll = "Votre amant a été enlevé par un noble et la prise pour concubine.";}
	if(Roll == "8"){var Roll = "Un rival a volé votre amour.";}
	if(Roll == "9"){var Roll = "Votre amant a été tué par des monstres. Il peut s'agir d'un accident ou prévu.";}
	if(Roll == "10"){var Roll = "Votre amant est un mage, un sorceleur ou un monstre sensible, condamnant la romance.";}
	
	var Chance_aff3 = "<b>Tragédie romantique :</b> "+Roll;
}
else if(Chance > "4" && Chance < "7"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
		
	if(Roll == "1"){var Roll = "La famille ou les amis de votre amant vous détestent et ne tolèrent pas votre romance.";}
	if(Roll == "2"){var Roll = "Votre amoureux travaille comme une pute pour gagner sa vie et refuse de renoncer à son travail.";}
	if(Roll == "3"){var Roll = "Votre amoureux est soumis à une malédiction mineure telle que la paranoïa ou d'horribles cauchemars.";}
	if(Roll == "4"){var Roll = "Votre amant a dormi et a refusé de s'arrêter quand vous l'avez découvert.";}
	if(Roll == "5"){var Roll = "Votre amoureux est incroyablement jaloux et ne supporte pas que vous soyez avec un rival possible.";}
	if(Roll == "6"){var Roll = "Vous vous battez constamment et rien ne peut l'arrêter longtemps. Vous descendez toujours dans des cris.";}
	if(Roll == "7"){var Roll = "Vous êtes en quelque sorte des rivaux professionnels. Vous vous dérobez souvent des clients.";}
	if(Roll == "8"){var Roll = "L'un de vous est humain et l'autre non humain, ce qui rend votre vie difficile.";}
	if(Roll == "9"){var Roll = "Votre amant est déjà marié.";}
	if(Roll == "10"){var Roll = "Vos amis ou votre famille détestent votre amant et ne tolèrent pas votre romance.";}

	var Chance_aff3 = "<b>Amour problématique :</b> "+Roll;
}
else {var Chance_aff3 = "<b>Débauche :</b> vous avez passé votre temps à dormir, à aller aux putes et peut-être à laisser une traînée d'enfants bâtards dans votre sillage si vous ne faisiez pas attention."}
}
else{
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Ami ; 2 = Ennemie
	
if(Chance == "1"){
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un chasseur de primes qui vous a sauvés de quelque chose";}
if(Ami == "2"){var Ami = "Une magicienne que vous avez rencontré dans une taverne";}
if(Ami == "3"){var Ami = "Un mentor qui vous a sauvés de quelque chose";}
if(Ami == "4"){var Ami = "Une amie d'enfance qui vous a engagé pour quelque chose";}
if(Ami == "5"){var Ami = "Un artisan avec qui vous êtiez prisonnés";}
if(Ami == "6"){var Ami = "Une vieille ennemie avec qui Vous avez été forcé de travailler ensemble";}
if(Ami == "7"){var Ami = "Un duc qui vous a engagé pour quelque chose";}
if(Ami == "8"){var Ami = "Une prêtresse que vous avez rencontrés en état d'ébriété";}
if(Ami == "9"){var Ami = "Un soldat que vous avez rencontré en voyageant";}
if(Ami == "10"){var Ami = "Une barde avec qui vous avez combattu ensemble";}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

if(Close < "5"){var Close = "des connaissances";}
else if(Close > "4" && Close < "7"){var Close = "des amis";}
else if(Close > "6" && Close < "9"){var Close = "des amis proches";}
else if(Close == "9"){var Close = "inséparable";}
else{var Close = "lié par serment";}

	var Situation = Math.floor(Math.random() * Math.floor(10))+1;	
if(Situation < "4"){var Situation = "dans les Royaumes du Nord.";}
else if(Situation > "3" && Situation < "7"){var Situation = "dans l'Empire de Nilfgaard.";}
else if(Situation > "6" && Situation < "10"){var Situation = "dans les Terres Ancestrales.";}
else{var Situation = "au-delà des frontières.";}

	var Chance_aff3 = "<b>Allier :</b> "+Ami+", vous êtes "+Close+", il/elle est actuellement "+Situation;
}

else{
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un ancien ami ";}
if(Ami == "2"){var Ami = "Un ancien amour ";}
if(Ami == "3"){var Ami = "Un homme ";}
if(Ami == "4"){var Ami = "Une ennemie d'enfance ";}
if(Ami == "5"){var Ami = "Un cultiste ";}
if(Ami == "6"){var Ami = "Une barde ";}
if(Ami == "7"){var Ami = "Un soldat ";}
if(Ami == "8"){var Ami = "Une bandit ";}
if(Ami == "9"){var Ami = "Un duc ";}
if(Ami == "10"){var Ami = "Une magicienne ";}

	var Faute = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = sa faute ; 2 = votre faute
	var Cause = Math.floor(Math.random() * Math.floor(10))+1;	
if(Faute == "1"){
if(Cause == "1"){var Cause = "qui vous a agressé";}
if(Cause == "2"){var Cause = "qui a causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "qui vous a humilié en publique";}
if(Cause == "4"){var Cause = "qui a causé une malédiction";}
if(Cause == "5"){var Cause = "qui vous a accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "qui a refusé vos avances";}
if(Cause == "7"){var Cause = "qui vous a causé une terrible blessure";}
if(Cause == "8"){var Cause = "qui vous fait chanter";}
if(Cause == "9"){var Cause = "qui a déjoué vos plans";}
if(Cause == "10"){var Cause = "qui a causé une attaque de monstres";}
}
else{
if(Cause == "1"){var Cause = "que vous avez agressé";}
if(Cause == "2"){var Cause = "à qui vous avez causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "que vous avez humilié en publique";}
if(Cause == "4"){var Cause = "à qui vous avez causé une malédiction";}
if(Cause == "5"){var Cause = "que vous avez accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "à qui vous avez refusé ses avances";}
if(Cause == "7"){var Cause = "à qui vous avez causé une terrible blessure";}
if(Cause == "8"){var Cause = "que vous faites chanter";}
if(Cause == "9"){var Cause = "à qui vous avez déjoué ses plans";}
if(Cause == "10"){var Cause = "à qui vous avez causé une attaque de monstres";}
}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

	var Chance_aff3 = "<b>Ennemie :</b> "+Ami+Cause+". Attention, son pouvoir est de "+Close+"/10";

}

}


	var EV_4 = Math.floor(Math.random() * Math.floor(10))+1;
// Evénement 1 : 1-4 Fortune or Misfortune ; 5-7 Allies and Enemies ; 8-10 Romance	

if(EV_4 < "5"){
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Forturne ; 2 = Inforturne
		
	if(Chance == "1"){
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff4 = "<b>Jackpot :</b> un événement majeur ou un coup de chance vous a apporté "+Argent+" couronnes !";}
		if(Forturne == "2"){var Chance_aff4 = "<b>Enseignement :</b> vous vous êtes entraîné avec un enseignant. Gagnez +1 dans n'importe quelle compétence INT ou commencez une nouvelle compétence INT à +2.";}
		if(Forturne == "3"){var Chance_aff4 = "<b>Remerciement :</b> quelque chose que vous avez fait vous a valu une faveur d'un noble / noble.";}
		if(Forturne == "4"){var Chance_aff4 = "<b>Enseignement de combat :</b> vous vous êtes entraîné avec un soldat. Gagnez +1 dans n'importe quelle compétence de combat ou commencez une nouvelle compétence de combat à +2.";}
		if(Forturne == "5"){var Chance_aff4 = "<b>Remerciement :</b> vous avez rencontré un sorceleur à un moment donné et avez réussi à en obtenir une faveur.";}
		if(Forturne == "6"){var Chance_aff4 = "<b>Gang :</b> vous êtes tombé sur un gang de bandits. Une fois par mois, vous pouvez demander une faveur à ces bandits.";}
		if(Forturne == "7"){
			var Animal = Math.floor(Math.random() * Math.floor(10))+1;
			if(Animal < "8"){var Animal = "chien";}
			else{var Animal = "loup";}
			var Chance_aff4 = "<b>Domptage :</b> vous avez apprivoisé un "+Animal+" que vous avez rencontré dans la nature.";}
		if(Forturne == "8"){var Chance_aff4 = "<b>Remerciement :</b> vous avez réussi à obtenir 1 faveur d'un puissant mage que vous avez aidé.";}
		if(Forturne == "9"){var Chance_aff4 = "<b>Béni par un prêtre :</b> on vous a donné un symbole sacré que vous pouvez montrer aux gens de cette religion pour gagner un +2 au Charisme avec eux.";}
		if(Forturne == "10"){var Chance_aff4 = "<b>Chevalier :</b> vous avez été fait chevalier pour acte valeureux dans votre royaume. Dans ce royaume, vous gagnez +2 en réputation et êtes reconnu comme chevalier.";}
	}
	else{
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff4 = "<b>Dette :</b> vous vous êtes profondément endetté à hauteur de "+Argent+" couronnes !";}
		if(Forturne == "2"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Chance_aff4 = "<b>Emprisonnement :</b> quelque chose que vous avez fait (ou une fausse accusation) vous a fait emprisonner pendant "+Argent+" 1d10 mois.";}
		if(Forturne == "3"){var Chance_aff4 = "<b>Dépendance :</b> vous avez développé une addiction. Vous pouvez la choisir.";}
		if(Forturne == "4"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "6"){var Argent = "Ils sont morts dans un accident.";}
			else if(Argent > "8"){var Argent = "Ils ont été assassinés par des bandits.";}
			else{var Argent = "Ils ont été assassinés par des monstres.";}
			var Chance_aff4 = "<b>Amant, ami ou parent tué :</b> "+Argent;}
		if(Forturne == "5"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "vol.";}
			else if(Argent > "3" && Argent < "6"){var Argent = "meurtre.";}
			else if(Argent > "5" && Argent < "10"){var Argent = "viol.";}
			else{var Argent = "sorcellerie illégale.";}			
			var Chance_aff4 = "<b>Fausse accusation :</b> accusation de "+Argent;}
		if(Forturne == "6"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Ce ne sont que quelques gardes.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "C’est toute une petite ville.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "C’est une grande ville.";}
			else{var Argent = "Tout un royaume est après toi.";}		
			var Chance_aff4 = "<b>Chassé par la loi :</b> "+Argent;}
		if(Forturne == "7"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous êtes victime de chantage.";}
			else if(Argent > "7"){var Argent = "Vous avez été trahi par quelqu'un de très proche de vous.";}
			else{var Argent = "Un secret a été dévoilé.";}		
			var Chance_aff4 = "<b>Trahison :</b> "+Argent;}
		if(Forturne == "8"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "5"){var Argent = "Vous étiez défiguré. Changez votre position sociale en peur.";}
			else if(Argent > "4" && Argent < "7"){var Argent = "Vous avez guéri en 5 mois.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez perdu la mémoire 7 mois cette année-là.";}
			else{var Argent = "Vous souffrez d'horribles cauchemars (7 chances sur 10 à chaque fois que vous dormez).";}
			var Chance_aff4 = "<b>Accident :</b> "+Argent;}
		if(Forturne == "9"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous avez été empoisonné; perdre définitivement 5 PV.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "Vous souffrez de crises d'angoisse et devez effectuer des jets d'étourdissement (tous les 5 tours) en période de stress.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez une psychose majeure. Vous entendez des voix et êtes violent, irrationnel et dépressif. Le GM contrôle ces voix..";}
			else{var Argent = ".";}
			var Chance_aff4 = "<b>Incapacité mentale ou physique :</b> "+Argent;}
		if(Forturne == "10"){var Chance_aff4 = "<b>Maudit :</b> vous avez été maudit. A voir avec le MJ.";}		
}

}
else if(EV_4 > "7"){

	var Chance = Math.floor(Math.random() * Math.floor(10))+1;	
	// 1 A Happy Love aftair ; 2-4 A Romantic Tragedy ; 5-6 A Problematic Love ; 7-10 Whores and Debauchery

if(Chance == "1"){var Chance_aff4 = "<b>Amour parfait :</b> la joie durable et le véritable amour sont une possibilité. Mais ils sont rares. Si vous y parvenez, il est supposé que vous êtes heureux ensemble jusqu'à ce que vous lanciez une autre romance d'un type différent. Ce jet s'applique ensuite à votre état sentimental actuel.";}
else if(Chance > "1" && Chance < "5"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
	
	if(Roll == "1"){var Roll = "Votre amant a été capturé par des bandits il y a quelque temps et est toujours leur captif.";}
	if(Roll == "2"){var Roll = "Votre amant a mystérieusement disparu un jour et vous ne savez pas où ils sont allés.";}
	if(Roll == "3"){var Roll = "Votre amant a été emprisonné ou exilé pour des crimes qu'il n'a peut-être pas commis.";}
	if(Roll == "4"){var Roll = "Votre amant vous a été enlevé par une puissante malédiction.";}
	if(Roll == "5"){var Roll = "Quelque chose s'est passé entre vous et votre amant et vous avez été forcé de les tuer.";}
	if(Roll == "6"){var Roll = "Votre amant s'est suicidé. Vous ne savez peut-être pas pourquoi ils l'ont fait.";}
	if(Roll == "7"){var Roll = "Votre amant a été enlevé par un noble et la prise pour concubine.";}
	if(Roll == "8"){var Roll = "Un rival a volé votre amour.";}
	if(Roll == "9"){var Roll = "Votre amant a été tué par des monstres. Il peut s'agir d'un accident ou prévu.";}
	if(Roll == "10"){var Roll = "Votre amant est un mage, un sorceleur ou un monstre sensible, condamnant la romance.";}
	
	var Chance_aff4 = "<b>Tragédie romantique :</b> "+Roll;
}
else if(Chance > "4" && Chance < "7"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
		
	if(Roll == "1"){var Roll = "La famille ou les amis de votre amant vous détestent et ne tolèrent pas votre romance.";}
	if(Roll == "2"){var Roll = "Votre amoureux travaille comme une pute pour gagner sa vie et refuse de renoncer à son travail.";}
	if(Roll == "3"){var Roll = "Votre amoureux est soumis à une malédiction mineure telle que la paranoïa ou d'horribles cauchemars.";}
	if(Roll == "4"){var Roll = "Votre amant a dormi et a refusé de s'arrêter quand vous l'avez découvert.";}
	if(Roll == "5"){var Roll = "Votre amoureux est incroyablement jaloux et ne supporte pas que vous soyez avec un rival possible.";}
	if(Roll == "6"){var Roll = "Vous vous battez constamment et rien ne peut l'arrêter longtemps. Vous descendez toujours dans des cris.";}
	if(Roll == "7"){var Roll = "Vous êtes en quelque sorte des rivaux professionnels. Vous vous dérobez souvent des clients.";}
	if(Roll == "8"){var Roll = "L'un de vous est humain et l'autre non humain, ce qui rend votre vie difficile.";}
	if(Roll == "9"){var Roll = "Votre amant est déjà marié.";}
	if(Roll == "10"){var Roll = "Vos amis ou votre famille détestent votre amant et ne tolèrent pas votre romance.";}

	var Chance_aff4 = "<b>Amour problématique :</b> "+Roll;
}
else {var Chance_aff4 = "<b>Débauche :</b> vous avez passé votre temps à dormir, à aller aux putes et peut-être à laisser une traînée d'enfants bâtards dans votre sillage si vous ne faisiez pas attention."}
}
else{
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Ami ; 2 = Ennemie
	
if(Chance == "1"){
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un chasseur de primes qui vous a sauvés de quelque chose";}
if(Ami == "2"){var Ami = "Une magicienne que vous avez rencontré dans une taverne";}
if(Ami == "3"){var Ami = "Un mentor qui vous a sauvés de quelque chose";}
if(Ami == "4"){var Ami = "Une amie d'enfance qui vous a engagé pour quelque chose";}
if(Ami == "5"){var Ami = "Un artisan avec qui vous êtiez prisonnés";}
if(Ami == "6"){var Ami = "Une vieille ennemie avec qui Vous avez été forcé de travailler ensemble";}
if(Ami == "7"){var Ami = "Un duc qui vous a engagé pour quelque chose";}
if(Ami == "8"){var Ami = "Une prêtresse que vous avez rencontrés en état d'ébriété";}
if(Ami == "9"){var Ami = "Un soldat que vous avez rencontré en voyageant";}
if(Ami == "10"){var Ami = "Une barde avec qui vous avez combattu ensemble";}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

if(Close < "5"){var Close = "des connaissances";}
else if(Close > "4" && Close < "7"){var Close = "des amis";}
else if(Close > "6" && Close < "9"){var Close = "des amis proches";}
else if(Close == "9"){var Close = "inséparable";}
else{var Close = "lié par serment";}

	var Situation = Math.floor(Math.random() * Math.floor(10))+1;	
if(Situation < "4"){var Situation = "dans les Royaumes du Nord.";}
else if(Situation > "3" && Situation < "7"){var Situation = "dans l'Empire de Nilfgaard.";}
else if(Situation > "6" && Situation < "10"){var Situation = "dans les Terres Ancestrales.";}
else{var Situation = "au-delà des frontières.";}

	var Chance_aff4 = "<b>Allier :</b> "+Ami+", vous êtes "+Close+", il/elle est actuellement "+Situation;
}

else{
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un ancien ami ";}
if(Ami == "2"){var Ami = "Un ancien amour ";}
if(Ami == "3"){var Ami = "Un homme ";}
if(Ami == "4"){var Ami = "Une ennemie d'enfance ";}
if(Ami == "5"){var Ami = "Un cultiste ";}
if(Ami == "6"){var Ami = "Une barde ";}
if(Ami == "7"){var Ami = "Un soldat ";}
if(Ami == "8"){var Ami = "Une bandit ";}
if(Ami == "9"){var Ami = "Un duc ";}
if(Ami == "10"){var Ami = "Une magicienne ";}

	var Faute = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = sa faute ; 2 = votre faute
	var Cause = Math.floor(Math.random() * Math.floor(10))+1;	
if(Faute == "1"){
if(Cause == "1"){var Cause = "qui vous a agressé";}
if(Cause == "2"){var Cause = "qui a causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "qui vous a humilié en publique";}
if(Cause == "4"){var Cause = "qui a causé une malédiction";}
if(Cause == "5"){var Cause = "qui vous a accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "qui a refusé vos avances";}
if(Cause == "7"){var Cause = "qui vous a causé une terrible blessure";}
if(Cause == "8"){var Cause = "qui vous fait chanter";}
if(Cause == "9"){var Cause = "qui a déjoué vos plans";}
if(Cause == "10"){var Cause = "qui a causé une attaque de monstres";}
}
else{
if(Cause == "1"){var Cause = "que vous avez agressé";}
if(Cause == "2"){var Cause = "à qui vous avez causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "que vous avez humilié en publique";}
if(Cause == "4"){var Cause = "à qui vous avez causé une malédiction";}
if(Cause == "5"){var Cause = "que vous avez accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "à qui vous avez refusé ses avances";}
if(Cause == "7"){var Cause = "à qui vous avez causé une terrible blessure";}
if(Cause == "8"){var Cause = "que vous faites chanter";}
if(Cause == "9"){var Cause = "à qui vous avez déjoué ses plans";}
if(Cause == "10"){var Cause = "à qui vous avez causé une attaque de monstres";}
}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

	var Chance_aff4 = "<b>Ennemie :</b> "+Ami+Cause+". Attention, son pouvoir est de "+Close+"/10";

}

}


Events.innerHTML = Chance_aff+"<br>"+Chance_aff2+"<br>"+Chance_aff3+"<br>"+Chance_aff4;
}

if(Age == "5"){
	var EV_1 = Math.floor(Math.random() * Math.floor(10))+1;
// Evénement 1 : 1-4 Fortune or Misfortune ; 5-7 Allies and Enemies ; 8-10 Romance	

if(EV_1 < "5"){
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Forturne ; 2 = Inforturne
		
	if(Chance == "1"){
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff = "<b>Jackpot :</b> un événement majeur ou un coup de chance vous a apporté "+Argent+" couronnes !";}
		if(Forturne == "2"){var Chance_aff = "<b>Enseignement :</b> vous vous êtes entraîné avec un enseignant. Gagnez +1 dans n'importe quelle compétence INT ou commencez une nouvelle compétence INT à +2.";}
		if(Forturne == "3"){var Chance_aff = "<b>Remerciement :</b> quelque chose que vous avez fait vous a valu une faveur d'un noble / noble.";}
		if(Forturne == "4"){var Chance_aff = "<b>Enseignement de combat :</b> vous vous êtes entraîné avec un soldat. Gagnez +1 dans n'importe quelle compétence de combat ou commencez une nouvelle compétence de combat à +2.";}
		if(Forturne == "5"){var Chance_aff = "<b>Remerciement :</b> vous avez rencontré un sorceleur à un moment donné et avez réussi à en obtenir une faveur.";}
		if(Forturne == "6"){var Chance_aff = "<b>Gang :</b> vous êtes tombé sur un gang de bandits. Une fois par mois, vous pouvez demander une faveur à ces bandits.";}
		if(Forturne == "7"){
			var Animal = Math.floor(Math.random() * Math.floor(10))+1;
			if(Animal < "8"){var Animal = "chien";}
			else{var Animal = "loup";}
			var Chance_aff = "<b>Domptage :</b> vous avez apprivoisé un "+Animal+" que vous avez rencontré dans la nature.";}
		if(Forturne == "8"){var Chance_aff = "<b>Remerciement :</b> vous avez réussi à obtenir 1 faveur d'un puissant mage que vous avez aidé.";}
		if(Forturne == "9"){var Chance_aff = "<b>Béni par un prêtre :</b> on vous a donné un symbole sacré que vous pouvez montrer aux gens de cette religion pour gagner un +2 au Charisme avec eux.";}
		if(Forturne == "10"){var Chance_aff = "<b>Chevalier :</b> vous avez été fait chevalier pour acte valeureux dans votre royaume. Dans ce royaume, vous gagnez +2 en réputation et êtes reconnu comme chevalier.";}
	}
	else{
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff = "<b>Dette :</b> vous vous êtes profondément endetté à hauteur de "+Argent+" couronnes !";}
		if(Forturne == "2"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Chance_aff = "<b>Emprisonnement :</b> quelque chose que vous avez fait (ou une fausse accusation) vous a fait emprisonner pendant "+Argent+" 1d10 mois.";}
		if(Forturne == "3"){var Chance_aff = "<b>Dépendance :</b> vous avez développé une addiction. Vous pouvez la choisir.";}
		if(Forturne == "4"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "6"){var Argent = "Ils sont morts dans un accident.";}
			else if(Argent > "8"){var Argent = "Ils ont été assassinés par des bandits.";}
			else{var Argent = "Ils ont été assassinés par des monstres.";}
			var Chance_aff = "<b>Amant, ami ou parent tué :</b> "+Argent;}
		if(Forturne == "5"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "vol.";}
			else if(Argent > "3" && Argent < "6"){var Argent = "meurtre.";}
			else if(Argent > "5" && Argent < "10"){var Argent = "viol.";}
			else{var Argent = "sorcellerie illégale.";}			
			var Chance_aff = "<b>Fausse accusation :</b> accusation de "+Argent;}
		if(Forturne == "6"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Ce ne sont que quelques gardes.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "C’est toute une petite ville.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "C’est une grande ville.";}
			else{var Argent = "Tout un royaume est après toi.";}		
			var Chance_aff = "<b>Chassé par la loi :</b> "+Argent;}
		if(Forturne == "7"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous êtes victime de chantage.";}
			else if(Argent > "7"){var Argent = "Vous avez été trahi par quelqu'un de très proche de vous.";}
			else{var Argent = "Un secret a été dévoilé.";}		
			var Chance_aff = "<b>Trahison :</b> "+Argent;}
		if(Forturne == "8"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "5"){var Argent = "Vous étiez défiguré. Changez votre position sociale en peur.";}
			else if(Argent > "4" && Argent < "7"){var Argent = "Vous avez guéri en 5 mois.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez perdu la mémoire 7 mois cette année-là.";}
			else{var Argent = "Vous souffrez d'horribles cauchemars (7 chances sur 10 à chaque fois que vous dormez).";}
			var Chance_aff = "<b>Accident :</b> "+Argent;}
		if(Forturne == "9"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous avez été empoisonné; perdre définitivement 5 PV.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "Vous souffrez de crises d'angoisse et devez effectuer des jets d'étourdissement (tous les 5 tours) en période de stress.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez une psychose majeure. Vous entendez des voix et êtes violent, irrationnel et dépressif. Le GM contrôle ces voix..";}
			else{var Argent = ".";}
			var Chance_aff = "<b>Incapacité mentale ou physique :</b> "+Argent;}
		if(Forturne == "10"){var Chance_aff = "<b>Maudit :</b> vous avez été maudit. A voir avec le MJ.";}		
}

}
else if(EV_1 > "7"){

	var Chance = Math.floor(Math.random() * Math.floor(10))+1;	
	// 1 A Happy Love aftair ; 2-4 A Romantic Tragedy ; 5-6 A Problematic Love ; 7-10 Whores and Debauchery

if(Chance == "1"){var Chance_aff = "<b>Amour parfait :</b> la joie durable et le véritable amour sont une possibilité. Mais ils sont rares. Si vous y parvenez, il est supposé que vous êtes heureux ensemble jusqu'à ce que vous lanciez une autre romance d'un type différent. Ce jet s'applique ensuite à votre état sentimental actuel.";}
else if(Chance > "1" && Chance < "5"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
	
	if(Roll == "1"){var Roll = "Votre amant a été capturé par des bandits il y a quelque temps et est toujours leur captif.";}
	if(Roll == "2"){var Roll = "Votre amant a mystérieusement disparu un jour et vous ne savez pas où ils sont allés.";}
	if(Roll == "3"){var Roll = "Votre amant a été emprisonné ou exilé pour des crimes qu'il n'a peut-être pas commis.";}
	if(Roll == "4"){var Roll = "Votre amant vous a été enlevé par une puissante malédiction.";}
	if(Roll == "5"){var Roll = "Quelque chose s'est passé entre vous et votre amant et vous avez été forcé de les tuer.";}
	if(Roll == "6"){var Roll = "Votre amant s'est suicidé. Vous ne savez peut-être pas pourquoi ils l'ont fait.";}
	if(Roll == "7"){var Roll = "Votre amant a été enlevé par un noble et la prise pour concubine.";}
	if(Roll == "8"){var Roll = "Un rival a volé votre amour.";}
	if(Roll == "9"){var Roll = "Votre amant a été tué par des monstres. Il peut s'agir d'un accident ou prévu.";}
	if(Roll == "10"){var Roll = "Votre amant est un mage, un sorceleur ou un monstre sensible, condamnant la romance.";}
	
	var Chance_aff = "<b>Tragédie romantique :</b> "+Roll;
}
else if(Chance > "4" && Chance < "7"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
		
	if(Roll == "1"){var Roll = "La famille ou les amis de votre amant vous détestent et ne tolèrent pas votre romance.";}
	if(Roll == "2"){var Roll = "Votre amoureux travaille comme une pute pour gagner sa vie et refuse de renoncer à son travail.";}
	if(Roll == "3"){var Roll = "Votre amoureux est soumis à une malédiction mineure telle que la paranoïa ou d'horribles cauchemars.";}
	if(Roll == "4"){var Roll = "Votre amant a dormi et a refusé de s'arrêter quand vous l'avez découvert.";}
	if(Roll == "5"){var Roll = "Votre amoureux est incroyablement jaloux et ne supporte pas que vous soyez avec un rival possible.";}
	if(Roll == "6"){var Roll = "Vous vous battez constamment et rien ne peut l'arrêter longtemps. Vous descendez toujours dans des cris.";}
	if(Roll == "7"){var Roll = "Vous êtes en quelque sorte des rivaux professionnels. Vous vous dérobez souvent des clients.";}
	if(Roll == "8"){var Roll = "L'un de vous est humain et l'autre non humain, ce qui rend votre vie difficile.";}
	if(Roll == "9"){var Roll = "Votre amant est déjà marié.";}
	if(Roll == "10"){var Roll = "Vos amis ou votre famille détestent votre amant et ne tolèrent pas votre romance.";}

	var Chance_aff = "<b>Amour problématique :</b> "+Roll;
}
else {var Chance_aff = "<b>Débauche :</b> vous avez passé votre temps à dormir, à aller aux putes et peut-être à laisser une traînée d'enfants bâtards dans votre sillage si vous ne faisiez pas attention."}
}
else{
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Ami ; 2 = Ennemie
	
if(Chance == "1"){
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un chasseur de primes qui vous a sauvés de quelque chose";}
if(Ami == "2"){var Ami = "Une magicienne que vous avez rencontré dans une taverne";}
if(Ami == "3"){var Ami = "Un mentor qui vous a sauvés de quelque chose";}
if(Ami == "4"){var Ami = "Une amie d'enfance qui vous a engagé pour quelque chose";}
if(Ami == "5"){var Ami = "Un artisan avec qui vous êtiez prisonnés";}
if(Ami == "6"){var Ami = "Une vieille ennemie avec qui Vous avez été forcé de travailler ensemble";}
if(Ami == "7"){var Ami = "Un duc qui vous a engagé pour quelque chose";}
if(Ami == "8"){var Ami = "Une prêtresse que vous avez rencontrés en état d'ébriété";}
if(Ami == "9"){var Ami = "Un soldat que vous avez rencontré en voyageant";}
if(Ami == "10"){var Ami = "Une barde avec qui vous avez combattu ensemble";}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

if(Close < "5"){var Close = "des connaissances";}
else if(Close > "4" && Close < "7"){var Close = "des amis";}
else if(Close > "6" && Close < "9"){var Close = "des amis proches";}
else if(Close == "9"){var Close = "inséparable";}
else{var Close = "lié par serment";}

	var Situation = Math.floor(Math.random() * Math.floor(10))+1;	
if(Situation < "4"){var Situation = "dans les Royaumes du Nord.";}
else if(Situation > "3" && Situation < "7"){var Situation = "dans l'Empire de Nilfgaard.";}
else if(Situation > "6" && Situation < "10"){var Situation = "dans les Terres Ancestrales.";}
else{var Situation = "au-delà des frontières.";}

	var Chance_aff = "<b>Allier :</b> "+Ami+", vous êtes "+Close+", il/elle est actuellement "+Situation;
}

else{
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un ancien ami ";}
if(Ami == "2"){var Ami = "Un ancien amour ";}
if(Ami == "3"){var Ami = "Un homme ";}
if(Ami == "4"){var Ami = "Une ennemie d'enfance ";}
if(Ami == "5"){var Ami = "Un cultiste ";}
if(Ami == "6"){var Ami = "Une barde ";}
if(Ami == "7"){var Ami = "Un soldat ";}
if(Ami == "8"){var Ami = "Une bandit ";}
if(Ami == "9"){var Ami = "Un duc ";}
if(Ami == "10"){var Ami = "Une magicienne ";}

	var Faute = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = sa faute ; 2 = votre faute
	var Cause = Math.floor(Math.random() * Math.floor(10))+1;	
if(Faute == "1"){
if(Cause == "1"){var Cause = "qui vous a agressé";}
if(Cause == "2"){var Cause = "qui a causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "qui vous a humilié en publique";}
if(Cause == "4"){var Cause = "qui a causé une malédiction";}
if(Cause == "5"){var Cause = "qui vous a accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "qui a refusé vos avances";}
if(Cause == "7"){var Cause = "qui vous a causé une terrible blessure";}
if(Cause == "8"){var Cause = "qui vous fait chanter";}
if(Cause == "9"){var Cause = "qui a déjoué vos plans";}
if(Cause == "10"){var Cause = "qui a causé une attaque de monstres";}
}
else{
if(Cause == "1"){var Cause = "que vous avez agressé";}
if(Cause == "2"){var Cause = "à qui vous avez causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "que vous avez humilié en publique";}
if(Cause == "4"){var Cause = "à qui vous avez causé une malédiction";}
if(Cause == "5"){var Cause = "que vous avez accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "à qui vous avez refusé ses avances";}
if(Cause == "7"){var Cause = "à qui vous avez causé une terrible blessure";}
if(Cause == "8"){var Cause = "que vous faites chanter";}
if(Cause == "9"){var Cause = "à qui vous avez déjoué ses plans";}
if(Cause == "10"){var Cause = "à qui vous avez causé une attaque de monstres";}
}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

	var Chance_aff = "<b>Ennemie :</b> "+Ami+Cause+". Attention, son pouvoir est de "+Close+"/10";

}

}

	var EV_2 = Math.floor(Math.random() * Math.floor(10))+1;
// Evénement 1 : 1-4 Fortune or Misfortune ; 5-7 Allies and Enemies ; 8-10 Romance	

if(EV_2 < "5"){
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Forturne ; 2 = Inforturne
		
	if(Chance == "1"){
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff2 = "<b>Jackpot :</b> un événement majeur ou un coup de chance vous a apporté "+Argent+" couronnes !";}
		if(Forturne == "2"){var Chance_aff2 = "<b>Enseignement :</b> vous vous êtes entraîné avec un enseignant. Gagnez +1 dans n'importe quelle compétence INT ou commencez une nouvelle compétence INT à +2.";}
		if(Forturne == "3"){var Chance_aff2 = "<b>Remerciement :</b> quelque chose que vous avez fait vous a valu une faveur d'un noble / noble.";}
		if(Forturne == "4"){var Chance_aff2 = "<b>Enseignement de combat :</b> vous vous êtes entraîné avec un soldat. Gagnez +1 dans n'importe quelle compétence de combat ou commencez une nouvelle compétence de combat à +2.";}
		if(Forturne == "5"){var Chance_aff2 = "<b>Remerciement :</b> vous avez rencontré un sorceleur à un moment donné et avez réussi à en obtenir une faveur.";}
		if(Forturne == "6"){var Chance_aff2 = "<b>Gang :</b> vous êtes tombé sur un gang de bandits. Une fois par mois, vous pouvez demander une faveur à ces bandits.";}
		if(Forturne == "7"){
			var Animal = Math.floor(Math.random() * Math.floor(10))+1;
			if(Animal < "8"){var Animal = "chien";}
			else{var Animal = "loup";}
			var Chance_aff2 = "<b>Domptage :</b> vous avez apprivoisé un "+Animal+" que vous avez rencontré dans la nature.";}
		if(Forturne == "8"){var Chance_aff2 = "<b>Remerciement :</b> vous avez réussi à obtenir 1 faveur d'un puissant mage que vous avez aidé.";}
		if(Forturne == "9"){var Chance_aff2 = "<b>Béni par un prêtre :</b> on vous a donné un symbole sacré que vous pouvez montrer aux gens de cette religion pour gagner un +2 au Charisme avec eux.";}
		if(Forturne == "10"){var Chance_aff2 = "<b>Chevalier :</b> vous avez été fait chevalier pour acte valeureux dans votre royaume. Dans ce royaume, vous gagnez +2 en réputation et êtes reconnu comme chevalier.";}
	}
	else{
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff2 = "<b>Dette :</b> vous vous êtes profondément endetté à hauteur de "+Argent+" couronnes !";}
		if(Forturne == "2"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Chance_aff2 = "<b>Emprisonnement :</b> quelque chose que vous avez fait (ou une fausse accusation) vous a fait emprisonner pendant "+Argent+" 1d10 mois.";}
		if(Forturne == "3"){var Chance_aff2 = "<b>Dépendance :</b> vous avez développé une addiction. Vous pouvez la choisir.";}
		if(Forturne == "4"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "6"){var Argent = "Ils sont morts dans un accident.";}
			else if(Argent > "8"){var Argent = "Ils ont été assassinés par des bandits.";}
			else{var Argent = "Ils ont été assassinés par des monstres.";}
			var Chance_aff2 = "<b>Amant, ami ou parent tué :</b> "+Argent;}
		if(Forturne == "5"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "vol.";}
			else if(Argent > "3" && Argent < "6"){var Argent = "meurtre.";}
			else if(Argent > "5" && Argent < "10"){var Argent = "viol.";}
			else{var Argent = "sorcellerie illégale.";}			
			var Chance_aff2 = "<b>Fausse accusation :</b> accusation de "+Argent;}
		if(Forturne == "6"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Ce ne sont que quelques gardes.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "C’est toute une petite ville.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "C’est une grande ville.";}
			else{var Argent = "Tout un royaume est après toi.";}		
			var Chance_aff2 = "<b>Chassé par la loi :</b> "+Argent;}
		if(Forturne == "7"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous êtes victime de chantage.";}
			else if(Argent > "7"){var Argent = "Vous avez été trahi par quelqu'un de très proche de vous.";}
			else{var Argent = "Un secret a été dévoilé.";}		
			var Chance_aff2 = "<b>Trahison :</b> "+Argent;}
		if(Forturne == "8"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "5"){var Argent = "Vous étiez défiguré. Changez votre position sociale en peur.";}
			else if(Argent > "4" && Argent < "7"){var Argent = "Vous avez guéri en 5 mois.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez perdu la mémoire 7 mois cette année-là.";}
			else{var Argent = "Vous souffrez d'horribles cauchemars (7 chances sur 10 à chaque fois que vous dormez).";}
			var Chance_aff2 = "<b>Accident :</b> "+Argent;}
		if(Forturne == "9"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous avez été empoisonné; perdre définitivement 5 PV.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "Vous souffrez de crises d'angoisse et devez effectuer des jets d'étourdissement (tous les 5 tours) en période de stress.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez une psychose majeure. Vous entendez des voix et êtes violent, irrationnel et dépressif. Le GM contrôle ces voix..";}
			else{var Argent = ".";}
			var Chance_aff2 = "<b>Incapacité mentale ou physique :</b> "+Argent;}
		if(Forturne == "10"){var Chance_aff2 = "<b>Maudit :</b> vous avez été maudit. A voir avec le MJ.";}		
}

}
else if(EV_2 > "7"){

	var Chance = Math.floor(Math.random() * Math.floor(10))+1;	
	// 1 A Happy Love aftair ; 2-4 A Romantic Tragedy ; 5-6 A Problematic Love ; 7-10 Whores and Debauchery

if(Chance == "1"){var Chance_aff2 = "<b>Amour parfait :</b> la joie durable et le véritable amour sont une possibilité. Mais ils sont rares. Si vous y parvenez, il est supposé que vous êtes heureux ensemble jusqu'à ce que vous lanciez une autre romance d'un type différent. Ce jet s'applique ensuite à votre état sentimental actuel.";}
else if(Chance > "1" && Chance < "5"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
	
	if(Roll == "1"){var Roll = "Votre amant a été capturé par des bandits il y a quelque temps et est toujours leur captif.";}
	if(Roll == "2"){var Roll = "Votre amant a mystérieusement disparu un jour et vous ne savez pas où ils sont allés.";}
	if(Roll == "3"){var Roll = "Votre amant a été emprisonné ou exilé pour des crimes qu'il n'a peut-être pas commis.";}
	if(Roll == "4"){var Roll = "Votre amant vous a été enlevé par une puissante malédiction.";}
	if(Roll == "5"){var Roll = "Quelque chose s'est passé entre vous et votre amant et vous avez été forcé de les tuer.";}
	if(Roll == "6"){var Roll = "Votre amant s'est suicidé. Vous ne savez peut-être pas pourquoi ils l'ont fait.";}
	if(Roll == "7"){var Roll = "Votre amant a été enlevé par un noble et la prise pour concubine.";}
	if(Roll == "8"){var Roll = "Un rival a volé votre amour.";}
	if(Roll == "9"){var Roll = "Votre amant a été tué par des monstres. Il peut s'agir d'un accident ou prévu.";}
	if(Roll == "10"){var Roll = "Votre amant est un mage, un sorceleur ou un monstre sensible, condamnant la romance.";}
	
	var Chance_aff2 = "<b>Tragédie romantique :</b> "+Roll;
}
else if(Chance > "4" && Chance < "7"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
		
	if(Roll == "1"){var Roll = "La famille ou les amis de votre amant vous détestent et ne tolèrent pas votre romance.";}
	if(Roll == "2"){var Roll = "Votre amoureux travaille comme une pute pour gagner sa vie et refuse de renoncer à son travail.";}
	if(Roll == "3"){var Roll = "Votre amoureux est soumis à une malédiction mineure telle que la paranoïa ou d'horribles cauchemars.";}
	if(Roll == "4"){var Roll = "Votre amant a dormi et a refusé de s'arrêter quand vous l'avez découvert.";}
	if(Roll == "5"){var Roll = "Votre amoureux est incroyablement jaloux et ne supporte pas que vous soyez avec un rival possible.";}
	if(Roll == "6"){var Roll = "Vous vous battez constamment et rien ne peut l'arrêter longtemps. Vous descendez toujours dans des cris.";}
	if(Roll == "7"){var Roll = "Vous êtes en quelque sorte des rivaux professionnels. Vous vous dérobez souvent des clients.";}
	if(Roll == "8"){var Roll = "L'un de vous est humain et l'autre non humain, ce qui rend votre vie difficile.";}
	if(Roll == "9"){var Roll = "Votre amant est déjà marié.";}
	if(Roll == "10"){var Roll = "Vos amis ou votre famille détestent votre amant et ne tolèrent pas votre romance.";}

	var Chance_aff2 = "<b>Amour problématique :</b> "+Roll;
}
else {var Chance_aff2 = "<b>Débauche :</b> vous avez passé votre temps à dormir, à aller aux putes et peut-être à laisser une traînée d'enfants bâtards dans votre sillage si vous ne faisiez pas attention."}
}
else{
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Ami ; 2 = Ennemie
	
if(Chance == "1"){
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un chasseur de primes qui vous a sauvés de quelque chose";}
if(Ami == "2"){var Ami = "Une magicienne que vous avez rencontré dans une taverne";}
if(Ami == "3"){var Ami = "Un mentor qui vous a sauvés de quelque chose";}
if(Ami == "4"){var Ami = "Une amie d'enfance qui vous a engagé pour quelque chose";}
if(Ami == "5"){var Ami = "Un artisan avec qui vous êtiez prisonnés";}
if(Ami == "6"){var Ami = "Une vieille ennemie avec qui Vous avez été forcé de travailler ensemble";}
if(Ami == "7"){var Ami = "Un duc qui vous a engagé pour quelque chose";}
if(Ami == "8"){var Ami = "Une prêtresse que vous avez rencontrés en état d'ébriété";}
if(Ami == "9"){var Ami = "Un soldat que vous avez rencontré en voyageant";}
if(Ami == "10"){var Ami = "Une barde avec qui vous avez combattu ensemble";}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

if(Close < "5"){var Close = "des connaissances";}
else if(Close > "4" && Close < "7"){var Close = "des amis";}
else if(Close > "6" && Close < "9"){var Close = "des amis proches";}
else if(Close == "9"){var Close = "inséparable";}
else{var Close = "lié par serment";}

	var Situation = Math.floor(Math.random() * Math.floor(10))+1;	
if(Situation < "4"){var Situation = "dans les Royaumes du Nord.";}
else if(Situation > "3" && Situation < "7"){var Situation = "dans l'Empire de Nilfgaard.";}
else if(Situation > "6" && Situation < "10"){var Situation = "dans les Terres Ancestrales.";}
else{var Situation = "au-delà des frontières.";}

	var Chance_aff2 = "<b>Allier :</b> "+Ami+", vous êtes "+Close+", il/elle est actuellement "+Situation;
}

else{
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un ancien ami ";}
if(Ami == "2"){var Ami = "Un ancien amour ";}
if(Ami == "3"){var Ami = "Un homme ";}
if(Ami == "4"){var Ami = "Une ennemie d'enfance ";}
if(Ami == "5"){var Ami = "Un cultiste ";}
if(Ami == "6"){var Ami = "Une barde ";}
if(Ami == "7"){var Ami = "Un soldat ";}
if(Ami == "8"){var Ami = "Une bandit ";}
if(Ami == "9"){var Ami = "Un duc ";}
if(Ami == "10"){var Ami = "Une magicienne ";}

	var Faute = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = sa faute ; 2 = votre faute
	var Cause = Math.floor(Math.random() * Math.floor(10))+1;	
if(Faute == "1"){
if(Cause == "1"){var Cause = "qui vous a agressé";}
if(Cause == "2"){var Cause = "qui a causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "qui vous a humilié en publique";}
if(Cause == "4"){var Cause = "qui a causé une malédiction";}
if(Cause == "5"){var Cause = "qui vous a accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "qui a refusé vos avances";}
if(Cause == "7"){var Cause = "qui vous a causé une terrible blessure";}
if(Cause == "8"){var Cause = "qui vous fait chanter";}
if(Cause == "9"){var Cause = "qui a déjoué vos plans";}
if(Cause == "10"){var Cause = "qui a causé une attaque de monstres";}
}
else{
if(Cause == "1"){var Cause = "que vous avez agressé";}
if(Cause == "2"){var Cause = "à qui vous avez causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "que vous avez humilié en publique";}
if(Cause == "4"){var Cause = "à qui vous avez causé une malédiction";}
if(Cause == "5"){var Cause = "que vous avez accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "à qui vous avez refusé ses avances";}
if(Cause == "7"){var Cause = "à qui vous avez causé une terrible blessure";}
if(Cause == "8"){var Cause = "que vous faites chanter";}
if(Cause == "9"){var Cause = "à qui vous avez déjoué ses plans";}
if(Cause == "10"){var Cause = "à qui vous avez causé une attaque de monstres";}
}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

	var Chance_aff2 = "<b>Ennemie :</b> "+Ami+Cause+". Attention, son pouvoir est de "+Close+"/10";

}

}

	var EV_3 = Math.floor(Math.random() * Math.floor(10))+1;
// Evénement 1 : 1-4 Fortune or Misfortune ; 5-7 Allies and Enemies ; 8-10 Romance	

if(EV_3 < "5"){
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Forturne ; 2 = Inforturne
		
	if(Chance == "1"){
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff3 = "<b>Jackpot :</b> un événement majeur ou un coup de chance vous a apporté "+Argent+" couronnes !";}
		if(Forturne == "2"){var Chance_aff3 = "<b>Enseignement :</b> vous vous êtes entraîné avec un enseignant. Gagnez +1 dans n'importe quelle compétence INT ou commencez une nouvelle compétence INT à +2.";}
		if(Forturne == "3"){var Chance_aff3 = "<b>Remerciement :</b> quelque chose que vous avez fait vous a valu une faveur d'un noble / noble.";}
		if(Forturne == "4"){var Chance_aff3 = "<b>Enseignement de combat :</b> vous vous êtes entraîné avec un soldat. Gagnez +1 dans n'importe quelle compétence de combat ou commencez une nouvelle compétence de combat à +2.";}
		if(Forturne == "5"){var Chance_aff3 = "<b>Remerciement :</b> vous avez rencontré un sorceleur à un moment donné et avez réussi à en obtenir une faveur.";}
		if(Forturne == "6"){var Chance_aff3 = "<b>Gang :</b> vous êtes tombé sur un gang de bandits. Une fois par mois, vous pouvez demander une faveur à ces bandits.";}
		if(Forturne == "7"){
			var Animal = Math.floor(Math.random() * Math.floor(10))+1;
			if(Animal < "8"){var Animal = "chien";}
			else{var Animal = "loup";}
			var Chance_aff3 = "<b>Domptage :</b> vous avez apprivoisé un "+Animal+" que vous avez rencontré dans la nature.";}
		if(Forturne == "8"){var Chance_aff3 = "<b>Remerciement :</b> vous avez réussi à obtenir 1 faveur d'un puissant mage que vous avez aidé.";}
		if(Forturne == "9"){var Chance_aff3 = "<b>Béni par un prêtre :</b> on vous a donné un symbole sacré que vous pouvez montrer aux gens de cette religion pour gagner un +2 au Charisme avec eux.";}
		if(Forturne == "10"){var Chance_aff3 = "<b>Chevalier :</b> vous avez été fait chevalier pour acte valeureux dans votre royaume. Dans ce royaume, vous gagnez +2 en réputation et êtes reconnu comme chevalier.";}
	}
	else{
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff3 = "<b>Dette :</b> vous vous êtes profondément endetté à hauteur de "+Argent+" couronnes !";}
		if(Forturne == "2"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Chance_aff3 = "<b>Emprisonnement :</b> quelque chose que vous avez fait (ou une fausse accusation) vous a fait emprisonner pendant "+Argent+" 1d10 mois.";}
		if(Forturne == "3"){var Chance_aff3 = "<b>Dépendance :</b> vous avez développé une addiction. Vous pouvez la choisir.";}
		if(Forturne == "4"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "6"){var Argent = "Ils sont morts dans un accident.";}
			else if(Argent > "8"){var Argent = "Ils ont été assassinés par des bandits.";}
			else{var Argent = "Ils ont été assassinés par des monstres.";}
			var Chance_aff3 = "<b>Amant, ami ou parent tué :</b> "+Argent;}
		if(Forturne == "5"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "vol.";}
			else if(Argent > "3" && Argent < "6"){var Argent = "meurtre.";}
			else if(Argent > "5" && Argent < "10"){var Argent = "viol.";}
			else{var Argent = "sorcellerie illégale.";}			
			var Chance_aff3 = "<b>Fausse accusation :</b> accusation de "+Argent;}
		if(Forturne == "6"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Ce ne sont que quelques gardes.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "C’est toute une petite ville.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "C’est une grande ville.";}
			else{var Argent = "Tout un royaume est après toi.";}		
			var Chance_aff3 = "<b>Chassé par la loi :</b> "+Argent;}
		if(Forturne == "7"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous êtes victime de chantage.";}
			else if(Argent > "7"){var Argent = "Vous avez été trahi par quelqu'un de très proche de vous.";}
			else{var Argent = "Un secret a été dévoilé.";}		
			var Chance_aff3 = "<b>Trahison :</b> "+Argent;}
		if(Forturne == "8"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "5"){var Argent = "Vous étiez défiguré. Changez votre position sociale en peur.";}
			else if(Argent > "4" && Argent < "7"){var Argent = "Vous avez guéri en 5 mois.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez perdu la mémoire 7 mois cette année-là.";}
			else{var Argent = "Vous souffrez d'horribles cauchemars (7 chances sur 10 à chaque fois que vous dormez).";}
			var Chance_aff3 = "<b>Accident :</b> "+Argent;}
		if(Forturne == "9"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous avez été empoisonné; perdre définitivement 5 PV.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "Vous souffrez de crises d'angoisse et devez effectuer des jets d'étourdissement (tous les 5 tours) en période de stress.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez une psychose majeure. Vous entendez des voix et êtes violent, irrationnel et dépressif. Le GM contrôle ces voix..";}
			else{var Argent = ".";}
			var Chance_aff3 = "<b>Incapacité mentale ou physique :</b> "+Argent;}
		if(Forturne == "10"){var Chance_aff3 = "<b>Maudit :</b> vous avez été maudit. A voir avec le MJ.";}		
}

}
else if(EV_3 > "7"){

	var Chance = Math.floor(Math.random() * Math.floor(10))+1;	
	// 1 A Happy Love aftair ; 2-4 A Romantic Tragedy ; 5-6 A Problematic Love ; 7-10 Whores and Debauchery

if(Chance == "1"){var Chance_aff3 = "<b>Amour parfait :</b> la joie durable et le véritable amour sont une possibilité. Mais ils sont rares. Si vous y parvenez, il est supposé que vous êtes heureux ensemble jusqu'à ce que vous lanciez une autre romance d'un type différent. Ce jet s'applique ensuite à votre état sentimental actuel.";}
else if(Chance > "1" && Chance < "5"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
	
	if(Roll == "1"){var Roll = "Votre amant a été capturé par des bandits il y a quelque temps et est toujours leur captif.";}
	if(Roll == "2"){var Roll = "Votre amant a mystérieusement disparu un jour et vous ne savez pas où ils sont allés.";}
	if(Roll == "3"){var Roll = "Votre amant a été emprisonné ou exilé pour des crimes qu'il n'a peut-être pas commis.";}
	if(Roll == "4"){var Roll = "Votre amant vous a été enlevé par une puissante malédiction.";}
	if(Roll == "5"){var Roll = "Quelque chose s'est passé entre vous et votre amant et vous avez été forcé de les tuer.";}
	if(Roll == "6"){var Roll = "Votre amant s'est suicidé. Vous ne savez peut-être pas pourquoi ils l'ont fait.";}
	if(Roll == "7"){var Roll = "Votre amant a été enlevé par un noble et la prise pour concubine.";}
	if(Roll == "8"){var Roll = "Un rival a volé votre amour.";}
	if(Roll == "9"){var Roll = "Votre amant a été tué par des monstres. Il peut s'agir d'un accident ou prévu.";}
	if(Roll == "10"){var Roll = "Votre amant est un mage, un sorceleur ou un monstre sensible, condamnant la romance.";}
	
	var Chance_aff3 = "<b>Tragédie romantique :</b> "+Roll;
}
else if(Chance > "4" && Chance < "7"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
		
	if(Roll == "1"){var Roll = "La famille ou les amis de votre amant vous détestent et ne tolèrent pas votre romance.";}
	if(Roll == "2"){var Roll = "Votre amoureux travaille comme une pute pour gagner sa vie et refuse de renoncer à son travail.";}
	if(Roll == "3"){var Roll = "Votre amoureux est soumis à une malédiction mineure telle que la paranoïa ou d'horribles cauchemars.";}
	if(Roll == "4"){var Roll = "Votre amant a dormi et a refusé de s'arrêter quand vous l'avez découvert.";}
	if(Roll == "5"){var Roll = "Votre amoureux est incroyablement jaloux et ne supporte pas que vous soyez avec un rival possible.";}
	if(Roll == "6"){var Roll = "Vous vous battez constamment et rien ne peut l'arrêter longtemps. Vous descendez toujours dans des cris.";}
	if(Roll == "7"){var Roll = "Vous êtes en quelque sorte des rivaux professionnels. Vous vous dérobez souvent des clients.";}
	if(Roll == "8"){var Roll = "L'un de vous est humain et l'autre non humain, ce qui rend votre vie difficile.";}
	if(Roll == "9"){var Roll = "Votre amant est déjà marié.";}
	if(Roll == "10"){var Roll = "Vos amis ou votre famille détestent votre amant et ne tolèrent pas votre romance.";}

	var Chance_aff3 = "<b>Amour problématique :</b> "+Roll;
}
else {var Chance_aff3 = "<b>Débauche :</b> vous avez passé votre temps à dormir, à aller aux putes et peut-être à laisser une traînée d'enfants bâtards dans votre sillage si vous ne faisiez pas attention."}
}
else{
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Ami ; 2 = Ennemie
	
if(Chance == "1"){
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un chasseur de primes qui vous a sauvés de quelque chose";}
if(Ami == "2"){var Ami = "Une magicienne que vous avez rencontré dans une taverne";}
if(Ami == "3"){var Ami = "Un mentor qui vous a sauvés de quelque chose";}
if(Ami == "4"){var Ami = "Une amie d'enfance qui vous a engagé pour quelque chose";}
if(Ami == "5"){var Ami = "Un artisan avec qui vous êtiez prisonnés";}
if(Ami == "6"){var Ami = "Une vieille ennemie avec qui Vous avez été forcé de travailler ensemble";}
if(Ami == "7"){var Ami = "Un duc qui vous a engagé pour quelque chose";}
if(Ami == "8"){var Ami = "Une prêtresse que vous avez rencontrés en état d'ébriété";}
if(Ami == "9"){var Ami = "Un soldat que vous avez rencontré en voyageant";}
if(Ami == "10"){var Ami = "Une barde avec qui vous avez combattu ensemble";}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

if(Close < "5"){var Close = "des connaissances";}
else if(Close > "4" && Close < "7"){var Close = "des amis";}
else if(Close > "6" && Close < "9"){var Close = "des amis proches";}
else if(Close == "9"){var Close = "inséparable";}
else{var Close = "lié par serment";}

	var Situation = Math.floor(Math.random() * Math.floor(10))+1;	
if(Situation < "4"){var Situation = "dans les Royaumes du Nord.";}
else if(Situation > "3" && Situation < "7"){var Situation = "dans l'Empire de Nilfgaard.";}
else if(Situation > "6" && Situation < "10"){var Situation = "dans les Terres Ancestrales.";}
else{var Situation = "au-delà des frontières.";}

	var Chance_aff3 = "<b>Allier :</b> "+Ami+", vous êtes "+Close+", il/elle est actuellement "+Situation;
}

else{
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un ancien ami ";}
if(Ami == "2"){var Ami = "Un ancien amour ";}
if(Ami == "3"){var Ami = "Un homme ";}
if(Ami == "4"){var Ami = "Une ennemie d'enfance ";}
if(Ami == "5"){var Ami = "Un cultiste ";}
if(Ami == "6"){var Ami = "Une barde ";}
if(Ami == "7"){var Ami = "Un soldat ";}
if(Ami == "8"){var Ami = "Une bandit ";}
if(Ami == "9"){var Ami = "Un duc ";}
if(Ami == "10"){var Ami = "Une magicienne ";}

	var Faute = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = sa faute ; 2 = votre faute
	var Cause = Math.floor(Math.random() * Math.floor(10))+1;	
if(Faute == "1"){
if(Cause == "1"){var Cause = "qui vous a agressé";}
if(Cause == "2"){var Cause = "qui a causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "qui vous a humilié en publique";}
if(Cause == "4"){var Cause = "qui a causé une malédiction";}
if(Cause == "5"){var Cause = "qui vous a accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "qui a refusé vos avances";}
if(Cause == "7"){var Cause = "qui vous a causé une terrible blessure";}
if(Cause == "8"){var Cause = "qui vous fait chanter";}
if(Cause == "9"){var Cause = "qui a déjoué vos plans";}
if(Cause == "10"){var Cause = "qui a causé une attaque de monstres";}
}
else{
if(Cause == "1"){var Cause = "que vous avez agressé";}
if(Cause == "2"){var Cause = "à qui vous avez causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "que vous avez humilié en publique";}
if(Cause == "4"){var Cause = "à qui vous avez causé une malédiction";}
if(Cause == "5"){var Cause = "que vous avez accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "à qui vous avez refusé ses avances";}
if(Cause == "7"){var Cause = "à qui vous avez causé une terrible blessure";}
if(Cause == "8"){var Cause = "que vous faites chanter";}
if(Cause == "9"){var Cause = "à qui vous avez déjoué ses plans";}
if(Cause == "10"){var Cause = "à qui vous avez causé une attaque de monstres";}
}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

	var Chance_aff3 = "<b>Ennemie :</b> "+Ami+Cause+". Attention, son pouvoir est de "+Close+"/10";

}

}


	var EV_4 = Math.floor(Math.random() * Math.floor(10))+1;
// Evénement 1 : 1-4 Fortune or Misfortune ; 5-7 Allies and Enemies ; 8-10 Romance	

if(EV_4 < "5"){
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Forturne ; 2 = Inforturne
		
	if(Chance == "1"){
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff4 = "<b>Jackpot :</b> un événement majeur ou un coup de chance vous a apporté "+Argent+" couronnes !";}
		if(Forturne == "2"){var Chance_aff4 = "<b>Enseignement :</b> vous vous êtes entraîné avec un enseignant. Gagnez +1 dans n'importe quelle compétence INT ou commencez une nouvelle compétence INT à +2.";}
		if(Forturne == "3"){var Chance_aff4 = "<b>Remerciement :</b> quelque chose que vous avez fait vous a valu une faveur d'un noble / noble.";}
		if(Forturne == "4"){var Chance_aff4 = "<b>Enseignement de combat :</b> vous vous êtes entraîné avec un soldat. Gagnez +1 dans n'importe quelle compétence de combat ou commencez une nouvelle compétence de combat à +2.";}
		if(Forturne == "5"){var Chance_aff4 = "<b>Remerciement :</b> vous avez rencontré un sorceleur à un moment donné et avez réussi à en obtenir une faveur.";}
		if(Forturne == "6"){var Chance_aff4 = "<b>Gang :</b> vous êtes tombé sur un gang de bandits. Une fois par mois, vous pouvez demander une faveur à ces bandits.";}
		if(Forturne == "7"){
			var Animal = Math.floor(Math.random() * Math.floor(10))+1;
			if(Animal < "8"){var Animal = "chien";}
			else{var Animal = "loup";}
			var Chance_aff4 = "<b>Domptage :</b> vous avez apprivoisé un "+Animal+" que vous avez rencontré dans la nature.";}
		if(Forturne == "8"){var Chance_aff4 = "<b>Remerciement :</b> vous avez réussi à obtenir 1 faveur d'un puissant mage que vous avez aidé.";}
		if(Forturne == "9"){var Chance_aff4 = "<b>Béni par un prêtre :</b> on vous a donné un symbole sacré que vous pouvez montrer aux gens de cette religion pour gagner un +2 au Charisme avec eux.";}
		if(Forturne == "10"){var Chance_aff4 = "<b>Chevalier :</b> vous avez été fait chevalier pour acte valeureux dans votre royaume. Dans ce royaume, vous gagnez +2 en réputation et êtes reconnu comme chevalier.";}
	}
	else{
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff4 = "<b>Dette :</b> vous vous êtes profondément endetté à hauteur de "+Argent+" couronnes !";}
		if(Forturne == "2"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Chance_aff4 = "<b>Emprisonnement :</b> quelque chose que vous avez fait (ou une fausse accusation) vous a fait emprisonner pendant "+Argent+" 1d10 mois.";}
		if(Forturne == "3"){var Chance_aff4 = "<b>Dépendance :</b> vous avez développé une addiction. Vous pouvez la choisir.";}
		if(Forturne == "4"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "6"){var Argent = "Ils sont morts dans un accident.";}
			else if(Argent > "8"){var Argent = "Ils ont été assassinés par des bandits.";}
			else{var Argent = "Ils ont été assassinés par des monstres.";}
			var Chance_aff4 = "<b>Amant, ami ou parent tué :</b> "+Argent;}
		if(Forturne == "5"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "vol.";}
			else if(Argent > "3" && Argent < "6"){var Argent = "meurtre.";}
			else if(Argent > "5" && Argent < "10"){var Argent = "viol.";}
			else{var Argent = "sorcellerie illégale.";}			
			var Chance_aff4 = "<b>Fausse accusation :</b> accusation de "+Argent;}
		if(Forturne == "6"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Ce ne sont que quelques gardes.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "C’est toute une petite ville.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "C’est une grande ville.";}
			else{var Argent = "Tout un royaume est après toi.";}		
			var Chance_aff4 = "<b>Chassé par la loi :</b> "+Argent;}
		if(Forturne == "7"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous êtes victime de chantage.";}
			else if(Argent > "7"){var Argent = "Vous avez été trahi par quelqu'un de très proche de vous.";}
			else{var Argent = "Un secret a été dévoilé.";}		
			var Chance_aff4 = "<b>Trahison :</b> "+Argent;}
		if(Forturne == "8"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "5"){var Argent = "Vous étiez défiguré. Changez votre position sociale en peur.";}
			else if(Argent > "4" && Argent < "7"){var Argent = "Vous avez guéri en 5 mois.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez perdu la mémoire 7 mois cette année-là.";}
			else{var Argent = "Vous souffrez d'horribles cauchemars (7 chances sur 10 à chaque fois que vous dormez).";}
			var Chance_aff4 = "<b>Accident :</b> "+Argent;}
		if(Forturne == "9"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous avez été empoisonné; perdre définitivement 5 PV.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "Vous souffrez de crises d'angoisse et devez effectuer des jets d'étourdissement (tous les 5 tours) en période de stress.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez une psychose majeure. Vous entendez des voix et êtes violent, irrationnel et dépressif. Le GM contrôle ces voix..";}
			else{var Argent = ".";}
			var Chance_aff4 = "<b>Incapacité mentale ou physique :</b> "+Argent;}
		if(Forturne == "10"){var Chance_aff4 = "<b>Maudit :</b> vous avez été maudit. A voir avec le MJ.";}		
}

}
else if(EV_4 > "7"){

	var Chance = Math.floor(Math.random() * Math.floor(10))+1;	
	// 1 A Happy Love aftair ; 2-4 A Romantic Tragedy ; 5-6 A Problematic Love ; 7-10 Whores and Debauchery

if(Chance == "1"){var Chance_aff4 = "<b>Amour parfait :</b> la joie durable et le véritable amour sont une possibilité. Mais ils sont rares. Si vous y parvenez, il est supposé que vous êtes heureux ensemble jusqu'à ce que vous lanciez une autre romance d'un type différent. Ce jet s'applique ensuite à votre état sentimental actuel.";}
else if(Chance > "1" && Chance < "5"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
	
	if(Roll == "1"){var Roll = "Votre amant a été capturé par des bandits il y a quelque temps et est toujours leur captif.";}
	if(Roll == "2"){var Roll = "Votre amant a mystérieusement disparu un jour et vous ne savez pas où ils sont allés.";}
	if(Roll == "3"){var Roll = "Votre amant a été emprisonné ou exilé pour des crimes qu'il n'a peut-être pas commis.";}
	if(Roll == "4"){var Roll = "Votre amant vous a été enlevé par une puissante malédiction.";}
	if(Roll == "5"){var Roll = "Quelque chose s'est passé entre vous et votre amant et vous avez été forcé de les tuer.";}
	if(Roll == "6"){var Roll = "Votre amant s'est suicidé. Vous ne savez peut-être pas pourquoi ils l'ont fait.";}
	if(Roll == "7"){var Roll = "Votre amant a été enlevé par un noble et la prise pour concubine.";}
	if(Roll == "8"){var Roll = "Un rival a volé votre amour.";}
	if(Roll == "9"){var Roll = "Votre amant a été tué par des monstres. Il peut s'agir d'un accident ou prévu.";}
	if(Roll == "10"){var Roll = "Votre amant est un mage, un sorceleur ou un monstre sensible, condamnant la romance.";}
	
	var Chance_aff4 = "<b>Tragédie romantique :</b> "+Roll;
}
else if(Chance > "4" && Chance < "7"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
		
	if(Roll == "1"){var Roll = "La famille ou les amis de votre amant vous détestent et ne tolèrent pas votre romance.";}
	if(Roll == "2"){var Roll = "Votre amoureux travaille comme une pute pour gagner sa vie et refuse de renoncer à son travail.";}
	if(Roll == "3"){var Roll = "Votre amoureux est soumis à une malédiction mineure telle que la paranoïa ou d'horribles cauchemars.";}
	if(Roll == "4"){var Roll = "Votre amant a dormi et a refusé de s'arrêter quand vous l'avez découvert.";}
	if(Roll == "5"){var Roll = "Votre amoureux est incroyablement jaloux et ne supporte pas que vous soyez avec un rival possible.";}
	if(Roll == "6"){var Roll = "Vous vous battez constamment et rien ne peut l'arrêter longtemps. Vous descendez toujours dans des cris.";}
	if(Roll == "7"){var Roll = "Vous êtes en quelque sorte des rivaux professionnels. Vous vous dérobez souvent des clients.";}
	if(Roll == "8"){var Roll = "L'un de vous est humain et l'autre non humain, ce qui rend votre vie difficile.";}
	if(Roll == "9"){var Roll = "Votre amant est déjà marié.";}
	if(Roll == "10"){var Roll = "Vos amis ou votre famille détestent votre amant et ne tolèrent pas votre romance.";}

	var Chance_aff4 = "<b>Amour problématique :</b> "+Roll;
}
else {var Chance_aff4 = "<b>Débauche :</b> vous avez passé votre temps à dormir, à aller aux putes et peut-être à laisser une traînée d'enfants bâtards dans votre sillage si vous ne faisiez pas attention."}
}
else{
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Ami ; 2 = Ennemie
	
if(Chance == "1"){
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un chasseur de primes qui vous a sauvés de quelque chose";}
if(Ami == "2"){var Ami = "Une magicienne que vous avez rencontré dans une taverne";}
if(Ami == "3"){var Ami = "Un mentor qui vous a sauvés de quelque chose";}
if(Ami == "4"){var Ami = "Une amie d'enfance qui vous a engagé pour quelque chose";}
if(Ami == "5"){var Ami = "Un artisan avec qui vous êtiez prisonnés";}
if(Ami == "6"){var Ami = "Une vieille ennemie avec qui Vous avez été forcé de travailler ensemble";}
if(Ami == "7"){var Ami = "Un duc qui vous a engagé pour quelque chose";}
if(Ami == "8"){var Ami = "Une prêtresse que vous avez rencontrés en état d'ébriété";}
if(Ami == "9"){var Ami = "Un soldat que vous avez rencontré en voyageant";}
if(Ami == "10"){var Ami = "Une barde avec qui vous avez combattu ensemble";}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

if(Close < "5"){var Close = "des connaissances";}
else if(Close > "4" && Close < "7"){var Close = "des amis";}
else if(Close > "6" && Close < "9"){var Close = "des amis proches";}
else if(Close == "9"){var Close = "inséparable";}
else{var Close = "lié par serment";}

	var Situation = Math.floor(Math.random() * Math.floor(10))+1;	
if(Situation < "4"){var Situation = "dans les Royaumes du Nord.";}
else if(Situation > "3" && Situation < "7"){var Situation = "dans l'Empire de Nilfgaard.";}
else if(Situation > "6" && Situation < "10"){var Situation = "dans les Terres Ancestrales.";}
else{var Situation = "au-delà des frontières.";}

	var Chance_aff4 = "<b>Allier :</b> "+Ami+", vous êtes "+Close+", il/elle est actuellement "+Situation;
}

else{
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un ancien ami ";}
if(Ami == "2"){var Ami = "Un ancien amour ";}
if(Ami == "3"){var Ami = "Un homme ";}
if(Ami == "4"){var Ami = "Une ennemie d'enfance ";}
if(Ami == "5"){var Ami = "Un cultiste ";}
if(Ami == "6"){var Ami = "Une barde ";}
if(Ami == "7"){var Ami = "Un soldat ";}
if(Ami == "8"){var Ami = "Une bandit ";}
if(Ami == "9"){var Ami = "Un duc ";}
if(Ami == "10"){var Ami = "Une magicienne ";}

	var Faute = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = sa faute ; 2 = votre faute
	var Cause = Math.floor(Math.random() * Math.floor(10))+1;	
if(Faute == "1"){
if(Cause == "1"){var Cause = "qui vous a agressé";}
if(Cause == "2"){var Cause = "qui a causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "qui vous a humilié en publique";}
if(Cause == "4"){var Cause = "qui a causé une malédiction";}
if(Cause == "5"){var Cause = "qui vous a accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "qui a refusé vos avances";}
if(Cause == "7"){var Cause = "qui vous a causé une terrible blessure";}
if(Cause == "8"){var Cause = "qui vous fait chanter";}
if(Cause == "9"){var Cause = "qui a déjoué vos plans";}
if(Cause == "10"){var Cause = "qui a causé une attaque de monstres";}
}
else{
if(Cause == "1"){var Cause = "que vous avez agressé";}
if(Cause == "2"){var Cause = "à qui vous avez causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "que vous avez humilié en publique";}
if(Cause == "4"){var Cause = "à qui vous avez causé une malédiction";}
if(Cause == "5"){var Cause = "que vous avez accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "à qui vous avez refusé ses avances";}
if(Cause == "7"){var Cause = "à qui vous avez causé une terrible blessure";}
if(Cause == "8"){var Cause = "que vous faites chanter";}
if(Cause == "9"){var Cause = "à qui vous avez déjoué ses plans";}
if(Cause == "10"){var Cause = "à qui vous avez causé une attaque de monstres";}
}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

	var Chance_aff4 = "<b>Ennemie :</b> "+Ami+Cause+". Attention, son pouvoir est de "+Close+"/10";

}

}


	var EV_5 = Math.floor(Math.random() * Math.floor(10))+1;
// Evénement 1 : 1-4 Fortune or Misfortune ; 5-7 Allies and Enemies ; 8-10 Romance	

if(EV_5 < "5"){
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Forturne ; 2 = Inforturne
		
	if(Chance == "1"){
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff5 = "<b>Jackpot :</b> un événement majeur ou un coup de chance vous a apporté "+Argent+" couronnes !";}
		if(Forturne == "2"){var Chance_aff5 = "<b>Enseignement :</b> vous vous êtes entraîné avec un enseignant. Gagnez +1 dans n'importe quelle compétence INT ou commencez une nouvelle compétence INT à +2.";}
		if(Forturne == "3"){var Chance_aff5 = "<b>Remerciement :</b> quelque chose que vous avez fait vous a valu une faveur d'un noble / noble.";}
		if(Forturne == "4"){var Chance_aff5 = "<b>Enseignement de combat :</b> vous vous êtes entraîné avec un soldat. Gagnez +1 dans n'importe quelle compétence de combat ou commencez une nouvelle compétence de combat à +2.";}
		if(Forturne == "5"){var Chance_aff5 = "<b>Remerciement :</b> vous avez rencontré un sorceleur à un moment donné et avez réussi à en obtenir une faveur.";}
		if(Forturne == "6"){var Chance_aff5 = "<b>Gang :</b> vous êtes tombé sur un gang de bandits. Une fois par mois, vous pouvez demander une faveur à ces bandits.";}
		if(Forturne == "7"){
			var Animal = Math.floor(Math.random() * Math.floor(10))+1;
			if(Animal < "8"){var Animal = "chien";}
			else{var Animal = "loup";}
			var Chance_aff5 = "<b>Domptage :</b> vous avez apprivoisé un "+Animal+" que vous avez rencontré dans la nature.";}
		if(Forturne == "8"){var Chance_aff5 = "<b>Remerciement :</b> vous avez réussi à obtenir 1 faveur d'un puissant mage que vous avez aidé.";}
		if(Forturne == "9"){var Chance_aff5 = "<b>Béni par un prêtre :</b> on vous a donné un symbole sacré que vous pouvez montrer aux gens de cette religion pour gagner un +2 au Charisme avec eux.";}
		if(Forturne == "10"){var Chance_aff5 = "<b>Chevalier :</b> vous avez été fait chevalier pour acte valeureux dans votre royaume. Dans ce royaume, vous gagnez +2 en réputation et êtes reconnu comme chevalier.";}
	}
	else{
		var Forturne = Math.floor(Math.random() * Math.floor(10))+1;
		if(Forturne == "1"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Argent = Number(Argent)*100;var Chance_aff5 = "<b>Dette :</b> vous vous êtes profondément endetté à hauteur de "+Argent+" couronnes !";}
		if(Forturne == "2"){var Argent = Math.floor(Math.random() * Math.floor(10))+1;var Chance_aff5 = "<b>Emprisonnement :</b> quelque chose que vous avez fait (ou une fausse accusation) vous a fait emprisonner pendant "+Argent+" 1d10 mois.";}
		if(Forturne == "3"){var Chance_aff5 = "<b>Dépendance :</b> vous avez développé une addiction. Vous pouvez la choisir.";}
		if(Forturne == "4"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "6"){var Argent = "Ils sont morts dans un accident.";}
			else if(Argent > "8"){var Argent = "Ils ont été assassinés par des bandits.";}
			else{var Argent = "Ils ont été assassinés par des monstres.";}
			var Chance_aff5 = "<b>Amant, ami ou parent tué :</b> "+Argent;}
		if(Forturne == "5"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "vol.";}
			else if(Argent > "3" && Argent < "6"){var Argent = "meurtre.";}
			else if(Argent > "5" && Argent < "10"){var Argent = "viol.";}
			else{var Argent = "sorcellerie illégale.";}			
			var Chance_aff5 = "<b>Fausse accusation :</b> accusation de "+Argent;}
		if(Forturne == "6"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Ce ne sont que quelques gardes.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "C’est toute une petite ville.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "C’est une grande ville.";}
			else{var Argent = "Tout un royaume est après toi.";}		
			var Chance_aff5 = "<b>Chassé par la loi :</b> "+Argent;}
		if(Forturne == "7"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous êtes victime de chantage.";}
			else if(Argent > "7"){var Argent = "Vous avez été trahi par quelqu'un de très proche de vous.";}
			else{var Argent = "Un secret a été dévoilé.";}		
			var Chance_aff5 = "<b>Trahison :</b> "+Argent;}
		if(Forturne == "8"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "5"){var Argent = "Vous étiez défiguré. Changez votre position sociale en peur.";}
			else if(Argent > "4" && Argent < "7"){var Argent = "Vous avez guéri en 5 mois.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez perdu la mémoire 7 mois cette année-là.";}
			else{var Argent = "Vous souffrez d'horribles cauchemars (7 chances sur 10 à chaque fois que vous dormez).";}
			var Chance_aff5 = "<b>Accident :</b> "+Argent;}
		if(Forturne == "9"){
			var Argent = Math.floor(Math.random() * Math.floor(10))+1;
			if(Argent < "4"){var Argent = "Vous avez été empoisonné; perdre définitivement 5 PV.";}
			else if(Argent > "3" && Argent < "7"){var Argent = "Vous souffrez de crises d'angoisse et devez effectuer des jets d'étourdissement (tous les 5 tours) en période de stress.";}
			else if(Argent > "6" && Argent < "9"){var Argent = "Vous avez une psychose majeure. Vous entendez des voix et êtes violent, irrationnel et dépressif. Le GM contrôle ces voix..";}
			else{var Argent = ".";}
			var Chance_aff5 = "<b>Incapacité mentale ou physique :</b> "+Argent;}
		if(Forturne == "10"){var Chance_aff5 = "<b>Maudit :</b> vous avez été maudit. A voir avec le MJ.";}		
}

}
else if(EV_5 > "7"){

	var Chance = Math.floor(Math.random() * Math.floor(10))+1;	
	// 1 A Happy Love aftair ; 2-4 A Romantic Tragedy ; 5-6 A Problematic Love ; 7-10 Whores and Debauchery

if(Chance == "1"){var Chance_aff5 = "<b>Amour parfait :</b> la joie durable et le véritable amour sont une possibilité. Mais ils sont rares. Si vous y parvenez, il est supposé que vous êtes heureux ensemble jusqu'à ce que vous lanciez une autre romance d'un type différent. Ce jet s'applique ensuite à votre état sentimental actuel.";}
else if(Chance > "1" && Chance < "5"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
	
	if(Roll == "1"){var Roll = "Votre amant a été capturé par des bandits il y a quelque temps et est toujours leur captif.";}
	if(Roll == "2"){var Roll = "Votre amant a mystérieusement disparu un jour et vous ne savez pas où ils sont allés.";}
	if(Roll == "3"){var Roll = "Votre amant a été emprisonné ou exilé pour des crimes qu'il n'a peut-être pas commis.";}
	if(Roll == "4"){var Roll = "Votre amant vous a été enlevé par une puissante malédiction.";}
	if(Roll == "5"){var Roll = "Quelque chose s'est passé entre vous et votre amant et vous avez été forcé de les tuer.";}
	if(Roll == "6"){var Roll = "Votre amant s'est suicidé. Vous ne savez peut-être pas pourquoi ils l'ont fait.";}
	if(Roll == "7"){var Roll = "Votre amant a été enlevé par un noble et la prise pour concubine.";}
	if(Roll == "8"){var Roll = "Un rival a volé votre amour.";}
	if(Roll == "9"){var Roll = "Votre amant a été tué par des monstres. Il peut s'agir d'un accident ou prévu.";}
	if(Roll == "10"){var Roll = "Votre amant est un mage, un sorceleur ou un monstre sensible, condamnant la romance.";}
	
	var Chance_aff5 = "<b>Tragédie romantique :</b> "+Roll;
}
else if(Chance > "4" && Chance < "7"){
	var Roll = Math.floor(Math.random() * Math.floor(10))+1;	
		
	if(Roll == "1"){var Roll = "La famille ou les amis de votre amant vous détestent et ne tolèrent pas votre romance.";}
	if(Roll == "2"){var Roll = "Votre amoureux travaille comme une pute pour gagner sa vie et refuse de renoncer à son travail.";}
	if(Roll == "3"){var Roll = "Votre amoureux est soumis à une malédiction mineure telle que la paranoïa ou d'horribles cauchemars.";}
	if(Roll == "4"){var Roll = "Votre amant a dormi et a refusé de s'arrêter quand vous l'avez découvert.";}
	if(Roll == "5"){var Roll = "Votre amoureux est incroyablement jaloux et ne supporte pas que vous soyez avec un rival possible.";}
	if(Roll == "6"){var Roll = "Vous vous battez constamment et rien ne peut l'arrêter longtemps. Vous descendez toujours dans des cris.";}
	if(Roll == "7"){var Roll = "Vous êtes en quelque sorte des rivaux professionnels. Vous vous dérobez souvent des clients.";}
	if(Roll == "8"){var Roll = "L'un de vous est humain et l'autre non humain, ce qui rend votre vie difficile.";}
	if(Roll == "9"){var Roll = "Votre amant est déjà marié.";}
	if(Roll == "10"){var Roll = "Vos amis ou votre famille détestent votre amant et ne tolèrent pas votre romance.";}

	var Chance_aff5 = "<b>Amour problématique :</b> "+Roll;
}
else {var Chance_aff5 = "<b>Débauche :</b> vous avez passé votre temps à dormir, à aller aux putes et peut-être à laisser une traînée d'enfants bâtards dans votre sillage si vous ne faisiez pas attention."}
}
else{
	var Chance = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = Ami ; 2 = Ennemie
	
if(Chance == "1"){
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un chasseur de primes qui vous a sauvés de quelque chose";}
if(Ami == "2"){var Ami = "Une magicienne que vous avez rencontré dans une taverne";}
if(Ami == "3"){var Ami = "Un mentor qui vous a sauvés de quelque chose";}
if(Ami == "4"){var Ami = "Une amie d'enfance qui vous a engagé pour quelque chose";}
if(Ami == "5"){var Ami = "Un artisan avec qui vous êtiez prisonnés";}
if(Ami == "6"){var Ami = "Une vieille ennemie avec qui Vous avez été forcé de travailler ensemble";}
if(Ami == "7"){var Ami = "Un duc qui vous a engagé pour quelque chose";}
if(Ami == "8"){var Ami = "Une prêtresse que vous avez rencontrés en état d'ébriété";}
if(Ami == "9"){var Ami = "Un soldat que vous avez rencontré en voyageant";}
if(Ami == "10"){var Ami = "Une barde avec qui vous avez combattu ensemble";}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

if(Close < "5"){var Close = "des connaissances";}
else if(Close > "4" && Close < "7"){var Close = "des amis";}
else if(Close > "6" && Close < "9"){var Close = "des amis proches";}
else if(Close == "9"){var Close = "inséparable";}
else{var Close = "lié par serment";}

	var Situation = Math.floor(Math.random() * Math.floor(10))+1;	
if(Situation < "4"){var Situation = "dans les Royaumes du Nord.";}
else if(Situation > "3" && Situation < "7"){var Situation = "dans l'Empire de Nilfgaard.";}
else if(Situation > "6" && Situation < "10"){var Situation = "dans les Terres Ancestrales.";}
else{var Situation = "au-delà des frontières.";}

	var Chance_aff5 = "<b>Allier :</b> "+Ami+", vous êtes "+Close+", il/elle est actuellement "+Situation;
}

else{
	var Ami = Math.floor(Math.random() * Math.floor(10))+1;	

if(Ami == "1"){var Ami = "Un ancien ami ";}
if(Ami == "2"){var Ami = "Un ancien amour ";}
if(Ami == "3"){var Ami = "Un homme ";}
if(Ami == "4"){var Ami = "Une ennemie d'enfance ";}
if(Ami == "5"){var Ami = "Un cultiste ";}
if(Ami == "6"){var Ami = "Une barde ";}
if(Ami == "7"){var Ami = "Un soldat ";}
if(Ami == "8"){var Ami = "Une bandit ";}
if(Ami == "9"){var Ami = "Un duc ";}
if(Ami == "10"){var Ami = "Une magicienne ";}

	var Faute = Math.floor(Math.random() * Math.floor(2))+1;	
	// 1 = sa faute ; 2 = votre faute
	var Cause = Math.floor(Math.random() * Math.floor(10))+1;	
if(Faute == "1"){
if(Cause == "1"){var Cause = "qui vous a agressé";}
if(Cause == "2"){var Cause = "qui a causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "qui vous a humilié en publique";}
if(Cause == "4"){var Cause = "qui a causé une malédiction";}
if(Cause == "5"){var Cause = "qui vous a accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "qui a refusé vos avances";}
if(Cause == "7"){var Cause = "qui vous a causé une terrible blessure";}
if(Cause == "8"){var Cause = "qui vous fait chanter";}
if(Cause == "9"){var Cause = "qui a déjoué vos plans";}
if(Cause == "10"){var Cause = "qui a causé une attaque de monstres";}
}
else{
if(Cause == "1"){var Cause = "que vous avez agressé";}
if(Cause == "2"){var Cause = "à qui vous avez causé la perte d'un être cher";}
if(Cause == "3"){var Cause = "que vous avez humilié en publique";}
if(Cause == "4"){var Cause = "à qui vous avez causé une malédiction";}
if(Cause == "5"){var Cause = "que vous avez accusé de sorcellerie illégale";}
if(Cause == "6"){var Cause = "à qui vous avez refusé ses avances";}
if(Cause == "7"){var Cause = "à qui vous avez causé une terrible blessure";}
if(Cause == "8"){var Cause = "que vous faites chanter";}
if(Cause == "9"){var Cause = "à qui vous avez déjoué ses plans";}
if(Cause == "10"){var Cause = "à qui vous avez causé une attaque de monstres";}
}

	var Close = Math.floor(Math.random() * Math.floor(10))+1;	

	var Chance_aff5 = "<b>Ennemie :</b> "+Ami+Cause+". Attention, son pouvoir est de "+Close+"/10";

}

}



Events.innerHTML = Chance_aff+"<br>"+Chance_aff2+"<br>"+Chance_aff3+"<br>"+Chance_aff4+"<br>"+Chance_aff5;
}


}

function Récapitulatif(){
	
	Récap_joueur.innerHTML = joueur.value;
	Récap_perso.innerHTML = personnage.value;
	if(Sexe.value == "1"){Récap_sexe.innerHTML = "Femme";}else{Récap_sexe.innerHTML = "Homme";}
	Récap_race.innerHTML = Race.value;

	if(Profession.value == "1"){Récap_profession.innerHTML = "Artisan";}
	if(Profession.value == "2"){Récap_profession.innerHTML = "Barde";}
	if(Profession.value == "3"){Récap_profession.innerHTML = "Criminel";}
	if(Profession.value == "4"){Récap_profession.innerHTML = "Docteur";}
	if(Profession.value == "5"){Récap_profession.innerHTML = "Homme d'armes";}
	if(Profession.value == "6"){Récap_profession.innerHTML = "Mage";}
	if(Profession.value == "7"){Récap_profession.innerHTML = "Marchand";}
	if(Profession.value == "8"){Récap_profession.innerHTML = "Prêtre / Druide";}
	if(Profession.value == "9"){Récap_profession.innerHTML = "Sorceleur";}

	if(Profession.value == "9"){

if(Sorceleur_1.value == "1"){var Age = "On vous a amené à devenir sorceleur quand vous étiez un enfant en bas âge, entre 1 et 2 ans. Vous n'avez aucun souvenir de la vie avant de devenir sorceleur et vous n'aviez rien à quoi vous accrocher lors de l'épreuve des herbes.";}
if(Sorceleur_1.value == "2"){var Age = "On vous a amené à devenir sorceleur quand vous étiez jeune, entre 4 et 6 ans. Vous aviez des souvenirs pour vous aider lors de l'épreuve des herbes.";}
if(Sorceleur_1.value == "3"){var Age = "On vous a amené à devenir sorceleur quand vous étiez relativement âgé, entre 8 et 11 ans. Alors que l'entraînement était un peu plus difficile, vos nombreux souvenirs vous ont renforcé lorsque vous avez participé a l'épreuve des herbes.";}

if(Sorceleur_2.value == "1"){var Ecole = "Vous vous êtes entraîné à Kaer Morhen dans les hauteurs des montagnes Bleues. Votre formation a été difficile et structurée, se concentrant sur une approche très complète de la profession de sorceleur. On vous a appris à frapper fort et rapidement pour terminer rapidement les chasses.";}
if(Sorceleur_2.value == "2"){var Ecole = "Vous avez été formé à Kaer Y Seren le long de la côte des montagnes du Dragon. Votre entraînement était fortement axé sur la lutte contre un nombre illimité d'adversaires et sur l'utilisation de votre pouvoir magique à son plus grand potentiel.";}
if(Sorceleur_2.value == "3"){var Ecole = "Vous vous êtes entraîné dans la caravane Dyn Marv, une troupe itinérante de sorceleurs qui ont vendu leurs compétences à quiconque pouvait payer, pour n'importe quel travail. Leurs mutations et leur entraînement ont écorché vos émotions et vous luttez contre des impulsions violentes et cruelles.";}
if(Sorceleur_2.value == "4"){var Ecole = "Vous vous êtes entraîné à Gorthwr Gvaed dans les profonds gouffres des montagnes de Tir Tochair. Contrairement aux autres sorceleurs, vous avez été formé avec des lames jumelles et une approche basée sur l'assassinat pour tuer des monstres.";}
if(Sorceleur_2.value == "5"){var Ecole = "Vous vous êtes entraîné dans les hauteurs enneigées des montagnes Amell à Haern Cadvch. Vous avez conditionné votre corps à supporter toutes sortes de punitions et à vous déplacer rapidement et efficacement dans une armure en acier lourde.";}

if(Sorceleur_5.value == "1"){var EventImportant = "Au cours de vos voyages, vous avez invoqué le Droit de surprise et reçu un enfant. Il peut s'agir d'un garçon, auquel cas il a été transformés en sorceleur, ou d'une fille, auquel cas son sort dépendait de vous.";}
if(Sorceleur_5.value == "2"){var EventImportant = "Les rôles se sont retournées lors d'une de vos chasses. Les monstres comme les sorcières et les katakans peuvent être dangereux à traquer, et vous finissez par être chassé pendant une nuit stressante.";}
if(Sorceleur_5.value == "3"){var EventImportant = "Vous avez combattu aux côtés d'un noble chevalier. Cela a peut-être été contraire à vos souhaits ou même un accident, mais vous battre avec un noble a changé votre vision des chevaliers et de votre travail de sorceleur.";}
if(Sorceleur_5.value == "4"){var EventImportant = "Les mages convoitent les secrets des mutations des sorceleurs. À un moment donné de votre vie, vous avez été capturé par un mage qui a fait des expériences sur vous pour tenter de les découvrir.";}
if(Sorceleur_5.value == "5"){var EventImportant = "Pendant un certain temps, vous avez travaillé pour un noble. Le salaire était bon, mais c'était étrange et aggravant d'avoir à cacher la plupart de vos actions pour éviter de faire honte à la famille en dévoilant leurs secrets.";}
if(Sorceleur_5.value == "6"){var EventImportant = "Une fois, vous avez voyagé au-delà des frontières du continent, en passant devant les montagnes du Dragon, le Tir Tochair ou les montagnes Bleues, ou la Grande Mer. Vous avez vu des terres lointaines inconnues pour la plupart.";}
if(Sorceleur_5.value == "7"){var EventImportant = "La plupart des sorceleurs restent neutres et évitent les relations sérieuses. Mais cela ne vous a pas arrêté. Vous êtes tombé amoureux et avez envisagé de vous installer. Cela vous vient encore parfois à l'esprit.";}
if(Sorceleur_5.value == "8"){var EventImportant = "Vous avez combattu lors d'un siège de votre donjon. Vous étiez en infériorité numérique et maîtrisé, mais vous êtes néanmoins resté. Vous avez survécu au siège avec de graves blessures, mais vous avez vu vos frères mourir autour de vous.";}
if(Sorceleur_5.value == "9"){var EventImportant = "Après avoir aidé une ville avec un monstre, les gens ont eu peur et se sont tournés contre vous. Ils ont peut-être même essayé de vous tuer. Quoi qu'il en soit, vous avez vu quel type de récompense vous pouvez attendre des gens.";}
if(Sorceleur_5.value == "10"){var EventImportant = "Vous avez été bien reçu dans une ville après l'avoir aidé avec un monstre. Vous ne vous attendiez pas à des boissons gratuites ou à des femmes, mais c'est ce que vous avez. Vous n’avez plus revu une telle gentillesse, mais c’était réconfortant.";}

if(Sorceleur_6.value == "1"){var Maintenant = "Vous vous êtes inscrit pour travailler pour un groupe de marchands, une maison noble ou une personne importante en tant que sorceleur personnel. Vous travaillez pour un salaire modeste et chassez ce qu'ils vous disent de chasser. Ce sont surtout des monstres ...";}
if(Sorceleur_6.value == "2"){var Maintenant = "La dure vie d'un sorceleur continue. Vous passez beaucoup de temps sur la route, déplorant l'efficacité de votre espèce et l'extinction des monstres. Vous voyagez constamment et ne vous installez jamais.";}
if(Sorceleur_6.value == "3"){var Maintenant = "Vous avez abandonné la vie d'un sorceleur et vous êtes parti dans la nature. Maintenant, vous vivez comme un ermite dans la nature. Ce n'est que maintenant que les monstres reviennent que vous avez recommencé à vous aventurer sur la route.";}
if(Sorceleur_6.value == "4"){var Maintenant = "Vous essayez depuis des décennies de laisser la vie de sorceleur derrière vous. C’est difficile, car les gens ne vous accepteront jamais vraiment, mais vous avez réussi à vous concocter une vie presque normale.";}
if(Sorceleur_6.value == "5"){var Maintenant = "Finalement, toute la négativité et les gens ingrats ont eu raison de vous - vous avez décidé qu'avec de moins en moins de monstres, il était temps de commencer à chasser les gens. Vous pouvez déterminer ce que vous faites pour survivre.";}
		
	Récap_HDM.innerHTML = Age+" "+Ecole+"<br>"+Sorceleur_3.innerHTML+"<br>"+Sorceleur_4.innerHTML+"<br>"+EventImportant+"<br>"+Evénement_Sorceleur_1.innerHTML+"<br>"+Evénement_Sorceleur_2.innerHTML+"<br>"+Evénement_Sorceleur_3.innerHTML+"<br>"+Maintenant;
	Récap2_HDM.value = Age+" "+Ecole+"\n"+Sorceleur_3.innerHTML+"\n"+Sorceleur_4.innerHTML+"\n"+EventImportant+"\n"+Evénement_Sorceleur_1.innerHTML+"\n"+Evénement_Sorceleur_2.innerHTML+"\n"+Evénement_Sorceleur_3.innerHTML+"\n"+Maintenant;;
	
	}
	else{
// PB inconnu > voir en PHP
var Origine = document.getElementById('Origine').value;
var Fratrie = document.getElementById('Fratrie').value;
var Fratrie_1 = Number(Fratrie)+1;
var Mentor = document.getElementById('Mentor').value;

if(Origine == "1_1"){var Origine = "De Rédanie, dans les Royaumes du Nord."}if(Origine == "1_2"){var Origine = "De Kaedwen, dans les Royaumes du Nord."}if(Origine == "1_3"){var Origine = "De Temerie, dans les Royaumes du Nord."}if(Origine == "1_4"){var Origine = "D'Aedirn, dans les Royaumes du Nord."}if(Origine == "1_5"){var Origine = "De Lyria & Rivia, dans les Royaumes du Nord."}if(Origine == "1_6"){var Origine = "De Kovir & Poviss, dans les Royaumes du Nord."}if(Origine == "1_7"){var Origine = "De Skellige, dans les Royaumes du Nord."}if(Origine == "1_8"){var Origine = "De Cidaris, dans les Royaumes du Nord."}if(Origine == "1_9"){var Origine = "De Verden, dans les Royaumes du Nord."}if(Origine == "1_10"){var Origine = "De Cintra, dans les Royaumes du Nord."}
if(Origine == "2_1"){var Origine = "Du Cœur de Nilfgaard."}if(Origine == "2_2"){var Origine = "De Vicovaro, dans Empire de Nilfgaard."}if(Origine == "2_3"){var Origine = "D'Angren, dans Empire de Nilfgaard."}if(Origine == "2_4"){var Origine = "De Nazair, dans Empire de Nilfgaard."}if(Origine == "2_5"){var Origine = "De Mettina, dans Empire de Nilfgaard."}if(Origine == "2_6"){var Origine = "De Mag Turga, dans Empire de Nilfgaard."}if(Origine == "2_7"){var Origine = "De Gheso, dans Empire de Nilfgaard."}if(Origine == "2_8"){var Origine = "De Ebbing, dans Empire de Nilfgaard."}if(Origine == "2_9"){var Origine = "De Maecht, dans Empire de Nilfgaard."}if(Origine == "2_10"){var Origine = "De Gemmeria, dans Empire de Nilfgaard."}if(Origine == "2_11"){var Origine = "D'Etolia, dans Empire de Nilfgaard."}
if(Origine == "3_1"){var Origine = "De la vallée elfique de Dol Blathanna."}if(Origine == "3_2"){var Origine = "Des montagnes naines de Mahakam."}

if(Fratrie == "0"){var Fratrie = " Enfant unique,"}
else{var Fratrie = " Issue d'une fratrie de "+Fratrie_1+",";}

if(Destin_famille.value != ""){
	if(Destin_famille.value == "1_1"){var Famille = "Votre famille a été dispersée par les guerres et vous ne savez pas où se trouvent la plupart d'entre elles.";}
	if(Destin_famille.value == "1_2"){var Famille = "Votre famille a été emprisonnée pour des délits ou pour des accusations forgées de toutes pièces. Tu étais le seul à t'échapper. Vous voudrez peut-être les libérer ... ou peut-être pas.";}
	if(Destin_famille.value == "1_3"){var Famille = "Votre maison familiale a été maudite et maintenant les récoltes ne poussent plus et des spectres parcourent les couloirs. Il est devenu trop dangereux pour vous de rester dans cette maison.";}
	if(Destin_famille.value == "1_4"){var Famille = "Avec tant de guerres, le gagne-pain de votre famille a été détruit. Votre famille s'est tournée vers le crime pour survivre.";}
	if(Destin_famille.value == "1_5"){var Famille = "Votre famille a accumulé une énorme dette de jeux. Vous avez désespérément besoin d'argent.";}
	if(Destin_famille.value == "1_6"){var Famille = "Votre famille est morte dans une querelle avec une autre famille. Vous ne vous souvenez peut-être même pas pourquoi cette querelle a commencé...";}
	if(Destin_famille.value == "1_7"){var Famille = "En raison d'une action ou d'une inaction, votre famille est devenue détestée dans votre ville natale et maintenant personne là-bas ne veut rien avoir à faire avec eux.";}
	if(Destin_famille.value == "1_8"){var Famille = "Un jour, tout ce que vous aviez a été arraché par une bande de bandits. Votre famille a été massacrée, vous laissant entièrement seul.";}
	if(Destin_famille.value == "1_9"){var Famille = "Votre famille a un secret profond et sombre qui, s'il était découvert, vous ruinerait complètement. Vous pouvez décider quel est ce secret, ou le MJ peut décider.";}
	if(Destin_famille.value == "1_10"){var Famille = "Votre famille en est venue à se mépriser. Personne avec qui vous avez grandi ne vous reparlera et vous avez de la chance de recevoir le bonjour de vos frères et sœurs.";}

	if(Destin_famille.value == "2_1"){var Famille = "Votre famille a été condamné pour des crimes contre l'Empire ou pour de fausses accusations. Vous seul avez échappé.";}
	if(Destin_famille.value == "2_2"){var Famille = "Votre famille a été exilée dans le désert de Korath et vous avez probablement passé la majeure partie de votre jeunesse à lutter pour survivre dans ce désert mortel.";}
	if(Destin_famille.value == "2_3"){var Famille = "Votre famille a été tuée par un mage renégat qui a eu une vendetta contre votre famille ou qui voulait juste du sang. De toute façon, vous êtes seul.";}
	if(Destin_famille.value == "2_4"){var Famille = "Votre famille a disparu et vous ne savez pas où ils sont allés. Un jour, ils se sont levés et sont partis.";}
	if(Destin_famille.value == "2_5"){var Famille = "Votre famille a été exécutée pour trahison contre l'Empire. Vous étiez le seul à échapper à ce sort.";}
	if(Destin_famille.value == "2_6"){var Famille = "Votre famille a été dépouillée de son titre pour une raison quelconque. Vous avez été expulsé de votre domicile et vous avez dû survivre parmi le peuple.";}
	if(Destin_famille.value == "2_7"){var Famille = "Votre nom de famille a été terni par un parent magicien qui s'affiche honteusement comme un mage du Nord.";}
	if(Destin_famille.value == "2_8"){var Famille = "Vous avez déshonoré votre famille aux yeux de l'Empire. Quelque chose que vous avez fait ou omis de faire a ruiné votre nom personnel et a nui à votre famille.";}
	if(Destin_famille.value == "2_9"){var Famille = "Votre famille a un secret profond et sombre qui, s'il était découvert, les détruirait ainsi que leur nom pour toujours. Vous devez protéger ce secret avec votre vie.";}
	if(Destin_famille.value == "2_10"){var Famille = "Votre famille a été assassinée. Ils peuvent avoir gêné le plan de quelqu'un ou avoir été utilisé pour atteindre quelqu'un de plus puissant. De toute façon, votre famille est partie maintenant.";}

	if(Destin_famille.value == "3_1"){var Famille = "Votre famille était marquée comme des sympathisants humains et n'est pas particulièrement aimée dans sa patrie.";}
	if(Destin_famille.value == "3_2"){var Famille = "Votre famille a été ostracisée pour ses opinions dissidentes et maintenant les gens ne vont plus socialiser avec vous ou votre famille.";}
	if(Destin_famille.value == "3_3"){var Famille = "Votre famille est morte dans les guerres du Nord. Ils ont peut-être effectivement combattu pendant la guerre ou ont été des victimes de la guerre.";}
	if(Destin_famille.value == "3_4"){var Famille = "Votre famille est prise dans une querelle depuis des siècles. Vous ne vous souvenez peut-être pas pourquoi cette querelle a commencé, mais c'est terrible.";}
	if(Destin_famille.value == "3_5"){var Famille = "Votre famille a été dépouillée de son titre pour une raison quelconque. Vous avez été expulsé de votre domicile et laissé en difficulté pour survivre";}
	if(Destin_famille.value == "3_6"){var Famille = "Votre famille a pillé des établissements humains au début de votre vie pour obtenir de la nourriture et peut-être riposter contre les humains.";}
	if(Destin_famille.value == "3_7"){var Famille = "Votre maison familiale est hantée. C'est très probablement parce que votre maison a été le site de nombreux morts pendant la guerre contre les humains.";}
	if(Destin_famille.value == "3_8"){var Famille = "Votre famille a été divisée par un beau-père humain qui a été amené dans votre famille par un frère ou une sœur. Certains membres de votre famille les aiment et d'autres les détestent.</option>";}
	if(Destin_famille.value == "3_9"){var Famille = "Votre famille a été tuée par des humains qui les prennaient pour des Scoia’tael. Ils peuvent avoir été abattus ou pendus sans procédure ni procès.";}
	if(Destin_famille.value == "3_10"){var Famille = "Votre famille est issue d'un traître infâme. Il entache les interactions de votre famille avec les autres races et rend la vie dans les terres ancestrales difficile.";}
	
}	

if(Destin_parents.value != ""){
	if(Destin_parents.value == "1_1"){var Famille = "Un ou plusieurs de vos parents ont été tués dans les guerres du Nord. Très probablement votre père, mais il est également possible que votre mère se soit battue ou ait été une victime.";}
	if(Destin_parents.value == "1_2"){var Famille = "Un ou plusieurs de vos parents vous ont laissé seul dans les étendus sauvages. Peut-être qu'ils ne pouvaient pas se permettre de vous garder; vous étiez peut-être un accident.";}
	if(Destin_parents.value == "1_3"){var Famille = "Un ou plusieurs de vos parents ont été maudits par un mage ou à cause de la haine intense de quelqu'un qu'ils ont rencontré. La malédiction leur a pris la vie.";}
	if(Destin_parents.value == "1_4"){var Famille = "Un ou plusieurs de vos parents vous ont vendu pour de la monnaie ou vous ont peut-être échangé contre certains biens ou services. Vos parents avaient plus besoin d'argent que vous.";}
	if(Destin_parents.value == "1_5"){var Famille = "Un ou plusieurs de vos parents ont rejoint un gang. Vous avez vu ce gang souvent et avez parfois été obligé de travailler avec eux.";}
	if(Destin_parents.value == "1_6"){var Famille = "Un ou plusieurs de vos parents ont été tués par des monstres. C'est à vous de décider à quoi ils ont pu être la proie.";}
	if(Destin_parents.value == "1_7"){var Famille = "Un ou plusieurs de vos parents ont été exécutés à tort. Ils peuvent avoir été un bouc émissaire pour quelque chose ou simplement au mauvais endroit.";}
	if(Destin_parents.value == "1_8"){var Famille = "Un ou plusieurs de vos parents sont morts de la peste. Il n'y avait rien d'autre à faire que d'essayer d'achever leur souffrance.";}
	if(Destin_parents.value == "1_9"){var Famille = "Un ou plusieurs de vos parents ont fait défection à Nilfgaard. Ils ont peut-être obtenu un accord pour obtenir des informations ou ils ont peut-être simplement franchi la frontière.";}
	if(Destin_parents.value == "1_10"){var Famille = "Un ou plusieurs de vos parents ont été enlevés par des nobles. C'est probablement votre mère qui a attiré l'attention d'un seigneur local ou de son fils.";}
	
	if(Destin_parents.value == "2_1"){var Famille = "Votre père est décédé dans l'une des guerres du Nord. Il a peut-être déjà été dans l'armée ou il peut avoir été enrôlé pendant cette guerre";}
	if(Destin_parents.value == "2_2"){var Famille = "Un ou plusieurs de vos parents ont été empoisonnés. Cela a peut-être été le travail d'un rival professionnel, ou cela a peut-être été pour écarter vos parents.";}
	if(Destin_parents.value == "2_3"){var Famille = "La police secrète a emmené votre ou vos parents pour un «interrogatoire». La semaine suivante, leur corps a été retrouvé pendu dans les rues de la ville.";}
	if(Destin_parents.value == "2_4"){var Famille = "Un ou plusieurs de vos parents ont été tués par un mage voyou. Ils ont très probablement essayé de remettre le mage en question et en ont payé le prix.";}
	if(Destin_parents.value == "2_5"){var Famille = "Un ou plusieurs de vos parents ont été emprisonnés pour magie illégale. Peut-être qu'ils ont réellement commis le crime ou peut-être que c'était une mise en scène.";}
	if(Destin_parents.value == "2_6"){var Famille = "Un ou plusieurs de vos parents ont été exilés dans le désert de Korath. Ils ont probablement commis un crime majeur, mais les tuer causerait des problèmes.";}
	if(Destin_parents.value == "2_7"){var Famille = "Un ou plusieurs de vos parents ont été maudits par un mage. Le mage avait probablement une vendetta contre eux.";}
	if(Destin_parents.value == "2_8"){var Famille = "Vos parents vous ont simplement quittés. Vous ne savez peut-être même pas pourquoi ils l'ont fait. Un jour, vos parents ont tout simplement disparu.";}
	if(Destin_parents.value == "2_9"){var Famille = "Un ou plusieurs de vos parents ont été réduits en esclavage. Ils ont commis un crime contre l'Empire ou ont été piégé par un rival.";}
	if(Destin_parents.value == "2_10"){var Famille = "Un ou plusieurs de vos parents ont été envoyés dans le Nord comme agents doubles. Vous ne savez probablement même pas où ils sont maintenant, mais ils servent l'Empereur.";}
	
	if(Destin_parents.value == "3_1"){var Famille = "Un ou plusieurs de vos parents ont été accusés d’être Scoia’tael. Les gens autour de vous jettent des regards à vos parents.";}
	if(Destin_parents.value == "3_2"){var Famille = "Un ou plusieurs de vos parents se sont retournés contre votre propre peuple et ont vendu les races aînées aux humains. Vos parents ne sont pas les bienvenus dans votre pays d'origine.";}
	if(Destin_parents.value == "3_3"){var Famille = "Un ou plusieurs de vos parents se sont suicidés de désespoir. Sans espoir de regagner la gloire du passé, ils ont abandonné et y ont mis fin.";}
	if(Destin_parents.value == "3_4"){var Famille = "En voyage, un ou plusieurs de vos parents sont devenus la proie du racisme humain. Ils sont morts dans un pogrom et leurs corps ont été affichés sur des piques.";}
	if(Destin_parents.value == "3_5"){var Famille = "Un ou plusieurs de vos parents sont devenus obsédés par le fait de retrouver l'ancienne gloire de leur race. Ils ont tout sacrifié pour cette cause.";}
	if(Destin_parents.value == "3_6"){var Famille = "Un ou plusieurs de vos parents ont été exilés de votre patrie. Il existe de nombreuses raisons possibles, du crime aux opinions dissidentes.";}
	if(Destin_parents.value == "3_7"){var Famille = "Un ou plusieurs de vos parents ont été maudits. Vous pouvez décider de ce qu'est cette malédiction ou, le Game Master peut décider.";}
	if(Destin_parents.value == "3_8"){var Famille = "Vos parents vous ont donné à une autre famille pour que vous puissiez survivre, car ils ne pouvaient pas prendre soin de vous.";}
	if(Destin_parents.value == "3_9"){var Famille = "Un ou plusieurs de vos parents ont rejoint les Scoia’tael pour tenter de se venger des humains qu’ils considèrent comme ruinant leur vie.";}
	if(Destin_parents.value == "3_10"){var Famille = "Un ou plusieurs de vos parents sont décédés dans un «accident». Très probablement, ils se sont fait un ennemi puissant qui a finalement trouvé un moyen de s'en débarrasser.";}
}
if(Statut_familial.value != ""){
	if(Statut_familial.value == "1_1"){var Famille = "Aristocratie: Vous avez grandi dans un noble manoir avec des serviteurs pour vous attendre, mais vous vous attendiez toujours à vous comporter et à impressionner. Équipement de départ: Papier de noblesse (+2 Réputation)";}
	if(Statut_familial.value == "1_2"){var Famille = "Adopté par un mage: Vous avez été donné à un mage à un jeune âge. Vous viviez dans le confort mais voyiez à peine votre concierge, toujours occupé. Équipement de départ: une chronique (+1 éducation)";}
	if(Statut_familial.value == "1_3"){var Famille = "Chevaliers: Vous avez grandi dans un manoir où vous avez appris à être une vraie dame ou un seigneur. Votre destin a été fixé dès la naissance.Équipement de départ: Héraldique personnelle (+1 réputation)";}
	if(Statut_familial.value == "1_4"){var Famille = "Famille de marchands: vous avez grandi parmi les marchands et vous avez toujours été entouré de cris, de marchandages et d'argent. Équipement de départ: 2 connaissances";}
	if(Statut_familial.value == "1_5"){var Famille = "Famille d'artisans: vous avez grandi dans un atelier d'artisans. Vos journées ont été remplies des bruits incessants de la création, et souvent longues. Équipement de départ: 3 diagrammes / formules communes";}
	if(Statut_familial.value == "1_6"){var Famille = "Famille d'artiste: Vous avez grandi avec un groupe d'artistes. Vous avez peut-être voyagé ou joué dans un théâtre. Équipement de départ: 1 instrument et 1 ami";}
	if(Statut_familial.value == "1_7"){var Famille = "Famille paysanne: vous avez grandi dans une ferme à la campagne. Vous n'aviez pas grand-chose à votre nom et votre vie était simple, mais dangereuse. Équipement de départ: un jeton chanceux (+1 chance)";}

	if(Statut_familial.value == "2_1"){var Famille = "Aristocratie: Vous avez grandi dans un manoir, vous vous entraînez à bien connaître le monde de la cour. Le luxe n'était que votre motivation. Équipement de départ: Papier de noblesse (+2 Réputation)";}
	if(Statut_familial.value == "2_2"){var Famille = "Haut clergé: vous avez été élevé parmi le clergé du Grand Soleil. Vous avez grandi pieux et toujours conscient que l'Église vous guiderait. Équipement de départ: un symbole sacré (+1 Courage)";}
	if(Statut_familial.value == "2_3"){var Famille = "Chevaliers: Vous avez grandi en sachant que votre devoir était envers l'empereur et que tout votre luxe était une récompense pour votre service éventuel. Équipement de départ: Héraldique personnelle (+1 réputation)";}
	if(Statut_familial.value == "2_4"){var Famille = "Famille d'artisan: Vous avez grandi dans une boutique d'artisan, apprenant à créer des produits à vendre dans le monde entier. Vous avez appris la valeur de la qualité. Équipement de départ: 3 diagrammes / formules communes";}
	if(Statut_familial.value == "2_5"){var Famille = "Famille de marchands: vous avez grandi en vendant des produits dans tout l'Empire. Vous avez vu toutes sortes de produits exotiques du monde entier. Équipement de départ: 2 connaissances";}
	if(Statut_familial.value == "2_6"){var Famille = "Né dans la servitude: vous êtes né dans la servitude et avez vécu dans des quartiers simples. Vous possédiez très peu et peiniez souvent. Équipement de départ: un oiseau ou un serpent entraîné";}
	if(Statut_familial.value == "2_7"){var Famille = "Famille paysanne: Vous avez grandi dans l'une des milliers de fermes de l'Empire. Vous aviez peu de choses à votre nom mais la vie était simple. Équipement de départ: un jeton chanceux (+1 chance)";}

	if(Statut_familial.value == "3_1"){var Famille = "Aristocratie: Vous avez grandi dans un palais et vous avez constamment rappelé la gloire du passé. Vous deviez être à la hauteur de l'héritage. Équipement de départ: Papier de noblesse (+2 Réputation)";}
	if(Statut_familial.value == "3_2"){var Famille = "Guerrier noble: Vous avez grandi en tant qu'enfant de noble guerrier, censé élever la réputation de votre famille et ne jamais déshonorer votre héritage. Équipement de départ: Héraldique personnelle (+1 réputation)";}
	if(Statut_familial.value == "3_3"){var Famille = "Marchands: vous avez grandi parmi les marchands itinérants. La vie était parfois difficile, mais les loisirs non humains ont toujours de la valeur. Équipement de départ: 2 connaissances";}
	if(Statut_familial.value == "3_4"){var Famille = "Famille de scribes: Vous avez grandi en tant qu'enfant de scribes, enregistrant et protégeant le plus possible l'histoire des personnes âgées. Équipement de départ: une chronique (+1 éducation)";}
	if(Statut_familial.value == "3_5"){var Famille = "Artistes: Vous avez grandi en chantant des chansons et en jouant des pièces. Vous avez travaillé dans les coulisses, aidé à écrire des chansons et réparé des instruments. Équipement de départ: 1 instrument et 1 ami";}
	if(Statut_familial.value == "3_6"){var Famille = "Famille d'artisans: Vous avez grandi dans une famille d'artisans, visitant d'anciens palais pour vous inspirer et passant des heures chaque jour sur des projets. Équipement de départ: 3 diagrammes / formules courants";}
	if(Statut_familial.value == "3_7"){var Famille = "Famille de roturiers: vous avez grandi dans une famille basse-née, occupée aux manoirs des autres ou occupant de petits emplois dans votre ville natale. Équipement de départ: un jeton chanceux (+1 chance)";}
}

if(Mentor == "1_1"){var Mentor = "Une église: vous avez grandi sous l'influence de votre religion locale et avez passé des heures par jour à l'église. Équipement: un texte sacré";}
if(Mentor == "1_2"){var Mentor = "Un artisan: Votre plus grande influence a été un artisan qui vous a appris à apprécier l'art et les compétences. Équipement: un jeton que vous avez créé";}
if(Mentor == "1_3"){var Mentor = "Un comte: votre plus grande influence a été un comte ou une comtesse qui vous a appris à vous composer. Équipement: une bague en argent";}
if(Mentor == "1_4"){var Mentor = "Un mage: Votre plus grande influence a été un mage qui vous a appris à ne pas craindre la magie et à toujours remettre en question. Équipement: un petit pendentif";}
if(Mentor == "1_5"){var Mentor = "Une sorcière: Votre plus grande influence était une sorcière du village qui vous a appris l'importance de la connaissance. Équipement: une poupée magique noire";}
if(Mentor == "1_6"){var Mentor = "Une personne maudite: Votre plus grande influence était une personne maudite qui vous a appris à ne jamais juger les autres trop sévèrement. Équipement: un totem sculpté";}
if(Mentor == "1_7"){var Mentor = "Un artiste: Votre plus grande influence était un artiste qui vous a beaucoup appris sur le spectacle. Équipement: un ticket";}
if(Mentor == "1_8"){var Mentor = "Un marchand: Votre plus grande influence était un marchand qui vous a appris à être astucieux et intelligent. Équipement: une pièce que vous avez gagnée";}
if(Mentor == "1_9"){var Mentor = "Un criminel: Votre plus grande influence était un criminel qui vous a appris à prendre soin de vous. Équipement: un masque";}
if(Mentor == "1_10"){var Mentor = "Un homme d'armes: Votre plus grande influence a été un soldat qui vous a appris à vous défendre. Équipement: un trophée de bataille";}

if(Mentor == "2_1"){var Mentor = "Le culte du grand soleil: Votre plus grande influence a été l'Église. Vous avez passé des années à apprendre des chants et des rituels. Équipement: un masque de cérémonie";}
if(Mentor == "2_2"){var Mentor = "Un paria: Votre plus grande influence a été un paria social qui vous a appris à toujours remettre en question la société. Équipement: un badge coloré brillant";}
if(Mentor == "2_3"){var Mentor = "Un comte: votre plus grande influence a été un comte qui vous a appris à diriger et à inculquer l'ordre. Équipement: un collier en argent";}
if(Mentor == "2_4"){var Mentor = "Un mage: Votre plus grande influence a été un mage qui vous a appris l'importance de l'ordre et de la prudence. Équipement: un emblème";}
if(Mentor == "2_5"){var Mentor = "Un avocat: Votre plus grande influence était un détective impérial. Vous avez passé beaucoup de temps à résoudre des mystères. Équipement: une loupe";}
if(Mentor == "2_6"){var Mentor = "Un chasseur de mages: Votre plus grande influence a été un chasseur de mages qui vous a appris à faire attention à la magie et aux mages. Équipement: une bague en Dimeritium";}
if(Mentor == "2_7"){var Mentor = "Un homme d'armes: Votre plus grande influence a été un soldat qui a partagé des histoires de danger et d'excitation. Équipement: un trophée de bataille";}
if(Mentor == "2_8"){var Mentor = "Un artisan: Votre plus grande influence a été un artisan qui vous a appris à apprécier la compétence et la précision. Équipement: un bijou que vous avez créé";}
if(Mentor == "2_9"){var Mentor = "Un monstre sensible: votre plus grande influence était un monstre sensible qui vous a appris que tous les monstres ne sont pas mauvais. Équipement: un étrange totem";}
if(Mentor == "2_10"){var Mentor = "Un artiste: Votre plus grande influence a été un artiste qui vous a appris à vous exprimer. Équipement: un jeton d'un fan";}

if(Mentor == "3_1"){var Mentor = "Un humain: Votre plus grande influence a été un humain qui vous a appris que le racisme est parfois infondé. Équipement: une poupée de paille";}
if(Mentor == "3_2"){var Mentor = "Un artisan: Votre plus grande influence a été un artisan qui vous a appris à apprécier le grand art des personnes âgées. Équipement: un petit jeton que vous avez créé";}
if(Mentor == "3_3"){var Mentor = "Un noble guerrier: votre plus grande influence était un Danseur de Guerre ou un Défenseur Mahakaman qui vous a enseigné l'honneur. Équipement: un jeton de bataille";}
if(Mentor == "3_4"){var Mentor = "Un Highborn: Votre plus grande influence était un highborn qui vous a enseigné la fierté et comment vous comporter. Équipement: une chevalière";}
if(Mentor == "3_5"){var Mentor = "Un artiste: Votre plus grande influence a été un artiste qui vous a appris l'importance du bonheur et de la beauté. Équipement: un ticket";}
if(Mentor == "3_6"){var Mentor = "Un pillard: Votre plus grande influence a été un pillard qui vous a appris que vous avez le droit de prendre ce dont vous avez besoin. Équipement: un cartable";}
if(Mentor == "3_7"){var Mentor = "Un sage: Votre plus grande influence a été un sage qui vous a enseigné l'importance de l'histoire des personnes âgées. Équipement: un livre de contes";}
if(Mentor == "3_8"){var Mentor = "Un criminel: Votre plus grande influence était un criminel qui vous a appris à suivre vos propres règles. Équipement: un masque";}
if(Mentor == "3_9"){var Mentor = "Un chasseur: Votre plus grande influence était un chasseur qui vous a appris à survivre dans les terres sauvages. Équipement: un trophée de chasse";}
if(Mentor == "3_10"){var Mentor = "Un agriculteur des basses terres: votre plus grande influence a été un agriculteur des basses terres qui vous a appris à vivre heureux. Équipement: pelle d'agriculteur";}

var Mentor = ". <br>Possède pour mentor : "+Mentor;

Récap_HDM.innerHTML = Origine+Fratrie+"<br>"+Famille+Mentor+"<br>"+Events.innerHTML;

Récap2_HDM.value = Origine+Fratrie+Famille+Mentor+Events.innerHTML;

// Fin PB
	}

	Récap_puissance.innerHTML = Caractéristique_1.value;
	Récap_vigueur.innerHTML = Caractéristique_2.value;
	Récap_agilité.innerHTML = Caractéristique_3.value;
	Récap_intellect.innerHTML = Caractéristique_4.value;
	Récap_perception.innerHTML = Caractéristique_5.value;
	Récap_ténacité.innerHTML = Caractéristique_6.value;
	Récap_charisme.innerHTML = Caractéristique_7.value;
	Récap_communication.innerHTML = Caractéristique_8.value;
	Récap_instinct.innerHTML = Caractéristique_9.value;


// Compétence : Prendre toutes les valeurs non nuls :

//	if(Acrobatie.innerHTML.replace(/\D+/g,'') > "0"){var d = d+" Acrobatie : +"+Acrobatie.innerHTML.replace(/\D+/g,'');}
// avec d = variable de stockage : var d = "";

	var d = ""

// Pro 

	if(Compétence_Profession_INT_1.value > "0"){var d = "Vigilance : +"+Compétence_Profession_INT_1.value;}
	if(Compétence_Profession_INT_2.value > "0"){var d = d+" Négociation : +"+Compétence_Profession_INT_2.value;}
	if(Compétence_Profession_INT_3.value > "0"){var d = d+" Déduction : +"+Compétence_Profession_INT_3.value;}
	if(Compétence_Profession_INT_4.value > "0"){var d = d+" Education : +"+Compétence_Profession_INT_4.value;}
	if(Langage_PRO.innerHTML > "0"){var d = d+" Langage : +"+Langage_PRO.innerHTML;}
	if(Connaissance_Monstres_PRO.innerHTML > "0"){var d = d+" Connaissance des Monstres : +"+Connaissance_Monstres_PRO.innerHTML;}
	if(Compétence_Profession_INT_7.value > "0"){var d = d+" Etiquette : +"+Compétence_Profession_INT_7.value;}
	if(Compétence_Profession_INT_8.value > "0"){var d = d+" Connaissance de la rue : +"+Compétence_Profession_INT_8.value;}
	if(Tactique_PRO.innerHTML > "0"){var d = d+" Tactique : +"+Tactique_PRO.innerHTML;}
	if(Compétence_Profession_INT_10.value > "0"){var d = d+" Enseignement : +"+Compétence_Profession_INT_10.value;}
	if(Compétence_Profession_INT_11.value > "0"){var d = d+" Survie : +"+Compétence_Profession_INT_11.value;}

	if(Compétence_Profession_REF_1.value > "0"){var d = d+" Bagarre : +"+Compétence_Profession_REF_1.value;}
	if(Compétence_Profession_REF_2.value > "0"){var d = d+" Esquive/Evasion : +"+Compétence_Profession_REF_2.value;}
	if(Compétence_Profession_REF_3.value > "0"){var d = d+" Mêlée : +"+Compétence_Profession_REF_3.value;}
	if(Compétence_Profession_REF_4.value > "0"){var d = d+" Equitation : +"+Compétence_Profession_REF_4.value;}
	if(Compétence_Profession_REF_5.value > "0"){var d = d+" Navigation : +"+Compétence_Profession_REF_5.value;}
	if(Compétence_Profession_REF_6.value > "0"){var d = d+" Lames courtes : +"+Compétence_Profession_REF_6.value;}
	if(Compétence_Profession_REF_7.value > "0"){var d = d+" Bâton/Lance : +"+Compétence_Profession_REF_7.value;}
	if(Compétence_Profession_REF_8.value > "0"){var d = d+" Escrime : +"+Compétence_Profession_REF_8.value;}

	if(Compétence_Profession_DEX_1.value > "0"){var d = d+" Archerie : +"+Compétence_Profession_DEX_1.value;}
	if(Compétence_Profession_DEX_2.value > "0"){var d = d+" Athlétisme : +"+Compétence_Profession_DEX_2.value;}
	if(Compétence_Profession_DEX_3.value > "0"){var d = d+" Arbalète : +"+Compétence_Profession_DEX_3.value;}
	if(Compétence_Profession_DEX_4.value > "0"){var d = d+" Adresse : +"+Compétence_Profession_DEX_4.value;}
	if(Compétence_Profession_DEX_5.value > "0"){var d = d+" Furtivité : +"+Compétence_Profession_DEX_5.value;}

	if(Compétence_Profession_COR_1.value > "0"){var d = d+" Physique : +"+Compétence_Profession_COR_1.value;}
	if(Compétence_Profession_COR_2.value > "0"){var d = d+" Résilience : +"+Compétence_Profession_COR_2.value;}

	if(Compétence_Profession_EMP_1.value > "0"){var d = d+" Charisme : +"+Compétence_Profession_EMP_1.value;}
	if(Compétence_Profession_EMP_2.value > "0"){var d = d+" Duperie : +"+Compétence_Profession_EMP_2.value;}
	if(Compétence_Profession_EMP_3.value > "0"){var d = d+" Artiste : +"+Compétence_Profession_EMP_3.value;}
	if(Compétence_Profession_EMP_4.value > "0"){var d = d+" Jeu : +"+Compétence_Profession_EMP_4.value;}
	if(Compétence_Profession_EMP_5.value > "0"){var d = d+" Style : +"+Compétence_Profession_EMP_5.value;}
	if(Compétence_Profession_EMP_6.value > "0"){var d = d+" Psychologie : +"+Compétence_Profession_EMP_6.value;}
	if(Compétence_Profession_EMP_7.value > "0"){var d = d+" Commandement : +"+Compétence_Profession_EMP_7.value;}
	if(Compétence_Profession_EMP_8.value > "0"){var d = d+" Persuasion : +"+Compétence_Profession_EMP_8.value;}
	if(Compétence_Profession_EMP_9.value > "0"){var d = d+" Représentation : +"+Compétence_Profession_EMP_9.value;}
	if(Compétence_Profession_EMP_10.value > "0"){var d = d+" Séduction : +"+Compétence_Profession_EMP_10.value;}

	if(Alchimie_PRO.innerHTML > "0"){var d = d+" Alchimie : +"+Alchimie_PRO.innerHTML;}
	if(Artisanat_PRO.innerHTML > "0"){var d = d+" Artisanat : +"+Artisanat_PRO.innerHTML;}
	if(Compétence_Profession_TEC_3.value > "0"){var d = d+" Déguisement : +"+Compétence_Profession_TEC_3.value;}
	if(Compétence_Profession_TEC_4.value > "0"){var d = d+" Premiers secours : +"+Compétence_Profession_TEC_4.value;}
	if(Compétence_Profession_TEC_5.value > "0"){var d = d+" Falsification : +"+Compétence_Profession_TEC_5.value;}
	if(Compétence_Profession_TEC_6.value > "0"){var d = d+" Crochetage : +"+Compétence_Profession_TEC_6.value;}
	if(Piège_PRO.innerHTML > "0"){var d = d+" Piège : +"+Piège_PRO.innerHTML;}

	if(Compétence_Profession_VOL_1.value > "0"){var d = d+" Courage : +"+Compétence_Profession_VOL_1.value;}
	if(Malédiction_PRO.innerHTML > "0"){var d = d+" Malédiction : +"+Malédiction_PRO.innerHTML;}
	if(Compétence_Profession_VOL_3.value > "0"){var d = d+" Intimidation : +"+Compétence_Profession_VOL_3.value;}
	if(Incantation_PRO.innerHTML > "0"){var d = d+" Incantation : +"+Incantation_PRO.innerHTML;}
	if(Résistance_Magie.innerHTML > "0"){var d = d+" Résistance à la magie : +"+Résistance_Magie.innerHTML;}
	if(Compétence_Profession_VOL_6.value > "0"){var d = d+" Résistance à la contrainte : +"+Compétence_Profession_VOL_6.value;}
	if(Rituel_PRO.innerHTML > "0"){var d = d+" Rituel : +"+Rituel_PRO.innerHTML;}

// Nm

	if(Compétence_INT_1.value > "0"){var d = "Vigilance : +"+Compétence_INT_1.value;}
	if(Compétence_INT_2.value > "0"){var d = d+" Négociation : +"+Compétence_INT_2.value;}
	if(Compétence_INT_3.value > "0"){var d = d+" Déduction : +"+Compétence_INT_3.value;}
	if(Compétence_INT_4.value > "0"){var d = d+" Education : +"+Compétence_INT_4.value;}
	if(Langage.innerHTML > "0"){var d = d+" Langage : +"+Langage.innerHTML;}
	if(Connaissance_Monstres.innerHTML > "0"){var d = d+" Connaissance des Monstres : +"+Connaissance_Monstres.innerHTML;}
	if(Compétence_INT_7.value > "0"){var d = d+" Etiquette : +"+Compétence_INT_7.value;}
	if(Compétence_INT_8.value > "0"){var d = d+" Connaissance de la rue : +"+Compétence_INT_8.value;}
	if(Tactique.innerHTML > "0"){var d = d+" Tactique : +"+Tactique.innerHTML;}
	if(Compétence_INT_10.value > "0"){var d = d+" Enseignement : +"+Compétence_INT_10.value;}
	if(Compétence_INT_11.value > "0"){var d = d+" Survie : +"+Compétence_INT_11.value;}

	if(Compétence_REF_1.value > "0"){var d = d+" Bagarre : +"+Compétence_REF_1.value;}
	if(Compétence_REF_2.value > "0"){var d = d+" Esquive/Evasion : +"+Compétence_REF_2.value;}
	if(Compétence_REF_3.value > "0"){var d = d+" Mêlée : +"+Compétence_REF_3.value;}
	if(Compétence_REF_4.value > "0"){var d = d+" Equitation : +"+Compétence_REF_4.value;}
	if(Compétence_REF_5.value > "0"){var d = d+" Navigation : +"+Compétence_REF_5.value;}
	if(Compétence_REF_6.value > "0"){var d = d+" Lames courtes : +"+Compétence_REF_6.value;}
	if(Compétence_REF_7.value > "0"){var d = d+" Bâton/Lance : +"+Compétence_REF_7.value;}
	if(Compétence_REF_8.value > "0"){var d = d+" Escrime : +"+Compétence_REF_8.value;}

	if(Compétence_DEX_1.value > "0"){var d = d+" Archerie : +"+Compétence_DEX_1.value;}
	if(Compétence_DEX_2.value > "0"){var d = d+" Athlétisme : +"+Compétence_DEX_2.value;}
	if(Compétence_DEX_3.value > "0"){var d = d+" Arbalète : +"+Compétence_DEX_3.value;}
	if(Compétence_DEX_4.value > "0"){var d = d+" Adresse : +"+Compétence_DEX_4.value;}
	if(Compétence_DEX_5.value > "0"){var d = d+" Furtivité : +"+Compétence_DEX_5.value;}

	if(Compétence_COR_1.value > "0"){var d = d+" Physique : +"+Compétence_COR_1.value;}
	if(Compétence_COR_2.value > "0"){var d = d+" Résilience : +"+Compétence_COR_2.value;}

	if(Compétence_EMP_1.value > "0"){var d = d+" Charisme : +"+Compétence_EMP_1.value;}
	if(Compétence_EMP_2.value > "0"){var d = d+" Duperie : +"+Compétence_EMP_2.value;}
	if(Compétence_EMP_3.value > "0"){var d = d+" Artiste : +"+Compétence_EMP_3.value;}
	if(Compétence_EMP_4.value > "0"){var d = d+" Jeu : +"+Compétence_EMP_4.value;}
	if(Compétence_EMP_5.value > "0"){var d = d+" Style : +"+Compétence_EMP_5.value;}
	if(Compétence_EMP_6.value > "0"){var d = d+" Psychologie : +"+Compétence_EMP_6.value;}
	if(Compétence_EMP_7.value > "0"){var d = d+" Commandement : +"+Compétence_EMP_7.value;}
	if(Compétence_EMP_8.value > "0"){var d = d+" Persuasion : +"+Compétence_EMP_8.value;}
	if(Compétence_EMP_9.value > "0"){var d = d+" Représentation : +"+Compétence_EMP_9.value;}
	if(Compétence_EMP_10.value > "0"){var d = d+" Séduction : +"+Compétence_EMP_10.value;}

	if(Alchimie.innerHTML > "0"){var d = d+" Alchimie : +"+Alchimie.innerHTML;}
	if(Artisanat.innerHTML > "0"){var d = d+" Artisanat : +"+Artisanat.innerHTML;}
	if(Compétence_TEC_3.value > "0"){var d = d+" Déguisement : +"+Compétence_TEC_3.value;}
	if(Compétence_TEC_4.value > "0"){var d = d+" Premiers secours : +"+Compétence_TEC_4.value;}
	if(Compétence_TEC_5.value > "0"){var d = d+" Falsification : +"+Compétence_TEC_5.value;}
	if(Compétence_TEC_6.value > "0"){var d = d+" Crochetage : +"+Compétence_TEC_6.value;}
	if(Piège.innerHTML > "0"){var d = d+" Piège : +"+Piège.innerHTML;}

	if(Compétence_VOL_1.value > "0"){var d = d+" Courage : +"+Compétence_VOL_1.value;}
	if(Malédiction.innerHTML > "0"){var d = d+" Malédiction : +"+Malédiction.innerHTML;}
	if(Compétence_VOL_3.value > "0"){var d = d+" Intimidation : +"+Compétence_VOL_3.value;}
	if(Incantation.innerHTML > "0"){var d = d+" Incantation : +"+Incantation.innerHTML;}
	if(Résistance_Magie.innerHTML > "0"){var d = d+" Résistance à la magie : +"+Résistance_Magie.innerHTML;}
	if(Compétence_VOL_6.value > "0"){var d = d+" Résistance à la contrainte : +"+Compétence_VOL_6.value;}
	if(Rituel.innerHTML > "0"){var d = d+" Rituel : +"+Rituel.innerHTML;}

	Récap_compétences.innerHTML = d;
	Récap2_compétences.value = d;

// Magie : Prendre toutes les valeurs non nuls :
RRRécap.style.display = "none";

if (Profession.value == "8"){
// Prêtre
// 2 Novice Invocations, 2 Novice Rituals, 2 Low Danger Hexes

var m1 = "";
if(Invocation_1.value == "1"){var m1 = "Sang bouillonnant,";}if(Invocation_1.value == "2"){var m1 = "Maladie maudite,";}if(Invocation_1.value == "3"){var m1 = "Ami de la Nature Sauvage,";}if(Invocation_1.value == "4"){var m1 = "Don de la nature,";}if(Invocation_1.value == "5"){var m1 = "Vision de la nature,";}if(Invocation_1.value == "6"){var m1 = "Sceau du Caché,";}if(Invocation_1.value == "7"){var m1 = "Bénédiction de bonne fortune,";}if(Invocation_1.value == "8"){var m1 = "Bénédiction d'amour,";}if(Invocation_1.value == "9"){var m1 = "Lumière sacrée,";}if(Invocation_1.value == "10"){var m1 = "Eaux de purification,";}if(Invocation_1.value == "11"){var m1 = "Toile de mensonges,";}if(Invocation_1.value == "12"){var m1 = "Puit de connaissances,";}
if(Invocation_2.value == "1"){var m1 = m1+" Sang bouillonnant";}if(Invocation_2.value == "2"){var m1 = m1+" Maladie maudite";}if(Invocation_2.value == "3"){var m1 = m1+" Ami de la Nature Sauvage";}if(Invocation_2.value == "4"){var m1 = m1+" Don de la nature";}if(Invocation_2.value == "5"){var m1 = m1+" Vision de la nature";}if(Invocation_2.value == "6"){var m1 = m1+" Sceau du Caché";}if(Invocation_2.value == "7"){var m1 = m1+" Bénédiction de bonne fortune";}if(Invocation_2.value == "8"){var m1 = m1+" Bénédiction d'amour";}if(Invocation_2.value == "9"){var m1 = m1+" Lumière sacrée";}if(Invocation_2.value == "10"){var m1 = m1+" Eaux de purification";}if(Invocation_2.value == "11"){var m1 = m1+" Toile de mensonges";}if(Invocation_2.value == "12"){var m1 = m1+" Puit de connaissances";}

var m2 = "";
if(Rituel_1.value == "1"){var m2 = "Rituel de purification,";}if(Rituel_1.value == "2"){var m2 = "Hydromancie,";}if(Rituel_1.value == "3"){var m2 = "Message magique,";}if(Rituel_1.value == "4"){var m2 = "Pyromancie,";}if(Rituel_1.value == "5"){var m2 = "Rituel de vie,";}if(Rituel_1.value == "6"){var m2 = "Rituel de magie,";}if(Rituel_1.value == "7"){var m2 = "Lampe magique,";}if(Rituel_1.value == "8"){var m2 = "Séance spirituelle,";}if(Rituel_1.value == "9"){var m2 = "Telecommunication,";}
if(Rituel_2.value == "1"){var m2 = m2+" Rituel de purification";}if(Rituel_2.value == "2"){var m2 = m2+" Hydromancie";}if(Rituel_2.value == "3"){var m2 = m2+" Message magique";}if(Rituel_2.value == "4"){var m2 = m2+" Pyromancie";}if(Rituel_2.value == "5"){var m2 = m2+" Rituel de vie";}if(Rituel_2.value == "6"){var m2 = m2+" Rituel de magie";}if(Rituel_2.value == "7"){var m2 = m2+" Lampe magique";}if(Rituel_2.value == "8"){var m2 = m2+" Séance spirituelle";}if(Rituel_2.value == "9"){var m2 = m2+" Telecommunication";}


Récap_magie.innerHTML = "Invocation : "+m1+"; Rituel : "+m2+"; Malédiction : Le sort des ombres, La démangeaison éternelle";
RRRécap.style.display = "block";

Récap2_magie.value = "Invocation : "+m1+"; Rituel : "+m2+"; Malédiction : Le sort des ombres, La démangeaison éternelle";
}
if (Profession.value == "6"){
// Mage
// 5 Novice Spells, 1 Novice Ritual, 1 Low Danger Hex

var m1 = "";
if(Sort_1.value == "1"){var m1 = "Miroir d'Afan,";}if(Sort_1.value == "2"){var m1 = "Poussière aveuglante,";}if(Sort_1.value == "3"){var m1 = "Dissiper,";}if(Sort_1.value == "4"){var m1 = "Charme,";}if(Sort_1.value == "5"){var m1 = "Boussole magique,";}if(Sort_1.value == "6"){var m1 = "Manipulation mentale,";}if(Sort_1.value == "7"){var m1 = "Invocation d'un bâton,";}if(Sort_1.value == "8"){var m1 = "Télépathie,";}if(Sort_1.value == "9"){var m1 = "Cenlly Graig,";}if(Sort_1.value == "10"){var m1 = "Codi Bywyd,";}if(Sort_1.value == "11"){var m1 = "Sort de diagnostic,";}if(Sort_1.value == "12"){var m1 = "Pointe de terre,";}if(Sort_1.value == "13"){var m1 = "Souffle de Korath,";}if(Sort_1.value == "14"){var m1 = "Plume de Luthien,";}if(Sort_1.value == "15"){var m1 = "Guérison magique,";}if(Sort_1.value == "16"){var m1 = "Prison de Talfryn,";}if(Sort_1.value == "17"){var m1 = "Adenydd,";}if(Sort_1.value == "18"){var m1 = "Poche d'air,";}if(Sort_1.value == "19"){var m1 = "Rafale de Bronwyn,";}if(Sort_1.value == "20"){var m1 = "Air frais,";}if(Sort_1.value == "21"){var m1 = "Le refuge d'Urien,";}if(Sort_1.value == "22"){var m1 = "Tempête statique,";}if(Sort_1.value == "23"){var m1 = "Télékinésie,";}if(Sort_1.value == "24"){var m1 = "Zéphyr,";}if(Sort_1.value == "25"){var m1 = "Aenye,";}if(Sort_1.value == "26"){var m1 = "Aine Verseos,";}if(Sort_1.value == "27"){var m1 = "Marque de feu,";}if(Sort_1.value == "28"){var m1 = "Prise de Cadfan,";}if(Sort_1.value == "29"){var m1 = "Flamboiement magique,";}if(Sort_1.value == "30"){var m1 = "Élever les flammes,";}if(Sort_1.value == "31"){var m1 = "Tanio Ilchar,";}if(Sort_1.value == "32"){var m1 = "Vague de feu,";}if(Sort_1.value == "33"){var m1 = "Salut de Carys,";}if(Sort_1.value == "34"){var m1 = "Contrôle de l'eau,";}if(Sort_1.value == "35"){var m1 = "Malédiction de Sedna,";}if(Sort_1.value == "36"){var m1 = "Brouillard de Dormyn,";}if(Sort_1.value == "37"){var m1 = "Averse,";}if(Sort_1.value == "38"){var m1 = "Nappe de glace,";}if(Sort_1.value == "39"){var m1 = "Puro Dwr,";}if(Sort_1.value == "40"){var m1 = "Rhewi,";}
if(Sort_2.value == "1"){var m1 = m1+" Miroir d'Afan,";}if(Sort_2.value == "2"){var m1 = m1+" Poussière aveuglante,";}if(Sort_2.value == "3"){var m1 = m1+" Dissiper,";}if(Sort_2.value == "4"){var m1 = m1+" Charme,";}if(Sort_2.value == "5"){var m1 = m1+" Boussole magique,";}if(Sort_2.value == "6"){var m1 = m1+" Manipulation mentale,";}if(Sort_2.value == "7"){var m1 = m1+" Invocation d'un bâton,";}if(Sort_2.value == "8"){var m1 = m1+" Télépathie,";}if(Sort_2.value == "9"){var m1 = m1+" Cenlly Graig,";}if(Sort_2.value == "10"){var m1 = m1+" Codi Bywyd,";}if(Sort_2.value == "11"){var m1 = m1+" Sort de diagnostic,";}if(Sort_2.value == "12"){var m1 = m1+" Pointe de terre,";}if(Sort_2.value == "13"){var m1 = m1+" Souffle de Korath,";}if(Sort_2.value == "14"){var m1 = m1+" Plume de Luthien,";}if(Sort_2.value == "15"){var m1 = m1+" Guérison magique,";}if(Sort_2.value == "16"){var m1 = m1+" Prison de Talfryn,";}if(Sort_2.value == "17"){var m1 = m1+" Adenydd,";}if(Sort_2.value == "18"){var m1 = m1+" Poche d'air,";}if(Sort_2.value == "19"){var m1 = m1+" Rafale de Bronwyn,";}if(Sort_2.value == "20"){var m1 = m1+" Air frais,";}if(Sort_2.value == "21"){var m1 = m1+" Le refuge d'Urien,";}if(Sort_2.value == "22"){var m1 = m1+" Tempête statique,";}if(Sort_2.value == "23"){var m1 = m1+" Télékinésie,";}if(Sort_2.value == "24"){var m1 = m1+" Zéphyr,";}if(Sort_2.value == "25"){var m1 = m1+" Aenye,";}if(Sort_2.value == "26"){var m1 = m1+" Aine Verseos,";}if(Sort_2.value == "27"){var m1 = m1+" Marque de feu,";}if(Sort_2.value == "28"){var m1 = m1+" Prise de Cadfan,";}if(Sort_2.value == "29"){var m1 = m1+" Flamboiement magique,";}if(Sort_2.value == "30"){var m1 = m1+" Élever les flammes,";}if(Sort_2.value == "31"){var m1 = m1+" Tanio Ilchar,";}if(Sort_2.value == "32"){var m1 = m1+" Vague de feu,";}if(Sort_2.value == "33"){var m1 = m1+" Salut de Carys,";}if(Sort_2.value == "34"){var m1 = m1+" Contrôle de l'eau,";}if(Sort_2.value == "35"){var m1 = m1+" Malédiction de Sedna,";}if(Sort_2.value == "36"){var m1 = m1+" Brouillard de Dormyn,";}if(Sort_2.value == "37"){var m1 = m1+" Averse,";}if(Sort_2.value == "38"){var m1 = m1+" Nappe de glace,";}if(Sort_2.value == "39"){var m1 = m1+" Puro Dwr,";}if(Sort_2.value == "40"){var m1 = m1+" Rhewi,";}
if(Sort_3.value == "1"){var m1 = m1+" Miroir d'Afan,";}if(Sort_3.value == "2"){var m1 = m1+" Poussière aveuglante,";}if(Sort_3.value == "3"){var m1 = m1+" Dissiper,";}if(Sort_3.value == "4"){var m1 = m1+" Charme,";}if(Sort_3.value == "5"){var m1 = m1+" Boussole magique,";}if(Sort_3.value == "6"){var m1 = m1+" Manipulation mentale,";}if(Sort_3.value == "7"){var m1 = m1+" Invocation d'un bâton,";}if(Sort_3.value == "8"){var m1 = m1+" Télépathie,";}if(Sort_3.value == "9"){var m1 = m1+" Cenlly Graig,";}if(Sort_3.value == "10"){var m1 = m1+" Codi Bywyd,";}if(Sort_3.value == "11"){var m1 = m1+" Sort de diagnostic,";}if(Sort_3.value == "12"){var m1 = m1+" Pointe de terre,";}if(Sort_3.value == "13"){var m1 = m1+" Souffle de Korath,";}if(Sort_3.value == "14"){var m1 = m1+" Plume de Luthien,";}if(Sort_3.value == "15"){var m1 = m1+" Guérison magique,";}if(Sort_3.value == "16"){var m1 = m1+" Prison de Talfryn,";}if(Sort_3.value == "17"){var m1 = m1+" Adenydd,";}if(Sort_3.value == "18"){var m1 = m1+" Poche d'air,";}if(Sort_3.value == "19"){var m1 = m1+" Rafale de Bronwyn,";}if(Sort_3.value == "20"){var m1 = m1+" Air frais,";}if(Sort_3.value == "21"){var m1 = m1+" Le refuge d'Urien,";}if(Sort_3.value == "22"){var m1 = m1+" Tempête statique,";}if(Sort_3.value == "23"){var m1 = m1+" Télékinésie,";}if(Sort_3.value == "24"){var m1 = m1+" Zéphyr,";}if(Sort_3.value == "25"){var m1 = m1+" Aenye,";}if(Sort_3.value == "26"){var m1 = m1+" Aine Verseos,";}if(Sort_3.value == "27"){var m1 = m1+" Marque de feu,";}if(Sort_3.value == "28"){var m1 = m1+" Prise de Cadfan,";}if(Sort_3.value == "29"){var m1 = m1+" Flamboiement magique,";}if(Sort_3.value == "30"){var m1 = m1+" Élever les flammes,";}if(Sort_3.value == "31"){var m1 = m1+" Tanio Ilchar,";}if(Sort_3.value == "32"){var m1 = m1+" Vague de feu,";}if(Sort_3.value == "33"){var m1 = m1+" Salut de Carys,";}if(Sort_3.value == "34"){var m1 = m1+" Contrôle de l'eau,";}if(Sort_3.value == "35"){var m1 = m1+" Malédiction de Sedna,";}if(Sort_3.value == "36"){var m1 = m1+" Brouillard de Dormyn,";}if(Sort_3.value == "37"){var m1 = m1+" Averse,";}if(Sort_3.value == "38"){var m1 = m1+" Nappe de glace,";}if(Sort_3.value == "39"){var m1 = m1+" Puro Dwr,";}if(Sort_3.value == "40"){var m1 = m1+" Rhewi,";}
if(Sort_4.value == "1"){var m1 = m1+" Miroir d'Afan,";}if(Sort_4.value == "2"){var m1 = m1+" Poussière aveuglante,";}if(Sort_4.value == "3"){var m1 = m1+" Dissiper,";}if(Sort_4.value == "4"){var m1 = m1+" Charme,";}if(Sort_4.value == "5"){var m1 = m1+" Boussole magique,";}if(Sort_4.value == "6"){var m1 = m1+" Manipulation mentale,";}if(Sort_4.value == "7"){var m1 = m1+" Invocation d'un bâton,";}if(Sort_4.value == "8"){var m1 = m1+" Télépathie,";}if(Sort_4.value == "9"){var m1 = m1+" Cenlly Graig,";}if(Sort_4.value == "10"){var m1 = m1+" Codi Bywyd,";}if(Sort_4.value == "11"){var m1 = m1+" Sort de diagnostic,";}if(Sort_4.value == "12"){var m1 = m1+" Pointe de terre,";}if(Sort_4.value == "13"){var m1 = m1+" Souffle de Korath,";}if(Sort_4.value == "14"){var m1 = m1+" Plume de Luthien,";}if(Sort_4.value == "15"){var m1 = m1+" Guérison magique,";}if(Sort_4.value == "16"){var m1 = m1+" Prison de Talfryn,";}if(Sort_4.value == "17"){var m1 = m1+" Adenydd,";}if(Sort_4.value == "18"){var m1 = m1+" Poche d'air,";}if(Sort_4.value == "19"){var m1 = m1+" Rafale de Bronwyn,";}if(Sort_4.value == "20"){var m1 = m1+" Air frais,";}if(Sort_4.value == "21"){var m1 = m1+" Le refuge d'Urien,";}if(Sort_4.value == "22"){var m1 = m1+" Tempête statique,";}if(Sort_4.value == "23"){var m1 = m1+" Télékinésie,";}if(Sort_4.value == "24"){var m1 = m1+" Zéphyr,";}if(Sort_4.value == "25"){var m1 = m1+" Aenye,";}if(Sort_4.value == "26"){var m1 = m1+" Aine Verseos,";}if(Sort_4.value == "27"){var m1 = m1+" Marque de feu,";}if(Sort_4.value == "28"){var m1 = m1+" Prise de Cadfan,";}if(Sort_4.value == "29"){var m1 = m1+" Flamboiement magique,";}if(Sort_4.value == "30"){var m1 = m1+" Élever les flammes,";}if(Sort_4.value == "31"){var m1 = m1+" Tanio Ilchar,";}if(Sort_4.value == "32"){var m1 = m1+" Vague de feu,";}if(Sort_4.value == "33"){var m1 = m1+" Salut de Carys,";}if(Sort_4.value == "34"){var m1 = m1+" Contrôle de l'eau,";}if(Sort_4.value == "35"){var m1 = m1+" Malédiction de Sedna,";}if(Sort_4.value == "36"){var m1 = m1+" Brouillard de Dormyn,";}if(Sort_4.value == "37"){var m1 = m1+" Averse,";}if(Sort_4.value == "38"){var m1 = m1+" Nappe de glace,";}if(Sort_4.value == "39"){var m1 = m1+" Puro Dwr,";}if(Sort_4.value == "40"){var m1 = m1+" Rhewi,";}
if(Sort_5.value == "1"){var m1 = m1+" Miroir d'Afan,";}if(Sort_5.value == "2"){var m1 = m1+" Poussière aveuglante,";}if(Sort_5.value == "3"){var m1 = m1+" Dissiper,";}if(Sort_5.value == "4"){var m1 = m1+" Charme,";}if(Sort_5.value == "5"){var m1 = m1+" Boussole magique,";}if(Sort_5.value == "6"){var m1 = m1+" Manipulation mentale,";}if(Sort_5.value == "7"){var m1 = m1+" Invocation d'un bâton,";}if(Sort_5.value == "8"){var m1 = m1+" Télépathie,";}if(Sort_5.value == "9"){var m1 = m1+" Cenlly Graig,";}if(Sort_5.value == "10"){var m1 = m1+" Codi Bywyd,";}if(Sort_5.value == "11"){var m1 = m1+" Sort de diagnostic,";}if(Sort_5.value == "12"){var m1 = m1+" Pointe de terre,";}if(Sort_5.value == "13"){var m1 = m1+" Souffle de Korath,";}if(Sort_5.value == "14"){var m1 = m1+" Plume de Luthien,";}if(Sort_5.value == "15"){var m1 = m1+" Guérison magique,";}if(Sort_5.value == "16"){var m1 = m1+" Prison de Talfryn,";}if(Sort_5.value == "17"){var m1 = m1+" Adenydd,";}if(Sort_5.value == "18"){var m1 = m1+" Poche d'air,";}if(Sort_5.value == "19"){var m1 = m1+" Rafale de Bronwyn,";}if(Sort_5.value == "20"){var m1 = m1+" Air frais,";}if(Sort_5.value == "21"){var m1 = m1+" Le refuge d'Urien,";}if(Sort_5.value == "22"){var m1 = m1+" Tempête statique,";}if(Sort_5.value == "23"){var m1 = m1+" Télékinésie,";}if(Sort_5.value == "24"){var m1 = m1+" Zéphyr,";}if(Sort_5.value == "25"){var m1 = m1+" Aenye,";}if(Sort_5.value == "26"){var m1 = m1+" Aine Verseos,";}if(Sort_5.value == "27"){var m1 = m1+" Marque de feu,";}if(Sort_5.value == "28"){var m1 = m1+" Prise de Cadfan,";}if(Sort_5.value == "29"){var m1 = m1+" Flamboiement magique,";}if(Sort_5.value == "30"){var m1 = m1+" Élever les flammes,";}if(Sort_5.value == "31"){var m1 = m1+" Tanio Ilchar,";}if(Sort_5.value == "32"){var m1 = m1+" Vague de feu,";}if(Sort_5.value == "33"){var m1 = m1+" Salut de Carys,";}if(Sort_5.value == "34"){var m1 = m1+" Contrôle de l'eau,";}if(Sort_5.value == "35"){var m1 = m1+" Malédiction de Sedna,";}if(Sort_5.value == "36"){var m1 = m1+" Brouillard de Dormyn,";}if(Sort_5.value == "37"){var m1 = m1+" Averse,";}if(Sort_5.value == "38"){var m1 = m1+" Nappe de glace,";}if(Sort_5.value == "39"){var m1 = m1+" Puro Dwr,";}if(Sort_5.value == "40"){var m1 = m1+" Rhewi,";}

var m2 = "";
if(Rituel_1.value == "1"){var m2 = "Rituel de purification,";}if(Rituel_1.value == "2"){var m2 = "Hydromancie,";}if(Rituel_1.value == "3"){var m2 = "Message magique,";}if(Rituel_1.value == "4"){var m2 = "Pyromancie,";}if(Rituel_1.value == "5"){var m2 = "Rituel de vie,";}if(Rituel_1.value == "6"){var m2 = "Rituel de magie,";}if(Rituel_1.value == "7"){var m2 = "Lampe magique,";}if(Rituel_1.value == "8"){var m2 = "Séance spirituelle,";}if(Rituel_1.value == "9"){var m2 = "Telecommunication,";}

var m3 = "";
if(Malédiction_1.value == "1"){var m3 = "Le sort des ombres";}if(Malédiction_1.value == "2"){var m3 = "La démangeaison éternelle";}

Récap_magie.innerHTML = "Sort : "+m1+"; Rituel : "+m2+"; Malédiction : "+m3;
RRRécap.style.display = "block";

Récap2_magie.value = "Sort : "+m1+"; Rituel : "+m2+"; Malédiction : "+m3;
}












}

function RandomLifeWither(){

	if(HdV_random_Witcher.checked == true){
        var Age = Math.floor(Math.random() * Math.floor(10))+1;
if(Age < "3"){Sorceleur_1.value = "1";}
else if(Age > "8"){Sorceleur_1.value = "3";}
else{Sorceleur_1.value = "2";}

        var School = Math.floor(Math.random() * Math.floor(10))+1;
if(School < "3"){Sorceleur_2.value = "1";}
if(School > "2" && School < "5"){Sorceleur_2.value = "2";}
if(School > "4" && School < "7"){Sorceleur_2.value = "3";}
if(School > "6" && School < "9"){Sorceleur_2.value = "4";}
if(School > "8"){Sorceleur_2.value = "5";}

        var EventImportant = Math.floor(Math.random() * Math.floor(10))+1;
		Sorceleur_5.value = EventImportant;
        var Now = Math.floor(Math.random() * Math.floor(10))+1;
if(Now == "1"){Sorceleur_6.value = "1";}
if(Now == "2"){Sorceleur_6.value = "2";}
if(Now > "2" && Now < "9"){Sorceleur_6.value = "3";}
if(Now == "9"){Sorceleur_6.value = "4";}
if(Now == "10"){Sorceleur_6.value = "5";}
	
	}

if(Evénement_Sorceleur_1.innerHTML == ""){

    if(Sorceleur_7.value == "1"){
        var Danger = Math.floor(Math.random() * Math.floor(100))+1;
        // Danger si < 10
    var Danger_aff = "";
    if(Danger <= "10"){
        var EV_Danger = Math.floor(Math.random() * Math.floor(10))+1;
        // 1-3 Events ; 4-6 Wounds ; 7-10 Enemies
        if(EV_Danger < "4"){	// Events
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){
        var dette = Number(Math.floor(Math.random() * Math.floor(10))+1)*10;
        var Danger_aff = "<b>Dette</b> : à cause d'un équipement cassé, d'une partie de Gwent ou autres, vous avez fait croître une dette de "+dette+" couronnes à un établissement ou une maison noble.";
    }
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Monstre échappé</b> : Un troll, un katakan, un loup-garou ou un autre monstre que vous chassiez vous a échappé et se promène librement. Ils peuvent revenir un jour...";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Dépendance</b> : Vous êtes tombé sur des moments difficiles et avez contracté une dépendance.";}
    if(EV_Danger_EV == "4"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
        var Danger_aff = "<b>Détenu</b> : Vous avez passé "+dette+" ans de cette décennie dans une prison en raison de fausses accusations, ou peut-être d'un crime que vous avez commis.";
    }
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Accusé à tort</b> : Soit quelqu'un veut que tu partes, soit tu étais le parfait bouc émissaire.";}
    if(EV_Danger_EV == "6"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "Il vous a fait chanté.";}
    else if(dette > "7"){var dette = "Il vous a attaqué dans le dos.";}
    else{var dette = "Il a dévoilé un de vos secrets.";}
        var Danger_aff = "<b>Trahi</b> : Un ami ou un amant vous a trahi."+dette;
    }
    if(EV_Danger_EV == "7"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "tué par un monstre.";}
    if(dette > "3" && dette < "7"){var dette = "exécuté.";}
    if(dette > "6" && dette < "9" ){var dette = "assassiné.";}
    if(dette > "8"){var dette = "empoisonné.";}
        var Danger_aff = "<b>Ami ou amant tué</b> : Un proche a été "+dette;
    }
    if(EV_Danger_EV == "8"){
        var Danger_aff = "<b>Hors la loi</b> : Vous avez été interdit de territoire à la suite d'actes odieux contre le royaume ou de fausses accusations. Dans ce royaume, vous êtes recherché par la Garde.";
    }
    if(EV_Danger_EV == "9"){
        var Danger_aff = "<b>Manipulé</b> : Vous avez été manipulé pour briser votre neutralité. Vous décidez comment cela s'est produit, mais quiconque connaît votre réputation sait que vous n'êtes pas neutre.";
    }
    if(EV_Danger_EV == "10"){
        var Danger_aff = "<b>Maudit</b> : Vous avez été touché par une malédiction. A voir avec le MJ.";
    }	
        }
        else if(EV_Danger > 6){	// Enemies
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "un";}else{var Sexe = "une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession < "3"){var Profession = " noble";}
    if(Profession > "2" && Profession < "5"){var Profession = " mercenaire";}
    if(Profession > "4" && Profession < "7"){var Profession = " soldat";}
    if(Profession > "6" && Profession < "9"){var Profession = " marchand";}
    if(Profession > "8"){var Profession = " criminel";}
        var Cause = Math.floor(Math.random() * Math.floor(10))+1;
    if(Cause < "3"){var Cause = " qui vous a calomnié";}
    if(Cause > "2" && Cause < "5"){var Cause = " a qui vous avez déjoué ses plans.";}
    if(Cause > "4" && Cause < "7"){var Cause = " qui vous a trahi.";}
    if(Cause > "6" && Cause < "9"){var Cause = " a qui vous avez tué ses parents.";}
    if(Cause > "8"){var Cause = " qui vous a trompé.";}
        var Pouvoir = Math.floor(Math.random() * Math.floor(10))+1;
    if(Pouvoir < "3"){var Pouvoir = " avec un bon statut social";}
    if(Pouvoir > "2" && Pouvoir < "5"){var Pouvoir = " avec beaucoup de connaissances";}
    if(Pouvoir > "4" && Pouvoir < "7"){var Pouvoir = " doué physiquement";}
    if(Pouvoir > "6" && Pouvoir < "9"){var Pouvoir = " avec de nombreux sbires";}
    if(Pouvoir > "8"){var Pouvoir = " doué magiquement";}
        var Escalade = Math.floor(Math.random() * Math.floor(10))+1;
    if(Escalade < "3"){var Escalade = " C'est presque oublié.";}
    if(Escalade > "2" && Escalade < "5"){var Escalade = " Il/elle tentera de vous poignarder à la moindre occasion.";}
    if(Escalade > "4" && Escalade < "7"){var Escalade = " Il/elle est extrement violent.";}
    if(Escalade > "6" && Escalade < "9"){var Escalade = " Il/elle est en quête de revanche.";}
    if(Escalade > "8"){var Escalade = " Il/elle réclame votre sang.";}
    
        var DCD = Math.floor(Math.random() * Math.floor(10))+1;
    if(DCD <= "30"){var DCD = "<br>Fort heureusement, il/elle est morte depuis ce temps.";}else{var DCD = "<br>Malheuresement, il/elle toujours en vie...";}
        var Danger_aff = "<b>Ennemi</b> :"+Sexe+Profession+Pouvoir+Cause+Escalade+DCD;
        }
        else{	// Wounds
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){var Danger_aff = "<b>Genou rigide (-1 SPD)</b> : Une horrible blessure à votre jambe l'a brisée et presque irrémédiable. Même après une intervention chirurgicale et un régime de potions de sorceleur, il n'a jamais été le même.";}
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Oeil endommagé (-1 Vigilance (vision))</b> : Habituellement, les sorceleurs sont assez rapides pour éviter une attaque, mais certains monstres sont trop rapides. Un coup dans l'œil l'a laissé légèrement flou.";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Bras raide (-1 Mêlée)</b> : Un coup fracassant sur votre bras vous a laissé des semaines de récupération et un bras raide. Vous pouvez toujours tenir une épée et vous battre, mais la raideur vous aggrave toujours.";}
    if(EV_Danger_EV == "4"){var Danger_aff = "<b>Doigts endommagés (impossible de faire des signes avec cette main)</b> : Cela peut avoir été le résultat de la torture ou simplement d'une frappe très malchanceuse à cette main au combat, mais ses doigts sont raides et maladroits.";}
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Pointe de flèche intégrée (-1 Physique)</b> : Un tireur d'élite vous a laissé une pointe de flèche dans votre corps, logée dans votre muscle.";}
    if(EV_Danger_EV == "6"){var Danger_aff = "<b>Respiration sifflante (-5 points d'endurance)</b> : Vous avez peut-être été poignardé aux poumons ou inhalé un gaz toxique. De toute façon, vos poumons ont été endommagés; respirer normalement est quelque peu difficile.";}
    if(EV_Danger_EV == "7"){var Danger_aff = "<b>Énorme cicatrice (-2 charme et séduction)</b> : Il n’est pas rare que le corps d’un sorceleur soit un rempli de cicatrices. Cependant, vous avez subi un coup qui a défiguré votre visage.";}
    if(EV_Danger_EV == "8"){var Danger_aff = "<b>Nez endommagé (-2 Sens accrus)</b> : Un certain nombre de coups de poing au visage dans des combats de barres (ou des gaz toxiques) ont endommagé votre nez et vous ont presque volé votre suivi de parfum.";}
    if(EV_Danger_EV == "9"){var Danger_aff = "<b>Dégâts de venin (-5 PV)</b> : Des toxines qui se sont répandues et qui vous ont laissé des veines noircies autour de la blessure et a affaibli votre corps.";}
    if(EV_Danger_EV == "10"){var Danger_aff = "<b>À moitié sourd (-1 Vigilance (audition))</b> : De nombreux monstres utilisent des attaques sonores mortelles. Vous avez eu la chance d'en survivre, mais vos oreilles ne seront plus jamais les mêmes.";}
        }
    }
    
        var EV = Math.floor(Math.random() * Math.floor(10))+1;
        // Bénéfice : 1 ; Allier : 2 ; Chasse : 3 ; Rien : 4-10
    if(EV == "1"){ // Bénéfice
        var Chance = Math.floor(Math.random() * Math.floor(10))+1;
    if(Chance == "1"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise == "1"){var Surprise = "un bébé.";}
    if(Surprise == "2"){var Surprise = "un chien.";}
    if(Surprise == "3"){var Surprise = "un cheval.";}
    if(Surprise == "4"){var Surprise = "une nouvelle charrue.";}
    if(Surprise == "5"){var Surprise = "un chat.";}
    if(Surprise == "6"){var Surprise = "un baril de bière.";}
    if(Surprise == "7"){var Surprise = "un bijou d'une valeur de 700 couronnes.";}
    if(Surprise == "8"){var Surprise = "une arme valant jusqu'à 500 couronnes.";}
    if(Surprise == "9"){var Surprise = "un bœuf.";}
    if(Surprise == "10"){var Surprise = "une mule.";}
        var EV = "<b>Droit de surprise</b> : Vous avez invoqué le Droit de surprises au cours de cette décennie et vous avez obtenu "+Surprise;
    }
    if(Chance == "2"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "7"){var Surprise = "Cela a duré quelques semaines.";}
    if(Surprise > "8"){var Surprise = "Cela a duré quelques mois.";}
    else{var Surprise = " Ça continue, avec des hauts et des bas.";}
        var EV = "<br>Romance</br> : Vous avez trouvé un amant qui a vu au-delà de vos mutations et désensibilisation. D'une manière ou d'une autre, vous avez réussi à établir un lien significatif avec une personne."+Surprise;
    }
    if(Chance == "3"){
        var Surprise = Number(Math.floor(Math.random() * Math.floor(10))+1)*100;
        var EV = "<br>Aubaine</br> : Vous avez ramassé une quantité étonnamment élevée de pièces au cours de cette décennie. Vous avez réussi non seulement à payer les ingrédients d'alchimie et les réparations de votre équipement, mais également à mettre de l'argent de côté pour réaliser des économies légitimes. Vous gagnez "+Surprise+" couronnes.";
    }
    if(Chance == "4"){var EV = "<br>Faveur d'un noble</br> : Vous avez effectué une tâche pour un noble. C'était peut-être légal, c'était peut-être illégal - de toute façon, le noble que vous avez aidé vous doit beaucoup. Vous pouvez invoquer cette faveur à tout moment mais elle doit être raisonnable.";}
    if(Chance == "5"){var EV = "<br>Les secrets du sorceleur transmis</br> : Au cours de vos voyages, vous avez rencontré et voyagé avec un autre sorceleur. Ce sorceleur vous a enseigné et partagé des connaissances perdues depuis longtemps. Vous obtenez un diagramme de sorceleur: une potion, de l'huile ou une décoction de votre choix.";}
    if(Chance == "6"){var EV = "<br>Valereux</br> : À un moment donné de cette décennie, vous avez combattu courageusement pour défendre un pays. Vous êtes peut-être allé protéger quelqu'un ou vous vous êtes peut-être trouvé au bon endroit au bon moment. Pour cette grande action, vous avez été fait chevalier par un roi / reine. Vous gagnez +1 en réputation dans le pays de votre choix.";}
    if(Chance == "7"){var EV = "<br>Avec les bandits</br> : Vous êtes tombé sur un groupe de bandits ou scoia’tael pendant une chasse. Vous n'êtes peut-être pas d'accord avec leurs méthodes, mais ils ne vous ont pas dérangés et vous ne les avez pas dérangés. Vous avez même partagé des boissons. Vous pouvez leur demander une faveur une fois par mois tant que cela est raisonnable.";}
    if(Chance == "8"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "3" ){var Surprise = "une amélioration elfique.";}
    if(Surprise > "2" && Surprise < 5){var Surprise = "un message elfique.";}
    if(Surprise > "4" && Surprise < 7){var Surprise = "une amélioration naine.";}
    if(Surprise > "6" && Surprise < 9){var Surprise = "une arbalète à main gnome.";}
    if(Surprise > "8"){var Surprise = "un manteau nain.";}	
        var EV = "<br>A exploré une ruine</br> : Vous deviez chasser un monstre à travers une ruine grande et complexe. En chemin, vous avez trouvé quelque chose d'utile :  "+Surprise;
    }
    if(Chance == "9"){var EV = "<br>Faveur d'un mage</br> : Au cours de cette décennie, vous avez rendu service à un mage. Vous avez peut-être rassemblé des pièces de monstre pour leurs expériences, laissez-les vous étudier ou même capturé un monstre vivant pour eux. Quoi qu'il en soit, le mage vous doit maintenant une faveur en retour tant qu'elle est raisonnable.";}
    if(Chance == "10"){var EV = "<br>Trouvé un maître</br> : Vous avez passé plusieurs semaines à apprendre, à pratiquer et à demander conseil à votre mentor. C'était une expérience étrange. Vous pouvez gagner +1 dans n'importe quelle compétence INT ou commencer une nouvelle compétence INT à +2.";}
    }
    if(EV == "2"){ // Allier
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "Un";}else{var Sexe = "Une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession == "1"){var Profession = " chasseur de prime";}
    if(Profession == "2"){var Profession = " mage";}
    if(Profession == "3"){var Profession = " mentor";}
    if(Profession == "4"){var Profession = " un ami d'enfance";}
    if(Profession == "5"){var Profession = " artisan";}
    if(Profession == "6"){var Profession = " ancien ennemi";}
    if(Profession == "7"){var Profession = " duc";}
    if(Profession == "8"){var Profession = " prêtre";}
    if(Profession == "9"){var Profession = " soldat";}
    if(Profession == "10"){var Profession = " barde";}
    
        var Rencontre = Math.floor(Math.random() * Math.floor(10))+1;
    if(Rencontre == "1"){var Rencontre = " que vous avez sauvé.";}
    if(Rencontre == "2"){var Rencontre = " que vous avez rencontré dans une taverne.";}
    if(Rencontre == "3"){var Rencontre = " qui vous a sauvé.";}
    if(Rencontre == "4"){var Rencontre = " qui vous a engagé.";}
    if(Rencontre == "5"){var Rencontre = " avec qui vous êtiez prisonnés.";}
    if(Rencontre == "6"){var Rencontre = " avec qui vous êtiez obligé de travailler.";}
    if(Rencontre == "7"){var Rencontre = " que vous avez engagé.";}
    if(Rencontre == "8"){var Rencontre = " que vous avez rencontré quand vous êtiez complètement saoul.";}
    if(Rencontre == "9"){var Rencontre = " que vous avez rencontré pendant vos voyages.";}
    if(Rencontre == "10"){var Rencontre = " avec qui vous avez combattu.";}
        var Proche = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proche < "7"){var Proche = " Vous êtes des connaissances.";}
    else if(Proche == "10"){var Proche = " Vous êtes lié par serment.";}
    else{var Proche = " Vous êtes des amis.";}
        var Vivant = Math.floor(Math.random() * Math.floor(100))+1;
    if(Vivant <= "30"){var Vivant = "<br>Malheuresement, il/elle est morte.";}else{var Vivant = "<br>Heureusement, il/elle est toujours vivant.";}
    
        var EV = "<b>Allier</b> : "+Sexe+Profession+Rencontre+Proche+Vivant;
    }
    if(EV == "3"){	// Chasse
        var Proie = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proie == "1"){var Proie = "un spectre";}
    if(Proie == "2"){var Proie = "une créature maudite";}
    if(Proie == "3"){var Proie = "un hybride";}
    if(Proie == "4"){var Proie = "un insectoïde";}
    if(Proie == "5"){var Proie = "un élémentaire";}
    if(Proie == "6"){var Proie = "une veuve";}
    if(Proie == "7"){var Proie = "un ogre";}
    if(Proie == "8"){var Proie = "un draconide";}
    if(Proie == "9"){var Proie = "un nécrophage";}
    if(Proie == "10"){var Proie = "un vampire";}
        var Lieu = Math.floor(Math.random() * Math.floor(10))+1;
    if(Lieu == "1"){var Lieu = " dans une fôret.";}
    if(Lieu == "2"){var Lieu = " dans un batiment.";}
    if(Lieu == "3"){var Lieu = " dans un batiment abandonné.";}
    if(Lieu == "4"){var Lieu = " sur la côte.";}
    if(Lieu == "5"){var Lieu = " dans la montagne.";}
    if(Lieu == "6"){var Lieu = " dans une ville.";}
    if(Lieu == "7"){var Lieu = " dans un cimetierre.";}
    if(Lieu == "8"){var Lieu = " dans un hameau.";}
    if(Lieu == "9"){var Lieu = " le long de la rivière.";}
    if(Lieu == "10"){var Lieu = " dans un grotte.";}
    
        var Fin = Math.floor(Math.random() * Math.floor(10))+1;
    if(Fin < "3"){var Fin = " Vous avez pris votre argent et vous êtes parti.";}
    if(Fin > "2" && Fin < "5"){var Fin = " L'employeur a refusé de payer.";}
    if(Fin > "4" && Fin < "7"){var Fin = " L'employeur vous a payé en échange.";}
    if(Fin > "6" && Fin < "9"){var Fin = " Ce fut un combat particulièrement difficile.";}
    if(Fin > "8"){var Fin = " Ce fut un combat étonnamment facile.";}
        var PB = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB < "5"){
        var PB2 = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB2 == "1"){var Fin = " Malheuresement, le monstre était faux.";}	
    if(PB2 == "2"){var Fin = " Malheuresement, c'était une malédiction.";}	
    if(PB2 == "3"){var Fin = " Malheuresement, le monstre était déjà mort.";}	
    if(PB2 == "4"){var Fin = " Malheuresement, ce n'était pas ce que vous pensiez.";}
    if(PB2 == "5"){var Fin = " Malheuresement, votre employeur voulait l'attrapé vivant.";}
    if(PB2 == "6"){var Fin = " Malheuresement, l'employeur est à blâmer pour tout cela";}
    if(PB2 == "7"){var Fin = " Malheuresement, le monstre était inoffensif.";}
    if(PB2 == "8"){var Fin = " Malheuresement, c'était un piège.";}
    if(PB2 == "9"){var Fin = " Malheuresement, c'était plus que ce qu'on vous avait dit.";}
    if(PB2 == "10"){var Fin = " Malheuresement, un mage était derrière tout ça.";}
    }
    
        var EV = "<b>Chasse</b> : "+Proie+Lieu+Fin;
        
    }
    else{var EV = "Il ne s'est rien passé de notable."}
        Evénement_Sorceleur_1.innerHTML = Danger_aff+EV;
    }

    if(Sorceleur_7.value == "2"){
        var Danger = Math.floor(Math.random() * Math.floor(100))+1;
        // Danger si < 25
    var Danger_aff = "";
    if(Danger <= "25"){
        var EV_Danger = Math.floor(Math.random() * Math.floor(10))+1;
        // 1-3 Events ; 4-6 Wounds ; 7-10 Enemies
        if(EV_Danger < "4"){	// Events
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){
        var dette = Number(Math.floor(Math.random() * Math.floor(10))+1)*10;
        var Danger_aff = "<b>Dette</b> : à cause d'un équipement cassé, d'une partie de Gwent ou autres, vous avez fait croître une dette de "+dette+" couronnes à un établissement ou une maison noble.";
    }
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Monstre échappé</b> : Un troll, un katakan, un loup-garou ou un autre monstre que vous chassiez vous a échappé et se promène librement. Ils peuvent revenir un jour...";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Dépendance</b> : Vous êtes tombé sur des moments difficiles et avez contracté une dépendance.";}
    if(EV_Danger_EV == "4"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
        var Danger_aff = "<b>Détenu</b> : Vous avez passé "+dette+" ans de cette décennie dans une prison en raison de fausses accusations, ou peut-être d'un crime que vous avez commis.";
    }
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Accusé à tort</b> : Soit quelqu'un veut que tu partes, soit tu étais le parfait bouc émissaire.";}
    if(EV_Danger_EV == "6"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "Il vous a fait chanté.";}
    else if(dette > "7"){var dette = "Il vous a attaqué dans le dos.";}
    else{var dette = "Il a dévoilé un de vos secrets.";}
        var Danger_aff = "<b>Trahi</b> : Un ami ou un amant vous a trahi."+dette;
    }
    if(EV_Danger_EV == "7"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "tué par un monstre.";}
    if(dette > "3" && dette < "7"){var dette = "exécuté.";}
    if(dette > "6" && dette < "9" ){var dette = "assassiné.";}
    if(dette > "8"){var dette = "empoisonné.";}
        var Danger_aff = "<b>Ami ou amant tué</b> : Un proche a été "+dette;
    }
    if(EV_Danger_EV == "8"){
        var Danger_aff = "<b>Hors la loi</b> : Vous avez été interdit de territoire à la suite d'actes odieux contre le royaume ou de fausses accusations. Dans ce royaume, vous êtes recherché par la Garde.";
    }
    if(EV_Danger_EV == "9"){
        var Danger_aff = "<b>Manipulé</b> : Vous avez été manipulé pour briser votre neutralité. Vous décidez comment cela s'est produit, mais quiconque connaît votre réputation sait que vous n'êtes pas neutre.";
    }
    if(EV_Danger_EV == "10"){
        var Danger_aff = "<b>Maudit</b> : Vous avez été touché par une malédiction. A voir avec le MJ.";
    }	
        }
        else if(EV_Danger > 6){	// Enemies
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "un";}else{var Sexe = "une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession < "3"){var Profession = " noble";}
    if(Profession > "2" && Profession < "5"){var Profession = " mercenaire";}
    if(Profession > "4" && Profession < "7"){var Profession = " soldat";}
    if(Profession > "6" && Profession < "9"){var Profession = " marchand";}
    if(Profession > "8"){var Profession = " criminel";}
        var Cause = Math.floor(Math.random() * Math.floor(10))+1;
    if(Cause < "3"){var Cause = " qui vous a calomnié";}
    if(Cause > "2" && Cause < "5"){var Cause = " a qui vous avez déjoué ses plans.";}
    if(Cause > "4" && Cause < "7"){var Cause = " qui vous a trahi.";}
    if(Cause > "6" && Cause < "9"){var Cause = " a qui vous avez tué ses parents.";}
    if(Cause > "8"){var Cause = " qui vous a trompé.";}
        var Pouvoir = Math.floor(Math.random() * Math.floor(10))+1;
    if(Pouvoir < "3"){var Pouvoir = " avec un bon statut social";}
    if(Pouvoir > "2" && Pouvoir < "5"){var Pouvoir = " avec beaucoup de connaissances";}
    if(Pouvoir > "4" && Pouvoir < "7"){var Pouvoir = " doué physiquement";}
    if(Pouvoir > "6" && Pouvoir < "9"){var Pouvoir = " avec de nombreux sbires";}
    if(Pouvoir > "8"){var Pouvoir = " doué magiquement";}
        var Escalade = Math.floor(Math.random() * Math.floor(10))+1;
    if(Escalade < "3"){var Escalade = " C'est presque oublié.";}
    if(Escalade > "2" && Escalade < "5"){var Escalade = " Il/elle tentera de vous poignarder à la moindre occasion.";}
    if(Escalade > "4" && Escalade < "7"){var Escalade = " Il/elle est extrement violent.";}
    if(Escalade > "6" && Escalade < "9"){var Escalade = " Il/elle est en quête de revanche.";}
    if(Escalade > "8"){var Escalade = " Il/elle réclame votre sang.";}
    
        var DCD = Math.floor(Math.random() * Math.floor(10))+1;
    if(DCD <= "30"){var DCD = "<br>Fort heureusement, il/elle est morte depuis ce temps.";}else{var DCD = "<br>Malheuresement, il/elle toujours en vie...";}
        var Danger_aff = "<b>Ennemi</b> :"+Sexe+Profession+Pouvoir+Cause+Escalade+DCD;
        }
        else{	// Wounds
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){var Danger_aff = "<b>Genou rigide (-1 SPD)</b> : Une horrible blessure à votre jambe l'a brisée et presque irrémédiable. Même après une intervention chirurgicale et un régime de potions de sorceleur, il n'a jamais été le même.";}
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Oeil endommagé (-1 Vigilance (vision))</b> : Habituellement, les sorceleurs sont assez rapides pour éviter une attaque, mais certains monstres sont trop rapides. Un coup dans l'œil l'a laissé légèrement flou.";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Bras raide (-1 Mêlée)</b> : Un coup fracassant sur votre bras vous a laissé des semaines de récupération et un bras raide. Vous pouvez toujours tenir une épée et vous battre, mais la raideur vous aggrave toujours.";}
    if(EV_Danger_EV == "4"){var Danger_aff = "<b>Doigts endommagés (impossible de faire des signes avec cette main)</b> : Cela peut avoir été le résultat de la torture ou simplement d'une frappe très malchanceuse à cette main au combat, mais ses doigts sont raides et maladroits.";}
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Pointe de flèche intégrée (-1 Physique)</b> : Un tireur d'élite vous a laissé une pointe de flèche dans votre corps, logée dans votre muscle.";}
    if(EV_Danger_EV == "6"){var Danger_aff = "<b>Respiration sifflante (-5 points d'endurance)</b> : Vous avez peut-être été poignardé aux poumons ou inhalé un gaz toxique. De toute façon, vos poumons ont été endommagés; respirer normalement est quelque peu difficile.";}
    if(EV_Danger_EV == "7"){var Danger_aff = "<b>Énorme cicatrice (-2 charme et séduction)</b> : Il n’est pas rare que le corps d’un sorceleur soit un rempli de cicatrices. Cependant, vous avez subi un coup qui a défiguré votre visage.";}
    if(EV_Danger_EV == "8"){var Danger_aff = "<b>Nez endommagé (-2 Sens accrus)</b> : Un certain nombre de coups de poing au visage dans des combats de barres (ou des gaz toxiques) ont endommagé votre nez et vous ont presque volé votre suivi de parfum.";}
    if(EV_Danger_EV == "9"){var Danger_aff = "<b>Dégâts de venin (-5 PV)</b> : Des toxines qui se sont répandues et qui vous ont laissé des veines noircies autour de la blessure et a affaibli votre corps.";}
    if(EV_Danger_EV == "10"){var Danger_aff = "<b>À moitié sourd (-1 Vigilance (audition))</b> : De nombreux monstres utilisent des attaques sonores mortelles. Vous avez eu la chance d'en survivre, mais vos oreilles ne seront plus jamais les mêmes.";}
        }
    }
    
        var EV = Math.floor(Math.random() * Math.floor(10))+1;
        // Bénéfice : 1 ; Allier : 2 ; Chasse : 3-5 ; Rien : 6-10
    if(EV == "1"){ // Bénéfice
        var Chance = Math.floor(Math.random() * Math.floor(10))+1;
    if(Chance == "1"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise == "1"){var Surprise = "un bébé.";}
    if(Surprise == "2"){var Surprise = "un chien.";}
    if(Surprise == "3"){var Surprise = "un cheval.";}
    if(Surprise == "4"){var Surprise = "une nouvelle charrue.";}
    if(Surprise == "5"){var Surprise = "un chat.";}
    if(Surprise == "6"){var Surprise = "un baril de bière.";}
    if(Surprise == "7"){var Surprise = "un bijou d'une valeur de 700 couronnes.";}
    if(Surprise == "8"){var Surprise = "une arme valant jusqu'à 500 couronnes.";}
    if(Surprise == "9"){var Surprise = "un bœuf.";}
    if(Surprise == "10"){var Surprise = "une mule.";}
        var EV = "<b>Droit de surprise</b> : Vous avez invoqué le Droit de surprises au cours de cette décennie et vous avez obtenu "+Surprise;
    }
    if(Chance == "2"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "7"){var Surprise = "Cela a duré quelques semaines.";}
    if(Surprise > "8"){var Surprise = "Cela a duré quelques mois.";}
    else{var Surprise = " Ça continue, avec des hauts et des bas.";}
        var EV = "<br>Romance</br> : Vous avez trouvé un amant qui a vu au-delà de vos mutations et désensibilisation. D'une manière ou d'une autre, vous avez réussi à établir un lien significatif avec une personne."+Surprise;
    }
    if(Chance == "3"){
        var Surprise = Number(Math.floor(Math.random() * Math.floor(10))+1)*100;
        var EV = "<br>Aubaine</br> : Vous avez ramassé une quantité étonnamment élevée de pièces au cours de cette décennie. Vous avez réussi non seulement à payer les ingrédients d'alchimie et les réparations de votre équipement, mais également à mettre de l'argent de côté pour réaliser des économies légitimes. Vous gagnez "+Surprise+" couronnes.";
    }
    if(Chance == "4"){var EV = "<br>Faveur d'un noble</br> : Vous avez effectué une tâche pour un noble. C'était peut-être légal, c'était peut-être illégal - de toute façon, le noble que vous avez aidé vous doit beaucoup. Vous pouvez invoquer cette faveur à tout moment mais elle doit être raisonnable.";}
    if(Chance == "5"){var EV = "<br>Les secrets du sorceleur transmis</br> : Au cours de vos voyages, vous avez rencontré et voyagé avec un autre sorceleur. Ce sorceleur vous a enseigné et partagé des connaissances perdues depuis longtemps. Vous obtenez un diagramme de sorceleur: une potion, de l'huile ou une décoction de votre choix.";}
    if(Chance == "6"){var EV = "<br>Valereux</br> : À un moment donné de cette décennie, vous avez combattu courageusement pour défendre un pays. Vous êtes peut-être allé protéger quelqu'un ou vous vous êtes peut-être trouvé au bon endroit au bon moment. Pour cette grande action, vous avez été fait chevalier par un roi / reine. Vous gagnez +1 en réputation dans le pays de votre choix.";}
    if(Chance == "7"){var EV = "<br>Avec les bandits</br> : Vous êtes tombé sur un groupe de bandits ou scoia’tael pendant une chasse. Vous n'êtes peut-être pas d'accord avec leurs méthodes, mais ils ne vous ont pas dérangés et vous ne les avez pas dérangés. Vous avez même partagé des boissons. Vous pouvez leur demander une faveur une fois par mois tant que cela est raisonnable.";}
    if(Chance == "8"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "3" ){var Surprise = "une amélioration elfique.";}
    if(Surprise > "2" && Surprise < 5){var Surprise = "un message elfique.";}
    if(Surprise > "4" && Surprise < 7){var Surprise = "une amélioration naine.";}
    if(Surprise > "6" && Surprise < 9){var Surprise = "une arbalète à main gnome.";}
    if(Surprise > "8"){var Surprise = "un manteau nain.";}	
        var EV = "<br>A exploré une ruine</br> : Vous deviez chasser un monstre à travers une ruine grande et complexe. En chemin, vous avez trouvé quelque chose d'utile :  "+Surprise;
    }
    if(Chance == "9"){var EV = "<br>Faveur d'un mage</br> : Au cours de cette décennie, vous avez rendu service à un mage. Vous avez peut-être rassemblé des pièces de monstre pour leurs expériences, laissez-les vous étudier ou même capturé un monstre vivant pour eux. Quoi qu'il en soit, le mage vous doit maintenant une faveur en retour tant qu'elle est raisonnable.";}
    if(Chance == "10"){var EV = "<br>Trouvé un maître</br> : Vous avez passé plusieurs semaines à apprendre, à pratiquer et à demander conseil à votre mentor. C'était une expérience étrange. Vous pouvez gagner +1 dans n'importe quelle compétence INT ou commencer une nouvelle compétence INT à +2.";}
    }
    if(EV == "2"){ // Allier
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "Un";}else{var Sexe = "Une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession == "1"){var Profession = " chasseur de prime";}
    if(Profession == "2"){var Profession = " mage";}
    if(Profession == "3"){var Profession = " mentor";}
    if(Profession == "4"){var Profession = " un ami d'enfance";}
    if(Profession == "5"){var Profession = " artisan";}
    if(Profession == "6"){var Profession = " ancien ennemi";}
    if(Profession == "7"){var Profession = " duc";}
    if(Profession == "8"){var Profession = " prêtre";}
    if(Profession == "9"){var Profession = " soldat";}
    if(Profession == "10"){var Profession = " barde";}
    
        var Rencontre = Math.floor(Math.random() * Math.floor(10))+1;
    if(Rencontre == "1"){var Rencontre = " que vous avez sauvé.";}
    if(Rencontre == "2"){var Rencontre = " que vous avez rencontré dans une taverne.";}
    if(Rencontre == "3"){var Rencontre = " qui vous a sauvé.";}
    if(Rencontre == "4"){var Rencontre = " qui vous a engagé.";}
    if(Rencontre == "5"){var Rencontre = " avec qui vous êtiez prisonnés.";}
    if(Rencontre == "6"){var Rencontre = " avec qui vous êtiez obligé de travailler.";}
    if(Rencontre == "7"){var Rencontre = " que vous avez engagé.";}
    if(Rencontre == "8"){var Rencontre = " que vous avez rencontré quand vous êtiez complètement saoul.";}
    if(Rencontre == "9"){var Rencontre = " que vous avez rencontré pendant vos voyages.";}
    if(Rencontre == "10"){var Rencontre = " avec qui vous avez combattu.";}
        var Proche = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proche < "7"){var Proche = " Vous êtes des connaissances.";}
    else if(Proche == "10"){var Proche = " Vous êtes lié par serment.";}
    else{var Proche = " Vous êtes des amis.";}
        var Vivant = Math.floor(Math.random() * Math.floor(100))+1;
    if(Vivant <= "30"){var Vivant = "<br>Malheuresement, il/elle est morte.";}else{var Vivant = "<br>Heureusement, il/elle est toujours vivant.";}
    
        var EV = "<b>Allier</b> : "+Sexe+Profession+Rencontre+Proche+Vivant;
    }
    if(EV > "2" && EV < "6"){	// Chasse
        var Proie = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proie == "1"){var Proie = "un spectre";}
    if(Proie == "2"){var Proie = "une créature maudite";}
    if(Proie == "3"){var Proie = "un hybride";}
    if(Proie == "4"){var Proie = "un insectoïde";}
    if(Proie == "5"){var Proie = "un élémentaire";}
    if(Proie == "6"){var Proie = "une veuve";}
    if(Proie == "7"){var Proie = "un ogre";}
    if(Proie == "8"){var Proie = "un draconide";}
    if(Proie == "9"){var Proie = "un nécrophage";}
    if(Proie == "10"){var Proie = "un vampire";}
        var Lieu = Math.floor(Math.random() * Math.floor(10))+1;
    if(Lieu == "1"){var Lieu = " dans une fôret.";}
    if(Lieu == "2"){var Lieu = " dans un batiment.";}
    if(Lieu == "3"){var Lieu = " dans un batiment abandonné.";}
    if(Lieu == "4"){var Lieu = " sur la côte.";}
    if(Lieu == "5"){var Lieu = " dans la montagne.";}
    if(Lieu == "6"){var Lieu = " dans une ville.";}
    if(Lieu == "7"){var Lieu = " dans un cimetierre.";}
    if(Lieu == "8"){var Lieu = " dans un hameau.";}
    if(Lieu == "9"){var Lieu = " le long de la rivière.";}
    if(Lieu == "10"){var Lieu = " dans un grotte.";}
    
        var Fin = Math.floor(Math.random() * Math.floor(10))+1;
    if(Fin < "3"){var Fin = " Vous avez pris votre argent et vous êtes parti.";}
    if(Fin > "2" && Fin < "5"){var Fin = " L'employeur a refusé de payer.";}
    if(Fin > "4" && Fin < "7"){var Fin = " L'employeur vous a payé en échange.";}
    if(Fin > "6" && Fin < "9"){var Fin = " Ce fut un combat particulièrement difficile.";}
    if(Fin > "8"){var Fin = " Ce fut un combat étonnamment facile.";}
        var PB = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB < "5"){
        var PB2 = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB2 == "1"){var Fin = " Malheuresement, le monstre était faux.";}	
    if(PB2 == "2"){var Fin = " Malheuresement, c'était une malédiction.";}	
    if(PB2 == "3"){var Fin = " Malheuresement, le monstre était déjà mort.";}	
    if(PB2 == "4"){var Fin = " Malheuresement, ce n'était pas ce que vous pensiez.";}
    if(PB2 == "5"){var Fin = " Malheuresement, votre employeur voulait l'attrapé vivant.";}
    if(PB2 == "6"){var Fin = " Malheuresement, l'employeur est à blâmer pour tout cela";}
    if(PB2 == "7"){var Fin = " Malheuresement, le monstre était inoffensif.";}
    if(PB2 == "8"){var Fin = " Malheuresement, c'était un piège.";}
    if(PB2 == "9"){var Fin = " Malheuresement, c'était plus que ce qu'on vous avait dit.";}
    if(PB2 == "10"){var Fin = " Malheuresement, un mage était derrière tout ça.";}
    }
    
        var EV = "<b>Chasse</b> : "+Proie+Lieu+Fin;
        
    }
    else{var EV = "Il ne s'est rien passé de notable."}
        Evénement_Sorceleur_1.innerHTML = Danger_aff+EV;
    }
 
    if(Sorceleur_7.value == "3"){
        var Danger = Math.floor(Math.random() * Math.floor(100))+1;
        // Danger si < 50
    var Danger_aff = "";
    if(Danger <= "50"){
        var EV_Danger = Math.floor(Math.random() * Math.floor(10))+1;
        // 1-3 Events ; 4-6 Wounds ; 7-10 Enemies
        if(EV_Danger < "4"){	// Events
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){
        var dette = Number(Math.floor(Math.random() * Math.floor(10))+1)*10;
        var Danger_aff = "<b>Dette</b> : à cause d'un équipement cassé, d'une partie de Gwent ou autres, vous avez fait croître une dette de "+dette+" couronnes à un établissement ou une maison noble.";
    }
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Monstre échappé</b> : Un troll, un katakan, un loup-garou ou un autre monstre que vous chassiez vous a échappé et se promène librement. Ils peuvent revenir un jour...";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Dépendance</b> : Vous êtes tombé sur des moments difficiles et avez contracté une dépendance.";}
    if(EV_Danger_EV == "4"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
        var Danger_aff = "<b>Détenu</b> : Vous avez passé "+dette+" ans de cette décennie dans une prison en raison de fausses accusations, ou peut-être d'un crime que vous avez commis.";
    }
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Accusé à tort</b> : Soit quelqu'un veut que tu partes, soit tu étais le parfait bouc émissaire.";}
    if(EV_Danger_EV == "6"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "Il vous a fait chanté.";}
    else if(dette > "7"){var dette = "Il vous a attaqué dans le dos.";}
    else{var dette = "Il a dévoilé un de vos secrets.";}
        var Danger_aff = "<b>Trahi</b> : Un ami ou un amant vous a trahi."+dette;
    }
    if(EV_Danger_EV == "7"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "tué par un monstre.";}
    if(dette > "3" && dette < "7"){var dette = "exécuté.";}
    if(dette > "6" && dette < "9" ){var dette = "assassiné.";}
    if(dette > "8"){var dette = "empoisonné.";}
        var Danger_aff = "<b>Ami ou amant tué</b> : Un proche a été "+dette;
    }
    if(EV_Danger_EV == "8"){
        var Danger_aff = "<b>Hors la loi</b> : Vous avez été interdit de territoire à la suite d'actes odieux contre le royaume ou de fausses accusations. Dans ce royaume, vous êtes recherché par la Garde.";
    }
    if(EV_Danger_EV == "9"){
        var Danger_aff = "<b>Manipulé</b> : Vous avez été manipulé pour briser votre neutralité. Vous décidez comment cela s'est produit, mais quiconque connaît votre réputation sait que vous n'êtes pas neutre.";
    }
    if(EV_Danger_EV == "10"){
        var Danger_aff = "<b>Maudit</b> : Vous avez été touché par une malédiction. A voir avec le MJ.";
    }	
        }
        else if(EV_Danger > 6){	// Enemies
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "un";}else{var Sexe = "une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession < "3"){var Profession = " noble";}
    if(Profession > "2" && Profession < "5"){var Profession = " mercenaire";}
    if(Profession > "4" && Profession < "7"){var Profession = " soldat";}
    if(Profession > "6" && Profession < "9"){var Profession = " marchand";}
    if(Profession > "8"){var Profession = " criminel";}
        var Cause = Math.floor(Math.random() * Math.floor(10))+1;
    if(Cause < "3"){var Cause = " qui vous a calomnié";}
    if(Cause > "2" && Cause < "5"){var Cause = " a qui vous avez déjoué ses plans.";}
    if(Cause > "4" && Cause < "7"){var Cause = " qui vous a trahi.";}
    if(Cause > "6" && Cause < "9"){var Cause = " a qui vous avez tué ses parents.";}
    if(Cause > "8"){var Cause = " qui vous a trompé.";}
        var Pouvoir = Math.floor(Math.random() * Math.floor(10))+1;
    if(Pouvoir < "3"){var Pouvoir = " avec un bon statut social";}
    if(Pouvoir > "2" && Pouvoir < "5"){var Pouvoir = " avec beaucoup de connaissances";}
    if(Pouvoir > "4" && Pouvoir < "7"){var Pouvoir = " doué physiquement";}
    if(Pouvoir > "6" && Pouvoir < "9"){var Pouvoir = " avec de nombreux sbires";}
    if(Pouvoir > "8"){var Pouvoir = " doué magiquement";}
        var Escalade = Math.floor(Math.random() * Math.floor(10))+1;
    if(Escalade < "3"){var Escalade = " C'est presque oublié.";}
    if(Escalade > "2" && Escalade < "5"){var Escalade = " Il/elle tentera de vous poignarder à la moindre occasion.";}
    if(Escalade > "4" && Escalade < "7"){var Escalade = " Il/elle est extrement violent.";}
    if(Escalade > "6" && Escalade < "9"){var Escalade = " Il/elle est en quête de revanche.";}
    if(Escalade > "8"){var Escalade = " Il/elle réclame votre sang.";}
    
        var DCD = Math.floor(Math.random() * Math.floor(10))+1;
    if(DCD <= "30"){var DCD = "<br>Fort heureusement, il/elle est morte depuis ce temps.";}else{var DCD = "<br>Malheuresement, il/elle toujours en vie...";}
        var Danger_aff = "<b>Ennemi</b> :"+Sexe+Profession+Pouvoir+Cause+Escalade+DCD;
        }
        else{	// Wounds
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){var Danger_aff = "<b>Genou rigide (-1 SPD)</b> : Une horrible blessure à votre jambe l'a brisée et presque irrémédiable. Même après une intervention chirurgicale et un régime de potions de sorceleur, il n'a jamais été le même.";}
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Oeil endommagé (-1 Vigilance (vision))</b> : Habituellement, les sorceleurs sont assez rapides pour éviter une attaque, mais certains monstres sont trop rapides. Un coup dans l'œil l'a laissé légèrement flou.";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Bras raide (-1 Mêlée)</b> : Un coup fracassant sur votre bras vous a laissé des semaines de récupération et un bras raide. Vous pouvez toujours tenir une épée et vous battre, mais la raideur vous aggrave toujours.";}
    if(EV_Danger_EV == "4"){var Danger_aff = "<b>Doigts endommagés (impossible de faire des signes avec cette main)</b> : Cela peut avoir été le résultat de la torture ou simplement d'une frappe très malchanceuse à cette main au combat, mais ses doigts sont raides et maladroits.";}
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Pointe de flèche intégrée (-1 Physique)</b> : Un tireur d'élite vous a laissé une pointe de flèche dans votre corps, logée dans votre muscle.";}
    if(EV_Danger_EV == "6"){var Danger_aff = "<b>Respiration sifflante (-5 points d'endurance)</b> : Vous avez peut-être été poignardé aux poumons ou inhalé un gaz toxique. De toute façon, vos poumons ont été endommagés; respirer normalement est quelque peu difficile.";}
    if(EV_Danger_EV == "7"){var Danger_aff = "<b>Énorme cicatrice (-2 charme et séduction)</b> : Il n’est pas rare que le corps d’un sorceleur soit un rempli de cicatrices. Cependant, vous avez subi un coup qui a défiguré votre visage.";}
    if(EV_Danger_EV == "8"){var Danger_aff = "<b>Nez endommagé (-2 Sens accrus)</b> : Un certain nombre de coups de poing au visage dans des combats de barres (ou des gaz toxiques) ont endommagé votre nez et vous ont presque volé votre suivi de parfum.";}
    if(EV_Danger_EV == "9"){var Danger_aff = "<b>Dégâts de venin (-5 PV)</b> : Des toxines qui se sont répandues et qui vous ont laissé des veines noircies autour de la blessure et a affaibli votre corps.";}
    if(EV_Danger_EV == "10"){var Danger_aff = "<b>À moitié sourd (-1 Vigilance (audition))</b> : De nombreux monstres utilisent des attaques sonores mortelles. Vous avez eu la chance d'en survivre, mais vos oreilles ne seront plus jamais les mêmes.";}
        }
    }
    
        var EV = Math.floor(Math.random() * Math.floor(10))+1;
        // Bénéfice : 1-2 ; Allier : 3-7 ; Chasse : 8 ; Rien : 9-10
    if(EV < "3"){ // Bénéfice
        var Chance = Math.floor(Math.random() * Math.floor(10))+1;
    if(Chance == "1"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise == "1"){var Surprise = "un bébé.";}
    if(Surprise == "2"){var Surprise = "un chien.";}
    if(Surprise == "3"){var Surprise = "un cheval.";}
    if(Surprise == "4"){var Surprise = "une nouvelle charrue.";}
    if(Surprise == "5"){var Surprise = "un chat.";}
    if(Surprise == "6"){var Surprise = "un baril de bière.";}
    if(Surprise == "7"){var Surprise = "un bijou d'une valeur de 700 couronnes.";}
    if(Surprise == "8"){var Surprise = "une arme valant jusqu'à 500 couronnes.";}
    if(Surprise == "9"){var Surprise = "un bœuf.";}
    if(Surprise == "10"){var Surprise = "une mule.";}
        var EV = "<b>Droit de surprise</b> : Vous avez invoqué le Droit de surprises au cours de cette décennie et vous avez obtenu "+Surprise;
    }
    if(Chance == "2"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "7"){var Surprise = "Cela a duré quelques semaines.";}
    if(Surprise > "8"){var Surprise = "Cela a duré quelques mois.";}
    else{var Surprise = " Ça continue, avec des hauts et des bas.";}
        var EV = "<br>Romance</br> : Vous avez trouvé un amant qui a vu au-delà de vos mutations et désensibilisation. D'une manière ou d'une autre, vous avez réussi à établir un lien significatif avec une personne."+Surprise;
    }
    if(Chance == "3"){
        var Surprise = Number(Math.floor(Math.random() * Math.floor(10))+1)*100;
        var EV = "<br>Aubaine</br> : Vous avez ramassé une quantité étonnamment élevée de pièces au cours de cette décennie. Vous avez réussi non seulement à payer les ingrédients d'alchimie et les réparations de votre équipement, mais également à mettre de l'argent de côté pour réaliser des économies légitimes. Vous gagnez "+Surprise+" couronnes.";
    }
    if(Chance == "4"){var EV = "<br>Faveur d'un noble</br> : Vous avez effectué une tâche pour un noble. C'était peut-être légal, c'était peut-être illégal - de toute façon, le noble que vous avez aidé vous doit beaucoup. Vous pouvez invoquer cette faveur à tout moment mais elle doit être raisonnable.";}
    if(Chance == "5"){var EV = "<br>Les secrets du sorceleur transmis</br> : Au cours de vos voyages, vous avez rencontré et voyagé avec un autre sorceleur. Ce sorceleur vous a enseigné et partagé des connaissances perdues depuis longtemps. Vous obtenez un diagramme de sorceleur: une potion, de l'huile ou une décoction de votre choix.";}
    if(Chance == "6"){var EV = "<br>Valereux</br> : À un moment donné de cette décennie, vous avez combattu courageusement pour défendre un pays. Vous êtes peut-être allé protéger quelqu'un ou vous vous êtes peut-être trouvé au bon endroit au bon moment. Pour cette grande action, vous avez été fait chevalier par un roi / reine. Vous gagnez +1 en réputation dans le pays de votre choix.";}
    if(Chance == "7"){var EV = "<br>Avec les bandits</br> : Vous êtes tombé sur un groupe de bandits ou scoia’tael pendant une chasse. Vous n'êtes peut-être pas d'accord avec leurs méthodes, mais ils ne vous ont pas dérangés et vous ne les avez pas dérangés. Vous avez même partagé des boissons. Vous pouvez leur demander une faveur une fois par mois tant que cela est raisonnable.";}
    if(Chance == "8"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "3" ){var Surprise = "une amélioration elfique.";}
    if(Surprise > "2" && Surprise < 5){var Surprise = "un message elfique.";}
    if(Surprise > "4" && Surprise < 7){var Surprise = "une amélioration naine.";}
    if(Surprise > "6" && Surprise < 9){var Surprise = "une arbalète à main gnome.";}
    if(Surprise > "8"){var Surprise = "un manteau nain.";}	
        var EV = "<br>A exploré une ruine</br> : Vous deviez chasser un monstre à travers une ruine grande et complexe. En chemin, vous avez trouvé quelque chose d'utile :  "+Surprise;
    }
    if(Chance == "9"){var EV = "<br>Faveur d'un mage</br> : Au cours de cette décennie, vous avez rendu service à un mage. Vous avez peut-être rassemblé des pièces de monstre pour leurs expériences, laissez-les vous étudier ou même capturé un monstre vivant pour eux. Quoi qu'il en soit, le mage vous doit maintenant une faveur en retour tant qu'elle est raisonnable.";}
    if(Chance == "10"){var EV = "<br>Trouvé un maître</br> : Vous avez passé plusieurs semaines à apprendre, à pratiquer et à demander conseil à votre mentor. C'était une expérience étrange. Vous pouvez gagner +1 dans n'importe quelle compétence INT ou commencer une nouvelle compétence INT à +2.";}
    }
    if(EV > "2" && EV < "8"){ // Allier
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "Un";}else{var Sexe = "Une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession == "1"){var Profession = " chasseur de prime";}
    if(Profession == "2"){var Profession = " mage";}
    if(Profession == "3"){var Profession = " mentor";}
    if(Profession == "4"){var Profession = " un ami d'enfance";}
    if(Profession == "5"){var Profession = " artisan";}
    if(Profession == "6"){var Profession = " ancien ennemi";}
    if(Profession == "7"){var Profession = " duc";}
    if(Profession == "8"){var Profession = " prêtre";}
    if(Profession == "9"){var Profession = " soldat";}
    if(Profession == "10"){var Profession = " barde";}
    
        var Rencontre = Math.floor(Math.random() * Math.floor(10))+1;
    if(Rencontre == "1"){var Rencontre = " que vous avez sauvé.";}
    if(Rencontre == "2"){var Rencontre = " que vous avez rencontré dans une taverne.";}
    if(Rencontre == "3"){var Rencontre = " qui vous a sauvé.";}
    if(Rencontre == "4"){var Rencontre = " qui vous a engagé.";}
    if(Rencontre == "5"){var Rencontre = " avec qui vous êtiez prisonnés.";}
    if(Rencontre == "6"){var Rencontre = " avec qui vous êtiez obligé de travailler.";}
    if(Rencontre == "7"){var Rencontre = " que vous avez engagé.";}
    if(Rencontre == "8"){var Rencontre = " que vous avez rencontré quand vous êtiez complètement saoul.";}
    if(Rencontre == "9"){var Rencontre = " que vous avez rencontré pendant vos voyages.";}
    if(Rencontre == "10"){var Rencontre = " avec qui vous avez combattu.";}
        var Proche = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proche < "7"){var Proche = " Vous êtes des connaissances.";}
    else if(Proche == "10"){var Proche = " Vous êtes lié par serment.";}
    else{var Proche = " Vous êtes des amis.";}
        var Vivant = Math.floor(Math.random() * Math.floor(100))+1;
    if(Vivant <= "30"){var Vivant = "<br>Malheuresement, il/elle est morte.";}else{var Vivant = "<br>Heureusement, il/elle est toujours vivant.";}
    
        var EV = "<b>Allier</b> : "+Sexe+Profession+Rencontre+Proche+Vivant;
    }
    if(EV == "8"){	// Chasse
        var Proie = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proie == "1"){var Proie = "un spectre";}
    if(Proie == "2"){var Proie = "une créature maudite";}
    if(Proie == "3"){var Proie = "un hybride";}
    if(Proie == "4"){var Proie = "un insectoïde";}
    if(Proie == "5"){var Proie = "un élémentaire";}
    if(Proie == "6"){var Proie = "une veuve";}
    if(Proie == "7"){var Proie = "un ogre";}
    if(Proie == "8"){var Proie = "un draconide";}
    if(Proie == "9"){var Proie = "un nécrophage";}
    if(Proie == "10"){var Proie = "un vampire";}
        var Lieu = Math.floor(Math.random() * Math.floor(10))+1;
    if(Lieu == "1"){var Lieu = " dans une fôret.";}
    if(Lieu == "2"){var Lieu = " dans un batiment.";}
    if(Lieu == "3"){var Lieu = " dans un batiment abandonné.";}
    if(Lieu == "4"){var Lieu = " sur la côte.";}
    if(Lieu == "5"){var Lieu = " dans la montagne.";}
    if(Lieu == "6"){var Lieu = " dans une ville.";}
    if(Lieu == "7"){var Lieu = " dans un cimetierre.";}
    if(Lieu == "8"){var Lieu = " dans un hameau.";}
    if(Lieu == "9"){var Lieu = " le long de la rivière.";}
    if(Lieu == "10"){var Lieu = " dans un grotte.";}
    
        var Fin = Math.floor(Math.random() * Math.floor(10))+1;
    if(Fin < "3"){var Fin = " Vous avez pris votre argent et vous êtes parti.";}
    if(Fin > "2" && Fin < "5"){var Fin = " L'employeur a refusé de payer.";}
    if(Fin > "4" && Fin < "7"){var Fin = " L'employeur vous a payé en échange.";}
    if(Fin > "6" && Fin < "9"){var Fin = " Ce fut un combat particulièrement difficile.";}
    if(Fin > "8"){var Fin = " Ce fut un combat étonnamment facile.";}
        var PB = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB < "5"){
        var PB2 = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB2 == "1"){var Fin = " Malheuresement, le monstre était faux.";}	
    if(PB2 == "2"){var Fin = " Malheuresement, c'était une malédiction.";}	
    if(PB2 == "3"){var Fin = " Malheuresement, le monstre était déjà mort.";}	
    if(PB2 == "4"){var Fin = " Malheuresement, ce n'était pas ce que vous pensiez.";}
    if(PB2 == "5"){var Fin = " Malheuresement, votre employeur voulait l'attrapé vivant.";}
    if(PB2 == "6"){var Fin = " Malheuresement, l'employeur est à blâmer pour tout cela";}
    if(PB2 == "7"){var Fin = " Malheuresement, le monstre était inoffensif.";}
    if(PB2 == "8"){var Fin = " Malheuresement, c'était un piège.";}
    if(PB2 == "9"){var Fin = " Malheuresement, c'était plus que ce qu'on vous avait dit.";}
    if(PB2 == "10"){var Fin = " Malheuresement, un mage était derrière tout ça.";}
    }
    
        var EV = "<b>Chasse</b> : "+Proie+Lieu+Fin;
        
    }
    else{var EV = "Il ne s'est rien passé de notable."}
        Evénement_Sorceleur_1.innerHTML = Danger_aff+EV;
    }

    if(Sorceleur_7.value == "4"){
        var Danger = Math.floor(Math.random() * Math.floor(100))+1;
        // Danger si < 75
    var Danger_aff = "";
    if(Danger <= "75"){
        var EV_Danger = Math.floor(Math.random() * Math.floor(10))+1;
        // 1-3 Events ; 4-6 Wounds ; 7-10 Enemies
        if(EV_Danger < "4"){	// Events
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){
        var dette = Number(Math.floor(Math.random() * Math.floor(10))+1)*10;
        var Danger_aff = "<b>Dette</b> : à cause d'un équipement cassé, d'une partie de Gwent ou autres, vous avez fait croître une dette de "+dette+" couronnes à un établissement ou une maison noble.";
    }
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Monstre échappé</b> : Un troll, un katakan, un loup-garou ou un autre monstre que vous chassiez vous a échappé et se promène librement. Ils peuvent revenir un jour...";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Dépendance</b> : Vous êtes tombé sur des moments difficiles et avez contracté une dépendance.";}
    if(EV_Danger_EV == "4"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
        var Danger_aff = "<b>Détenu</b> : Vous avez passé "+dette+" ans de cette décennie dans une prison en raison de fausses accusations, ou peut-être d'un crime que vous avez commis.";
    }
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Accusé à tort</b> : Soit quelqu'un veut que tu partes, soit tu étais le parfait bouc émissaire.";}
    if(EV_Danger_EV == "6"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "Il vous a fait chanté.";}
    else if(dette > "7"){var dette = "Il vous a attaqué dans le dos.";}
    else{var dette = "Il a dévoilé un de vos secrets.";}
        var Danger_aff = "<b>Trahi</b> : Un ami ou un amant vous a trahi."+dette;
    }
    if(EV_Danger_EV == "7"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "tué par un monstre.";}
    if(dette > "3" && dette < "7"){var dette = "exécuté.";}
    if(dette > "6" && dette < "9" ){var dette = "assassiné.";}
    if(dette > "8"){var dette = "empoisonné.";}
        var Danger_aff = "<b>Ami ou amant tué</b> : Un proche a été "+dette;
    }
    if(EV_Danger_EV == "8"){
        var Danger_aff = "<b>Hors la loi</b> : Vous avez été interdit de territoire à la suite d'actes odieux contre le royaume ou de fausses accusations. Dans ce royaume, vous êtes recherché par la Garde.";
    }
    if(EV_Danger_EV == "9"){
        var Danger_aff = "<b>Manipulé</b> : Vous avez été manipulé pour briser votre neutralité. Vous décidez comment cela s'est produit, mais quiconque connaît votre réputation sait que vous n'êtes pas neutre.";
    }
    if(EV_Danger_EV == "10"){
        var Danger_aff = "<b>Maudit</b> : Vous avez été touché par une malédiction. A voir avec le MJ.";
    }	
        }
        else if(EV_Danger > 6){	// Enemies
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "un";}else{var Sexe = "une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession < "3"){var Profession = " noble";}
    if(Profession > "2" && Profession < "5"){var Profession = " mercenaire";}
    if(Profession > "4" && Profession < "7"){var Profession = " soldat";}
    if(Profession > "6" && Profession < "9"){var Profession = " marchand";}
    if(Profession > "8"){var Profession = " criminel";}
        var Cause = Math.floor(Math.random() * Math.floor(10))+1;
    if(Cause < "3"){var Cause = " qui vous a calomnié";}
    if(Cause > "2" && Cause < "5"){var Cause = " a qui vous avez déjoué ses plans.";}
    if(Cause > "4" && Cause < "7"){var Cause = " qui vous a trahi.";}
    if(Cause > "6" && Cause < "9"){var Cause = " a qui vous avez tué ses parents.";}
    if(Cause > "8"){var Cause = " qui vous a trompé.";}
        var Pouvoir = Math.floor(Math.random() * Math.floor(10))+1;
    if(Pouvoir < "3"){var Pouvoir = " avec un bon statut social";}
    if(Pouvoir > "2" && Pouvoir < "5"){var Pouvoir = " avec beaucoup de connaissances";}
    if(Pouvoir > "4" && Pouvoir < "7"){var Pouvoir = " doué physiquement";}
    if(Pouvoir > "6" && Pouvoir < "9"){var Pouvoir = " avec de nombreux sbires";}
    if(Pouvoir > "8"){var Pouvoir = " doué magiquement";}
        var Escalade = Math.floor(Math.random() * Math.floor(10))+1;
    if(Escalade < "3"){var Escalade = " C'est presque oublié.";}
    if(Escalade > "2" && Escalade < "5"){var Escalade = " Il/elle tentera de vous poignarder à la moindre occasion.";}
    if(Escalade > "4" && Escalade < "7"){var Escalade = " Il/elle est extrement violent.";}
    if(Escalade > "6" && Escalade < "9"){var Escalade = " Il/elle est en quête de revanche.";}
    if(Escalade > "8"){var Escalade = " Il/elle réclame votre sang.";}
    
        var DCD = Math.floor(Math.random() * Math.floor(10))+1;
    if(DCD <= "30"){var DCD = "<br>Fort heureusement, il/elle est morte depuis ce temps.";}else{var DCD = "<br>Malheuresement, il/elle toujours en vie...";}
        var Danger_aff = "<b>Ennemi</b> :"+Sexe+Profession+Pouvoir+Cause+Escalade+DCD;
        }
        else{	// Wounds
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){var Danger_aff = "<b>Genou rigide (-1 SPD)</b> : Une horrible blessure à votre jambe l'a brisée et presque irrémédiable. Même après une intervention chirurgicale et un régime de potions de sorceleur, il n'a jamais été le même.";}
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Oeil endommagé (-1 Vigilance (vision))</b> : Habituellement, les sorceleurs sont assez rapides pour éviter une attaque, mais certains monstres sont trop rapides. Un coup dans l'œil l'a laissé légèrement flou.";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Bras raide (-1 Mêlée)</b> : Un coup fracassant sur votre bras vous a laissé des semaines de récupération et un bras raide. Vous pouvez toujours tenir une épée et vous battre, mais la raideur vous aggrave toujours.";}
    if(EV_Danger_EV == "4"){var Danger_aff = "<b>Doigts endommagés (impossible de faire des signes avec cette main)</b> : Cela peut avoir été le résultat de la torture ou simplement d'une frappe très malchanceuse à cette main au combat, mais ses doigts sont raides et maladroits.";}
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Pointe de flèche intégrée (-1 Physique)</b> : Un tireur d'élite vous a laissé une pointe de flèche dans votre corps, logée dans votre muscle.";}
    if(EV_Danger_EV == "6"){var Danger_aff = "<b>Respiration sifflante (-5 points d'endurance)</b> : Vous avez peut-être été poignardé aux poumons ou inhalé un gaz toxique. De toute façon, vos poumons ont été endommagés; respirer normalement est quelque peu difficile.";}
    if(EV_Danger_EV == "7"){var Danger_aff = "<b>Énorme cicatrice (-2 charme et séduction)</b> : Il n’est pas rare que le corps d’un sorceleur soit un rempli de cicatrices. Cependant, vous avez subi un coup qui a défiguré votre visage.";}
    if(EV_Danger_EV == "8"){var Danger_aff = "<b>Nez endommagé (-2 Sens accrus)</b> : Un certain nombre de coups de poing au visage dans des combats de barres (ou des gaz toxiques) ont endommagé votre nez et vous ont presque volé votre suivi de parfum.";}
    if(EV_Danger_EV == "9"){var Danger_aff = "<b>Dégâts de venin (-5 PV)</b> : Des toxines qui se sont répandues et qui vous ont laissé des veines noircies autour de la blessure et a affaibli votre corps.";}
    if(EV_Danger_EV == "10"){var Danger_aff = "<b>À moitié sourd (-1 Vigilance (audition))</b> : De nombreux monstres utilisent des attaques sonores mortelles. Vous avez eu la chance d'en survivre, mais vos oreilles ne seront plus jamais les mêmes.";}
        }
    }
    
        var EV = Math.floor(Math.random() * Math.floor(10))+1;
        // Bénéfice : 1-5 ; Allier : 6-7 ; Chasse : 8-9 ; Rien : 10
    if(EV < "6"){ // Bénéfice
        var Chance = Math.floor(Math.random() * Math.floor(10))+1;
    if(Chance == "1"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise == "1"){var Surprise = "un bébé.";}
    if(Surprise == "2"){var Surprise = "un chien.";}
    if(Surprise == "3"){var Surprise = "un cheval.";}
    if(Surprise == "4"){var Surprise = "une nouvelle charrue.";}
    if(Surprise == "5"){var Surprise = "un chat.";}
    if(Surprise == "6"){var Surprise = "un baril de bière.";}
    if(Surprise == "7"){var Surprise = "un bijou d'une valeur de 700 couronnes.";}
    if(Surprise == "8"){var Surprise = "une arme valant jusqu'à 500 couronnes.";}
    if(Surprise == "9"){var Surprise = "un bœuf.";}
    if(Surprise == "10"){var Surprise = "une mule.";}
        var EV = "<b>Droit de surprise</b> : Vous avez invoqué le Droit de surprises au cours de cette décennie et vous avez obtenu "+Surprise;
    }
    if(Chance == "2"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "7"){var Surprise = "Cela a duré quelques semaines.";}
    if(Surprise > "8"){var Surprise = "Cela a duré quelques mois.";}
    else{var Surprise = " Ça continue, avec des hauts et des bas.";}
        var EV = "<br>Romance</br> : Vous avez trouvé un amant qui a vu au-delà de vos mutations et désensibilisation. D'une manière ou d'une autre, vous avez réussi à établir un lien significatif avec une personne."+Surprise;
    }
    if(Chance == "3"){
        var Surprise = Number(Math.floor(Math.random() * Math.floor(10))+1)*100;
        var EV = "<br>Aubaine</br> : Vous avez ramassé une quantité étonnamment élevée de pièces au cours de cette décennie. Vous avez réussi non seulement à payer les ingrédients d'alchimie et les réparations de votre équipement, mais également à mettre de l'argent de côté pour réaliser des économies légitimes. Vous gagnez "+Surprise+" couronnes.";
    }
    if(Chance == "4"){var EV = "<br>Faveur d'un noble</br> : Vous avez effectué une tâche pour un noble. C'était peut-être légal, c'était peut-être illégal - de toute façon, le noble que vous avez aidé vous doit beaucoup. Vous pouvez invoquer cette faveur à tout moment mais elle doit être raisonnable.";}
    if(Chance == "5"){var EV = "<br>Les secrets du sorceleur transmis</br> : Au cours de vos voyages, vous avez rencontré et voyagé avec un autre sorceleur. Ce sorceleur vous a enseigné et partagé des connaissances perdues depuis longtemps. Vous obtenez un diagramme de sorceleur: une potion, de l'huile ou une décoction de votre choix.";}
    if(Chance == "6"){var EV = "<br>Valereux</br> : À un moment donné de cette décennie, vous avez combattu courageusement pour défendre un pays. Vous êtes peut-être allé protéger quelqu'un ou vous vous êtes peut-être trouvé au bon endroit au bon moment. Pour cette grande action, vous avez été fait chevalier par un roi / reine. Vous gagnez +1 en réputation dans le pays de votre choix.";}
    if(Chance == "7"){var EV = "<br>Avec les bandits</br> : Vous êtes tombé sur un groupe de bandits ou scoia’tael pendant une chasse. Vous n'êtes peut-être pas d'accord avec leurs méthodes, mais ils ne vous ont pas dérangés et vous ne les avez pas dérangés. Vous avez même partagé des boissons. Vous pouvez leur demander une faveur une fois par mois tant que cela est raisonnable.";}
    if(Chance == "8"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "3" ){var Surprise = "une amélioration elfique.";}
    if(Surprise > "2" && Surprise < 5){var Surprise = "un message elfique.";}
    if(Surprise > "4" && Surprise < 7){var Surprise = "une amélioration naine.";}
    if(Surprise > "6" && Surprise < 9){var Surprise = "une arbalète à main gnome.";}
    if(Surprise > "8"){var Surprise = "un manteau nain.";}	
        var EV = "<br>A exploré une ruine</br> : Vous deviez chasser un monstre à travers une ruine grande et complexe. En chemin, vous avez trouvé quelque chose d'utile :  "+Surprise;
    }
    if(Chance == "9"){var EV = "<br>Faveur d'un mage</br> : Au cours de cette décennie, vous avez rendu service à un mage. Vous avez peut-être rassemblé des pièces de monstre pour leurs expériences, laissez-les vous étudier ou même capturé un monstre vivant pour eux. Quoi qu'il en soit, le mage vous doit maintenant une faveur en retour tant qu'elle est raisonnable.";}
    if(Chance == "10"){var EV = "<br>Trouvé un maître</br> : Vous avez passé plusieurs semaines à apprendre, à pratiquer et à demander conseil à votre mentor. C'était une expérience étrange. Vous pouvez gagner +1 dans n'importe quelle compétence INT ou commencer une nouvelle compétence INT à +2.";}
    }
    if(EV > "5" && EV < "8"){ // Allier
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "Un";}else{var Sexe = "Une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession == "1"){var Profession = " chasseur de prime";}
    if(Profession == "2"){var Profession = " mage";}
    if(Profession == "3"){var Profession = " mentor";}
    if(Profession == "4"){var Profession = " un ami d'enfance";}
    if(Profession == "5"){var Profession = " artisan";}
    if(Profession == "6"){var Profession = " ancien ennemi";}
    if(Profession == "7"){var Profession = " duc";}
    if(Profession == "8"){var Profession = " prêtre";}
    if(Profession == "9"){var Profession = " soldat";}
    if(Profession == "10"){var Profession = " barde";}
    
        var Rencontre = Math.floor(Math.random() * Math.floor(10))+1;
    if(Rencontre == "1"){var Rencontre = " que vous avez sauvé.";}
    if(Rencontre == "2"){var Rencontre = " que vous avez rencontré dans une taverne.";}
    if(Rencontre == "3"){var Rencontre = " qui vous a sauvé.";}
    if(Rencontre == "4"){var Rencontre = " qui vous a engagé.";}
    if(Rencontre == "5"){var Rencontre = " avec qui vous êtiez prisonnés.";}
    if(Rencontre == "6"){var Rencontre = " avec qui vous êtiez obligé de travailler.";}
    if(Rencontre == "7"){var Rencontre = " que vous avez engagé.";}
    if(Rencontre == "8"){var Rencontre = " que vous avez rencontré quand vous êtiez complètement saoul.";}
    if(Rencontre == "9"){var Rencontre = " que vous avez rencontré pendant vos voyages.";}
    if(Rencontre == "10"){var Rencontre = " avec qui vous avez combattu.";}
        var Proche = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proche < "7"){var Proche = " Vous êtes des connaissances.";}
    else if(Proche == "10"){var Proche = " Vous êtes lié par serment.";}
    else{var Proche = " Vous êtes des amis.";}
        var Vivant = Math.floor(Math.random() * Math.floor(100))+1;
    if(Vivant <= "30"){var Vivant = "<br>Malheuresement, il/elle est morte.";}else{var Vivant = "<br>Heureusement, il/elle est toujours vivant.";}
    
        var EV = "<b>Allier</b> : "+Sexe+Profession+Rencontre+Proche+Vivant;
    }
    if(EV > "7" && EV < "10"){	// Chasse
        var Proie = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proie == "1"){var Proie = "un spectre";}
    if(Proie == "2"){var Proie = "une créature maudite";}
    if(Proie == "3"){var Proie = "un hybride";}
    if(Proie == "4"){var Proie = "un insectoïde";}
    if(Proie == "5"){var Proie = "un élémentaire";}
    if(Proie == "6"){var Proie = "une veuve";}
    if(Proie == "7"){var Proie = "un ogre";}
    if(Proie == "8"){var Proie = "un draconide";}
    if(Proie == "9"){var Proie = "un nécrophage";}
    if(Proie == "10"){var Proie = "un vampire";}
        var Lieu = Math.floor(Math.random() * Math.floor(10))+1;
    if(Lieu == "1"){var Lieu = " dans une fôret.";}
    if(Lieu == "2"){var Lieu = " dans un batiment.";}
    if(Lieu == "3"){var Lieu = " dans un batiment abandonné.";}
    if(Lieu == "4"){var Lieu = " sur la côte.";}
    if(Lieu == "5"){var Lieu = " dans la montagne.";}
    if(Lieu == "6"){var Lieu = " dans une ville.";}
    if(Lieu == "7"){var Lieu = " dans un cimetierre.";}
    if(Lieu == "8"){var Lieu = " dans un hameau.";}
    if(Lieu == "9"){var Lieu = " le long de la rivière.";}
    if(Lieu == "10"){var Lieu = " dans un grotte.";}
    
        var Fin = Math.floor(Math.random() * Math.floor(10))+1;
    if(Fin < "3"){var Fin = " Vous avez pris votre argent et vous êtes parti.";}
    if(Fin > "2" && Fin < "5"){var Fin = " L'employeur a refusé de payer.";}
    if(Fin > "4" && Fin < "7"){var Fin = " L'employeur vous a payé en échange.";}
    if(Fin > "6" && Fin < "9"){var Fin = " Ce fut un combat particulièrement difficile.";}
    if(Fin > "8"){var Fin = " Ce fut un combat étonnamment facile.";}
        var PB = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB < "5"){
        var PB2 = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB2 == "1"){var Fin = " Malheuresement, le monstre était faux.";}	
    if(PB2 == "2"){var Fin = " Malheuresement, c'était une malédiction.";}	
    if(PB2 == "3"){var Fin = " Malheuresement, le monstre était déjà mort.";}	
    if(PB2 == "4"){var Fin = " Malheuresement, ce n'était pas ce que vous pensiez.";}
    if(PB2 == "5"){var Fin = " Malheuresement, votre employeur voulait l'attrapé vivant.";}
    if(PB2 == "6"){var Fin = " Malheuresement, l'employeur est à blâmer pour tout cela";}
    if(PB2 == "7"){var Fin = " Malheuresement, le monstre était inoffensif.";}
    if(PB2 == "8"){var Fin = " Malheuresement, c'était un piège.";}
    if(PB2 == "9"){var Fin = " Malheuresement, c'était plus que ce qu'on vous avait dit.";}
    if(PB2 == "10"){var Fin = " Malheuresement, un mage était derrière tout ça.";}
    }
    
        var EV = "<b>Chasse</b> : "+Proie+Lieu+Fin;
        
    }
    else{var EV = "Il ne s'est rien passé de notable."}
        Evénement_Sorceleur_1.innerHTML = Danger_aff+EV;
    }
  
}
if(Evénement_Sorceleur_2.innerHTML == ""){
   
    if(Sorceleur_8.value == "1"){
        var Danger = Math.floor(Math.random() * Math.floor(100))+1;
        // Danger si < 10
    var Danger_aff = "";
    if(Danger <= "10"){
        var EV_Danger = Math.floor(Math.random() * Math.floor(10))+1;
        // 1-3 Events ; 4-6 Wounds ; 7-10 Enemies
        if(EV_Danger < "4"){	// Events
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){
        var dette = Number(Math.floor(Math.random() * Math.floor(10))+1)*10;
        var Danger_aff = "<b>Dette</b> : à cause d'un équipement cassé, d'une partie de Gwent ou autres, vous avez fait croître une dette de "+dette+" couronnes à un établissement ou une maison noble.";
    }
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Monstre échappé</b> : Un troll, un katakan, un loup-garou ou un autre monstre que vous chassiez vous a échappé et se promène librement. Ils peuvent revenir un jour...";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Dépendance</b> : Vous êtes tombé sur des moments difficiles et avez contracté une dépendance.";}
    if(EV_Danger_EV == "4"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
        var Danger_aff = "<b>Détenu</b> : Vous avez passé "+dette+" ans de cette décennie dans une prison en raison de fausses accusations, ou peut-être d'un crime que vous avez commis.";
    }
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Accusé à tort</b> : Soit quelqu'un veut que tu partes, soit tu étais le parfait bouc émissaire.";}
    if(EV_Danger_EV == "6"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "Il vous a fait chanté.";}
    else if(dette > "7"){var dette = "Il vous a attaqué dans le dos.";}
    else{var dette = "Il a dévoilé un de vos secrets.";}
        var Danger_aff = "<b>Trahi</b> : Un ami ou un amant vous a trahi."+dette;
    }
    if(EV_Danger_EV == "7"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "tué par un monstre.";}
    if(dette > "3" && dette < "7"){var dette = "exécuté.";}
    if(dette > "6" && dette < "9" ){var dette = "assassiné.";}
    if(dette > "8"){var dette = "empoisonné.";}
        var Danger_aff = "<b>Ami ou amant tué</b> : Un proche a été "+dette;
    }
    if(EV_Danger_EV == "8"){
        var Danger_aff = "<b>Hors la loi</b> : Vous avez été interdit de territoire à la suite d'actes odieux contre le royaume ou de fausses accusations. Dans ce royaume, vous êtes recherché par la Garde.";
    }
    if(EV_Danger_EV == "9"){
        var Danger_aff = "<b>Manipulé</b> : Vous avez été manipulé pour briser votre neutralité. Vous décidez comment cela s'est produit, mais quiconque connaît votre réputation sait que vous n'êtes pas neutre.";
    }
    if(EV_Danger_EV == "10"){
        var Danger_aff = "<b>Maudit</b> : Vous avez été touché par une malédiction. A voir avec le MJ.";
    }	
        }
        else if(EV_Danger > 6){	// Enemies
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "un";}else{var Sexe = "une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession < "3"){var Profession = " noble";}
    if(Profession > "2" && Profession < "5"){var Profession = " mercenaire";}
    if(Profession > "4" && Profession < "7"){var Profession = " soldat";}
    if(Profession > "6" && Profession < "9"){var Profession = " marchand";}
    if(Profession > "8"){var Profession = " criminel";}
        var Cause = Math.floor(Math.random() * Math.floor(10))+1;
    if(Cause < "3"){var Cause = " qui vous a calomnié";}
    if(Cause > "2" && Cause < "5"){var Cause = " a qui vous avez déjoué ses plans.";}
    if(Cause > "4" && Cause < "7"){var Cause = " qui vous a trahi.";}
    if(Cause > "6" && Cause < "9"){var Cause = " a qui vous avez tué ses parents.";}
    if(Cause > "8"){var Cause = " qui vous a trompé.";}
        var Pouvoir = Math.floor(Math.random() * Math.floor(10))+1;
    if(Pouvoir < "3"){var Pouvoir = " avec un bon statut social";}
    if(Pouvoir > "2" && Pouvoir < "5"){var Pouvoir = " avec beaucoup de connaissances";}
    if(Pouvoir > "4" && Pouvoir < "7"){var Pouvoir = " doué physiquement";}
    if(Pouvoir > "6" && Pouvoir < "9"){var Pouvoir = " avec de nombreux sbires";}
    if(Pouvoir > "8"){var Pouvoir = " doué magiquement";}
        var Escalade = Math.floor(Math.random() * Math.floor(10))+1;
    if(Escalade < "3"){var Escalade = " C'est presque oublié.";}
    if(Escalade > "2" && Escalade < "5"){var Escalade = " Il/elle tentera de vous poignarder à la moindre occasion.";}
    if(Escalade > "4" && Escalade < "7"){var Escalade = " Il/elle est extrement violent.";}
    if(Escalade > "6" && Escalade < "9"){var Escalade = " Il/elle est en quête de revanche.";}
    if(Escalade > "8"){var Escalade = " Il/elle réclame votre sang.";}
    
        var DCD = Math.floor(Math.random() * Math.floor(10))+1;
    if(DCD <= "30"){var DCD = "<br>Fort heureusement, il/elle est morte depuis ce temps.";}else{var DCD = "<br>Malheuresement, il/elle toujours en vie...";}
        var Danger_aff = "<b>Ennemi</b> :"+Sexe+Profession+Pouvoir+Cause+Escalade+DCD;
        }
        else{	// Wounds
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){var Danger_aff = "<b>Genou rigide (-1 SPD)</b> : Une horrible blessure à votre jambe l'a brisée et presque irrémédiable. Même après une intervention chirurgicale et un régime de potions de sorceleur, il n'a jamais été le même.";}
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Oeil endommagé (-1 Vigilance (vision))</b> : Habituellement, les sorceleurs sont assez rapides pour éviter une attaque, mais certains monstres sont trop rapides. Un coup dans l'œil l'a laissé légèrement flou.";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Bras raide (-1 Mêlée)</b> : Un coup fracassant sur votre bras vous a laissé des semaines de récupération et un bras raide. Vous pouvez toujours tenir une épée et vous battre, mais la raideur vous aggrave toujours.";}
    if(EV_Danger_EV == "4"){var Danger_aff = "<b>Doigts endommagés (impossible de faire des signes avec cette main)</b> : Cela peut avoir été le résultat de la torture ou simplement d'une frappe très malchanceuse à cette main au combat, mais ses doigts sont raides et maladroits.";}
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Pointe de flèche intégrée (-1 Physique)</b> : Un tireur d'élite vous a laissé une pointe de flèche dans votre corps, logée dans votre muscle.";}
    if(EV_Danger_EV == "6"){var Danger_aff = "<b>Respiration sifflante (-5 points d'endurance)</b> : Vous avez peut-être été poignardé aux poumons ou inhalé un gaz toxique. De toute façon, vos poumons ont été endommagés; respirer normalement est quelque peu difficile.";}
    if(EV_Danger_EV == "7"){var Danger_aff = "<b>Énorme cicatrice (-2 charme et séduction)</b> : Il n’est pas rare que le corps d’un sorceleur soit un rempli de cicatrices. Cependant, vous avez subi un coup qui a défiguré votre visage.";}
    if(EV_Danger_EV == "8"){var Danger_aff = "<b>Nez endommagé (-2 Sens accrus)</b> : Un certain nombre de coups de poing au visage dans des combats de barres (ou des gaz toxiques) ont endommagé votre nez et vous ont presque volé votre suivi de parfum.";}
    if(EV_Danger_EV == "9"){var Danger_aff = "<b>Dégâts de venin (-5 PV)</b> : Des toxines qui se sont répandues et qui vous ont laissé des veines noircies autour de la blessure et a affaibli votre corps.";}
    if(EV_Danger_EV == "10"){var Danger_aff = "<b>À moitié sourd (-1 Vigilance (audition))</b> : De nombreux monstres utilisent des attaques sonores mortelles. Vous avez eu la chance d'en survivre, mais vos oreilles ne seront plus jamais les mêmes.";}
        }
    }
    
        var EV = Math.floor(Math.random() * Math.floor(10))+1;
        // Bénéfice : 1 ; Allier : 2 ; Chasse : 3 ; Rien : 4-10
    if(EV == "1"){ // Bénéfice
        var Chance = Math.floor(Math.random() * Math.floor(10))+1;
    if(Chance == "1"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise == "1"){var Surprise = "un bébé.";}
    if(Surprise == "2"){var Surprise = "un chien.";}
    if(Surprise == "3"){var Surprise = "un cheval.";}
    if(Surprise == "4"){var Surprise = "une nouvelle charrue.";}
    if(Surprise == "5"){var Surprise = "un chat.";}
    if(Surprise == "6"){var Surprise = "un baril de bière.";}
    if(Surprise == "7"){var Surprise = "un bijou d'une valeur de 700 couronnes.";}
    if(Surprise == "8"){var Surprise = "une arme valant jusqu'à 500 couronnes.";}
    if(Surprise == "9"){var Surprise = "un bœuf.";}
    if(Surprise == "10"){var Surprise = "une mule.";}
        var EV = "<b>Droit de surprise</b> : Vous avez invoqué le Droit de surprises au cours de cette décennie et vous avez obtenu "+Surprise;
    }
    if(Chance == "2"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "7"){var Surprise = "Cela a duré quelques semaines.";}
    if(Surprise > "8"){var Surprise = "Cela a duré quelques mois.";}
    else{var Surprise = " Ça continue, avec des hauts et des bas.";}
        var EV = "<br>Romance</br> : Vous avez trouvé un amant qui a vu au-delà de vos mutations et désensibilisation. D'une manière ou d'une autre, vous avez réussi à établir un lien significatif avec une personne."+Surprise;
    }
    if(Chance == "3"){
        var Surprise = Number(Math.floor(Math.random() * Math.floor(10))+1)*100;
        var EV = "<br>Aubaine</br> : Vous avez ramassé une quantité étonnamment élevée de pièces au cours de cette décennie. Vous avez réussi non seulement à payer les ingrédients d'alchimie et les réparations de votre équipement, mais également à mettre de l'argent de côté pour réaliser des économies légitimes. Vous gagnez "+Surprise+" couronnes.";
    }
    if(Chance == "4"){var EV = "<br>Faveur d'un noble</br> : Vous avez effectué une tâche pour un noble. C'était peut-être légal, c'était peut-être illégal - de toute façon, le noble que vous avez aidé vous doit beaucoup. Vous pouvez invoquer cette faveur à tout moment mais elle doit être raisonnable.";}
    if(Chance == "5"){var EV = "<br>Les secrets du sorceleur transmis</br> : Au cours de vos voyages, vous avez rencontré et voyagé avec un autre sorceleur. Ce sorceleur vous a enseigné et partagé des connaissances perdues depuis longtemps. Vous obtenez un diagramme de sorceleur: une potion, de l'huile ou une décoction de votre choix.";}
    if(Chance == "6"){var EV = "<br>Valereux</br> : À un moment donné de cette décennie, vous avez combattu courageusement pour défendre un pays. Vous êtes peut-être allé protéger quelqu'un ou vous vous êtes peut-être trouvé au bon endroit au bon moment. Pour cette grande action, vous avez été fait chevalier par un roi / reine. Vous gagnez +1 en réputation dans le pays de votre choix.";}
    if(Chance == "7"){var EV = "<br>Avec les bandits</br> : Vous êtes tombé sur un groupe de bandits ou scoia’tael pendant une chasse. Vous n'êtes peut-être pas d'accord avec leurs méthodes, mais ils ne vous ont pas dérangés et vous ne les avez pas dérangés. Vous avez même partagé des boissons. Vous pouvez leur demander une faveur une fois par mois tant que cela est raisonnable.";}
    if(Chance == "8"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "3" ){var Surprise = "une amélioration elfique.";}
    if(Surprise > "2" && Surprise < 5){var Surprise = "un message elfique.";}
    if(Surprise > "4" && Surprise < 7){var Surprise = "une amélioration naine.";}
    if(Surprise > "6" && Surprise < 9){var Surprise = "une arbalète à main gnome.";}
    if(Surprise > "8"){var Surprise = "un manteau nain.";}	
        var EV = "<br>A exploré une ruine</br> : Vous deviez chasser un monstre à travers une ruine grande et complexe. En chemin, vous avez trouvé quelque chose d'utile :  "+Surprise;
    }
    if(Chance == "9"){var EV = "<br>Faveur d'un mage</br> : Au cours de cette décennie, vous avez rendu service à un mage. Vous avez peut-être rassemblé des pièces de monstre pour leurs expériences, laissez-les vous étudier ou même capturé un monstre vivant pour eux. Quoi qu'il en soit, le mage vous doit maintenant une faveur en retour tant qu'elle est raisonnable.";}
    if(Chance == "10"){var EV = "<br>Trouvé un maître</br> : Vous avez passé plusieurs semaines à apprendre, à pratiquer et à demander conseil à votre mentor. C'était une expérience étrange. Vous pouvez gagner +1 dans n'importe quelle compétence INT ou commencer une nouvelle compétence INT à +2.";}
    }
    if(EV == "2"){ // Allier
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "Un";}else{var Sexe = "Une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession == "1"){var Profession = " chasseur de prime";}
    if(Profession == "2"){var Profession = " mage";}
    if(Profession == "3"){var Profession = " mentor";}
    if(Profession == "4"){var Profession = " un ami d'enfance";}
    if(Profession == "5"){var Profession = " artisan";}
    if(Profession == "6"){var Profession = " ancien ennemi";}
    if(Profession == "7"){var Profession = " duc";}
    if(Profession == "8"){var Profession = " prêtre";}
    if(Profession == "9"){var Profession = " soldat";}
    if(Profession == "10"){var Profession = " barde";}
    
        var Rencontre = Math.floor(Math.random() * Math.floor(10))+1;
    if(Rencontre == "1"){var Rencontre = " que vous avez sauvé.";}
    if(Rencontre == "2"){var Rencontre = " que vous avez rencontré dans une taverne.";}
    if(Rencontre == "3"){var Rencontre = " qui vous a sauvé.";}
    if(Rencontre == "4"){var Rencontre = " qui vous a engagé.";}
    if(Rencontre == "5"){var Rencontre = " avec qui vous êtiez prisonnés.";}
    if(Rencontre == "6"){var Rencontre = " avec qui vous êtiez obligé de travailler.";}
    if(Rencontre == "7"){var Rencontre = " que vous avez engagé.";}
    if(Rencontre == "8"){var Rencontre = " que vous avez rencontré quand vous êtiez complètement saoul.";}
    if(Rencontre == "9"){var Rencontre = " que vous avez rencontré pendant vos voyages.";}
    if(Rencontre == "10"){var Rencontre = " avec qui vous avez combattu.";}
        var Proche = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proche < "7"){var Proche = " Vous êtes des connaissances.";}
    else if(Proche == "10"){var Proche = " Vous êtes lié par serment.";}
    else{var Proche = " Vous êtes des amis.";}
        var Vivant = Math.floor(Math.random() * Math.floor(100))+1;
    if(Vivant <= "30"){var Vivant = "<br>Malheuresement, il/elle est morte.";}else{var Vivant = "<br>Heureusement, il/elle est toujours vivant.";}
    
        var EV = "<b>Allier</b> : "+Sexe+Profession+Rencontre+Proche+Vivant;
    }
    if(EV == "3"){	// Chasse
        var Proie = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proie == "1"){var Proie = "un spectre";}
    if(Proie == "2"){var Proie = "une créature maudite";}
    if(Proie == "3"){var Proie = "un hybride";}
    if(Proie == "4"){var Proie = "un insectoïde";}
    if(Proie == "5"){var Proie = "un élémentaire";}
    if(Proie == "6"){var Proie = "une veuve";}
    if(Proie == "7"){var Proie = "un ogre";}
    if(Proie == "8"){var Proie = "un draconide";}
    if(Proie == "9"){var Proie = "un nécrophage";}
    if(Proie == "10"){var Proie = "un vampire";}
        var Lieu = Math.floor(Math.random() * Math.floor(10))+1;
    if(Lieu == "1"){var Lieu = " dans une fôret.";}
    if(Lieu == "2"){var Lieu = " dans un batiment.";}
    if(Lieu == "3"){var Lieu = " dans un batiment abandonné.";}
    if(Lieu == "4"){var Lieu = " sur la côte.";}
    if(Lieu == "5"){var Lieu = " dans la montagne.";}
    if(Lieu == "6"){var Lieu = " dans une ville.";}
    if(Lieu == "7"){var Lieu = " dans un cimetierre.";}
    if(Lieu == "8"){var Lieu = " dans un hameau.";}
    if(Lieu == "9"){var Lieu = " le long de la rivière.";}
    if(Lieu == "10"){var Lieu = " dans un grotte.";}
    
        var Fin = Math.floor(Math.random() * Math.floor(10))+1;
    if(Fin < "3"){var Fin = " Vous avez pris votre argent et vous êtes parti.";}
    if(Fin > "2" && Fin < "5"){var Fin = " L'employeur a refusé de payer.";}
    if(Fin > "4" && Fin < "7"){var Fin = " L'employeur vous a payé en échange.";}
    if(Fin > "6" && Fin < "9"){var Fin = " Ce fut un combat particulièrement difficile.";}
    if(Fin > "8"){var Fin = " Ce fut un combat étonnamment facile.";}
        var PB = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB < "5"){
        var PB2 = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB2 == "1"){var Fin = " Malheuresement, le monstre était faux.";}	
    if(PB2 == "2"){var Fin = " Malheuresement, c'était une malédiction.";}	
    if(PB2 == "3"){var Fin = " Malheuresement, le monstre était déjà mort.";}	
    if(PB2 == "4"){var Fin = " Malheuresement, ce n'était pas ce que vous pensiez.";}
    if(PB2 == "5"){var Fin = " Malheuresement, votre employeur voulait l'attrapé vivant.";}
    if(PB2 == "6"){var Fin = " Malheuresement, l'employeur est à blâmer pour tout cela";}
    if(PB2 == "7"){var Fin = " Malheuresement, le monstre était inoffensif.";}
    if(PB2 == "8"){var Fin = " Malheuresement, c'était un piège.";}
    if(PB2 == "9"){var Fin = " Malheuresement, c'était plus que ce qu'on vous avait dit.";}
    if(PB2 == "10"){var Fin = " Malheuresement, un mage était derrière tout ça.";}
    }
    
        var EV = "<b>Chasse</b> : "+Proie+Lieu+Fin;
        
    }
    else{var EV = "Il ne s'est rien passé de notable."}
        Evénement_Sorceleur_2.innerHTML = Danger_aff+EV;
    }

    if(Sorceleur_8.value == "2"){
        var Danger = Math.floor(Math.random() * Math.floor(100))+1;
        // Danger si < 25
    var Danger_aff = "";
    if(Danger <= "25"){
        var EV_Danger = Math.floor(Math.random() * Math.floor(10))+1;
        // 1-3 Events ; 4-6 Wounds ; 7-10 Enemies
        if(EV_Danger < "4"){	// Events
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){
        var dette = Number(Math.floor(Math.random() * Math.floor(10))+1)*10;
        var Danger_aff = "<b>Dette</b> : à cause d'un équipement cassé, d'une partie de Gwent ou autres, vous avez fait croître une dette de "+dette+" couronnes à un établissement ou une maison noble.";
    }
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Monstre échappé</b> : Un troll, un katakan, un loup-garou ou un autre monstre que vous chassiez vous a échappé et se promène librement. Ils peuvent revenir un jour...";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Dépendance</b> : Vous êtes tombé sur des moments difficiles et avez contracté une dépendance.";}
    if(EV_Danger_EV == "4"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
        var Danger_aff = "<b>Détenu</b> : Vous avez passé "+dette+" ans de cette décennie dans une prison en raison de fausses accusations, ou peut-être d'un crime que vous avez commis.";
    }
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Accusé à tort</b> : Soit quelqu'un veut que tu partes, soit tu étais le parfait bouc émissaire.";}
    if(EV_Danger_EV == "6"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "Il vous a fait chanté.";}
    else if(dette > "7"){var dette = "Il vous a attaqué dans le dos.";}
    else{var dette = "Il a dévoilé un de vos secrets.";}
        var Danger_aff = "<b>Trahi</b> : Un ami ou un amant vous a trahi."+dette;
    }
    if(EV_Danger_EV == "7"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "tué par un monstre.";}
    if(dette > "3" && dette < "7"){var dette = "exécuté.";}
    if(dette > "6" && dette < "9" ){var dette = "assassiné.";}
    if(dette > "8"){var dette = "empoisonné.";}
        var Danger_aff = "<b>Ami ou amant tué</b> : Un proche a été "+dette;
    }
    if(EV_Danger_EV == "8"){
        var Danger_aff = "<b>Hors la loi</b> : Vous avez été interdit de territoire à la suite d'actes odieux contre le royaume ou de fausses accusations. Dans ce royaume, vous êtes recherché par la Garde.";
    }
    if(EV_Danger_EV == "9"){
        var Danger_aff = "<b>Manipulé</b> : Vous avez été manipulé pour briser votre neutralité. Vous décidez comment cela s'est produit, mais quiconque connaît votre réputation sait que vous n'êtes pas neutre.";
    }
    if(EV_Danger_EV == "10"){
        var Danger_aff = "<b>Maudit</b> : Vous avez été touché par une malédiction. A voir avec le MJ.";
    }	
        }
        else if(EV_Danger > 6){	// Enemies
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "un";}else{var Sexe = "une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession < "3"){var Profession = " noble";}
    if(Profession > "2" && Profession < "5"){var Profession = " mercenaire";}
    if(Profession > "4" && Profession < "7"){var Profession = " soldat";}
    if(Profession > "6" && Profession < "9"){var Profession = " marchand";}
    if(Profession > "8"){var Profession = " criminel";}
        var Cause = Math.floor(Math.random() * Math.floor(10))+1;
    if(Cause < "3"){var Cause = " qui vous a calomnié";}
    if(Cause > "2" && Cause < "5"){var Cause = " a qui vous avez déjoué ses plans.";}
    if(Cause > "4" && Cause < "7"){var Cause = " qui vous a trahi.";}
    if(Cause > "6" && Cause < "9"){var Cause = " a qui vous avez tué ses parents.";}
    if(Cause > "8"){var Cause = " qui vous a trompé.";}
        var Pouvoir = Math.floor(Math.random() * Math.floor(10))+1;
    if(Pouvoir < "3"){var Pouvoir = " avec un bon statut social";}
    if(Pouvoir > "2" && Pouvoir < "5"){var Pouvoir = " avec beaucoup de connaissances";}
    if(Pouvoir > "4" && Pouvoir < "7"){var Pouvoir = " doué physiquement";}
    if(Pouvoir > "6" && Pouvoir < "9"){var Pouvoir = " avec de nombreux sbires";}
    if(Pouvoir > "8"){var Pouvoir = " doué magiquement";}
        var Escalade = Math.floor(Math.random() * Math.floor(10))+1;
    if(Escalade < "3"){var Escalade = " C'est presque oublié.";}
    if(Escalade > "2" && Escalade < "5"){var Escalade = " Il/elle tentera de vous poignarder à la moindre occasion.";}
    if(Escalade > "4" && Escalade < "7"){var Escalade = " Il/elle est extrement violent.";}
    if(Escalade > "6" && Escalade < "9"){var Escalade = " Il/elle est en quête de revanche.";}
    if(Escalade > "8"){var Escalade = " Il/elle réclame votre sang.";}
    
        var DCD = Math.floor(Math.random() * Math.floor(10))+1;
    if(DCD <= "30"){var DCD = "<br>Fort heureusement, il/elle est morte depuis ce temps.";}else{var DCD = "<br>Malheuresement, il/elle toujours en vie...";}
        var Danger_aff = "<b>Ennemi</b> :"+Sexe+Profession+Pouvoir+Cause+Escalade+DCD;
        }
        else{	// Wounds
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){var Danger_aff = "<b>Genou rigide (-1 SPD)</b> : Une horrible blessure à votre jambe l'a brisée et presque irrémédiable. Même après une intervention chirurgicale et un régime de potions de sorceleur, il n'a jamais été le même.";}
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Oeil endommagé (-1 Vigilance (vision))</b> : Habituellement, les sorceleurs sont assez rapides pour éviter une attaque, mais certains monstres sont trop rapides. Un coup dans l'œil l'a laissé légèrement flou.";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Bras raide (-1 Mêlée)</b> : Un coup fracassant sur votre bras vous a laissé des semaines de récupération et un bras raide. Vous pouvez toujours tenir une épée et vous battre, mais la raideur vous aggrave toujours.";}
    if(EV_Danger_EV == "4"){var Danger_aff = "<b>Doigts endommagés (impossible de faire des signes avec cette main)</b> : Cela peut avoir été le résultat de la torture ou simplement d'une frappe très malchanceuse à cette main au combat, mais ses doigts sont raides et maladroits.";}
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Pointe de flèche intégrée (-1 Physique)</b> : Un tireur d'élite vous a laissé une pointe de flèche dans votre corps, logée dans votre muscle.";}
    if(EV_Danger_EV == "6"){var Danger_aff = "<b>Respiration sifflante (-5 points d'endurance)</b> : Vous avez peut-être été poignardé aux poumons ou inhalé un gaz toxique. De toute façon, vos poumons ont été endommagés; respirer normalement est quelque peu difficile.";}
    if(EV_Danger_EV == "7"){var Danger_aff = "<b>Énorme cicatrice (-2 charme et séduction)</b> : Il n’est pas rare que le corps d’un sorceleur soit un rempli de cicatrices. Cependant, vous avez subi un coup qui a défiguré votre visage.";}
    if(EV_Danger_EV == "8"){var Danger_aff = "<b>Nez endommagé (-2 Sens accrus)</b> : Un certain nombre de coups de poing au visage dans des combats de barres (ou des gaz toxiques) ont endommagé votre nez et vous ont presque volé votre suivi de parfum.";}
    if(EV_Danger_EV == "9"){var Danger_aff = "<b>Dégâts de venin (-5 PV)</b> : Des toxines qui se sont répandues et qui vous ont laissé des veines noircies autour de la blessure et a affaibli votre corps.";}
    if(EV_Danger_EV == "10"){var Danger_aff = "<b>À moitié sourd (-1 Vigilance (audition))</b> : De nombreux monstres utilisent des attaques sonores mortelles. Vous avez eu la chance d'en survivre, mais vos oreilles ne seront plus jamais les mêmes.";}
        }
    }
    
        var EV = Math.floor(Math.random() * Math.floor(10))+1;
        // Bénéfice : 1 ; Allier : 2 ; Chasse : 3-5 ; Rien : 6-10
    if(EV == "1"){ // Bénéfice
        var Chance = Math.floor(Math.random() * Math.floor(10))+1;
    if(Chance == "1"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise == "1"){var Surprise = "un bébé.";}
    if(Surprise == "2"){var Surprise = "un chien.";}
    if(Surprise == "3"){var Surprise = "un cheval.";}
    if(Surprise == "4"){var Surprise = "une nouvelle charrue.";}
    if(Surprise == "5"){var Surprise = "un chat.";}
    if(Surprise == "6"){var Surprise = "un baril de bière.";}
    if(Surprise == "7"){var Surprise = "un bijou d'une valeur de 700 couronnes.";}
    if(Surprise == "8"){var Surprise = "une arme valant jusqu'à 500 couronnes.";}
    if(Surprise == "9"){var Surprise = "un bœuf.";}
    if(Surprise == "10"){var Surprise = "une mule.";}
        var EV = "<b>Droit de surprise</b> : Vous avez invoqué le Droit de surprises au cours de cette décennie et vous avez obtenu "+Surprise;
    }
    if(Chance == "2"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "7"){var Surprise = "Cela a duré quelques semaines.";}
    if(Surprise > "8"){var Surprise = "Cela a duré quelques mois.";}
    else{var Surprise = " Ça continue, avec des hauts et des bas.";}
        var EV = "<br>Romance</br> : Vous avez trouvé un amant qui a vu au-delà de vos mutations et désensibilisation. D'une manière ou d'une autre, vous avez réussi à établir un lien significatif avec une personne."+Surprise;
    }
    if(Chance == "3"){
        var Surprise = Number(Math.floor(Math.random() * Math.floor(10))+1)*100;
        var EV = "<br>Aubaine</br> : Vous avez ramassé une quantité étonnamment élevée de pièces au cours de cette décennie. Vous avez réussi non seulement à payer les ingrédients d'alchimie et les réparations de votre équipement, mais également à mettre de l'argent de côté pour réaliser des économies légitimes. Vous gagnez "+Surprise+" couronnes.";
    }
    if(Chance == "4"){var EV = "<br>Faveur d'un noble</br> : Vous avez effectué une tâche pour un noble. C'était peut-être légal, c'était peut-être illégal - de toute façon, le noble que vous avez aidé vous doit beaucoup. Vous pouvez invoquer cette faveur à tout moment mais elle doit être raisonnable.";}
    if(Chance == "5"){var EV = "<br>Les secrets du sorceleur transmis</br> : Au cours de vos voyages, vous avez rencontré et voyagé avec un autre sorceleur. Ce sorceleur vous a enseigné et partagé des connaissances perdues depuis longtemps. Vous obtenez un diagramme de sorceleur: une potion, de l'huile ou une décoction de votre choix.";}
    if(Chance == "6"){var EV = "<br>Valereux</br> : À un moment donné de cette décennie, vous avez combattu courageusement pour défendre un pays. Vous êtes peut-être allé protéger quelqu'un ou vous vous êtes peut-être trouvé au bon endroit au bon moment. Pour cette grande action, vous avez été fait chevalier par un roi / reine. Vous gagnez +1 en réputation dans le pays de votre choix.";}
    if(Chance == "7"){var EV = "<br>Avec les bandits</br> : Vous êtes tombé sur un groupe de bandits ou scoia’tael pendant une chasse. Vous n'êtes peut-être pas d'accord avec leurs méthodes, mais ils ne vous ont pas dérangés et vous ne les avez pas dérangés. Vous avez même partagé des boissons. Vous pouvez leur demander une faveur une fois par mois tant que cela est raisonnable.";}
    if(Chance == "8"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "3" ){var Surprise = "une amélioration elfique.";}
    if(Surprise > "2" && Surprise < 5){var Surprise = "un message elfique.";}
    if(Surprise > "4" && Surprise < 7){var Surprise = "une amélioration naine.";}
    if(Surprise > "6" && Surprise < 9){var Surprise = "une arbalète à main gnome.";}
    if(Surprise > "8"){var Surprise = "un manteau nain.";}	
        var EV = "<br>A exploré une ruine</br> : Vous deviez chasser un monstre à travers une ruine grande et complexe. En chemin, vous avez trouvé quelque chose d'utile :  "+Surprise;
    }
    if(Chance == "9"){var EV = "<br>Faveur d'un mage</br> : Au cours de cette décennie, vous avez rendu service à un mage. Vous avez peut-être rassemblé des pièces de monstre pour leurs expériences, laissez-les vous étudier ou même capturé un monstre vivant pour eux. Quoi qu'il en soit, le mage vous doit maintenant une faveur en retour tant qu'elle est raisonnable.";}
    if(Chance == "10"){var EV = "<br>Trouvé un maître</br> : Vous avez passé plusieurs semaines à apprendre, à pratiquer et à demander conseil à votre mentor. C'était une expérience étrange. Vous pouvez gagner +1 dans n'importe quelle compétence INT ou commencer une nouvelle compétence INT à +2.";}
    }
    if(EV == "2"){ // Allier
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "Un";}else{var Sexe = "Une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession == "1"){var Profession = " chasseur de prime";}
    if(Profession == "2"){var Profession = " mage";}
    if(Profession == "3"){var Profession = " mentor";}
    if(Profession == "4"){var Profession = " un ami d'enfance";}
    if(Profession == "5"){var Profession = " artisan";}
    if(Profession == "6"){var Profession = " ancien ennemi";}
    if(Profession == "7"){var Profession = " duc";}
    if(Profession == "8"){var Profession = " prêtre";}
    if(Profession == "9"){var Profession = " soldat";}
    if(Profession == "10"){var Profession = " barde";}
    
        var Rencontre = Math.floor(Math.random() * Math.floor(10))+1;
    if(Rencontre == "1"){var Rencontre = " que vous avez sauvé.";}
    if(Rencontre == "2"){var Rencontre = " que vous avez rencontré dans une taverne.";}
    if(Rencontre == "3"){var Rencontre = " qui vous a sauvé.";}
    if(Rencontre == "4"){var Rencontre = " qui vous a engagé.";}
    if(Rencontre == "5"){var Rencontre = " avec qui vous êtiez prisonnés.";}
    if(Rencontre == "6"){var Rencontre = " avec qui vous êtiez obligé de travailler.";}
    if(Rencontre == "7"){var Rencontre = " que vous avez engagé.";}
    if(Rencontre == "8"){var Rencontre = " que vous avez rencontré quand vous êtiez complètement saoul.";}
    if(Rencontre == "9"){var Rencontre = " que vous avez rencontré pendant vos voyages.";}
    if(Rencontre == "10"){var Rencontre = " avec qui vous avez combattu.";}
        var Proche = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proche < "7"){var Proche = " Vous êtes des connaissances.";}
    else if(Proche == "10"){var Proche = " Vous êtes lié par serment.";}
    else{var Proche = " Vous êtes des amis.";}
        var Vivant = Math.floor(Math.random() * Math.floor(100))+1;
    if(Vivant <= "30"){var Vivant = "<br>Malheuresement, il/elle est morte.";}else{var Vivant = "<br>Heureusement, il/elle est toujours vivant.";}
    
        var EV = "<b>Allier</b> : "+Sexe+Profession+Rencontre+Proche+Vivant;
    }
    if(EV > "2" && EV < "6"){	// Chasse
        var Proie = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proie == "1"){var Proie = "un spectre";}
    if(Proie == "2"){var Proie = "une créature maudite";}
    if(Proie == "3"){var Proie = "un hybride";}
    if(Proie == "4"){var Proie = "un insectoïde";}
    if(Proie == "5"){var Proie = "un élémentaire";}
    if(Proie == "6"){var Proie = "une veuve";}
    if(Proie == "7"){var Proie = "un ogre";}
    if(Proie == "8"){var Proie = "un draconide";}
    if(Proie == "9"){var Proie = "un nécrophage";}
    if(Proie == "10"){var Proie = "un vampire";}
        var Lieu = Math.floor(Math.random() * Math.floor(10))+1;
    if(Lieu == "1"){var Lieu = " dans une fôret.";}
    if(Lieu == "2"){var Lieu = " dans un batiment.";}
    if(Lieu == "3"){var Lieu = " dans un batiment abandonné.";}
    if(Lieu == "4"){var Lieu = " sur la côte.";}
    if(Lieu == "5"){var Lieu = " dans la montagne.";}
    if(Lieu == "6"){var Lieu = " dans une ville.";}
    if(Lieu == "7"){var Lieu = " dans un cimetierre.";}
    if(Lieu == "8"){var Lieu = " dans un hameau.";}
    if(Lieu == "9"){var Lieu = " le long de la rivière.";}
    if(Lieu == "10"){var Lieu = " dans un grotte.";}
    
        var Fin = Math.floor(Math.random() * Math.floor(10))+1;
    if(Fin < "3"){var Fin = " Vous avez pris votre argent et vous êtes parti.";}
    if(Fin > "2" && Fin < "5"){var Fin = " L'employeur a refusé de payer.";}
    if(Fin > "4" && Fin < "7"){var Fin = " L'employeur vous a payé en échange.";}
    if(Fin > "6" && Fin < "9"){var Fin = " Ce fut un combat particulièrement difficile.";}
    if(Fin > "8"){var Fin = " Ce fut un combat étonnamment facile.";}
        var PB = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB < "5"){
        var PB2 = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB2 == "1"){var Fin = " Malheuresement, le monstre était faux.";}	
    if(PB2 == "2"){var Fin = " Malheuresement, c'était une malédiction.";}	
    if(PB2 == "3"){var Fin = " Malheuresement, le monstre était déjà mort.";}	
    if(PB2 == "4"){var Fin = " Malheuresement, ce n'était pas ce que vous pensiez.";}
    if(PB2 == "5"){var Fin = " Malheuresement, votre employeur voulait l'attrapé vivant.";}
    if(PB2 == "6"){var Fin = " Malheuresement, l'employeur est à blâmer pour tout cela";}
    if(PB2 == "7"){var Fin = " Malheuresement, le monstre était inoffensif.";}
    if(PB2 == "8"){var Fin = " Malheuresement, c'était un piège.";}
    if(PB2 == "9"){var Fin = " Malheuresement, c'était plus que ce qu'on vous avait dit.";}
    if(PB2 == "10"){var Fin = " Malheuresement, un mage était derrière tout ça.";}
    }
    
        var EV = "<b>Chasse</b> : "+Proie+Lieu+Fin;
        
    }
    else{var EV = "Il ne s'est rien passé de notable."}
        Evénement_Sorceleur_2.innerHTML = Danger_aff+EV;
    }

    if(Sorceleur_8.value == "3"){
        var Danger = Math.floor(Math.random() * Math.floor(100))+1;
        // Danger si < 50
    var Danger_aff = "";
    if(Danger <= "50"){
        var EV_Danger = Math.floor(Math.random() * Math.floor(10))+1;
        // 1-3 Events ; 4-6 Wounds ; 7-10 Enemies
        if(EV_Danger < "4"){	// Events
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){
        var dette = Number(Math.floor(Math.random() * Math.floor(10))+1)*10;
        var Danger_aff = "<b>Dette</b> : à cause d'un équipement cassé, d'une partie de Gwent ou autres, vous avez fait croître une dette de "+dette+" couronnes à un établissement ou une maison noble.";
    }
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Monstre échappé</b> : Un troll, un katakan, un loup-garou ou un autre monstre que vous chassiez vous a échappé et se promène librement. Ils peuvent revenir un jour...";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Dépendance</b> : Vous êtes tombé sur des moments difficiles et avez contracté une dépendance.";}
    if(EV_Danger_EV == "4"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
        var Danger_aff = "<b>Détenu</b> : Vous avez passé "+dette+" ans de cette décennie dans une prison en raison de fausses accusations, ou peut-être d'un crime que vous avez commis.";
    }
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Accusé à tort</b> : Soit quelqu'un veut que tu partes, soit tu étais le parfait bouc émissaire.";}
    if(EV_Danger_EV == "6"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "Il vous a fait chanté.";}
    else if(dette > "7"){var dette = "Il vous a attaqué dans le dos.";}
    else{var dette = "Il a dévoilé un de vos secrets.";}
        var Danger_aff = "<b>Trahi</b> : Un ami ou un amant vous a trahi."+dette;
    }
    if(EV_Danger_EV == "7"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "tué par un monstre.";}
    if(dette > "3" && dette < "7"){var dette = "exécuté.";}
    if(dette > "6" && dette < "9" ){var dette = "assassiné.";}
    if(dette > "8"){var dette = "empoisonné.";}
        var Danger_aff = "<b>Ami ou amant tué</b> : Un proche a été "+dette;
    }
    if(EV_Danger_EV == "8"){
        var Danger_aff = "<b>Hors la loi</b> : Vous avez été interdit de territoire à la suite d'actes odieux contre le royaume ou de fausses accusations. Dans ce royaume, vous êtes recherché par la Garde.";
    }
    if(EV_Danger_EV == "9"){
        var Danger_aff = "<b>Manipulé</b> : Vous avez été manipulé pour briser votre neutralité. Vous décidez comment cela s'est produit, mais quiconque connaît votre réputation sait que vous n'êtes pas neutre.";
    }
    if(EV_Danger_EV == "10"){
        var Danger_aff = "<b>Maudit</b> : Vous avez été touché par une malédiction. A voir avec le MJ.";
    }	
        }
        else if(EV_Danger > 6){	// Enemies
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "un";}else{var Sexe = "une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession < "3"){var Profession = " noble";}
    if(Profession > "2" && Profession < "5"){var Profession = " mercenaire";}
    if(Profession > "4" && Profession < "7"){var Profession = " soldat";}
    if(Profession > "6" && Profession < "9"){var Profession = " marchand";}
    if(Profession > "8"){var Profession = " criminel";}
        var Cause = Math.floor(Math.random() * Math.floor(10))+1;
    if(Cause < "3"){var Cause = " qui vous a calomnié";}
    if(Cause > "2" && Cause < "5"){var Cause = " a qui vous avez déjoué ses plans.";}
    if(Cause > "4" && Cause < "7"){var Cause = " qui vous a trahi.";}
    if(Cause > "6" && Cause < "9"){var Cause = " a qui vous avez tué ses parents.";}
    if(Cause > "8"){var Cause = " qui vous a trompé.";}
        var Pouvoir = Math.floor(Math.random() * Math.floor(10))+1;
    if(Pouvoir < "3"){var Pouvoir = " avec un bon statut social";}
    if(Pouvoir > "2" && Pouvoir < "5"){var Pouvoir = " avec beaucoup de connaissances";}
    if(Pouvoir > "4" && Pouvoir < "7"){var Pouvoir = " doué physiquement";}
    if(Pouvoir > "6" && Pouvoir < "9"){var Pouvoir = " avec de nombreux sbires";}
    if(Pouvoir > "8"){var Pouvoir = " doué magiquement";}
        var Escalade = Math.floor(Math.random() * Math.floor(10))+1;
    if(Escalade < "3"){var Escalade = " C'est presque oublié.";}
    if(Escalade > "2" && Escalade < "5"){var Escalade = " Il/elle tentera de vous poignarder à la moindre occasion.";}
    if(Escalade > "4" && Escalade < "7"){var Escalade = " Il/elle est extrement violent.";}
    if(Escalade > "6" && Escalade < "9"){var Escalade = " Il/elle est en quête de revanche.";}
    if(Escalade > "8"){var Escalade = " Il/elle réclame votre sang.";}
    
        var DCD = Math.floor(Math.random() * Math.floor(10))+1;
    if(DCD <= "30"){var DCD = "<br>Fort heureusement, il/elle est morte depuis ce temps.";}else{var DCD = "<br>Malheuresement, il/elle toujours en vie...";}
        var Danger_aff = "<b>Ennemi</b> :"+Sexe+Profession+Pouvoir+Cause+Escalade+DCD;
        }
        else{	// Wounds
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){var Danger_aff = "<b>Genou rigide (-1 SPD)</b> : Une horrible blessure à votre jambe l'a brisée et presque irrémédiable. Même après une intervention chirurgicale et un régime de potions de sorceleur, il n'a jamais été le même.";}
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Oeil endommagé (-1 Vigilance (vision))</b> : Habituellement, les sorceleurs sont assez rapides pour éviter une attaque, mais certains monstres sont trop rapides. Un coup dans l'œil l'a laissé légèrement flou.";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Bras raide (-1 Mêlée)</b> : Un coup fracassant sur votre bras vous a laissé des semaines de récupération et un bras raide. Vous pouvez toujours tenir une épée et vous battre, mais la raideur vous aggrave toujours.";}
    if(EV_Danger_EV == "4"){var Danger_aff = "<b>Doigts endommagés (impossible de faire des signes avec cette main)</b> : Cela peut avoir été le résultat de la torture ou simplement d'une frappe très malchanceuse à cette main au combat, mais ses doigts sont raides et maladroits.";}
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Pointe de flèche intégrée (-1 Physique)</b> : Un tireur d'élite vous a laissé une pointe de flèche dans votre corps, logée dans votre muscle.";}
    if(EV_Danger_EV == "6"){var Danger_aff = "<b>Respiration sifflante (-5 points d'endurance)</b> : Vous avez peut-être été poignardé aux poumons ou inhalé un gaz toxique. De toute façon, vos poumons ont été endommagés; respirer normalement est quelque peu difficile.";}
    if(EV_Danger_EV == "7"){var Danger_aff = "<b>Énorme cicatrice (-2 charme et séduction)</b> : Il n’est pas rare que le corps d’un sorceleur soit un rempli de cicatrices. Cependant, vous avez subi un coup qui a défiguré votre visage.";}
    if(EV_Danger_EV == "8"){var Danger_aff = "<b>Nez endommagé (-2 Sens accrus)</b> : Un certain nombre de coups de poing au visage dans des combats de barres (ou des gaz toxiques) ont endommagé votre nez et vous ont presque volé votre suivi de parfum.";}
    if(EV_Danger_EV == "9"){var Danger_aff = "<b>Dégâts de venin (-5 PV)</b> : Des toxines qui se sont répandues et qui vous ont laissé des veines noircies autour de la blessure et a affaibli votre corps.";}
    if(EV_Danger_EV == "10"){var Danger_aff = "<b>À moitié sourd (-1 Vigilance (audition))</b> : De nombreux monstres utilisent des attaques sonores mortelles. Vous avez eu la chance d'en survivre, mais vos oreilles ne seront plus jamais les mêmes.";}
        }
    }
    
        var EV = Math.floor(Math.random() * Math.floor(10))+1;
        // Bénéfice : 1-2 ; Allier : 3-7 ; Chasse : 8 ; Rien : 9-10
    if(EV < "3"){ // Bénéfice
        var Chance = Math.floor(Math.random() * Math.floor(10))+1;
    if(Chance == "1"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise == "1"){var Surprise = "un bébé.";}
    if(Surprise == "2"){var Surprise = "un chien.";}
    if(Surprise == "3"){var Surprise = "un cheval.";}
    if(Surprise == "4"){var Surprise = "une nouvelle charrue.";}
    if(Surprise == "5"){var Surprise = "un chat.";}
    if(Surprise == "6"){var Surprise = "un baril de bière.";}
    if(Surprise == "7"){var Surprise = "un bijou d'une valeur de 700 couronnes.";}
    if(Surprise == "8"){var Surprise = "une arme valant jusqu'à 500 couronnes.";}
    if(Surprise == "9"){var Surprise = "un bœuf.";}
    if(Surprise == "10"){var Surprise = "une mule.";}
        var EV = "<b>Droit de surprise</b> : Vous avez invoqué le Droit de surprises au cours de cette décennie et vous avez obtenu "+Surprise;
    }
    if(Chance == "2"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "7"){var Surprise = "Cela a duré quelques semaines.";}
    if(Surprise > "8"){var Surprise = "Cela a duré quelques mois.";}
    else{var Surprise = " Ça continue, avec des hauts et des bas.";}
        var EV = "<br>Romance</br> : Vous avez trouvé un amant qui a vu au-delà de vos mutations et désensibilisation. D'une manière ou d'une autre, vous avez réussi à établir un lien significatif avec une personne."+Surprise;
    }
    if(Chance == "3"){
        var Surprise = Number(Math.floor(Math.random() * Math.floor(10))+1)*100;
        var EV = "<br>Aubaine</br> : Vous avez ramassé une quantité étonnamment élevée de pièces au cours de cette décennie. Vous avez réussi non seulement à payer les ingrédients d'alchimie et les réparations de votre équipement, mais également à mettre de l'argent de côté pour réaliser des économies légitimes. Vous gagnez "+Surprise+" couronnes.";
    }
    if(Chance == "4"){var EV = "<br>Faveur d'un noble</br> : Vous avez effectué une tâche pour un noble. C'était peut-être légal, c'était peut-être illégal - de toute façon, le noble que vous avez aidé vous doit beaucoup. Vous pouvez invoquer cette faveur à tout moment mais elle doit être raisonnable.";}
    if(Chance == "5"){var EV = "<br>Les secrets du sorceleur transmis</br> : Au cours de vos voyages, vous avez rencontré et voyagé avec un autre sorceleur. Ce sorceleur vous a enseigné et partagé des connaissances perdues depuis longtemps. Vous obtenez un diagramme de sorceleur: une potion, de l'huile ou une décoction de votre choix.";}
    if(Chance == "6"){var EV = "<br>Valereux</br> : À un moment donné de cette décennie, vous avez combattu courageusement pour défendre un pays. Vous êtes peut-être allé protéger quelqu'un ou vous vous êtes peut-être trouvé au bon endroit au bon moment. Pour cette grande action, vous avez été fait chevalier par un roi / reine. Vous gagnez +1 en réputation dans le pays de votre choix.";}
    if(Chance == "7"){var EV = "<br>Avec les bandits</br> : Vous êtes tombé sur un groupe de bandits ou scoia’tael pendant une chasse. Vous n'êtes peut-être pas d'accord avec leurs méthodes, mais ils ne vous ont pas dérangés et vous ne les avez pas dérangés. Vous avez même partagé des boissons. Vous pouvez leur demander une faveur une fois par mois tant que cela est raisonnable.";}
    if(Chance == "8"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "3" ){var Surprise = "une amélioration elfique.";}
    if(Surprise > "2" && Surprise < 5){var Surprise = "un message elfique.";}
    if(Surprise > "4" && Surprise < 7){var Surprise = "une amélioration naine.";}
    if(Surprise > "6" && Surprise < 9){var Surprise = "une arbalète à main gnome.";}
    if(Surprise > "8"){var Surprise = "un manteau nain.";}	
        var EV = "<br>A exploré une ruine</br> : Vous deviez chasser un monstre à travers une ruine grande et complexe. En chemin, vous avez trouvé quelque chose d'utile :  "+Surprise;
    }
    if(Chance == "9"){var EV = "<br>Faveur d'un mage</br> : Au cours de cette décennie, vous avez rendu service à un mage. Vous avez peut-être rassemblé des pièces de monstre pour leurs expériences, laissez-les vous étudier ou même capturé un monstre vivant pour eux. Quoi qu'il en soit, le mage vous doit maintenant une faveur en retour tant qu'elle est raisonnable.";}
    if(Chance == "10"){var EV = "<br>Trouvé un maître</br> : Vous avez passé plusieurs semaines à apprendre, à pratiquer et à demander conseil à votre mentor. C'était une expérience étrange. Vous pouvez gagner +1 dans n'importe quelle compétence INT ou commencer une nouvelle compétence INT à +2.";}
    }
    if(EV > "2" && EV < "8"){ // Allier
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "Un";}else{var Sexe = "Une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession == "1"){var Profession = " chasseur de prime";}
    if(Profession == "2"){var Profession = " mage";}
    if(Profession == "3"){var Profession = " mentor";}
    if(Profession == "4"){var Profession = " un ami d'enfance";}
    if(Profession == "5"){var Profession = " artisan";}
    if(Profession == "6"){var Profession = " ancien ennemi";}
    if(Profession == "7"){var Profession = " duc";}
    if(Profession == "8"){var Profession = " prêtre";}
    if(Profession == "9"){var Profession = " soldat";}
    if(Profession == "10"){var Profession = " barde";}
    
        var Rencontre = Math.floor(Math.random() * Math.floor(10))+1;
    if(Rencontre == "1"){var Rencontre = " que vous avez sauvé.";}
    if(Rencontre == "2"){var Rencontre = " que vous avez rencontré dans une taverne.";}
    if(Rencontre == "3"){var Rencontre = " qui vous a sauvé.";}
    if(Rencontre == "4"){var Rencontre = " qui vous a engagé.";}
    if(Rencontre == "5"){var Rencontre = " avec qui vous êtiez prisonnés.";}
    if(Rencontre == "6"){var Rencontre = " avec qui vous êtiez obligé de travailler.";}
    if(Rencontre == "7"){var Rencontre = " que vous avez engagé.";}
    if(Rencontre == "8"){var Rencontre = " que vous avez rencontré quand vous êtiez complètement saoul.";}
    if(Rencontre == "9"){var Rencontre = " que vous avez rencontré pendant vos voyages.";}
    if(Rencontre == "10"){var Rencontre = " avec qui vous avez combattu.";}
        var Proche = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proche < "7"){var Proche = " Vous êtes des connaissances.";}
    else if(Proche == "10"){var Proche = " Vous êtes lié par serment.";}
    else{var Proche = " Vous êtes des amis.";}
        var Vivant = Math.floor(Math.random() * Math.floor(100))+1;
    if(Vivant <= "30"){var Vivant = "<br>Malheuresement, il/elle est morte.";}else{var Vivant = "<br>Heureusement, il/elle est toujours vivant.";}
    
        var EV = "<b>Allier</b> : "+Sexe+Profession+Rencontre+Proche+Vivant;
    }
    if(EV == "8"){	// Chasse
        var Proie = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proie == "1"){var Proie = "un spectre";}
    if(Proie == "2"){var Proie = "une créature maudite";}
    if(Proie == "3"){var Proie = "un hybride";}
    if(Proie == "4"){var Proie = "un insectoïde";}
    if(Proie == "5"){var Proie = "un élémentaire";}
    if(Proie == "6"){var Proie = "une veuve";}
    if(Proie == "7"){var Proie = "un ogre";}
    if(Proie == "8"){var Proie = "un draconide";}
    if(Proie == "9"){var Proie = "un nécrophage";}
    if(Proie == "10"){var Proie = "un vampire";}
        var Lieu = Math.floor(Math.random() * Math.floor(10))+1;
    if(Lieu == "1"){var Lieu = " dans une fôret.";}
    if(Lieu == "2"){var Lieu = " dans un batiment.";}
    if(Lieu == "3"){var Lieu = " dans un batiment abandonné.";}
    if(Lieu == "4"){var Lieu = " sur la côte.";}
    if(Lieu == "5"){var Lieu = " dans la montagne.";}
    if(Lieu == "6"){var Lieu = " dans une ville.";}
    if(Lieu == "7"){var Lieu = " dans un cimetierre.";}
    if(Lieu == "8"){var Lieu = " dans un hameau.";}
    if(Lieu == "9"){var Lieu = " le long de la rivière.";}
    if(Lieu == "10"){var Lieu = " dans un grotte.";}
    
        var Fin = Math.floor(Math.random() * Math.floor(10))+1;
    if(Fin < "3"){var Fin = " Vous avez pris votre argent et vous êtes parti.";}
    if(Fin > "2" && Fin < "5"){var Fin = " L'employeur a refusé de payer.";}
    if(Fin > "4" && Fin < "7"){var Fin = " L'employeur vous a payé en échange.";}
    if(Fin > "6" && Fin < "9"){var Fin = " Ce fut un combat particulièrement difficile.";}
    if(Fin > "8"){var Fin = " Ce fut un combat étonnamment facile.";}
        var PB = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB < "5"){
        var PB2 = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB2 == "1"){var Fin = " Malheuresement, le monstre était faux.";}	
    if(PB2 == "2"){var Fin = " Malheuresement, c'était une malédiction.";}	
    if(PB2 == "3"){var Fin = " Malheuresement, le monstre était déjà mort.";}	
    if(PB2 == "4"){var Fin = " Malheuresement, ce n'était pas ce que vous pensiez.";}
    if(PB2 == "5"){var Fin = " Malheuresement, votre employeur voulait l'attrapé vivant.";}
    if(PB2 == "6"){var Fin = " Malheuresement, l'employeur est à blâmer pour tout cela";}
    if(PB2 == "7"){var Fin = " Malheuresement, le monstre était inoffensif.";}
    if(PB2 == "8"){var Fin = " Malheuresement, c'était un piège.";}
    if(PB2 == "9"){var Fin = " Malheuresement, c'était plus que ce qu'on vous avait dit.";}
    if(PB2 == "10"){var Fin = " Malheuresement, un mage était derrière tout ça.";}
    }
    
        var EV = "<b>Chasse</b> : "+Proie+Lieu+Fin;
        
    }
    else{var EV = "Il ne s'est rien passé de notable."}
        Evénement_Sorceleur_2.innerHTML = Danger_aff+EV;
    }
 
    if(Sorceleur_8.value == "4"){
        var Danger = Math.floor(Math.random() * Math.floor(100))+1;
        // Danger si < 75
    var Danger_aff = "";
    if(Danger <= "75"){
        var EV_Danger = Math.floor(Math.random() * Math.floor(10))+1;
        // 1-3 Events ; 4-6 Wounds ; 7-10 Enemies
        if(EV_Danger < "4"){	// Events
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){
        var dette = Number(Math.floor(Math.random() * Math.floor(10))+1)*10;
        var Danger_aff = "<b>Dette</b> : à cause d'un équipement cassé, d'une partie de Gwent ou autres, vous avez fait croître une dette de "+dette+" couronnes à un établissement ou une maison noble.";
    }
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Monstre échappé</b> : Un troll, un katakan, un loup-garou ou un autre monstre que vous chassiez vous a échappé et se promène librement. Ils peuvent revenir un jour...";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Dépendance</b> : Vous êtes tombé sur des moments difficiles et avez contracté une dépendance.";}
    if(EV_Danger_EV == "4"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
        var Danger_aff = "<b>Détenu</b> : Vous avez passé "+dette+" ans de cette décennie dans une prison en raison de fausses accusations, ou peut-être d'un crime que vous avez commis.";
    }
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Accusé à tort</b> : Soit quelqu'un veut que tu partes, soit tu étais le parfait bouc émissaire.";}
    if(EV_Danger_EV == "6"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "Il vous a fait chanté.";}
    else if(dette > "7"){var dette = "Il vous a attaqué dans le dos.";}
    else{var dette = "Il a dévoilé un de vos secrets.";}
        var Danger_aff = "<b>Trahi</b> : Un ami ou un amant vous a trahi."+dette;
    }
    if(EV_Danger_EV == "7"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "tué par un monstre.";}
    if(dette > "3" && dette < "7"){var dette = "exécuté.";}
    if(dette > "6" && dette < "9" ){var dette = "assassiné.";}
    if(dette > "8"){var dette = "empoisonné.";}
        var Danger_aff = "<b>Ami ou amant tué</b> : Un proche a été "+dette;
    }
    if(EV_Danger_EV == "8"){
        var Danger_aff = "<b>Hors la loi</b> : Vous avez été interdit de territoire à la suite d'actes odieux contre le royaume ou de fausses accusations. Dans ce royaume, vous êtes recherché par la Garde.";
    }
    if(EV_Danger_EV == "9"){
        var Danger_aff = "<b>Manipulé</b> : Vous avez été manipulé pour briser votre neutralité. Vous décidez comment cela s'est produit, mais quiconque connaît votre réputation sait que vous n'êtes pas neutre.";
    }
    if(EV_Danger_EV == "10"){
        var Danger_aff = "<b>Maudit</b> : Vous avez été touché par une malédiction. A voir avec le MJ.";
    }	
        }
        else if(EV_Danger > 6){	// Enemies
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "un";}else{var Sexe = "une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession < "3"){var Profession = " noble";}
    if(Profession > "2" && Profession < "5"){var Profession = " mercenaire";}
    if(Profession > "4" && Profession < "7"){var Profession = " soldat";}
    if(Profession > "6" && Profession < "9"){var Profession = " marchand";}
    if(Profession > "8"){var Profession = " criminel";}
        var Cause = Math.floor(Math.random() * Math.floor(10))+1;
    if(Cause < "3"){var Cause = " qui vous a calomnié";}
    if(Cause > "2" && Cause < "5"){var Cause = " a qui vous avez déjoué ses plans.";}
    if(Cause > "4" && Cause < "7"){var Cause = " qui vous a trahi.";}
    if(Cause > "6" && Cause < "9"){var Cause = " a qui vous avez tué ses parents.";}
    if(Cause > "8"){var Cause = " qui vous a trompé.";}
        var Pouvoir = Math.floor(Math.random() * Math.floor(10))+1;
    if(Pouvoir < "3"){var Pouvoir = " avec un bon statut social";}
    if(Pouvoir > "2" && Pouvoir < "5"){var Pouvoir = " avec beaucoup de connaissances";}
    if(Pouvoir > "4" && Pouvoir < "7"){var Pouvoir = " doué physiquement";}
    if(Pouvoir > "6" && Pouvoir < "9"){var Pouvoir = " avec de nombreux sbires";}
    if(Pouvoir > "8"){var Pouvoir = " doué magiquement";}
        var Escalade = Math.floor(Math.random() * Math.floor(10))+1;
    if(Escalade < "3"){var Escalade = " C'est presque oublié.";}
    if(Escalade > "2" && Escalade < "5"){var Escalade = " Il/elle tentera de vous poignarder à la moindre occasion.";}
    if(Escalade > "4" && Escalade < "7"){var Escalade = " Il/elle est extrement violent.";}
    if(Escalade > "6" && Escalade < "9"){var Escalade = " Il/elle est en quête de revanche.";}
    if(Escalade > "8"){var Escalade = " Il/elle réclame votre sang.";}
    
        var DCD = Math.floor(Math.random() * Math.floor(10))+1;
    if(DCD <= "30"){var DCD = "<br>Fort heureusement, il/elle est morte depuis ce temps.";}else{var DCD = "<br>Malheuresement, il/elle toujours en vie...";}
        var Danger_aff = "<b>Ennemi</b> :"+Sexe+Profession+Pouvoir+Cause+Escalade+DCD;
        }
        else{	// Wounds
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){var Danger_aff = "<b>Genou rigide (-1 SPD)</b> : Une horrible blessure à votre jambe l'a brisée et presque irrémédiable. Même après une intervention chirurgicale et un régime de potions de sorceleur, il n'a jamais été le même.";}
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Oeil endommagé (-1 Vigilance (vision))</b> : Habituellement, les sorceleurs sont assez rapides pour éviter une attaque, mais certains monstres sont trop rapides. Un coup dans l'œil l'a laissé légèrement flou.";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Bras raide (-1 Mêlée)</b> : Un coup fracassant sur votre bras vous a laissé des semaines de récupération et un bras raide. Vous pouvez toujours tenir une épée et vous battre, mais la raideur vous aggrave toujours.";}
    if(EV_Danger_EV == "4"){var Danger_aff = "<b>Doigts endommagés (impossible de faire des signes avec cette main)</b> : Cela peut avoir été le résultat de la torture ou simplement d'une frappe très malchanceuse à cette main au combat, mais ses doigts sont raides et maladroits.";}
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Pointe de flèche intégrée (-1 Physique)</b> : Un tireur d'élite vous a laissé une pointe de flèche dans votre corps, logée dans votre muscle.";}
    if(EV_Danger_EV == "6"){var Danger_aff = "<b>Respiration sifflante (-5 points d'endurance)</b> : Vous avez peut-être été poignardé aux poumons ou inhalé un gaz toxique. De toute façon, vos poumons ont été endommagés; respirer normalement est quelque peu difficile.";}
    if(EV_Danger_EV == "7"){var Danger_aff = "<b>Énorme cicatrice (-2 charme et séduction)</b> : Il n’est pas rare que le corps d’un sorceleur soit un rempli de cicatrices. Cependant, vous avez subi un coup qui a défiguré votre visage.";}
    if(EV_Danger_EV == "8"){var Danger_aff = "<b>Nez endommagé (-2 Sens accrus)</b> : Un certain nombre de coups de poing au visage dans des combats de barres (ou des gaz toxiques) ont endommagé votre nez et vous ont presque volé votre suivi de parfum.";}
    if(EV_Danger_EV == "9"){var Danger_aff = "<b>Dégâts de venin (-5 PV)</b> : Des toxines qui se sont répandues et qui vous ont laissé des veines noircies autour de la blessure et a affaibli votre corps.";}
    if(EV_Danger_EV == "10"){var Danger_aff = "<b>À moitié sourd (-1 Vigilance (audition))</b> : De nombreux monstres utilisent des attaques sonores mortelles. Vous avez eu la chance d'en survivre, mais vos oreilles ne seront plus jamais les mêmes.";}
        }
    }
    
        var EV = Math.floor(Math.random() * Math.floor(10))+1;
        // Bénéfice : 1-5 ; Allier : 6-7 ; Chasse : 8-9 ; Rien : 10
    if(EV < "6"){ // Bénéfice
        var Chance = Math.floor(Math.random() * Math.floor(10))+1;
    if(Chance == "1"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise == "1"){var Surprise = "un bébé.";}
    if(Surprise == "2"){var Surprise = "un chien.";}
    if(Surprise == "3"){var Surprise = "un cheval.";}
    if(Surprise == "4"){var Surprise = "une nouvelle charrue.";}
    if(Surprise == "5"){var Surprise = "un chat.";}
    if(Surprise == "6"){var Surprise = "un baril de bière.";}
    if(Surprise == "7"){var Surprise = "un bijou d'une valeur de 700 couronnes.";}
    if(Surprise == "8"){var Surprise = "une arme valant jusqu'à 500 couronnes.";}
    if(Surprise == "9"){var Surprise = "un bœuf.";}
    if(Surprise == "10"){var Surprise = "une mule.";}
        var EV = "<b>Droit de surprise</b> : Vous avez invoqué le Droit de surprises au cours de cette décennie et vous avez obtenu "+Surprise;
    }
    if(Chance == "2"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "7"){var Surprise = "Cela a duré quelques semaines.";}
    if(Surprise > "8"){var Surprise = "Cela a duré quelques mois.";}
    else{var Surprise = " Ça continue, avec des hauts et des bas.";}
        var EV = "<br>Romance</br> : Vous avez trouvé un amant qui a vu au-delà de vos mutations et désensibilisation. D'une manière ou d'une autre, vous avez réussi à établir un lien significatif avec une personne."+Surprise;
    }
    if(Chance == "3"){
        var Surprise = Number(Math.floor(Math.random() * Math.floor(10))+1)*100;
        var EV = "<br>Aubaine</br> : Vous avez ramassé une quantité étonnamment élevée de pièces au cours de cette décennie. Vous avez réussi non seulement à payer les ingrédients d'alchimie et les réparations de votre équipement, mais également à mettre de l'argent de côté pour réaliser des économies légitimes. Vous gagnez "+Surprise+" couronnes.";
    }
    if(Chance == "4"){var EV = "<br>Faveur d'un noble</br> : Vous avez effectué une tâche pour un noble. C'était peut-être légal, c'était peut-être illégal - de toute façon, le noble que vous avez aidé vous doit beaucoup. Vous pouvez invoquer cette faveur à tout moment mais elle doit être raisonnable.";}
    if(Chance == "5"){var EV = "<br>Les secrets du sorceleur transmis</br> : Au cours de vos voyages, vous avez rencontré et voyagé avec un autre sorceleur. Ce sorceleur vous a enseigné et partagé des connaissances perdues depuis longtemps. Vous obtenez un diagramme de sorceleur: une potion, de l'huile ou une décoction de votre choix.";}
    if(Chance == "6"){var EV = "<br>Valereux</br> : À un moment donné de cette décennie, vous avez combattu courageusement pour défendre un pays. Vous êtes peut-être allé protéger quelqu'un ou vous vous êtes peut-être trouvé au bon endroit au bon moment. Pour cette grande action, vous avez été fait chevalier par un roi / reine. Vous gagnez +1 en réputation dans le pays de votre choix.";}
    if(Chance == "7"){var EV = "<br>Avec les bandits</br> : Vous êtes tombé sur un groupe de bandits ou scoia’tael pendant une chasse. Vous n'êtes peut-être pas d'accord avec leurs méthodes, mais ils ne vous ont pas dérangés et vous ne les avez pas dérangés. Vous avez même partagé des boissons. Vous pouvez leur demander une faveur une fois par mois tant que cela est raisonnable.";}
    if(Chance == "8"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "3" ){var Surprise = "une amélioration elfique.";}
    if(Surprise > "2" && Surprise < 5){var Surprise = "un message elfique.";}
    if(Surprise > "4" && Surprise < 7){var Surprise = "une amélioration naine.";}
    if(Surprise > "6" && Surprise < 9){var Surprise = "une arbalète à main gnome.";}
    if(Surprise > "8"){var Surprise = "un manteau nain.";}	
        var EV = "<br>A exploré une ruine</br> : Vous deviez chasser un monstre à travers une ruine grande et complexe. En chemin, vous avez trouvé quelque chose d'utile :  "+Surprise;
    }
    if(Chance == "9"){var EV = "<br>Faveur d'un mage</br> : Au cours de cette décennie, vous avez rendu service à un mage. Vous avez peut-être rassemblé des pièces de monstre pour leurs expériences, laissez-les vous étudier ou même capturé un monstre vivant pour eux. Quoi qu'il en soit, le mage vous doit maintenant une faveur en retour tant qu'elle est raisonnable.";}
    if(Chance == "10"){var EV = "<br>Trouvé un maître</br> : Vous avez passé plusieurs semaines à apprendre, à pratiquer et à demander conseil à votre mentor. C'était une expérience étrange. Vous pouvez gagner +1 dans n'importe quelle compétence INT ou commencer une nouvelle compétence INT à +2.";}
    }
    if(EV > "5" && EV < "8"){ // Allier
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "Un";}else{var Sexe = "Une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession == "1"){var Profession = " chasseur de prime";}
    if(Profession == "2"){var Profession = " mage";}
    if(Profession == "3"){var Profession = " mentor";}
    if(Profession == "4"){var Profession = " un ami d'enfance";}
    if(Profession == "5"){var Profession = " artisan";}
    if(Profession == "6"){var Profession = " ancien ennemi";}
    if(Profession == "7"){var Profession = " duc";}
    if(Profession == "8"){var Profession = " prêtre";}
    if(Profession == "9"){var Profession = " soldat";}
    if(Profession == "10"){var Profession = " barde";}
    
        var Rencontre = Math.floor(Math.random() * Math.floor(10))+1;
    if(Rencontre == "1"){var Rencontre = " que vous avez sauvé.";}
    if(Rencontre == "2"){var Rencontre = " que vous avez rencontré dans une taverne.";}
    if(Rencontre == "3"){var Rencontre = " qui vous a sauvé.";}
    if(Rencontre == "4"){var Rencontre = " qui vous a engagé.";}
    if(Rencontre == "5"){var Rencontre = " avec qui vous êtiez prisonnés.";}
    if(Rencontre == "6"){var Rencontre = " avec qui vous êtiez obligé de travailler.";}
    if(Rencontre == "7"){var Rencontre = " que vous avez engagé.";}
    if(Rencontre == "8"){var Rencontre = " que vous avez rencontré quand vous êtiez complètement saoul.";}
    if(Rencontre == "9"){var Rencontre = " que vous avez rencontré pendant vos voyages.";}
    if(Rencontre == "10"){var Rencontre = " avec qui vous avez combattu.";}
        var Proche = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proche < "7"){var Proche = " Vous êtes des connaissances.";}
    else if(Proche == "10"){var Proche = " Vous êtes lié par serment.";}
    else{var Proche = " Vous êtes des amis.";}
        var Vivant = Math.floor(Math.random() * Math.floor(100))+1;
    if(Vivant <= "30"){var Vivant = "<br>Malheuresement, il/elle est morte.";}else{var Vivant = "<br>Heureusement, il/elle est toujours vivant.";}
    
        var EV = "<b>Allier</b> : "+Sexe+Profession+Rencontre+Proche+Vivant;
    }
    if(EV > "7" && EV < "10"){	// Chasse
        var Proie = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proie == "1"){var Proie = "un spectre";}
    if(Proie == "2"){var Proie = "une créature maudite";}
    if(Proie == "3"){var Proie = "un hybride";}
    if(Proie == "4"){var Proie = "un insectoïde";}
    if(Proie == "5"){var Proie = "un élémentaire";}
    if(Proie == "6"){var Proie = "une veuve";}
    if(Proie == "7"){var Proie = "un ogre";}
    if(Proie == "8"){var Proie = "un draconide";}
    if(Proie == "9"){var Proie = "un nécrophage";}
    if(Proie == "10"){var Proie = "un vampire";}
        var Lieu = Math.floor(Math.random() * Math.floor(10))+1;
    if(Lieu == "1"){var Lieu = " dans une fôret.";}
    if(Lieu == "2"){var Lieu = " dans un batiment.";}
    if(Lieu == "3"){var Lieu = " dans un batiment abandonné.";}
    if(Lieu == "4"){var Lieu = " sur la côte.";}
    if(Lieu == "5"){var Lieu = " dans la montagne.";}
    if(Lieu == "6"){var Lieu = " dans une ville.";}
    if(Lieu == "7"){var Lieu = " dans un cimetierre.";}
    if(Lieu == "8"){var Lieu = " dans un hameau.";}
    if(Lieu == "9"){var Lieu = " le long de la rivière.";}
    if(Lieu == "10"){var Lieu = " dans un grotte.";}
    
        var Fin = Math.floor(Math.random() * Math.floor(10))+1;
    if(Fin < "3"){var Fin = " Vous avez pris votre argent et vous êtes parti.";}
    if(Fin > "2" && Fin < "5"){var Fin = " L'employeur a refusé de payer.";}
    if(Fin > "4" && Fin < "7"){var Fin = " L'employeur vous a payé en échange.";}
    if(Fin > "6" && Fin < "9"){var Fin = " Ce fut un combat particulièrement difficile.";}
    if(Fin > "8"){var Fin = " Ce fut un combat étonnamment facile.";}
        var PB = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB < "5"){
        var PB2 = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB2 == "1"){var Fin = " Malheuresement, le monstre était faux.";}	
    if(PB2 == "2"){var Fin = " Malheuresement, c'était une malédiction.";}	
    if(PB2 == "3"){var Fin = " Malheuresement, le monstre était déjà mort.";}	
    if(PB2 == "4"){var Fin = " Malheuresement, ce n'était pas ce que vous pensiez.";}
    if(PB2 == "5"){var Fin = " Malheuresement, votre employeur voulait l'attrapé vivant.";}
    if(PB2 == "6"){var Fin = " Malheuresement, l'employeur est à blâmer pour tout cela";}
    if(PB2 == "7"){var Fin = " Malheuresement, le monstre était inoffensif.";}
    if(PB2 == "8"){var Fin = " Malheuresement, c'était un piège.";}
    if(PB2 == "9"){var Fin = " Malheuresement, c'était plus que ce qu'on vous avait dit.";}
    if(PB2 == "10"){var Fin = " Malheuresement, un mage était derrière tout ça.";}
    }
    
        var EV = "<b>Chasse</b> : "+Proie+Lieu+Fin;
        
    }
    else{var EV = "Il ne s'est rien passé de notable."}
        Evénement_Sorceleur_2.innerHTML = Danger_aff+EV;
    }
 
}
if(Evénement_Sorceleur_3.innerHTML == ""){

    if(Sorceleur_9.value == "1"){
        var Danger = Math.floor(Math.random() * Math.floor(100))+1;
        // Danger si < 10
    var Danger_aff = "";
    if(Danger <= "10"){
        var EV_Danger = Math.floor(Math.random() * Math.floor(10))+1;
        // 1-3 Events ; 4-6 Wounds ; 7-10 Enemies
        if(EV_Danger < "4"){	// Events
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){
        var dette = Number(Math.floor(Math.random() * Math.floor(10))+1)*10;
        var Danger_aff = "<b>Dette</b> : à cause d'un équipement cassé, d'une partie de Gwent ou autres, vous avez fait croître une dette de "+dette+" couronnes à un établissement ou une maison noble.";
    }
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Monstre échappé</b> : Un troll, un katakan, un loup-garou ou un autre monstre que vous chassiez vous a échappé et se promène librement. Ils peuvent revenir un jour...";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Dépendance</b> : Vous êtes tombé sur des moments difficiles et avez contracté une dépendance.";}
    if(EV_Danger_EV == "4"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
        var Danger_aff = "<b>Détenu</b> : Vous avez passé "+dette+" ans de cette décennie dans une prison en raison de fausses accusations, ou peut-être d'un crime que vous avez commis.";
    }
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Accusé à tort</b> : Soit quelqu'un veut que tu partes, soit tu étais le parfait bouc émissaire.";}
    if(EV_Danger_EV == "6"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "Il vous a fait chanté.";}
    else if(dette > "7"){var dette = "Il vous a attaqué dans le dos.";}
    else{var dette = "Il a dévoilé un de vos secrets.";}
        var Danger_aff = "<b>Trahi</b> : Un ami ou un amant vous a trahi."+dette;
    }
    if(EV_Danger_EV == "7"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "tué par un monstre.";}
    if(dette > "3" && dette < "7"){var dette = "exécuté.";}
    if(dette > "6" && dette < "9" ){var dette = "assassiné.";}
    if(dette > "8"){var dette = "empoisonné.";}
        var Danger_aff = "<b>Ami ou amant tué</b> : Un proche a été "+dette;
    }
    if(EV_Danger_EV == "8"){
        var Danger_aff = "<b>Hors la loi</b> : Vous avez été interdit de territoire à la suite d'actes odieux contre le royaume ou de fausses accusations. Dans ce royaume, vous êtes recherché par la Garde.";
    }
    if(EV_Danger_EV == "9"){
        var Danger_aff = "<b>Manipulé</b> : Vous avez été manipulé pour briser votre neutralité. Vous décidez comment cela s'est produit, mais quiconque connaît votre réputation sait que vous n'êtes pas neutre.";
    }
    if(EV_Danger_EV == "10"){
        var Danger_aff = "<b>Maudit</b> : Vous avez été touché par une malédiction. A voir avec le MJ.";
    }	
        }
        else if(EV_Danger > 6){	// Enemies
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "un";}else{var Sexe = "une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession < "3"){var Profession = " noble";}
    if(Profession > "2" && Profession < "5"){var Profession = " mercenaire";}
    if(Profession > "4" && Profession < "7"){var Profession = " soldat";}
    if(Profession > "6" && Profession < "9"){var Profession = " marchand";}
    if(Profession > "8"){var Profession = " criminel";}
        var Cause = Math.floor(Math.random() * Math.floor(10))+1;
    if(Cause < "3"){var Cause = " qui vous a calomnié";}
    if(Cause > "2" && Cause < "5"){var Cause = " a qui vous avez déjoué ses plans.";}
    if(Cause > "4" && Cause < "7"){var Cause = " qui vous a trahi.";}
    if(Cause > "6" && Cause < "9"){var Cause = " a qui vous avez tué ses parents.";}
    if(Cause > "8"){var Cause = " qui vous a trompé.";}
        var Pouvoir = Math.floor(Math.random() * Math.floor(10))+1;
    if(Pouvoir < "3"){var Pouvoir = " avec un bon statut social";}
    if(Pouvoir > "2" && Pouvoir < "5"){var Pouvoir = " avec beaucoup de connaissances";}
    if(Pouvoir > "4" && Pouvoir < "7"){var Pouvoir = " doué physiquement";}
    if(Pouvoir > "6" && Pouvoir < "9"){var Pouvoir = " avec de nombreux sbires";}
    if(Pouvoir > "8"){var Pouvoir = " doué magiquement";}
        var Escalade = Math.floor(Math.random() * Math.floor(10))+1;
    if(Escalade < "3"){var Escalade = " C'est presque oublié.";}
    if(Escalade > "2" && Escalade < "5"){var Escalade = " Il/elle tentera de vous poignarder à la moindre occasion.";}
    if(Escalade > "4" && Escalade < "7"){var Escalade = " Il/elle est extrement violent.";}
    if(Escalade > "6" && Escalade < "9"){var Escalade = " Il/elle est en quête de revanche.";}
    if(Escalade > "8"){var Escalade = " Il/elle réclame votre sang.";}
    
        var DCD = Math.floor(Math.random() * Math.floor(10))+1;
    if(DCD <= "30"){var DCD = "<br>Fort heureusement, il/elle est morte depuis ce temps.";}else{var DCD = "<br>Malheuresement, il/elle toujours en vie...";}
        var Danger_aff = "<b>Ennemi</b> :"+Sexe+Profession+Pouvoir+Cause+Escalade+DCD;
        }
        else{	// Wounds
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){var Danger_aff = "<b>Genou rigide (-1 SPD)</b> : Une horrible blessure à votre jambe l'a brisée et presque irrémédiable. Même après une intervention chirurgicale et un régime de potions de sorceleur, il n'a jamais été le même.";}
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Oeil endommagé (-1 Vigilance (vision))</b> : Habituellement, les sorceleurs sont assez rapides pour éviter une attaque, mais certains monstres sont trop rapides. Un coup dans l'œil l'a laissé légèrement flou.";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Bras raide (-1 Mêlée)</b> : Un coup fracassant sur votre bras vous a laissé des semaines de récupération et un bras raide. Vous pouvez toujours tenir une épée et vous battre, mais la raideur vous aggrave toujours.";}
    if(EV_Danger_EV == "4"){var Danger_aff = "<b>Doigts endommagés (impossible de faire des signes avec cette main)</b> : Cela peut avoir été le résultat de la torture ou simplement d'une frappe très malchanceuse à cette main au combat, mais ses doigts sont raides et maladroits.";}
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Pointe de flèche intégrée (-1 Physique)</b> : Un tireur d'élite vous a laissé une pointe de flèche dans votre corps, logée dans votre muscle.";}
    if(EV_Danger_EV == "6"){var Danger_aff = "<b>Respiration sifflante (-5 points d'endurance)</b> : Vous avez peut-être été poignardé aux poumons ou inhalé un gaz toxique. De toute façon, vos poumons ont été endommagés; respirer normalement est quelque peu difficile.";}
    if(EV_Danger_EV == "7"){var Danger_aff = "<b>Énorme cicatrice (-2 charme et séduction)</b> : Il n’est pas rare que le corps d’un sorceleur soit un rempli de cicatrices. Cependant, vous avez subi un coup qui a défiguré votre visage.";}
    if(EV_Danger_EV == "8"){var Danger_aff = "<b>Nez endommagé (-2 Sens accrus)</b> : Un certain nombre de coups de poing au visage dans des combats de barres (ou des gaz toxiques) ont endommagé votre nez et vous ont presque volé votre suivi de parfum.";}
    if(EV_Danger_EV == "9"){var Danger_aff = "<b>Dégâts de venin (-5 PV)</b> : Des toxines qui se sont répandues et qui vous ont laissé des veines noircies autour de la blessure et a affaibli votre corps.";}
    if(EV_Danger_EV == "10"){var Danger_aff = "<b>À moitié sourd (-1 Vigilance (audition))</b> : De nombreux monstres utilisent des attaques sonores mortelles. Vous avez eu la chance d'en survivre, mais vos oreilles ne seront plus jamais les mêmes.";}
        }
    }
    
        var EV = Math.floor(Math.random() * Math.floor(10))+1;
        // Bénéfice : 1 ; Allier : 2 ; Chasse : 3 ; Rien : 4-10
    if(EV == "1"){ // Bénéfice
        var Chance = Math.floor(Math.random() * Math.floor(10))+1;
    if(Chance == "1"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise == "1"){var Surprise = "un bébé.";}
    if(Surprise == "2"){var Surprise = "un chien.";}
    if(Surprise == "3"){var Surprise = "un cheval.";}
    if(Surprise == "4"){var Surprise = "une nouvelle charrue.";}
    if(Surprise == "5"){var Surprise = "un chat.";}
    if(Surprise == "6"){var Surprise = "un baril de bière.";}
    if(Surprise == "7"){var Surprise = "un bijou d'une valeur de 700 couronnes.";}
    if(Surprise == "8"){var Surprise = "une arme valant jusqu'à 500 couronnes.";}
    if(Surprise == "9"){var Surprise = "un bœuf.";}
    if(Surprise == "10"){var Surprise = "une mule.";}
        var EV = "<b>Droit de surprise</b> : Vous avez invoqué le Droit de surprises au cours de cette décennie et vous avez obtenu "+Surprise;
    }
    if(Chance == "2"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "7"){var Surprise = "Cela a duré quelques semaines.";}
    if(Surprise > "8"){var Surprise = "Cela a duré quelques mois.";}
    else{var Surprise = " Ça continue, avec des hauts et des bas.";}
        var EV = "<br>Romance</br> : Vous avez trouvé un amant qui a vu au-delà de vos mutations et désensibilisation. D'une manière ou d'une autre, vous avez réussi à établir un lien significatif avec une personne."+Surprise;
    }
    if(Chance == "3"){
        var Surprise = Number(Math.floor(Math.random() * Math.floor(10))+1)*100;
        var EV = "<br>Aubaine</br> : Vous avez ramassé une quantité étonnamment élevée de pièces au cours de cette décennie. Vous avez réussi non seulement à payer les ingrédients d'alchimie et les réparations de votre équipement, mais également à mettre de l'argent de côté pour réaliser des économies légitimes. Vous gagnez "+Surprise+" couronnes.";
    }
    if(Chance == "4"){var EV = "<br>Faveur d'un noble</br> : Vous avez effectué une tâche pour un noble. C'était peut-être légal, c'était peut-être illégal - de toute façon, le noble que vous avez aidé vous doit beaucoup. Vous pouvez invoquer cette faveur à tout moment mais elle doit être raisonnable.";}
    if(Chance == "5"){var EV = "<br>Les secrets du sorceleur transmis</br> : Au cours de vos voyages, vous avez rencontré et voyagé avec un autre sorceleur. Ce sorceleur vous a enseigné et partagé des connaissances perdues depuis longtemps. Vous obtenez un diagramme de sorceleur: une potion, de l'huile ou une décoction de votre choix.";}
    if(Chance == "6"){var EV = "<br>Valereux</br> : À un moment donné de cette décennie, vous avez combattu courageusement pour défendre un pays. Vous êtes peut-être allé protéger quelqu'un ou vous vous êtes peut-être trouvé au bon endroit au bon moment. Pour cette grande action, vous avez été fait chevalier par un roi / reine. Vous gagnez +1 en réputation dans le pays de votre choix.";}
    if(Chance == "7"){var EV = "<br>Avec les bandits</br> : Vous êtes tombé sur un groupe de bandits ou scoia’tael pendant une chasse. Vous n'êtes peut-être pas d'accord avec leurs méthodes, mais ils ne vous ont pas dérangés et vous ne les avez pas dérangés. Vous avez même partagé des boissons. Vous pouvez leur demander une faveur une fois par mois tant que cela est raisonnable.";}
    if(Chance == "8"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "3" ){var Surprise = "une amélioration elfique.";}
    if(Surprise > "2" && Surprise < 5){var Surprise = "un message elfique.";}
    if(Surprise > "4" && Surprise < 7){var Surprise = "une amélioration naine.";}
    if(Surprise > "6" && Surprise < 9){var Surprise = "une arbalète à main gnome.";}
    if(Surprise > "8"){var Surprise = "un manteau nain.";}	
        var EV = "<br>A exploré une ruine</br> : Vous deviez chasser un monstre à travers une ruine grande et complexe. En chemin, vous avez trouvé quelque chose d'utile :  "+Surprise;
    }
    if(Chance == "9"){var EV = "<br>Faveur d'un mage</br> : Au cours de cette décennie, vous avez rendu service à un mage. Vous avez peut-être rassemblé des pièces de monstre pour leurs expériences, laissez-les vous étudier ou même capturé un monstre vivant pour eux. Quoi qu'il en soit, le mage vous doit maintenant une faveur en retour tant qu'elle est raisonnable.";}
    if(Chance == "10"){var EV = "<br>Trouvé un maître</br> : Vous avez passé plusieurs semaines à apprendre, à pratiquer et à demander conseil à votre mentor. C'était une expérience étrange. Vous pouvez gagner +1 dans n'importe quelle compétence INT ou commencer une nouvelle compétence INT à +2.";}
    }
    if(EV == "2"){ // Allier
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "Un";}else{var Sexe = "Une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession == "1"){var Profession = " chasseur de prime";}
    if(Profession == "2"){var Profession = " mage";}
    if(Profession == "3"){var Profession = " mentor";}
    if(Profession == "4"){var Profession = " un ami d'enfance";}
    if(Profession == "5"){var Profession = " artisan";}
    if(Profession == "6"){var Profession = " ancien ennemi";}
    if(Profession == "7"){var Profession = " duc";}
    if(Profession == "8"){var Profession = " prêtre";}
    if(Profession == "9"){var Profession = " soldat";}
    if(Profession == "10"){var Profession = " barde";}
    
        var Rencontre = Math.floor(Math.random() * Math.floor(10))+1;
    if(Rencontre == "1"){var Rencontre = " que vous avez sauvé.";}
    if(Rencontre == "2"){var Rencontre = " que vous avez rencontré dans une taverne.";}
    if(Rencontre == "3"){var Rencontre = " qui vous a sauvé.";}
    if(Rencontre == "4"){var Rencontre = " qui vous a engagé.";}
    if(Rencontre == "5"){var Rencontre = " avec qui vous êtiez prisonnés.";}
    if(Rencontre == "6"){var Rencontre = " avec qui vous êtiez obligé de travailler.";}
    if(Rencontre == "7"){var Rencontre = " que vous avez engagé.";}
    if(Rencontre == "8"){var Rencontre = " que vous avez rencontré quand vous êtiez complètement saoul.";}
    if(Rencontre == "9"){var Rencontre = " que vous avez rencontré pendant vos voyages.";}
    if(Rencontre == "10"){var Rencontre = " avec qui vous avez combattu.";}
        var Proche = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proche < "7"){var Proche = " Vous êtes des connaissances.";}
    else if(Proche == "10"){var Proche = " Vous êtes lié par serment.";}
    else{var Proche = " Vous êtes des amis.";}
        var Vivant = Math.floor(Math.random() * Math.floor(100))+1;
    if(Vivant <= "30"){var Vivant = "<br>Malheuresement, il/elle est morte.";}else{var Vivant = "<br>Heureusement, il/elle est toujours vivant.";}
    
        var EV = "<b>Allier</b> : "+Sexe+Profession+Rencontre+Proche+Vivant;
    }
    if(EV == "3"){	// Chasse
        var Proie = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proie == "1"){var Proie = "un spectre";}
    if(Proie == "2"){var Proie = "une créature maudite";}
    if(Proie == "3"){var Proie = "un hybride";}
    if(Proie == "4"){var Proie = "un insectoïde";}
    if(Proie == "5"){var Proie = "un élémentaire";}
    if(Proie == "6"){var Proie = "une veuve";}
    if(Proie == "7"){var Proie = "un ogre";}
    if(Proie == "8"){var Proie = "un draconide";}
    if(Proie == "9"){var Proie = "un nécrophage";}
    if(Proie == "10"){var Proie = "un vampire";}
        var Lieu = Math.floor(Math.random() * Math.floor(10))+1;
    if(Lieu == "1"){var Lieu = " dans une fôret.";}
    if(Lieu == "2"){var Lieu = " dans un batiment.";}
    if(Lieu == "3"){var Lieu = " dans un batiment abandonné.";}
    if(Lieu == "4"){var Lieu = " sur la côte.";}
    if(Lieu == "5"){var Lieu = " dans la montagne.";}
    if(Lieu == "6"){var Lieu = " dans une ville.";}
    if(Lieu == "7"){var Lieu = " dans un cimetierre.";}
    if(Lieu == "8"){var Lieu = " dans un hameau.";}
    if(Lieu == "9"){var Lieu = " le long de la rivière.";}
    if(Lieu == "10"){var Lieu = " dans un grotte.";}
    
        var Fin = Math.floor(Math.random() * Math.floor(10))+1;
    if(Fin < "3"){var Fin = " Vous avez pris votre argent et vous êtes parti.";}
    if(Fin > "2" && Fin < "5"){var Fin = " L'employeur a refusé de payer.";}
    if(Fin > "4" && Fin < "7"){var Fin = " L'employeur vous a payé en échange.";}
    if(Fin > "6" && Fin < "9"){var Fin = " Ce fut un combat particulièrement difficile.";}
    if(Fin > "8"){var Fin = " Ce fut un combat étonnamment facile.";}
        var PB = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB < "5"){
        var PB2 = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB2 == "1"){var Fin = " Malheuresement, le monstre était faux.";}	
    if(PB2 == "2"){var Fin = " Malheuresement, c'était une malédiction.";}	
    if(PB2 == "3"){var Fin = " Malheuresement, le monstre était déjà mort.";}	
    if(PB2 == "4"){var Fin = " Malheuresement, ce n'était pas ce que vous pensiez.";}
    if(PB2 == "5"){var Fin = " Malheuresement, votre employeur voulait l'attrapé vivant.";}
    if(PB2 == "6"){var Fin = " Malheuresement, l'employeur est à blâmer pour tout cela";}
    if(PB2 == "7"){var Fin = " Malheuresement, le monstre était inoffensif.";}
    if(PB2 == "8"){var Fin = " Malheuresement, c'était un piège.";}
    if(PB2 == "9"){var Fin = " Malheuresement, c'était plus que ce qu'on vous avait dit.";}
    if(PB2 == "10"){var Fin = " Malheuresement, un mage était derrière tout ça.";}
    }
    
        var EV = "<b>Chasse</b> : "+Proie+Lieu+Fin;
        
    }
    else{var EV = "Il ne s'est rien passé de notable."}
        Evénement_Sorceleur_3.innerHTML = Danger_aff+EV;
    }
     
    if(Sorceleur_9.value == "2"){
        var Danger = Math.floor(Math.random() * Math.floor(100))+1;
        // Danger si < 25
    var Danger_aff = "";
    if(Danger <= "25"){
        var EV_Danger = Math.floor(Math.random() * Math.floor(10))+1;
        // 1-3 Events ; 4-6 Wounds ; 7-10 Enemies
        if(EV_Danger < "4"){	// Events
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){
        var dette = Number(Math.floor(Math.random() * Math.floor(10))+1)*10;
        var Danger_aff = "<b>Dette</b> : à cause d'un équipement cassé, d'une partie de Gwent ou autres, vous avez fait croître une dette de "+dette+" couronnes à un établissement ou une maison noble.";
    }
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Monstre échappé</b> : Un troll, un katakan, un loup-garou ou un autre monstre que vous chassiez vous a échappé et se promène librement. Ils peuvent revenir un jour...";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Dépendance</b> : Vous êtes tombé sur des moments difficiles et avez contracté une dépendance.";}
    if(EV_Danger_EV == "4"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
        var Danger_aff = "<b>Détenu</b> : Vous avez passé "+dette+" ans de cette décennie dans une prison en raison de fausses accusations, ou peut-être d'un crime que vous avez commis.";
    }
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Accusé à tort</b> : Soit quelqu'un veut que tu partes, soit tu étais le parfait bouc émissaire.";}
    if(EV_Danger_EV == "6"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "Il vous a fait chanté.";}
    else if(dette > "7"){var dette = "Il vous a attaqué dans le dos.";}
    else{var dette = "Il a dévoilé un de vos secrets.";}
        var Danger_aff = "<b>Trahi</b> : Un ami ou un amant vous a trahi."+dette;
    }
    if(EV_Danger_EV == "7"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "tué par un monstre.";}
    if(dette > "3" && dette < "7"){var dette = "exécuté.";}
    if(dette > "6" && dette < "9" ){var dette = "assassiné.";}
    if(dette > "8"){var dette = "empoisonné.";}
        var Danger_aff = "<b>Ami ou amant tué</b> : Un proche a été "+dette;
    }
    if(EV_Danger_EV == "8"){
        var Danger_aff = "<b>Hors la loi</b> : Vous avez été interdit de territoire à la suite d'actes odieux contre le royaume ou de fausses accusations. Dans ce royaume, vous êtes recherché par la Garde.";
    }
    if(EV_Danger_EV == "9"){
        var Danger_aff = "<b>Manipulé</b> : Vous avez été manipulé pour briser votre neutralité. Vous décidez comment cela s'est produit, mais quiconque connaît votre réputation sait que vous n'êtes pas neutre.";
    }
    if(EV_Danger_EV == "10"){
        var Danger_aff = "<b>Maudit</b> : Vous avez été touché par une malédiction. A voir avec le MJ.";
    }	
        }
        else if(EV_Danger > 6){	// Enemies
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "un";}else{var Sexe = "une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession < "3"){var Profession = " noble";}
    if(Profession > "2" && Profession < "5"){var Profession = " mercenaire";}
    if(Profession > "4" && Profession < "7"){var Profession = " soldat";}
    if(Profession > "6" && Profession < "9"){var Profession = " marchand";}
    if(Profession > "8"){var Profession = " criminel";}
        var Cause = Math.floor(Math.random() * Math.floor(10))+1;
    if(Cause < "3"){var Cause = " qui vous a calomnié";}
    if(Cause > "2" && Cause < "5"){var Cause = " a qui vous avez déjoué ses plans.";}
    if(Cause > "4" && Cause < "7"){var Cause = " qui vous a trahi.";}
    if(Cause > "6" && Cause < "9"){var Cause = " a qui vous avez tué ses parents.";}
    if(Cause > "8"){var Cause = " qui vous a trompé.";}
        var Pouvoir = Math.floor(Math.random() * Math.floor(10))+1;
    if(Pouvoir < "3"){var Pouvoir = " avec un bon statut social";}
    if(Pouvoir > "2" && Pouvoir < "5"){var Pouvoir = " avec beaucoup de connaissances";}
    if(Pouvoir > "4" && Pouvoir < "7"){var Pouvoir = " doué physiquement";}
    if(Pouvoir > "6" && Pouvoir < "9"){var Pouvoir = " avec de nombreux sbires";}
    if(Pouvoir > "8"){var Pouvoir = " doué magiquement";}
        var Escalade = Math.floor(Math.random() * Math.floor(10))+1;
    if(Escalade < "3"){var Escalade = " C'est presque oublié.";}
    if(Escalade > "2" && Escalade < "5"){var Escalade = " Il/elle tentera de vous poignarder à la moindre occasion.";}
    if(Escalade > "4" && Escalade < "7"){var Escalade = " Il/elle est extrement violent.";}
    if(Escalade > "6" && Escalade < "9"){var Escalade = " Il/elle est en quête de revanche.";}
    if(Escalade > "8"){var Escalade = " Il/elle réclame votre sang.";}
    
        var DCD = Math.floor(Math.random() * Math.floor(10))+1;
    if(DCD <= "30"){var DCD = "<br>Fort heureusement, il/elle est morte depuis ce temps.";}else{var DCD = "<br>Malheuresement, il/elle toujours en vie...";}
        var Danger_aff = "<b>Ennemi</b> :"+Sexe+Profession+Pouvoir+Cause+Escalade+DCD;
        }
        else{	// Wounds
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){var Danger_aff = "<b>Genou rigide (-1 SPD)</b> : Une horrible blessure à votre jambe l'a brisée et presque irrémédiable. Même après une intervention chirurgicale et un régime de potions de sorceleur, il n'a jamais été le même.";}
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Oeil endommagé (-1 Vigilance (vision))</b> : Habituellement, les sorceleurs sont assez rapides pour éviter une attaque, mais certains monstres sont trop rapides. Un coup dans l'œil l'a laissé légèrement flou.";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Bras raide (-1 Mêlée)</b> : Un coup fracassant sur votre bras vous a laissé des semaines de récupération et un bras raide. Vous pouvez toujours tenir une épée et vous battre, mais la raideur vous aggrave toujours.";}
    if(EV_Danger_EV == "4"){var Danger_aff = "<b>Doigts endommagés (impossible de faire des signes avec cette main)</b> : Cela peut avoir été le résultat de la torture ou simplement d'une frappe très malchanceuse à cette main au combat, mais ses doigts sont raides et maladroits.";}
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Pointe de flèche intégrée (-1 Physique)</b> : Un tireur d'élite vous a laissé une pointe de flèche dans votre corps, logée dans votre muscle.";}
    if(EV_Danger_EV == "6"){var Danger_aff = "<b>Respiration sifflante (-5 points d'endurance)</b> : Vous avez peut-être été poignardé aux poumons ou inhalé un gaz toxique. De toute façon, vos poumons ont été endommagés; respirer normalement est quelque peu difficile.";}
    if(EV_Danger_EV == "7"){var Danger_aff = "<b>Énorme cicatrice (-2 charme et séduction)</b> : Il n’est pas rare que le corps d’un sorceleur soit un rempli de cicatrices. Cependant, vous avez subi un coup qui a défiguré votre visage.";}
    if(EV_Danger_EV == "8"){var Danger_aff = "<b>Nez endommagé (-2 Sens accrus)</b> : Un certain nombre de coups de poing au visage dans des combats de barres (ou des gaz toxiques) ont endommagé votre nez et vous ont presque volé votre suivi de parfum.";}
    if(EV_Danger_EV == "9"){var Danger_aff = "<b>Dégâts de venin (-5 PV)</b> : Des toxines qui se sont répandues et qui vous ont laissé des veines noircies autour de la blessure et a affaibli votre corps.";}
    if(EV_Danger_EV == "10"){var Danger_aff = "<b>À moitié sourd (-1 Vigilance (audition))</b> : De nombreux monstres utilisent des attaques sonores mortelles. Vous avez eu la chance d'en survivre, mais vos oreilles ne seront plus jamais les mêmes.";}
        }
    }
    
        var EV = Math.floor(Math.random() * Math.floor(10))+1;
        // Bénéfice : 1 ; Allier : 2 ; Chasse : 3-5 ; Rien : 6-10
    if(EV == "1"){ // Bénéfice
        var Chance = Math.floor(Math.random() * Math.floor(10))+1;
    if(Chance == "1"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise == "1"){var Surprise = "un bébé.";}
    if(Surprise == "2"){var Surprise = "un chien.";}
    if(Surprise == "3"){var Surprise = "un cheval.";}
    if(Surprise == "4"){var Surprise = "une nouvelle charrue.";}
    if(Surprise == "5"){var Surprise = "un chat.";}
    if(Surprise == "6"){var Surprise = "un baril de bière.";}
    if(Surprise == "7"){var Surprise = "un bijou d'une valeur de 700 couronnes.";}
    if(Surprise == "8"){var Surprise = "une arme valant jusqu'à 500 couronnes.";}
    if(Surprise == "9"){var Surprise = "un bœuf.";}
    if(Surprise == "10"){var Surprise = "une mule.";}
        var EV = "<b>Droit de surprise</b> : Vous avez invoqué le Droit de surprises au cours de cette décennie et vous avez obtenu "+Surprise;
    }
    if(Chance == "2"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "7"){var Surprise = "Cela a duré quelques semaines.";}
    if(Surprise > "8"){var Surprise = "Cela a duré quelques mois.";}
    else{var Surprise = " Ça continue, avec des hauts et des bas.";}
        var EV = "<br>Romance</br> : Vous avez trouvé un amant qui a vu au-delà de vos mutations et désensibilisation. D'une manière ou d'une autre, vous avez réussi à établir un lien significatif avec une personne."+Surprise;
    }
    if(Chance == "3"){
        var Surprise = Number(Math.floor(Math.random() * Math.floor(10))+1)*100;
        var EV = "<br>Aubaine</br> : Vous avez ramassé une quantité étonnamment élevée de pièces au cours de cette décennie. Vous avez réussi non seulement à payer les ingrédients d'alchimie et les réparations de votre équipement, mais également à mettre de l'argent de côté pour réaliser des économies légitimes. Vous gagnez "+Surprise+" couronnes.";
    }
    if(Chance == "4"){var EV = "<br>Faveur d'un noble</br> : Vous avez effectué une tâche pour un noble. C'était peut-être légal, c'était peut-être illégal - de toute façon, le noble que vous avez aidé vous doit beaucoup. Vous pouvez invoquer cette faveur à tout moment mais elle doit être raisonnable.";}
    if(Chance == "5"){var EV = "<br>Les secrets du sorceleur transmis</br> : Au cours de vos voyages, vous avez rencontré et voyagé avec un autre sorceleur. Ce sorceleur vous a enseigné et partagé des connaissances perdues depuis longtemps. Vous obtenez un diagramme de sorceleur: une potion, de l'huile ou une décoction de votre choix.";}
    if(Chance == "6"){var EV = "<br>Valereux</br> : À un moment donné de cette décennie, vous avez combattu courageusement pour défendre un pays. Vous êtes peut-être allé protéger quelqu'un ou vous vous êtes peut-être trouvé au bon endroit au bon moment. Pour cette grande action, vous avez été fait chevalier par un roi / reine. Vous gagnez +1 en réputation dans le pays de votre choix.";}
    if(Chance == "7"){var EV = "<br>Avec les bandits</br> : Vous êtes tombé sur un groupe de bandits ou scoia’tael pendant une chasse. Vous n'êtes peut-être pas d'accord avec leurs méthodes, mais ils ne vous ont pas dérangés et vous ne les avez pas dérangés. Vous avez même partagé des boissons. Vous pouvez leur demander une faveur une fois par mois tant que cela est raisonnable.";}
    if(Chance == "8"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "3" ){var Surprise = "une amélioration elfique.";}
    if(Surprise > "2" && Surprise < 5){var Surprise = "un message elfique.";}
    if(Surprise > "4" && Surprise < 7){var Surprise = "une amélioration naine.";}
    if(Surprise > "6" && Surprise < 9){var Surprise = "une arbalète à main gnome.";}
    if(Surprise > "8"){var Surprise = "un manteau nain.";}	
        var EV = "<br>A exploré une ruine</br> : Vous deviez chasser un monstre à travers une ruine grande et complexe. En chemin, vous avez trouvé quelque chose d'utile :  "+Surprise;
    }
    if(Chance == "9"){var EV = "<br>Faveur d'un mage</br> : Au cours de cette décennie, vous avez rendu service à un mage. Vous avez peut-être rassemblé des pièces de monstre pour leurs expériences, laissez-les vous étudier ou même capturé un monstre vivant pour eux. Quoi qu'il en soit, le mage vous doit maintenant une faveur en retour tant qu'elle est raisonnable.";}
    if(Chance == "10"){var EV = "<br>Trouvé un maître</br> : Vous avez passé plusieurs semaines à apprendre, à pratiquer et à demander conseil à votre mentor. C'était une expérience étrange. Vous pouvez gagner +1 dans n'importe quelle compétence INT ou commencer une nouvelle compétence INT à +2.";}
    }
    if(EV == "2"){ // Allier
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "Un";}else{var Sexe = "Une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession == "1"){var Profession = " chasseur de prime";}
    if(Profession == "2"){var Profession = " mage";}
    if(Profession == "3"){var Profession = " mentor";}
    if(Profession == "4"){var Profession = " un ami d'enfance";}
    if(Profession == "5"){var Profession = " artisan";}
    if(Profession == "6"){var Profession = " ancien ennemi";}
    if(Profession == "7"){var Profession = " duc";}
    if(Profession == "8"){var Profession = " prêtre";}
    if(Profession == "9"){var Profession = " soldat";}
    if(Profession == "10"){var Profession = " barde";}
    
        var Rencontre = Math.floor(Math.random() * Math.floor(10))+1;
    if(Rencontre == "1"){var Rencontre = " que vous avez sauvé.";}
    if(Rencontre == "2"){var Rencontre = " que vous avez rencontré dans une taverne.";}
    if(Rencontre == "3"){var Rencontre = " qui vous a sauvé.";}
    if(Rencontre == "4"){var Rencontre = " qui vous a engagé.";}
    if(Rencontre == "5"){var Rencontre = " avec qui vous êtiez prisonnés.";}
    if(Rencontre == "6"){var Rencontre = " avec qui vous êtiez obligé de travailler.";}
    if(Rencontre == "7"){var Rencontre = " que vous avez engagé.";}
    if(Rencontre == "8"){var Rencontre = " que vous avez rencontré quand vous êtiez complètement saoul.";}
    if(Rencontre == "9"){var Rencontre = " que vous avez rencontré pendant vos voyages.";}
    if(Rencontre == "10"){var Rencontre = " avec qui vous avez combattu.";}
        var Proche = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proche < "7"){var Proche = " Vous êtes des connaissances.";}
    else if(Proche == "10"){var Proche = " Vous êtes lié par serment.";}
    else{var Proche = " Vous êtes des amis.";}
        var Vivant = Math.floor(Math.random() * Math.floor(100))+1;
    if(Vivant <= "30"){var Vivant = "<br>Malheuresement, il/elle est morte.";}else{var Vivant = "<br>Heureusement, il/elle est toujours vivant.";}
    
        var EV = "<b>Allier</b> : "+Sexe+Profession+Rencontre+Proche+Vivant;
    }
    if(EV > "2" && EV < "6"){	// Chasse
        var Proie = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proie == "1"){var Proie = "un spectre";}
    if(Proie == "2"){var Proie = "une créature maudite";}
    if(Proie == "3"){var Proie = "un hybride";}
    if(Proie == "4"){var Proie = "un insectoïde";}
    if(Proie == "5"){var Proie = "un élémentaire";}
    if(Proie == "6"){var Proie = "une veuve";}
    if(Proie == "7"){var Proie = "un ogre";}
    if(Proie == "8"){var Proie = "un draconide";}
    if(Proie == "9"){var Proie = "un nécrophage";}
    if(Proie == "10"){var Proie = "un vampire";}
        var Lieu = Math.floor(Math.random() * Math.floor(10))+1;
    if(Lieu == "1"){var Lieu = " dans une fôret.";}
    if(Lieu == "2"){var Lieu = " dans un batiment.";}
    if(Lieu == "3"){var Lieu = " dans un batiment abandonné.";}
    if(Lieu == "4"){var Lieu = " sur la côte.";}
    if(Lieu == "5"){var Lieu = " dans la montagne.";}
    if(Lieu == "6"){var Lieu = " dans une ville.";}
    if(Lieu == "7"){var Lieu = " dans un cimetierre.";}
    if(Lieu == "8"){var Lieu = " dans un hameau.";}
    if(Lieu == "9"){var Lieu = " le long de la rivière.";}
    if(Lieu == "10"){var Lieu = " dans un grotte.";}
    
        var Fin = Math.floor(Math.random() * Math.floor(10))+1;
    if(Fin < "3"){var Fin = " Vous avez pris votre argent et vous êtes parti.";}
    if(Fin > "2" && Fin < "5"){var Fin = " L'employeur a refusé de payer.";}
    if(Fin > "4" && Fin < "7"){var Fin = " L'employeur vous a payé en échange.";}
    if(Fin > "6" && Fin < "9"){var Fin = " Ce fut un combat particulièrement difficile.";}
    if(Fin > "8"){var Fin = " Ce fut un combat étonnamment facile.";}
        var PB = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB < "5"){
        var PB2 = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB2 == "1"){var Fin = " Malheuresement, le monstre était faux.";}	
    if(PB2 == "2"){var Fin = " Malheuresement, c'était une malédiction.";}	
    if(PB2 == "3"){var Fin = " Malheuresement, le monstre était déjà mort.";}	
    if(PB2 == "4"){var Fin = " Malheuresement, ce n'était pas ce que vous pensiez.";}
    if(PB2 == "5"){var Fin = " Malheuresement, votre employeur voulait l'attrapé vivant.";}
    if(PB2 == "6"){var Fin = " Malheuresement, l'employeur est à blâmer pour tout cela";}
    if(PB2 == "7"){var Fin = " Malheuresement, le monstre était inoffensif.";}
    if(PB2 == "8"){var Fin = " Malheuresement, c'était un piège.";}
    if(PB2 == "9"){var Fin = " Malheuresement, c'était plus que ce qu'on vous avait dit.";}
    if(PB2 == "10"){var Fin = " Malheuresement, un mage était derrière tout ça.";}
    }
    
        var EV = "<b>Chasse</b> : "+Proie+Lieu+Fin;
        
    }
    else{var EV = "Il ne s'est rien passé de notable."}
        Evénement_Sorceleur_3.innerHTML = Danger_aff+EV;
    }
    
    if(Sorceleur_9.value == "3"){
        var Danger = Math.floor(Math.random() * Math.floor(100))+1;
        // Danger si < 50
    var Danger_aff = "";
    if(Danger <= "50"){
        var EV_Danger = Math.floor(Math.random() * Math.floor(10))+1;
        // 1-3 Events ; 4-6 Wounds ; 7-10 Enemies
        if(EV_Danger < "4"){	// Events
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){
        var dette = Number(Math.floor(Math.random() * Math.floor(10))+1)*10;
        var Danger_aff = "<b>Dette</b> : à cause d'un équipement cassé, d'une partie de Gwent ou autres, vous avez fait croître une dette de "+dette+" couronnes à un établissement ou une maison noble.";
    }
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Monstre échappé</b> : Un troll, un katakan, un loup-garou ou un autre monstre que vous chassiez vous a échappé et se promène librement. Ils peuvent revenir un jour...";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Dépendance</b> : Vous êtes tombé sur des moments difficiles et avez contracté une dépendance.";}
    if(EV_Danger_EV == "4"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
        var Danger_aff = "<b>Détenu</b> : Vous avez passé "+dette+" ans de cette décennie dans une prison en raison de fausses accusations, ou peut-être d'un crime que vous avez commis.";
    }
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Accusé à tort</b> : Soit quelqu'un veut que tu partes, soit tu étais le parfait bouc émissaire.";}
    if(EV_Danger_EV == "6"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "Il vous a fait chanté.";}
    else if(dette > "7"){var dette = "Il vous a attaqué dans le dos.";}
    else{var dette = "Il a dévoilé un de vos secrets.";}
        var Danger_aff = "<b>Trahi</b> : Un ami ou un amant vous a trahi."+dette;
    }
    if(EV_Danger_EV == "7"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "tué par un monstre.";}
    if(dette > "3" && dette < "7"){var dette = "exécuté.";}
    if(dette > "6" && dette < "9" ){var dette = "assassiné.";}
    if(dette > "8"){var dette = "empoisonné.";}
        var Danger_aff = "<b>Ami ou amant tué</b> : Un proche a été "+dette;
    }
    if(EV_Danger_EV == "8"){
        var Danger_aff = "<b>Hors la loi</b> : Vous avez été interdit de territoire à la suite d'actes odieux contre le royaume ou de fausses accusations. Dans ce royaume, vous êtes recherché par la Garde.";
    }
    if(EV_Danger_EV == "9"){
        var Danger_aff = "<b>Manipulé</b> : Vous avez été manipulé pour briser votre neutralité. Vous décidez comment cela s'est produit, mais quiconque connaît votre réputation sait que vous n'êtes pas neutre.";
    }
    if(EV_Danger_EV == "10"){
        var Danger_aff = "<b>Maudit</b> : Vous avez été touché par une malédiction. A voir avec le MJ.";
    }	
        }
        else if(EV_Danger > 6){	// Enemies
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "un";}else{var Sexe = "une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession < "3"){var Profession = " noble";}
    if(Profession > "2" && Profession < "5"){var Profession = " mercenaire";}
    if(Profession > "4" && Profession < "7"){var Profession = " soldat";}
    if(Profession > "6" && Profession < "9"){var Profession = " marchand";}
    if(Profession > "8"){var Profession = " criminel";}
        var Cause = Math.floor(Math.random() * Math.floor(10))+1;
    if(Cause < "3"){var Cause = " qui vous a calomnié";}
    if(Cause > "2" && Cause < "5"){var Cause = " a qui vous avez déjoué ses plans.";}
    if(Cause > "4" && Cause < "7"){var Cause = " qui vous a trahi.";}
    if(Cause > "6" && Cause < "9"){var Cause = " a qui vous avez tué ses parents.";}
    if(Cause > "8"){var Cause = " qui vous a trompé.";}
        var Pouvoir = Math.floor(Math.random() * Math.floor(10))+1;
    if(Pouvoir < "3"){var Pouvoir = " avec un bon statut social";}
    if(Pouvoir > "2" && Pouvoir < "5"){var Pouvoir = " avec beaucoup de connaissances";}
    if(Pouvoir > "4" && Pouvoir < "7"){var Pouvoir = " doué physiquement";}
    if(Pouvoir > "6" && Pouvoir < "9"){var Pouvoir = " avec de nombreux sbires";}
    if(Pouvoir > "8"){var Pouvoir = " doué magiquement";}
        var Escalade = Math.floor(Math.random() * Math.floor(10))+1;
    if(Escalade < "3"){var Escalade = " C'est presque oublié.";}
    if(Escalade > "2" && Escalade < "5"){var Escalade = " Il/elle tentera de vous poignarder à la moindre occasion.";}
    if(Escalade > "4" && Escalade < "7"){var Escalade = " Il/elle est extrement violent.";}
    if(Escalade > "6" && Escalade < "9"){var Escalade = " Il/elle est en quête de revanche.";}
    if(Escalade > "8"){var Escalade = " Il/elle réclame votre sang.";}
    
        var DCD = Math.floor(Math.random() * Math.floor(10))+1;
    if(DCD <= "30"){var DCD = "<br>Fort heureusement, il/elle est morte depuis ce temps.";}else{var DCD = "<br>Malheuresement, il/elle toujours en vie...";}
        var Danger_aff = "<b>Ennemi</b> :"+Sexe+Profession+Pouvoir+Cause+Escalade+DCD;
        }
        else{	// Wounds
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){var Danger_aff = "<b>Genou rigide (-1 SPD)</b> : Une horrible blessure à votre jambe l'a brisée et presque irrémédiable. Même après une intervention chirurgicale et un régime de potions de sorceleur, il n'a jamais été le même.";}
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Oeil endommagé (-1 Vigilance (vision))</b> : Habituellement, les sorceleurs sont assez rapides pour éviter une attaque, mais certains monstres sont trop rapides. Un coup dans l'œil l'a laissé légèrement flou.";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Bras raide (-1 Mêlée)</b> : Un coup fracassant sur votre bras vous a laissé des semaines de récupération et un bras raide. Vous pouvez toujours tenir une épée et vous battre, mais la raideur vous aggrave toujours.";}
    if(EV_Danger_EV == "4"){var Danger_aff = "<b>Doigts endommagés (impossible de faire des signes avec cette main)</b> : Cela peut avoir été le résultat de la torture ou simplement d'une frappe très malchanceuse à cette main au combat, mais ses doigts sont raides et maladroits.";}
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Pointe de flèche intégrée (-1 Physique)</b> : Un tireur d'élite vous a laissé une pointe de flèche dans votre corps, logée dans votre muscle.";}
    if(EV_Danger_EV == "6"){var Danger_aff = "<b>Respiration sifflante (-5 points d'endurance)</b> : Vous avez peut-être été poignardé aux poumons ou inhalé un gaz toxique. De toute façon, vos poumons ont été endommagés; respirer normalement est quelque peu difficile.";}
    if(EV_Danger_EV == "7"){var Danger_aff = "<b>Énorme cicatrice (-2 charme et séduction)</b> : Il n’est pas rare que le corps d’un sorceleur soit un rempli de cicatrices. Cependant, vous avez subi un coup qui a défiguré votre visage.";}
    if(EV_Danger_EV == "8"){var Danger_aff = "<b>Nez endommagé (-2 Sens accrus)</b> : Un certain nombre de coups de poing au visage dans des combats de barres (ou des gaz toxiques) ont endommagé votre nez et vous ont presque volé votre suivi de parfum.";}
    if(EV_Danger_EV == "9"){var Danger_aff = "<b>Dégâts de venin (-5 PV)</b> : Des toxines qui se sont répandues et qui vous ont laissé des veines noircies autour de la blessure et a affaibli votre corps.";}
    if(EV_Danger_EV == "10"){var Danger_aff = "<b>À moitié sourd (-1 Vigilance (audition))</b> : De nombreux monstres utilisent des attaques sonores mortelles. Vous avez eu la chance d'en survivre, mais vos oreilles ne seront plus jamais les mêmes.";}
        }
    }
    
        var EV = Math.floor(Math.random() * Math.floor(10))+1;
        // Bénéfice : 1-2 ; Allier : 3-7 ; Chasse : 8 ; Rien : 9-10
    if(EV < "3"){ // Bénéfice
        var Chance = Math.floor(Math.random() * Math.floor(10))+1;
    if(Chance == "1"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise == "1"){var Surprise = "un bébé.";}
    if(Surprise == "2"){var Surprise = "un chien.";}
    if(Surprise == "3"){var Surprise = "un cheval.";}
    if(Surprise == "4"){var Surprise = "une nouvelle charrue.";}
    if(Surprise == "5"){var Surprise = "un chat.";}
    if(Surprise == "6"){var Surprise = "un baril de bière.";}
    if(Surprise == "7"){var Surprise = "un bijou d'une valeur de 700 couronnes.";}
    if(Surprise == "8"){var Surprise = "une arme valant jusqu'à 500 couronnes.";}
    if(Surprise == "9"){var Surprise = "un bœuf.";}
    if(Surprise == "10"){var Surprise = "une mule.";}
        var EV = "<b>Droit de surprise</b> : Vous avez invoqué le Droit de surprises au cours de cette décennie et vous avez obtenu "+Surprise;
    }
    if(Chance == "2"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "7"){var Surprise = "Cela a duré quelques semaines.";}
    if(Surprise > "8"){var Surprise = "Cela a duré quelques mois.";}
    else{var Surprise = " Ça continue, avec des hauts et des bas.";}
        var EV = "<br>Romance</br> : Vous avez trouvé un amant qui a vu au-delà de vos mutations et désensibilisation. D'une manière ou d'une autre, vous avez réussi à établir un lien significatif avec une personne."+Surprise;
    }
    if(Chance == "3"){
        var Surprise = Number(Math.floor(Math.random() * Math.floor(10))+1)*100;
        var EV = "<br>Aubaine</br> : Vous avez ramassé une quantité étonnamment élevée de pièces au cours de cette décennie. Vous avez réussi non seulement à payer les ingrédients d'alchimie et les réparations de votre équipement, mais également à mettre de l'argent de côté pour réaliser des économies légitimes. Vous gagnez "+Surprise+" couronnes.";
    }
    if(Chance == "4"){var EV = "<br>Faveur d'un noble</br> : Vous avez effectué une tâche pour un noble. C'était peut-être légal, c'était peut-être illégal - de toute façon, le noble que vous avez aidé vous doit beaucoup. Vous pouvez invoquer cette faveur à tout moment mais elle doit être raisonnable.";}
    if(Chance == "5"){var EV = "<br>Les secrets du sorceleur transmis</br> : Au cours de vos voyages, vous avez rencontré et voyagé avec un autre sorceleur. Ce sorceleur vous a enseigné et partagé des connaissances perdues depuis longtemps. Vous obtenez un diagramme de sorceleur: une potion, de l'huile ou une décoction de votre choix.";}
    if(Chance == "6"){var EV = "<br>Valereux</br> : À un moment donné de cette décennie, vous avez combattu courageusement pour défendre un pays. Vous êtes peut-être allé protéger quelqu'un ou vous vous êtes peut-être trouvé au bon endroit au bon moment. Pour cette grande action, vous avez été fait chevalier par un roi / reine. Vous gagnez +1 en réputation dans le pays de votre choix.";}
    if(Chance == "7"){var EV = "<br>Avec les bandits</br> : Vous êtes tombé sur un groupe de bandits ou scoia’tael pendant une chasse. Vous n'êtes peut-être pas d'accord avec leurs méthodes, mais ils ne vous ont pas dérangés et vous ne les avez pas dérangés. Vous avez même partagé des boissons. Vous pouvez leur demander une faveur une fois par mois tant que cela est raisonnable.";}
    if(Chance == "8"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "3" ){var Surprise = "une amélioration elfique.";}
    if(Surprise > "2" && Surprise < 5){var Surprise = "un message elfique.";}
    if(Surprise > "4" && Surprise < 7){var Surprise = "une amélioration naine.";}
    if(Surprise > "6" && Surprise < 9){var Surprise = "une arbalète à main gnome.";}
    if(Surprise > "8"){var Surprise = "un manteau nain.";}	
        var EV = "<br>A exploré une ruine</br> : Vous deviez chasser un monstre à travers une ruine grande et complexe. En chemin, vous avez trouvé quelque chose d'utile :  "+Surprise;
    }
    if(Chance == "9"){var EV = "<br>Faveur d'un mage</br> : Au cours de cette décennie, vous avez rendu service à un mage. Vous avez peut-être rassemblé des pièces de monstre pour leurs expériences, laissez-les vous étudier ou même capturé un monstre vivant pour eux. Quoi qu'il en soit, le mage vous doit maintenant une faveur en retour tant qu'elle est raisonnable.";}
    if(Chance == "10"){var EV = "<br>Trouvé un maître</br> : Vous avez passé plusieurs semaines à apprendre, à pratiquer et à demander conseil à votre mentor. C'était une expérience étrange. Vous pouvez gagner +1 dans n'importe quelle compétence INT ou commencer une nouvelle compétence INT à +2.";}
    }
    if(EV > "2" && EV < "8"){ // Allier
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "Un";}else{var Sexe = "Une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession == "1"){var Profession = " chasseur de prime";}
    if(Profession == "2"){var Profession = " mage";}
    if(Profession == "3"){var Profession = " mentor";}
    if(Profession == "4"){var Profession = " un ami d'enfance";}
    if(Profession == "5"){var Profession = " artisan";}
    if(Profession == "6"){var Profession = " ancien ennemi";}
    if(Profession == "7"){var Profession = " duc";}
    if(Profession == "8"){var Profession = " prêtre";}
    if(Profession == "9"){var Profession = " soldat";}
    if(Profession == "10"){var Profession = " barde";}
    
        var Rencontre = Math.floor(Math.random() * Math.floor(10))+1;
    if(Rencontre == "1"){var Rencontre = " que vous avez sauvé.";}
    if(Rencontre == "2"){var Rencontre = " que vous avez rencontré dans une taverne.";}
    if(Rencontre == "3"){var Rencontre = " qui vous a sauvé.";}
    if(Rencontre == "4"){var Rencontre = " qui vous a engagé.";}
    if(Rencontre == "5"){var Rencontre = " avec qui vous êtiez prisonnés.";}
    if(Rencontre == "6"){var Rencontre = " avec qui vous êtiez obligé de travailler.";}
    if(Rencontre == "7"){var Rencontre = " que vous avez engagé.";}
    if(Rencontre == "8"){var Rencontre = " que vous avez rencontré quand vous êtiez complètement saoul.";}
    if(Rencontre == "9"){var Rencontre = " que vous avez rencontré pendant vos voyages.";}
    if(Rencontre == "10"){var Rencontre = " avec qui vous avez combattu.";}
        var Proche = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proche < "7"){var Proche = " Vous êtes des connaissances.";}
    else if(Proche == "10"){var Proche = " Vous êtes lié par serment.";}
    else{var Proche = " Vous êtes des amis.";}
        var Vivant = Math.floor(Math.random() * Math.floor(100))+1;
    if(Vivant <= "30"){var Vivant = "<br>Malheuresement, il/elle est morte.";}else{var Vivant = "<br>Heureusement, il/elle est toujours vivant.";}
    
        var EV = "<b>Allier</b> : "+Sexe+Profession+Rencontre+Proche+Vivant;
    }
    if(EV == "8"){	// Chasse
        var Proie = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proie == "1"){var Proie = "un spectre";}
    if(Proie == "2"){var Proie = "une créature maudite";}
    if(Proie == "3"){var Proie = "un hybride";}
    if(Proie == "4"){var Proie = "un insectoïde";}
    if(Proie == "5"){var Proie = "un élémentaire";}
    if(Proie == "6"){var Proie = "une veuve";}
    if(Proie == "7"){var Proie = "un ogre";}
    if(Proie == "8"){var Proie = "un draconide";}
    if(Proie == "9"){var Proie = "un nécrophage";}
    if(Proie == "10"){var Proie = "un vampire";}
        var Lieu = Math.floor(Math.random() * Math.floor(10))+1;
    if(Lieu == "1"){var Lieu = " dans une fôret.";}
    if(Lieu == "2"){var Lieu = " dans un batiment.";}
    if(Lieu == "3"){var Lieu = " dans un batiment abandonné.";}
    if(Lieu == "4"){var Lieu = " sur la côte.";}
    if(Lieu == "5"){var Lieu = " dans la montagne.";}
    if(Lieu == "6"){var Lieu = " dans une ville.";}
    if(Lieu == "7"){var Lieu = " dans un cimetierre.";}
    if(Lieu == "8"){var Lieu = " dans un hameau.";}
    if(Lieu == "9"){var Lieu = " le long de la rivière.";}
    if(Lieu == "10"){var Lieu = " dans un grotte.";}
    
        var Fin = Math.floor(Math.random() * Math.floor(10))+1;
    if(Fin < "3"){var Fin = " Vous avez pris votre argent et vous êtes parti.";}
    if(Fin > "2" && Fin < "5"){var Fin = " L'employeur a refusé de payer.";}
    if(Fin > "4" && Fin < "7"){var Fin = " L'employeur vous a payé en échange.";}
    if(Fin > "6" && Fin < "9"){var Fin = " Ce fut un combat particulièrement difficile.";}
    if(Fin > "8"){var Fin = " Ce fut un combat étonnamment facile.";}
        var PB = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB < "5"){
        var PB2 = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB2 == "1"){var Fin = " Malheuresement, le monstre était faux.";}	
    if(PB2 == "2"){var Fin = " Malheuresement, c'était une malédiction.";}	
    if(PB2 == "3"){var Fin = " Malheuresement, le monstre était déjà mort.";}	
    if(PB2 == "4"){var Fin = " Malheuresement, ce n'était pas ce que vous pensiez.";}
    if(PB2 == "5"){var Fin = " Malheuresement, votre employeur voulait l'attrapé vivant.";}
    if(PB2 == "6"){var Fin = " Malheuresement, l'employeur est à blâmer pour tout cela";}
    if(PB2 == "7"){var Fin = " Malheuresement, le monstre était inoffensif.";}
    if(PB2 == "8"){var Fin = " Malheuresement, c'était un piège.";}
    if(PB2 == "9"){var Fin = " Malheuresement, c'était plus que ce qu'on vous avait dit.";}
    if(PB2 == "10"){var Fin = " Malheuresement, un mage était derrière tout ça.";}
    }
    
        var EV = "<b>Chasse</b> : "+Proie+Lieu+Fin;
        
    }
    else{var EV = "Il ne s'est rien passé de notable."}
        Evénement_Sorceleur_3.innerHTML = Danger_aff+EV;
    }
    
    if(Sorceleur_9.value == "4"){
        var Danger = Math.floor(Math.random() * Math.floor(100))+1;
        // Danger si < 75
    var Danger_aff = "";
    if(Danger <= "75"){
        var EV_Danger = Math.floor(Math.random() * Math.floor(10))+1;
        // 1-3 Events ; 4-6 Wounds ; 7-10 Enemies
        if(EV_Danger < "4"){	// Events
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){
        var dette = Number(Math.floor(Math.random() * Math.floor(10))+1)*10;
        var Danger_aff = "<b>Dette</b> : à cause d'un équipement cassé, d'une partie de Gwent ou autres, vous avez fait croître une dette de "+dette+" couronnes à un établissement ou une maison noble.";
    }
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Monstre échappé</b> : Un troll, un katakan, un loup-garou ou un autre monstre que vous chassiez vous a échappé et se promène librement. Ils peuvent revenir un jour...";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Dépendance</b> : Vous êtes tombé sur des moments difficiles et avez contracté une dépendance.";}
    if(EV_Danger_EV == "4"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
        var Danger_aff = "<b>Détenu</b> : Vous avez passé "+dette+" ans de cette décennie dans une prison en raison de fausses accusations, ou peut-être d'un crime que vous avez commis.";
    }
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Accusé à tort</b> : Soit quelqu'un veut que tu partes, soit tu étais le parfait bouc émissaire.";}
    if(EV_Danger_EV == "6"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "Il vous a fait chanté.";}
    else if(dette > "7"){var dette = "Il vous a attaqué dans le dos.";}
    else{var dette = "Il a dévoilé un de vos secrets.";}
        var Danger_aff = "<b>Trahi</b> : Un ami ou un amant vous a trahi."+dette;
    }
    if(EV_Danger_EV == "7"){
        var dette = Math.floor(Math.random() * Math.floor(10))+1;
    if(dette < "4"){var dette = "tué par un monstre.";}
    if(dette > "3" && dette < "7"){var dette = "exécuté.";}
    if(dette > "6" && dette < "9" ){var dette = "assassiné.";}
    if(dette > "8"){var dette = "empoisonné.";}
        var Danger_aff = "<b>Ami ou amant tué</b> : Un proche a été "+dette;
    }
    if(EV_Danger_EV == "8"){
        var Danger_aff = "<b>Hors la loi</b> : Vous avez été interdit de territoire à la suite d'actes odieux contre le royaume ou de fausses accusations. Dans ce royaume, vous êtes recherché par la Garde.";
    }
    if(EV_Danger_EV == "9"){
        var Danger_aff = "<b>Manipulé</b> : Vous avez été manipulé pour briser votre neutralité. Vous décidez comment cela s'est produit, mais quiconque connaît votre réputation sait que vous n'êtes pas neutre.";
    }
    if(EV_Danger_EV == "10"){
        var Danger_aff = "<b>Maudit</b> : Vous avez été touché par une malédiction. A voir avec le MJ.";
    }	
        }
        else if(EV_Danger > 6){	// Enemies
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "un";}else{var Sexe = "une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession < "3"){var Profession = " noble";}
    if(Profession > "2" && Profession < "5"){var Profession = " mercenaire";}
    if(Profession > "4" && Profession < "7"){var Profession = " soldat";}
    if(Profession > "6" && Profession < "9"){var Profession = " marchand";}
    if(Profession > "8"){var Profession = " criminel";}
        var Cause = Math.floor(Math.random() * Math.floor(10))+1;
    if(Cause < "3"){var Cause = " qui vous a calomnié";}
    if(Cause > "2" && Cause < "5"){var Cause = " a qui vous avez déjoué ses plans.";}
    if(Cause > "4" && Cause < "7"){var Cause = " qui vous a trahi.";}
    if(Cause > "6" && Cause < "9"){var Cause = " a qui vous avez tué ses parents.";}
    if(Cause > "8"){var Cause = " qui vous a trompé.";}
        var Pouvoir = Math.floor(Math.random() * Math.floor(10))+1;
    if(Pouvoir < "3"){var Pouvoir = " avec un bon statut social";}
    if(Pouvoir > "2" && Pouvoir < "5"){var Pouvoir = " avec beaucoup de connaissances";}
    if(Pouvoir > "4" && Pouvoir < "7"){var Pouvoir = " doué physiquement";}
    if(Pouvoir > "6" && Pouvoir < "9"){var Pouvoir = " avec de nombreux sbires";}
    if(Pouvoir > "8"){var Pouvoir = " doué magiquement";}
        var Escalade = Math.floor(Math.random() * Math.floor(10))+1;
    if(Escalade < "3"){var Escalade = " C'est presque oublié.";}
    if(Escalade > "2" && Escalade < "5"){var Escalade = " Il/elle tentera de vous poignarder à la moindre occasion.";}
    if(Escalade > "4" && Escalade < "7"){var Escalade = " Il/elle est extrement violent.";}
    if(Escalade > "6" && Escalade < "9"){var Escalade = " Il/elle est en quête de revanche.";}
    if(Escalade > "8"){var Escalade = " Il/elle réclame votre sang.";}
    
        var DCD = Math.floor(Math.random() * Math.floor(10))+1;
    if(DCD <= "30"){var DCD = "<br>Fort heureusement, il/elle est morte depuis ce temps.";}else{var DCD = "<br>Malheuresement, il/elle toujours en vie...";}
        var Danger_aff = "<b>Ennemi</b> :"+Sexe+Profession+Pouvoir+Cause+Escalade+DCD;
        }
        else{	// Wounds
            var EV_Danger_EV = Math.floor(Math.random() * Math.floor(10))+1;
    if(EV_Danger_EV == "1"){var Danger_aff = "<b>Genou rigide (-1 SPD)</b> : Une horrible blessure à votre jambe l'a brisée et presque irrémédiable. Même après une intervention chirurgicale et un régime de potions de sorceleur, il n'a jamais été le même.";}
    if(EV_Danger_EV == "2"){var Danger_aff = "<b>Oeil endommagé (-1 Vigilance (vision))</b> : Habituellement, les sorceleurs sont assez rapides pour éviter une attaque, mais certains monstres sont trop rapides. Un coup dans l'œil l'a laissé légèrement flou.";}
    if(EV_Danger_EV == "3"){var Danger_aff = "<b>Bras raide (-1 Mêlée)</b> : Un coup fracassant sur votre bras vous a laissé des semaines de récupération et un bras raide. Vous pouvez toujours tenir une épée et vous battre, mais la raideur vous aggrave toujours.";}
    if(EV_Danger_EV == "4"){var Danger_aff = "<b>Doigts endommagés (impossible de faire des signes avec cette main)</b> : Cela peut avoir été le résultat de la torture ou simplement d'une frappe très malchanceuse à cette main au combat, mais ses doigts sont raides et maladroits.";}
    if(EV_Danger_EV == "5"){var Danger_aff = "<b>Pointe de flèche intégrée (-1 Physique)</b> : Un tireur d'élite vous a laissé une pointe de flèche dans votre corps, logée dans votre muscle.";}
    if(EV_Danger_EV == "6"){var Danger_aff = "<b>Respiration sifflante (-5 points d'endurance)</b> : Vous avez peut-être été poignardé aux poumons ou inhalé un gaz toxique. De toute façon, vos poumons ont été endommagés; respirer normalement est quelque peu difficile.";}
    if(EV_Danger_EV == "7"){var Danger_aff = "<b>Énorme cicatrice (-2 charme et séduction)</b> : Il n’est pas rare que le corps d’un sorceleur soit un rempli de cicatrices. Cependant, vous avez subi un coup qui a défiguré votre visage.";}
    if(EV_Danger_EV == "8"){var Danger_aff = "<b>Nez endommagé (-2 Sens accrus)</b> : Un certain nombre de coups de poing au visage dans des combats de barres (ou des gaz toxiques) ont endommagé votre nez et vous ont presque volé votre suivi de parfum.";}
    if(EV_Danger_EV == "9"){var Danger_aff = "<b>Dégâts de venin (-5 PV)</b> : Des toxines qui se sont répandues et qui vous ont laissé des veines noircies autour de la blessure et a affaibli votre corps.";}
    if(EV_Danger_EV == "10"){var Danger_aff = "<b>À moitié sourd (-1 Vigilance (audition))</b> : De nombreux monstres utilisent des attaques sonores mortelles. Vous avez eu la chance d'en survivre, mais vos oreilles ne seront plus jamais les mêmes.";}
        }
    }
    
        var EV = Math.floor(Math.random() * Math.floor(10))+1;
        // Bénéfice : 1-5 ; Allier : 6-7 ; Chasse : 8-9 ; Rien : 10
    if(EV < "6"){ // Bénéfice
        var Chance = Math.floor(Math.random() * Math.floor(10))+1;
    if(Chance == "1"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise == "1"){var Surprise = "un bébé.";}
    if(Surprise == "2"){var Surprise = "un chien.";}
    if(Surprise == "3"){var Surprise = "un cheval.";}
    if(Surprise == "4"){var Surprise = "une nouvelle charrue.";}
    if(Surprise == "5"){var Surprise = "un chat.";}
    if(Surprise == "6"){var Surprise = "un baril de bière.";}
    if(Surprise == "7"){var Surprise = "un bijou d'une valeur de 700 couronnes.";}
    if(Surprise == "8"){var Surprise = "une arme valant jusqu'à 500 couronnes.";}
    if(Surprise == "9"){var Surprise = "un bœuf.";}
    if(Surprise == "10"){var Surprise = "une mule.";}
        var EV = "<b>Droit de surprise</b> : Vous avez invoqué le Droit de surprises au cours de cette décennie et vous avez obtenu "+Surprise;
    }
    if(Chance == "2"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "7"){var Surprise = "Cela a duré quelques semaines.";}
    if(Surprise > "8"){var Surprise = "Cela a duré quelques mois.";}
    else{var Surprise = " Ça continue, avec des hauts et des bas.";}
        var EV = "<br>Romance</br> : Vous avez trouvé un amant qui a vu au-delà de vos mutations et désensibilisation. D'une manière ou d'une autre, vous avez réussi à établir un lien significatif avec une personne."+Surprise;
    }
    if(Chance == "3"){
        var Surprise = Number(Math.floor(Math.random() * Math.floor(10))+1)*100;
        var EV = "<br>Aubaine</br> : Vous avez ramassé une quantité étonnamment élevée de pièces au cours de cette décennie. Vous avez réussi non seulement à payer les ingrédients d'alchimie et les réparations de votre équipement, mais également à mettre de l'argent de côté pour réaliser des économies légitimes. Vous gagnez "+Surprise+" couronnes.";
    }
    if(Chance == "4"){var EV = "<br>Faveur d'un noble</br> : Vous avez effectué une tâche pour un noble. C'était peut-être légal, c'était peut-être illégal - de toute façon, le noble que vous avez aidé vous doit beaucoup. Vous pouvez invoquer cette faveur à tout moment mais elle doit être raisonnable.";}
    if(Chance == "5"){var EV = "<br>Les secrets du sorceleur transmis</br> : Au cours de vos voyages, vous avez rencontré et voyagé avec un autre sorceleur. Ce sorceleur vous a enseigné et partagé des connaissances perdues depuis longtemps. Vous obtenez un diagramme de sorceleur: une potion, de l'huile ou une décoction de votre choix.";}
    if(Chance == "6"){var EV = "<br>Valereux</br> : À un moment donné de cette décennie, vous avez combattu courageusement pour défendre un pays. Vous êtes peut-être allé protéger quelqu'un ou vous vous êtes peut-être trouvé au bon endroit au bon moment. Pour cette grande action, vous avez été fait chevalier par un roi / reine. Vous gagnez +1 en réputation dans le pays de votre choix.";}
    if(Chance == "7"){var EV = "<br>Avec les bandits</br> : Vous êtes tombé sur un groupe de bandits ou scoia’tael pendant une chasse. Vous n'êtes peut-être pas d'accord avec leurs méthodes, mais ils ne vous ont pas dérangés et vous ne les avez pas dérangés. Vous avez même partagé des boissons. Vous pouvez leur demander une faveur une fois par mois tant que cela est raisonnable.";}
    if(Chance == "8"){
        var Surprise = Math.floor(Math.random() * Math.floor(10))+1;	
    if(Surprise < "3" ){var Surprise = "une amélioration elfique.";}
    if(Surprise > "2" && Surprise < 5){var Surprise = "un message elfique.";}
    if(Surprise > "4" && Surprise < 7){var Surprise = "une amélioration naine.";}
    if(Surprise > "6" && Surprise < 9){var Surprise = "une arbalète à main gnome.";}
    if(Surprise > "8"){var Surprise = "un manteau nain.";}	
        var EV = "<br>A exploré une ruine</br> : Vous deviez chasser un monstre à travers une ruine grande et complexe. En chemin, vous avez trouvé quelque chose d'utile :  "+Surprise;
    }
    if(Chance == "9"){var EV = "<br>Faveur d'un mage</br> : Au cours de cette décennie, vous avez rendu service à un mage. Vous avez peut-être rassemblé des pièces de monstre pour leurs expériences, laissez-les vous étudier ou même capturé un monstre vivant pour eux. Quoi qu'il en soit, le mage vous doit maintenant une faveur en retour tant qu'elle est raisonnable.";}
    if(Chance == "10"){var EV = "<br>Trouvé un maître</br> : Vous avez passé plusieurs semaines à apprendre, à pratiquer et à demander conseil à votre mentor. C'était une expérience étrange. Vous pouvez gagner +1 dans n'importe quelle compétence INT ou commencer une nouvelle compétence INT à +2.";}
    }
    if(EV > "5" && EV < "8"){ // Allier
        var Sexe = Math.floor(Math.random() * Math.floor(2));
    if(Sexe == "0"){var Sexe = "Un";}else{var Sexe = "Une";}
        var Profession = Math.floor(Math.random() * Math.floor(10))+1;
    if(Profession == "1"){var Profession = " chasseur de prime";}
    if(Profession == "2"){var Profession = " mage";}
    if(Profession == "3"){var Profession = " mentor";}
    if(Profession == "4"){var Profession = " un ami d'enfance";}
    if(Profession == "5"){var Profession = " artisan";}
    if(Profession == "6"){var Profession = " ancien ennemi";}
    if(Profession == "7"){var Profession = " duc";}
    if(Profession == "8"){var Profession = " prêtre";}
    if(Profession == "9"){var Profession = " soldat";}
    if(Profession == "10"){var Profession = " barde";}
    
        var Rencontre = Math.floor(Math.random() * Math.floor(10))+1;
    if(Rencontre == "1"){var Rencontre = " que vous avez sauvé.";}
    if(Rencontre == "2"){var Rencontre = " que vous avez rencontré dans une taverne.";}
    if(Rencontre == "3"){var Rencontre = " qui vous a sauvé.";}
    if(Rencontre == "4"){var Rencontre = " qui vous a engagé.";}
    if(Rencontre == "5"){var Rencontre = " avec qui vous êtiez prisonnés.";}
    if(Rencontre == "6"){var Rencontre = " avec qui vous êtiez obligé de travailler.";}
    if(Rencontre == "7"){var Rencontre = " que vous avez engagé.";}
    if(Rencontre == "8"){var Rencontre = " que vous avez rencontré quand vous êtiez complètement saoul.";}
    if(Rencontre == "9"){var Rencontre = " que vous avez rencontré pendant vos voyages.";}
    if(Rencontre == "10"){var Rencontre = " avec qui vous avez combattu.";}
        var Proche = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proche < "7"){var Proche = " Vous êtes des connaissances.";}
    else if(Proche == "10"){var Proche = " Vous êtes lié par serment.";}
    else{var Proche = " Vous êtes des amis.";}
        var Vivant = Math.floor(Math.random() * Math.floor(100))+1;
    if(Vivant <= "30"){var Vivant = "<br>Malheuresement, il/elle est morte.";}else{var Vivant = "<br>Heureusement, il/elle est toujours vivant.";}
    
        var EV = "<b>Allier</b> : "+Sexe+Profession+Rencontre+Proche+Vivant;
    }
    if(EV > "7" && EV < "10"){	// Chasse
        var Proie = Math.floor(Math.random() * Math.floor(10))+1;
    if(Proie == "1"){var Proie = "un spectre";}
    if(Proie == "2"){var Proie = "une créature maudite";}
    if(Proie == "3"){var Proie = "un hybride";}
    if(Proie == "4"){var Proie = "un insectoïde";}
    if(Proie == "5"){var Proie = "un élémentaire";}
    if(Proie == "6"){var Proie = "une veuve";}
    if(Proie == "7"){var Proie = "un ogre";}
    if(Proie == "8"){var Proie = "un draconide";}
    if(Proie == "9"){var Proie = "un nécrophage";}
    if(Proie == "10"){var Proie = "un vampire";}
        var Lieu = Math.floor(Math.random() * Math.floor(10))+1;
    if(Lieu == "1"){var Lieu = " dans une fôret.";}
    if(Lieu == "2"){var Lieu = " dans un batiment.";}
    if(Lieu == "3"){var Lieu = " dans un batiment abandonné.";}
    if(Lieu == "4"){var Lieu = " sur la côte.";}
    if(Lieu == "5"){var Lieu = " dans la montagne.";}
    if(Lieu == "6"){var Lieu = " dans une ville.";}
    if(Lieu == "7"){var Lieu = " dans un cimetierre.";}
    if(Lieu == "8"){var Lieu = " dans un hameau.";}
    if(Lieu == "9"){var Lieu = " le long de la rivière.";}
    if(Lieu == "10"){var Lieu = " dans un grotte.";}
    
        var Fin = Math.floor(Math.random() * Math.floor(10))+1;
    if(Fin < "3"){var Fin = " Vous avez pris votre argent et vous êtes parti.";}
    if(Fin > "2" && Fin < "5"){var Fin = " L'employeur a refusé de payer.";}
    if(Fin > "4" && Fin < "7"){var Fin = " L'employeur vous a payé en échange.";}
    if(Fin > "6" && Fin < "9"){var Fin = " Ce fut un combat particulièrement difficile.";}
    if(Fin > "8"){var Fin = " Ce fut un combat étonnamment facile.";}
        var PB = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB < "5"){
        var PB2 = Math.floor(Math.random() * Math.floor(10))+1;
    if(PB2 == "1"){var Fin = " Malheuresement, le monstre était faux.";}	
    if(PB2 == "2"){var Fin = " Malheuresement, c'était une malédiction.";}	
    if(PB2 == "3"){var Fin = " Malheuresement, le monstre était déjà mort.";}	
    if(PB2 == "4"){var Fin = " Malheuresement, ce n'était pas ce que vous pensiez.";}
    if(PB2 == "5"){var Fin = " Malheuresement, votre employeur voulait l'attrapé vivant.";}
    if(PB2 == "6"){var Fin = " Malheuresement, l'employeur est à blâmer pour tout cela";}
    if(PB2 == "7"){var Fin = " Malheuresement, le monstre était inoffensif.";}
    if(PB2 == "8"){var Fin = " Malheuresement, c'était un piège.";}
    if(PB2 == "9"){var Fin = " Malheuresement, c'était plus que ce qu'on vous avait dit.";}
    if(PB2 == "10"){var Fin = " Malheuresement, un mage était derrière tout ça.";}
    }
    
        var EV = "<b>Chasse</b> : "+Proie+Lieu+Fin;
        
    }
    else{var EV = "Il ne s'est rien passé de notable."}
        Evénement_Sorceleur_3.innerHTML = Danger_aff+EV;
    }
 
}
 
    }
   
function FormationWitcher(){

	Bouton_Formation_Witcher.style.display = "none";
	
	var EH = "0"; 	// Epreuve des Herbes 
	
	Sorceleur_3_4.style.display = "block";
	
	var EV_1 = Math.floor(Math.random() * Math.floor(10))+1;
if(EV_1 == "1"){var EV_1 = "<b>Blessé pendant le défi (-1 SPD)</b> : Vous avez été blessé en courant le défi autour de votre école. Votre jambe était gravement cassée et même après la guérison, elle est encore légèrement raide.";}	
if(EV_1 == "2"){var EV_1 = "<b>Connaissances volées (+1 schéma de sorceleur)</b> : Pendant votre formation à l'école, vous vous êtes glissé dans les bibliothèques du donjon et avez copié l'un des diagrammes de sorceleur secret.";}
if(EV_1 == "3"){var EV_1 = "<b>Rival (se fait un ennemi sorceleur)</b> : Pendant l'entraînement au donjon, vous avez formé une rivalité avec un autre sorceleur à l'entraînement. Même après des mutations, la haine continue de bouillir.";}	
if(EV_1 == "4"){
	var EH = "2";
	var EV_1 = "<b>Mutations faciles (+2 à l'épreuve des herbes)</b> : Vous vous êtes bien adapté aux moindres mutations et champignons mutagènes qui vous ont été donnés au début de l'entraînement. Lorsque le moment est venu pour l'épreuve des herbes, vous étiez bien préparé.";}	
if(EV_1 == "5"){var EV_1 = "<b>Retour de flamme magique (-1 seuil de vigueur)</b> : Un échec à lancer un signe a causé des dommages mineurs à votre corps. C'était horriblement douloureux, et même après la guérison de votre corps, votre seuil de vigueur a été abaissé.";}	
if(EV_1 == "6"){var EV_1 = "<b>Meilleur de la classe (+1 escrime)</b> : Vous étiez l'un des meilleurs épéistes de votre classe et vos compétences n'ont pas terni. Vous effectuez facilement les mouvements complexes et les pirouettes de sorceleur.";}	
if(EV_1 == "7"){
	var EH = "-2";
	var EV_1 = "<b>Mauvaise réaction aux mutagènes (-2 a l'épreuve des herbes)</b> : Vous avez eu des réactions allergiques aux champignons mutagènes et aux composés chimiques qui vous ont été donnés au début de l'entraînement. Lorsque l'épreuve des herbes est arrivé, c'était plus difficile.";}	
if(EV_1 == "8"){var EV_1 = "<b>Ami (se fait un ami sorceleur)</b> : Vous vous êtes fait un ami rapidement pendant vos premières années de formation. La formation est difficile et les situations dangereuses ont scellé votre lien.";}	
if(EV_1 == "9"){var EV_1 = "<b>Blessé par le pendule (-1 REF)</b> : Vous avez été blessé lors de votre entraînement au pendule. Vous êtes tombé des poteaux et avez cassé plusieurs os sur les rochers en dessous. Une fois guéri, vous êtes un peu plus rigide qu'avant.";}	
if(EV_1 == "10"){var EV_1 = "<b>Recherche approfondie (+1 formation de sorceleur)</b> : Bien que l'entraînement à l'épée soit important, vous avez passé la plupart de votre temps libre dans les bibliothèques du donjon à étudier les monstres du monde et à prendre des notes.";}	

	Sorceleur_3.innerHTML = EV_1;
	
if(Sorceleur_1.value == "1"){var EH = Number(EH)-2}
if(Sorceleur_1.value == "3"){var EH = Number(EH)+2}
	
	var EV_2 = Math.floor(Math.random() * Math.floor(10))+1;
	var EH = Number(EH)+(Number(EV_2));
if(EH <= "1"){var EH = "<b>Presque mortel (-1 EMP et -1 CORPS)</b> : L'épreuve des herbes a presque détruit votre corps. Bien que vous ayez survécu au processus, votre corps et votre esprit ont été endommagés de façon permanente."}
if(EH > "1" && EH < "4"){var EH = "<b>Mal accepté (-1 EMP)</b> : L'épreuve des herbes s'est mal passé et les sorceleurs en charge de la mutation n'étaient pas tout à fait sûrs que vous y arriviez. Vous avez survécu, mais pas sans cicatrices mentales."}
if(EH > "3" && EH <= "10"){var EH = "<b>Mutations passables</b> : Le procès des herbes s'est bien passé. Vous êtes passé dans les rangs des sorceleurs avec rien de plus que des souvenirs d'horribles douleurs."}
if(EH >= "10"){var EH = "<b>Mutations supplémentaires (+1 EMP et +1 DEX)</b> : Votre corps était très réceptif a l'épreuve des Herbes et vous aviez des mutations supplémentaires qui vous étaient appliquées. Votre corps l'a bien géré et toute la douleur a finalement payé."}
	Sorceleur_4.innerHTML = EH;
}

