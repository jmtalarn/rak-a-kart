export function capitalize(string) {
	return string.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
};
