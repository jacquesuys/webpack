var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: ['./src/index.js', './styles/style.scss'],
	output: {
		path: __dirname,
		filename: 'app/js/bundle.js'
	},
	resolve: {
    extensions: ["", ".js", ".scss"]
	},
	devServer: {
		port: 3000,
		inline: true
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
        	presets:['es2015', 'react']
      	}
			},
			{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
        	'style', // backup loader when not building .css file
        	'css?sourceMap!sass?sourceMap' // loaders to preprocess CSS
        )
      }
		]
	},
	plugins: [new ExtractTextPlugin('./app/css/style.css')]
}