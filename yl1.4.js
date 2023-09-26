const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question('Sisetage oma nimi:  ', nimi => {
	readline.question('Sisestage lubatud kiirus (km/h): ', piirKiirus => {
		readline.question('Sisestage tegelik kiirus (km/h): ', tegelikKiirus => {
			yletus = parseInt(tegelikKiirus) - parseInt(piirKiirus)
			trahv = yletus * 3
			trahvPiiriga = Math.min(190, trahv)
			console.log(nimi + ', kiiruse ületamise eest on teie trahv ' + 
				trahvPiiriga + ' eurot.')
			readline.close();
		})
	})
});