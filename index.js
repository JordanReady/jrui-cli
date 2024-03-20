#!/usr/bin/env node

/**
 * jrui-cli
 * Allows for installing files and dependencies for custom jrui components
 *
 * @author Jordan Ready <www.jordanready.com>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const addComponent = require('./utils/add-component');
const setup = require('./utils/setup');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);

	if (input.includes('setup')) {
		setup();
	}

	if (input.includes('add')) {
		const componentNames = input.slice(1);
		if (componentNames.length === 0) {
			console.error('No component names provided.');
			process.exit(1);
		}
		componentNames.forEach(componentName => {
			addComponent(componentName);
		});
		console.log(
			'All component files have been installed and are ready to be imported into your app! Enjoy!'
		);
	}
})();
