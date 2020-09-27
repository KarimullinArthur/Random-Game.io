const currency = "RanCoin"
	easyLvl = 10
	normLvl = 25
	hardLvl = 1500

let z = 0,
	x = 0,
	y = 1,
	step = 0,
	game = null,
	wins = 0,
	lose = 0,
	balans = 0,
	buyhot = 0,
	investHOT = 0, //HOT - HeadsOrTails
	whatHOT = 0,
	whatHOT2 = 0,
	cloneWins = 0,
	cloneLose = 0,
	bonus3step = [1, 0, 1, 0, 1, 0],
	u = 0,
	bonus3 = 7;

let winsForInRow = [];