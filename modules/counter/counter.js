/* global Module */

/* Magic Mirror
 * Module: Counter 
 *
 * By Andrew Jennings
 */

Module.register("counter",{

	// Default module config.
	defaults: {
		text: "Count = "
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});
