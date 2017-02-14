var XMLHttpRequest = require
					("C:\/Users\/Yinka Alabi\/AppData\/Roaming\/npm\/node_modules\/xmlhttprequest").XMLHttpRequest;	//require("xmlhttprequest")
var client = new XMLHttpRequest();
client.open("GET", "https://api.github.com/emojis", true);

client.onload = function (e) {
 	if (client.readyState === 4) {

 	   if (client.status === 200) {
    		var result = JSON.parse(client.responseText);
      		console.log(result);
      		console.log(client.status);
	  		console.log(client.statusText);
	  		
    	}

    	else {
      		console.error(client.statusText);
    	}
  	}
};

client.onerror = function (e) {
 	console.error(client.statusText);
};

client.send(null);