const path = require('path');
const webpack = require('webpack');
const vueConfig = require('./vue-loader.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const WebpackStrip = require('strip-loader');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	devtool: isProd
	? false
	: '#cheap-module-source-map',
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/dist/',
		filename: '[name].[chunkhash].js'
	},
	resolve: {
		alias: {
			'public': path.resolve(__dirname, '../public')
		}
	},
	module: {
		// 去掉consoel.log
		// loaders: [
		// 	{test: /\.js$/, loader: WebpackStrip.loader('debug', 'console.log')}
		// ],
		noParse: /es6-promise\.js$/, // avoid webpack shimming process
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: vueConfig
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: '[name].[ext]?[hash]'
				}
			},
			{
				test: /\.css$/,
				use: isProd
				? ExtractTextPlugin.extract({
					use: 'css-loader?minimize',
					fallback: 'vue-style-loader'
				})
				: ['vue-style-loader', 'css-loader']
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				loader: 'file-loader'
			},
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "less-loader", options: {
						strictMath: true,
						noIeCompat: true
					}
				}, {
					loader: "postcss-loader"
				}]
			}
		]
	},
	performance: {
		maxEntrypointSize: 300000,
		hints: isProd ? 'warning' : false
	},
	plugins: isProd
	? [
		new webpack.optimize.UglifyJsPlugin({
			compress: {warnings: false}
		}),
		new ExtractTextPlugin({
			filename: 'common.[chunkhash].css'
		})
	]
	: [
		new FriendlyErrorsPlugin()
	]
};
