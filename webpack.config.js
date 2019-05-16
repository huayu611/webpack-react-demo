const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlgin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
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
  output: {
    path: __dirname + '/dist',
    publicPath: './',
    filename: '[name].[hash].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({chunks:'?',template:'src/document.ejs'}),
    new CleanWebpackPlgin(),
  ],
  devServer: {
    contentBase: './dist',
  },
  externals : {
    "react": "window.React",
    "react": "React",
    "react-dom": "window.ReactDOM",
  },

};
