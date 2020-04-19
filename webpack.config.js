const path = require('path');

const distributionDirectory = path.join(__dirname, './dist');

module.exports = {
	entry: 			"./client/react/index.js",
	output: {
		path: 		distributionDirectory,
		filename: 	"bundle.js"
	},
	module: {
		rules: [
			{
				exclude: /(node_modules)/,
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				exclude: /(node_modules)/,
				test: /js?$/,
				loader: "babel-loader"
			},
			{
				exclude: /(node_modules)/,
				test: /\.(jpg|png|svg)$/,
				loader: "url-loader"
			}
		]
	}
}