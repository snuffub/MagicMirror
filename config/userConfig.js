/* Magic Mirror user Config Sample
 * 
 * By Andrew Jennings
 */

var userConfig = {
	"user2@domain.com": 
	{
		language: 'en',
		timeFormat: 12,
		units: 'imperial',

		modules: [
			{
				module: 'clock',
				position: 'top_left'
			},
			{
				module: 'username',
				position: 'top_left',
				config: {
					email: 'user2@domain.com',
					FriendlyName: 'John Doe2',
					position:'top_left'
				}
			},

			{	
				module: 'calendar',
				header: 'US Holidays',
				position: 'top_left',
				config: {
					calendars: [
						{
							symbol: 'calendar-check-o ',
							url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
						}
					]
				}
			},
			{
				module: 'currentweather',
				position: 'top_right',
				config: {
					location: 'New York',
					appid: '27a399a2ae850a916711aa005ba2a436'
				}	
			},
			{
				module: 'weatherforecast',
				position: 'top_right',
				header: 'Weather Forecast',
				config: {
		            location: 'New York',
		            appid: '27a399a2ae850a916711aa005ba2a436'
				}
			},
			{
				module: 'newsfeed',
				position: 'bottom_left',
				config: {
					feeds: [
						{
							title: "New York Times",
							url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
						}
					],
					showSourceTitle: true,
					showPublishDate: true
				}
			},
			{
				module: 'newsfeed',
				position: 'bottom_left',
				config: {
					feeds: [
						{
							title: "Wall Street Journal",
							url: "http://www.wsj.com/xml/rss/3_7014.xml",
						}
					],
					showSourceTitle: true,
					showPublishDate: true
				}
			},
		]
	},	
	"user@domain.com": 
	{
		language: 'en',
		timeFormat: 12,
		units: 'imperial',

		modules: [
			{
				module: 'clock',
				position: 'top_left'
			},
			{
				module: 'username',
				position: 'top_left',
				config: {
					email: 'user@domain.com',
					FriendlyName: 'John Doe',
					position:'top_left'
				}
			},

			{	
				module: 'calendar',
				header: 'US Holidays',
				position: 'top_left',
				config: {
					calendars: [
						{
							symbol: 'calendar-check-o ',
							url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
						}
					]
				}
			},
			{
				module: 'currentweather',
				position: 'top_right',
				config: {
					location: 'New York',
					appid: '27a399a2ae850a916711aa005ba2a436'
				}	
			},
			{
				module: 'weatherforecast',
				position: 'top_right',
				header: 'Weather Forecast',
				config: {
		            location: 'New York',
		            appid: '27a399a2ae850a916711aa005ba2a436'
				}
			},
			{
				module: 'newsfeed',
				position: 'bottom_left',
				config: {
					feeds: [
						{
							title: "New York Times",
							url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
						}
					],
					showSourceTitle: true,
					showPublishDate: true
				}
			},
			{
				module: 'newsfeed',
				position: 'bottom_left',
				config: {
					feeds: [
						{
							title: "Wall Street Journal",
							url: "http://www.wsj.com/xml/rss/3_7014.xml",
						}
					],
					showSourceTitle: true,
					showPublishDate: true
				}
			},
		]
	}	

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
