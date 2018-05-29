const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/
      },
      {
        test: /.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'url-loader'
        ]
      }
    ]
  },

  // Configuration for webpack-dev-server
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
};