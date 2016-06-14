/* funktioniert leider (noch) nicht, weil localhost auf http läuft und der Kalender auf https
document.addEventListener('iframe_loaded', function (e){
	setTimeout(function(){
		var iframe = document.getElementById('full_calendar');
		var innerDoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
		innerDoc.getElementsByClassName('view-container-border').style.backgroundColor = '#000';
	} ,1000);
});
*/