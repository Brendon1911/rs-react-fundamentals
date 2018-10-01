module.exports = {
  // The absolute path to the project
  context: __dirname + "/",
  // Entry point for the app
  entry: "./main.js",
  // Where to put the compiled output (Where the script tag will link to)
  output: {
    // Where it's going
    path: __dirname + "/",
    // What the file is called
    filename: "bundle.js"
  },
  // How to debug the bundle. For production I can use 'source-map'
  devtool: "eval",
  module: {
    rules: [
      {
        // Check for all .js files
        test: /\.js$/,
        // Don't include the node_modules directory in the search for .js files
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["es2015"] }
          }
        ]
      }
    ]
  }
};