var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/root.js",
  module: {
    rules:[
      {
          test:/\.js$/,
          exclude: /node_modules/,
          use: [{
              loader: "babel-loader",
              options: { 
                  presets: ["react","es2015"]
                 // plugins: []                  
               }
  
          }]

      },
      {
          test:/\.css$/,
          use:[
              {loader:'style-loader'},
              {
                  loader:'css-loader'
              }
          ]
      }
  ]},
  output: {
    path: __dirname,
    filename: "./src/bundle.js"
  },
  devServer:{
    historyApiFallback:true,
    port:9090
},
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
