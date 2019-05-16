const webpack = require('webpack');
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dev',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [
    new HotModuleReplacementPlugin(),
    new openBrowserWebpackPlugin(),
  ],
  devServer: {
    contentBase: './dev',
    hot: true
  },
  performance: {
    hints: "warning",
    maxAssetSize: 999999999,
    maxEntrypointSize: 999999999,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  devtool: 'inline-source-map',
}
