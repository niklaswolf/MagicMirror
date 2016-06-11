/**
 * 
 */

var speechRecognition = {
	'start' : function () {
		var recognition = new webkitSpeechRecognition();
		var resultIndex = 0;
		recognition.lang = "de-DE";
		recognition.continuous = false;
		recognition.interimResults = false;
		recognition.onresult = function(event) {
			var text = event.results[resultIndex][0].transcript;
			text = text.trim();
			resultIndex++;
			console.log(text); 
			speechRecognition.testInput(text);
			
		}
		recognition.onerror = function(event) { 
			  console.log(event) 
		}
		recognition.onend = function(){
			console.log('restart');
			resultIndex = 0;
			recognition.start();
		}
		recognition.start();
	},
	'testInput' : function (input){
		var input = input.toLowerCase();
		
		var compliment = {'className' : 'compliments', 'regexp' : /komplimente?/};
		speechRecognition.testItem(compliment, input, null, /(?:zeige?n?)|(?:mache?n?)/);
		
		var clock = {'className' : 'clock', 'regexp' : /uhr(?:zeit)?/};
		speechRecognition.testItem(clock, input, null, /(?:wie\sviel\s)|(?:zeige?n?)/);
		
		var newsfeed = {'className' : 'fullnews', 'regexp' : /nachricht?e?n?/};
		speechRecognition.testItem(newsfeed, input, null, /(?:zeige?n?)/);
		
		var calendar = {'className' : 'gcal', 'regexp' : /kalender/};
		speechRecognition.testItem(calendar, input, null, /(?:zeige?n?)/);
		
		speechRecognition.music(input);
	},
	'music' : function (input){
		var pause = /fresse/;
		var radio = /radio?/;
		var music = /musi?k?c?/;
		
		if (input.match(radio) || input.match(music)){
			document.getElementById('rock').play();
		}
		if (input.match(pause)){
			document.getElementById('rock').pause();
		}
	},
	'testItem' : function (item, input, hideKeywords=null, showKeywords=null){
		var hide = /schließe?n?/;
		if(showKeywords){
			var show = showKeywords;
		} else {
			var show = /zeige?n?/;
		}
		
		if (input.match(hide) && input.match(item.regexp)){
			var domObject = document.getElementsByClassName(item.className)[0];
			domObject.classList.add('hide');
			domObject.classList.remove('show');
		}
		else if (input.match(show) && input.match(item.regexp)){
			var domObject = document.getElementsByClassName(item.className)[0];
			domObject.classList.add('show');
			domObject.classList.remove('hide');
		}
	}

}
speechRecognition.start();