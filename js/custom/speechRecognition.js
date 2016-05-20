/**
 * 
 */

var recognition = new webkitSpeechRecognition();
var resultIndex = 0;
recognition.lang = "de-DE";
recognition.continuous = true;
recognition.interimResults = false;
recognition.onresult = function(event) {
	var text = event.results[resultIndex][0].transcript;
	text = text.trim();
	if (text.toLowerCase() == 'komplimente weg'){
		document.getElementById('module_3_compliments').className += ' hide';
	} 
	resultIndex++;
  console.log(text); 
}
recognition.onerror = function(event) { 
	  console.log(event) 
	}
recognition.onend = function(){
	recognition.start();
}
recognition.start();