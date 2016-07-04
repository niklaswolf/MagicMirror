/**
 * 
 */

Module.register("speech_recognition",{
    // Default module config.
    defaults: {
    	listeningText : "sag etwas!",
    },

    recognizedText: '',
    
    // Override dom generator.
    getDom: function() {
    	var wrapper = document.createElement("div");
    	wrapper.className = "bright";
    	
    	var listening = document.createElement("div");
    	listening.className = 'listening';
    	listening.innerHTML = this.config.listeningText;
    	wrapper.appendChild(listening);
    	
    	var recognized = document.createElement("div");
    	recognized.className = 'recognized-text';
    	if(this.recognizedText){
    		recognized.innerHTML = '"'+this.recognizedText+'"';
    	}
		wrapper.appendChild(recognized);

		return wrapper;
    },
    
    getStyles: function() {
		return [this.file('speechRecognition.css')];
	},
	
	getScripts: function() {
		return [];
	},
	
	start: function(){
		var recognition = new webkitSpeechRecognition();
		var resultIndex = 0;
		var self = this;
		recognition.lang = "de-DE";
		recognition.continuous = false;
		recognition.interimResults = false;
		recognition.onresult = function(event) {
			var text = event.results[resultIndex][0].transcript;
			text = text.trim();
			resultIndex++;
			self.recognizedText = text;
			self.updateDom();
			console.log(text); 
			self.testInput(text);
			
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
		
	testInput : function (input){
		var input = input.toLowerCase();
		
		var compliment = {'className' : 'compliments', 'regexp' : /komplimente?/};
		this.testItem(compliment, input, null, /(?:zeige?n?)|(?:mache?n?)/);
		
		var clock = {'className' : 'clock', 'regexp' : /uhr(?:zeit)?/};
		this.testItem(clock, input, null, /(?:wie\sviel\s)|(?:zeige?n?)/);
		
		var newsfeed = {'className' : 'fullnews', 'regexp' : /nachricht?e?n?/};
		this.testItem(newsfeed, input, null, /(?:zeige?n?)/);
		
		var calendar = {'className' : 'fullcal', 'regexp' : /kalender/};
		this.testItem(calendar, input, null, /(?:zeige?n?)/);
		
		var help = {'className' : 'help', 'regexp' : /sagen/};
		this.testItem(help, input, null, /was/);
		
		this.radio(input);
		this.audio(input);
		
		this.testHome(input, /(?:gehe\s)?zurück/);
	},
	radio : function (input){
		var pause = /ausschalten?/;
		var start = /radio/;
		
		
		if (input.match(start)){
			document.getElementById('rock').play();
		}
		if (input.match(pause)){
			document.getElementById('rock').pause();
		}
	},
	audio : function (input){
		var pause = /stop(?:pe)?/;
		var start = /spieglein/;
			
		if (input.match(start)){
			document.getElementById('schoen').play();
		}
		if (input.match(pause)){
			document.getElementById('schoen').pause();
		}
	},
	testItem : function (item, input, hideKeywords=null, showKeywords=null){
		var hide = /schliesse?n?/;
		if(showKeywords){
			var show = showKeywords;
		} else {
			var show = /zeige?n?/;
		}
		
		// close the current module
		if (input.match(hide) && input.match(item.regexp)){
			var domObjects = document.getElementsByClassName('module');
			for (var i=0; i<domObjects.length; i++){
				//close module
				if(domObjects[i].classList.contains(item.className)){
					domObjects[i].classList.remove('show');
				}
				//show all other modules
				else {
					if(!domObjects[i].parentElement.parentElement.classList.contains('middle')){
						domObjects[i].classList.remove('hide');
					}
				}
			}			
		}
		// show the module
		else if (input.match(show) && input.match(item.regexp)){
			var domObjects = document.getElementsByClassName('module');
			for (var i=0; i<domObjects.length; i++){
				//show module
				if(domObjects[i].classList.contains(item.className)){
					domObjects[i].classList.add('show');
				}
				//hide all other modules
				else {
					domObjects[i].classList.add('hide');
					domObjects[i].classList.remove('show');
				}				
			}
		}
	},
	'testHome' : function (input, keyword){
		if (input.match(keyword)){
			var domObjects = document.getElementsByClassName('module');
			for (var i=0; i<domObjects.length; i++){
				//remove all show- and hide-classes
				domObjects[i].classList.remove('hide');
				domObjects[i].classList.remove('show');
				
				// add hide-class again to the fullscreen-modules
				if (domObjects[i].parentElement.parentElement.classList.contains('center')){
					domObjects[i].classList.add('hide');
				}
			}
		}
	},
});