const path = require('path')
const RunNodeWebpackPlugin = require('run-node-webpack-plugin');
const config = {
  entry: {
    main: path.join(__dirname, '/../src', 'index.js')
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js'
  },
  node: {
    __dirname: false,
    __filename: false,
    global: false
  },
  resolve: {
    fallback: {
      console: require.resolve("console-browserify"),
      assert: require.resolve("assert/")
    }
  },
  plugins: [
    new RunNodeWebpackPlugin({ 
      scriptsToWatch: ['main.js'] ,
      scriptToRun: './build/main.js'
    })
  ],

}


module.exports = config