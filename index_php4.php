<?php
	include 'database.php';
	// Affiche PAGE 2

$joueur = $_POST['joueur'];
	
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$conn->exec("SET NAMES 'UTF8'");

?>
<div><h3>Compétences :</h3><div class="API1AA">
<?php
$sql = $conn->prepare("SELECT * FROM witcher_cc WHERE (joueur =:joueur AND description = 'INT')");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
 
	if($pseudoINbdd != 0){
//Si la requête renvoi 0, le pseudo n'existe pas dans la base, sinon le pseudo existe.
?><div class="API1A1"><h5>Intelligence</h5><?php
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){
?>
	<div ><?=$result['nom'];?> : <span id="P2_<?=str_replace(' ','',$result['nom']);?>"><?=$result['valeur'];?></span></div>
<?php
}?></div><?php
}
$sql = null;

$sql = $conn->prepare("SELECT * FROM witcher_cc WHERE (joueur =:joueur AND description = 'REF')");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
 
	if($pseudoINbdd != 0){
//Si la requête renvoi 0, le pseudo n'existe pas dans la base, sinon le pseudo existe.
?><div class="API1A1"><h5>Réflexes</h5><?php
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){
?>
	<div ><?=$result['nom'];?> : <span id="P2_<?=str_replace(' ','',$result['nom']);?>"><?=$result['valeur'];?></span></div>
	<?php
}?></div><?php
}
$sql = null;

$sql = $conn->prepare("SELECT * FROM witcher_cc WHERE (joueur =:joueur AND description = 'DEX')");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
 
	if($pseudoINbdd != 0){
//Si la requête renvoi 0, le pseudo n'existe pas dans la base, sinon le pseudo existe.
?><div class="API1A1"><h5>Dextérité</h5><?php
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){
?>
	<div ><?=$result['nom'];?> : <span id="P2_<?=str_replace(' ','',$result['nom']);?>"><?=$result['valeur'];?></span></div>
	<?php
}?></div><?php
}
$sql = null;

$sql = $conn->prepare("SELECT * FROM witcher_cc WHERE (joueur =:joueur AND description = 'CORPS')");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
 
	if($pseudoINbdd != 0){
//Si la requête renvoi 0, le pseudo n'existe pas dans la base, sinon le pseudo existe.
?><div class="API1A1"><h5>Corps</h5><?php
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){
?>
	<div ><?=$result['nom'];?> : <span id="P2_<?=str_replace(' ','',$result['nom']);?>"><?=$result['valeur'];?></span></div>
	<?php
}?></div><?php
}
$sql = null;

$sql = $conn->prepare("SELECT * FROM witcher_cc WHERE (joueur =:joueur AND description = 'EMP')");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
 
	if($pseudoINbdd != 0){
//Si la requête renvoi 0, le pseudo n'existe pas dans la base, sinon le pseudo existe.
?><div class="API1A1"><h5>Empathie</h5><?php
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){
?>
	<div><?=$result['nom'];?> : <span id="P2_<?=str_replace(' ','',$result['nom']);?>"><?=$result['valeur'];?></span></div>
	<?php
}?></div><?php
}
$sql = null;

$sql = $conn->prepare("SELECT * FROM witcher_cc WHERE (joueur =:joueur AND description = 'TEC')");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
 
	if($pseudoINbdd != 0){
//Si la requête renvoi 0, le pseudo n'existe pas dans la base, sinon le pseudo existe.
?><div class="API1A1"><h5>Technique</h5><?php
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){
?>
	<div ><?=$result['nom'];?> : <span id="P2_<?=str_replace(' ','',$result['nom']);?>"><?=$result['valeur'];?></span></div>
	<?php
}?></div><?php
}
$sql = null;

$sql = $conn->prepare("SELECT * FROM witcher_cc WHERE (joueur =:joueur AND description = 'VOL')");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
 
	if($pseudoINbdd != 0){
//Si la requête renvoi 0, le pseudo n'existe pas dans la base, sinon le pseudo existe.
?><div class="API1A1"><h5>Volonté</h5>
<?php
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){
?>
	<div ><?=$result['nom'];?> : <span id="P2_<?=str_replace(' ','',$result['nom']);?>"><?=$result['valeur'];?></span></div>
<?php
}
?></div><?php
}$sql = null;
?>
</div>
<br>
<?php
$sql = $conn->prepare("SELECT * FROM witcher_cc WHERE (joueur =:joueur AND type = 'magie')");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
 
	if($pseudoINbdd != 0){
//Si la requête renvoi 0, le pseudo n'existe pas dans la base, sinon le pseudo existe.?>
<div><h3>Magie</h3></div>
<?php
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){
?>
	<div style="text-align: justify;"><b><?=$result['nom'];?></b> : <?=$result['description'];?></div>
<?php } ?><br><?php }
$sql = null;

