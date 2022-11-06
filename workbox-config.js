module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{vue,css,scss,svg,png,js,json}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};