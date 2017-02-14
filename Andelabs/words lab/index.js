function words(text){
	text = text.replace(/(^\s*)|(\s*$)/gi, "");		//remove every space at the beginning and end of the string
	text = text.replace(/\s+/g, ' ');				//replace every white space in between with single space
	var words = text.split(" ");					//get an array of words in text
	result = {};

	for (word of words){						//iterate over the array
		var count = 0;
		for (other of words){					//compare words in the array
			if (word === other){				//check for equality of words
				count ++;
			}
		}
		result[word] = count;					//add word with frequency to object
	}
	return result;
}


module.exports = {
	words: words
}
