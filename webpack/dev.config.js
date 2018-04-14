const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
  entry: {
    app: './wrapper/index.jsx',
  },

  output: {
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
  },

  devtool: 'eval-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],

  devServer: {
    inline: true,
    port: '3001',
    overlay: true
  }
});
