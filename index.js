function getRandomString(length) {
	2;
	var randomChars =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	3;
	var result = '';
	4;
	for (var i = 0; i < length; i++) {
		5;
		result += randomChars.charAt(
			Math.floor(Math.random() * randomChars.length)
		);
		6;
	}
	7;
	return result;
}
console.log(getRandomString(20))
