<?php
// Ajouter ou Editer un élément dans le wiki json
$A = $_POST['action'];
$V = $_POST['url'];

// read json file
$data = file_get_contents('data.json');

// decode json
$json_arr = json_decode($data, true);

if($A == "tts"){
    // edit data
    foreach ($json_arr as $key => $value) {
            $json_arr['TTS'] = $V;
    }

    // encode json and save to file
    file_put_contents('data.json', json_encode($json_arr));

    echo 'Mise à jour du TTS dans la data.'.$V;
}
if($A == "image"){
    // edit data
    foreach ($json_arr as $key => $value) {
        $json_arr[$key]['image'] = $V;
    }

    // encode json and save to file
    file_put_contents('data.json', json_encode($json_arr));

    echo 'Mise à jour de l\'image dans la data: '.$V;
}
if($A == 'journal'){
    $J = $_POST['nom'];
    // edit data
    try {
        foreach ($json_arr as $key => $value) {
            $json_arr[$J]['Journal'] = $V;
        }
    } catch (\Throwable $th) {
        //throw $th;
            $json_arr[] = array('Journal'=>$V);
    }
    // encode json and save to file
    file_put_contents('data.json', json_encode($json_arr));

    echo 'Mise à jour du journal dans la data '.$J.'.';
}
if($A == 'map'){
    $J = $_POST['nom'];
    // edit data
    try {
        foreach ($json_arr as $key => $value) {
            $json_arr['map'][$J] = $V;
        }
    } catch (\Throwable $th) {
        //throw $th;
            $json_arr['map'] = array($J=>$V);
    }
    // encode json and save to file
    file_put_contents('data.json', json_encode($json_arr));

    echo 'Mise à jour de la carte dans la data '.$J.'.';
}

?>