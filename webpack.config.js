const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  'template': './src/index.html',
  'filename': 'index.html',
  'inject': 'body'
});


module.exports = {
  'devtool': 'cheap-eval-source-map',
  'entry': './src/index.js',
  'output': {
    'path': path.resolve(__dirname, 'dist'),
    'filename': 'bundle.js'
  },
  'module': {
    'rules': [
      { 'test': /\.js$/, 'loader': 'babel-loader', 'exclude': /node_modules/ },
      { 'test': /\.jsx$/, 'loader': 'babel-loader', 'exclude': /node_modules/ },
      { 'test': /\.css$/, 'use': ['style-loader', 'css-loader'] },
      { 'test': /\.(woff|woff2|eot|ttf|otf)$/, 'use': ['file-loader']}
    ]
  },
  'plugins': [HtmlWebpackPluginConfig]
};