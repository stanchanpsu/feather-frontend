const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  'template': './src/index.html',
  'filename': 'index.html',
  'inject': 'body'
});


module.exports = {
  'devtool': 'cheap-eval-source-map',
  'node': {
    'fs': 'empty',
    'net': 'empty', 
    'tls': 'empty'
  },
  'entry': './src/index.js',
  'output': {
    'path': path.resolve(__dirname, 'dist'),
    'filename': 'bundle.js'
  },
  'module': {
    'rules': [
      { 'test': /\.(js|jsx)$/, 'loader': 'babel-loader', 'exclude': /node_modules/ },
      { 'test': /\.(scss|css)$/, 'use': ['style-loader', 'css-loader', 'sass-loader'] },
      { 'test': /\.(woff|woff2|eot|ttf|otf)$/, 'use': ['file-loader?outputPath=fonts/']}
    ]
  },
  'plugins': [HtmlWebpackPluginConfig],
  'devServer': {
    'historyApiFallback': true,
    'contentBase': './',
    'host': process.env.IP,
    'port': process.env.PORT,
    "public": "feather-frontend.sman5922.c9users.io" //no trailing slash
    }
};