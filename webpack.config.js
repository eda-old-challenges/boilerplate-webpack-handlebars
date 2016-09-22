module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { loader: 'babel-loader', test: /\.js$/, exclude: 'node_modules' }, 
      { test: /\.hbs$/, loader: 'handlebars-loader' }
    ]
  },
  node: {
    fs: 'empty'
  },
  devtool: 'source-map'
}
