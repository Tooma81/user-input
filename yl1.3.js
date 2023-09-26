const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question('Sisestage astme alus: ', alus => {
	readline.question('Sisestage astendaja: ', astendaja => {
		console.log(Math.pow(alus, astendaja));
		readline.close();
	})
});