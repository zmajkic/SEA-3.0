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
			+ "<td>" + laufvariable.id + "</td>"
			+ "<td>" + laufvariable.vorname + "</td>"
			+ "<td>" + laufvariable.nachname + "</td>"
			+ "<td>" + laufvariable.str + "</td>"
			+ "<td>" + laufvariable.hausnr + "</td>"
			+ "<td>" + laufvariable.plz + "</td>"
			+ "<td>" + laufvariable.ort + "</td>"
			+ "<td>" + laufvariable.email + "</td>"
			+ "</tr>")
	}
}
// Einbau der Bilder
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
// abfrage des clicks mit übergabe der Daten
function oninputclick(event) {
	event.preventDefault();		// verhindert, ()GET request) dass das event weiter vom browser verarbeitet wird
	console.log("click");
	var id = document.getElementById("id").value;
	console.log(id);
	var anrede = document.getElementById("anrede").value;
	console.log(anrede);
	var vorname = document.getElementById("vorname").value;
	console.log(vorname);
	var nachname = document.getElementById("nachname").value;
	console.log(nachname);
	var str = document.getElementById("str").value;
	console.log(str);
	var hausnr = document.getElementById("hausnr").value;
	console.log(hausnr);
	var plz = document.getElementById("plz").value;
	console.log(plz);
	var ort = document.getElementById("ort").value;
	console.log(ort);
	var email = document.getElementById("email").value;
	console.log(email);
	var jsondata = `{"id": "${id}", "anrede": "${anrede}", "vorname": "${vorname}", "nachname": "${nachname}", "str": "${str}","hausnr": "${hausnr}","plz": "${plz}","ort": "${ort}","email": "${email}"}`;



	console.log(jsondata);
	fetch("http://localhost:8080/json/person", {
		method: 'POST', // or 'PUT'
		body: jsondata,
		headers: {
			'Content-Type': 'application/json'
		}
	});
}

// submit button
var input = document.getElementById("button");
input.addEventListener("click", oninputclick);


function oninputdelclick(event) {
	event.preventDefault();
	var id = document.getElementById("id").value;
	console.log(id);

	fetch(`http://localhost:8080/json/person/${id}`, {  // Backtick
		method: 'DELETE'
	});
}


//  delete button
var inputdel = document.getElementById("delbutton");
inputdel.addEventListener("click", oninputdelclick);


fetch("http://localhost:8080/json/persons/all")
	.then(getJson) 								//  entspricht: .then( irgendwas => irgendwas.json() )
	.then(getTxtFromJsonUndPackInsHTML) 		// entpricht: cell.textContent = myjson.personen[0].vorname);

