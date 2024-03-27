const fs = require('fs');
const path = require('path');

function createFiles(file) {
	try {
		const fileName = file + '.ts';

		const sourceFilePath = path.join(__dirname, 'files', fileName);

		const destinationDirPath = path.join(process.cwd(), 'app');

		copyFile(sourceFilePath, destinationDirPath, fileName);

		console.log(`${fileName} file created successfully.`);
	} catch (error) {
		console.error(`Error creating ${fileName} file:`, error);
	}
}

function copyFile(sourceFile, targetDir, fileName) {
	try {
		const destFile = path.join(targetDir, fileName);
		fs.copyFileSync(sourceFile, destFile);
	} catch (error) {
		console.error(`Error copying ${fileName} file:`, error);
	}
}

module.exports = createFiles;
