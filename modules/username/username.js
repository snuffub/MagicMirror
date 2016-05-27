/* global Module */

/* Magic Mirror
 * Module: Username 
 *
 * By Andrew Jennings
 */

Module.register("counter",{

	// Default module config.
	defaults: {
		text: ""
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});
