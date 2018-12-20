var firstCol = document.getElementById("firstcol");
var secondCol = document.getElementById("secondcol");
var btnSmall = document.getElementById("smaller");
var btnBig = document.getElementById("bigger");
var compare = document.getElementById("compare");

firstCol.innerHTML = 'Please press start first';
secondCol.innerHTML = 'Please select your guess';

function startGame(){
	if (btnSmall.disabled == true & btnBig.disabled == true){
		btnSmall.disabled = false;
		btnBig.disabled = false;
		firstCol.innerHTML = Math.random();
	}else{
		firstCol.innerHTML = Math.random();
		compare.innerHTML = '';
		secondCol.innerHTML = 'Please select your guess';
	}
}

function guessSmall(){
	secondCol.innerHTML = Math.random();
	if (firstCol.innerHTML > secondCol.innerHTML){
		compare.innerHTML = 'You guess right^^';
		compare.style.color = "green"
	}else{
		compare.innerHTML = 'You guess WRONG!!';
		compare.style.color = "red"	
	}
}

function guessBig(){
	secondCol.innerHTML = Math.random();
	if (firstCol.innerHTML < secondCol.innerHTML){
		compare.innerHTML = 'You guess right^^';
		compare.style.color = "green"
	}else{
		compare.innerHTML = 'You guess WRONG!!';
		compare.style.color = "red"	
	}
}