var women = document.getElementsByClassName("women");

for (i=0; i<women.length;i++){

	var list = women[i].getElementsByTagName("li");
	for (j=0; j<list.length;j++){
		console.log(list[j].innerHTML);
	}
}