<?php
// Modif un élément dans la DTB json
$Nom = $_POST['nom'];
$dtb = $_POST['dtb'];

// read file
$data = file_get_contents('pj.json');

// decode json to array
$json_arr = json_decode($data, true);

foreach ($json_arr as $key => $value) {
    if($key == $Nom){
        echo $key;
        $json_arr[$key] = $dtb;
    }
}

// encode array to json and save to file
file_put_contents('pj.json', json_encode($json_arr));
?>