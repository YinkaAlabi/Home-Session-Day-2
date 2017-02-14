function reverseString(word){
	if (word === ''){
		return null;
	}
	reversed = word.split("").reverse().join("");
	
	if (word === reversed){
		return true;
	}

	return reversed;
}


module.exports = {
	reverseString: reverseString
}