/* global Module */

/* Magic Mirror
 * Module: Username 
 *
 * By Andrew Jennings
 */

Module.register("username",{

	// Default module config.
	defaults: {
		text:"Empty Name"
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.FriendlyName;
		return wrapper;
	}
});
