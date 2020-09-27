function score() {
	document.getElementById("wins").innerHTML = `Побед ${wins}`;
	winsInRow();
	cloneWins = 0;
	cloneLose = 0;
	step++;

	if (u == true) {
	winsForInRow.length = [];
	} 
	// else if (a == a || b || c) {winsForInRow.length = 0;}

	console.log(`Число побед: ${wins}`)
	console.log(`Поражений: ${lose}`)
	console.log(`Баланс: ${balans + currency}`)
	console.log(`y = ${y}`)
	console.log(`Попыток ${step}`);
	console.log(`cloneWins ${cloneWins}`);
	console.log(`cloneLose ${cloneLose}`);
	
	};
function ball() {
	document.getElementById("ball").innerHTML = `Баланс ${balans + currency+"'ов"}`
	};


