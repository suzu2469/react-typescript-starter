const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
  mode: env,
  entry: {
    app: path.join(__dirname, 'src/index.tsx')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html')
    })
  ]
}