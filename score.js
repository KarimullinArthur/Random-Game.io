// const time = 1000;
// 	step = 1;

// function runNum(num, elem) {
// 	let l = document.querySelector('#' + elem);
// 	n = 0;
// 	let t = Math.round(time / (num / step));
// 	let interval = setInterval(() => {
// 		n = n + step;
// 		if (n == num) {
// 			clearInterval(interval);
// 		}
// 		l.innerHTML = n
// 	},
// 		t);
// }

function score() {
	document.getElementById("wins").innerHTML = `Побед ${wins}`
	};
function ball() {
	document.getElementById("ball").innerHTML = `Баланс ${balans + currency+"'ов"}`
	};


