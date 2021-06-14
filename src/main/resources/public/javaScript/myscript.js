//var para = document.getElementById("id4711");
//para.textContent = "Hello from JavaScript";
//  fetch("http://localhost:8080/personen.json");
// var cell = document.getElementById("IdSabine");
//	fetch("personen.json")
//		.then( irgendwas => irgendwas.json() )
//		.then(myjson => console.log(myjson.personen[0].vorname));
// json einlesen
function getJson(irgendwas) { 	// irgendwas beinhaltet json mit allen kommunikations-metadaten
	return irgendwas.json();	// irgendwas.json ist der rheine json-inhalt
}

// celle ersetzen
function getTxtFromJsonUndPackInsHTML(myjson) {
	var tabelle = document.getElementById("tid001");
	var i = 1;
	for (var laufvariable of myjson.personen) {
		// neue Zeile am Ende der exist. Tabelle anfügen
		tabelle.insertAdjacentHTML("beforeend",
			"<tr>"
			+ `<td> ${i++} </td>`
			+ "<td><img src='" + getIcon(laufvariable.anrede) + "'></td>"
			+ "<td>" + laufvariable.anrede + "</td>"
			+ "<td>" + laufvariable.vorname + "</td>"
			+ "<td>" + laufvariable.nachname + "</td>"
			+ "</tr>")
		//		document.getElementById("id003").textContent = laufvariable.anrede;
		//		document.getElementById("id001").textContent = laufvariable.vorname;
		//		document.getElementById("id002").textContent = laufvariable.nachname;
	}
}


function getIcon(anrede) {
	switch (anrede) {
		case "Herr":
			return 'images/mann.png'
		case "Frau":
			return 'images/frau.png'
		default:
			return 'images/frau.png'
	}
}


function oninputclick(event) {
	event.preventDefault();          // verhindert GET Request
	console.log("click");

	var vorname = document.getElementById("vorname").value;
	console.log(vorname);

	var nachname = document.getElementById("nachname").value;
	console.log(nachname);

	var anrede = document.getElementById("anrede").value;
	console.log(anrede);

	var jsondata = `{"anrede": ${anrede}, "vorname": "${vorname}", "nachname": "${nachname}"}`;
	console.log(jsondata);

	fetch("http://localhost:8080/submitPerson", {
		method: 'POST',
		body: jsondata,
		headers: {
			'Content-Type': 'application/json'
		}
	});
}

var input = document.getElementById("button");
input.addEventListener("click", oninputclick);

fetch("personen.json")
	.then(getJson) 								//  entspricht: .then( irgendwas => irgendwas.json() )
	.then(getTxtFromJsonUndPackInsHTML); 		// entpricht: cell.textContent = myjson.personen[0].vorname);
