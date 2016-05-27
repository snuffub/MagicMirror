# Module: Username 
The Username module is a module that will display the current username
## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'username',
		position: 'bottom_bar',	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
			email: 'foo@bar.com'
			friendlyName: 'Andrew Jennings'
		}
	}
]
````

## Configuration options

The following properties can be configured:


<table width="100%">
	<!-- why, markdown... -->
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>

		<tr>
			<td><code>text</code></td>
			<td>The text to display.<br>
				<br><b>Example:</b> <code>'Hello world!'</code>
				<br><b>Default value:</b> <code>'Hello world!'</code>
			</td>
		</tr>
	</tbody>
</table>
