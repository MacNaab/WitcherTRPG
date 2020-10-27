function test(){
	console.log(JSON_FICHE);
	JSON_FICHE.Age = "25 ans";
	JSON_FICHE.Race = "Elfe";
	var obj = JSON_FICHE;
	var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));

	$('<a href="data:' + data + '" download="data.json">download JSON</a>').appendTo('#app');
}
