module.exports = {
	globDirectory: 'components/',
	globPatterns: [
		'**/*.{zip,png,ico,js,css}'
	],
	swDest: 'components/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};