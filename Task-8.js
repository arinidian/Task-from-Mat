	function populateTable(){
		var httpRequest = new XMLHttpRequest();

		httpRequest.open("GET","https://kitsu.io/api/edge/trending/anime?sort=-ratingRank",true);
		httpRequest.setRequestHeader('Content-Type', 'application/vnd.api+json');
		httpRequest.send();

		httpRequest.onreadystatechange = function(){
			if (this.readyState == httpRequest.DONE && this.status == 200 ) {
					var response = JSON.parse(httpRequest.responseText);
					insertTable(response)
			} else {
				alert('There was a problem');
			}
			
		};
	}

	function insertTable(response) {
		console.log(response.data)
		var local_data = response.data;
		var row_data = '';
		for (var i = 0; i < local_data.length; i++){
			// var img = document.createElement('img');
			// img.src = 'local_data[i].img_url';
			var row_data = row_data + '<tr>' + 
			' <td>' + local_data[i].attributes.ratingRank + '</td>' +
			' <td>' + local_data[i].attributes.titles.en + '</td>' +
			' <td>' + local_data[i].attributes.averageRating + '</td>' +
			' <td>' + '<img src=' + local_data[i].attributes.posterImage.tiny + '>' + '</td>' + 
			'</tr>';
			
		}
		var table_body_element = document.createElement('tbody');
		table_body_element.innerHTML = row_data;
		document.getElementById('myTable').appendChild(table_body_element);
		// 	console.log(dataArray[i].mal_id + ',' + dataArray[i].rank + ',' + dataArray[i].title );
		// 	var url = dataArray[i].image_url;
		// 	// url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
		// 	// //this removes the query after the file name, if there is one
		// 	// url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
		// 	// //this removes everything before the last slash in the path
		// 	// url = url.substring(url.lastIndexOf("/") - 1, url.length);
		// 	//return
		// 	img = document.createElement('img');
		// 	img.src = url;
		// 	myImage.appenChild(img);
		// }	
	}

	function clearTable(){
		Table = document.getElementById("myTable");
		row = Table.getElementsByTagName('tbody');
		Table.removeChild(row[1]);
	}






