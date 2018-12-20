var httpRequest = new XMLHttpRequest();


httpRequest.onreadystatechange = function(){
	if (httpRequest.readyState == httpRequest.DONE ) {
		if (httpRequest.status == 200) {
			var response = JSON.parse(httpRequest.responseText);
            console.log(response);
            console.log(response.data[0].attributes.titles.en)
		} else {
			alert('There was a problem');
		}
	}
};

// httpRequest.open("GET","https://api.jikan.moe/top/anime/1/",true);
httpRequest.open("GET","https://kitsu.io/api/edge/trending/anime",true);
// httpReuest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
httpRequest.send();