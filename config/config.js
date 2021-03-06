/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,

	language: 'de',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'alert',
		},
		{
			module: 'clock',
			position: 'left',
			classes: '/hide'
		},
		{
			module: 'calendar',
			header: 'Kalender',
			position: 'left',
			config: {
				maximumEntries:3,
				timeFormat: 'absolute',
				fade: false,
				urgency: 0,
				calendars: [
					{
						symbol: 'calendar-check-o',
						url: 'webcal://p11-calendarws.icloud.com/ca/subscribe/1/YnlOe2Ee4msfLRX-QRVuQk41sWaBegx9gkrUE1VcmRyANrP647m-po-y6hkdqnVj'
					}
				]
			}
		},
		{
			module: 'calendar',
			header: 'Kalender',
			position: 'middle_center',
			classes: "fullcal hide",
			config: {
				maximumEntries:10,
				maxTitleLength: 40,
				timeFormat: 'absolute',
				fade: false,
				urgency: 0,
				calendars: [
					{
						symbol: 'calendar-check-o',
						url: 'webcal://p11-calendarws.icloud.com/ca/subscribe/1/YnlOe2Ee4msfLRX-QRVuQk41sWaBegx9gkrUE1VcmRyANrP647m-po-y6hkdqnVj'
					}
				]
			}
		},
		{
			module: 'compliments',
			position: 'middle_bottom',
			classes: '/hide',
			config: {
				compliments: {
					morning: [
						"Guten Morgen!",
						"Genieße den schönen Tag!",
						"Gut geschlafen?"
					],
					afternoon: [
						"Hallo, Beauty!",
						"Du siehst sexy aus!",
						"Gut siehst du aus!",
						"Geile Sau!"
					],
					evening: [
						"Wow, du siehst gut aus!",
						"Wunderschön!",
						"Hi, sexy!"
					]
				}
			}
		},
		{
			module: 'currentweather',
			position: 'right',
			config: {
				location: 'Deggendorf,Germany',
				appid: 'f5c0d7ebbbf7c09e577f9d8b85c9151e',				
			}
		},
		{
			module: 'weatherforecast',
			position: 'right',
			header: 'Weather Forecast',
			classes: '/hide',
			config: {
	            location: 'Deggendorf,Germany',
	            appid: 'f5c0d7ebbbf7c09e577f9d8b85c9151e'
			}
		},
		{
			module: 'newsfeed',
			position: 'left',
			classes: '/hide',
			config: {
				feeds: [
					{
						title: "Short News",
						url: "http://shortnews.de/rss/Alles.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
			module: 'newsfeed',
			position: 'middle_center',
			classes: 'hide fullnews',
			config: {
				feeds: [
					{
						title: "Short News",
						url: "http://shortnews.de/rss/Alles.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				showDescription: true
			}
		},
		{
			module: 'full_calendar',
			position: 'middle_center',
			classes: 'hide',
			config: {
				url:'https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=2&amp;bgcolor=%23000000&amp;src=9i1l9h7u96c6cv982ja0h10i2k3150is%40import.calendar.google.com&amp;color=%2342104A&amp;ctz=Europe%2FBerlin',
			}
		},
		{
			module: 'speech_recognition',
			position: 'middle_top',
			classes: 'show-always',
			config: {
				listeningText : "Sag' etwas!",
			}
		},
		{
			module: 'help',
			position: 'middle_center',
			classes: 'hide',
			config: {
				contents : {
					'Zurück (zum Dashboard)' : ['Zurück', 'Gehe zurück'],
					'Kalender' : ['Zeige mir den Kalender', 'Zeige meine Termine'],
					'Radio' : ['Starte das Radio', 'Stoppe das Radio!'],
					'Nachrichten' : ['Zeige mir die Nachrichten'],
					'Aussehen' : ['Spieglein, Spieglein an der Wand...?'],
					
					
				}
			}
		}
		
		
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
