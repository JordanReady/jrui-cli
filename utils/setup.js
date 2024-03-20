const fs = require('fs');
const path = require('path');

function setup() {
	// Determine the directory where the globals.css file should be located (app or src)
	const appDir = path.join(process.cwd(), 'app');
	const srcDir = path.join(process.cwd(), 'src');
	const appGlobalsPath = path.join(appDir, 'globals.css');
	const srcGlobalsPath = path.join(srcDir, 'globals.css');

	let globalsPath = '';

	// Check if globals.css exists in the app directory
	if (fs.existsSync(appGlobalsPath)) {
		globalsPath = appGlobalsPath;
	}
	// Check if globals.css exists in the src directory
	else if (fs.existsSync(srcGlobalsPath)) {
		globalsPath = srcGlobalsPath;
	}
	// If globals.css doesn't exist in either directory, log an error
	else {
		console.error('Error: globals.css not found in app or src directory.');
		return;
	}

	// Read the content of the utils/globals.css file from your CLI project
	const utilsGlobalsPath = path.join(__dirname, 'globals.css');
	const utilsGlobalsContent = fs.readFileSync(utilsGlobalsPath, 'utf8');

	// Update the globals.css file in the user's project with the content from utils/globals.css
	fs.writeFileSync(globalsPath, utilsGlobalsContent);
	console.log('globals.css file updated successfully.');
}

module.exports = setup;
