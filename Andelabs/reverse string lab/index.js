function reverseString(word){
	if(typeof word !== "string"){					//check if argument is a string
		return 'false argument';
	}

	if (word === ''){
		return null;
	}

	reversed = word.split("").reverse().join("");	//split- separate letters into array, reverse array, join letters back into string

	if (word === reversed){
		return true;
	}

	return reversed;
}


module.exports = {
	reverseString: reverseString
}
