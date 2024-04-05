const fs = require('fs');
const path = require('path');

function createFiles(fileName, fileExtension) {
	try {
		const fullFileName = fileName + '.' + fileExtension;

		const sourceFilePath = path.join(__dirname, 'files', fullFileName);
		const destinationDirPath = path.join(process.cwd(), 'app');

		copyFile(sourceFilePath, destinationDirPath, fullFileName);

		console.log(`${fullFileName} file created successfully.`);

		// Check if the filename is "not-found" and call addImgFiles
		if (fileName === 'not-found') {
			createImgsFolder();
			addImgFiles(['404.png']);
		}
	} catch (error) {
		console.error(`Error creating ${fullFileName} file:`, error);
	}
}

function addImgFiles(imgs) {
	// Copy img files
	imgs.forEach(img => {
		const imgSrc = path.join(__dirname, 'img-files', img);
		const imgDest = path.join(process.cwd(), 'imgs', img);
		try {
			fs.copyFileSync(imgSrc, imgDest);
			console.log(`Added ${img} image file.`);
		} catch (error) {
			console.error(`Error copying ${img} image file:`, error);
		}
	});
}

function createImgsFolder() {
	// Create imgs folder if it doesn't exist
	const imgsDir = path.join(process.cwd(), 'imgs');
	if (!fs.existsSync(imgsDir)) {
		try {
			fs.mkdirSync(imgsDir);
			console.log('Created imgs folder.');
		} catch (error) {
			console.error('Error creating imgs folder:', error);
			process.exit(1); // Terminate process on error
		}
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
