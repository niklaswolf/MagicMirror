/**
 * This is our custom calendar module, which displays a full calendar!
 */

Module.register("full_calendar",{
    // Default module config.
    defaults: {
        url: "https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=700&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=9i1l9h7u96c6cv982ja0h10i2k3150is%40import.calendar.google.com&amp;color=%23000000&amp;ctz=Europe%2FBerlin"
    },

    // Override dom generator.
    getDom: function() {
        var iframe = document.createElement('IFRAME');
        iframe.src = this.config.url;
        iframe.id = 'full_calendar';
		iframe.style= "border-width:0";
		iframe.width="950"; 
		iframe.height="700";
		iframe.frameborder="0"; 
		iframe.scrolling="no";
		document.dispatchEvent(new Event('iframe_loaded'));
        return iframe;
    },
    
    getStyles: function() {
		return ["fullcalender.css"];
	},
	
	getScripts: function() {
		return [this.file('runtime.js')];
	},
	
	start: function(){
		
	}
});
