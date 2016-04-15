module.exports = {
  entry: './src/client.js',
  output: {
    filename: './public/scripts/client.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /.js?$/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};