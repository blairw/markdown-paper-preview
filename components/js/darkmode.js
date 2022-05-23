function setDarkModeAccordingToBrowser() {
	// Adapted from https://stackoverflow.com/questions/50840168/how-to-detect-if-the-os-is-in-dark-mode-in-browsers
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		setDarkMode(true);
	} else {
		setDarkMode(false);
	}
}

function setDarkMode(isDarkMode) {
	if (isDarkMode) {
		
	} else {
		
	}
}
