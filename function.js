 //beck

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function easyGame(){
	z = random(1,5)

	console.log(`Ответ: ${z}`)

	x = prompt("Введите число");

	y = y = 1;

	if (x == z ) {
		alert("Вы угадали!")
		wins++
		balans = balans + easyLvl;
	}

	else {
		alert(`Правильный ответ ${z}`);
		lose++
	}

	console.log(`Число побед: ${wins}`)
	console.log(`Поражений: ${lose}`)
	console.log(`Баланс: ${balans + currency}`)
	console.log(`y = ${y}`)
	score()
	stat()
	ball()
}

function normGame(){
	z = random(1,10)

	console.log(`Ответ: ${z}`)

	x = prompt("Введите число");

	y = y = 2;

	if (x == z ) {
		alert("Вы угадали!")
		wins++
		balans = balans + normLvl;
	}

	else {
		alert(`Правильный ответ ${z}`);
		lose++
	}

	console.log(`Число побед: ${wins}`)
	console.log(`Поражений: ${lose}`)
	console.log(`Баланс: ${balans + currency}`)
	console.log(`y = ${y}`)
	score()
	stat()
	ball()
}

function hardGame(){
	z = random(1,100)

	console.log(`Ответ: ${z}`)

	x = prompt("Введите число");

	y = y = 3;

	if (x == z ) {
		alert("Вы угадали!")
		wins++
		balans = balans + hardLvl;
	}

	else {
		alert(`Правильный ответ ${z}`);
		lose++
	}

	console.log(`Число побед: ${wins}`)
	console.log(`Поражений: ${lose}`)
	console.log(`Баланс: ${balans + currency}`)
	console.log(`y = ${y}`)
	score()
	stat()
	ball()
}




function score() {
	document.getElementById("wins").innerHTML = wins
	};



function replay(){
	game = (y == 1) ? easyGame(): null;
	game = (y == 2) ? normGame(): null;
	game = (y == 3) ? hardGame(): null;
		score()
			stat()
				ball()
}


function headsOrTails(){
	alert('"Орёл или Решка" работают так:\n Вы введите сумму и если вы выигрываете,то вы получаете в два раза большено,но если нет то вся сумма сгорает \n Всё или ничего!')
	investHOT = prompt('Введите сумму:')
		if (investHOT > balans){
			alert("Не хватает RanCoin'ов");
			whatHOT2--
		}
		if (whatHOT2 == 0) {
		whatHOT = confirm('Вы уверены?')
	}
		
	if (whatHOT == true && investHOT <= balans) {
		whatHOT2 = prompt('Орёл или решка?')
		console.log(z)
		console.log(whatHOT)
		console.log(investHOT)
		z = random(1,2)
		if (z == 2) {
			alert(`ЕЕхууу + ${investHOT*2}\n Вот это удача!`);
			balans = balans + (investHOT*2);
			wins++;
		} 
		 else {
			alert('Эхх не удача, в следущий раз повезёт!');
			balans = balans - investHOT;
		}
	score()
	stat()
	ball()
	}
}

function buyHOT(){
	buyhot = confirm("Этот режим стоит 20 RanCoin'ов \n Купить?")
	if (buyhot == true && balans >= 20) {
		document.getElementById("headsOrTails").style.color = '#EB2727';
		balans = balans - 20;ball();
		document.getElementById("headsOrTails").setAttribute('onclick','headsOrTails()');
	}else {
		alert(`На вашем счету не достаточно средств!\nУ вас всего ${balans+''+currency}'`)
	}
	
}



//front
function dark(){
	document.body.style.backgroundColor = "#292929";
	document.getElementById("dark").src = 'month-white.png';
	document.getElementById("light").src = 'sun-white.png';

}



function light(){
	document.body.style.backgroundColor = "#FFFFFF";
	document.getElementById("light").src = 'sun.png';
	document.getElementById("dark").src = 'month.png';

}