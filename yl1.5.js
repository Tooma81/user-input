const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question('Sisetage ainepunktide arv: ', ainepunktid => {
	readline.question('Sisetage nädalate arv: ', n4dalad => {
		console.log(Math.round(26 * ainepunktid / n4dalad));
		readline.close();
	})
});