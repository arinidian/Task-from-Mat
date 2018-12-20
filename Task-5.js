// function insertElement(){
	var values = new Array(4);
	values[0] = ["1234567890", "Dian Dwi Arini", "if-38-01"];
	values[1] = ["1234567891", "Rachmi Azanisa Putri", "if-38-02"];
	values[2] = ["1234567892", "Mirah Eka D.", "if-38-02"];
	values[3] = ["1234567893", "Matias Alvin S.", "if-38-03"];

	var col = document.getElementsByTagName("th");
	var tbody = document.createElement("tbody");
	var myTable = document.getElementById("myTable");


		for (i=0; i<values.length; i++){
			var tr = document.createElement("tr");
			for (j=0; j<values[i].length; j++){
					var td = document.createElement("td");
					var text = document.createTextNode(values[i][j]);
					td.appendChild(text);
					tr.appendChild(td);
			}
			tbody.appendChild(tr);
			myTable.appendChild(tbody);

		}
		

// }