function test(){
//	var obj = {a: 123, b: "4 5 6"};
	console.log(JSON_FICHE.test);
	JSON_FICHE.test.Age = "25 ans";
	JSON_FICHE.test.Race = "Elfe";
	var obj = JSON_FICHE;
	var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));

	$('<a href="data:' + data + '" download="data.json">download JSON</a>').appendTo('#app');
}