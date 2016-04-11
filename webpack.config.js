module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: './src/client.jsx',
  output: {
    filename: './public/scripts/client.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /.jsx?$/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};