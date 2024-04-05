#!/usr/bin/env node

/**
 * jrui-cli
 * Allows for installing files and dependencies for custom jrui components, sections, and features
 *
 * @author Jordan Ready <www.jordanready.com>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const addComponent = require('./utils/add-component');
const createFiles = require('./utils/add-files');
const setup = require('./utils/setup');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;
const { components } = require('./utils/cli');

(async () => {
	init({ clear });
	if (input.includes(`help`)) {
		cli.showHelp(0);
	}
	debug && log(flags);
	console.log('You are Awesome!!!');

	if (input.includes('setup')) {
		setup();
	}

	if (input.includes('create')) {
		const filesNames = input.slice(1);
		if (filesNames.length === 0) {
			console.error('No file names provided.');
			process.exit(1);
		}
		filesNames.forEach(fileName => {
			if (fileName === 'not-found') {
				createFiles(fileName, 'tsx'); // Use 'tsx' extension for "not-found"
			} else {
				createFiles(fileName, 'ts'); // Use 'ts' extension for other filenames
			}
		});
		console.log('All files have been installed! Enjoy!');
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
