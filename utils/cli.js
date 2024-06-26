const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: false,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	componentName: {
		type: `string`,
		desc: `Name of the component`
	}
};

const commands = {
	help: { desc: `Print help info` },
	setup: { desc: `Setup custom styles in globals.css file` },
	add: { desc: `Add a new component` },
	create: { desc: `Create non-component files` }
};

const helpText = meowHelp({
	name: `jrui`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
