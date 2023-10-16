let path = require('path')

let conf = {
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js',
    publicPath: '/dist/',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '.'),
    },
    client: {
      overlay: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}

module.exports = (env, options) => {
  let isProd = options.mode === 'production'
  conf.devtool = isProd ? false : 'eval-cheap-module-source-map'
  return conf
}
