const fs = require('fs');
const path = require('path'); // Import the path module
const { execSync } = require('child_process');

function addComponent(componentName) {
	try {
		// Create components folder if it doesn't exist
		createComponentsFolder();

		// Add component files
		addComponentFiles(componentName);

		// Install dependencies
		installDependencies(componentName);

		console.log(`${componentName} component added successfully.`);
	} catch (error) {
		console.error(
			`Error adding ${componentName} component:`,
			error.message
		);
	}
}

function installDependencies(componentName) {
	// Determine dependencies based on component name
	let dependencies = '';
	switch (componentName) {
		case 'reveal':
			dependencies =
				'framer-motion react-intersection-observer react @types/react';
			break;
		case 'tooltip':
			dependencies =
				'framer-motion react-intersection-observer react @types/react';
			break;
		case 'hero':
			dependencies =
				'framer-motion react-intersection-observer react @types/react';
			createImgsFolder();
			addImgFiles(['JRuiLogo.png']);
			break;
		case 'userAvatar':
			dependencies = 'react @types/react';
			break;
		case 'userAvatarNextOAuthFirebase':
			dependencies = 'react @types/react';
			break;
		case 'theme-provider':
			dependencies = 'react @types/react next-themes';
			npxInstall('shadcn-ui@latest init');
			break;
		case 'themeToggle':
			dependencies = 'react @types/react next-themes lucide-react';
			break;

		default:
			console.error(`Unknown component: ${componentName}`);
			return;
	}

	// Install dependencies
	console.log('Installing dependencies...');
	execSync(`npm install ${dependencies}`, {
		stdio: 'inherit'
	});
}

function npxInstall(packageName) {
	// Execute npx install command
	execSync(`npx ${packageName}`, {
		stdio: 'inherit'
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

function createComponentsFolder() {
	// Create components folder if it doesn't exist
	const componentsDir = path.join(process.cwd(), 'components');
	if (!fs.existsSync(componentsDir)) {
		fs.mkdirSync(componentsDir);
		console.log('Created components folder.');
	}
}

function addComponentFiles(componentName) {
	// Determine path to component files directory
	const fileName =
		componentName.charAt(0).toUpperCase() + componentName.slice(1) + '.tsx';
	const componentFilesDir = path.join(__dirname, 'component-files', fileName);

	// Copy component file to components folder
	const componentsDir = path.join(process.cwd(), 'components');
	copyFile(componentFilesDir, componentsDir, componentName);
	console.log(`Added ${componentName} component files.`);

	// Handle renaming of files with multiple types
	if (componentName === 'userAvatarNextOAuthFirebase') {
		const sourceFile = path.join(
			componentsDir,
			'UserAvatarNextOAuthFirebase.tsx'
		);
		const targetFile = path.join(componentsDir, 'UserAvatar.tsx');
		renameFile(sourceFile, targetFile);
		updateNextConfigFile();
	}
}

function copyFile(sourceFile, targetDir, componentName) {
	const capitalizedComponentName =
		componentName.charAt(0).toUpperCase() + componentName.slice(1);
	const destFile = path.join(targetDir, capitalizedComponentName + '.tsx');
	fs.copyFileSync(sourceFile, destFile);
}

function renameFile(sourceFile, targetFile) {
	try {
		fs.renameSync(sourceFile, targetFile);
		console.log(`Renamed ${sourceFile} to ${targetFile} successfully.`);
	} catch (error) {
		console.error(`Error renaming ${sourceFile} to ${targetFile}:`, error);
	}
}

function updateNextConfigFile() {
	const filePath = path.join(__dirname, 'next.config.mjs');
	const configFileContent = `/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
    loader: "default",
  },
};

export default nextConfig;
`;

	try {
		if (fs.existsSync(filePath)) {
			// If the file exists, replace its contents
			fs.writeFileSync(filePath, configFileContent);
			console.log('next.config.mjs file updated successfully.');
		} else {
			// If the file does not exist, create it and write the content
			fs.writeFileSync(filePath, configFileContent);
			console.log('next.config.mjs file created successfully.');
		}
	} catch (error) {
		console.error('Error updating next.config.mjs file:', error);
	}
}

module.exports = addComponent;
