<?php
// Ajouter ou Editer un élément dans le wiki json
$A = $_POST['action'];
$Nom = $_POST['nom'];
$Chapitre = $_POST['chap'];
$Description = $_POST['description'];


// read json file
$data = file_get_contents('wiki.json');

// decode json
$json_arr = json_decode($data, true);

if($A == "add"){
    // add data
    $json_arr[] = array('Nom'=>$Nom, 'Chapitre'=>$Chapitre, 'Description'=>$Description);

    // encode json and save to file
    file_put_contents('wiki.json', json_encode($json_arr));

    echo 'Ajout de '.$Nom.' dans la dtb.';
}
if($A == "edit"){
    // edit data
    foreach ($json_arr as $key => $value) {
        if ($value['Nom'] == $Nom) {
            $json_arr[$key]['Chapitre'] = $Chapitre;
            $json_arr[$key]['Description'] = $Description;
        }
    }

    // encode json and save to file
    file_put_contents('wiki.json', json_encode($json_arr));

    echo 'Mise à jour de '.$Nom.' dans la dtb.';
}
?>