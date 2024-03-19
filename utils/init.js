const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = ({ clear = true }) => {
	unhandled();
	welcome({
		title: `jrui-cli`,
		tagLine: `by Jordan Ready`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#9333ea',
		color: '#000000',
		bold: true,
		clear
	});
};