$sql = $conn->prepare("SELECT * FROM witcher_perso WHERE joueur =:joueur");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
 
	if($pseudoINbdd != 0){
//Si la requête renvoi 0, le pseudo n'existe pas dans la base, sinon le pseudo existe.
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){

if($result['profession'] == "1"){$Capacité2 = "<p><span>&bull; </span><strong>Travailleur</strong><span> Un artisan qualifi&eacute; peut r&eacute;parer une arme ou une armure suffisamment bien pour la faire fonctionner et garder son porteur dans le combat, que ce soit en attachant une corde d'arc ensemble, en aiguisant le bord d'une lame cass&eacute;e ou en clouant une plaque sur un bouclier fissur&eacute;.<br /></span><span>Le SD est &eacute;gal au niveau de TEC de l'objet -3. <br /></span><span>Un artisan peut restaurer un bouclier ou une armure cass&eacute; &agrave; la moiti&eacute; de son blocage ou restaurer une arme cass&eacute;e &agrave; la moiti&eacute; de sa durabilit&eacute;. </span><strong>Tant qu'elle n'est pas fix&eacute;e sur une forge</strong><span>, une arme corrig&eacute;e inflige la moiti&eacute; de ses d&eacute;g&acirc;ts normaux.</span></p>";}
if($result['profession'] == "2"){$Capacité2 = "<p><span>&bull; </span><strong>Prestation</strong><span> Le Barde peut r&eacute;aliser un jet de Prestation et se donner en spectacle sur la place de la ville durant une heure. Le r&eacute;sultat du jet correspond au montant qu&rsquo;il a r&eacute;colt&eacute; en se produisant dans la rue. Un &eacute;chec critique peut diminuer le r&eacute;sultat du jet, et si le total devient n&eacute;gatif, il subit un malus mineur (+1) en Charisme lorsqu&rsquo;il interagit avec les citadins jusqu&rsquo;&agrave; la fin de la journ&eacute;e.</span></p>";}
if($result['profession'] == "3"){$Capacité2 = "<p><span>&bull; </span><strong>Parano&iuml;a exerc&eacute;e</strong><span> Lorsqu&rsquo;un Criminel arrive &agrave; 10 m d&rsquo;un pi&egrave;ge (ce qui inclut les embuscades), il effectue imm&eacute;diatement un jet de Parano&iuml;a exerc&eacute;e dont le SD est &eacute;gal &agrave; celui requis pour d&eacute;celer le pi&egrave;ge, au r&eacute;sultat du jet de Furtivit&eacute; du groupe post&eacute; en embuscade ou au SD fix&eacute; par le MJ. M&ecirc;me s&rsquo;il n&rsquo;arrive pas &agrave; rep&eacute;rer le pi&egrave;ge, il sent au fond de lui que quelque chose ne va pas.</span></p>";}
if($result['profession'] == "4"){$Capacité2 = "<p><span>&bull; </span><strong>Mains th&eacute;rapeutiques</strong><span> Un Docteur avec Mains th&eacute;rapeutiques est le seul personnage capable de soigner une blessure critique. Toutes les informations sur les blessures critiques se trouvent dans le chapitre d&eacute;di&eacute; au combat. Mains th&eacute;rapeutiques peut aussi servir lors des actions de Premiers soins.</span></p>";}
if($result['profession'] == "5"){$Capacité2 = "<p><span>&bull; </span><strong>Dur &agrave; cuire :</strong><span> Lorsque les points de sant&eacute; d&rsquo;un Homme d&rsquo;armes tombent &agrave; 0 ou moins, il peut effectuer un jet de Dur &agrave; cuire dont le SD est &eacute;gal au double de son score de sant&eacute; n&eacute;gatif. S&rsquo;il &eacute;choue, il entre en &eacute;tat de mort imminente selon les r&egrave;gles habituelles. S&rsquo;il le r&eacute;ussit, il peut continuer &agrave; se battre comme s&rsquo;il avait atteint son seuil de blessures</span></p>";}
if($result['profession'] == "6"){$Capacité2 = "<p><span>&bull; </span><strong>Exercice de la magie</strong><span> : Un Mage peut r&eacute;aliser un jet d&rsquo;Exercice de la magie d&egrave;s qu&rsquo;il se trouve face &agrave; un ph&eacute;nom&egrave;ne magique ou un sort inconnu, ou encore lorsqu&rsquo;il analyse une th&eacute;orie de la magie. Le SD du jet est fix&eacute; par le MJ. En cas de r&eacute;ussite, le Mage apprend tout ce qu&rsquo;il y a &agrave; savoir sur le ph&eacute;nom&egrave;ne en question. Un jet d&rsquo;Exercice de la magie peut aussi servir &agrave; d&eacute;tecter la magie en cours d&rsquo;utilisation ou les spectres.</span></p>";}
if($result['profession'] == "7"){$Capacité2 = "<p><span>&bull; </span><strong>Voyageur</strong><span> Un marchand peut lancer un jet voyageur &agrave; tout moment lorsqu'il souhaite conna&icirc;tre un fait concernant un objet, une culture ou une zone sp&eacute;cifique. Le SD est fix&eacute; par le MJ et si le jet est r&eacute;ussi, le marchand se souvient de la r&eacute;ponse &agrave; cette question, invoquant les souvenirs de la derni&egrave;re fois qu'il a voyag&eacute; dans la zone.</span></p>";}
if($result['profession'] == "8" || $result['profession'] == "82"){$Capacité2 = "<p><span>&bull; </span><strong>Initi&eacute; des Dieux</strong><span> Les &eacute;glises du monde sont souvent des lieux chaleureux et accueillants, aidant leurs communaut&eacute;s et accueillant de nouveaux convertis. Un pr&ecirc;tre peut lancer Initi&eacute; des dieux avec un SD fix&eacute; par le MJ dans des &eacute;glises de la m&ecirc;me foi pour obtenir un logement gratuit, des soins et d'autres services au bon vouloir du MJ. <br />L'initi&eacute; des dieux fonctionne &eacute;galement lorsqu'il s'agit de membres de la m&ecirc;me foi, bien qu'ils soient probablement en mesure d'offrir moins qu'une &eacute;glise enti&egrave;rement approvisionn&eacute;e. Gardez &agrave; l'esprit qu'Initi&eacute; des Dieux ne fonctionne pas avec les membres d'autres confessions.</span></p>";}
if($result['profession'] == "9"){$Capacité2 = "	<p><span>&bull; </span><strong>Formation de sorceleur :</strong><span> Un Sorceleur peut diminuer les p&eacute;nalit&eacute;s provoqu&eacute;es par un environnement hostile ou un relief accident&eacute; d&rsquo;une valeur &eacute;gale &agrave; la moiti&eacute; de son score de Formation de sorceleur (minimum 1). Vous pouvez &eacute;galement utiliser Formation de sorceleur dans les situations requ&eacute;rant l&rsquo;usage de la comp&eacute;tence Connaissance des monstres.</span></p>";}

	if($result['race'] == "Sorceleur"){$Capacité = "<p><span>&bull; </span><strong>Sens accrus :</strong><span> Gr&acirc;ce &agrave; leurs sens am&eacute;lior&eacute;s, les sorceleurs ne subissent pas de p&eacute;nalit&eacute; dans les zones de lumi&egrave;re tamis&eacute;e et b&eacute;n&eacute;ficient d&rsquo;un bonus naturel de +1 en Vigilance, ainsi que de la capacit&eacute; &agrave; pister une cible en recourant uniquement &agrave; l&rsquo;odorat. </span></p><p><span>&bull; </span><strong>Mutation durable :</strong><span> &Eacute;tant donn&eacute; que les sorceleurs subissent de nombreuses mutations au cours de leur formation, ils deviennent immunis&eacute;s aux maladies et peuvent se servir des mutag&egrave;nes. </span></p><p><span>&bull; </span><strong>Sensibilit&eacute; &eacute;mouss&eacute;e :</strong><span> Les sorceleurs n&rsquo;ont pas besoin de faire de jet de Courage en cas d&rsquo;Intimidation, mais ils subissent un malus de &ndash;4 &agrave; leur caract&eacute;ristique d&rsquo;Empathie. L&rsquo;Empathie ne peut jamais descendre en dessous de 1. </span></p><p><span>&bull; </span><strong>R&eacute;flexes hors du commun :</strong><span> Les sorceleurs b&eacute;n&eacute;ficient d&rsquo;un bonus permanent de +1 en R&eacute;flexes et en Dext&eacute;rit&eacute;, et peuvent am&eacute;liorer ces deux caract&eacute;ristiques au-del&agrave; de 10. </span></p>";}
	if($result['race'] == "Humain" || $result['race'] == "Humaine"){$Capacité = "<p><span>&bull; </span><strong>Digne de confiance :</strong><span> Les humains b&eacute;n&eacute;ficient d&rsquo;un bonus mineur (+1) sur leurs jets de Charisme, de S&eacute;duction et de Persuasion lorsqu&rsquo;ils interagissent avec d&rsquo;autres humains. </span></p><p><span>&bull; </span><strong>Ing&eacute;nieux :</strong><span> Les humains sont intelligents et trouvent souvent des solutions brillantes pour r&eacute;soudre des probl&egrave;mes d&eacute;licats. Ils b&eacute;n&eacute;ficient d&rsquo;un bonus naturel de +1 en D&eacute;duction. </span></p><p><span>&bull; </span><strong>T&ecirc;tu comme une mule :</strong><span> Un humain peut puiser dans sa d&eacute;termination pour relancer un jet rat&eacute; de R&eacute;sistance &agrave; la contrainte ou de Courage. Il a droit au total &agrave; trois relances par session de jeu. Le joueur choisit le meilleur des deux jets, mais il ne peut pas renouveler sa tentative pour le m&ecirc;me jet, m&ecirc;me s&rsquo;il &eacute;choue &agrave; nouveau.</span></p>";}
	if($result['race'] == "Elfe"){$Capacité = "<p><span>&bull; </span><strong>Esth&egrave;te :</strong><span> Les elfes ont un talent inn&eacute; pour les activit&eacute;s artistiques et une attirance pour la beaut&eacute;. Ils b&eacute;n&eacute;ficient d&rsquo;un bonus naturel de +1 dans la comp&eacute;tence Beaux-arts. </span></p><p><span>&bull; </span><strong>&OElig;il d&rsquo;aigle :</strong><span> Des si&egrave;cles de tradition et de pratique ont permis aux elfes de devenir les meilleurs archers au monde. Ils b&eacute;n&eacute;ficient d&rsquo;un bonus naturel de +2 dans la comp&eacute;tence Archerie et peuvent prendre leur arc puis le bander sans d&eacute;penser d&rsquo;action.</span></p><p><span>&bull; </span><strong>Harmonie avec la nature :</strong><span> Les elfes ne d&eacute;rangent jamais les animaux, ce qui signifie qu&rsquo;ils consid&egrave;rent toutes les b&ecirc;tes qu&rsquo;ils croisent comme amicales, et que ces derni&egrave;res ne les attaqueront pas, sauf en cas de provocation.</span></p>";}
	if($result['race'] == "Nain" || $result['race'] == "Naine"){$Capacité = "<p><span>&bull; </span><strong>&OElig;il de l&rsquo;expert :</strong><span> Comme les nains ont l&rsquo;&oelig;il pour rep&eacute;rer les plus petits d&eacute;tails, il est presque impossible de les rouler dans la farine. Ils b&eacute;n&eacute;ficient d&rsquo;un bonus naturel de +1 dans la comp&eacute;tence N&eacute;goce. </span></p><p><span>&bull; </span><strong>Coriace :</strong><span> &Agrave; cause de leur silhouette trapue et de leur propension &agrave; exercer des m&eacute;tiers physiques &eacute;reintants, les nains b&eacute;n&eacute;ficient d&rsquo;un bonus naturel de +1 dans la comp&eacute;tence Physique. </span></p><p><span>&bull; </span><strong>Tann&eacute; comme du cuir :</strong><span> Comme les nains poss&egrave;dent une peau naturellement &eacute;paisse, ils r&eacute;duisent de &ndash;2 le total de d&eacute;g&acirc;ts physiques qu&rsquo;ils re&ccedil;oivent. Cette r&eacute;duction s&rsquo;applique une fois que les d&eacute;g&acirc;ts ont pass&eacute; l&rsquo;armure, mais avant les modificateurs li&eacute;s &agrave; la localisation.</span></p>";}
}
	}
$sql = null;
$Capacité3 = "";
$sql = $conn->prepare("SELECT * FROM witcher_cc WHERE joueur =:joueur && type = 'talent'");
$sql->bindValue(':joueur', $joueur, PDO::PARAM_STR);
$sql->execute();

$pseudoINbdd = $sql->rowCount();
//Rowcount permet de sortir le nombre de valeur que t'as requête renvoi, que l'on rentre dans la variable pseudoINbdd (ou autre )
	if($pseudoINbdd != 0){
//Si la requête renvoi 0, le pseudo n'existe pas dans la base, sinon le pseudo existe.
$result = $sql->setFetchMode(PDO::FETCH_ASSOC);
while ($result = $sql->fetch()){
	$BACA = $result['nom'];
	$BACB = $result['description'];
	$Capacité3 = "$Capacité3 <p><span>&bull; </span><strong> $BACA :</strong> $BACB </p>";
}
	}
$sql = null;
	?>
    <div><h3>Capacités</h3><div><?=$Capacité;?><?=$Capacité2;?><?=$Capacité3;?></div></div>
	<br>	
	
	<?php
$conn = null;
?>