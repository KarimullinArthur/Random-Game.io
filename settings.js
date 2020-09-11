//LvL-Status
function stat(){
	if (wins == 3) {
		document.getElementById("stat").innerHTML = "А в тебе что то есть...";//lvl 1
	}

		if (wins == 5) {
		document.getElementById("stat").innerHTML = "Да ты имеешь право существовать!";//lvl 2
	}

		if (wins == 10) {
		document.getElementById("stat").innerHTML = "А ты не плох";//lvl 3
	}

		if (wins == 20) {
		document.getElementById("stat").innerHTML = "Ах ты везунчик!";//lvl 4
	}

		if (wins == 30) {
		document.getElementById("stat").innerHTML = "Единички-мои-в-нолики, да ты экстрасенс!";//lvl 5
	}
}
