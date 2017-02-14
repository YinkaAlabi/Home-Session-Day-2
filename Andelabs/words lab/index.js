function words(text){
	text = text.replace(/(^\s*)|(\s*$)/gi, "");		//remove every space at the beginning and end of the string
	text = text.replace(/\s+/g, ' ');				//replace every white space in between with single space
	var words = text.split(" ");					//get an array of words in text
	result = {};

	for (word of words){
		var count = 0;
		for (other of words){
			if (word === other){
				count ++;
			}
		}
		result[word] = count;	
	}
	return result;
}


module.exports = {
	words: words
}
