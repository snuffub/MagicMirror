/* Magic Mirror Config Sample
 * 
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	
	language: userConfig["user2@domain.com"].language,
	timeFormat: userConfig["user2@domain.com"].timeFormat,
	units: userConfig["user2@domain.com"].units,

	currentUser: 'foo@domain.com',
	modules: userConfig["user2@domain.com"].modules
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
