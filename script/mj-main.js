var JSON_FICHE = "";
var joueur = "";
$.getJSON('data/pj.json', function(jd) {
	JSON_FICHE = jd;
});
var JSON_wiki = ""
$.getJSON('data/wiki.json', function(jd) {
	JSON_wiki = jd;
});

function todtb(e,f){
    $.ajax({
        url: "data/pj.php",
        type: "POST",
        data: {
            nom: e,
            dtb: f,
        },
        cache: false,
        success: function(data){
            console.log(data)
        }
    });
}