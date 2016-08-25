module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/static/"
  },

  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css", ".scss"],
 
  },


  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        include: __dirname,
        query: {
          // presets: ['es2015', 'react', 'react-hmre']
          presets: ['es2015', 'react']
        }
      },

      {
        test: /\.tsx?$/,
        loaders:['ts-loader']
      },

      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }

    ],
    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  
}