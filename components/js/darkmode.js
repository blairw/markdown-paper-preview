var globalCurrentDarkMode = false;

function setDarkModeAccordingToBrowser() {
	// Adapted from https://stackoverflow.com/questions/50840168/how-to-detect-if-the-os-is-in-dark-mode-in-browsers
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		globalCurrentDarkMode = true;
	} else {
		globalCurrentDarkMode = false;
	}
	setDarkMode();
}

function setDarkMode() {
	if (globalCurrentDarkMode) {
		$("body").addClass("isDarkMode");
		$("body").removeClass("isLightMode");
	} else {
		$("body").removeClass("isDarkMode");
		$("body").addClass("isLightMode");
	}
}

function toggleDarkMode() {
	globalCurrentDarkMode = !globalCurrentDarkMode;
	setDarkMode();
}
